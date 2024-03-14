import streamlit as st
import pandas as pd
from pyproj import Transformer, CRS
from pyproj.database import query_crs_info



def load_data(file):
    if file.type == 'text/csv':
        return pd.read_csv(file)
    elif file.type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return pd.read_excel(file)
    else:
        st.error("Unsupported file type")
        return None

def transform_coordinates(df, x_col, y_col, in_crs, out_crs):
    try:
        in_proj = CRS.from_user_input(in_crs.split(' - ')[0])
        out_proj = CRS.from_user_input(out_crs.split(' - ')[0])

        transformer = Transformer.from_crs(in_proj, out_proj, always_xy=True)

        x_coords, y_coords = df[x_col].values, df[y_col].values
        transformed_coords = transformer.transform(x_coords, y_coords)

        df['c_longitude'], df['c_latitude'] = zip(*[(lon, lat) for lon, lat in zip(*transformed_coords)])

        return df
    except Exception as e:
        st.error(f"Error in transforming coordinates: {e}")
        return df


def get_crs_list():
    crs_list = query_crs_info()
    return [f"{crs.auth_name}:{crs.code} - {crs.name}" for crs in crs_list]

def main():
    st.title('Batch Coordinate Conversion Tool')

    uploaded_file = st.file_uploader("Upload a CSV or Excel file", type=['csv', 'xlsx'])
    if uploaded_file is not None:
        data = load_data(uploaded_file)
        if data is not None:
            st.write("Input Data:")
            st.dataframe(data)

            x_column = st.selectbox("Select X coordinate column", data.columns)
            y_column = st.selectbox("Select Y coordinate column", data.columns)

            crs_options = get_crs_list()

            input_crs = st.selectbox("Select Input Coordinate System", options=crs_options)
            output_crs = st.selectbox("Select Output Coordinate System", options=crs_options)

            if st.button('Transform'):
                result = transform_coordinates(data, x_column, y_column, input_crs, output_crs)
                st.write("Transformed Data:")
                st.write(result)

if __name__ == "__main__":
    main()

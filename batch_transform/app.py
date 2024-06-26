import streamlit as st
import pandas as pd
from pyproj import Transformer, CRS
from pyproj.database import query_crs_info

st.set_page_config(page_title="NSDI Coordinate Transformer", page_icon="🌍")


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

        df['transformed_longitude'], df['transformed_latitude'] = zip(*[(lon, lat) for lon, lat in zip(*transformed_coords)])

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
            st.dataframe(data, use_container_width =True)

            st.subheader("Select the Latitude and Longitude Columns")
            col1, col2 = st.columns(2)

            with col1:
                x_column = st.selectbox("Select X (Longitude) coordinate column", data.columns)
            
            with col2:
                y_column = st.selectbox("Select Y (Latitude) coordinate column", data.columns)

            crs_options = get_crs_list()
            
            st.subheader("Select the Input and Output Coordinate System")
            col3, col4 = st.columns(2)

            with col3:
                input_crs = st.selectbox("Select Input Coordinate System", options=crs_options)
            
            with col4:
                output_crs = st.selectbox("Select Output Coordinate System", options=crs_options)

            if st.button('Transform'):
                result = transform_coordinates(data, x_column, y_column, input_crs, output_crs)
                st.write("Transformed Data:")
                st.write(result)


if __name__ == "__main__":
    main()

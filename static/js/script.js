document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const fileContent = document.getElementById('file-content');
    const dataPreview = document.getElementById('data-preview');
    const latitudeDropdown = document.getElementById('latitude-column');
    const longitudeDropdown = document.getElementById('longitude-column');
    const changeInputCrsButton = document.getElementById('change-input-crs');
    const changeOutputCrsButton = document.getElementById('change-output-crs');
    const transformButton = document.getElementById('transform-button');
    const crsModal = document.getElementById('crs-modal');
    const crsSearchInput = document.getElementById('crs-search-input');
    const crsResults = document.getElementById('crs-results');
    const closeModal = crsModal.querySelector('.close');

    let currentCrsButton = null;

    fileInput.addEventListener('change', handleFileSelect);

    changeInputCrsButton.addEventListener('click', () => openCrsModal(changeInputCrsButton));
    changeOutputCrsButton.addEventListener('click', () => openCrsModal(changeOutputCrsButton));

    closeModal.addEventListener('click', () => crsModal.style.display = 'none');

    transformButton.addEventListener('click', transformCoordinates);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        parseFile(file);
    }

    function parseFile(file) {
        const reader = new FileReader();

        reader.onload = (event) => {
            const text = event.target.result;
            const data = parseCSV(text);
            updateDropdowns(data.headers);
            displayDataPreview(data.headers, data.rows);
        };

        reader.readAsText(file);
    }

    function parseCSV(text) {
        const lines = text.split('\n').map(line => line.split(','));
        const headers = lines[0].map(header => header.trim());
        const rows = lines.slice(1);

        return { headers, rows };
    }

    function updateDropdowns(headers) {
        clearDropdown(latitudeDropdown);
        clearDropdown(longitudeDropdown);

        headers.forEach(header => {
            const option = document.createElement('option');
            option.value = header;
            option.textContent = header;
            latitudeDropdown.appendChild(option.cloneNode(true));
            longitudeDropdown.appendChild(option);
        });
    }

    function clearDropdown(dropdown) {
        while (dropdown.firstChild) {
            dropdown.removeChild(dropdown.firstChild);
        }
    }

    function displayDataPreview(headers, rows) {
        fileContent.style.display = 'block';
        dataPreview.innerHTML = '<table class="table w-full"><thead><tr></tr></thead><tbody></tbody></table>';
        const tableHead = dataPreview.querySelector('thead tr');
        const tableBody = dataPreview.querySelector('tbody');

        headers.forEach(header => {
            let th = document.createElement('th');
            th.textContent = header;
            tableHead.appendChild(th);
        });

        rows.slice(0, 10).forEach(row => { // Show first 10 rows for preview
            let tr = document.createElement('tr');
            row.forEach(cell => {
                let td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tableBody.appendChild(tr);
        });
    }

    function openCrsModal(button) {
        currentCrsButton = button;
        crsModal.style.display = 'block';
    }

    function transformCoordinates() {
        const selectedLatColumn = latitudeDropdown.value;
        const selectedLongColumn = longitudeDropdown.value;

        console.log(`Transforming coordinates from ${selectedLatColumn} and ${selectedLongColumn}`);
        // Transformation logic goes here
    }

    // Add event listeners for CRS modal search and selection here
});

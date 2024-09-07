// Dynamically import fetch
async function loadFetch() {
    const { default: fetch } = await import('node-fetch');
    return fetch;
}

async function fetchSheetData() {
    const fetch = await loadFetch();
    const spreadsheetId = '';
    const range = 'Sheet1!A2:T';
    const apiKey = '';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

    try {
        console.log(url);
        const response = await fetch(url);
        console.log(response);

        const data = await response.json();
        return data.values;  // This returns an array of arrays, each representing a row of data
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
}

module.exports = { fetchSheetData };

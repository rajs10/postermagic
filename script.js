const url = 'http://localhost:5000';

const fetchDataFromBackend = async () => {
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    console.log(data);
}

await fetchDataFromBackend();
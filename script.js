const url = 'http://localhost:5000';



const fetchDataFromBackend = async () => {
    const response = await fetch('http://localhost:3000');
    var paramValue = getParameterByName('paramName');
            if (paramValue) {
                // Do something with the parameter value
                console.log(paramValue);
            }
    const data = await response.json();
    console.log(data);
}

await fetchDataFromBackend();
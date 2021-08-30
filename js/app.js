function loadData() {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText == '') {
        alert('Search with a city name');
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=347e32eff1db14c3e6b2b798d2170f56`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if(data.cod != 404) {
                    const weather = capitalize(data.weather[0].description);
                    const city = capitalize(searchText);
                    const temp = Math.round(data.main.temp - 273.16) + '°C';
                    displayResults(city, weather, temp);
                }
                else{
                    alert('Enter a valid city name');
                }
            })
            .catch(() => {
                alert('Give some valid name');
            })
    }
}

function capitalize(text) {
    return text[0].toUpperCase() + text.slice(1);
}

function displayResults(city, weather, temp) {
    const details = document.getElementById('details');
    details.textContent = '';
    details.innerHTML = `
    <h1>${city}</h1>
    <h2>${weather}</h2>        
    <h2>${temp}</h2>
    `;
}
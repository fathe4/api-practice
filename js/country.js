const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countryData => {
    // console.log(countryData);
    const countryId = document.getElementById('countries')
    countryData.forEach(country => {
        // console.log(country);
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p>capital is ${country.capital}</p>
        <button onclick='loadCountryByName("${country.name}")'>Details</button>
        `;
        countryId.appendChild(div)
    });
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]));
}

const countryDetails = details => {
    console.log(details);
    const countryDetailsDiv = document.getElementById('country-details');
    countryDetailsDiv.innerHTML = `
        <h2>${details.name}</h2>
        <p>Population: ${details.population} </p>
        <img width="150px" src='${details.flag}'>
        `
}



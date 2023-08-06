// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd460d9aebmsh36511ebdd164ff7p1a1d1cjsnefe6867f1e2f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
//     console.log(result);
    // cloud_pct.innerHTML = response.cloud_pct;
    // temp.innerHTML = response.temp;
    // feels_like.innerHTML = response.feels_like;
    // humidity.innerHTML = response.humidity;
    // min_temp.innerHTML = response.min_temp;
    // max_temp.innerHTML = response.max_temp;
    // wind_speed.innerHTML = response.wind_speed;
    // wind_degrees.innerHTML = response.wind_degrees;
    // sunrise.innerHTML = response.sunrise;
    // sunset.innerHTML = response.sunset;
// } catch (error) {
// 	console.error(error);
// }
const getWeather = (city) => {

    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then(response => {
        console.log(response);
        cloud_pct.innerHTML = response.cloud_pct;
        temp.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        var risestamp = response.sunrise;
        console.log(sunrise)
        var sunrises = new Date(risestamp * 1000);
        sunrise.innerHTML = sunrises.getHours() + ":" + sunrises.getMinutes() + " am";
        var setstamp = response.sunset;
        var sunsets = new Date(setstamp * 1000);
        sunset.innerHTML = sunsets.getHours() + ":" + sunsets.getMinutes() + " pm";
        })
        .catch(err => {
            console.error(err)
        });
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Hyderabad")
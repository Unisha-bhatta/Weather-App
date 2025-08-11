document.getElementById('get-weather').addEventListener('click',()=>{/* ()=>{} is called annonymous arrow function in js*/
    const location = document.getElementById('city-input').value.trim();
    if(!location){
        alert('please enter a city name');
        return;
    }
    const apiKey = "52bc14bf1df3f5a9d620a61de21f4a2d";
    const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`  /* this form is called template literal */
    fetch(url).then(response=>response.json()).then(data=>{
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML=`
        <h2>${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <p>Humidity: ${data.current,humidity}%</p>
        <p>Humidity: ${data.current.wind_kph} km/h</p>
        `
    })
}) .catch(error=>{
    console.error('Error fetching weather data: ', error);
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML=`
    <p>Error fetching weather data. Please try again. </p>
    `
})

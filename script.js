let userInput = document.getElementById('user-input');
let weatherInfo = document.getElementById('weather-info');
let place = document.getElementById('location');
let temp = document.getElementById('temperature');
let weatherImg = document.getElementById('weather-img');
let temperatureSymbol = '°C';

const weatherSearch = () => {
    if (userInput.value != "") {
        // showData
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput.value}&appid=3a3889c26f1720909e432c26688d03aa&units=metric&cnt=1`).then(res => res.json()).then(data => {
            if (data.cod == 200) {
                let weatherImgInfo = data.list[0].weather[0].icon;
                let weatherTemperature = data.list[0].main;
                let weatherLocation = data.city.name;
                let weatherInformation = data.list[0].weather[0].main;

                weatherImg.src = `https://openweathermap.org/img/wn/${weatherImgInfo}@2x.png`;
                temp.innerText = `${weatherTemperature.temp} ${temperatureSymbol}`;
                place.innerText = weatherLocation;
                weatherInfo.innerText = weatherInformation;
            }
            else {
                alert('Location Not Found')
            }
        })
    }
    if (userInput.value == '') {
        // showAlert
        alert('Please input a locatio name!')
    }
}
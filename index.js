let weather = {  //variable declaration
    apiKey: "7b5e00ee38d10789bf004f38b307eb66",
    fetchWeather : function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey  // is going to fetch data from fetchweather function
        
        )
        .then ((response) => response.json())
        .then ((data) => this.displayWeather(data));

    
    
},
displayWeather: function(data) {  // extracting from the json file and changing object into a variable so that its updated
const { name } = data;
const { icon, description } = data.weather [0]; // cannot destructure property from an array hence 0
const { temp, humidity } = data.main;  //creating ref to parent array obj
const { speed } = data.wind;

document.querySelector(".city").innerText = "Weather in " + name;
document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon + ".png";
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText =  temp + "°C " ;

document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage = 
"url('https://source.unsplash.com/1600x900/?" + name + " ' )";

},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
}

};
document 
.querySelector(".search button")
.addEventListener("click",function (){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search();
    }
}); 
weather.fetchWeather("Denver");

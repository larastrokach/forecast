
const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "4aaaef98e957e0605f907e2771875ef2"
 }
 
 const input = document.querySelector("#input");
 input.addEventListener("keypress", enter);
 
 function enter(e) {
    if (e.keyCode === 13) {
       getInfo(input.value);
    }
 }
 
 async function getInfo(data) {
    const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
 }
 
 function displayResult(result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;
 
    getOutDate();
    let temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(result.main.temp)} <span>º</span> `
 
    let feelsLike = document.querySelector("#feelsLike");
    feelsLike.innerHTML =  "Feel likes: " + `${Math.round (result.main.feels_like)} <span>º</span>`;
 
    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].description}`;
 
    let variation = document.querySelector("#variations");
    variation.innerHTML = "Min: " + `${Math.round(result.main.temp_min)}  <span>º</span>` + " " + "Max: " + `${Math.round(result.main.temp_max)}  <span>º</span>`;
 }
 
 function getOutDate() {
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 
    let day = days[myDate.getDay()];
    let todayDate = myDate.getDate();
    let month = months[myDate.getMonth()];
    let year = myDate.getFullYear();
    let showDate = document.querySelector("#date");
    showDate.textContent = `${day}` + " " + `${todayDate}` + " " + `${month}` + " " + `${year}`
 }

particlesJS("particles-js", {
   "particles": {
     "number": {
       "value": 280,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#FFBF00"
     },
     "shape": {
       "type":"image",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "https://cdn.glitch.global/01f0739d-f3d2-43cf-a1cb-7ad1d26af5f3/o.png?v=1670187744322",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 4,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 120,
       "color": "#FFBF00",
       "opacity": .2,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 3,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "bounce": false,
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "grab"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 140,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200,
         "duration": 0.4
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true
 });
 


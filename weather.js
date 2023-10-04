const countriesContainer = document.querySelector(".countries");
const renderCountryy = function (data) {
  const html = `<article class="country "  >
    
    <div class="country__data">
      <h3 class="country__name"><span>🌞</span>${data.name} ${Math.ceil(
    data.main.temp
  )}🌡</h3>
      
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
const requuest = function (city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=0416a248814dbfb74447c566ee1b3278`
  )
    .then(function (response) {
      //console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.main.temp);
      renderCountryy(data);
    });
};
requuest("ankara");

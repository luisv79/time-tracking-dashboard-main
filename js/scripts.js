

  
  let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)',
  ]

  let dailyArray = [];
  let weeklyArray = [];
  let monthlyArray = [];
  let data = [];

    

  let dailyBtn = document.querySelector('#daily');
  let weeklyBtn = document.querySelector('#weekly');
  let monthlyBtn = document.querySelector('#monthly');
  let sectionDatos = document.querySelector('.datos');

  
  fetch('data.json')
  .then(response => response.json())
  .then(jsonData => {
    data = jsonData;
    dailyArray = data.map(item => item.timeframes.daily);
    weeklyArray = data.map(item => item.timeframes.weekly);
    monthlyArray = data.map(item => item.timeframes.monthly);
    dibujarElementos(dailyArray);
  })
  .catch(error => console.error('Error fetching data:', error));

 


  dailyBtn.addEventListener('click', ()=>{
    dibujarElementos(dailyArray)
  });
  
  weeklyBtn.addEventListener('click', ()=>{
    dibujarElementos(weeklyArray)
  });

  monthlyBtn.addEventListener('click', ()=>{
    dibujarElementos(monthlyArray)
  });


  function dibujarElementos(array) {
    sectionDatos.innerHTML = '';
    array.forEach((element, index) => {
      let title = data[index].title;
      let titleLowerCase = title.toLowerCase().replace(' ', '-');
      
      sectionDatos.innerHTML += `
      <div class="datos__card">
        <div class="datos__card--fondo" style="background-color: ${bgColors[index]};">
          <img src="./images/icon-${titleLowerCase}.svg" alt="">
        </div>
        <div class="datos__datalles">
          <div class="datos__actividad">
            <p>${title}</p>
            <img src="./images/icon-ellipsis.svg" alt="">
          </div>
          <div class="datos__horas">
            <p class="datos__horas--hora">${element.current}hrs</p>
            <p class="datos__horas--dato">Previous - ${element.previous}hrs</p>
          </div>
        </div>
      </div>
      `;
    });
  }


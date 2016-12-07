'use strict';
console.log('JS linked');

(() => {
  console.log('DOM ready');
  // Create variables for the button and input box to be referenced later
  const button = document.querySelector('button');
  const input = document.querySelector('input');
  const ctx = document.querySelector('#zip-graph').getContext('2d');

  // function renderGraph(chart, data) { //passing the chart (from ctx) and data
  //   const days = data.list.map(u => u.dt_txt);
  //   const amount = data.list.map(u => u.main.temp);
  //   const data = {
  //     labels: days, //x-axis, from the times array above
  //     datasets: [
  //       {
  //         label: 'Temperature',
  //         fill: false,
  //         borderColor: '#529ee8',
  //         data: amount //y-axis, come from times array
  //       }
  //     ]
  //   };
  //   const options = {
  //       scales: {
  //         yAxes: [{
  //           scaleLabel: {
  //             display: true,
  //             labelString: '# vehicles' //label for y-axis
  //           }
  //         }],
  //         xAxes: [{
  //           scaleLabel: {
  //             display: true,
  //             labelString: 'Days' //label for the x-axis
  //           }
  //         }]
  //       }
  //     };
  //   const carsChart = new Chart(chart, { //create an instance of Chart
  //     type: 'line',
  //     options, //same thing as options: options
  //     data
  //   });
  // }

  function search(zip) {
    const zipInput = parseInt(input.value);
    // console.log('this is the inp. value ', zipInput);
    // `/api?cityName=${city}` --> sending a fetch to our own /api route
    fetch(`/api?zip=${zipInput}`)
    .then(r => r.json())
    .then((data) => {
      console.log('this is data in script.js ', data)
      document.querySelector("#selectedZip").innerHTML = `Your selected zip is: ${zipInput}`
      // document.querySelector('#zip-code').textContent = data.zip.name; //also works with innerText
      // console.log('data is ', data);
      // renderGraph(ctx, data); //here we call the renderGraph function, adding the info from the API
    })
    .catch((err) => console.log(err));
  }
  // Create an event listener for clicking the button that makes a fetch and then
  // renders the data to a graph using Chart.js
  // document.querySelector('srchbtn').addEventListener('click', (event) => {
  //   search(input.value); //calling the value from the input box saved in const
    // it will be passed as the argument for searchCity function
    button.addEventListener('click', (event) => {
      search(input.value);
      // console.log('clicked');
    });

  // Create an event listener for the input box that listens for a keypress
  // so we can search on the enter key as well as clicking the button
  // input.addEventListener('keypress', (event) => {
  //   if(event.keyCode === 13 || event.which === 13) {
  //     searchCity(input.value);
  //     // console.log('Enter pressed');
  //   }
  // });
  // things to select: name (Object.zip) / time (Obj.list[i].dt_txt) / Temp (Obj.list[i].main.temp)

})();

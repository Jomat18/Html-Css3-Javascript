
function chartApp() {
    let myChart = document.getElementById('myChart2').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Lato';
    Chart.defaults.global.defaultFontSize = 18;
    Chart.defaults.global.defaultFontColor = '#777';

    let data = new Chart(myChart, {
        type: 'doughnut' , // radar line horizontalBar pie bar 
        data: {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambrige', 'New York'],
            datasets: [{
                label: 'Population',
                data: [
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 255, 0.6)',
                    'rgba(78, 199, 86, 0.6)',
                    'rgba(126, 99, 100, 0.6)',
                    'rgba(155, 99, 32, 0.6)',
                    'rgba(255, 89, 32, 0.6)'
                ],
                borderWidth: 2,
                borderColor: '#777',
                hoverBorderWidth: 3,
                hoverBorderColor: '#000'
            }]
        },
        options:{
            title: {
                display: true,
                text: 'Graphic',
                fontSize: 25 
            },
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: '#000'    
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    botton: 0,
                    top: 0
                }
            },
            tooltips: {
                enabled: true
            }
        }
    });
}

chartApp();
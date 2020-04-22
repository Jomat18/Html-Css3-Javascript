
async function chartCsv() {
    const data = await getData();
    let myChart = document.getElementById('myChart1').getContext('2d');

    let chart = new Chart(myChart, {
        type: 'line' , 
        data: {
            labels: data.xs,
            datasets: [{
                label: 'Temperature',
                data: data.ys,
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            callback: function(value, index, values) {
                                return value + '°';
                            } 
                        }
                    }
                ]
            }
        }
    });
}

async function getData() {
    const xs = [];
    const ys = [];

    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();

    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const year = columns[0];
        xs.push(year);
        const temp = columns[1];
        ys.push(parseFloat(temp) + 14);
        console.log(year, temp);
    });

    return { xs, ys };
}

chartCsv();

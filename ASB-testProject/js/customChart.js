var YEARS = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
var config = {
    type: 'line',
    data: {
        labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        datasets: [{
            label: '',
            data: [
                0,
                2,
                2,
                5,
                10,
                9,
                10,
                19,
                20
            ],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: ''
        },
        layout:{
            padding:{
                left: 0,
                right:0,
                top:20,
                bottom:0,
            }
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            enabled:false,
            custom: function(tooltipModel) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = '<div></div>';

                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var bodyLines = tooltipModel.body.map(getBody);
                    var innerHtml = '<p style="color: rgb(90, 170, 199);">';
                        
                    bodyLines.forEach(function(body, i) {
                        var span = '<span >'+body+ ' млн слов'+'</span>';
                        innerHtml += '' + span ;
                    });
                    innerHtml += '</p>';

                    var tableRoot = tooltipEl.querySelector('div');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = this._chart.canvas.getBoundingClientRect();

                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + window.pageXOffset + -98 + tooltipModel.caretX + 'px';
                tooltipEl.style.top = position.top + window.pageYOffset + -27 + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = 'Roboto';
                tooltipEl.style.fontSize = '12px';
                tooltipEl.style.textTransform = 'uppercase';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.pointerEvents = 'none';
            },
        },
        elements:{
            point:{
                pointStyle: 'circle',
                backgroundColor: '#f9704f',
                borderWidth: 0,
                radius: 4,
                borderColor: '#f9704f',
                hoverRadius: 5,
                hoverBorderWidth: 0,
            },
            line:{
                borderColor: '#5076af',
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                
                scaleLabel: {
                    display: true,
                    // labelString: 'Year'
                    
                },
                gridLines:{
                    display: false,
                    
                },
                ticks:{
                    padding: 15,
                    fontColor: '#b9b7b7',
                    fontFamily: "'Roboto', sans-serif",
                    fontSize: '12',
                    
                }
            }],
            yAxes: [{
                display: false,
                type: 'logarithmic',
                scaleLabel: {
                    display: false,
                    labelString: 'Value',
                    
                },
                ticks:{
                    beginAtZero: true,
                }
            }]
        },
        legend:{
            display:false
        },
    }
};

window.onload = function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = new Chart(ctx, config);
};
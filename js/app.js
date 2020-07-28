window.onload = function () {
    var ctx1 = document.getElementById("7days").getContext("2d");
    fetch('https://s3-ap-southeast-2.amazonaws.com/speedtest.damitha.xyz/data/7days.json')
        .then(response => response.json())
        .then(d => {
            var myChart = new Chart(ctx1, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Weekly SpeedTest Results(Mbps)',
                        data: d.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distribution: 'linear'
                        }]
                    },
                    elements: {
                        point:{
                            radius: 1
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(tooltipItem, data) {
                                //Return value for title
                                return tooltipItem.xLabel;
                            },
                            label: function(tooltipItem, data) {
                                return Number(tooltipItem.yLabel) + ' Mbps ' + moment(tooltipItem.xLabel).format('DD/MM HH:mmA')
                            }
                        }
                    }  
                }
            });
        });

    var ctx2 = document.getElementById("30days").getContext("2d");
    fetch('https://s3-ap-southeast-2.amazonaws.com/speedtest.damitha.xyz/data/30days.json')
        .then(response => response.json())
        .then(d => {
            var myChart = new Chart(ctx2, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Monthly SpeedTest Results(Mbps)',
                        data: d.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distribution: 'linear'
                        }]
                    },
                    elements: {
                        point:{
                            radius: 1
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(tooltipItem, data) {
                                //Return value for title
                                return tooltipItem.xLabel;
                            },
                            label: function(tooltipItem, data) {
                                return Number(tooltipItem.yLabel) + ' Mbps ' + moment(tooltipItem.xLabel).format('DD/MM HH:mmA')
                            }
                        }
                    }  
                }
            });
        });

        var ctx3 = document.getElementById("7daysping").getContext("2d");
    fetch('https://s3-ap-southeast-2.amazonaws.com/speedtest.damitha.xyz/data/7days-ping.json')
        .then(response => response.json())
        .then(d => {
            var myChart = new Chart(ctx3, {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Weekly Ping Packet Loss',
                        data: d.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        xAxes: [{
                            type: 'time',
                            distribution: 'linear'
                        }],
                        yAxes: [{
                            type: 'logarithmic',
                            distribution: 'linear'
                        }]
                    },
                    elements: {
                        point:{
                            radius: 1
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(tooltipItem, data) {
                                //Return value for title
                                return tooltipItem.xLabel;
                            },
                            label: function(tooltipItem, data) {
                                return Number(tooltipItem.yLabel) + '% ' + moment(tooltipItem.xLabel).format('DD/MM HH:mmA')
                            }
                        }
                    }  
                }
            });
        });


};



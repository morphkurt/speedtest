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
    fetch('https://s3-ap-southeast-2.amazonaws.com/speedtest.damitha.xyz/data/30day-matrix.json')
        .then(response => response.json())
        .then(d => {
            new Chart(ctx2, {
				type: 'matrix',
				data: {
					datasets: [{
						label: 'My Matrix',
						data: d.data,
						backgroundColor: function(ctx) {
							var value = ctx.dataset.data[ctx.dataIndex].v;
                            var alpha = 1 - ((value - 5) / 45);
                            
							return Color('#e6550d').alpha(alpha).rgbString();
						},
						borderColor: function(ctx) {
							var value = ctx.dataset.data[ctx.dataIndex].v;
							var alpha = 1- ((value - 5) / 45);
							return Color('#e6550d').alpha(alpha).rgbString();
						},
						borderWidth: {left: 1, right: 1},
						width: function(ctx) {
							var a = ctx.chart.chartArea;
							return (a.right - a.left) / 30;
						},
						height: function(ctx) {
							var a = ctx.chart.chartArea;
							return (a.bottom - a.top) /26;
						}
					}]
				},
				options: {
					legend: {
						display: true
					},
					tooltips: {
						callbacks: {
							title: function() { return '';},
							label: function(item, data) {
								var v = data.datasets[item.datasetIndex].data[item.index];
								return ["Day: " + v.x, "Hour: " + v.y, "BW: " + v.v + "Mbps"];
							}
						}
					},
					scales: {
						xAxes: [{
							type: 'time',
							offset: true,
							time: {
                                unit: 'day',
                                min: '2020-07-01',
							},
							ticks: {
							},
							gridLines: {
								display: false
							}
						}],
						yAxes: [{
                            type: 'time',
                            offset:true,
							position: 'right',
							labels: ['08:00', '12:00', '16:00'],
							time: {
								unit: 'hour',
								parser: 'HH:mm',
								min: '00:00',
								max: '23:00',
								displayFormats: {
									hour: 'HH'
								}
							},
							ticks: {
								source: 'labels',
								reverse: false
							},
							gridLines: {
								display: false
							}
						}]
					}
				}
			})
        });

        var ctx3 = document.getElementById("7daysping").getContext("2d");
    fetch('https://s3-ap-southeast-2.amazonaws.com/speedtest.damitha.xyz/data/7days-ping.json')
        .then(response => response.json())
        .then(d => {
            var myChart = new Chart(ctx3, {
                type: 'bar',
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
                                return Number(tooltipItem.yLabel).toFixed(2) + '% ' + moment(tooltipItem.xLabel).format('DD/MM HH:mmA')
                            }
                        }
                    }  
                }
            });
        });


};



document.addEventListener("DOMContentLoaded", function () {
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: false,
                dataLabels: {
                    position: 'bottom'
                }
            }
        },
        series: [{
            name: 'Valores',
            data: [
                { x: 'Contas Alcançadas', y: 1054526 },
                { x: 'Visualizações', y: 1012100 },
                { x: 'Impressões', y: 1514657 },
                { x: 'Novos Seguidores', y: 6130 }
            ]
        }],
        xaxis: {
            categories: ['Contas Alcançadas', 'Visualizações', 'Impressões', 'Novos Seguidores'],
            labels: {
                style: {
                    colors: '#000'
                }
            },

        },
        yaxis: {
            labels: {
                show: false,
            }
        },
        colors: ['#4e5873', '#6c778c', '#797f8d', '#bfc7d9'],
        stroke: {
            show: true,
            width: 1,
            colors: ['#bfc7d9', '#797f8d', '#6c778c', '#4e5873']
        },
        dataLabels: {
            enabled: true,
            offsetY: 50,
            formatter: function (val) {
                if (val >= 1000) {
                    return (val / 1000).toFixed(1).replace('.', ',') + 'k';
                } else {
                    return val.toString().replace('.', ',');
                }
            },
            style: {
                fontSize: '13px',
                colors: ['black']
            }
        },
        title: {
            text: 'Estatísticas do Instagram nos últimos 90 dias',
            align: 'center',
            floating: true,
            style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#4e5873'
            }
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val.toLocaleString('pt-BR');
                }
            },
            marker: {
                show: false
            },
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                const data = w.config.series[seriesIndex].data[dataPointIndex];
                return `
                    <div class="custom-tooltip">
                        <strong>${data.x}</strong><br>
                        Valor: ${data.y.toLocaleString('pt-BR')}
                    </div>
                `;
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

});

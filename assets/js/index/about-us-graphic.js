document.addEventListener("DOMContentLoaded", function () {
    const options = {
        chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false,
            },
        },
        series: [
            {
            name: 'Estatísticas',
            data: [1054526, 1014237, 1514657],
        }],
        xaxis: {
            categories: ['Contas Alcançadas', 'Visualizações', 'Impressões'],
        },
        colors: ['#797f8d'],
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 4,
            },
        },
        dataLabels: {
            enabled: true,
        },
        title: {
            text: 'Estatísticas do Instagram',
            align: 'center',
            style: {
                fontSize: '18px',
                fontWeight: 'bold',
            },
        }
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
});

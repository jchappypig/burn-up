$(function () {
    $('#container').highcharts({
        title: {
            text: 'Digital Team Burn Up Chart',
            x: -20 //center
        },
        xAxis: {
            categories: ['Mid APR', 'Early MAY', 'Mid MAY', 'Early JUN', 'Mid JUN']
        },
        yAxis: {
            title: {
                text: 'Points'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°C'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Milli',
            data: [20, 41, 65, 101]
        }, {
            name: 'LM Marketing',
            data: [5, 7, 11, 15]
        }, {
            name: 'LM Lead',
            data: [0, 0, 4, 5]
        }, {
            name: 'Home Now',
            data: [11, 33, 42, 56]
        }, {
            name: 'Base Line',
            data: [40, 80, 120, 160]
        }, {
            name: 'Total',
            data: [36, 81, 122, 177]
        }]
    });
});

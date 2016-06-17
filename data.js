$(function () {
    $('#container').highcharts({
        chart: {
            type: 'column'
        },

        title: {
            text: 'Digital Team Velocity Chart'
        },

        xAxis: {
            categories: ['Mid APR', 'Early MAY', 'Mid MAY', 'Early JUN', 'Mid JUN']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Points'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'Milli',
            data: [20, 21, 24, 36, 0],
            stack: 'actual'
        }, {
            name: 'LM Marketing',
            data: [5, 2, 4, 4, 0],
            stack: 'actual'
        }, {
            name: 'LM Lead',
            data: [0, 0, 4, 1, 0],
            stack: 'actual'
        }, {
            name: 'HomeNow',
            data: [11, 22, 9, 14, 0],
            stack: 'actual'
        }, {
            name: 'Added',
            data: [0, 0, 0, 24, 0],
            stack: 'planed'
        }, {
            name: 'Expected',
            data: [0, 0, 0, 60, 0],
            stack: 'planed'
        }]
    });
});

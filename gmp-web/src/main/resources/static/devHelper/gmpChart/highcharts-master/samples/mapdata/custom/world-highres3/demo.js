// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['fo', 0],
    ['um', 1],
    ['us', 2],
    ['jp', 3],
    ['sc', 4],
    ['nz', 5],
    ['in', 6],
    ['kr', 7],
    ['fr', 8],
    ['fm', 9],
    ['cu', 10],
    ['cn', 11],
    ['pt', 12],
    ['sw', 13],
    ['sh', 14],
    ['br', 15],
    ['ec', 16],
    ['au', 17],
    ['ki', 18],
    ['ph', 19],
    ['mx', 20],
    ['es', 21],
    ['bu', 22],
    ['mv', 23],
    ['sp', 24],
    ['gb', 25],
    ['gr', 26],
    ['as', 27],
    ['dk', 28],
    ['gl', 29],
    ['gu', 30],
    ['mp', 31],
    ['pr', 32],
    ['vi', 33],
    ['ca', 34],
    ['st', 35],
    ['tz', 36],
    ['ar', 37],
    ['cv', 38],
    ['dm', 39],
    ['nl', 40],
    ['ye', 41],
    ['jm', 42],
    ['ws', 43],
    ['om', 44],
    ['vc', 45],
    ['tr', 46],
    ['bd', 47],
    ['sb', 48],
    ['lc', 49],
    ['nr', 50],
    ['no', 51],
    ['kn', 52],
    ['bh', 53],
    ['to', 54],
    ['fi', 55],
    ['id', 56],
    ['mu', 57],
    ['se', 58],
    ['tt', 59],
    ['my', 60],
    ['bs', 61],
    ['pw', 62],
    ['ir', 63],
    ['tv', 64],
    ['mh', 65],
    ['cl', 66],
    ['th', 67],
    ['gd', 68],
    ['ee', 69],
    ['ag', 70],
    ['tw', 71],
    ['bb', 72],
    ['it', 73],
    ['mt', 74],
    ['pg', 75],
    ['de', 76],
    ['vu', 77],
    ['gq', 78],
    ['cy', 79],
    ['km', 80],
    ['fj', 81],
    ['ru', 82],
    ['ug', 83],
    ['va', 84],
    ['sm', 85],
    ['kz', 86],
    ['az', 87],
    ['am', 88],
    ['tj', 89],
    ['ls', 90],
    ['uz', 91],
    ['ma', 92],
    ['co', 93],
    ['tl', 94],
    ['kh', 95],
    ['sa', 96],
    ['pk', 97],
    ['ae', 98],
    ['ke', 99],
    ['pe', 100],
    ['do', 101],
    ['ht', 102],
    ['ao', 103],
    ['mz', 104],
    ['pa', 105],
    ['cr', 106],
    ['sv', 107],
    ['bo', 108],
    ['hr', 109],
    ['bz', 110],
    ['za', 111],
    ['ly', 112],
    ['sd', 113],
    ['cd', 114],
    ['kw', 115],
    ['er', 116],
    ['ie', 117],
    ['kp', 118],
    ['ve', 119],
    ['gy', 120],
    ['hn', 121],
    ['mm', 122],
    ['ga', 123],
    ['ni', 124],
    ['mw', 125],
    ['sx', 126],
    ['tm', 127],
    ['zm', 128],
    ['nc', 129],
    ['mr', 130],
    ['dz', 131],
    ['lt', 132],
    ['et', 133],
    ['so', 134],
    ['gh', 135],
    ['si', 136],
    ['gt', 137],
    ['ba', 138],
    ['jo', 139],
    ['mc', 140],
    ['al', 141],
    ['uy', 142],
    ['cnm', 143],
    ['mn', 144],
    ['rw', 145],
    ['cm', 146],
    ['cg', 147],
    ['eh', 148],
    ['rs', 149],
    ['me', 150],
    ['bj', 151],
    ['ng', 152],
    ['tg', 153],
    ['af', 154],
    ['ua', 155],
    ['sk', 156],
    ['jk', 157],
    ['bg', 158],
    ['qa', 159],
    ['li', 160],
    ['at', 161],
    ['sz', 162],
    ['hu', 163],
    ['ro', 164],
    ['lu', 165],
    ['ad', 166],
    ['ci', 167],
    ['lr', 168],
    ['bn', 169],
    ['be', 170],
    ['iq', 171],
    ['ge', 172],
    ['gm', 173],
    ['ch', 174],
    ['td', 175],
    ['kv', 176],
    ['lb', 177],
    ['dj', 178],
    ['bi', 179],
    ['sr', 180],
    ['il', 181],
    ['ml', 182],
    ['sn', 183],
    ['gw', 184],
    ['gn', 185],
    ['zw', 186],
    ['pl', 187],
    ['mk', 188],
    ['py', 189],
    ['by', 190],
    ['lv', 191],
    ['sy', 192],
    ['bf', 193],
    ['ne', 194],
    ['na', 195],
    ['tn', 196],
    ['kg', 197],
    ['md', 198],
    ['ss', 199],
    ['cf', 200],
    ['bw', 201],
    ['sg', 202],
    ['vn', 203],
    ['sl', 204],
    ['mg', 205],
    ['is', 206],
    ['eg', 207],
    ['lk', 208],
    ['np', 209],
    ['la', 210],
    ['cz', 211],
    ['bt', 212]
];

// Create the chart
Highcharts.mapChart('container', {
    chart: {
        map: 'custom/world-highres3'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/custom/world-highres3.js">World, Miller projection, ultra high resolution</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});
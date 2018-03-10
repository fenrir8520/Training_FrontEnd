console.log('早く書けよ');

var array1 = [
    {
        person: '夏目漱石',
        title: '我が輩は猫である'
    },
    {
        person: '福沢諭吉',
        title: '天は人の上に人を創らず'
    },
    {
        person: '宮沢賢治',
        title: '雨にも負けず、風にも負けず'
    },
    {
        person: '太宰治',
        title: '羅生門'
    }
];

+function () {
    var date = new Date();
    var year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();
    console.log(year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2));
}();

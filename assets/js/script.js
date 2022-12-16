ar userInputM = $('#userEntry');
var userInputD = $('#birthDay');
// var apiURL = 'https://aztro.sameerkumar.website/?sign=aries&day=today'
$('#submit').click(function () {
    var selection = userInputM.val();
    var url = 'https://aztro.sameerkumar.website?sign=';
    var date = '&day=today';
    console.log(selection)
    if(selection !== 'virgo' && selection !== 'leo' && selection !== 'cancer' && selection !== 'taurus' && selection !== 'scorpio' && selection !== 'sagittarius' && selection !== 'aries' && selection !== 'pisces' && selection !== 'aquarius' && selection !== 'libra') {
        alert('no dice')
    } else {
    fetch(url + selection + date, {
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            const date = data.current_date;
            console.log(data);
        });
    }
})
// function collectInfo() {
//     var textDate = $('dataText')
//     const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
//     fetch(URL, {
//         method: 'POST'
//     })
//         .then(response => response.json())
//         .then(json => {
//             const date = json.current_date;
//             console.log(date);
//         });
// }
collectInfo()
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    e.preventDefault();

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate() + '::' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    var nameInput = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var send_message = date + '%0A%0A<b>Name:</b> ' + nameInput + '%0A<b>Message:</b> ' + message;

    var bot_token = '2010375335:AAHGC-b-Db6iIwiulIjAu2uMEZQan-XhHKo';
    var chat_id = 788765432;
    var url = 'https://api.telegram.org/bot' + bot_token + '/sendMessage?chat_id=' + chat_id + '&text=' + send_message + '&parse_mode=html';

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    // xhttp.onload

    xhttp.send();

});
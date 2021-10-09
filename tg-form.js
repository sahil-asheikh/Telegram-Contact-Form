document
  .querySelector("form.pure-form")
  .addEventListener("submit", function (e) {
    // to prevent
    e.preventDefault();

    // to get date and time
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "::::" +
      today.getHours() +
      "-" +
      today.getMinutes() +
      "-" +
      today.getSeconds();

    // to get input values
    var nameInput = document.getElementById("name").value;
    var input_message = document.getElementById("message").value;
    var message = input_message.replace(/(\r\n|\n|\r|\n|\t)/gm, " "); //remove those line breaks for textarea

    var send_message =
      date +
      "%0A%0A<b>Name:</b> " +
      nameInput +
      "%0A<b>Message:</b> " +
      message;

    // declearing bot token and chat id
    var bot_token = "2010375335:AAHGC-b-Db6iIwiulIjAu2uMEZQan-XhHKo"; // bot token
    var chat_id = 788765432; // my chat id

    // creating url using bot token, chat id and message
    var url =
      "https://api.telegram.org/bot" +
      bot_token +
      "/sendMessage?chat_id=" +
      chat_id +
      "&text=" +
      send_message +
      "&parse_mode=html";

    // creating request
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    // loading while sending the message
    // xhttp.onload

    // success or error message while sending the message
    xhttp.send();
  });

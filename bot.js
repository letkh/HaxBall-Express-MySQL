var room = HBInit({
  roomName: "Express TEST",
  maxPlayers: 16,
  noPlayer: true, // Remove host player (recommended!)
  token: "",
});

let mysql_url = "http://localhost:3333/mysql"

function MySqlRequest(url, method, body) {
    return fetch(url, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    })
}

function test() {
    MySqlRequest(mysql_url, 'POST', {'mode':'test'}).then(
        function(res) {
            if (res.status !== 200) {
                console.log('Failed test - Status Code: ' + res.status)
            } else {
                res.json().then(function(data) {
                    ;
                })
            }
        }
    ).catch(function(err) {
        console.log('Fetch Error :-S', err);
    })
}

room.onPlayerChat = function(player, message) {
    if (message == 'test') {
        test();
    }
}
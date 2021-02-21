function makeMQTTRequest(when, minute, hours) {
  var client = mqtt.connect("ws://10.2.75.239:8080");

  if(when == 'now') {
    client.on('connect', function() {
      client.publish('coffee/state', 'state = ON')
    })
  }
  else {
    var currentTime = new Date().getTime() / 1000;
    var targetTime = currentTime + minute * 60 + hours * 60 * 60;
    client.on('connect', function() {
      client.publish('coffee/time', 'time = ' + targetTime);
    })
  }
}

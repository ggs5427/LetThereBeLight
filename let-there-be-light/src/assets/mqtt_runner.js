function makeMQTTRequest(when, minute, hours) {
  var client = mqtt.connect("ws://10.2.75.239:8080");

  if(when == 'now') {
    client.on('connect', function() {
      client.publish('coffee/state', 'state = ON')
    })
  }
}

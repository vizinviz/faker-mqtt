var client;
function setup () {
  createCanvas(400, 300);

  client = mqtt.connect('mqtt://42b93b27:68b96339b52a95c5@broker.shiftr.io', {
    clientId: 'vizinviz-faker'
  });
  console.log('client', client);

  //sending data once per second
  frameRate(1);
}

function draw() { 
  background(255);
  var payload = '' + floor(random(0, 30));
  var token = '/hello';
  client.publish(token, payload);
  console.log('publish ' + token + ', ' + payload);

  text('publish ' + token + ', ' + payload + ' to shiftr.io as ' + client.options.clientId, 100, 100);
}

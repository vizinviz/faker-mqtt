var client;

var data = [23,29,20,23,28,23,21,20];
var index = 0;
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
  var payload = '' + data[index];
  var token = '/temperature';
  client.publish(token, payload);
  console.log('publish ' + token + ', ' + payload);

  text('publish ' + token + ', ' + payload + ' to shiftr.io as ' + client.options.clientId, 100, 100);
  index++;
  if(index>data.length-1){
    index =0;
  }
}

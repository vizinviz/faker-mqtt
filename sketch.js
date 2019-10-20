var client;

var data = [];
var index = 0;

function preload () {
  data = loadStrings('data.txt');
}

function setup () {
  createCanvas(400, 300);


  //convert strings to numbers
  for (var i = 0; i < data.length; i++) {
    data[i] = +data[i];
  }
  console.log('data');
  console.log(data);

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

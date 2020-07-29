const net = require('net');
const {IP, PORT} = require()
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50541
  });

  //interpret data as text
  conn.setEncoding('utf8');

  //event handler for incoming data
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (data) => {
    console.log('Connection to the game server successful!');
    conn.write('Name: CAG');    
  });

  

  return conn;
};

module.exports = {
  connect
};
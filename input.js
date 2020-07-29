const readline = require('readline');

//Store the active TCP connection object
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  readline.emitKeypressEvents(stdin); //this, to emit the key events
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('keypress', (str, key) => handleUserInput(key));

  return stdin;
};

const handleUserInput = function(data) {
  if (data && data.ctrl && data.name === 'c') process.exit();
  switch(data.name) {
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 'w':
      connection.write("Move: up");
      break;
    case 'l': 
      connection.write("Say: OMG");
      break;
    case 'k': 
      connection.write("Say: STAHHHP");
      break;
    case 'j':
      connection.write('Say: k byeeee');
      break;
    case 'i':
      connection.write('Say: hey gurl heyyy');
      break;
    case 'm':
      connection.write('Say: bigboiii');
      break;
    case 'p':
      connection.write('Say: u ded!')
  }
};

module.exports = {
  setupInput
}
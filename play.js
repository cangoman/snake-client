const readline = require('readline');
const { connect } = require('./client');

console.log('Connecting...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  readline.emitKeypressEvents(stdin); //this, to emit the key events
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //ask about this tomorrow. Im not registering it as "data".
  stdin.on('keypress', (str, key) => handleUserInput(key) );

  return stdin;
};

setupInput();

const handleUserInput = function(data) {
  if (data && data.ctrl && data.name === 'c') process.exit();
  switch(data.name) {
    case 'a':
      console.log(data.name);
      return "Move: left";
    case 's':
      console.log(data.name);
      return 'Move: down';
    case 'd':
      console.log(data.name);
      return "Move: right";
    case 'w':
      console.log(data.name);
      return "Move: up";
  }
};
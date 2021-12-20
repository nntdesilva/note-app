//RUN THIS FILE LIKE SO IN TERMINAL:
//node app.js add --title='note title' --body='note body'

const yargs = require('yargs');
const { addNotes } = require('./notes.js');

//Modify yargs version
yargs.version('1.1.0');

//Create add command
yargs.command({
	command: 'add',
	describe: 'Add a new note',
	builder: {
		title: {
			describe: 'Note title',
			demandOption: true,
			type: 'string'
		},
		body: {
			describe: 'Note text',
			demandOption: true,
			type: 'string'
		}
	},
	handler: function(argv) {
		addNotes(argv.title, argv.body);
	}
});

//Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove an existing note',
	handler: function() {
		console.log('removing a note!!!');
	}
});

//Create list command
yargs.command({
	command: 'list',
	describe: 'List all notes',
	handler: function() {
		console.log('listing all notes!!!');
	}
});

//Create read command
yargs.command({
	command: 'read',
	describe: 'Reads a note',
	handler: function() {
		console.log('reading a note!!!');
	}
});

yargs.parse();

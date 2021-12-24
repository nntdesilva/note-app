const fs = require('fs');

const fetchNotes = () => {
	try {
		const notes = JSON.parse(fs.readFileSync('notes.json'));
		return notes;
	} catch (e) {
		return [];
	}
};

const getNotes = () => {
	return 'Your notes...';
};

const addNotes = (title, body) => {
	const notes = fetchNotes();
	const duplicateNote = notes.find((note) => note.title === title);
	if (duplicateNote) {
		console.log('That note is already taken!');
	} else {
		notes.push({
			title,
			body
		});
		saveNotes(notes);
		console.log('Successfully added note!');
	}
};

const removeNote = (title) => {
	const notes = fetchNotes();
	notes.forEach((note, idx) => {
		if (note.title === title) {
			notes.splice(idx, 1);
			saveNotes(notes);
			console.log('Successfully deleted note!');
		}
	});
};

const listNotes = () => {
	const notes = fetchNotes();
	console.log('Your notes...');
	for (const note of notes) {
		console.log(note.title);
	}
};

const readNote = (title) => {
	const notes = fetchNotes();
	const foundNote = notes.find((note) => note.title === title);
	if (foundNote) {
		console.log("Here's the note body: " + foundNote.body);
	} else {
		console.log('No note was found!');
	}
};

const saveNotes = (notes) => {
	const JSONnotes = JSON.stringify(notes);
	fs.writeFileSync('notes.json', JSONnotes);
};

module.exports = {
	getNotes,
	addNotes,
	removeNote,
	listNotes,
	readNote
};

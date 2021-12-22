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
	const filteredArr = notes.filter((note) => {
		return note.title === title;
	});
	if (filteredArr.length) {
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
	for (const note of notes) {
		console.log(`${note.title}--->${note.body}`);
	}
};

const readNote = (title) => {
	const notes = fetchNotes();
	for (const note of notes) {
		if (note.title === title) {
			console.log("Here's the note body: " + note.body);
		}
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

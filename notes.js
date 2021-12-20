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

const saveNotes = (notes) => {
	const JSONnotes = JSON.stringify(notes);
	fs.writeFileSync('notes.json', JSONnotes);
};

module.exports = {
	getNotes,
	addNotes
};

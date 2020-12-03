const fs = require("fs");
const chalk = require("chalk");

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bold.green("Your notes"));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  try {
    const noteToRead = notes.find((note) => note.title === title);
    console.log(chalk.bold(noteToRead.title));
    console.log(noteToRead.body);
  } catch (e) {
    console.log(chalk.bgRed("Note not found"));
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("New note added"));
  } else {
    console.log(chalk.bgRed("Note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  if (notes.length) {
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].title === title) {
        console.log(chalk.bgGreen("Note removed"));
        let newNotes = notes.filter((note) => {
          return note.title !== title;
        });
        return saveNotes(newNotes);
      }
    }
    console.log(chalk.bgRed("No note with that title"));
    return;
  } else {
    console.log(chalk.bgRed("List of notes is empty"));
    return;
  }
};

const deleteAllNotes = () => {
  let notes = [];
  console.log("Notes have been deleted");
  return saveNotes(notes);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
  deleteAllNotes: deleteAllNotes,
};

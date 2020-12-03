# notes-app
Node.js application for recording notes

This project is part of Andrew Mead's The Complete Node.js Developer Course (3rd Edition) on Udemy

##How to run
Clone this repository and run npm install in the notes-app directory

##Commands
The application has five different commands

###add
This command allows the user to add a new note to their list of notes. This command takes two arguments, a title and a body.
If there is already a note with the title that the user provides, then the user will be notified in the console and the new note will not be added. If there are no notes have been added then a JSON file will be created to record the notes.
Ex. node app.js add --title="Grocery List" --body="Apples, Ice Cream, and Pizza"

###remove
This command allows the user to remove a specific note. This command takes a note title as an argument.
If there are no notes with that title or the JSON file is already empty, then the user will be notified in the console.
Ex. node app.js remove --title="Grocery List"

###list
This command allows the user to see all notes that are currently in the JSON file. This command does not take any arguments. The title of each note will be logged to the console.
Ex. node app.js list

###read
This command allows the user to read the body of a specific note. This command takes a note title as an argument. If the note title that the user provides is in the JSON file then the body of that note will be logged to the console, if not, then the user will be notified in the console.
Ex. node app.js read --title="Grocery List"

###deleteAllNotes
This command allows the user to delete all notes in the JSON file. This command does not take any arguments.
Ex. node app.js deleteAllNotes

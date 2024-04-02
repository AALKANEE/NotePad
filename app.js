// variables
const noteList = document.querySelector('#note-list')




//eventlisteners
eventlisteners()
function eventlisteners(){
    //form submission
    document.querySelector('#form').addEventListener('submit',newNote)

    //remove note
    document.querySelector('#note-list').addEventListener('click',removeNote)

    //get data from localStorage on loaded
    document.addEventListener('DOMContentLoaded',localStorageOnLoad)
}



//functions
//Adding new note 
function newNote(e){
    e.preventDefault()
    //access to the value
    const note = document.querySelector('#note').value

    //create remove element
    const removeBtn = document.createElement('a')
    removeBtn.textContent='X'
    removeBtn.classList = 'remove-note'
    
    //create <li> tag
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(note))

    //adding remove button to the li
    li.appendChild(removeBtn)

    // adding li to the note list
    noteList.appendChild(li)

    addNoteToLocalStorage(note)
}

//remove note from list
function removeNote(e){
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove()
    }
}

//adding note to the local storage
function addNoteToLocalStorage(note){
    //get the note from localStorage
    const notes = getNotesFromLocalStorage()

    //add new note to the notes array
    notes.push(note)

    //add new notes Array to the LocalStorage
    localStorage.setItem('notes',JSON.stringify(notes))
}

//get notes from localStorage
function getNotesFromLocalStorage(){
    let notes;

    //get previous notes from localStorage
    let getFromLS=localStorage.getItem('notes');
    if(getFromLS===null){
        //if not exist create empty array
        notes=[];
    }else{
        //if exist convert to the array
        notes=JSON.parse(getFromLS)
    }
    return notes
}

//get data from local storage on load
function localStorageOnLoad(){
      const notes= getNotesFromLocalStorage();
    
      //print each item of array
      notes.forEach(function(note) {
        //create remove element
      const removeBtn = document.createElement('a')
      removeBtn.textContent='X'
      removeBtn.classList = 'remove-note'
    
      //create <li> tag
      const li=document.createElement('li')
      li.appendChild(document.createTextNode(note))

      //adding remove button to the li
      li.appendChild(removeBtn)

      // adding li to the note list
      noteList.appendChild(li)
    });
}
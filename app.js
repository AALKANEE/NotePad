// variables
const noteList = document.querySelector('#note-list')




//eventlisteners
eventlisteners()
function eventlisteners(){
    //form submission
    document.querySelector('#form').addEventListener('submit',newNote)

    //remove note
    document.querySelector('#note-list').addEventListener('click',removeNote)
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

    addNoteToLocalStorage()
}

//remove note from list
function removeNote(e){
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove()
    }
}

//adding note to the local storage
function addNoteToLocalStorage(){
    const notes = getNotesFromLocalStorage()
}

//get notes from localStorage
function getNotesFromLocalStorage(){
    let notes;
    let getFromLS=localStorage.getItem('notes');
    if(getFromLS===null){
        notes=[];
    }else{
        notes=JSON.parse(getFromLS)
    }
    return notes
}
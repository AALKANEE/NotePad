// variables
const noteList = document.querySelector('#note-list')




//eventlisteners
eventlisteners()
//form submission
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit',newNote)
}



//functions
//Adding new note 
function newNote(e){
    e.preventDefault()
    //access to the value
    const note = document.querySelector('#note').value
    
    //create <li> tag
    const li=document.createElement('li')
}
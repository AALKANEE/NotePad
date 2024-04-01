// variables




//eventlisteners
eventlisteners()
function eventlisteners(){
    document.querySelector('#form').addEventListener('submit',newNote)
}



//functions
function newNote(e){
    e.preventDefault()
}
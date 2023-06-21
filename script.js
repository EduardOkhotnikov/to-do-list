let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function paragraphList () {
    let paragraph = document.createElement('p');
    let del = document.createElement('div');
    del.classList.add('delete-styling');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(del);
    inputField.value = "";
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick' , function(){
        paragraph.remove();
        del.remove();
    })
    del.addEventListener('click' , function(){
        paragraph.remove();
        del.remove();
    })
}


addToDoButton.addEventListener('click' , function(){
    if(inputField.value != ""){
    paragraphList();}
})

inputField.onkeydown = function (event) {
    if (event.code == 'Enter' && inputField.value != "") 
    {
        paragraphList();
    }
}

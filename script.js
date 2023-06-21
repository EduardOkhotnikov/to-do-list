let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click' , function(){
    if(inputField.value != ""){
    var paragraph = document.createElement('p');
    var del = document.createElement('div');
    del.classList.add('delete-styling');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    toDoContainer.appendChild(del);
    inputField.value = "";}
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick' , function(){
        paragraph.remove();
        del.remove();
    })
    del.addEventListener('dblclick' , function(){
        paragraph.remove();
        del.remove();
    })
})

inputField.onkeydown = function (event) {
    if (event.code == 'Enter' && inputField.value != "") 
    {
        var paragraph = document.createElement('p');
        var del = document.createElement('div');
        del.classList.add('delete-styling');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        toDoContainer.appendChild(paragraph);
        toDoContainer.appendChild(del);
        inputField.value = "";
        
    }
    paragraph.addEventListener('click' , function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick' , function(){
        paragraph.remove();
        del.remove();
    })
    del.addEventListener('dblclick' , function(){
        paragraph.remove();
        del.remove();
    })
}

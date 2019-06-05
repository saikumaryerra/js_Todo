var totalElements=0;
var checkedElements=0;
var activeElements=0;
// Adding Element
document.getElementById('checklist').addEventListener('keypress', function(event) {
    var temp = document.getElementById('checklist').value;
    var inputData = String(temp);
    inputData = inputData.trim();
    if (event.keyCode == 13 && inputData !== "") {
        addingToList(inputData);
    }
});
// adding element Function
function addingToList(x) {
    totalElements++;
    var mainSection = document.createElement('div');

    var listHead = document.createElement('input');
    listHead.setAttribute('type', 'checkbox');
    // listHead.setAttribute('class', 'uncheck');
    listHead.setAttribute('onclick','check()')

    var label = document.createElement('label');
    var labelContent = document.createTextNode(x);
    label.appendChild(labelContent);

    var crossMark = document.createElement('span');
    // crossMark.setAttribute('onclick', 'this.parentElement.style.display=\'none\';');
    crossMark.setAttribute('onclick','removeList()')
    crossMark.innerHTML = "&#10005;";


    mainSection.appendChild(listHead);
    mainSection.appendChild(label);
    mainSection.appendChild(crossMark);

    var todoList = document.getElementById('todo-list');
    todoList.appendChild(mainSection);
    document.getElementById('checklist').value = "";
    noOfActive();
    // Not workings
    // todoList.insertAdjacentHTML('afterbegin',mainSection);
}
//removing element function
function removeList(){ 
    event.target.parentElement.remove();  
    totalElements--;
    noOfActive();
}
//to display no'of active elements
function noOfActive(){
    activeElements=totalElements-checkedElements;
    document.getElementById('items-count').innerHTML=activeElements+" items left";
}
//to checkbox
function check(){
    if(event.target.checked){
        checkedElements++;
           event.target.classList.toggle("check");
           event.target.parentElement.querySelector('label').classList.toggle("strike");
    }
    else {
        checkedElements--;
        event.target.classList.toggle("check");
        event.target.parentElement.querySelector('label').classList.toggle("strike");
    }
    noOfActive();
}

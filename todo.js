var totalElements = 0;
var checkedElements = 0;
var activeElements = 0;

// Adding Element
document.getElementById('checklist').addEventListener('keypress', function(event) {
    var temp = document.getElementById('checklist').value;
    var inputData = String(temp);
    inputData = inputData.trim();
    if (event.keyCode == 13 && inputData !== "") {
        addingToList(inputData);
    }

});

//initially hiding footer i.e when no elements
document.getElementById('bottom-bar').setAttribute('class','hide');

// adding element Function
function addingToList(x) {
    totalElements++;
    var mainSection = document.createElement('div');
    mainSection.setAttribute('draggable','true');

    var listHead = document.createElement('input');
    listHead.setAttribute('type', 'checkbox');
    listHead.setAttribute('class', 'uncheck');
    listHead.setAttribute('onclick', 'check()')

    var label = document.createElement('label');
    var labelContent = document.createTextNode(x);
    label.appendChild(labelContent);

    var crossMark = document.createElement('span');
    crossMark.setAttribute('onclick', 'removeList()')
    crossMark.innerHTML = "&#10005;";


    mainSection.appendChild(listHead);
    mainSection.appendChild(label);
    mainSection.appendChild(crossMark);

    var todoList = document.getElementById('todo-list');
    todoList.appendChild(mainSection);
    document.getElementById('checklist').value = "";
    noOfActive();
    footerDisplay();
    // Not workings
    // todoList.insertAdjacentHTML('afterbegin',mainSection);
}

//removing element function
function removeList() {
    event.target.parentElement.remove();
    totalElements--;
    noOfActive();
    footerDisplay();
}

//to display no'of active elements
function noOfActive() {
    activeElements = totalElements - checkedElements;
    document.getElementById('items-count').innerHTML = activeElements + " items left";
}

//to checkbox
function check() {
    if (event.target.checked) {
        checkedElements++;
        event.target.classList.toggle("check");
        event.target.classList.toggle("uncheck");
        event.target.parentElement.querySelector('label').classList.toggle("strike");
    } else {
        checkedElements--;
        event.target.classList.toggle("check");
        event.target.classList.toggle("uncheck");
        event.target.parentElement.querySelector('label').classList.toggle("strike");
    }
    noOfActive();
}

//to displayall
function displayAll() {
    var a = document.querySelector('#todo-list').querySelectorAll('.hide');
    for (var i = a.length - 1; i >= 0; i--) {
        // a[i].parentElement.setAttribute('class','hide');
        a[i].classList.toggle('hide');
    }
}

// to display active elements
function displayActive() {
    var a = document.querySelectorAll('.check');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.setAttribute('class', 'hide');
    }
    var a = document.querySelectorAll('.uncheck');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.classList.remove('hide');
    }

}

// to display completed
function displayCompleted() {
    var a = document.querySelectorAll('.uncheck');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.setAttribute('class', 'hide');
    }
    var a = document.querySelectorAll('.check');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.classList.remove('hide');
    }
}

//to clear all
function clearItems() {
    document.querySelector('#todo-list').innerHTML = "";

    totalElements = 0;
    checkedElements = 0;
    activeElements = 0;
    noOfActive();
    footerDisplay();
}

//to clear completed
function clearCompleted() {
    var a = document.querySelectorAll('.check');
    totalElements-=a.length;
    checkedElements=0;
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.remove();
    }
    var a = document.querySelectorAll('.uncheck');
    for (var i = a.length - 1; i >= 0; i--) {
        a[i].parentElement.classList.remove('hide');
    }
    noOfActive();
    footerDisplay();
}

//to hide/unhide footer
function footerDisplay(){
    if(totalElements>0){
        document.getElementById('bottom-bar').classList.remove('hide');
    }
    else{
        document.getElementById('bottom-bar').classList.add('hide');
    }
}
function addingToList(x) {
    var mainSection = document.createElement('div');
    // var listHead=document.createElement('p');
    // var listContent=document.createTextNode(x);
    // listHead.appendChild(listContent);
    // mainSection.appendChild(listHead);	
    // var todoList = document.getElementById('sai');
    // todoList.appendChild(mainSection);
    // document.getElementById('checklist').value="";

    var listHead = document.createElement('input');
    listHead.setAttribute('type', 'checkbox');

    var label = document.createElement('label');
    var labelContent=document.createTextNode(x);
    label.appendChild(labelContent);
    mainSection.appendChild(listHead);
    mainSection.appendChild(label);    
    var todoList = document.getElementById('sai');
    todoList.appendChild(mainSection);
    document.getElementById('checklist').value = "";
    // Not workings
    // todoList.insertAdjacentHTML('afterbegin',mainSection);
}

document.getElementById('checklist').addEventListener('keypress', function(event) {
    var temp = document.getElementById('checklist').value;
    var inputData=String(temp);
    inputData=inputData.trim();

    if (event.keyCode == 13 && inputData !== "") {        
        addingToList(inputData);
    }
});
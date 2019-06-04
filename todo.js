function addingToList(x){
	var mainSection=document.createElement('div');
	var listHead=document.createElement('p');
	var listContent=document.createTextNode(x);
	listHead.appendChild(listContent);
	mainSection.appendChild(listHead);	
	var todoList = document.getElementById('sai');
	todoList.appendChild(mainSection);
	document.getElementById('checklist').value=""

	// Not workings
	// todoList.insertAdjacentHTML('afterbegin',mainSection);
}

document.getElementById('checklist').addEventListener('keypress',function(event){
	if (event.keyCode == 13) {
		var inputData = document.getElementById('checklist').value;
		addingToList(inputData);
	}
});
//Declarando variables
var inputForm = document.getElementById('input-form');
var inputTitle = document.getElementById('input-title');
var inputHomework = document.getElementById('input-homework');
var buttonAddHomework = document.getElementById('button-add-homework');
var containerNewDiv = document.getElementById('container-new-div');
var container = document.getElementById('container');
var addContainerHomeworks = document.getElementById('add-container-homeworks');
var formList = document.getElementById('form-list');
var containerCard = document.getElementById('container-card');
var addCard = document.getElementById('add-card');
var buttonSaveList = document.getElementById('button-save-list');
var addList = document.getElementById("add-list");
var textTitle = document.createElement('div');

window.addEventListener('load', function(e){
  addList.classList.add("block")
  container.classList.add("none");
  formList.classList.add("none");
  containerCard.classList.add("none");
  addList.addEventListener('click', function(e){
    addList.classList.remove("block");
    addList.classList.add("none");
    formList.classList.remove("none");
    formList.classList.add("block");
    containerCard.classList.remove("block");
    containerCard.classList.add("none");
    container.classList.remove("block");
    container.classList.add("none");
  });
  buttonSaveList.addEventListener('click', function(e){
    containerCard.classList.add("block");
    containerCard.classList.remove("none");
    addList.classList.remove("block");
    addList.classList.add("none");
    formList.classList.remove("block");
    formList.classList.add("none");
    container.classList.remove("block");
    container.classList.add("none");
    textTitle.textContent = inputTitle.value;
    containerCard.insertBefore(textTitle, containerCard.childNodes[0]);
    var cln = formList.cloneNode(true);
    document.getElementById("container-section").appendChild(cln);
  });
  addCard.addEventListener('click', function(e){
    addList.classList.remove("block");
    addList.classList.add("none");
    formList.classList.remove("block");
    formList.classList.add("none");
    container.classList.add("block");
    container.classList.remove("none");
    containerCard.classList.remove("block");
    containerCard.classList.add("none");
    textTitle.textContent = inputTitle.value;
    textTitle.classList.add("text-title-style");
    containerNewDiv.insertBefore(textTitle, containerNewDiv.childNodes[0])
  });
  buttonAddHomework.addEventListener('click', function(e){
    var newDiv = document.createElement('div');
    newDiv.innerHTML = inputHomework.value;
    containerNewDiv.appendChild(newDiv);
    inputForm.insertBefore(containerNewDiv, inputForm.childNodes[0]);
    inputHomework.focus();
  });
});

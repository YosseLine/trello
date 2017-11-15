window.addEventListener('load', function(e){
  var section = document.getElementById("section");
  var container = document.getElementById("container");
  var box = document.getElementById("box");
  var form = document.getElementById("form");
  var input = document.getElementById("input");
  var button = document.getElementById("button");
  var buttonSave = document.getElementById("buttonSave");
  var accountant = 1;

form.classList.add("none");

button.addEventListener('click', function(e){
  if(form.classList.contains("none")){
    form.classList.remove("none");
    form.classList.add("inline-block")
    button.classList.add("none");
    e.preventDefault();
    input.value= "";
  	input.focus();
  }
});

/*buttonSave.addEventListener('click', function(e){

});*/
});

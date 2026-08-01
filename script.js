function addValue() {
  let add = 
  document.getElementById("screen").value;
  let task = document.createElement("li");
  task.textContent = add;
  task.onclick = function() {
    task.remove();
  };
  document.getElementById("taskScreen").appendChild(task);
  document.getElementById("screen").value = "";
}

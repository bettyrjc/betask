console.log('hola al js');

class Todolist{
  constructor(title, listO, listT, listTh, id){
    this.title = title;
    this.listO = listO;
    this.listT = listT;
    this.listTh = listTh;
    this.id = id;
  }
}
class TaskList {
  constructor(task) {
    this.task = task
  }
}
class NoteTask{
  constructor(note){
    this.note = note;
  }
}
class UI {
// task list
  taskAdd(list){
    const task_list = document.getElementById('OneTask');
      const li = document.createElement('li');
      li.className = 'collectionItem';
      li.innerHTML = `
       ${list.task}
      <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a>
      <a href="#" class=" icon-check secondary-content"><i class="icon icon-checkmark"></i></a>
      `;
      task_list.appendChild(li)
  }
  clearTasksFields(){
    document.getElementById('task-id').value = '';
  }
  showAlertTask(message,className){

    const divTag = document.createElement('div');
    divTag.className = `alert ${className}`
    divTag.appendChild(document.createTextNode(message));

    const taskContainer = document.querySelector('.tasksContainer');
    const formTask = document.querySelector('#TaskForm');

    taskContainer.insertBefore(divTag, formTask)

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000);
  }
  // ToDoList
  addList(list){
    const to_Do_list = document.getElementById('toDoCont');

    var div = document.createElement('div');
    div.className = 'collection_cont';
    div.innerHTML = `
    <ul class ='collection'>
    <li> <h2 class = 'title'>${list.title}</h2></li>
    <hr>
    <li class ='collectionItem'> ${list.listO}
    <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a>
    <a href="#" class=" icon-check secondary-content"><i class="icon icon-checkmark"></i></a>
    </li>
    <li class ='collectionItem'> ${list.listT}
    <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a>
    <a href="#" class=" icon-check secondary-content"><i class="icon icon-checkmark"></i></a>
    </li>
    <li class ='collectionItem'> ${list.listTh}
    <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a>
    <a href="#" class=" icon-check secondary-content"><i class="icon icon-checkmark"></i></a>
    </li>
    </ul>
    <div class =' btn_todo_container'>
     <button type="button" class=" deleteAll btn button green" data-id-falso="hola" id='delete_${list.id}'>Delete</button>
    <button type="button" class="finishAll btn button blue active" >Finish</button>
    </div>
    `;
    to_Do_list.appendChild(div);
  }
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('listT').value = '';
    document.getElementById('listO').value = '';
    document.getElementById('listTh').value = '';
  }

  showAlert(message,className){

    const div = document.createElement('div');
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.ToDoListContainer');
    const form = document.querySelector('#TodoForm');

    container.insertBefore(div, form)

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2500);
  }


  deleteList(target){
    if(target.parentElement.classList.contains('delete-item')){
      if(confirm('Are You Sure?')) {
      target.parentElement.parentElement.remove();
        // Remove from LS
        // removeTaskFromLocalStorage(e.target.parentElement.parentElement);
      }
    }
    // cuando este lista
    if(target.parentElement.classList.contains('icon-check')){
    target.parentElement.parentElement.style.background = 'lightgray';
    }
  }
  // note
  noteAdd(list){
    const note_list = document.getElementById('noteIdProfile');

      const divnote = document.createElement('div');
      divnote.className = 'noteOne';
      divnote.innerHTML = `
      <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a><br>
      <p>${list.note}</p>
      `;
      note_list.appendChild(divnote)
  }
  clearNoteFields(){
    document.getElementById('noteInput').value = '';
  }
  showAlertNote(message,className){

    const div = document.createElement('div');
    div.className = `alert ${className}`
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.noteContainer');
    const form = document.querySelector('#noteCont');

    container.insertBefore(div, form)

    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2500);
  }
}


const to_list = document.getElementById('TodoForm')

to_list.addEventListener('submit', function(e){
  console.log('click');
  // Get form values
  const title = document.getElementById('title').value,
        listO = document.getElementById('listO').value,
        listT = document.getElementById('listT').value,
        listTh = document.getElementById('listTh').value
  let id = [];

  // Instantiate book
  const list = new Todolist(title, listO, listT, listTh, id);

  // Instantiate UI
  const ui = new UI();

console.log(ui);
console.log(list);

if (title === '' ||listO ===' '||listT===''||listTh ==='')
{
ui.showAlert('Please, fill in all fields', 'error')
}else{
  ui.showAlert('List added!', 'success')
  ui.addList(list);
//   // Add to LS
//   Store.addBook(list);
  ui.clearFields();
}
e.preventDefault();
})
document.getElementById('toDoCont').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteList(e.target);
  // Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
})


// task list functions
document.getElementById('TaskForm').addEventListener('submit', function(e){
console.log('click en el  task submit');

const task = document.getElementById('task-id').value;

const taskList = new TaskList(task)
const ui = new UI()

if (task === '')
{
ui.showAlertTask('Please, fill in all fields', 'error')
}else{
  ui.showAlertTask('List added!', 'success')
  ui.taskAdd(taskList);
  ui.clearTasksFields();
}
e.preventDefault();
})

document.getElementById('OneTask').addEventListener('click', function(e){
  console.log('task forms id');
  const ui = new UI();
  ui.deleteList(e.target);
  // Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
})

//note
document.getElementById('noteCont').addEventListener('submit', function(e){

  console.log('click en note submit')

  const note = document.getElementById('noteInput').value;

  const noteList = new NoteTask(note)
  const ui = new UI()
  if(note === ''){
    ui.showAlertNote('Please, fill in all fields', 'error')
    }
    else{
      ui.showAlertNote('List added!', 'success');
      ui.noteAdd(noteList);
      ui.clearNoteFields();
  }
e.preventDefault();
})
// remueve todas las notas :c
document.getElementById('noteIdProfile').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteList(e.target);
  // Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();

});


// eliminando modales
document.getElementById('noteIdProfile').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteList(e.target);
  // Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  e.preventDefault();

});
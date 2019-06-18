console.log('hola');

class TaskList {
  constructor(task) {
    this.task = task
  }
}

class UI {
  taskAdd(list){

    const task_list = document.getElementById('taskListId');
      const ul = document.createElement('ul');
      ul.className = 'collection';
      ul.innerHTML = `
      <li class ='collectionItem'> ${list.task}
      <a href="#" class="delete-item secondary-content"><i class=" icon icon-close"></i></a>
      <a href="#" class=" icon-check secondary-content"><i class="icon icon-checkmark"></i></a>
      </li>
      `;
      task_list.appendChild(ul)
  }
}

document.getElementById('TaskForm').addEventListener('submit', function(e){
console.log('click en el  task submit');

const task = document.getElementById('task-id').value;

const taskList = new TaskList(task)
const ui = new UI()

ui.taskAdd(taskList);
  e.preventDefault();
})

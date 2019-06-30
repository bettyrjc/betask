// traer a adelante los formularios.

const toDoList = document.querySelector('.ToDoListContainer')
const taskList = document.querySelector('.tasksContainer')
const note = document.querySelector('.noteContainer')

//TO DO;

document.getElementById('orange').addEventListener('click', () =>{
  console.log('click en to do list');
  if (toDoList.classList.contains('active')) {
    toDoList.classList.remove('active');
    console.log('eliminado');

  }else {
    toDoList.classList.add('active');
  }
})
//
document.getElementById('blue').addEventListener('click', () =>{
  console.log('click en to do list');
  if (taskList.classList.contains('active')) {
    taskList.classList.remove('active');
    console.log('eliminado');

  }else {
    taskList.classList.add('active');
  }
})
// // NOTE:
document.getElementById('gray').addEventListener('click', () =>{
  console.log('click en note');
  if (note.classList.contains('active')) {
    note.classList.remove('active');
    console.log('eliminado');

  }else {
    note.classList.add('active');
  }
})
// elimando con la equis
document.querySelector('#delete_item').addEventListener('click', ()=>{
  console.log(' clicke en la equis');

  if (taskList.classList.contains('active')) {
    taskList.classList.remove('active');
  }
})
// elimando to do
document.querySelector('#delete_todo').addEventListener('click', ()=>{
  console.log(' clicke en la equis');

  if (toDoList.classList.contains('active')) {
    toDoList.classList.remove('active');
  }
})
// elimando note
document.querySelector('#delete_note').addEventListener('click', ()=>{
  console.log(' clicke en la equis');

  if (note.classList.contains('active')) {
    note.classList.remove('active');
  }
})
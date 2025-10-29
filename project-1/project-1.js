class Todo {
  todoData;
  todoDate;
  todoTime;

  constructor(todoData, todoDate, todoTime) {
    this.todoData = todoData;
    this.todoDate = todoDate;
    this.todoTime = todoTime;
  }
}

// Restart Stuff //
const todoListTotalData = JSON.parse(localStorage.getItem('tudulist')) || [];
const todoListTotal = [];
createTodoList();
renderNotes1();

/////////////////

function createTodoList() {
  if (todoListTotalData.length) {
    for (let i = 0; i < todoListTotalData.length; i++) {
      const todo = todoListTotalData[i];
      todoListTotal.push(new Todo(todo.todoData, todo.todoDate, todo.todoTime));
    }
  }
}

function saveData() {
  localStorage.setItem('tudulist', JSON.stringify(todoListTotal));
}

function addTodo(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.todoData.value.trim();
  const date = form.todoDate.value;
  const time = form.todoTime.value;

  todoListTotal.push(new Todo(data, date, time));
  saveData();
  renderNotes();
  console.log(todoListTotal);
}

function resetForm() {
  const formTextErea = document.querySelector('#arge-text-erea-element');
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
  formTextErea.value = '';
}



function renderNotes() {
  const notesMonitorElement = document.querySelector('#notes-monitor-element');

  notesMonitorElement.innerHTML = '';
  let lastNoteElement = null;
  for (let i = 0; i < todoListTotal.length; i++) {

    const todo = todoListTotal[i];

    const note = document.createElement('div');
    note.className = 'note';
    const noteButton = document.createElement('button');
    noteButton.className = 'note-button'; 
    noteButton.innerHTML = '&times;';
    // noteButton.setAttribute('onclick', `deleteNote(${i})`);
    noteButton.setAttribute('onclick', `deleteNoteByIndex(${i})`);
    const noteInfo = document.createElement('div');
    noteInfo.className = 'note-info';
    const textErea = document.createElement('textarea');
    textErea.value = todo.todoData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = todo.todoDate.split('-').reverse().join('/');
    date.className = 'date';
    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = todo.todoTime;
    dateTimeContainer.append(date, time);
    noteInfo.append(textErea, dateTimeContainer);
    note.append(noteButton,noteInfo);
    notesMonitorElement.appendChild(note);
    lastNoteElement = note;
  }
  if (lastNoteElement) {
    lastNoteElement.classList.add('last-note');
  }
}

function renderNotes1() {
  const notesMonitorElement = document.querySelector('#notes-monitor-element');

  notesMonitorElement.innerHTML = '';
  for (let i = 0; i < todoListTotal.length; i++) {

    const todo = todoListTotal[i];

    const note = document.createElement('div');
    note.className = 'note';
    const noteButton = document.createElement('button');
    noteButton.className = 'note-button'; 
    noteButton.innerHTML = '&times;';
    // noteButton.setAttribute('onclick', `deleteNote(${i})`);
    noteButton.setAttribute('onclick', `deleteNoteByIndex(${i})`);
    const noteInfo = document.createElement('div');
    noteInfo.className = 'note-info';
    const textErea = document.createElement('textarea');
    textErea.value = todo.todoData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = todo.todoDate.split('-').reverse().join('/');
    date.className = 'date';
    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = todo.todoTime;
    dateTimeContainer.append(date, time);

    noteInfo.append(textErea, dateTimeContainer);

    note.append(noteButton,noteInfo);

    notesMonitorElement.appendChild(note);
  }
}

function deleteNote(index) {
  for (let i = 0; i < todoListTotal.length; i++) {
    if (i === index ) {
      todoListTotal.splice(i, 1);
      saveData();
      if (todoListTotal.length === 0) {
        localStorage.removeItem('tudulist');
      }
      renderNotes1();
    }
  }
}

function deleteNoteByIndex(index) {
  deleteNote(index);
}
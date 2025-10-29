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
const list = returnList();
const todoListTotal = [...list];
renderNotes1();

function addTodo(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.todoData.value.trim();
  const date = form.todoDate.value;
  const time = form.todoTime.value;

  todoListTotal.push(new Todo(data, date, time));
  renderNotes();
  console.log(todoListTotal);
}

function resetForm() {
  const inputs = document.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
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
    noteButton.setAttribute('onclick', `deleteNote(${i})`);
    const noteInfo = document.createElement('div');
    noteInfo.className = 'note-info';
    const textErea = document.createElement('textarea');
    textErea.textContent = todo.todoData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = todo.todoDate;
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
    noteButton.setAttribute('onclick', `deleteNote(${i})`);
    const noteInfo = document.createElement('div');
    noteInfo.className = 'note-info';
    const textErea = document.createElement('textarea');
    textErea.textContent = todo.todoData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = todo.todoDate;
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

function returnList() {
  return [
    new Todo('jimbo', '18/06/2025', '17:25'),
    new Todo("people are strange when your a stranger faces looks ugly when you're alone", '22/05/2025', '07:00'),
    new Todo("There's a lady who's sure all that glitters is gold and she's buying a stairway to heaven", '18/06/2025', '17:25'),
  ]
}

function deleteNote(index) {
  for (let i = 0; i < todoListTotal.length; i++) {
    if (i === index ) {
      todoListTotal.splice(i, 1);
      renderNotes1();
    }
  }
}
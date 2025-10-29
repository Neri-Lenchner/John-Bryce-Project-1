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

const todoListTotal = [];

function addTodo(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.todoData.value.trim();
  const date = form.todoDate.value;
  const time = form.todoTime.value;

  todoListTotal.push(new Todo(data, date, time));
    console.log(todoListTotal);
}

function resetForm(event) {
  event.target.reset();
}

const notesMonitorElement = document.querySelector('#notes-monitor-element');

function renderNote() {
  const note = document.createElement('div');
  note.className = 'note';
  const noteButton = document.createElement('button');
  noteButton.className = 'note-button'; // 'glyphicon glyphicon-remov bootstrap-button'; 
  noteButton.innerHTML = '&times;';
  /*
    noteButton.innerHTML = `<!-- Custom black square + white X button -->
    <button type="button" class="close-btn" aria-label="Close"></button>`;
  */
  const noteInfo = document.createElement('div');
  noteInfo.className = 'note-info';
  const textErea = document.createElement('textarea');
  textErea.textContent = 'This note is givven to you by The Lench. The best Lenchner there is. If you want to check this out you can!!! ;yeah yeah yeah';
  textErea.className = 'text-erea';
  const dateTimeContainer = document.createElement('div');
  dateTimeContainer.className = 'date-time-container';
  const date = document.createElement('div');
  date.textContent = '28/10/2025';
  date.className = 'date';
  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = '13:00';
  dateTimeContainer.append(date, time);

  noteInfo.append(textErea, dateTimeContainer);

  note.append(noteButton,noteInfo);

  notesMonitorElement.appendChild(note);
}

renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
renderNote();
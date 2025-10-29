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
  
  for (let i = 0; i < todoListTotal.length; i++) {
    const todo = todoListTotal[i];

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


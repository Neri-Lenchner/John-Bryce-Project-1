class Task {
  taskData;
  taskDate;
  taskTime;

  constructor(taskData, taskDate, taskTime) {
    this.taskData = taskData;
    this.taskDate = taskDate;
    this.taskTime = taskTime;
  }
}

// Restart Stuff //
const taskListTotalData = JSON.parse(localStorage.getItem('taskList')) || [];
const taskListTotal = [];
createTaskList();
renderNotes1();

/////////////////

function createTaskList() {
  if (taskListTotalData.length) {
    for (let i = 0; i < taskListTotalData.length; i++) {
      const task = taskListTotalData[i];
      taskListTotal.push(new Task(task.taskData, task.taskDate, task.taskTime));
    }
  }
}

function saveData() {
  localStorage.setItem('taskList', JSON.stringify(taskListTotal));
}

function addTask(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.taskData.value.trim();
  const date = form.taskDate.value;
  const time = form.taskTime.value;

  taskListTotal.push(new Task(data, date, time));
  saveData();
  renderNotes();
  console.log(taskListTotal);
}

function resetForm() {
  const formTextErea = document.querySelector('#large-text-erea-element');
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
  for (let i = 0; i < taskListTotal.length; i++) {

    const task = taskListTotal[i];

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
    textErea.value = task.taskData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = task.taskDate.split('-').reverse().join('/');
    date.className = 'date';
    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = task.taskTime;
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
  for (let i = 0; i < taskListTotal.length; i++) {

    const task = taskListTotal[i];

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
    textErea.value = task.taskData;
    textErea.className = 'text-erea';
    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';
    const date = document.createElement('div');
    date.textContent = task.taskDate.split('-').reverse().join('/');
    date.className = 'date';
    const time = document.createElement('div');
    time.className = 'time';
    time.textContent = task.taskTime;
    dateTimeContainer.append(date, time);

    noteInfo.append(textErea, dateTimeContainer);

    note.append(noteButton,noteInfo);

    notesMonitorElement.appendChild(note);
  }
}

function deleteNote(index) {
  for (let i = 0; i < taskListTotal.length; i++) {
    if (i === index ) {
      taskListTotal.splice(i, 1);
      saveData();
      if (taskListTotal.length === 0) {
        localStorage.removeItem('taskList');
      }
      renderNotes1();
    }
  }
}

function deleteNoteByIndex(index) {
  deleteNote(index);
}
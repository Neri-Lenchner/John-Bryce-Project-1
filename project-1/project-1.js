console.log('Project 1');

function renderNote() {
  const note = document.createElement('div');
  note.className = 'note';
  const noteButton = document.createElement('button');
  noteButton.className = 'note-button';
  const noteInfo = document.createElement('div');
  noteInfo.className = 'note-info';
  const textErea = document.createElement('textarea');
  textErea.className = 'text-erea';
  const dateTimeContainer = document.createElement('div');
  dateTimeContainer.className = 'date-time-container';
  const date = document.createElement('div');
  date.className = 'date';
  const time = document.createElement('div');
  time.className = 'time';
  dateTimeContainer.append(date, time);
  note.append(noteButton,noteInfo, textErea, dateTimeContainer);
}
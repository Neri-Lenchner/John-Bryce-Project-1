function renderNotes(highlightLast = false) {
  const notesMonitorElement = document.querySelector('#notes-monitor-element');
  notesMonitorElement.innerHTML = ''; // Clear all
  let lastNoteElement = null;

  taskListTotal.forEach((task, index) => {
    const note = document.createElement('div');
    note.className = 'note';

    // Delete button with correct index (closure-safe)
    const noteButton = document.createElement('button');
    noteButton.className = 'note-button';
    noteButton.innerHTML = '×';
    noteButton.onclick = () => deleteNoteByIndex(index); // Safe closure
    // OR: noteButton.addEventListener('click', () => deleteNoteByIndex(index));

    const noteInfo = document.createElement('div');
    noteInfo.className = 'note-info';

    const text = document.createElement('div');
    text.innerText = task.taskData;
    text.className = 'text';

    const dateTimeContainer = document.createElement('div');
    dateTimeContainer.className = 'date-time-container';

    // Format date: YYYY-MM-DD → DD/MM/YYYY
    const [year, month, day] = task.taskDate.split('-');
    const date = document.createElement('div');
    date.textContent = `${day}/${month}/${year}`;
    date.className = 'date';

    const time = document.createElement('div');
    time.textContent = task.taskTime;
    time.className = 'time';

    dateTimeContainer.append(date, time);
    noteInfo.append(text, dateTimeContainer);
    note.append(noteButton, noteInfo);
    notesMonitorElement.appendChild(note);

    lastNoteElement = note; // Track last one
  });

  // Highlight the last added note (optional animation)
  if (highlightLast && lastNoteElement) {
    lastNoteElement.classList.add('last-note');
    // Optional: remove class after animation
    setTimeout(() => lastNoteElement.classList.remove('last-note'), 1000);
  }
}
function addTask(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.taskData.value.trim();
  const date = form.taskDate.value; // YYYY-MM-DD
  const time = form.taskTime.value;

  const selectedDate = new Date(date + 'T' + time + ':00'); // Combine date & time
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize to midnight for fair comparison

  // Compare only dates (ignore time for "past date" check)
  if (selectedDate < today) {
    alert('Please enter a valid future date.');
    return;
  }

  // --- If valid, proceed ---
  taskListTotal.push(new Task(data, date, time));
  saveData();
  renderNotes();
  resetForm(); // Clear form after success
  console.log(taskListTotal);
}



// original function i have wrote //

function addTask(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.taskData.value.trim();
  const date = form.taskDate.value;
  const time = form.taskTime.value;

  taskListTotal.push(new Task(data, date, time));
  saveData();
  renderNotes(true);
  console.log(taskListTotal);
}

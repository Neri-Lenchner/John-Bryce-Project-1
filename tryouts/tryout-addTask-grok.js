function addTask(event) {
  event.preventDefault();

  const form = event.target;
  const data = form.taskData.value.trim();
  const date = form.taskDate.value; // YYYY-MM-DD
  const time = form.taskTime.value;

  // --- DATE VALIDATION ---
  if (data === '' || date === '' || time === '') {
    alert('Please fill in all fields.');
    return;
  }

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

// Optional: Allow Today’s Date //

if (selectedDate <= today) {
  alert('Please select a future date (tomorrow or later).');
  return;
}

// Bonus: Highlight Past Tasks (Optional Visual Feedback) //

// Inside renderNotes() loop, after creating date/time
const taskDateTime = new Date(task.taskDate + 'T' + task.taskTime + ':00');
const now = new Date();

if (taskDateTime < now) {
  note.classList.add('past-task');
}

// CSS //

/*
  .past-task {
  opacity: 0.6;
  border-left: 4px solid #ccc;
}

// Example HTML Inputs (for reference) // 

<form id="taskForm" onsubmit="addTask(event)">
  <textarea id="large-text-erea-element" name="taskData" required></textarea>
  <input type="date" name="taskDate" required>
  <input type="time" name="taskTime" required>
  <button type="submit">Add Task</button>
</form>

*/
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskTime = document.getElementById('task-time');
    const taskList = document.getElementById('task-list');
  
    // Add Task
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = taskInput.value;
      const dueDate = taskDate.value;
      const dueTime = taskTime.value;
  
      const listItem = document.createElement('li');
      listItem.className = 'task-item';
      listItem.innerHTML = `
        <span>${taskText} - ${dueDate} ${dueTime}</span>
        <div>
          <button class="complete-btn">Complete</button>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      taskList.appendChild(listItem);
  
      taskInput.value = '';
      taskDate.value = '';
      taskTime.value = '';
    });
  
    // Handle Task Actions
    taskList.addEventListener('click', (e) => {
      const target = e.target;
      const taskItem = target.closest('.task-item');
  
      if (target.classList.contains('complete-btn')) {
        taskItem.classList.toggle('completed');
      } else if (target.classList.contains('edit-btn')) {
        const taskSpan = taskItem.querySelector('span');
        const [taskText, taskDateTime] = taskSpan.textContent.split(' - ');
        const [editDate, editTime] = taskDateTime.split(' ');
  
        taskInput.value = taskText;
        taskDate.value = editDate;
        taskTime.value = editTime;
  
        taskItem.remove();
      } else if (target.classList.contains('delete-btn')) {
        taskItem.remove();
      }
    });
  });
  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('open'); // Toggle the menu visibility
  }
  function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger-icon');
    
    menu.classList.toggle('open'); // Toggle the menu visibility
    hamburger.classList.toggle('open'); // Toggle the hamburger icon for animation
  }
  

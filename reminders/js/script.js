document.addEventListener('DOMContentLoaded', () => {
  const reminderList = document.getElementById('reminder-list'); //Muestra la lista de recordatorios
  const reminderForm = document.getElementById('reminder-form'); // Sirve para añadir nuevos datos con el formulario (no se puede modificar el JSON por medidas de seguridad del navegador)
  const reminderInput = document.getElementById('reminder-input'); // Sirve para añadir nuevos recordatorios

  //Parsea el JSON con los recordatorios de muestra
  fetch('./json/reminders.json')
    .then(response => response.json())
    .then(reminders => reminders.forEach(reminder => {
      reminderList.innerHTML += `<div class="p-2.5 rounded border3d w-full">${reminder.text}</div>`;
    }));

  // Limpia el input y añade el recordatorio
  reminderForm.onsubmit = function(event) {
    event.preventDefault();
    const reminderText = reminderInput.value.trim(); // Extrae el texto y vacia el input
    if (reminderText) {
      reminderList.innerHTML += `<div class="p-2.5 rounded border3d w-full">${reminderText}</div>`;
      reminderInput.value = '';
    }
  };
});

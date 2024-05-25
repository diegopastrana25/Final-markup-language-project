document.addEventListener('DOMContentLoaded', function() {  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["M", "T", "W", "T", "F", "S", "S"];
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    const today = new Date();
  
    function viewCalendar() {
      // Calcular los días del mes y en que día de la semana empieza el calendario
      const daysInMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
      let startDay = new Date(currentYear, currentMonth).getDay();
      startDay = (startDay === 0) ? 6 : startDay - 1;
  
      // Crea el HTML para los días
      const daysHTML = Array.from({ length: daysInMonth }, function(_, day) {
        const isToday = day + 1 === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
        return `<div class='flex justify-center items-center text-3xl ${isToday ? 'bg-blue-500 rounded-xl' : ''}'>${day + 1}</div>`;
      }).join('');
  
      document.getElementById('calendar-container').innerHTML = `
        <div class='flex justify-between items-center p-2 bg-blue-800 text-white text-2xl rounded-xl border3d'>
          <button onclick='navigateMonth(-1)'>❮</button>
          <h2>${monthNames[currentMonth]} ${currentYear}</h2>
          <button onclick='navigateMonth(1)'>❯</button>
        </div>
        <div class='grid grid-cols-7 gap-12 p-10 text-cyan-500'>
          ${dayNames.map(function(day) { return `<div class='text-center text-4xl'>${day}</div>`; }).join('')}
        </div>
        <div class='grid grid-cols-7 gap-12 p-10 border3d rounded-xl'>
          ${Array(startDay).fill('<div> </div>').join('')}${daysHTML}
        </div>`;
    }
  
    // Cambiar de calendario
    window.navigateMonth = function(month) {
      currentMonth += month;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      viewCalendar();
    };
  
    // "Actualiza el calendario"
    viewCalendar();
  });
  
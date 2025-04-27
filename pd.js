function generateCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Clear previous calendar
  
    const startDate = new Date(document.getElementById('startDate').value);
    if (isNaN(startDate)) {
      alert("Please select a valid date!");
      return;
    }
  
    const daysInMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
  
    const periodDays = [];
    for (let i = 0; i < 5; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);
      if (day.getMonth() === startDate.getMonth()) {
        periodDays.push(day.getDate());
      }
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      const div = document.createElement('div');
      div.className = 'day';
      div.textContent = day;
  
      if (periodDays.includes(day)) {
        div.classList.add('period');
      }
  
      calendar.appendChild(div);
    }
  }
  
  
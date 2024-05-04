// Global Variables
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let calendarMonth = dayjs().month(); // Initialize calendarMonth with the current month index
let calendarYear = dayjs().year(); // Initialize calendarYear with the current year

// DOM Element References
const firstName = document.getElementById('First-Name');
const calendarDay = document.querySelector('.Calendar-Dates');
const calendarCurrentDate = document.querySelector('.Calendar-Current-Date');
const prevButton = document.getElementById('Calendar-Previous');
const nextButton = document.getElementById('Calendar-Next');
const todayButton = document.getElementById('Today-Button');

// Get First Name
fetch('userData.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(User => {
      const firstName = User.first_name;
      console.log(firstName);
    });
  })
  .catch(error => console.error('Error (userData.json):', error));

// Quotable API Random Quote
$.get('https://api.quotable.io/random', function(data) {
    var quote = data.content || "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.";
    $('#Quote').text('"' + quote + '"');
}, 'json');

// DayJS Display Date & Time
$('#Current-Date').html(dayjs().format('dddd, MMMM D, YYYY, h:mm a'));

// Interactive Calendar
const updateCalendar = () => {
    const today = dayjs();
    const firstDay = dayjs(`${calendarYear}-${calendarMonth + 1}-01`).day(); // Get the day of the week for the first day of the month
    const lastDay = dayjs(`${calendarYear}-${calendarMonth + 1}-01`).endOf('month').date(); // Get the last day of the month
    const lastDayName = dayjs(`${calendarYear}-${calendarMonth + 1}-${lastDay}`).day(); // Get the day of the week for the last day of the month

    let calendarHTML = '';

    // Generate HTML for days before the first day of the month
    for (let i = firstDay; i > 0; i--) {
        calendarHTML += `<li class="inactive past">${dayjs(`${calendarYear}-${calendarMonth + 1}-01`).subtract(i, 'day').date()}</li>`;
    }

    // Generate HTML for the days of the current month
    for (let i = 1; i <= lastDay; i++) {
        const date = dayjs(`${calendarYear}-${calendarMonth + 1}-${i}`);
        const isToday = date.isSame(today, 'day') ? 'active current-day' : (date.isBefore(today, 'day') ? 'active past' : 'active future');
        calendarHTML += `<li class='${isToday}'>${i}</li>`;
    }

    // Generate HTML for days after the last day of the month
    for (let i = lastDayName + 1; i < 7; i++) {
        calendarHTML += `<li class='inactive future'>${dayjs(`${calendarYear}-${calendarMonth + 1}-${lastDay}`).add(i - lastDayName, 'day').date()}</li>`;
    }

    calendarCurrentDate.innerText = `${months[calendarMonth]} ${calendarYear}`;
    calendarDay.innerHTML = calendarHTML;
};

const updateMonth = (increment) => {
    calendarMonth = (calendarMonth + increment + 12) % 12;
    if (increment !== 0 && (calendarMonth === 0 || calendarMonth === 11)) {
        calendarYear += increment > 0 ? 1 : -1;
    }
    updateCalendar();
};

const isCurrentMonth = () => {
    return dayjs().month() === calendarMonth;
};

prevButton.addEventListener('click', () => updateMonth(-1));
nextButton.addEventListener('click', () => updateMonth(1));
todayButton.addEventListener('click', () => {
    if (!isCurrentMonth()) {
        calendarMonth = dayjs().month();
        calendarYear = dayjs().year();
        updateCalendar();
    }
});

updateCalendar()

// Redirect to the workoutPlanner.handlebars page when clicking on the calendar
calendarDay.addEventListener('click', () => {
    window.location.href = '/workoutPlanner'; 
});
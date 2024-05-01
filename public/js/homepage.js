// Global Variables
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// DOM Element References
const calendarDay = document.querySelector('.cal-dates');
const calendarCurrentDate = document.querySelector('.cal-current-date');
const prevButton = document.getElementById('cal-prev');
const nextButton = document.getElementById('cal-next');
const todayButton = document.getElementById('today-button');

// Quotable API Random Quote
$.get('https://api.quotable.io/random', function(data) {
    var quote = data.content || "Your self-worth is determined by you. You don't have to depend on someone telling you who you are.";
    $('#Quote').text('"' + quote + '"');
}, 'json');

// DayJS Display Date & Time
$('#currentDate').html(dayjs().format('dddd, MMMM D, YYYY, h:mm a'));

// Interactive Calendar
const updateCalendar = () => {
    const today = dayjs();
    const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
    const lastDay = new Date(calendarYear, calendarMonth + 1, 0).getDate();
    const lastDayName = new Date(calendarYear, calendarMonth, lastDay).getDay();
    const monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate();

    let calendarHTML = '';

    for (let i = firstDay; i > 0; i--) {
        calendarHTML += `<li class="inactive past">${monthLastDate - i}</li>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        const date = dayjs(`${months[calendarMonth]} ${i}, ${calendarYear}`, 'MMMM D, YYYY');
        const isToday = date.isSame(today, 'day') ? 'active current-day' : (date.isBefore(today, 'day') ? 'active past' : 'active future');
        calendarHTML += `<li class='${isToday}'>${i}</li>`;
    }

    for (let i = lastDayName; i < 6; i++) {
        calendarHTML +=`<li class='inactive future'>${i - lastDayName + 1}</li>`;
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
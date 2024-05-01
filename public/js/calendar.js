// Feature: Interactive Calendar
var date = new Date();
var calendarYear = date.getFullYear();
var calendarMonth = date.getMonth();
var calendarDay = document.querySelector('.cal-dates');
var calendarCurrentDate = document.querySelector('.cal-current-date');
var calendarIcons = document.querySelector('.cal-nav span');

// Months Array
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function: Show Calendar
const calendarFunction = () => {
    const today = dayjs();
    var dayOne = new Date(calendarYear, calendarMonth, 1).getDay(); // Obtain First Day of the New Month
    var lastDay = new Date(calendarYear, calendarMonth + 1, 0).getDate(); // Obtain Last Day of the New Month
    var lastDayName = new Date(calendarYear, calendarMonth, lastDay).getDay(); // Obtain Day Name of the Last Day in the Month
    var monthLastDate = new Date(calendarYear, calendarMonth, 0).getDate(); // Obtain Last Date of the Previous Month
    var lit = "";
    for (let i = dayOne; i > 0; i--) { // Add Last Dates of the Previous Month
        lit += `<li class="inactive past">${monthLastDate - i}</li>`;
    };
    for (let i = 1; i <= lastDay; i++) {
        const date = dayjs(`${months[calendarMonth]} ${i}, ${calendarYear}`, 'MMMM D, YYYY'); // Add Dates of the Current Month
        const isToday = date.isSame(today, 'day') ? "active current-day" : (date.isBefore(today, 'day') ? "active past" : "active future");
        lit += `<li class="${isToday}">${i}</li>`;
    };

    for (let i = lastDayName; i < 6; i++) {
        lit += `<li class="inactive future">${i - lastDayName + 1}</li>`;
    };
    calendarCurrentDate.innerText = `${months[calendarMonth]} ${calendarYear}`;
    calendarDay.innerHTML = lit;
};
calendarFunction();

// Function: Navigation Buttons Event Listeners
const prevButton = document.getElementById('cal-prev');
const nextButton = document.getElementById('cal-next');
prevButton.addEventListener('click', function () {
    calendarMonth--; // Decrease Month By 1
    if (calendarMonth < 0) {
        calendarMonth = 11; // If Month Goes Below January, Set it to December
        calendarYear--; // Decrease Year
    };
    calendarFunction(); // Update Calendar Display
});
nextButton.addEventListener('click', function () {
    calendarMonth++; // Increase Month By 1
    if (calendarMonth > 11) {
        calendarMonth = 0; // If Month Goes Above December, Set it to January
        calendarYear++; // Increase Year
    };
    calendarFunction(); // Update Calendar Display
});
calendarFunction();

// Check if Current Month is Different From Displayed Month
function isCurrentMonth() {
    const currentMonth = dayjs().month();
    return currentMonth === calendarMonth;
};
// Event Listener for "Today" Button Click
const todayButton = document.getElementById('today-button');
todayButton.addEventListener('click', function() {
    if (!isCurrentMonth()) {
        calendarMonth = dayjs().month();
        calendarYear = dayjs().year();
        calendarFunction(); // Update Calendar Display
    }
});





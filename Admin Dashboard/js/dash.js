const calendar = document.querySelector(".calendar"),
    date = document.querySelector(".date"),
    daysContainer = document.querySelector(".days"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    todayBtn = document.querySelector(".today-btn"),
    gotoBtn = document.querySelector(".goto-btn"),
    dateInput = document.querySelector(".date-input"),
    eventDay = document.querySelector(".event-day"),
    eventDate = document.querySelector(".event-date"),
    eventsContainer = document.querySelector(".events"),
    addEventBtn = document.querySelector(".add-event"),
    addEventWrapper = document.querySelector(".add-event-wrapper"),
    addEventCloseBtn = document.querySelector(".close"),
    addEventTitle = document.querySelector(".event-name"),
    addEventFrom = document.querySelector(".event-time-from"),
    addEventTo = document.querySelector(".event-time-to"),
    addEventCategory = document.querySelector(".event-category"),
    addEventSubmit = document.querySelector(".add-event-btn");
 
let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const eventsArr = [];
getEvents();
console.log(eventsArr);


function initCalendar() {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const day = firstDay.getDay();
    const nextDays = 7 - lastDay.getDay() - 1;

    document.getElementById("current-month").innerText = months[month] + " " + year;

    let days = "";

    for (let x = day; x > 0; x--) {
        days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        let event = false;
        eventsArr.forEach((eventObj) => {
            if (
                eventObj.day === i &&
                eventObj.month === month + 1 &&
                eventObj.year === year
            ) {
                event = true;
            }
        });
        if (
            i === new Date().getDate() &&
            year === new Date().getFullYear() &&
            month === new Date().getMonth()
        ) {
            activeDay = i;
            getActiveDay(i);
            updateEvents(i);
            if (event) {
                days += `<div class="day today active event">${i}</div>`;
            } else {
                days += `<div class="day today active">${i}</div>`;
            }
        } else {
            if (event) {
                days += `<div class="day event">${i}</div>`;
            } else {
                days += `<div class="day ">${i}</div>`;
            }
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next-date">${j}</div>`;
    }
    daysContainer.innerHTML = days;
    addListner();
}

function prevMonth() {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    initCalendar();
}

function nextMonth() {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

function addListner() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));
            activeDay = Number(e.target.innerHTML);
            days.forEach((day) => {
                day.classList.remove("active");
            });
            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");
                    days.forEach((day) => {
                        if (!day.classList.contains("prev-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");
                    days.forEach((day) => {
                        if (!day.classList.contains("next-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else {
                e.target.classList.add("active");
            }
        });
    });
}
todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }
    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

initCalendar();

function addListner() {
    const days = document.querySelectorAll(".day");
    days.forEach((day) => {
        day.addEventListener("click", (e) => {
            getActiveDay(e.target.innerHTML);
            updateEvents(Number(e.target.innerHTML));
            activeDay = Number(e.target.innerHTML);
            days.forEach((day) => {
                day.classList.remove("active");
            });
            if (e.target.classList.contains("prev-date")) {
                prevMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");
                    days.forEach((day) => {
                        if (!day.classList.contains("prev-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else if (e.target.classList.contains("next-date")) {
                nextMonth();
                setTimeout(() => {
                    const days = document.querySelectorAll(".day");
                    days.forEach((day) => {
                        if (!day.classList.contains("next-date") &&
                            day.innerHTML === e.target.innerHTML
                        ) {
                            day.classList.add("active");
                        }
                    });
                }, 100);
            } else {
                e.target.classList.add("active");
            }
        });
    });
}

todayBtn.addEventListener("click", () => {
    today = new Date();
    month = today.getMonth();
    year = today.getFullYear();
    initCalendar();
});

dateInput.addEventListener("input", (e) => {
    dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
    if (dateInput.value.length === 2) {
        dateInput.value += "/";
    }
    if (dateInput.value.length > 7) {
        dateInput.value = dateInput.value.slice(0, 7);
    }
    if (e.inputType === "deleteContentBackward") {
        if (dateInput.value.length === 3) {
            dateInput.value = dateInput.value.slice(0, 2);
        }
    }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
    console.log("here");
    const dateArr = dateInput.value.split("/");
    if (dateArr.length === 2) {
        if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
            month = dateArr[0] - 1;
            year = dateArr[1];
            initCalendar();
            return;
        }
    }
    alert("Invalid Date");
}

function getActiveDay(date) {
    const day = new Date(year, month, date);
    const dayName = day.toString().split(" ")[0];
    eventDay.innerHTML = dayName;
    eventDate.innerHTML = date + " " + months[month] + " " + year;
}

// function updateEvents(date) {
//     let events = "";
//     eventsArr.forEach((event) => {
//         if (
//             date === event.day &&
//             month + 1 === event.month &&
//             year === event.year
//         ) {
//             event.events.forEach((event) => {
//                 events += `<div class="event-container">
//                             <div class="event">
//                                     <div class="title">
//                                     <i class="fas fa-circle"></i>
//                                     <h3 class="event-title">${event.title}</h3><br>
//                                     <h2 class="event-category">${event.category}</h2>
//                                     </div>
//                                     <div class="event-time">
//                                     <span class="event-time">${event.time}</span>
//                                     </div>
//                          </div>
//                         </div>
// `;
//             });
//         }
//     });
//     if (events === "") {
//         events = `<div class="no-event">
//             <h3>No Events</h3>
//         </div>`;
//     }
//     eventsContainer.innerHTML = events;
//     saveEvents();
// }

addEventBtn.addEventListener("click", () => {
    addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
    addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
    if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
        addEventWrapper.classList.remove("active");
    }
});

addEventTitle.addEventListener("input", (e) => {
    addEventTitle.value = addEventTitle.value.slice(0, 60);
});

addEventFrom.addEventListener("input", (e) => {
    addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
    if (addEventFrom.value.length === 2) {
        addEventFrom.value += ":";
    }
    if (addEventFrom.value.length > 5) {
        addEventFrom.value = addEventFrom.value.slice(0, 5);
    }
});

addEventTo.addEventListener("input", (e) => {
    addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
    if (addEventTo.value.length === 2) {
        addEventTo.value += ":";
    }
    if (addEventTo.value.length > 5) {
        addEventTo.value = addEventTo.value.slice(0, 5);
    }
});

// addEventSubmit.addEventListener("click", () => {
//     const eventTitle = addEventTitle.value;
//     const eventTimeFrom = addEventFrom.value;
//     const eventTimeTo = addEventTo.value;
//     const eventCategory = addEventCategory.value;

//     if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "" || eventCategory === "") {
//         alert("Please fill all the fields");
//         return;
//     }

//     const timeFromArr = eventTimeFrom.split(":");
//     const timeToArr = eventTimeTo.split(":");
//     if (
//         timeFromArr.length !== 2 ||
//         timeToArr.length !== 2 ||
//         timeFromArr[0] > 23 ||
//         timeFromArr[1] > 59 ||
//         timeToArr[0] > 23 ||
//         timeToArr[1] > 59
//     ) {
//         alert("Invalid Time Format");
//         return;
//     }

//     const timeFrom = convertTime(eventTimeFrom);
//     const timeTo = convertTime(eventTimeTo);

//     let eventExist = false;
//     eventsArr.forEach((event) => {
//         if (
//             event.day === activeDay &&
//             event.month === month + 1 &&
//             event.year === year
//         ) {
//             event.events.forEach((event) => {
//                 if (event.title === eventTitle) {
//                     eventExist = true;
//                 }
//             });
//         }
//     });
//     if (eventExist) {
//         alert("Event already added");
//         return;
//     }
//     const newEvent = {
//         title: eventTitle,
//         time: timeFrom + " - " + timeTo,
//         category: eventCategory
//     };
//     console.log(newEvent);
//     console.log(activeDay);
//     let eventAdded = false;
//     if (eventsArr.length > 0) {
//         eventsArr.forEach((item) => {
//             if (
//                 item.day === activeDay &&
//                 item.month === month + 1 &&
//                 item.year === year
//             ) {
//                 item.events.push(newEvent);
//                 eventAdded = true;
//             }
//         });
//     }

//     if (!eventAdded) {
//         eventsArr.push({
//             day: activeDay,
//             month: month + 1,
//             year: year,
//             events: [newEvent],
//         });
//     }

//     console.log(eventsArr);
//     addEventWrapper.classList.remove("active");
//     addEventTitle.value = "";
//     addEventFrom.value = "";
//     addEventTo.value = "";
//     addEventCategory.value = "";
//     updateEvents(activeDay);
//     const activeDayEl = document.querySelector(".day.active");
//     if (!activeDayEl.classList.contains("event")) {
//         activeDayEl.classList.add("event");
//     }
// });

eventsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("event")) {
        if (confirm("Are you sure you want to delete this event?")) {
            const eventTitle = e.target.children[0].children[1].innerHTML;
            eventsArr.forEach((event) => {
                if (
                    event.day === activeDay &&
                    event.month === month + 1 &&
                    event.year === year
                ) {
                    event.events.forEach((item, index) => {
                        if (item.title === eventTitle) {
                            event.events.splice(index, 1);
                        }
                    });
                    if (event.events.length === 0) {
                        eventsArr.splice(eventsArr.indexOf(event), 1);
                        const activeDayEl = document.querySelector(".day.active");
                        if (activeDayEl.classList.contains("event")) {
                            activeDayEl.classList.remove("event");
                        }
                    }
                }
            });
            updateEvents(activeDay);
        }
    }
});


function getEvents() {
    if (localStorage.getItem("events") === null) {
        return;
    }
}

function convertTime(time) {
    let timeArr = time.split(":");
    let timeHour = timeArr[0];
    let timeMinutes = timeArr[1];
    let timeFormat = timeHour >= 12 ? 'PM' : 'AM';
    timeHour = timeHour % 12 || 12; // Convert hour to 12-hour format and handle midnight (00:00)
    return timeHour + ":" + timeMinutes + " " + timeFormat;
}

async function fetchEvents() {
    try {
        const response = await fetch('https://aagneya-backend.onrender.com/api/displayevent');
        const data = await response.json();

        if (data.success) {
            return data.event; // Return the fetched event data
        } else {
            console.error('Failed to fetch events');
            return [];
        }
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

async function updateEvents(date, month, year) {
    console.log("Updating events for:", date, month, year);

    // Ensure month is a number between 1 and 12
    month = Number(month);
    if (isNaN(month) || month < 1 || month > 12) {
        console.error("Invalid month:", month);
        month = new Date().getMonth() + 1; // Default to current month
    }

    // Ensure year is a number
    year = Number(year);
    if (isNaN(year)) {
        console.error("Invalid year:", year);
        year = new Date().getFullYear(); // Default to current year
    }

    console.log("Adjusted date:", date, month, year);

    const events = await fetchEvents(); // Fetch events directly

    let eventDay = events.filter(event => {
        const eventDate = new Date(event.event_date);
        return (
            eventDate.getDate() === date &&
            eventDate.getMonth() + 1 === month &&
            eventDate.getFullYear() === year
        );
    });

    let eventsHtml = "";

    if (eventDay.length > 0) {
        eventsHtml = eventDay.map(event => `
            <div class="event-container">
                <div class="event">
                    <div class="title-container">
                        <div class="event-name">
                            <i class="fas fa-circle"></i>
                            <h3 class="event-title">${event.event_name}</h3>
                        </div>
                        <div class="event-category">
                            <h3 class="category-title">${event.category}</h3>
                        </div>
                    </div>
                    <div class="time-container">
                        <div class="event-time">
                            <span class="time-title">${event.event_time}</span>
                        </div>
                        <div class="event-sport">
                            ${event.sport_name ? `<h4 class="sport-title">${event.sport_name}</h4>` : ''}
                        </div>
                    </div>
                </div>
            </div>
            <style>
            .event-container {
    margin-bottom: 8px;
    padding: 5px;
}

.event {
    display: flex;
    flex-direction: column;
}

.title-container, .time-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.event-name, .event-time {
    flex: 1;
}

.event-category, .event-sport {
    flex: 1;
    text-align: right;
}

.event-title {
    font-size: 18px;
    font-weight: bold;
    margin-left: 5px;
}

.category-title, .sport-title, .time-title {
    font-size: 16px;
    color: rgb(168, 168, 169);
}

.fas.fa-circle {
    color: #ff4500;
    margin-right: 8px;
}

.event-sport {
    font-size: 14px;
    font-style: italic;
    color: #888;
}
</style>
        `).join('');
    }
     else {
        eventsHtml = `
            <div class="no-event">
                <h3>No Events</h3>
            </div>
        `;
    }

    if (eventsContainer) {
        eventsContainer.innerHTML = eventsHtml;
    } else {
        console.error("eventsContainer not found");
    }
}

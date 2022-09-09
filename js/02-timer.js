import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const btnStart = document.querySelector('[data-start]');
const inputField = document.querySelector('#datetime-picker');


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

    //   console.log(selectedDates[0]);
    },
};

flatpickr(inputField, {options});


btnStart.addEventListener('click',onBtnClickStart);


function onBtnClickStart() {
};


// function convertMs(ms) {
//     const second = 1000;
//     const minute = second * 60;
//     const hour = minute * 60;
//     const day = hour * 24;
  
//     const days = addLeadingZero(Math.floor(ms / day));
//     const hours = addLeadingZero(Math.floor((ms % day) / hour));
//     const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//     const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//     return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// }













// const timer = new Timer();



// class Timer {
//     constructor() {
//         this.isActive = false;
//     }

//     start() {
//         const startTime = Date.now();

//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { days, hours, minutes, seconds } = convertMs(deltaTime);
//             console.log(`${days}:${hours}:${minutes}:${seconds}`);
//         }, 1000);
//     }

// };

// timer.start();
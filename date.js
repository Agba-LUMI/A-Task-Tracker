// const currentDate = document.querySelector(".current-date");
// const currentTime = document.querySelector(".current-time");
// const date = new Date();

// // Display Date
// const getDate = (today) => {
//   let months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "June",
//     "July",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

//   const day = days[today.getDay()];
//   const date = today.getDate();
//   const month = months[today.getMonth()];
//   const year = today.getFullYear();

//   return `${day}, ${date} ${month} ${year}`;
// };

// currentDate.innerHTML = getDate(date);

// // Display Time
// const displayTime = () => {
//   const date = new Date();
//   currentTime.innerHTML = date.toLocaleTimeString();
// };
// // displayTime();
// setInterval(displayTime, 1000);


const currentDate = document.querySelector(".current-date");
const currentTime = document.querySelector(".current-time");

const today = new Date();

const getDate = () => {

  let months = [
    "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",

  ]
  const days = [ "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"

  ];

  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const date = today.getDate();
  const year = today.getFullYear();

  return `${day}, ${date} ${month} ${year}`
}
currentDate.innerHTML = getDate();



// Display Time

const displayTime = () => {
  const today = new Date();
  currentTime.innerHTML = today.toLocaleTimeString();
}
setInterval(displayTime, 1000);


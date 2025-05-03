// ======= old way ======= //

let myDate = new Date();

// Month count starts with 0 and Day count starts with Monday

console.log(myDate);    // 2025-05-03T19:18:13.136Z
console.log(myDate.toString()); // Sat May 03 2025 19:18:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleString());   // 5/3/2025, 7:18:13 PM
console.log(myDate.toDateString()); // Sat May 03 2025
console.log(myDate.toLocaleDateString());   // 2025-05-03T19:18:13.136Z
console.log(myDate.toISOString());  // 5/3/2025
console.log(myDate.toTimeString()); // 19:18:13 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON());   // 2025-05-03T19:18:13.136Z
console.log(myDate.toUTCString());  // Sat, 03 May 2025 19:18:13 GMT

console.log(myDate.getDate());  // 3
console.log(myDate.getDay());   // 6
console.log(myDate.getFullYear());  // 2025
console.log(myDate.getMilliseconds());  // 728
console.log(myDate.getTime());  // 1746300514728
console.log(myDate.getTimezoneOffset());    // 0
console.log(myDate.getUTCDate());   // 3
console.log(myDate.getUTCHours());  // 19
console.log(myDate.getUTCMonth());  // 4


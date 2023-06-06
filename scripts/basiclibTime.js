const time = new Date()
console.info(time)
console.info(time.getFullYear())
console.info(time.getMonth())
console.info(time.getDate())
console.info(time.getHours())
console.info(time.getMinutes())
console.info(time.getSeconds())
console.info(time.getMilliseconds())
console.info(time.getTimezoneOffset())
const timestamp = Date.now();
console.info(timestamp);

const dateUnix = new Date(timestamp);
console.info(dateUnix)
console.info(dateUnix.getTime())


// console.info(timeNow.getTime());

// epoch 
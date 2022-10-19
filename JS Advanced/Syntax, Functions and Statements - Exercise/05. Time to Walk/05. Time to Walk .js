function timeToWalk(steps, foodPrint, speed) {
    const speedInMSec = speed * 1000 / 3600;
    const distanceInMeters = steps * foodPrint;
    const rest = Math.floor(distanceInMeters / 500) * 60;
    const time = (distanceInMeters / speedInMSec) + rest;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2,'0');
    const minutes =Math.floor(time / 60).toFixed(0).padStart(2,'0');
    const seconds = (time % 60).toFixed(0).padStart(2,'0');

    console.log (`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);
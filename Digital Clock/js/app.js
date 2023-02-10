var cl = console.log;

function createClock() {
    const digitalclock = document.getElementById("digitalclock");
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    let session = "AM";
    if (hr >= 12) {
        session = "PM"
    }
    if (hr > 12) {
        hr = hr - 12
    }
    hr = setZero(hr)
    min = setZero(min)
    sec = setZero(sec)
    let result = `${hr} : ${min} : ${sec} : ${session}`;

    digitalclock.innerHTML = result;

    setTimeout(createClock, 1000)
}
createClock();
function setZero(num) {
    return (num < 10) ? '0' + num : num
}


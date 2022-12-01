function timer() {

    // Timer 

    const dedline = '2022-12-31';

    function getTimeRemaining(endtime) {
        let day, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());

        if (t <= 0) {
            day = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            day = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            minutes = Math.floor((t / (1000 * 60)) % 60);
            seconds = Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'day': day,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
        // return {
        //     t,
        //     day,
        //     hours,
        //     minutes,
        //     seconds,
        // };
    }

    function getZero(num) { // якщо число менше 10 то спереду додати 0 (05)
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        updateClock(); // щоб при оновленні одразу не відображалась стара дата(те що у весткі)

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.day);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', dedline);

}
// export default timer;
module.exports = timer;
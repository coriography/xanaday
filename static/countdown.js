const deadline = '12/10/22 6:00:00 GMT-5'

function getTimeRemaining(endtime){
    const total = Date.parse(endtime) - Date.parse(new Date());
    console.log(total);
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    console.log(days);
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('#days');
    const hoursSpan = clock.querySelector('#hours');
    const minutesSpan = clock.querySelector('#minutes');
    const secondsSpan = clock.querySelector('#seconds');
    function updateClock(){
      const t = getTimeRemaining(endtime);
      if (t.days > 99) {
        daysSpan.innerHTML = (t.days);
      } else if (t.days > 9) {
        daysSpan.innerHTML = (t.days);
      } else {
        daysSpan.innerHTML = '0' + (t.days);
      }
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
    
    updateClock(); // run function once at first to avoid delay
    let timeinterval = setInterval(updateClock,1000);
  }

  initializeClock('clockdiv', deadline);
const refs = {
    daysField: document.querySelector('[data-value="days"]'),
    hoursField: document.querySelector('[data-value="hours"]'),
    minsField: document.querySelector('[data-value="mins"]'),
    secsField: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
    constructor({selector, targetDate}){
        this.selector=selector;
        this.targetDate=targetDate;

        this.start();
    }
    updateClockFace({ days, hours, mins, secs }){
        refs.daysField.textContent = `${days}`;
        refs.hoursField.textContent = `${hours}`;
        refs.minsField.textContent = `${mins}`;
        refs.secsField.textContent = `${secs}`;
    }
  
    start() { 
        setInterval(() => {
        const currentTime=Date.now();
        const deltaTime=this.targetDate-currentTime;
        const time=this.getTimeComponents(deltaTime);
        this.updateClockFace(time);

    }, 1000);
    }

 
    pad(value) {
        return String(value).padStart(2, '0');
    } 

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs };
    }
    
}
const timer= new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
  });







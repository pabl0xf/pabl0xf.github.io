import LowBattery from './events/lowBattery.js';

class EventManager {
  constructor() {
    this.events = {};
  }

  addEvent(eventObject, eventType){
     this.events[eventType] = eventObject;
     this.events[eventType].run();
  }

  removeEvent (evenType){
    var event = this.events[evenType];
    if(event && event.intervalId){
      delete this.events[evenType];
      clearInterval(event.intervalId);
    }
  }
}

export let eventManager =  new EventManager();

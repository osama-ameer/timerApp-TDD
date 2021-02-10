import React from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

type Props ={
 minutes: number,
 seconds: number,
 isOn: boolean,
myInterval: any;
timer: any
}

class Timer extends React.PureComponent<any, Props>  {
  
  
  constructor(props: any) {
    super(props);
  this.state = {
      minutes: 25,
      seconds: 0,
      isOn: false,
      myInterval: 0,
      timer: ""
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }


  

  startTimer() {
    // let myInterval = setInterval(() => { 
       
    // }, 1000);
    


    if (this.state.isOn === true) {
      return;
    }
    
    

   let myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    this.setState({ isOn: true });
    this.setState({ timer: myInterval })
  }

  stopTimer() {
    
    
    clearInterval(this.state.timer);
    this.setState({ isOn: false });
  }

  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 25,
      seconds: 0,
    });
  }
  

  render = () => {
    const { minutes, seconds } :any = this.state;

    return (
      <div className="timer-container">

        <div className="time-display">
          <p className="timer-title">Timer</p>
          <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        </div>
        <div className="timer-button-container">
          <TimerButton
            // className="start-timer"
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton
            // className="stop-timer"
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />
          <TimerButton
            // className="reset-timer"
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  };
}

export default Timer;
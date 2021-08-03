
import TimeTracker from 'react-time-tracker-stopwatch';


import React, { Component } from 'react'

export default class Tracker extends Component {
    constructor(props, ...args) {
        super(props, ...args);
        this.timeTracker = React.createRef();
      }
     
      render() {
        return (
          <div>
            <TimeTracker
              onTimeUpdate={(...args) => console.log(args)}
              ref={this.timeTracker}></TimeTracker>
            <button
              onClick={() => this.timeTracker.current.setTimeTrackerState(0)}>
              Reset to 0:00:00 but don't change whether or not the tracker is running.
            </button>
            <button
              onClick={() => this.timeTracker.current.setTimeTrackerState(0, 0)}>
              Reset to 0:00:00 but make sure the tracker is running.
            </button>
            <button
              onClick={() => this.timeTracker.current.setTimeTrackerState(0, -1)}>
              Reset to 0:00:00 but make sure the tracker is not running.
            </button>
            <button
              onClick={() => this.timeTracker.current.setTimeTrackerState(3600, -1)}
            >
              Reset to 1:00:00 but make sure the tracker is not running.
            </button>
          </div>
        )
      }
}

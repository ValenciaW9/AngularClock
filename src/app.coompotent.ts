import { Component } from '@angular/core';

export class ClockUpdater {
  hours = '00';
  minutes = '00';

  // rest of the code...
}


@Component({
  selector: 'app-root',
  template: `
    <div id="ClockUpdater" class="container">
      <div class="row">
        <button
          id="hours-up-button"
          (click)="handleHoursUpButtonClick()"
          class="btn btn-outline-primary col"
        >
          &uarr;
        </button>

        <button
          id="minutes-up-button"
          (click)="handleMinutesUpButtonClick()"
          class="btn btn-outline-primary col"
        >
          &uarr;
        </button>
      </div>

      <div class="row">
        <div id="clock" class="badge badge-primary col">{{ hours }}:{{ minutes }}</div>
      </div>

      <div class="row">
        <button
          id="hours-down-button"
          (click)="handleHoursDownButtonClick()"
          class="btn btn-outline-primary col"
        >
          &darr;
        </button>
        <button
          id="minutes-down-button"
          (click)="handleMinutesDownButtonClick()"
          class="btn btn-outline-primary col"
        >
          &darr;
        </button>
      </div>
    </div>
  `,
    
})
export class AppComponent {
  hours = '-';
  minutes = '+';

  handleHoursUpButtonClick() {
    console.log('HoursUpButtonClick' + '+');
  }

  handleHoursDownButtonClick() {
    console.log('DownButtonClick' + '-');
  }

  handleMinutesUpButtonClick() {
    console.log('MinutesUpButtonClick' + '+');
  }

  handleMinutesDownButtonClick() {
    console.log('MinutesDownButtonClick' + '-');
  }
}
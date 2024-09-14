import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather5-days',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather5-days.component.html',
  styleUrl: './weather5-days.component.scss'
})

export class Weather5DaysComponent implements OnChanges {
  @Input() weather5Days: any;
  dailyForecast: any = {};
  nextFiveDaysForecast: any[] = [];
Math: any;

  ngOnChanges(changes: SimpleChanges) {
    if (this.weather5Days && this.weather5Days.list) {
      for (let forecast of this.weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        if (!this.dailyForecast[date]) {
          this.dailyForecast[date] = forecast;
        }
      }
    }
    this.nextFiveDaysForecast = Object.values(this.dailyForecast).slice(1,5)
  }

  getIconUrl(forecast: any) {
    return `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
  }

  roundTemperature(temp: number): number {
    return Math.round(temp);
  }

  convertDate(date: any) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
    
    return newDate;
  }

  monthDate(date: any) {
    const newMonth = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { month: 'long' })
    
    return newMonth;
  }

}

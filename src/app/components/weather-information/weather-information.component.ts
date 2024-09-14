import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-information',
  standalone: true,
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.scss']
})
export class WeatherInformationComponent implements OnChanges {
  @Input() weather: any;
  imgUrl: string = "";
  temp: number = 0;
  description: string = "";
  feels_like: number = 0;
  humidity: number = 0;
  pressure: number = 0;

  ngOnChanges(changes: SimpleChanges) {
      this.imgUrl = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`
      this.temp = Math.round(this.weather.main.temp)
      this.description = this.weather.weather[0].description
      this.feels_like = Math.round(this.weather.main.feels_like)
      this.humidity = Math.round(this.weather.main.humidity)
      this.pressure = Math.round(this.weather.main.pressure)
  }
}

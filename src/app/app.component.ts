import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { WeatherInformationComponent } from './components/weather-information/weather-information.component';
import { Weather5DaysComponent } from "./components/weather5-days/weather5-days.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherInformationComponent, CommonModule, Weather5DaysComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'previsao-angular';

  @ViewChild('cityInput') inputRef!: ElementRef;

  weather: any = {};

  setWeather(newWeather: any) {
    this.weather = newWeather;
  }

  weather5Days: any = {};

  setWeather5Days(newWeather5Days: any) {
    this.weather5Days = newWeather5Days;
  }

  async searchCity() {
    const city = this.inputRef.nativeElement.value;
    const key = '6ed65eb223633bfbdc506f6e62733601';
    const lang = 'pt_br';
    const units = 'metric';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=${lang}&units=${units}`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${lang}&units=${units}`;

    const apiInfo = await axios.get(url);
    const apiInfo5Days = await axios.get(url5Days)

    console.log(apiInfo5Days);
    this.setWeather(apiInfo.data);
    this.setWeather5Days(apiInfo5Days.data);
  }
}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weatherdemo',
  templateUrl: './weatherdemo.component.html',
  styleUrls: ['./weatherdemo.component.css']
})
export class WeatherdemoComponent implements OnInit {
  weatherData;
  city: string;
  constructor(private weatherService) { }

  ngOnInit() {
    this.city = '';
    this.weatherData = null;
  }
  getWeatherData() {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      data => this.weatherData = {
        curr_temp: data.main.temp -273,
        max_temp: data.main.temp_max -273,
        min_temp: data.main.temp_min -273
      }
    );
  }
}

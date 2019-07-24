import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_KEY=''; //get the key and put it here

const URL=''; //get url and put it here

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getCurrentWeather(city: string){
    const endpoint='$(URL)/weather?q=$(city)&appid=$(API_KEY)';
    return this.http.get(endpoint,httpOptions);
    }
}

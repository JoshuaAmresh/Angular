import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL='https://jsonplaceholder.typicode.com';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow_Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }
  getPosts()
  {
    return this.http.get('$(URL)/posts',httpOptions);
  }
}

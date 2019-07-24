import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  text: string;
  today: Date;
  constructor() { }

  ngOnInit() {
    this.text='';
    this.today=new Date();
  }

}

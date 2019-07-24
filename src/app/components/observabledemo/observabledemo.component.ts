import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {
  data:any;
  numClicks:any;
  constructor(private myService: ObservableService) { }

  ngOnInit() {
    this.data = null;
    this.numClicks=0;
    this.myService.getData().subscribe(
      incomingData=>this.data=incomingData
    );
  }
  btnClicked(){
    ++this.numClicks;
  }

}

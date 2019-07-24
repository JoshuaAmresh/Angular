import { Component, OnInit } from '@angular/core';
import { ActordataService } from 'src/app/services/actordata.service';
//import { ActorModel } from '../../models/actor.model';
//import { ActordataService } from '../../services/actordata.service';
@Component({
  selector: 'app-actorlist',
  templateUrl: './actorlist.component.html',
  styleUrls: ['./actorlist.component.css']
})
export class ActorlistComponent implements OnInit {
  actorlist;
  newActor;
  tempActor;
  tempActorList;
  selectedIndex;
  constructor(private actordataService: ActordataService) { }

  ngOnInit() {
    /*this.actorlist = [{ name: 'Leonardo DiCaprio', city: 'New Orleans', rating: 10 },
    { name: 'Amber Heard', city: 'Los Angeles', rating: 9.0 },
    { name: 'Adrien Brody', city: 'England', rating: 9.5 },
    { name: 'Alfie Solomons', city: 'Birmingham', rating: 8 }];
    this.newActor = {};
    this.tempActor = {};
    this.selectedIndex = -1;
    this.tempActorList = this.actorlist.slice();*/
    this.actorlist = this.actordataService.getActors();
    this.newActor = {
      name: null,
      city: null,
      rating: null
    };
    this.tempActor = Object.assign({}, this.newActor);
    this.selectedIndex = -1;
    this.tempActorList=this.actorlist.slice();
  }
  deleteActor(index) {
    //this.actorlist.splice(index, 1);
    this.actordataService.deleteActor(index);
  }
  addActor() {
    //this.actorlist.push(this.newActor);
    this.actordataService.addActor(this.newActor);
    this.newActor = {
      name:null,
      city:null,
      rating:null
    };
  }

//below this edit the code
  editActor(index) {
    this.selectedIndex = index;

    this.tempActor = JSON.parse(JSON.stringify(this.actorlist[index]));

  }
  saveActor(index) {
    this.selectedIndex = -1;
  }
  cancelEdit(index) {
    this.actorlist[index] = this.tempActor;
    this.selectedIndex = -1;
  }

}

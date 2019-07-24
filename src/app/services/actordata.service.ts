import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActordataService {
  actorData;
  constructor() { 
  this.actorData = [{ name: 'Leonardo DiCaprio', city: 'New Orleans', rating: 10 },
    { name: 'Amber Heard', city: 'Los Angeles', rating: 9.0 },
    { name: 'Adrien Brody', city: 'England', rating: 9.5 },
    { name: 'Alfie Solomons', city: 'Birmingham', rating: 8 }];
  }
  getActors(){
    return this.actorData;
  }
  addActor(actor){
    this.actorData.push(actor);
  }
  deleteActor(index){
    this.actorData.splice(index,1);
  }
  updateActor(index, newActorData){
    this.actorData.splice(index,1,newActorData);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CharacterDataService } from './character-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'starWar';
  characters:{name:string,url:string}[]=[];
  subscription: Subscription;

  constructor(private characterDataService:CharacterDataService){}

  ngOnInit(){
    this.subscription = this.characterDataService.characters.subscribe(data => {
      this.characters = data;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

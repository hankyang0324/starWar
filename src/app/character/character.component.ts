import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDataService } from '../character-data.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {
  id:string;
  character:{name:string,url:string};
  films:{title:string,release_date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[];
  showDetails:boolean = false;
  isLoading:boolean = true;
  subscriptionRout:Subscription;
  subscriptionChar:Subscription;
  subscriptionFilm:Subscription;
  subscriptionFork:Subscription;

  constructor(private router:Router,private activeRoute:ActivatedRoute, private characterDataService:CharacterDataService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.subscriptionRout=this.activeRoute.params.subscribe(params => {
      this.isLoading = true;
      this.id = params['id'];
      if('0'>this.id || this.id>'3') {
        this.router.navigate(['']);
        return;
      }
      this.subscriptionChar=this.characterDataService.characters.subscribe(character => {
        this.character = character[this.id];
        if(this.character){
          this.subscriptionFilm = this.characterDataService.getFilms(this.character.url).subscribe(forkjoin=>{
            this.subscriptionFork = forkjoin.subscribe(films => {
              this.isLoading = false;
              this.films = films;
            })
          });
        }
      })
    });
  }

  openDialog(index:number): void {
    const dialogRef = this.dialog.open(ShowDetails, {
      width: '500px',
      data: this.films[index]
    });
  }

  ngOnDestroy() {
    if(this.subscriptionFork) this.subscriptionFork.unsubscribe();
    if(this.subscriptionFilm) this.subscriptionFilm.unsubscribe();
    if(this.subscriptionChar) this.subscriptionChar.unsubscribe();
    if(this.subscriptionRout) this.subscriptionRout.unsubscribe();
  }
}

@Component({
  selector: 'ShowDetails',
  templateUrl: 'showDetails.html',
  styleUrls: ['./showDetails.css']
})
export class ShowDetails {

  constructor(
    public dialogRef: MatDialogRef<ShowDetails>,
    @Inject(MAT_DIALOG_DATA) public data: {title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

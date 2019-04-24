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
  films:{title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[];
  showDetails:boolean = false;
  subscriptionFilm:Subscription;

  constructor(private router:Router,private activeRoute:ActivatedRoute, private characterDataService:CharacterDataService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = params['id'];
      if('0'>this.id || this.id>'3') {
        this.router.navigate(['']);
        return;
      }
      this.characterDataService.characters.subscribe(data => {
        this.character = data[this.id];
        if(this.character){
          this.subscriptionFilm = this.characterDataService.getFilms(this.character.url).subscribe(films=>{
            this.films = films;
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
    this.subscriptionFilm.unsubscribe();
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

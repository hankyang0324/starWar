import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {
  forkjoin=new Observable<any>();
  characters = new BehaviorSubject<{name:string,url:string}[]>([]);
  // films = new Subject<{title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[]>();

  constructor(private http:HttpClient) {
    this.http.get('../assets/characters.json').subscribe(data => {
      this.characters.next(data['characters']);
    });
  }

  getFilms(url:string) {
    let arr = [];
    return this.http.get(url).pipe(map(character => {
        character['films'].forEach(filmUrl => {
          arr.push(this.http.get(filmUrl));
        })
        return forkJoin(arr);
    }));
  }

}

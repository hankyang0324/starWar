import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  characters = new BehaviorSubject<{name:string,url:string}[]>([]);
  films = new BehaviorSubject<{title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[]>([]);

  constructor(private http:HttpClient) {
    this.http.get('../assets/characters.json').subscribe(data => {
      this.characters.next(data['characters']);
    });
  }

  getFilms(url:string) {
    let films:{title:string,date:Date,episode_id:string,opening_crawl:string,director:string,producer:string}[] = [];
    this.http.get(url).subscribe(character => {
      for(let filmUrl of character['films']) {
        this.http.get(filmUrl).subscribe(film => {
          films.push({title:film['title'],date:new Date(film['release_date']),episode_id:film['episode_id'],opening_crawl:film['opening_crawl'],director:film['director'],producer:film['producer']});
          if(filmUrl === character['films'][character['films'].length-1]) {
            this.films.next(films);
          }
        });
      }
    });
    return this.films.asObservable();
  }

}

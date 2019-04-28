import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
var CharacterDataService = /** @class */ (function () {
    function CharacterDataService(http) {
        var _this = this;
        this.http = http;
        this.characters = new BehaviorSubject([]);
        this.films = new BehaviorSubject([]);
        this.http.get('../assets/characters.json').subscribe(function (data) {
            _this.characters.next(data['characters']);
        });
    }
    // getCharacters() {
    //   let characters:{name:string,url:string}[] = [];
    //   this.http.get('../assets/characters.json').subscribe(data => {
    //     characters = data['characters'];
    //     console.log('in '+characters);
    //   });
    //   console.log('out '+characters);
    //   return characters;
    // }
    CharacterDataService.prototype.getFilms = function (url) {
        var _this = this;
        var films = [];
        this.http.get(url).subscribe(function (character) {
            for (var _i = 0, _a = character['films']; _i < _a.length; _i++) {
                var filmUrl = _a[_i];
                _this.http.get(filmUrl).subscribe(function (film) {
                    films.push({ title: film['title'], date: film['release_date'] });
                });
                console.log(films);
            }
        });
        return films;
    };
    CharacterDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CharacterDataService);
    return CharacterDataService;
}());
export { CharacterDataService };
//# sourceMappingURL=character-data.service.js.map
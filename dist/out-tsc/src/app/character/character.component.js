import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDataService } from '../character-data.service';
var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(router, characterDataService) {
        this.router = router;
        this.characterDataService = characterDataService;
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.characterDataService.characters.subscribe(function (data) {
                _this.character = data[_this.id];
                if (_this.character) {
                    _this.films = _this.characterDataService.getFilms(_this.character.url);
                    console.log(_this.films);
                }
            });
        });
    };
    CharacterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-character',
            templateUrl: './character.component.html',
            styleUrls: ['./character.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute, CharacterDataService])
    ], CharacterComponent);
    return CharacterComponent;
}());
export { CharacterComponent };
//# sourceMappingURL=character.component.js.map
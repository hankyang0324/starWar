import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CharacterDataService } from './character-data.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(characterDataService) {
        this.characterDataService = characterDataService;
        this.title = 'starWar';
        this.characters = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterDataService.characters.subscribe(function (data) {
            _this.characters = data;
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CharacterDataService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
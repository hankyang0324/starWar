import { TestBed } from '@angular/core/testing';
import { CharacterDataService } from './character-data.service';
describe('CharacterDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CharacterDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=character-data.service.spec.js.map
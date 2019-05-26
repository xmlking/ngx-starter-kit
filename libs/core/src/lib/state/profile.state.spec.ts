import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ProfileState, ProfileStateModel } from './profile.state';

describe('Profile state', () => {
    let store: Store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ProfileState])]
        }).compileComponents();
        store = TestBed.get(Store);
    }));

    it('should create an empty state', () => {
        const actual = store.selectSnapshot(ProfileState.getState);
        const expected: ProfileStateModel = {
          profile: undefined,
          error: undefined,
          loading: false,
          progress: undefined,
        };
        expect(actual).toEqual(expected);
    });

});

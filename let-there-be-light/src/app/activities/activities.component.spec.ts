import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { ActivitiesComponent } from './activities.component';

describe('ActivitiesComponent', () => {
  let spectator: Spectator<ActivitiesComponent>;
  const createComponent = createComponentFactory({
    component: ActivitiesComponent,
    providers: [],
    imports: []
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
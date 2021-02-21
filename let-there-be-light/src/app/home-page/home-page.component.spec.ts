import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let spectator: Spectator<HomePageComponent>;
  const createComponent = createComponentFactory({
    component: HomePageComponent,
    providers: [],
    imports: []
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

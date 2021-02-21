import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { CoffeePageComponent } from './coffee-page.component';

describe('CoffeePageComponent', () => {
  let spectator: Spectator<CoffeePageComponent>;
  const createComponent = createComponentFactory({
    component: CoffeePageComponent,
    providers: [],
    imports: []
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

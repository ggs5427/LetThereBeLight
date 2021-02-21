import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let spectator: Spectator<ContactUsComponent>;
  const createComponent = createComponentFactory({
    component: ContactUsComponent,
    providers: [],
    imports: []
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

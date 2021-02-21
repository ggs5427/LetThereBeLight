import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { ActivitiesComponent } from './activities.component';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('ActivitiesComponent', () => {
  let spectator: Spectator<ActivitiesComponent>;
  const createComponent = createComponentFactory({
    component: ActivitiesComponent,
    providers: [],
    imports: [
      MatSelectModule,
      MatFormFieldModule,
    ]
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
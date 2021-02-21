import { createComponentFactory, mockProvider, Spectator } from '@ngneat/spectator';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { ActivitiesComponent } from './activities.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

describe('ActivitiesComponent', () => {
  let spectator: Spectator<ActivitiesComponent>;
  const createComponent = createComponentFactory({
    component: ActivitiesComponent,
    providers: [mockProvider(MatDialog)],
    imports: [
      MatSelectModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule
    ]
    
  });

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
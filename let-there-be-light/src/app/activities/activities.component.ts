import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

declare function makeMQTTRequest(when: any, minute: any, hour: any): any;

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  coffeeForm = this.formBuilder.group({
    minute: '',
    hour: '',
    when: 'now'
  });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void {
    makeMQTTRequest(this.coffeeForm.value.when, this.coffeeForm.value.minute, this.coffeeForm.value.hour);
  }
}

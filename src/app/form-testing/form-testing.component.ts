import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ok} from 'assert';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent implements OnInit {
  @ViewChild('form', {static: false}) templateSingUpForm: NgForm;
  private defaultEmail: string;
  private answer: string;
  private genders: any;

  // Reactive approach
  signUpForm: FormGroup;
  forbiddenUserNames: any;

  constructor() {
  }

  ngOnInit() {
    this.defaultEmail = 'good';
    this.answer = 'My first answer';
    this.genders = ['male', 'female'];
    this.forbiddenUserNames = ['Chris', 'Anna'];

    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.templateSingUpForm);
  }

  onSignUpForm() {
    console.log(this.signUpForm);
  }

  onAddHobbies() {
    (<FormArray> this.signUpForm.get('hobbies')).push(new FormControl(null, Validators.required));
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

}

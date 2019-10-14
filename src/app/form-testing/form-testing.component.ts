import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

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
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe((val) => {
      console.log(val);
    });

    /*this.signUpForm.setValue({
      userData: {
        username: 'something',
        email: 'ededede'
      },
      gender: 'ul',
      hobbies: []
    });*/

    this.signUpForm.patchValue({
      userData: {
        username: 'update only this value'
      }
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
    (this.signUpForm.get('hobbies') as FormArray).push(new FormControl(null, Validators.required));
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {nameIsForbidden: true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });

    return promise;
  }

}

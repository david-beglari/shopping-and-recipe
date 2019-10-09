import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent implements OnInit {
  @ViewChild('f') singUpForm: NgForm;
  private defaultEmail: string;
  private answer: string;
  private genders: any;

  constructor() {
  }

  ngOnInit() {
    this.defaultEmail = 'good';
    this.answer = 'My first answer';
    this.genders = ['male', 'female'];
  }

  /*onSubmit(form: NgForm) {
    console.log(form);
  }*/

  onSubmit() {
    console.log(this.singUpForm);
  }

}

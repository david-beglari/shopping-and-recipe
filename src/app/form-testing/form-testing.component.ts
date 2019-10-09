import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-testing',
  templateUrl: './form-testing.component.html',
  styleUrls: ['./form-testing.component.css']
})
export class FormTestingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

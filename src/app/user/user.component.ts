import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @ViewChild('f') signUp: NgForm;

  genders = ['Male', 'Female'];
  user: {
    username: '',
    email: '',
    secret: '',
    gender: ''
  }
  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }
  suggestedUser() {
    const username = "Admin";
    this.signUp.form.patchValue({
      userData: {
        username: username,
      }
    });
  }
  onSubmit(f: any) {
    this.submitted = true;
    this.user.username = this.signUp.value.username;
    this.user.email = this.signUp.value.email;
    this.user.secret = this.signUp.value.secret;
    this.user.gender = this.signUp.value.gender;

  }

}

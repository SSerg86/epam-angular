import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  form: FormGroup;
  submited = false;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submited = true;

    const user: User = {
      name: this.form.value.name,
      email: this.form.value.email,
      age: this.form.value.age,
    };

    console.log(user);
  }
}

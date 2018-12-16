import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {PostuserService} from './postuser.service';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  msg: string;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private post: PostuserService,
              private builder: FormBuilder,
              private router: Router) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.builder.group({
      usernameFormControl: new FormControl('', [
        Validators.required,
      ]),
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      dobFormControl: new FormControl('', [
        Validators.required,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    this.post.postuser({
      email: this.f.emailFormControl.value,
      username: this.f.usernameFormControl.value,
      dob: this.f.dobFormControl.value,
      password: this.f.passwordFormControl.value
    }).subscribe(data => {
      console.log(data);
      if (data['status']) {
        this.router.navigate(['/login']);
      } else {
        this.msg = data['msg'];
      }
    });
  }

}

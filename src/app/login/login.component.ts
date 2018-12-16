import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {AuthenticateService} from './authenticate.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UpdateAppService} from '../update-app.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string;
  loginForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(
    private zone: NgZone,
    private auth: AuthenticateService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookie: CookieService,
    private  updateSvc: UpdateAppService
  ) {
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameFormControl: new FormControl('', [
        Validators.required,
      ]),
      passwordFormControl: new FormControl('', [
        Validators.required,
      ])
    });
  }

  onSubmit() {
    this.auth.authenticate({
      username: this.f.usernameFormControl.value,
      password: this.f.passwordFormControl.value
    }).subscribe(data => {
      this.msg = data['msg'];
      if (data['status']) {
        this.cookie.set('sessionID', data['sessionID']);
        this.updateSvc.emit();
        this.router.navigate(['/']);
        // console.log('sess ' + data['sessionID']);
      }
    });
  }

}

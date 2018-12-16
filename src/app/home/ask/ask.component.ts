import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from '../../session.service';

export interface Topic {
  name: string;
}

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  isLinear = true;
  secondFormGroup: FormGroup;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  topics: Topic[] = [];
  sessionID: String;

  constructor(private router: Router,
              private builder: FormBuilder,
              private cookie: CookieService,
              private askSvc: SessionService) {
    if (this.cookie.check('sessionID')) {
      this.sessionID = this.cookie.get('sessionID');
      console.log('cookie found');
    } else {
      console.log('not logged in');
      this.router.navigate(['/login']);
    }
  }

  get f() {
    return this.secondFormGroup.controls;
  }

  ngOnInit() {
    this.secondFormGroup = this.builder.group({
      questionCtrl: ['', Validators.required],
      discriptionCtrl: ['', Validators.required]
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.topics.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(topic: Topic): void {
    const index = this.topics.indexOf(topic);

    if (index >= 0) {
      this.topics.splice(index, 1);
    }
  }

  home() {
    const promise = this.router.navigate(['/home']);
  }

  onSubmit() {
    const question = this.f.questionCtrl.value;
    const discription = this.f.discriptionCtrl.value;
    this.askSvc.postQuestion({
      sessionID: this.sessionID,
      question: question,
      description: discription,
      tags: this.topics
    }).subscribe(data => {
      console.log(data);
    });
  }
}

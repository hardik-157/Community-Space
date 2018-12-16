import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from '../session.service';

export interface Question {
  question: string;
  answer: string;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public questinoArr;

  constructor(private router: Router,
              private QSvc: SessionService) {
  }

  ngOnInit() {
    this.QSvc.getQuestions().subscribe(data => {
      this.populateQuestion(data);
    });
  }

  populateQuestion(data) {
    this.questinoArr = data['questions'];
  }

  topics(tag) {
    const promice = this.router.navigate(['topics', tag]);
  }

  ask() {
    const promice = this.router.navigate(['/home/ask']);
  }

  redirect(id) {
    const promise = this.router.navigate(['/home/detail', id]);
  }
}

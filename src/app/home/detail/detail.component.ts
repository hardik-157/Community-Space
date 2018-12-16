import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../../session.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  panelOpenState = false;

  public qID;
  public question;

  constructor(private router: Router,
              private r: ActivatedRoute,
              private session: SessionService) {
  }

  ngOnInit() {
    this.qID = this.r.snapshot.paramMap.get('id');
    this.session.getQuestion(this.qID).subscribe(data => {
      if (data['status']) {
        this.populateQuestion(data);
      }
    });
  }

  populateQuestion(data) {
    this.question = data['question'];
  }

  topics() {
    const promice = this.router.navigate(['topics']);
  }

}

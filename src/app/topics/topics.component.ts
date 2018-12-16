import {Component, OnInit} from '@angular/core';
import {SessionService} from '../session.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  public questinoArr;
  public tag;

  constructor(private session: SessionService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.tag = this.route.snapshot.paramMap.get('tag');
    this.session.getTaggedQuestions(this.tag).subscribe(data => {
      console.log(data);
      this.populateQuestions(data);
    });
  }

  populateQuestions(data) {
    this.questinoArr = data['questions'];
  }

  topics(tag) {
    const promice = this.router.navigate(['topics', tag]);
  }

}

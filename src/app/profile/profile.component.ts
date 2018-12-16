import {Component, OnInit} from '@angular/core';
import {SessionService} from '../session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user;

  constructor(private session: SessionService) {
  }

  ngOnInit() {
    this.session.getUser().subscribe(data => {
      console.log(data);
      this.populateUser(data['user']);
    });
  }

  populateUser(data) {
    this.user = data;
  }

}

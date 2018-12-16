import {Component, OnInit} from '@angular/core';
import {SessionService} from './session.service';
import {CookieService} from 'ngx-cookie-service';
import {UpdateAppService} from './update-app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  welcome = 'Account';
  login: Boolean = false;

  constructor(private  session: SessionService,
              private router: Router,
              private cookie: CookieService,
              private updateSvc: UpdateAppService) {
    this.updateSvc.listen().subscribe(data => {
      this.ngOnInit();
    });

  }

  ngOnInit() {
    this.session.getSession({sessionID: this.cookie.get('sessionID')}).subscribe(data => {
      if (data['status']) {
        this.welcome = data['session'].userName;
        this.login = true;
      } else {
        this.welcome = 'Account';
        this.login = false;
      }
    });
  }

  logoff() {
    this.session.destroySession({sessionID: this.cookie.get('sessionID')}).subscribe(data => {
    });
    this.router.navigate(['/']);
    this.ngOnInit();
  }
}

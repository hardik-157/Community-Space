import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatStepperModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailComponent } from './home/detail/detail.component';
import { AskComponent } from './home/ask/ask.component';
import { SearchComponent } from './search/search.component';
import { CommunitiesComponent } from './communities/communities.component';
import { TopicsComponent } from './topics/topics.component';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {AuthenticateService} from './login/authenticate.service';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '*', component: HomeComponent},
  {path: 'home/detail/:id', component: DetailComponent},
  {path: 'home/ask', component: AskComponent},
  {path: 'search', component: SearchComponent},
  {path: 'communities', component: CommunitiesComponent},
  {path: 'topics/:tag', component: TopicsComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    DetailComponent,
    AskComponent,
    SearchComponent,
    CommunitiesComponent,
    TopicsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDialogModule,
    MatStepperModule,
    MatExpansionModule,
  ],
  providers: [AuthenticateService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

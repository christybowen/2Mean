/* Vendor */
import { Component }        from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { Router }           from '@angular/router';

/* Angular2 Models */
import { User }             from '../../users/models/user.model.client';

/* Angular2 Services */
import { AuthService }      from './../auth.service.client';

@Component({
  templateUrl: './../views/signup.view.html'
})
export class SignupComponent {
  model: any = {};
  loading = false;

  constructor(private authService: AuthService, private router: Router) { }

  signup () {
    console.log(this.model);
    this.loading = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }
}

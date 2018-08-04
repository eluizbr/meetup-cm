import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Login } from '../helpers/models/login.model';
import { LoginService } from '../helpers/services/login.service';

@Component({
  selector: 'access-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  spinner$: Observable<boolean>;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.spinner$ = this.loginService.spinner$;

    this.userForm = this.fb.group({
      username: 'teste',
      password: '123456'
    });
  }

  doLogin(paylod: Login) {
    this.loginService.doLogin(paylod).subscribe(user => {
      localStorage.setItem('token', user.token);
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 3000);
    });
  }
}

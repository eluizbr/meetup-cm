import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import { User } from '../../../shared/helpers/models/user.model';
import { Login } from '../models/login.model';

@Injectable({ providedIn: 'root' })
export class LoginService {
  spinner$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  doLogin(payload: Login): Observable<User> {
    this.spinner$.next(true);
    return this.http.post<User>(`${environment.apiUrl}/login`, payload).pipe(
      tap(() => {
        setTimeout(() => {
          this.spinner$.next(false);
        }, 3000);
      })
    );
  }
}

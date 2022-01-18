import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });


  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _sessionService: SessionService) { }

  ngOnInit(): void {

    // check token  exist redrect to home
    let userExist = this._sessionService.getUser();
    if (userExist) {
      this._router.navigate(['/']);
    }

  }

  onSubmit() {
    let obj = this.loginForm.value;
    let loginObj = {
      email: obj.email,
      password: obj.password,
    }

    this._authService.login(loginObj).subscribe(
      res => {
        if (res.user.role === 'user') {
          this._sessionService.setToken(res.token);
          this._sessionService.setUser(res.user.name);
          window.location.href = "";
        } else if (res.user.role === 'admin') {
          this._sessionService.setToken(res.token);
          this._sessionService.setUser(res.user.name);
          window.location.href = "";
        }

      },
      err => {
        if (err.status == 401) {
          alert("Wrong Credentials");
        }
      })


  }
}



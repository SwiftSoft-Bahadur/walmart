import { AuthService } from './../../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/shared/session/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    name: [null, Validators.required],
  });

  //constructor function
  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _sessionService: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let obj = this.signUpForm.value;
    let loginObj = {
      email: obj.email,
      password: obj.password,
      name: obj.name,
    }

    this._authService.singUp(loginObj).subscribe(
      res => {
        this._sessionService.setToken(res.token);
        this._sessionService.setUser(res.user.name);
        window.location.href = "login";
      },
      err => {
        if (err.status == 403) {
          alert("Email Already exists");
          this._router.navigate([''])
        }
        if (err.status == 422) {
          alert("Name must be greater then five chars");
        }

      }
    )



  }
}
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm: FormGroup;
  public loginFormSubmitted: boolean = false;



  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,private router: Router) {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }


  connectUser() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: ()=> { this.router.navigate(['/dashboard']);
        }
      })
    }
  }

}

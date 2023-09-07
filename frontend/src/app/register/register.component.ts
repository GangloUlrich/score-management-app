import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../core/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public registerForm: FormGroup;
  public registerFormSubmitted: boolean = false;



  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService,private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })
  }


  saveNewUser() {
    if (this.registerForm.valid) {
        this.authService.register(this.registerForm.value).subscribe({
          next: ()=> {
            this.router.navigate(['login'])
          }
        })
    }
  }
}

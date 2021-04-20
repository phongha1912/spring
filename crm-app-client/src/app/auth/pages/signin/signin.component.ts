import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService} from '../../../core';
import {Message,MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import {PasswordModule} from 'primeng/password';


@Component({
  selector: 'crm-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [MessageService],
})

export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  constructor( private fb: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private primengConfig: PrimeNGConfig) {

    this.signinForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
    });

  }

  get f() { return this.signinForm.controls; }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

   login() {
    const credentials = this.signinForm.value;
    this.authService.attemptAuth(credentials)
      .subscribe(
        user => {
       //   const redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '';
              this.router.navigate(["/employee"]);

            // this.router.navigate(['employee', user.id]);
        }
      );
  }
  
}

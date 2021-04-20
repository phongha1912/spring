import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models';
import { Router } from '@angular/router';
import { AuthService, EmployeeService } from '../../services';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'crm-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  user$: Observable<User|undefined>;

  constructor( private router: Router, private authService: AuthService, private employeeService: EmployeeService) {
    this.user$ = this.authService.currentUser;
    this.user$.subscribe(
      user => {
        if(user) {
          this.router.navigate(['employee', user.id])
        }
      }
    )  
 }

  ngOnInit(): void {

  }

  onSignInClicked(): void {
    console.log("onSignInClicked");
    this.router.navigate(['auth', 'signin'], { queryParams: { redirectUrl: this.router.url }});
  }

  onSignOutClicked(): void {
    this.authService.purgeAuth();
    this.router.navigate(['auth', 'signin']);
  }

  onViewProfile(user:User): void {
    this.router.navigate(['/employee', user.id]);
  }

  onAdministratorClicked(): void {
    this.router.navigate(['/admin']);
  }


}

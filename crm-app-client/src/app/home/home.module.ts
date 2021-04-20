import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { SharedModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';
import { ContextMenuModule } from 'ngx-contextmenu';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    ContextMenuModule.forRoot(),
  ]
})
export class HomeModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ConfigService } from './services/config.service'
import { MovieService } from './services/movie.service'
import { MultiSelectModule } from 'primeng/multiselect';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule }   from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { PickListModule } from 'primeng/picklist';
import { UserService } from './services/user.service';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MultiSelectModule,
    DropdownModule,
    BrowserAnimationsModule,
    PickListModule,
    CarouselModule
  ],
  providers: [ConfigService, MovieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

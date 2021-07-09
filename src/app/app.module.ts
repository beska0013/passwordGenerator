import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes,RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { OptionsComponent } from './components/main/options/options.component';
import { CreatePasswordComponent } from './components/main/create-password/create-password.component';
import { GeneratePasswordComponent } from './components/main/generate-password/generate-password.component';
import {FormsModule} from "@angular/forms";



const appRoutes: Routes = [
  {path:'', component: OptionsComponent},
  {path:'creatPass', component: CreatePasswordComponent},
  {path:'genPass', component: GeneratePasswordComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    OptionsComponent,
    CreatePasswordComponent,
    GeneratePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

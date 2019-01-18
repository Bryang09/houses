import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { config } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./hero/title/title.component";
import { ModalComponent } from "./hero/modal/modal.component";
import { Section1Component } from "./section1/section1.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { Section2Component } from './section2/section2.component';
import { ListingsComponent } from './Section1/listings/listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    TitleComponent,
    ModalComponent,
    Section1Component,
    Section2Component,
    ListingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

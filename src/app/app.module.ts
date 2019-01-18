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

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    TitleComponent,
    ModalComponent,
    Section1Component
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

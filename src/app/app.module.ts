import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { environment } from "../environments/environment.prod";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from "./hero/title/title.component";
import { ModalComponent } from "./hero/modal/modal.component";
import { Section1Component } from "./section1/section1.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { Section2Component } from "./section2/section2.component";
import { ListingsComponent } from "./section1/listings/listings.component";
import { Section3Component } from "./section3/section3.component";
import { Section4Component } from "./section4/section4.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    TitleComponent,
    ModalComponent,
    Section1Component,
    Section2Component,
    ListingsComponent,
    Section3Component,
    Section4Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firesbase, "houses"),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroComponent } from "./hero/hero.component";
import { NavComponent } from "./nav/nav.component";
import { TitleComponent } from './hero/title/title.component';
import { ModalComponent } from './hero/modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, NavComponent, TitleComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

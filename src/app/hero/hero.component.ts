import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  heart: boolean = false;
  share: boolean = false;
  class: string = "far fa-heart";

  constructor() {}

  ngOnInit() {}

  onHeart() {
    this.heart = !this.heart;
    console.log(this.heart);

    this.class = this.heart ? "fas fa-heart" : "far fa-heart";
  }
  onShare() {
    this.share = !this.share;
    console.log(this.share);
  }
}

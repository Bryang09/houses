import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-title",
  templateUrl: "./title.component.html",
  styleUrls: ["./title.component.scss"]
})
export class TitleComponent implements OnInit {
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

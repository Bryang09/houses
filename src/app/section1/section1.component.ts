import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-section1",
  templateUrl: "./section1.component.html",
  styleUrls: ["./section1.component.scss"]
})
export class Section1Component implements OnInit {
  listCol: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  listDoc: AngularFirestoreDocument<List>;
  list: Observable<List>;

  likeOne: boolean = false;
  likeTwo: boolean = false;
  likeThree: boolean = false;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.listCol = this.afs.collection("initialList");
    this.lists = this.listCol.valueChanges();

    console.log(this.lists, this.listCol);
  }

  onLikeOne() {
    this.likeOne = !this.likeOne;
    console.log(this);
  }
  onLikeTwo() {
    this.likeTwo = !this.likeTwo;
  }
  onLikeThree() {
    this.likeThree = !this.likeThree;
  }
}

interface List {
  img: string;
  price: string;
  rooms: string;
}

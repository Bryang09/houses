import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-listings",
  templateUrl: "./listings.component.html",
  styleUrls: ["./listings.component.scss"]
})
export class ListingsComponent implements OnInit {
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
  }

  onLikeOne() {
    this.likeOne = !this.likeOne;
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

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-firebase-data',
  templateUrl: './firebase-data.component.html',
  styleUrls: ['./firebase-data.component.scss']
})
export class FirebaseDataComponent implements OnInit {
  courses: any[];
  // _db: any;
  // tslint:disable-next-line:one-line
  constructor(private _db: AngularFireDatabase) {}

  ngOnInit() {
    this._db
      .list('/coursee')
      .valueChanges()
      .subscribe(courses => {
        this.courses = courses;
      });
  }
}

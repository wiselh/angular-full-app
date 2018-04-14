import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  posts: object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // get json reuest
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(posts => {
      this.posts = posts;
    });
  }

  onSubmit(form: NgForm) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
    userId: Math.random(),
    id: Math.random(),
    title: form.value.title,
    body: form.value.body
    }).subscribe(res => {
      console.log(res);
    }, error => {
      console.log('Error');
    });
  }

}

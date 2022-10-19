import { Component, OnInit } from '@angular/core';
import { Firestore, collection, query, getDocs } from '@angular/fire/firestore';
import { UserPost } from '../models/user-posts.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: Array<UserPost> = [];
  constructor(private db: Firestore) { }

  ngOnInit(): void { 
    this._getPosts();
  }

  async _getPosts() {
    const q = query(collection(this.db, 'posts'));
    this.posts = await getDocs(q).then(res => res.docs.map(d => d.data() as UserPost));
  }


}

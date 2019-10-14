import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'techsite';
  languages:any[];
  projects:any[];
  feedback:any[];
  name:any;
  email:any;
  mob:any;
  constructor(db:AngularFireDatabase){
      db.list('/languages')
      .valueChanges().subscribe(languages=>{
        this.languages=languages
      });

      db.list('/projects')
      .valueChanges().subscribe(proj=>{
        this.projects=proj
      });

      db.list('/feedback')
      .valueChanges().subscribe(feedback=>{
          this.feedback=feedback
      });

      db.list('/selfinfo')
      .valueChanges().subscribe(info=>{
        this.name=info[2];
        this.email=info[0];
        this.mob=info[1]
      });
  }
}


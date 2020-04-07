import { Component } from '@angular/core';
import { CommentsService } from './comments.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(private commentService: CommentsService) {}

  ngOnInit() {
    this.commentService.getUsersFirstComment('madhu').then((comments) => {
      console.log('comments in app component: ', comments);
    }).catch((error)=> {
      console.log('error', error);
    });
  }

  
}

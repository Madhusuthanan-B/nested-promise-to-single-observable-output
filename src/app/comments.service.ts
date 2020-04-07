import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  
  constructor() {}

  public getUsersFirstComment(name: string) {
    return this.fetchUserDetails(name).then((user: any) => {
       return this.fetchPosts(user.id)
    }).then((posts: any[]) => {
       return this.fetchComments(posts[0].id)
    }).then((comments) => {
       return comments;
    })
  }

  private fetchUserDetails(name: string) {
    return new Promise((resolve, reject) => {
      resolve(
        {
          id: '12345',
          name: 'madhu'
        }
        );
    });
  }

  private fetchPosts(userId: string) {
    return new Promise((resolve, reject) => {
      const posts = [
        {
          id: 'post-id-1',
          author: 'madhu'
        },
        {
          id: 'post-id-2',
          author: 'madhu'
        }
      ];
      resolve(posts);
    });
  }

  private fetchComments(postId: string) {
    return new Promise((resolve, reject) => {
      const comments = [
        {
          id: 'comment-id-1',
          comment: 'Good job!',
          author: 'janeesh'
        },
        {
          id: 'comment-id-2',
          comment: 'Congrats!',
          author: 'naveen'
        }
      ];
      resolve(comments);
    });
  }

}
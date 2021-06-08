import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreate {
  enteredValue = '';
  newPost = 'No content';

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}

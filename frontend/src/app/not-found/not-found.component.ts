import { Component } from '@angular/core';

@Component({
  template: `
    <div class="jumbotron text-center">
      <h1>404 : PAGE NOT FOUND</h1>
      <p>You seem lost child. why don't you come <a routerLink="/">home</a>.</p>
    </div>
  `
})
export class NotFoundComponent {}

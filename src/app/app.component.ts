import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  // templateUrl: './app.component.html'
 template: `
 <div class="container">
 <input type="text" class="form-control" id="usr" placeholder="FirstName">
 <button type='button' class='btn btn-primary btn-block'> Login </button>
 </div>
 `
})
export class AppComponent {
  FirstName = 'Raghavan';
}

import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [UserComponent], // Add styleUrls for better structure
})
export class AppComponent implements OnInit {
  title: string = 'ng-101';
  randomNumber!: number; // Explicit typing, initialized in OnInit
  imageURL!: string; // Explicit typing, initialized in OnInit

  ngOnInit(): void {
    this.refreshImage(); // Initialize random number and image URL on load
  }

  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000);
  }

  getImageURL(id: number): string {
    return `https://picsum.photos/id/${id}/200/300`;
  }

  refreshImage(): void {
    this.randomNumber = this.generateRandomNumber();
    this.imageURL = this.getImageURL(this.randomNumber);
    console.log('Image refreshed with ID:', this.randomNumber); // Meaningful log message
  }

  onMouseOver(): void {
    console.log('Big Brother is watching you!');
  }
}

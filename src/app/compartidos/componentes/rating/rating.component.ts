import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input({required: true, transform: (valor: number) => Array(valor).fill(0)})
  maxRating!: number[];

  @Input({required: false})
  ratingSelected: number = 0;

  @Output()
  rating = new EventEmitter<number>();


  maxRatingArr: any[] = [];
  previousRating = 0;

  ngOnInit(): void {
    // this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index: number): void {
    this.ratingSelected = index + 1;
  }

  resetStarColor(): void {
    if(this.previousRating !== 0) {
      this.ratingSelected = this.previousRating;
    } else {
      this.ratingSelected = 0;
    }
  }

  handleClick(index: number): void {
    this.ratingSelected = index + 1;
    this.previousRating = this.ratingSelected;
    this.rating.emit(this.ratingSelected);
  }

}

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class starComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  ngOnChanges(): void {
    this.cropWidth = this.rating * (75 / 5);
  }

  onClick(): void {
    this.ratingClicked.emit(`The Rating ${this.rating} was Clicked!`);
    console.log(`The Rating ${this.rating} was Clicked!`);
  }
}

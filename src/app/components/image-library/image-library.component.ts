import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageProduct, mockImages } from 'src/app/mock-image';

@Component({
  selector: 'app-image-library',
  templateUrl: './image-library.component.html',
  styleUrls: ['./image-library.component.css']
})
export class ImageLibraryComponent implements OnInit {
  images:Array<ImageProduct> = mockImages;
  @Input() imageSelected:ImageProduct = {
    order: 0,
    thumbnail: '',
    src: ''
  };

  @Output() eventSelectImage = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
  }

  onSelectImage(img:ImageProduct) {
    this.eventSelectImage.emit(img)
  }
}

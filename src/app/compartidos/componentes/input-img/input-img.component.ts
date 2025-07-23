import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../../functions/toBase64';

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {
  @Input() imageUrl: string | undefined = '';
  @Input({required: true}) titulo: string = '';
  @Output() imageSelected = new EventEmitter<File>();
  imageBase64?: string = '';

  OnChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];

      // Programación asincrónica para convertir el archivo a base64
      toBase64(file).then(base64 => {
        this.imageBase64 = base64;
      }).catch(error => {
        console.error('Error converting file to base64:', error);
      });

      this.imageSelected.emit(file);
      this.imageUrl = undefined;
    }
  }
}

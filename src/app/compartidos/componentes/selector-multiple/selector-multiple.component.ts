import { Component, Input } from '@angular/core';
import { SelectorMultipleModeloDto } from './SelectorMultipleModelo';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styleUrl: './selector-multiple.component.css'
})
export class SelectorMultipleComponent {
  @Input({required: true}) selected: SelectorMultipleModeloDto[] = [];
  @Input({required: true}) notSelected: SelectorMultipleModeloDto[] = [];
  
  select(item: SelectorMultipleModeloDto, index: number): void {
    this.selected.push(item);
    this.notSelected.splice(index, 1);
  }

  deselect(item: SelectorMultipleModeloDto, index: number): void {
    this.notSelected.push(item);
    this.selected.splice(index, 1);
  }

  selectAll(): void {
    this.selected.push(...this.notSelected);
    this.notSelected.length = 0;
  }

  deselectAll(): void {
    this.notSelected.push(...this.selected);
    this.selected.length = 0;
  }
}

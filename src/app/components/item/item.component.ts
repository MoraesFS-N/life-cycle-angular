import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitItem = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}
  ngOnChanges(): void {
    console.log('onChange');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  editarItem() {
    this.emitItem.emit(this.item);
  }
}

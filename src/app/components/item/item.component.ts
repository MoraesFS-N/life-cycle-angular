import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
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
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item!: Item;
  @Output() emitItem = new EventEmitter();
  @Output() emitIdParaRemover = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnChanges(): void {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log('destroy');
  }

  editarItem() {
    this.emitItem.emit(this.item);
  }

  checarItem() {
    if (this.item.comprado) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deletarItem() {
    this.emitIdParaRemover.emit(this.item.id);
  }
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemParaEditar!: Item;
  editando: boolean = false;
  textBtn = 'Salvar item';

  valorItem!: string;

  constructor(private service: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemParaEditar'].firstChange) {
      this.editando = true;
      this.textBtn = 'Editar Item';
      this.valorItem = this.itemParaEditar?.nome;
    }
  }

  adicionarItem() {
    this.service.adicionarItemNalista(this.valorItem);

    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }

  editarItem() {
    this.service.editarItem(this.itemParaEditar, this.valorItem);

    this.limparCampo();
    this.editando = false;
    this.textBtn = 'Salvar Item';
  }
}

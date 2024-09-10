import { Injectable } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };

    return item;
  }

  adicionarItemNalista(nomeItem: string) {
    const item = this.criarItem(nomeItem);

    this.listaDeCompra.push(item);

    this.atualizarLocalStorage();
  }

  editarItem(itemAntigo: Item, nomeNovoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeNovoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };

    const id = itemAntigo.id;

    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);

    this.atualizarLocalStorage();
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }
}

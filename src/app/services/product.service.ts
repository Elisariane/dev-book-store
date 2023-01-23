import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  products: IProduct[] = [
    {
      id: 1,
      name: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
      price: 62.10,
      img: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UL320_.jpg',
    },
    {
      id: 2,
      name: 'Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes',
      price: 43.99,
      img: 'https://m.media-amazon.com/images/I/711siL1zU1L._AC_UL320_.jpg',
    },
    {
      id: 3,
      name: 'Código limpo: Habilidades práticas do Agile Software',
      price: 89.39,
      img: 'data:image/jpeg;base64,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',
    },
    {
      id: 4,
      name: 'Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos',
      price: 122.99,
      img: 'https://m.media-amazon.com/images/I/81RXMnEXrdL._AC_UL320_.jpg',
    },
    {
      id: 5,
      name: 'Como ser um Programador Melhor: um Manual Para Programadores que se Importam com Código',
      price: 66.00,
      img: 'https://m.media-amazon.com/images/I/71RWTuYLQiL._AC_UL320_.jpg',
    },
    {
      id: 6,
      name: 'JavaScript: O Guia Definitivo',
      price: 187.10 ,
      img: 'https://m.media-amazon.com/images/I/91z1xY4ppaL._AC_UL320_.jpg',
    },
    {
      id: 7,
      name: 'JDomain-Driven Design: Atacando as complexidades no coração do software ',
      price: 73.50 ,
      img: 'https://m.media-amazon.com/images/I/51HGF9mg6iL._SX323_BO1,204,203,200_.jpg',
    },
    {
      id: 8,
      name: 'Scrum - Um Guia de Bolso: Um companheiro de viagem inteligente',
      price: 24.99,
      img: 'https://m.media-amazon.com/images/I/413+M8rg3zL.jpg',
    },
    {
      id: 9,
      name: 'Refatoração: Aperfeiçoando o Design de Códigos Existentes',
      price: 94.99 ,
      img: 'https://m.media-amazon.com/images/P/B087N8LKYB.01._SCLZZZZZZZ_SX500_.jpg',
    }
  ];

  getAllProducts() {
    return this.products;
  }


}
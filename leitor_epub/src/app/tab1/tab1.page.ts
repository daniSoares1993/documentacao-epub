import { Component } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  lerLivro(){
    const ePub = require('../../service/service.js');
    let book = ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
    let rendition = book.renderTo("area");
    rendition.display();
    console.log(book);
  }
}

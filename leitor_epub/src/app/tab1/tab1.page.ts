import { Component } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  // public book: any = '';
  // public rendition:any = '';

  constructor() {
    const ePub = require('../../service/service.js');
    var book = ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
    var rendition = book.renderTo("area", {width: 600, height: 400,allowScriptedContent: true});
    rendition.display();
  }
  
  // lerLivro(){
  //   const ePub = require('../../service/service.js');
  //   this.book = ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
  //   this.rendition = this.book.renderTo("area", { method: "default", width: "100%", height: "100%" });
  //   console.log(this.book);
  //   console.log(this.rendition);
  // }
}

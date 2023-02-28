import { Component } from '@angular/core';
declare var require: any

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public ePub:any = require('../../service/service.js');
  public book:any = this.ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
  public rendition:any = this.book.renderTo("area", {flow: "paginated", width: 350, height: 300,allowScriptedContent: true});
  
  constructor() {
    this.rendition.display();
  }

  avancar(){
   this.rendition.next();
  }
  
}

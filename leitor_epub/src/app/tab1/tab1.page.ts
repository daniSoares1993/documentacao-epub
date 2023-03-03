import { Component,OnInit} from '@angular/core';
declare var require: any

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public ePub:any = require('../../service/service.js');
  public book:any = this.ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
  public rendition:any = this.book.renderTo("area", {flow: "paginated", width: 365, height: 560,allowScriptedContent: true});
  public paginaAtual:any = '';
  constructor() {
  }

  ngOnInit() {
    this.paginaAtual = localStorage.getItem('paginaAtual')
  }

  showBook(){
    if(this.paginaAtual === 'undefined' || this.paginaAtual === null ){
      this.rendition.display();
    }else{
      this.paginaAtual = JSON.parse(this.paginaAtual);
      this.rendition.display(this.paginaAtual.end.cfi);
    }
  }
  previous(){
    this.rendition.prev();
    localStorage.setItem('paginaAtual', JSON.stringify(this.rendition.location));
  }

  foward(){
    this.rendition.next();
    localStorage.setItem('paginaAtual', JSON.stringify(this.rendition.location));
  }
  
}

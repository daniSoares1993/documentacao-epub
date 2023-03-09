import { Component,OnInit} from '@angular/core';
declare var require: any

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public ePub:any = require('../../service/service.js');
  public Annotations:any = this.ePub.Annotations;
  public book:any = this.ePub('../../assets/livros/Menino_de_Ouro_Claire_Adam.epub');
  public rendition:any = this.book.renderTo("area", {flow: "paginated", width: 365, height: 560,allowScriptedContent: true});
  public paginaAtual:any = '';
  public text:any = '';
  public selection:any;
  public areaConteudo:any = document.getElementById('area');
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
    this.book.getRange(this.paginaAtual.end.cfi).then(function(range:any){
      console.log("Faixa de conteúdo da página 3:", range.startContainer);
    });
    this.rendition.annotations.underline();
  }
  previous(){
    this.rendition.prev();
    console.log(this.rendition.reportLocation());
    console.log(this.rendition.currentLocation())
    localStorage.setItem('paginaAtual', JSON.stringify(this.rendition.location));
  }

  foward(){
    this.rendition.next();
    console.log(this.rendition.reportLocation());
    console.log(this.rendition.currentLocation());
    localStorage.setItem('paginaAtual', JSON.stringify(this.rendition.location));
  }

  teste(){
    console.log('clicou');
  }
  
}

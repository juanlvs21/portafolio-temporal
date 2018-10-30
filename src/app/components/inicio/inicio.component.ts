import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadScripts();
    this.altopantalla();
  }

  altopantalla(){
    let alto = window.innerHeight;
    document.getElementById("parallax").style.width = '100%';
    document.getElementById("parallax").style.height = `${alto}px`;    
  }

  loadScripts() {
    const dynamicScripts = [
      '/assets/libs/jquery/js/jquery.js',
      '/assets/libs/materialize/js/materialize.min.js',
      '/assets/libs/materialize/js/materialize.config.js',
      '/assets/libs/typed/typed.js',
      '/assets/libs/typed/typed.config.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  
}

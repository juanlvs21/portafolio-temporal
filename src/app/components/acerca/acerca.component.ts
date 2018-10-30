import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.barhtml();
    this.barcss();
    this.barphp();
    this.barjs();
    this.barsql();
    this.barangular();
  }

  barhtml(){
    let i = 1;
    for (let i = 0; i < 80; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("html").style.width = `${i}%`;
      }, 600 );
    }
  }

  barcss(){
    let i = 1;
    for (let i = 0; i < 60; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("css").style.width = `${i}%`;
      }, 600 );
    }
  }

  barphp(){
    let i = 1;
    for (let i = 0; i < 80; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("php").style.width = `${i}%`;
      }, 600 );
    }
  }

  barjs(){
    let i = 1;
    for (let i = 0; i < 70; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("js").style.width = `${i}%`;
      }, 600 );
    }
  }

  barsql(){
    let i = 1;
    for (let i = 0; i < 80; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("sql").style.width = `${i}%`;
      }, 600 );
    }
  }

  barangular(){
    let i = 1;
    for (let i = 0; i < 80; i++) {
      setTimeout( () => {
        i = i + 1;
        document.getElementById("angular").style.width = `${i}%`;
      }, 600 );
    }
  }

}

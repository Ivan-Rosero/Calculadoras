import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  title = "División Calculadora";

  screen = "";
  a:any;
  b:any;
  c:any;
  d="";
  e="";
  //constructor() { }

  ngOnInit(): void {
  }

  enterValue(value:string){
    if(this.b=="/"){
      this.d = this.d +value;
      this.screen = this.screen + value;
      this.c = this.d;
      console.log(this.b, this.c)
    }else{
      this.screen = this.screen + value;
      this.a = this.screen;
      console.log(this.a)
    }
  }

  condition(value:string){
    this.screen = this.screen + value;
    this.b = value;
  }

  clear(){
    this.screen = "";
    this.a = "";
    this.b = "";
    this.c = "";
    this.d = "";
  }

  result(){

    if(this.b == '/'){
      this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}`;
      this.screen = (parseInt(this.screen) / parseInt(this.c)).toString();

      console.log(this.a, this.b, this.c, '=', this.screen)
    }

  }

}

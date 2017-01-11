import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //@Input('placeholder')
  text = 'search';
  clear (input){
    console.log(input);
    input.value = '';
  }

}

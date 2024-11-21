import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  list: Array<String> = Array.from({length: 10000}).map((_, i) => `Opção ${i.toString()}`)

  constructor() { }

  ngOnInit() {
  }

}

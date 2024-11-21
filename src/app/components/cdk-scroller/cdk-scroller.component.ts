import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-scroller',
  templateUrl: './cdk-scroller.component.html',
  styleUrls: ['./cdk-scroller.component.scss'],
})
export class CdkScrollerComponent  implements OnInit {

  @Input() items: Array<String> = [];

  constructor() { }

  ngOnInit() {}

}

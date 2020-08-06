import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-content-two',
  templateUrl: './dynamic-content-two.component.html',
  styleUrls: ['./dynamic-content-two.component.scss']
})
export class DynamicContentTwoComponent implements OnInit {
  @Input()
  data: string;
  
  constructor() { }

  ngOnInit() {
  }

}

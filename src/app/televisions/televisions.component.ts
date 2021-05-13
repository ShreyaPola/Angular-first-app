import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service'
@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit {

  num:any;
  constructor(private tsObj:TestService) { }

  ngOnInit(): void {
    this.num = this.tsObj.getData()
  }

}

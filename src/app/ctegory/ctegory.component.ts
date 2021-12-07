import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-ctegory',
  templateUrl: './ctegory.component.html',
  styleUrls: ['./ctegory.component.css']
})
export class CtegoryComponent implements OnInit {
  param:any = {};

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => this.param = params)
  }

}

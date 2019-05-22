import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DomSanitizer } from '@angular/platform-browser';

export type Item = { id: number, name: string, type: string, options: Array<String>, icon: string, url: string };

@Component({
  selector: 'my-toolbar',
  templateUrl: './my-toolbar.component.html',
  styleUrls: ['./my-toolbar.component.css']
})
export class MyToolbarComponent implements OnInit {
  
  @Output() buttonToggled = new EventEmitter<Number>();

  items: Array<Item>;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .get("assets/toolbar-config.json")
      .map(data => data.json() as Array<Item>)
      .subscribe(data => {
        this.items = data;
        console.log(data);
      });
  }

  n = 0;
  m = 0;

  toggle(n) {
    this.buttonToggled.emit(n);
    this.n = n;
    if (n > 3) {
    	this.m = n;
    }
  }

}
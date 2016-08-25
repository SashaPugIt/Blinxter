import {Component, OnInit} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {NgGrid, NgGridItem} from 'angular2-grid';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, NgGrid, NgGridItem],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}

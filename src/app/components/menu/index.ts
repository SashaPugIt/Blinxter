import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'leftmenu',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  template: require('./template.html')
})

export class Leftmenu {

  constructor() {
    // Do stuff
  }

}
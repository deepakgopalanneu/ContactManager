import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  //  getting title from the app-root
@Input() title: any
// declaring emitter for the add button
@Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
// this function emits to the approot to change the ngIf od the form
  changevisibility(){
    this.add.emit();
  }

}

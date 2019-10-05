import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})


export class ContactCardComponent implements OnInit{
  @Input() selectedContact : Contact;
  @Output() closecard = new EventEmitter();
  
  constructor() { }
  
  ngOnInit(){
   console.log( this.selectedContact);
  }
 
  close(){
    this.closecard.emit()
  }
}

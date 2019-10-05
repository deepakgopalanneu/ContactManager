import { Component, OnInit, Input, Output } from '@angular/core';
import { Contact } from './model/contact';
import { EventEmitter } from 'events';
import { Observable } from 'rxjs';
import {Service} from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //  injecting the service object
  constructor( private contactservice : Service) { }  

//  declaring all the variabled used
  id : String;
  viewSelectedContact : Contact;
  title = 'Contact Manager Application';
  visible :boolean = false;
  show :boolean = false;
  Name :String= "Name :";
  Phone="Phone :";
  email="email :"
  contacts :Array<Contact>;

  //  get all contacts on init and passes it to the table 
  ngOnInit(){
    this.getAllContacts();
  }
  // toggles the ngIf of the form
  changevisibility(){
    if(this.visible == true)
    this.visible=false;
    else
    this.visible=true;
  }
  
  // toggles the ngIf of the contact card
  showform($event){
    this.id=$event;
    this.view();
    this.show=true;
  } 

// toggles the ngIf fof the contact card based on the close button
  closeform(){
       this.show=false;
     } 

    //  subscribes to the get contacts observable in the service
  getAllContacts()  {
    let allContacts$ : Observable<Array<Contact>> = this.contactservice.getcontacts();
    allContacts$.subscribe((contactlist ) =>  {console.log("get Request  successful ", contactlist);
    this.contacts=contactlist;  },
      (error)  => {  console.log("Error", error);     }
    )}
  
//  gets the selected contact from the table and calls the service to get contact from server
    view(){
      let view$ : Observable<Contact> = this.contactservice.viewcontact(this.id);
      view$.subscribe((contact)=> {  this.viewSelectedContact = contact}),
      (error)  => {  console.log("Error", error);  }
    }
  

}

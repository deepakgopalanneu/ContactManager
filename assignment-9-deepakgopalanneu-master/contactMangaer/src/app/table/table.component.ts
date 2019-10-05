import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {Service} from './../service.service';
import {Contact} from './../model/contact';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // declaring emitter to send the ID from view button to app-root
  @Output() selectedcontact : EventEmitter<String> = new EventEmitter();

  // collecting the contact list from app-root and using for table population
  @Input() contacts :Array<Contact>;
  
  
  constructor( private contactservice : Service) { }  
  // initializing  
    ngOnInit() {}
  
    // gets contact ID from the button and emits it to the app-root
    viewcontact(id :String){
      this.selectedcontact.emit(id);  }



  // ngOnChanges(){
  //   this.contacts = this.refresh;
  //   if(this.refresh == null){
  //     }
  //       else{
  //         this.contacts=this.refresh;
  //       }
  // }


  // getAllContacts()  {
  //   let allContacts$ : Observable<Array<Contact>> = this.contactservice.getcontacts();
  //   allContacts$.subscribe((contactlist ) =>  {console.log("get Request  successful ", contactlist);
  //   this.contacts=contactlist;  },
  //     (error)  => {  console.log("Error", error);     }
  //   )}

  

  
  }

 

import { Component, OnInit, Input, Output, EventEmitter , ElementRef, ViewChild  } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import {Service} from './../service.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

// decalring event emitter which emits on close button click
 @Output() closeform = new EventEmitter();

//  declaring event emitter which emits on the submit button for table refresh
 @Output() now = new EventEmitter();

// decalring all the variables used
 firstname:String ;
 lastname :String ;
 phone :String; 
 email:String ;
 newContact : Contact;
 
//  declaring the html native tags as viewchilds 
 @ViewChild('fname') fname :ElementRef ;
 @ViewChild('lname')lname :ElementRef ;
 @ViewChild('phonenum') phonenum :ElementRef ;
 @ViewChild('emailId') emailId :ElementRef ;


  constructor( private contactservice : Service) { }
  
  ngOnInit() {  }

  close(){
    this.closeform.emit();
  }

  // collects data from the input fields in the html form
 getFormDetails(): Contact{
   this.firstname = this.fname.nativeElement.value;
   this.lastname = this.lname.nativeElement.value;
   this.phone = this.phonenum.nativeElement.value;
   this.email = this.emailId.nativeElement.value;
  //  validating data before creating a new contact
   if(this.validatename(this.firstname,this.lastname) && (this.validatenumber(this.phone)) && (this.ValidateEmail(this.email))){
    this.newContact = new Contact(this.firstname,this.lastname,this.phone,this.email);
  return this.newContact;
  }
  
}

//  this function posts to the server through the service object
sendNewContact(){
  // this.newContact=this.getFormDetails();
  // console.log(this.newContact);
  let newContact$ : Observable<Contact> = this.contactservice.postContact(this.getFormDetails());
  newContact$.subscribe(
    (contact :Contact)  => { console.log("POST Request is successful ", (contact) ); 
  console.log(contact)  
  alert ('contact posted')
  // this.getAllContacts();
    this.now.emit();
    this.closeform.emit(); },
    (error)  => { console.log(error)  }
  )}

  // getAllContacts()  {
  //   let allContacts$ : Observable<Array<Contact>> = this.contactservice.getcontacts();
  //   allContacts$.subscribe((contactlist ) =>  {console.log("get Request  successful ", contactlist);
  //   this.refreshtable.emit(contactlist)
  //   this.now.emit();
  // },
  //     (error)  => {  console.log("Error", error);     }
  //   )}




//  this function validates the email
   ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }
  
  // following function validates the name on the form
   validatename( fname , lname){
    if (/^[a-z ,.'-]+$/i.test(fname) && /^[a-z ,.'-]+$/i.test(lname))
    {
      return (true)
    }
      alert("You have entered an invalid name!")
      return (false)
  }
    // this function validates the phone number
  validatenumber( num ){
    if (/^\d{10}$/i.test(num))
    {
      return (true)
    }
      alert("Please ensure the phone number is 10 digits!")
      return (false)
  }
}




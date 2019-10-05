import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from './model/contact';

import { environment } from './../environments/environment';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {

  // storing URI as a variable 
  contactResourceURL : string;
  
  // declaring the httpClient instance for injection
  constructor(private http: HttpClient) {

    this.contactResourceURL = `http://localhost:3000/contacts`;
  }

// this function gets all the contacts from the server
  getcontacts(): Observable<Array<Contact>> {
    return this.http.get<Array<Contact>>(this.contactResourceURL);
  }

  // this function posts the given contact to the server
  postContact(contact: Contact ): Observable<Contact> {
    // let newcontact: contact = contact;    
    // console.log(newcontact)
    // let headers = new HttpHeaders({'Content-Type': 'application/json',});
    // let header = { headers: headers };
    return this.http.post<Contact>(this.contactResourceURL, contact)
  }

  // this contact gets the chosen contact from the server
  viewcontact(id :String): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactResourceURL}/${id}`);
  }
}

export class Contact {
  
    firstname: String;
    lastname: String;
    email: String;
    phone: String;
    // declaring cinstruction for the contact class
    constructor(fname: String, lname: String, ph:String, mail:String) {
        this.firstname = fname;
        this.lastname = lname;
        this.email = mail;
        this.phone = ph;
    }
}
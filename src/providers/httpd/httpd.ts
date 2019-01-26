import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpdProvider {
  
  address : string = 'http://localhost:8085'    
  contentHeader: Headers = new Headers({'Content-Type': 'application/json'});
  totemId: number = 1
  
  constructor(public http: HttpClient) {
    console.log('Hello HttpdProvider Provider', this.address);    
  }  

  GET(url) {
    return this.http.get(url);
  }

  getUsers(){
    let myData = JSON.stringify({id: 1});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getUsers", myData, {headers: headers})
  }

  getUserByName(name_){
    let myData = JSON.stringify({ name: name_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getUserByName", myData, {headers: headers})
  }

  changePasswordUser(user_, password_){
    let myData = JSON.stringify({ user: user_, password: password_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/changePasswordUser", myData, {headers: headers})
  }

  getAllOrders(start_, end_){    
    let myData = JSON.stringify({id: this.totemId, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrders", myData, {headers: headers})
  }

  getAllOrdersByName(str_, start_, end_){    
    let myData = JSON.stringify({id: this.totemId, name: str_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrdersByName", myData, {headers: headers})
  }

  getAllOrdersByCPF(str_, start_, end_){    
    let myData = JSON.stringify({id: this.totemId, name: str_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAllOrdersByCPF", myData, {headers: headers})
  }

  getOrdersNotCompleted(){    
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getOrdersNotCompleted", myData, {headers: headers})
  }

  sendEmail(idTicket_, email_){    
    let myData = JSON.stringify({idTicket: idTicket_, email: email_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/sendEmail", myData, {headers: headers})
  }

  getTicketOperator(idUser_: number, start_: string , end_: string){    

    let myData = JSON.stringify({idUser: idUser_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getTicketOperator", myData, {headers: headers})
  }

  printTicket(idTicket_){    
    let myData = JSON.stringify({idTicket: idTicket_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/printTicket", myData, {headers: headers})
  }

  printTicketMultiple(tickets_, userName_, reprint_){    
    let myData = JSON.stringify({tickets: tickets_, userName: userName_, reprint: reprint_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/printTicketMultiple", myData, {headers: headers})
  }

  getAreas(){    
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAreas", myData, {headers: headers})
  }

  getPaymentsMethods(){    
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getPaymentsMethods", myData, {headers: headers})
  }

  getAreasByName(name_){    
    let myData = JSON.stringify({id: this.totemId, name: name_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAreasByName", myData, {headers: headers})
  }

  getProductsArea(idArea_){    
    let myData = JSON.stringify({id: this.totemId, idArea: idArea_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getProductsArea", myData, {headers: headers})
  }

  getProductsAreaByName(name_, idArea_){    
    let myData = JSON.stringify({id: this.totemId, name: name_, idArea: idArea_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getProductsAreaByName", myData, {headers: headers})
  }

  payProducts(idPayment_, products_, userId_, userName_, finalValue_){
    let myData = JSON.stringify({id: this.totemId, idPayment: idPayment_, 
      products: products_, userId: userId_, userName: userName_, finalValue: finalValue_});

    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/payProducts", myData, {headers: headers})
  }

  getSubtypesProducts(idProduct_){    
    let myData = JSON.stringify({id: this.totemId, idProduct: idProduct_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getSubtypesProducts", myData, {headers: headers})
  }

  getAuth(email_, password_){    
    let myData = JSON.stringify({id: this.totemId, email: email_, password: password_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAuth", myData, {headers: headers})
  }

  getAuthSupervisor(){
    let myData = JSON.stringify({id: this.totemId});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getAuthSupervisor", myData, {headers: headers})
  }

  getTicketParking(idTicket_){        
    let myData = JSON.stringify({id: this.totemId, idTicket: idTicket_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getTicketParking", myData, {headers: headers})
  }

  getCashDrain(idUser_, start_, end_){        
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getCashDrain", myData, {headers: headers})
  }

  confirmCashDrain(idUser_, idSupervisor_, drainValue_){    
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_,
      idSupervisor: idSupervisor_, drainValue: drainValue_});

    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/confirmCashDrain", myData, {headers: headers})
  }

  getCashChange(idUser_, start_, end_){        
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getCashChange", myData, {headers: headers})
  }

  confirmCashChange(idUser_, idSupervisor_, changeValue_){    
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_,
      idSupervisor: idSupervisor_, changeValue: changeValue_});
      
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/confirmCashChange", myData, {headers: headers})
  }

  getTotalTickets(idUser_, start_, end_){        
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_, start: start_, end: end_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getTotalTickets", myData, {headers: headers})
  }

  getLastCashier(idUser_){        
    let myData = JSON.stringify({id: this.totemId, idUser: idUser_});
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post(this.address  + "/getLastCashier", myData, {headers: headers})
  }

}
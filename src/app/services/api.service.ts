import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addToCart(id:number, price:number){
    let product = {
      "quantity":1,
      "price": price,
      "productId": id 
    }
 this.Http.post("https://hotelbooking.stepprojects.ge/api/Booking", product).subscribe()
  }
  constructor(public Http : HttpClient) { }
  getproducts(){
    return this.Http.get("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
  }
 
  deleteproductsFrombasket(id:number){
    this.Http.delete("https://hotelbooking.stepprojects.ge/api/Booking/123" + id).subscribe()
  }
  
}

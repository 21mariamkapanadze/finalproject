import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finalproject';
  product:any = []
  constructor(public productsServise: ApiService){

  }
  ngOnInIt(){
    this.productsServise.getproducts().subscribe((data:any )=>{
      this.productsServise = data
    })
    console.log(this.productsServise)
  }
}
 
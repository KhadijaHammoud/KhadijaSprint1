import { Component, OnInit } from '@angular/core';

import {StoreService} from './store.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {FormGroup} from '@angular/forms';

import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
	products: Array<any>;
	formdata1: FormGroup;
	formdata2: FormGroup;

 constructor(private _storeService: StoreService) {

    this._storeService.getProducts()
        .subscribe(res => this.products = res);

    this.formdata1 = new FormGroup({
    	name: new FormControl(),
    	price: new FormControl(),
    	sellerName: new FormControl()
    });

    this.formdata2 = new FormGroup({
    	name: new FormControl(),
    	price: new FormControl(),
    	sellerName: new FormControl()
    });
  }

deleteProduct(product){
	this._storeService.deleteProduct(product).subscribe((res:any) => {this._storeService.getProducts().subscribe(res => this.products=res)});
}

createProduct(){
	const p = ({
  	name: this.formdata1.value.name,
  	price: this.formdata1.value.price,
  	sellerName: this.formdata1.value.sellerName
  	});

	if(p.name == null || p.price == null || p.sellerName == null){
		alert("You Have To Fill In All The Fields");
	}
	else{
	this._storeService.createProduct(p).subscribe((res:any) => {this._storeService.getProducts().subscribe(res => this.products=res)});}
}

updateProduct(product){
	const p = ({	
	 id: product._id,  	
  	name: this.formdata2.value.name,
  	price: this.formdata2.value.price,
  	sellerName: this.formdata2.value.sellerName
  	});

	if(p.name == null || p.price == null || p.sellerName == null){
		alert("You Have To Fill In All The Fields");
	}

	this._storeService.updateProduct(p).subscribe((res:any) => {this._storeService.getProducts().subscribe(res => this.products=res)});
}


  ngOnInit() {
  }



}

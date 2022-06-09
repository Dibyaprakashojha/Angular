import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  // inject Router to navigate to other components

  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    let obs = this._productService.getProducts();
    obs.subscribe({
      next: (data) => {
        console.log(data);
        this.products = data;
      },
      error: (err) => console.log(err),
      complete: () => console.log(`completed successfully`),
    });
  }

  onSubmit = (product: Product) => {
    console.log(product);
    // use router to navigate to productDetailsComponent
    this._router.navigate(['/product-details', product.productId]);
  };
}

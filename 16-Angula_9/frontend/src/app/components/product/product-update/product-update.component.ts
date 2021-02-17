import { Route } from '@angular/compiler/src/core';
import { error, stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product | any

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id") || ''

    this.productService.readById(id).subscribe((product) => {
      this.product = product
    })

  }

  updateProduct(): void {
    try {
      this.productService.update(this.product).subscribe(() => {
        this.router.navigate(['/products'])
        this.productService.showMessage('Alterado com sucesso!')
      })
    } catch (error) {
      throw error
    }

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}

import { ProductService } from 'src/app/services/product.service';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/interfaces/IProduct';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() countItemCart: number = 0;

  constructor(private productService: ProductService){}


}

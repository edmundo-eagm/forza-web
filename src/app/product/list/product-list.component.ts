import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../../../shared/product/application/service/product.service';
import { firstValueFrom } from 'rxjs';
import { ProductInterface } from '../../../shared/product/domain/interface/product.interface';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'product-list',
  styleUrl: './product-list.style.css',
  templateUrl: './product-list.template.html',
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
})
export class ProductListComponent {
  displayedColumns: string[] = ['code', 'description', 'price', 'actions'];
  dataSource: ProductInterface[] = [];

  constructor(
    private router: Router,
    public productService: ProductService,
  ) { }

  async ngOnInit() {
    this.productService.getAll().subscribe((data) => {
      console.log(data);
      this.dataSource.push(...data);
    });
  }

  edit(id: number) {
    console.log(id);
    this.router.navigate(['/products/' + id]);
  }
  delete(id: number) {
    this.productService.delete(id).subscribe((data) => {
      const foundIndex = this.dataSource.findIndex((i) => i.id == id);
      if (foundIndex != -1) this.dataSource.splice(foundIndex, 1)
    });
  }
  create() {
    this.router.navigate(['/products/new']);
  }
}

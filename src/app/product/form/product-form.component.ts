import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/product/application/service/product.service';
import { ProductInterface } from '../../../shared/product/domain/interface/product.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.template.html',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  code: string = '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router,
    public productService: ProductService,
    private route: ActivatedRoute,
  ) { }
  save() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id && id != 'new') {
      this.productService
        .update(Number(id), { code: this.code, description: this.description, price: Number(this.price) })
        .subscribe(() => {
          this.router.navigate(['/products'])
        });
    } else {
      this.productService
        .create({ code: this.code, description: this.description, price: Number(this.price) })
        .subscribe(() => {
          this.router.navigate(['/products'])
        });
    }
  }
  cancel() {
    this.router.navigate(['/products']);
  }

  async ngOnInit() {
    console.log(this.route, this.route?.snapshot, this.route?.snapshot?.paramMap);
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id != 'new')
      this.productService.getOne(Number(id)).subscribe((data) => {
        this.code = data.code;
        this.description = data.description;
        this.price = data.price.toString();
      });
  }
}

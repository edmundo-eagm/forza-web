import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.template.html',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {}

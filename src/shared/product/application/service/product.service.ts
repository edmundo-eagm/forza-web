import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { ProductInterface } from '../../domain/interface/product.interface';
import { ProductCreateInterface } from '../../domain/interface/product-create.interface';
import { ProductUpdateInterface } from '../../domain/interface/product-update.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'https://probable-carnival-69pqwgjgxx5wf4gv4-5001.app.github.dev/api/product';


    constructor(
        private http: HttpClient
    ) { }

    getAll() {
        return this.http.get<ProductInterface[]>(this.baseUrl);
    }

    getOne(id: number) {
        return this.http.get<ProductInterface>(this.baseUrl+'/'+id);
    }

    create(product: ProductCreateInterface) {
        return this.http.post<ProductInterface>(this.baseUrl, product);
    }

    update(id: number, product: ProductUpdateInterface) {
        return this.http.patch(`${this.baseUrl}/${id}`, product);
    }

    delete(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}

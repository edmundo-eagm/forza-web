import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { BrowserStorageService } from '../storage/application/service/storage.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const storageService = inject(BrowserStorageService);
  const token = storageService.get('token');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};

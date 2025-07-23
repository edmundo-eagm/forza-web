import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { BrowserStorageService } from '../storage/application/service/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const storage = inject(BrowserStorageService);
  const router = inject(Router);
  const token = storage.get('token');

  if (token && !isTokenExpired(token)) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const expiry = payload.exp;
    if (expiry) {
      const now = Math.floor(Date.now() / 1000);
      return now > expiry;
    }
    return true;
  } catch {
    return true;
  }
}

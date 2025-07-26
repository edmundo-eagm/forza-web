import { inject, Injectable, InjectionToken } from '@angular/core';
export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => typeof window !== 'undefined' ? window.localStorage : fakeStorage()
});
@Injectable({
    providedIn: 'root'
})
export class BrowserStorageService {
    public storage = inject(BROWSER_STORAGE);
    get(key: string) {
        return this.storage.getItem(key);
    }
    set(key: string, value: string) {
        this.storage.setItem(key, value);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }
}

function fakeStorage(): Storage {
    let store = {} as Record<string, string>;
    return {
        getItem: key => store[key] || null,
        setItem: (key, value) => { store[key] = value; },
        removeItem: key => { delete store[key]; },
        clear: () => { store = {}; },
        key: () => null,
        length: 0,
    };
}
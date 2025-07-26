import { Injectable } from '@angular/core';
import { LoginInterface } from '../../domain/interface/login.interface';
import { HttpClient } from '@angular/common/http';
import { SigninInterface } from '../../domain/interface/signin.interface';
import { TokenInterface } from '../../domain/interface/token.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private baseUrl = 'https://probable-carnival-69pqwgjgxx5wf4gv4-5000.app.github.dev/User';


    constructor(
        private http: HttpClient
    ) { }

    login(data: LoginInterface) {
        return this.http.post<TokenInterface>(`${this.baseUrl}/login`, data);
    }

    signin(data: SigninInterface) {
        return this.http.post<TokenInterface>(`${this.baseUrl}/signin`, data);
    }
}

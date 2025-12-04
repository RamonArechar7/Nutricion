import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/api/usuarios';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient) { }

    register(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/register`, data);
    }

    login(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/login`, data);
    }
}

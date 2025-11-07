import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    private _http = inject(HttpClient);

    createUser(
        correo: string,
        nombres: string,
        apellidos: string,
        cedula: string,
        rol: string,
        esta_activo: boolean,
        password: string
    ): Observable<any> {
        return this._http.post(`${environment.API_URL}/auth/register`, {
            correo,
            nombres,
            apellidos,
            cedula,
            rol,
            esta_activo,
            password
        }).pipe(
            map((res: any) => res.p_data || res),
            catchError(err => {
                console.error('Error en createUser:', err);
                return of(null);
            })
        );
    }
}
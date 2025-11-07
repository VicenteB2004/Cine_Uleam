import { inject, Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

export interface Session {
    usuario: string;
    rol: string;
    token: string;
}

@Injectable({
    providedIn: 'root',
})
export class AuthStateService {
    private readonly SESSION_KEY = 'app_session';
    private _storageService = inject(StorageService);

    signOut(): void {
        this._storageService.remove(this.SESSION_KEY);
    }

    /*Obtiene la sesión actual del usuario */
    getSession(): Session | null {
        const session = this._storageService.get<Session>(this.SESSION_KEY);
        return this._isValidSession(session) ? session : null;
    }

    /*Guarda la sesión del usuario en el almacenamiento*/
    setSession(session: Session): void {
        this._storageService.set(this.SESSION_KEY, session);
    }

    isAuthenticated(): boolean {
        return this.getSession() !== null;
    }

    /*Obtiene el token de autenticación*/
    getToken(): string | null {
        const session = this.getSession();
        return session?.token ?? null;
    }

    getRole(): string | null {
        const session = this.getSession();
        return session?.rol ?? null;
    }

    getUsername(): string | null {
        const session = this.getSession();
        return session?.usuario ?? null;
    }

    private _isValidSession(maybeSession: unknown): maybeSession is Session {
        if (typeof maybeSession !== 'object' || maybeSession === null) {
            return false;
        }

        const session = maybeSession as Session;
        return (
            typeof session.usuario === 'string' &&
            typeof session.rol === 'string' &&
            typeof session.token === 'string'
        );
    }
}
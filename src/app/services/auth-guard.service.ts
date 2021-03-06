import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./auth.service";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    //private route: ActivatedRoute,
    public authService: AuthService,
    public router: Router
  ) {}

  canActivate(): boolean {
    // Check if local storage has a token
    let token = this.authService.getToken();
    if (!token) {
      this.router.navigateByUrl("/login");
      return false;
    }

    // Decode token
    const decoded = jwt_decode(token);

    // Check if token expired
    const tokenExpired = this.authService.isTokenExpired(decoded);
    if (tokenExpired) return false;
    else return true;
    // Check if token id matches parameter id or token role is 2 (Manager)
    // const paramId = this.route.snapshot.paramMap.get("id");
    // if (token.id == paramId || token.role == 2) return true;
    // else return false;
  }
}

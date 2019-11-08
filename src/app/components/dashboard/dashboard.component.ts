import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Store, select } from "@ngrx/store";
import { Reimbursement } from "src/app/models/Reimbursement";
import { Observable, of } from "rxjs";
import * as jwt_decode from "jwt-decode";
import { ReimbursementActionTypes } from "src/app/store/actions/reimbursement.action-types";
import { GetUsersReimbs } from "src/app/store/actions/reimbursement.action";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  reimbursements$: Observable<Reimbursement[]>;
  getState: Observable<any>;
  id: any;

  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.getState = this.store.select("reimbursement");
  }

  ngOnInit() {
    // Get user id from url and retrieve associated reimbursements
    this.route.paramMap
      .pipe(switchMap((params: ParamMap) => of(params.get("id"))))
      .subscribe(id => (this.id = id));
    this.store.dispatch(new GetUsersReimbs(this.id));

    // Update reimbursements
    this.getState.subscribe(state => {
      this.reimbursements$ = state.reimbursements;
    });
  }
}

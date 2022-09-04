import { Component, Input, OnInit } from '@angular/core';
import { UserInformation } from 'src/app/shared/user-information.model';

@Component({
  selector: 'app-user-information-card',
  templateUrl: './user-information-card.component.html',
})
export class UserInformationCardComponent implements OnInit {

  @Input("user") public user: UserInformation;

  constructor() { }

  ngOnInit(): void {

  }

  getActualDebt() : number {
    return this.user.totalDebtHours - this.user.totalStudiedHours;
  }

  getActualNoVerifiedDebt() : number {
    return this.getActualDebt() - this.user.unverifiedStudiedHours;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserInformation } from '../shared/user-information.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public usersInformations: UserInformation[];
  constructor() {
    this.usersInformations = [
      {
        name: "klawx3",
        totalDebtHours: 72,
        totalStudiedHours: 55,
        unverifiedStudiedHours: 4
      },
      {
        name: "aracanox",
        totalDebtHours: 55,
        totalStudiedHours: 23,
        unverifiedStudiedHours: 2
      },
    ]
  }

  ngOnInit(): void {
  }

}

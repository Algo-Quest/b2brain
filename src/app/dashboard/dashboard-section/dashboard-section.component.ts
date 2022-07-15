import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AutoCompleteOrgModel } from './models/auto-complete-org.model';
import { DashboardSectionHttpService } from './service/dashboard-section-http.service';

import { DashboardSectionService } from './service/dashboard-section.service';
import {
  DEFAULT_LOGO,
  HTTP_ERROR_MESSAGE,
} from './constants/dashboard.constants';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.component.html',
  styleUrls: ['./dashboard-section.component.css'],
})
export class DashboardSectionComponent implements OnInit, AfterViewInit {
  /**
   * Variable declares
   */
  searchResultVar: string = '';
  accountSearchData: Array<AutoCompleteOrgModel> = [];
  progressBar: boolean = false;
  defaultLogo = DEFAULT_LOGO;

  constructor(
    private readonly dashboardSectionHttpService: DashboardSectionHttpService,
    private readonly dashboardSectionService: DashboardSectionService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  /**
   *
   * @param event as Form control from child component search - bar input reusable
   * @returns void
   */
  searchResult(event: FormControl) {
    if (!event.value) {
      return;
    }
    this.getDataFromApi(event.value);
  }

  /**
   * Hit api data
   * @Params string query
   */
  async getDataFromApi(query: string) {
    this.progressBar = true;
    this.dashboardSectionHttpService.searchAutoCompleteOrg(query).subscribe(
      (responseData) => this.handleSuccessResponse(responseData),
      (error) => {
        this.progressBar = false;
        this.dashboardSectionService.showErrorMessage(HTTP_ERROR_MESSAGE);
      }
    );
  }

  /**
   * Handle success response data
   */
  async handleSuccessResponse(accountSearchData: Array<AutoCompleteOrgModel>) {
    this.progressBar = false;
    this.accountSearchData = accountSearchData;
  }

  /**
   * for handling track event business logic
   *
   * @param accountData AutoCompleteOrgModel
   */
  trackAccountData(accountData: AutoCompleteOrgModel) {
    accountData.loading = !accountData.loading;
    setTimeout(() => {
      accountData.loading = !accountData.loading;
      accountData.isTracking = !accountData.isTracking;
    }, 3000);
  }
}

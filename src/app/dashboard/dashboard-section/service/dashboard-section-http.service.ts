import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutoCompleteOrg } from '../interface/auto-complete-org.interface';
import { AutoCompleteOrgModel } from '../models/auto-complete-org.model';
import { DashboardSectionService } from './dashboard-section.service';

@Injectable()
export class DashboardSectionHttpService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly dashboardSectionService: DashboardSectionService
  ) {}

  searchAutoCompleteOrg(query: string) {
    return this.httpClient
      .get<Array<AutoCompleteOrg>>(
        `${environment.origin}/search/autocomplete_org_all?q=${query}`
      )
      .pipe(
        map(
          (responseData: Array<AutoCompleteOrg>): Array<AutoCompleteOrgModel> =>
            this.dashboardSectionService.serializeAutoCompleteData(responseData)
        )
      );
  }
}

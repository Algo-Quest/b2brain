import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutoCompleteOrg } from '../interface/auto-complete-org.interface';
import { AutoCompleteOrgModel } from '../models/auto-complete-org.model';

@Injectable()
export class DashboardSectionService {
  constructor(private _snackBar: MatSnackBar) {}

  serializeAutoCompleteData(
    responseData: Array<AutoCompleteOrg>
  ): Array<AutoCompleteOrgModel> {
    return responseData.map(
      ({ company, slug, logo, website }) =>
        new AutoCompleteOrgModel(company, slug, logo, website)
    );
  }

  showErrorMessage(message: string, action = 'close') {
    this._snackBar.open(message, action);
  }
}

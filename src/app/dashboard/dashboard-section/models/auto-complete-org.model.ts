export class AutoCompleteOrgModel {
  public isTracking = false;
  public loading = false;
  constructor(
    public company: string,
    public slug: string,
    public logo: string,
    public website: string
  ) {}
}

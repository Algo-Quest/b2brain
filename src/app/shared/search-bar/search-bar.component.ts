import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder: string = '';

  public readonly searchControl: FormControl = new FormControl(null, [
    Validators.required,
  ]);

  @Output() public readonly searchOutputEventEmit =
    new EventEmitter<FormControl>();
  constructor() {}

  ngOnInit(): void {}

  /**
   * Event emit from output emitter as Form Control
   */
  searchEventEmit() {
    this.searchOutputEventEmit.emit(this.searchControl);
  }
}

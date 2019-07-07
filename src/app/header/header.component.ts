import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Which component to show?
  // send the answer out as output
  @Output() featureSelected = new EventEmitter<string>();


  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}

import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Which component to show?
  // send the answer out as output
  @Output() recipes: EventEmitter<boolean> = new EventEmitter<boolean>();



  showRecipes() {
    this.recipes.emit(true);
  }
}

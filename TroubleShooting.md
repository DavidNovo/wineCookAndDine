# TroubleShooting Issues
Like the title says, this page will list the problems I have encountered and how I resolved them.

## Testing

### Running Karma Tests

#### There are unknown elements in the main page of the application.

After running `ng test` on the command line, I saw these errors in the broqwser window:

`Error: Template parse errors:
        'app-header' is not a known element:
        1. If 'app-header' is an Angular component, then verify that it is part of this module.
        2. If 'app-header' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("wxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
        </div>
        [ERROR ->]<app-header></app-header>
        <div class="container-fluid">
        "): ng:///DynamicTestModule/AppComponent.html@7:0
        'app-recipes' is not a known element:
        1. If 'app-recipes' is an Angular component, then verify that it is part of this module.
        2. If 'app-recipes' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the '@NgModule.schemas' of this component to suppress this message. ("
        <div class="row">
          <div class="col-md-12">
            [ERROR ->]<app-recipes></app-recipes>
          </div>
        </div>
        "): ng:///DynamicTestModule/AppComponent.html@12:4
            at syntaxError (node_modules/@angular/compiler/fesm5/compiler.js:2430:1)
            at TemplateParser.parse (node_modules/@angular/compiler/fesm5/compiler.js:20605:1)
            at JitCompiler._parseTemplate (node_modules/@angular/compiler/fesm5/compiler.js:26171:1)
            at JitCompiler._compileTemplate (node_modules/@angular/compiler/fesm5/compiler.js:26158:1)
            at node_modules/@angular/compiler/fesm5/compiler.js:26101:48
            at Set.forEach (<anonymous>)
            at JitCompiler._compileComponents (node_modules/@angular/compiler/fesm5/compiler.js:26101:1)
            at node_modules/@angular/compiler/fesm5/compiler.js:26019:1
            at Object.then (node_modules/@angular/compiler/fesm5/compiler.js:2421:33)
Chrome 74.0.3729 (Mac OS X 10.14.4): Executed 8 of 8 (3 FAILED) (0.17 secs / 0.134 secs)
`
In unit tests, I want to test the components mostly isolated from other parts of the application, but I have the app.component referencing several other components.  To do this, I need to add the component dependencies to the app.component.spec file manually.  I had to add an explicit import and an entry for in the declaration array for each component in app.component.html page. :

`import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        RecipesComponent,
        RecipeListComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent
      ],
    }).compileComponents();
  }));`

#### Using IntelliJ to run Karma tests
I can run Karma tests using the command line through a terminal. Not can I run them using the Intellij IDE?

Look at this resource for details: https://www.jetbrains.com/help/idea/running-unit-tests-on-karma.html


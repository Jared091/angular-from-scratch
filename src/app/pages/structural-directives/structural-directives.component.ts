import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.component.html',
})
export class StructuralDirectivesComponent {
  // condficional if 
  isVisible = signal(true);
  
  toggleVisibility() {
    this.isVisible.set(!this.isVisible());
  }
  // condicional switch
  viewMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }
  // condicional for
  users = signal([
    { id: 1, name: 'Alice' ,role : 'Admin'},
    { id: 2, name: 'Bob' ,role : 'User'},
    { id: 3, name: 'Charlie' ,role : 'User'}
  ]);
}

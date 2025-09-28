import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directives.component.html',
})
export class AttributeDirectivesComponent {
  title = 'Attribute Directives Page';
  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The state is active.';
      case 'error':
        return 'There is an error.';
      case 'neutral':
        return 'The state is neutral.';
      default:
        return '';
    }

  });
  setActive() {
    this.state.set('active');
  }
  setError() {
    this.state.set('error');
  }
  setNeutral() {
    this.state.set('neutral');
  }
}

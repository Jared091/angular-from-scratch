import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home page/home page.component';
import { CounterPageComponent } from './pages/counter page/counter page.component';
import { StructuralDirectivesComponent } from './pages/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './pages/attribute-directives/attribute-directives.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'counter', component: CounterPageComponent },
    { path: 'structural-directives', component: StructuralDirectivesComponent },
    { path: 'attribute-directives', component: AttributeDirectivesComponent },
    { path: 'data-binding', component: DataBindingPageComponent },
    { path: 'service', component: ServicePageComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

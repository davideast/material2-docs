import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { ComponentsComponent} from './components/components.component';
import { ComponentdocComponent } from './componentdoc/componentdoc.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guides', component: GuideComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/:selector', component: ComponentdocComponent }
];

export const appRoutingProviders = [];

export const routing = RouterModule.forRoot(appRoutes);
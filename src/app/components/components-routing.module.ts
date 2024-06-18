import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorComponent } from './behavior/behavior.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behavior', component: BehaviorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}

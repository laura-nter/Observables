import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { FirstComponent } from './subject/components/first/first.component';
import { SecondComponent } from './subject/components/second/second.component';
import { ThirdComponent } from './behavior/components/third/third.component';


@NgModule({
  declarations: [
    HomeComponent,
    SubscriptionComponent,
    SubjectComponent,
    BehaviorComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }

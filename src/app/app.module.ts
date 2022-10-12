import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { RenderCondicionalComponent } from './components/render-condicional/render-condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ChildChangeNumberComponent } from './components/child-change-number/child-change-number.component';
import { CorrectChildChangeNumberComponent } from './components/correct-child-change-number/correct-child-change-number.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipeOperatorsComponent } from './components/pipe-operators/pipe-operators.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    RenderCondicionalComponent,
    EventosComponent,
    ChildChangeNumberComponent,
    CorrectChildChangeNumberComponent,
    ListRenderComponent,
    PipeOperatorsComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

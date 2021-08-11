import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MultiselectDropdownComponent } from './multiselect-dropdown/multiselect-dropdown.component';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { TreeViewModule } from '@progress/kendo-angular-treeview';



@NgModule({
  declarations: [AppComponent, HomeComponent, MultiselectDropdownComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    BrowserAnimationsModule,
    LabelModule,
    DropDownsModule,
    PopupModule,
    TreeViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

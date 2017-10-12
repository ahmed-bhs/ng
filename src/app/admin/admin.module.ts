import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SessionItemComponent} from './session-item/session-item.component';
import {AdminComponent} from './admin/admin.component';
import {SessionAddFormComponent} from './session-add-form/session-add-form.component';
import {SessionItemListComponent} from './session-item-list/session-item-list.component';
import {SessionEditFormComponent} from './session-edit-form/session-edit-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SessionItemComponent,
    SessionItemListComponent,
    SessionAddFormComponent,
    SessionEditFormComponent,
    AdminComponent
  ]
})
export class AdminModule { }

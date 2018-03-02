import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

import { StoreRoutingModule } from './store-routing.module';

import { StoreComponent } from './store.component';
import { StoreService } from './store.service';

import {HttpModule} from '@angular/http';

import {BrowserModule } from '@angular/platform-browser';

import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ThemeModule, StoreRoutingModule, ReactiveFormsModule, FormsModule],
  declarations: [StoreComponent],
  entryComponents: [],
  providers: [StoreService]
})
export class StoreModule {}

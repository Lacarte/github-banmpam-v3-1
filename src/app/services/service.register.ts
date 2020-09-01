
import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SendGiftService} from './send-gift.service';
import { AuthService } from './auth.service';

@Injectable()
@NgModule({
providers: [
SendGiftService,
AuthService
],

})

export class ServiceRegister {}


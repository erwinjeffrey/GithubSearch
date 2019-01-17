import { User } from './../../../models/user.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'profileDetail',
    templateUrl: './profile.Detail.Component.html'
})
export class profileDetailComponent{

    @Input() user: User[];
}
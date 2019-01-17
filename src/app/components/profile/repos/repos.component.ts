import { Component, Input } from '@angular/core';
import { Repos } from 'src/app/models/repos.model';
@Component({
    selector: 'repos',
    templateUrl: './repos.component.html'
})
export class ReposComponent{
    @Input() repos: Repos[];
}

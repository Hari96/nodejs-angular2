import { Component, OnChanges, Input } from 'angular2/core';

@Component({
    selector: 'acw-thumb',
    templateUrl: '/app/shared/thumb.component.html',
    styleUrls: ['/app/shared/thumb.component.css']
})
export class ThumbComponent implements OnChanges {
    @Input() rating: number;
    thumbsWidth: number;
    ngOnChanges(): void {
        this.thumbsWidth = this.rating * 86 / 5;
    }
}

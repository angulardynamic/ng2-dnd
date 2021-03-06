import { Component } from '@angular/core';

@Component({
    selector: 'custom-function',
    templateUrl: './custom-function.component.html'
})
export class CustomFunctionComponent {
    box1Integer: number = 3;
    box2Integer: number = 10;

    box1Items: string[] = [];
    box2Items: string[] = [];

    allowDropFunction(baseInteger: number): any {
        return (dragData: any) => dragData % baseInteger === 0;
    }

    addTobox1Items($event: any) {
        this.box1Items.push($event.dragData);
    }

    addTobox2Items($event: any) {
        this.box2Items.push($event.dragData);
    }
}
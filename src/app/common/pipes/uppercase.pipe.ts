import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upper'
})
export class UppercasePipe implements PipeTransform {

    transform (value: string): string {
        const transfromedValue = value.toUpperCase();

        return transfromedValue;
    }
}
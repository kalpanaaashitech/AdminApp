import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterCity'
})


@Injectable()

export class FilterCity implements PipeTransform {

    transform(Citys: any[], city_name: any): any[] {
        if (!city_name) return Citys;
        return Citys.filter(function(City){
            return City.city_name.toLowerCase().includes(city_name.toLowerCase());
        })
    }
}


import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterCountrys'
})


@Injectable()

export class FilterCountrys implements PipeTransform {
    
    transform(Countrys: any[], country_name: any): any[] {
        if (!country_name) return Countrys;
        return Countrys.filter(function(Country){
            return Country.country_name.toLowerCase().includes(country_name.toLowerCase());
        })
    }
}


import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterStates'
})


@Injectable()

export class FilterStates implements PipeTransform {
    
    transform(States: any[], state_name: any): any[] {
        if (!state_name) return States;
        return States.filter(function(State){
            return State.state_name.toLowerCase().includes(state_name.toLowerCase());
        })
    }
}


import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterEmail'
})


@Injectable()

export class FilterEamil implements PipeTransform {

    transform(users: any[], email: any): any[] {
        if (!email) return users;
        return users.filter(function(user){
            return user.email.toLowerCase().includes(email.toLowerCase());
        })
    }
}


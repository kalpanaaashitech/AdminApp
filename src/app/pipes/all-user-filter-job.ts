import {Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterJob'
})


@Injectable()

export class FilterJob implements PipeTransform {

    transform(users: any[], job: any): any[] {
        if (!job) return users;
        return users.filter(function(user){
            return user.job.toLowerCase().includes(job.toLowerCase());
        })
    }
}


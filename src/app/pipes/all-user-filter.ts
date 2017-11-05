import {Injectable, Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'AllUserFilter'
})

export class AllUserFilter implements PipeTransform {
    
        transform(users: any[], InscubeName: any): any[] {
            if (!InscubeName) return users;
            return users.filter(function(user){
                return user.inscube_name.toLowerCase().includes(InscubeName.toLowerCase());
            })
        }

}
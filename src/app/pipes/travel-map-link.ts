import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({
    name: 'GmapAdd'
})

export class GmapAdd implements PipeTransform {
    url;
    constructor(private sanitizer: DomSanitizer) {}
    
     transform(value: string, args: string[]): any { 
        if (!value) return value;  
        this.url =  "https://www.google.com/maps/embed/v1/search?key=AIzaSyBe26Hf5OybAujVPQrZKAm34dPYJCl0vjo&q="+value;
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        }

}
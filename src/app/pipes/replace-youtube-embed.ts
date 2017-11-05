import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';


@Pipe({
    name: 'YoutubeReplace'
})

export class YoutubeReplace implements PipeTransform {
    url;
    constructor(private sanitizer: DomSanitizer) {}
    
     transform(value: string, args: string[]): any { 
        if (!value) return value;  
        this.url =  value.replace('/watch?v=', '/embed/');
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        }

}
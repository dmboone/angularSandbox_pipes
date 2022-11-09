import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten' // this is the name by which we will access the pipe
})

// Creating our own pipe!
export class ShortenPipe implements PipeTransform{
    transform(value: any) {
        if(value.length > 10){
            return value.substr(0, 10) + ' ...';
        }
        else{
            return value.substr(0, 10);
        }
    }
}
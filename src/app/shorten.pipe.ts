import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten' // this is the name by which we will access the pipe
})

// Creating our own pipe!
export class ShortenPipe implements PipeTransform{
    transform(value: any, limit: number) { // parameters for the pipe
        if(value.length > limit){
            return value.substr(0, limit) + ' ...';
        }
        else{
            return value.substr(0, limit);
        }
    }
}
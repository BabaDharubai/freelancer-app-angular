import { Pipe, PipeTransform } from '@angular/core';
import { Certificate } from '../models/certificate';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Certificate[], type:string): string[] {
    let courses:string[]=[];
    if(type==='course'){
      value.forEach(val=>courses.push(val.course));
      return courses;
    }
    return courses;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Experience } from '../models/experience';

@Pipe({
  name: 'experience'
})
export class ExperiencePipe implements PipeTransform {

  transform(value: Experience[], type:string): string[] {
    let company:string[]=[];
    let roles:string[]=[];
    let num:number;
    if(type=='years'){
      value.forEach(val=>company.push(val.companyName));
      return company;
    }
    if(type=='role'){
      value.forEach(val=>roles.push(val.role));
      return roles;
    }
    return roles;
  }

}

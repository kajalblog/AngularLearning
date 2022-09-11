import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    console.log(value);
    // return value +'Demo';
    
    if(value.length>8)
    {
      return value.substr(0,14) +'...'
    }
    else
    {
      return value;
    }
  }

}

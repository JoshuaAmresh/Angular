import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(inputString: string, ...args: any[]): any {
    if (!inputString) { return ''; }
    const words = inputString.split(' ');
    for (let i = 0; i < words.length; ++i) {
      if (!words[i]) { continue; }
      words[i] = words[i].slice(1) + words[i][0] + 'a';
    }
    return words.join(' ');
  }

}

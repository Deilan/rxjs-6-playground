import { of } from 'rxjs';

function greet(msg: string): void {
  console.log(msg);
}

of(`Hello World!`).subscribe((data) => greet(data));



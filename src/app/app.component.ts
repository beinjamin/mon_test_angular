import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;


/*   Interpolation &&& properties brading laison du code typescript ver le template */
  constructor(){
   setTimeout(() => {
     this.isAuth = true;

   }, 4000
   );
  }

 onAllumer() {
   console.log('allumer');
 }
}

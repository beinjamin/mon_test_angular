import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input()
  appareilName!: string;
  appareilStatus = 'eteint';


  constructor() { }

  ngOnInit(): void {
  }
  /*   Interpolation &&& properties brading laison du code typescript ver le template */
  getStatus()  {
    return this.appareilStatus;
  }
}

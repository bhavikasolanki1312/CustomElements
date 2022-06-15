import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { initializeApp } from 'firebase/app';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
   firebaseConfig = {
    //...
  };
  
   app = initializeApp(this.firebaseConfig);
@Input('buttonLabel') buttonLabel : string = 'Default';
// @Output('customEvent') customEvent : EventEmitter<any> = new EventEmitter<any>();
@Output('customEvent') customEvent : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

onclick(){
  this.customEvent.emit('Emitting String');
}
  
  ngOnInit(): void {
  }

}

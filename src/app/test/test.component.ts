import { Component } from '@angular/core';

@Component({
  selector: '.app-test',
  standalone: true,
  imports: [],
  template: `<h1>Hello {{name}} </h1>
  <p>World</p>
  <input [disabled]=answer [type]=Types value="vrishab" >`,
  styles:[`
  h1{
    color:red
  }
  p{
    color:blue
  }`]
})
export class TestComponent {
   name="hari"
   Types="text"
   answer=false
}

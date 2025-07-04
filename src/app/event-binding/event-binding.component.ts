import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
   showAlert(){
    alert("Button Clicked")
   }
   getDetails(event:any){
       alert(event.target.value)
   }
   getUsername(value:any){
    console.log(value)
   }
}

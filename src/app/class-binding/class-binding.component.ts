
import { NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [NgClass],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.css'
})
export class ClassBindingComponent {
  marks=50
  result=true
}


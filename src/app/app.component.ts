import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgIfDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIfDirectiveComponent,TestComponent,ClassBindingComponent,EventBindingComponent,TwoWayDataBindingComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Good Evening';
}

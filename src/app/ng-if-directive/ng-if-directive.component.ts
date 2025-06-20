import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,NgFor} from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-ng-if-directive',
  standalone: true,
  imports: [NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,NgFor],
  templateUrl: './ng-if-directive.component.html',
  styleUrl: './ng-if-directive.component.css'
})
export class NgIfDirectiveComponent {
  displayValue=false;
  dValue=true;
  color="white";
  food=['rice','fruits','nuts','vegetables']
}

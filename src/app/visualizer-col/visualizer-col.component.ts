import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: "app-visualizer-col",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./visualizer-col.component.html",
  styleUrl: "./visualizer-col.component.scss",
})
export class VisualizerColComponent {
  tasks = input<number>(0);

  constructor() {
    //console.log(this.tasks());
  }
}

import { Component } from "@angular/core";
import { VisualizerColComponent } from "../visualizer-col/visualizer-col.component";
import { WorkloadService } from "../workload/workload.service";

@Component({
  selector: "app-visualizer",
  standalone: true,
  imports: [VisualizerColComponent],
  templateUrl: "./visualizer.component.html",
  styleUrl: "./visualizer.component.scss",
})
export class VisualizerComponent {
  constructor(public readonly workload: WorkloadService) {}
}

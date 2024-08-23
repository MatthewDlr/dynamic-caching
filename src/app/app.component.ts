import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { VisualizerComponent } from "./visualizer/visualizer.component";
import { WorkloadService } from "./workload/workload.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, VisualizerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "dynamic-caching";

  constructor(public readonly workload: WorkloadService) {}

  public redirectToYoutubeVideo() {
    window.open("https://youtu.be/ctkW3V0Mh-k?t=376", "_blank");
  }
}

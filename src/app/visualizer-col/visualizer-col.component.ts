import { CommonModule } from "@angular/common";
import { Component, effect, input } from "@angular/core";
import { WorkloadService } from "../workload/workload.service";

@Component({
  selector: "app-visualizer-col",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./visualizer-col.component.html",
  styleUrl: "./visualizer-col.component.scss",
})
export class VisualizerColComponent {
  private PRIMARY_COLORS = ["bg-primary-500", "bg-primary-700", "bg-primary-900"];
  private DEFAULT_COLOR = "bg-gray-800/75";
  private OVERFLOW_COLOR = "bg-red-500";

  public tasks = input([0]);
  public cellColors: string[] = new Array(this.workload.MAX_WORKLOAD).fill(this.DEFAULT_COLOR);

  constructor(public readonly workload: WorkloadService) {
    effect(() => {
      if (this.tasksExceedMaxWorkload()) {
        this.cellColors.fill(this.OVERFLOW_COLOR);
        return;
      }

      let depth = 0;
      let currentIndex = 0;

      for (const taskValue of this.tasks()) {
        for (let i = 0; i < taskValue; i++) {
          const newCellColor = this.PRIMARY_COLORS[Math.min(depth, this.PRIMARY_COLORS.length - 1)];
          this.cellColors[i + currentIndex] = newCellColor;
        }
        currentIndex += taskValue;
        depth++;
      }

      for (let i = currentIndex; i < this.cellColors.length; i++) {
        this.cellColors[i] = this.DEFAULT_COLOR;
      }

      this.cellColors.reverse();
    });
  }

  tasksExceedMaxWorkload(): boolean {
    return (
      this.tasks().reduce(function (c, d) {
        return c + d;
      }, 0) > this.workload.MAX_WORKLOAD
    );
  }
}

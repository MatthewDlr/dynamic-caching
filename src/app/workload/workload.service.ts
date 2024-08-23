import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WorkloadService {
  public MAX_WORKLOAD = 10;
  public mode: "standard" | "dynamic" = "standard";
  public cache: number[] = new Array(20).fill(0);
  private workloadQueue: number[] = [...this.generateRandomTasks(10)];
  public efficiency = signal(0);

  constructor() {
    setInterval(() => {
      this.generateWorkload();
      this.shiftCache();

      if (this.mode === "dynamic") {
        this.dynamicCaching();
      } else {
        this.standardCaching();
      }

      this.calculateEfficiency();
    }, 500);
  }

  private dynamicCaching() {}

  private standardCaching() {
    this.cache[this.cache.length - 1] = this.workloadQueue.pop() || 0;
  }

  private getWorkloadOfColumn(column: number) {
    return this.cache[column];
  }

  private shiftCache() {
    for (let col = 0; col < this.cache.length - 1; col++) {
      this.cache[col] = this.cache[col + 1];
    }
  }

  private calculateEfficiency() {
    const used = this.cache.reduce(function (a, b) {
      return a + b;
    }, 0);
    const max = 20 * this.MAX_WORKLOAD;
    const efficiency = Math.round((used * 100) / max);
    console.log(efficiency);
    this.efficiency.set(efficiency);
  }

  private generateWorkload() {
    const workload = this.workloadQueue.length;
    if (workload > 20) return;

    if (workload > 10) {
      this.workloadQueue.push(...this.generateRandomTasks(1));
    } else if (workload > 5) {
      this.workloadQueue.push(...this.generateRandomTasks(3));
    } else {
      this.workloadQueue.push(...this.generateRandomTasks(5));
    }
  }

  private generateRandomTasks(numberOfTasks: number): number[] {
    const queue = [];
    for (let i = 0; i < numberOfTasks; i++) {
      queue.push(Math.floor(Math.random() * this.MAX_WORKLOAD) + 1);
    }
    return queue;
  }
}

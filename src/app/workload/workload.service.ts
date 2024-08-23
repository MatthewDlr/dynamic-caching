import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WorkloadService {
  public MAX_WORKLOAD = 10;
  public mode: "standard" | "dynamic" = "standard";
  public cache: number[][] = new Array(20).fill([0]);
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

      console.log(this.cache);
      this.calculateEfficiency();
    }, 250);
  }

  private dynamicCaching() {
    this.standardCaching();

    for (let i = this.cache.length - 2; i > 0; i--) {
      let sum = 0;
      for (const taskValue of this.cache[i]) {
        sum += taskValue;
      }
      if (sum + this.workloadQueue[0] > this.MAX_WORKLOAD) continue;

      this.cache[i].push(this.workloadQueue.shift()!);
      i++;
    }
  }

  private standardCaching() {
    this.cache[this.cache.length - 1] = [this.workloadQueue.shift()!];
  }

  private shiftCache() {
    for (let col = 0; col < this.cache.length - 1; col++) {
      this.cache[col] = this.cache[col + 1];
    }
  }

  private calculateEfficiency() {
    const used = this.cache.reduce(function (a, b) {
      return (
        a +
        b.reduce(function (c, d) {
          return c + d;
        }, 0)
      );
    }, 0);
    const max = 20 * this.MAX_WORKLOAD;
    const efficiency = Math.round((used * 100) / max);
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

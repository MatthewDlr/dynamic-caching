import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NeatConfig, NeatGradient } from "@firecms/neat";

@Component({
  selector: "app-dynamic-gradient",
  standalone: true,
  imports: [],
  templateUrl: "./dynamic-gradient.component.html",
  styleUrl: "./dynamic-gradient.component.scss",
})
export class DynamicGradientComponent implements AfterViewInit {
  config: NeatConfig = {
    colors: [
      {
        color: "#030712",
        enabled: true,
      },
      {
        color: "#030712",
        enabled: true,
      },
      {
        color: "#0ea5e9",
        enabled: true,
      },
      {
        color: "#030712",
        enabled: true,
      },
    ],
    speed: 10,
    horizontalPressure: 5,
    verticalPressure: 5,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    shadows: 5,
    highlights: 0,
    colorSaturation: 7,
    colorBrightness: 0.35,
    wireframe: false,
    backgroundColor: "#030712",
    backgroundAlpha: 0.5,
  };

  @ViewChild("neatGradient") canvasRef!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    new NeatGradient({
      ref: this.canvasRef.nativeElement,
      ...this.config,
    });
  }
}

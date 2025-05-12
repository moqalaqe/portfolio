import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  backgroundStyle = '';
  backgroundStyle2 = '';

  onMouseMove(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.backgroundStyle = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgb(0, 123, 255),
        rgba(17, 58, 220, 0.73) 50%,
        transparent 80%
      )
    `;
  }

  clearGlow() {
    this.backgroundStyle = '';
  }

    onMouseMove2(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.backgroundStyle2 = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgb(0, 123, 255),
        rgba(17, 58, 220, 0.73) 50%,
        transparent 80%
      )
    `;
  }

  clearGlow2() {
    this.backgroundStyle2 = '';
  }
}

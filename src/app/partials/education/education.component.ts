import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  backgroundStyle = '';

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
}

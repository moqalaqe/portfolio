import { Component } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { Engine, Container } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 300,
        },
      },
      size: {
         value: 1
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
    fullScreen: {
      enable: true
    }
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }

  particlesLoaded(container: Container): void {
    console.log('Particles loaded', container);
  }
}

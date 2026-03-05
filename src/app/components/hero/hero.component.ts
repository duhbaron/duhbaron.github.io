import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  weather: any = null;

  services = [
    'Exterior Detail & Polish',
    'Interior Deep Clean & CockPit Detail',
    'Windshield & Lens Treatment',
    'Corrosion Prevention',
    'Eco-Friendly Dry Wash'
  ];

  constructor() {
    this.getWeather();
  }

  async getWeather(): Promise<void> {
    try {
      const res = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Lawrenceville,GA,US&appid=17399cf00f734ff1a7f7b401a1b72f86&units=imperial'
      );
      const data = await res.json();
      const temp = Math.round(data.main.temp);
      const condition = data.weather[0].main;
      const wind = Math.round(data.wind.speed);
      const desc = data.weather[0].description;

      let icon = '🌤';
      let detailing = '✅ Great conditions for detailing today!';

      if (condition === 'Rain' || condition === 'Drizzle' || condition === 'Thunderstorm') {
        icon = '🌧'; detailing = '⚠️ Rain expected — indoor detailing available';
      } else if (condition === 'Snow') {
        icon = '❄️'; detailing = '⚠️ Cold conditions — contact us to schedule';
      } else if (condition === 'Clouds') {
        icon = '⛅'; detailing = '✅ Good conditions for detailing today!';
      } else if (condition === 'Clear') {
        icon = '☀️'; detailing = '✅ Perfect conditions for detailing today!';
      }

      this.weather = { temp, wind, desc, icon, detailing };
    } catch (e) {
      console.error('Weather error:', e);
    }
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
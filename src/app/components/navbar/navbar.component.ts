import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuOpen = false;
  activeSection = 'home';

  sections = ['home', 'booking', 'gallery', 'testimonials', 'contact'];

  ngOnInit(): void {}

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollY = window.scrollY + 90;
    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bot = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bot) {
          this.activeSection = id;
        }
      }
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(id: string): void {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }
}

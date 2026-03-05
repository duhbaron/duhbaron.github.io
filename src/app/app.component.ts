import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { BookingComponent } from './components/booking/booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    BookingComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <div class="scroll-progress"><div class="scroll-progress-bar" [style.width.%]="scrollPercent"></div></div>
    <main>
      <app-hero></app-hero>
      <app-booking></app-booking>
      <app-gallery></app-gallery>
      <app-testimonials></app-testimonials>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
    <div class="notification" [class.show]="notifVisible">
      <span>{{ notifIcon }}</span>
      <span>{{ notifMessage }}</span>
    </div>
  `,
  styles: [`
    .scroll-progress {
      position: fixed; top: 72px; left: 0; right: 0; z-index: 99;
      height: 3px; background: var(--gray-100);
    }
    .scroll-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--sky), var(--gold));
      transition: width 0.1s linear;
    }
    .notification {
      position: fixed; bottom: 30px; right: 30px; z-index: 999;
      background: var(--navy);
      color: var(--white);
      padding: 16px 24px;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 500;
      box-shadow: var(--shadow-lg);
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      display: flex; align-items: center; gap: 10px;
      max-width: 340px;
      border-left: 4px solid var(--gold);
    }
    .notification.show { transform: translateY(0); opacity: 1; }
  `]
})
export class AppComponent {
  scrollPercent = 0;
  notifVisible = false;
  notifMessage = '';
  notifIcon = '✅';

  constructor() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      this.scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    });

    window.addEventListener('aerolux-notify', (e: any) => {
      this.showNotif(e.detail.message, e.detail.icon);
    });
  }

  showNotif(message: string, icon = '✅') {
    this.notifMessage = message;
    this.notifIcon = icon;
    this.notifVisible = true;
    setTimeout(() => this.notifVisible = false, 4500);
  }
}

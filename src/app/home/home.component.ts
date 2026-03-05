import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { BookingComponent } from '../components/booking/booking.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
import { TrustComponent } from '../components/trust/trust.component';
import { FaqComponent } from '../components/faq/faq.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BookingComponent,
    GalleryComponent,
    TestimonialsComponent,
    FaqComponent,
    ContactComponent,
    TrustComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-trust></app-trust>
    <app-booking></app-booking>
    <app-gallery></app-gallery>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-faq></app-faq>
  `
})
export class HomeComponent {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../components/hero/hero.component';
import { BookingComponent } from '../components/booking/booking.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { ContactComponent } from '../components/contact/contact.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    BookingComponent,
    GalleryComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-booking></app-booking>
    <app-gallery></app-gallery>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `
})
export class HomeComponent {}
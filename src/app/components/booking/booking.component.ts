import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  submitted = false;
  today = new Date().toISOString().split('T')[0];

  features = [
    {
      icon: '🛡️',
      title: 'FAA-Compliant Products',
      desc: 'All chemicals and processes meet FAA airworthiness standards and manufacturer specs.'
    },
    {
      icon: '📍',
      title: 'Mobile Service — We Come to You',
      desc: 'On-site detailing at your hangar, FBO, or airport ramp. No trailer fees, no minimums.'
    },
    {
      icon: '⏱️',
      title: 'On-Time Guarantee',
      desc: "We respect your schedule. If we're late, your next service is discounted."
    }
  ];

  aircraftTypes = [
    'Single Engine Piston', 'Twin Engine Piston', 'Turboprop',
    'Light Jet', 'Midsize Jet', 'Heavy Jet / BBJ',
    'Helicopter', 'Commercial / Regional'
  ];

  packages = [
    'Essential — Exterior Wash & Polish',
    'Signature — Full Exterior Detail',
    'Elite — Full Interior & Exterior',
    'Guardian — Paint Protection Film',
    'Eco — Waterless Dry Wash',
    'Custom — Build My Package'
  ];

  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgvlbjr', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        this.submitted = true;
        form.reset();
        window.dispatchEvent(new CustomEvent('aerolux-notify', {
          detail: { message: "Booking request received! We'll confirm shortly. ✈", icon: '✅' }
        }));
        setTimeout(() => this.submitted = false, 8000);
      }
    } catch (error) {
      console.error('Form error:', error);
    }
  }
}

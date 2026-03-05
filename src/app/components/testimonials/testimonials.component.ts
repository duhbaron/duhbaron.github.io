import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Testimonial {
  initials: string;
  name: string;
  role: string;
  text: string;
  avatarColor: string;
  featured?: boolean;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {

  // ── EDIT YOUR TESTIMONIALS HERE ──
  testimonials: Testimonial[] = [
    {
      initials: 'S',
      name: 'Sean',
      role: 'A.I.R Flight Academy · Delta Airline Pilot',
      text: 'The team showed up on time, worked around our flight schedule, and left the aircraft looking better than the day it came off the production line.',
      avatarColor: 'linear-gradient(135deg, #2e7dbe, #0b1f3a)',
      featured: true
    },
     {
    initials: 'C',
    name: 'Chris',
    role: 'Private Pilot',
    text: 'Had them clean my Beechcraft Baron last month. The attention to detail was incredible - they got into every nook and cranny. It’s like flying a brand new plane now.',
    avatarColor: 'linear-gradient(135deg, #c8a96e, #a07030)'
  },
    
  ];
}

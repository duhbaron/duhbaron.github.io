import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'Do you come to my hangar?',
      answer: 'Yes! We travel directly to your aircraft at your hangar or FBO. No need to move your plane — we bring everything we need to you.'
    },
    {
      question: 'How long does a detail take?',
      answer: 'A full exterior detail typically takes 3-5 hours depending on aircraft size and condition. A full interior and exterior detail can take 6-10 hours. We work efficiently without cutting corners.'
    },
    {
      question: 'Do you service commercial aircraft?',
      answer: 'We primarily service private jets, turboprops, piston aircraft, and helicopters. Contact us for commercial fleet inquiries and we will work out a custom plan.'
    },
    {
     question: 'What is your service area?',
     answer: 'We are based at Gwinnett County Airport (LZU) in Lawrenceville, GA and regularly service PDK — Dekalb-Peachtree, FTY — Fulton County, RYY — Cobb County, and GVL — Lee Gilmer Memorial. Contact us to confirm availability at your airport.'
    },
    
    {
      question: 'What products do you use?',
      answer: 'We use only aviation-safe, FAA compliant products specifically formulated for aircraft surfaces, avionics, and paint systems. We never use automotive or household products on aircraft.'
    },
    {
      question: 'Do you offer recurring detail plans?',
      answer: 'Yes! We offer recurring detail schedules on a monthly, bi-monthly, or quarterly basis. Regular clients receive priority scheduling and preferred pricing.'
    }
  ];

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
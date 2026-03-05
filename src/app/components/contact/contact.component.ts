import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;
   isMobile = false;

  constructor() {
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  contactItems = [
    { icon: '📞', title: 'Phone',        lines: ['(678) 549-0938', 'Mon–Sun, 24/7 Service'] },
    { icon: '✉️', title: 'Email',        lines: ['contact@aeroluxaviationusa.com', '2-hour response guarantee'] },
    { icon: '📍', title: 'Service Area', lines: ['We travel to airports/FBOs within Atlanta Region.', 'Long-distance trips available on request.'] },
    { icon: '✈',  title: 'Base Airport', lines: ['LZU — Regional Executive Airport'] }
  ];

  services = [
    'Exterior Detail & Polish',
    'Interior Deep Clean',
    'Ceramic Coating',
    'Full Detail Package',
    'Fleet Services'
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
          detail: { message: 'Quote request sent! Expect a detailed estimate within 24 hours.', icon: '✅' }
        }));
        setTimeout(() => this.submitted = false, 8000);
      }
    } catch (error) {
      console.error('Form error:', error);
    }
  }
}

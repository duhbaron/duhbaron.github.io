import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.css']
})
export class TrustComponent {
  badges = [
    { icon: '✈', title: 'Active Certified Pilot on Team', desc: 'We understand aviation because we live it — our team includes an active certified pilot.' },
    { icon: '✅', title: 'Aviation-Safe Products', desc: 'Every product we use is tested and approved for aircraft surfaces.' },
    { icon: '♻️', title: 'Eco-Friendly Dry Wash', desc: 'Waterless process with zero runoff — compliant with EPA regulations.' },
    { icon: '🔒', title: 'Background Checked Staff', desc: 'All team members are thoroughly vetted for your peace of mind.' },
    { icon: '⭐', title: 'FAA Compliant', desc: 'Our processes meet FAA standards for aircraft care and safety.' }
  ];
}
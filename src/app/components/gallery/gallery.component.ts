import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryItem {
  id: number;
  category: string;
  type: 'before-after' | 'solid';
  title: string;
  subtitle: string;
  icon?: string;
  color?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeIcon?: string;
  afterIcon?: string;
  beforeImage?: string;
  afterImage?: string;
  tall?: boolean;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeFilter = 'all';
  sliderPercent = 50;
  isDragging = false;

  filters = [
    { key: 'all',      label: 'All Work' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'interior', label: 'Interior' }
  ];

  allItems: GalleryItem[] = [
    {
      id: 1, category: 'exterior', type: 'before-after', tall: true,
      title: 'Full Exterior Detail',
      subtitle: 'Aerolux Aviation Detail',
      beforeLabel: 'BEFORE', afterLabel: 'AFTER',
      beforeIcon: '✈', afterIcon: '✈',
      beforeImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1772703750/IMG_2199_dt7nux.jpg',
      afterImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1772703747/IMG_2223_as8ax2.jpg'
    }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeFilter === 'all') return this.allItems;
    return this.allItems.filter(i => i.category === this.activeFilter);
  }

  setFilter(key: string): void {
    this.activeFilter = key;
  }

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.updateSlider(event.clientX, event.currentTarget as HTMLElement);
  }

  startDragTouch(event: TouchEvent): void {
    this.isDragging = true;
    this.updateSlider(event.touches[0].clientX, event.currentTarget as HTMLElement);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging) return;
    const slider = document.querySelector('.ba-slider') as HTMLElement;
    if (slider) this.updateSlider(event.clientX, slider);
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging) return;
    const slider = document.querySelector('.ba-slider') as HTMLElement;
    if (slider) this.updateSlider(event.touches[0].clientX, slider);
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDrag(): void {
    this.isDragging = false;
  }

  updateSlider(clientX: number, el: HTMLElement): void {
    const rect = el.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.min(Math.max(percent, 2), 98);
    this.sliderPercent = percent;
  }
}
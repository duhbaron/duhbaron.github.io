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
  small?: boolean;
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
  sliderPercents: { [id: number]: number } = {};
  activeSliderItem: number | null = null;
  isDragging = false;

  filters = [
    { key: 'all',      label: 'All Work' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'interior', label: 'Interior' }
  ];

  allItems: GalleryItem[] = [
    {
      id: 1, category: 'exterior', type: 'before-after', tall: true,
      title: 'Beechcraft Baron Exterior Detail',
      subtitle: 'Aerolux Aviation Detail',
      beforeLabel: 'BEFORE', afterLabel: 'AFTER',
      beforeIcon: '✈', afterIcon: '✈',
      beforeImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1772703750/IMG_2199_dt7nux.jpg',
      afterImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1772703747/IMG_2223_as8ax2.jpg',
    },
    {
      id: 2, category: 'exterior', type: 'before-after', tall: true,
      title: 'Beechcraft Baron Exterior Detail',
      subtitle: 'Aerolux Aviation Detail',
      beforeLabel: 'BEFORE', afterLabel: 'AFTER',
      beforeIcon: '✈', afterIcon: '✈',
      beforeImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1773105721/IMG_2219_novgeu.jpg',
      afterImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/v1773105721/IMG_2211_zocyos.jpg',
    },
    {
      id: 3, category: 'exterior', type: 'before-after', tall: true,
      title: 'Bell 206-L4 Helicopter Detail',
      subtitle: 'Aerolux Aviation Detail',
      beforeLabel: 'BEFORE', afterLabel: 'AFTER',
      beforeIcon: '✈', afterIcon: '✈',
      beforeImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/q_auto/f_auto/v1775689151/IMG_3383_hfus6y.jpg',
      afterImage: 'https://res.cloudinary.com/dvunwju7p/image/upload/q_auto/f_auto/v1775689158/IMG_3403_hxuydi.jpg',
    }
  ];

  get filteredItems(): GalleryItem[] {
    if (this.activeFilter === 'all') return this.allItems;
    return this.allItems.filter(i => i.category === this.activeFilter);
  }

  setFilter(key: string): void {
    this.activeFilter = key;
  }

  getSliderPercent(id: number): number {
    return this.sliderPercents[id] ?? 50;
  }

  startDrag(event: MouseEvent, itemId: number): void {
    this.isDragging = true;
    this.activeSliderItem = itemId;
    this.updateSlider(event.clientX, event.currentTarget as HTMLElement, itemId);
  }

  startDragTouch(event: TouchEvent, itemId: number): void {
    this.isDragging = true;
    this.activeSliderItem = itemId;
    this.updateSlider(event.touches[0].clientX, event.currentTarget as HTMLElement, itemId);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging || this.activeSliderItem === null) return;
    const sliders = document.querySelectorAll('.ba-slider');
    sliders.forEach(s => {
      const el = s as HTMLElement;
      const id = Number(el.getAttribute('data-id'));
      if (id === this.activeSliderItem) {
        this.updateSlider(event.clientX, el, id);
      }
    });
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging || this.activeSliderItem === null) return;
    const sliders = document.querySelectorAll('.ba-slider');
    sliders.forEach(s => {
      const el = s as HTMLElement;
      const id = Number(el.getAttribute('data-id'));
      if (id === this.activeSliderItem) {
        this.updateSlider(event.touches[0].clientX, el, id);
      }
    });
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  stopDrag(): void {
    this.isDragging = false;
    this.activeSliderItem = null;
  }

  updateSlider(clientX: number, el: HTMLElement, itemId: number): void {
    const rect = el.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.min(Math.max(percent, 2), 98);
    this.sliderPercents[itemId] = percent;
  }
}
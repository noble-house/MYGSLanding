import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pathways',
  template: `
    <section #sectionRef class="py-20 bg-[var(--muted)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Built for your level of care & hospitality
          </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let pathway of pathways; let i = index" class="reveal-up bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] card-hover">
            <div class="h-2" [ngClass]="pathway.color"></div>
            <div class="p-8">
              <div class="w-14 h-14 bg-gradient-to-br from-[var(--brand)] to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="pathway.iconPath"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[var(--ink)] mb-4">
                {{ pathway.title }}
              </h3>
              <p class="text-[var(--ink-70)] leading-relaxed mb-6">
                {{ pathway.description }}
              </p>
              <button class="text-[var(--brand)] font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .card-hover {
      transition: all 0.3s ease;
    }
    .card-hover:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .reveal-up {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s ease;
    }
    .reveal-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `]
})
export class PathwaysComponent implements OnInit, AfterViewInit {
  pathways = [
    {
      iconPath: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
      title: 'Hotels & Hospitality',
      description: 'Guest services, room requests, dining reservations, concierge services, and emergency communications.',
      color: 'bg-gradient-to-r from-blue-500 to-teal-500'
    },
    {
      iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
      title: 'Senior Living Communities',
      description: 'Activities sign-ups, dining reservations, announcements, quick maintenance requests, and family notifications.',
      color: 'bg-gradient-to-r from-teal-500 to-green-500'
    },
    {
      iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
      title: 'Group Homes & Care',
      description: 'Staff-assisted requests, checklists, routing, family notifications, and simplified resident interfaces.',
      color: 'bg-gradient-to-r from-green-500 to-emerald-500'
    },
    {
      iconPath: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
      title: 'Skilled Nursing Facilities',
      description: 'Medical request routing, family updates, staff coordination, and compliance tracking systems.',
      color: 'bg-gradient-to-r from-emerald-500 to-blue-500'
    },
    {
      iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
      title: 'Property Management',
      description: 'Tenant services, maintenance requests, amenity bookings, community announcements, and emergency alerts.',
      color: 'bg-gradient-to-r from-blue-500 to-purple-500'
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupScrollAnimation();
  }

  setupScrollAnimation(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.elementRef.nativeElement) {
      observer.observe(this.elementRef.nativeElement);
    }
  }
}

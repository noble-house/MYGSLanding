import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-outcomes',
  template: `
    <section #sectionRef class="py-20 bg-[var(--paper)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Designed for hospitality & care outcomes
          </h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div *ngFor="let outcome of outcomes; let i = index" class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-14 h-14 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="outcome.iconPath"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--ink)] mb-4">
              {{ outcome.title }}
            </h3>
            <ul class="space-y-3">
              <li *ngFor="let point of outcome.points" class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="text-center reveal-up">
          <a href="#modules" class="inline-flex items-center text-[var(--brand)] font-semibold hover:underline group">
            See everything the platform includes
            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
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
export class OutcomesComponent implements OnInit, AfterViewInit {
  outcomes = [
    {
      iconPath: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Fewer calls, faster resolution',
      points: [
        'Self-serve requests with status updates',
        'Smart routing + SLA timers',
        'Emergency alert systems'
      ]
    },
    {
      iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
      title: 'Happier residents & families',
      points: [
        'Mobile & web; clear expectations',
        'Announcements & notifications',
        'Digital signage integration'
      ]
    },
    {
      iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Operational visibility',
      points: [
        'Workloads, escalations, exports',
        'Dashboards for management',
        'Emergency response tracking'
      ]
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

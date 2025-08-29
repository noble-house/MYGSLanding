import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-emergency-communications',
  template: `
    <section #sectionRef class="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Emergency Communications & Digital Signage
          </h2>
          <p class="text-xl text-[var(--ink-70)] max-w-3xl mx-auto">
            Critical communication systems for safety, weather alerts, and real-time updates across your entire community.
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <!-- Emergency Communications -->
          <div class="reveal-up">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
              <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[var(--ink)] mb-4">
                Emergency Alert System
              </h3>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Instant push notifications to all residents & staff</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Weather alerts & evacuation procedures</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Emergency contact management</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Real-time status updates & response tracking</span>
                </li>
              </ul>
              <div class="bg-red-50 rounded-xl p-4">
                <p class="text-sm text-red-700 font-medium">
                  ⚡ Critical for recent storm events and emergency situations
                </p>
              </div>
            </div>
          </div>

          <!-- Digital Signage -->
          <div class="reveal-up">
            <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
              <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[var(--ink)] mb-4">
                Digital Signage Integration
              </h3>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Centralized content management system</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Emergency alerts on all displays</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Scheduled announcements & updates</span>
                </li>
                <li class="flex items-start">
                  <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span class="text-[var(--ink-70)]">Multi-zone display management</span>
                </li>
              </ul>
              <div class="bg-blue-50 rounded-xl p-4">
                <p class="text-sm text-blue-700 font-medium">
                  📺 Sync with mobile app for comprehensive communication
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-3 gap-8">
          <div *ngFor="let feature of features; let i = index" class="reveal-up bg-white rounded-2xl p-6 shadow-lg border border-[var(--border)]">
            <div class="w-12 h-12 bg-[var(--brand)] rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.iconPath"></path>
              </svg>
            </div>
            <h4 class="text-lg font-bold text-[var(--ink)] mb-2">
              {{ feature.title }}
            </h4>
            <p class="text-[var(--ink-70)] text-sm">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
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
export class EmergencyCommunicationsComponent implements OnInit, AfterViewInit {
  features = [
    {
      iconPath: 'M15 17h5l-5 5v-5zM4 19h6v-2H4v2zM20 9h-6v2h6V9zM4 15h6v-2H4v2z',
      title: 'Multi-Channel Alerts',
      description: 'Push notifications, SMS, email, and digital displays simultaneously.'
    },
    {
      iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Real-Time Updates',
      description: 'Live status tracking and response coordination during emergencies.'
    },
    {
      iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Automated Responses',
      description: 'Pre-configured emergency procedures and contact escalation.'
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

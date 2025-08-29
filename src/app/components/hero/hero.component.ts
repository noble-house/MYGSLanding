import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section #sectionRef class="relative pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-[var(--muted)] to-transparent opacity-60"></div>
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--brand)] rounded-full opacity-5 blur-3xl"></div>
      <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--brand)] rounded-full opacity-8 blur-3xl"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Content -->
          <div class="reveal-up">
            <h1 class="text-4xl lg:text-6xl font-bold text-[var(--ink)] mb-6">
              Your branded services platform—
              <span class="text-[var(--brand)]">built for hospitality & care</span>
            </h1>
            
            <p class="text-xl text-[var(--ink-70)] mb-8 leading-relaxed">
              Digitize requests, housekeeping, maintenance, dining, transportation, announcements & Emergency Group communications —under your community's brand, on mobile and web.
            </p>

            <!-- Proof Points -->
            <div class="flex flex-wrap gap-4 mb-10">
              <div
                *ngFor="let point of proofPoints; let i = index"
                class="flex items-center bg-white border border-[var(--border)] rounded-full px-4 py-2 shadow-sm"
              >
                <svg class="w-4 h-4 text-[var(--brand)] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm font-medium text-[var(--ink)]">{{ point }}</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button (click)="scrollToContactForm()" class="btn-primary flex items-center justify-center group">
                Book a 15-min Demo
                <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              <button class="btn-secondary">
                See the Resident View
              </button>
            </div>
          </div>

          <!-- Visual -->
          <div class="reveal-up lg:reveal-up">
            <div class="relative">
              <!-- Device Mockups -->
              <div class="relative z-10 flex items-end justify-center space-x-4">
                <!-- Phone Mockup -->
                <div class="w-48 h-96 bg-[var(--ink)] rounded-3xl p-2 shadow-2xl transform rotate-6">
                  <div class="w-full h-full bg-white rounded-2xl overflow-hidden">
                    <div class="h-8 bg-[var(--brand)] flex items-center justify-center">
                      <div class="text-xs font-semibold text-white">Your Logo Here</div>
                    </div>
                    <div class="p-4 space-y-3">
                      <div class="h-4 bg-gray-200 rounded"></div>
                      <div class="h-16 bg-[var(--muted)] rounded-xl"></div>
                      <div class="h-16 bg-[var(--muted)] rounded-xl"></div>
                      <div class="h-16 bg-[var(--muted)] rounded-xl"></div>
                    </div>
                  </div>
                </div>

                <!-- Tablet Mockup -->
                <div class="w-64 h-80 bg-[var(--ink)] rounded-2xl p-2 shadow-2xl transform -rotate-3">
                  <div class="w-full h-full bg-white rounded-xl overflow-hidden">
                    <div class="h-10 bg-[var(--brand)] flex items-center justify-between px-4">
                      <div class="text-sm font-semibold text-white">Community Portal</div>
                      <div class="text-xs text-white opacity-75">Your Logo</div>
                    </div>
                    <div class="p-6 space-y-4">
                      <div class="grid grid-cols-2 gap-3">
                        <div class="h-20 bg-[var(--muted)] rounded-lg"></div>
                        <div class="h-20 bg-[var(--muted)] rounded-lg"></div>
                        <div class="h-20 bg-[var(--muted)] rounded-lg"></div>
                        <div class="h-20 bg-[var(--muted)] rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Background Photo Effect -->
              <div class="absolute inset-0 -z-10">
                <img
                  src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hospitality and care community"
                  class="w-full h-full object-cover rounded-3xl opacity-20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .btn-primary {
      @apply bg-[var(--brand)] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300;
    }
    .btn-secondary {
      @apply border-2 border-[var(--brand)] text-[var(--brand)] px-8 py-4 rounded-2xl font-semibold hover:bg-[var(--brand)] hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300;
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
export class HeroComponent implements OnInit, AfterViewInit {
  proofPoints = [
    'Emergency Alerts',
    'Digital Signage',
    'White-Labeled',
    'Launch in 2 weeks'
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

  scrollToContactForm(): void {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      const offset = 80;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Contact form element not found');
    }
  }
}

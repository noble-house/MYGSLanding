import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  template: `
    <section #sectionRef id="go-live-in-two-weeks" class="py-20 bg-[var(--muted)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Go live in two weeks
          </h2>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- Step 1: Brand & Configure -->
          <div class="reveal-up flex items-start mb-12">
            <div class="flex flex-col items-center mr-8 flex-shrink-0">
              <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-4">
                <!-- Settings icon from Lucide -->
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 0 1 0 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 0 1 0-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div class="w-0.5 h-16 bg-[var(--border)]"></div>
            </div>
            <div class="flex-1 pt-4">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
                <div class="flex items-center mb-4">
                  <h3 class="text-xl font-bold text-[var(--ink)]">Brand & Configure</h3>
                  <span class="ml-4 text-sm font-medium text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full">
                    days 1–3
                  </span>
                </div>
                <p class="text-[var(--ink-70)] leading-relaxed">
                  Services, routing, SLAs, roles.
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2: Onboard Staff & Residents -->
          <div class="reveal-up flex items-start mb-12">
            <div class="flex flex-col items-center mr-8 flex-shrink-0">
              <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-4">
                <!-- Users icon from Lucide -->
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <div class="w-0.5 h-16 bg-[var(--border)]"></div>
            </div>
            <div class="flex-1 pt-4">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
                <div class="flex items-center mb-4">
                  <h3 class="text-xl font-bold text-[var(--ink)]">Onboard Staff & Residents</h3>
                  <span class="ml-4 text-sm font-medium text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full">
                    week 1
                  </span>
                </div>
                <p class="text-[var(--ink-70)] leading-relaxed">
                  Invites, QR posters, training kit.
                </p>
              </div>
            </div>
          </div>

          <!-- Step 3: Go Live with Dashboards -->
          <div class="reveal-up flex items-start">
            <div class="flex flex-col items-center mr-8 flex-shrink-0">
              <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-4">
                <!-- BarChart icon from Lucide -->
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
            </div>
            <div class="flex-1 pt-4">
              <div class="bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)]">
                <div class="flex items-center mb-4">
                  <h3 class="text-xl font-bold text-[var(--ink)]">Go Live with Dashboards</h3>
                  <span class="ml-4 text-sm font-medium text-[var(--brand)] bg-[var(--brand)]/10 px-3 py-1 rounded-full">
                    week 2
                  </span>
                </div>
                <p class="text-[var(--ink-70)] leading-relaxed">
                  SLA tracking, exports, feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-16 reveal-up">
          <button (click)="scrollToContactForm()" class="btn-primary">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HowItWorksComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  scrollToContactForm(): void {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      // Add a small offset to account for any fixed headers
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

  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealElements = entry.target.querySelectorAll('.reveal-up');
            revealElements.forEach((el: Element, index: number) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const sectionElement = this.elementRef.nativeElement.querySelector('section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  }
}

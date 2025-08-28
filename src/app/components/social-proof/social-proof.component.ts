import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-social-proof',
  template: `
    <section #sectionRef class="py-16 bg-[var(--muted)] border-y border-[var(--border)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Client Logos -->
        <div class="text-center mb-12">
          <p class="text-sm font-medium text-[var(--ink-50)] mb-8 uppercase tracking-wide">
            Trusted by Senior Living Communities
          </p>
          <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
            <div class="text-lg font-semibold text-[var(--ink)] px-6 py-3 bg-white rounded-lg shadow-sm">
              Community Partners
            </div>
            <div class="text-lg font-semibold text-[var(--ink)] px-6 py-3 bg-white rounded-lg shadow-sm">
              Senior Living Corp
            </div>
            <div class="text-lg font-semibold text-[var(--ink)] px-6 py-3 bg-white rounded-lg shadow-sm">
              Heritage Communities
            </div>
            <div class="text-lg font-semibold text-[var(--ink)] px-6 py-3 bg-white rounded-lg shadow-sm">
              Golden Years Group
            </div>
            <div class="text-lg font-semibold text-[var(--ink)] px-6 py-3 bg-white rounded-lg shadow-sm">
              Comfort Care Communities
            </div>
          </div>
        </div>

        <!-- Testimonial -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div class="flex items-start space-x-4">
              <!-- Quote icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
              <div>
                <blockquote class="text-xl lg:text-2xl font-medium text-[var(--ink)] mb-4">
                  "We cut front-desk calls by 37% in month one."
                </blockquote>
                <cite class="text-[var(--ink-70)] font-medium">
                  — Resident Services Director, Heritage Communities
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SocialProofComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
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
              }, index * 150);
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

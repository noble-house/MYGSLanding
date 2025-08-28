import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-case-study',
  template: `
    <section #sectionRef class="py-20 bg-[var(--muted)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="reveal-up">
            <div class="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7551443/pexels-photo-7551443.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Senior living community staff and residents"
                class="w-full h-96 object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/30 to-transparent"></div>
            </div>
          </div>

          <!-- Content -->
          <div class="reveal-up">
            <h2 class="text-3xl lg:text-4xl font-bold text-[var(--ink)] mb-6">
              37% fewer front-desk calls in month one
            </h2>
            
            <p class="text-lg text-[var(--ink-70)] mb-8 leading-relaxed">
              A multi-community operator reduced lobby calls and escalations by routing requests through branded mobile + web, with clear SLAs and status updates.
            </p>

            <div class="grid grid-cols-3 gap-6 mb-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--brand)] mb-1">450+</div>
                <div class="text-sm text-[var(--ink-70)]">Residents</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--brand)] mb-1">5</div>
                <div class="text-sm text-[var(--ink-70)]">Communities</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[var(--brand)] mb-1">10 days</div>
                <div class="text-sm text-[var(--ink-70)]">To launch</div>
              </div>
            </div>

            <button class="inline-flex items-center text-[var(--brand)] font-semibold hover:underline group">
              Read the full story
              <!-- ArrowRight icon from Lucide -->
              <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CaseStudyComponent implements OnInit, AfterViewInit {
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

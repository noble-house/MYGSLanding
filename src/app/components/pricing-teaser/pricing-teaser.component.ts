import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pricing-teaser',
  template: `
    <section #sectionRef id="modular-plans-for-single-sites-or-groups" class="py-20 bg-[var(--paper)]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="reveal-up">
          <h2 class="text-3xl lg:text-4xl font-bold text-[var(--ink)] mb-6">
            Modular plans for single sites or groups
          </h2>
          
          <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            <div *ngFor="let feature of features" class="flex items-center justify-start">
              <svg class="w-5 h-5 text-[var(--brand)] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-[var(--ink-70)]">{{ feature }}</span>
            </div>
          </div>

          <a href="#contact-form" class="btn-primary inline-block">
            Get Pricing
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PricingTeaserComponent implements OnInit, AfterViewInit {
  features = [
    'Start small; scale per community',
    'Training included',
    'White-label customization',
    'Dedicated support team'
  ];

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

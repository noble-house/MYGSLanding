import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cta-section',
  template: `
    <section #sectionRef class="py-20 bg-gradient-to-br from-[var(--brand)] to-teal-700 relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-white mb-8">
            Ready to reduce call volume and raise CSAT?
          </h2>
          
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <button (click)="scrollToContactForm()" class="bg-white text-[var(--brand)] px-8 py-4 rounded-2xl font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
              Book a 15-min Demo
              <!-- ArrowRight icon from Lucide -->
              <svg class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
            
            <button class="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[var(--brand)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              See the Resident View
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CtaSectionComponent implements OnInit, AfterViewInit {
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
              }, index * 100);
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

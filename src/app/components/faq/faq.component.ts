import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `
    <section #sectionRef class="py-20 bg-[var(--muted)]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-4xl font-bold text-[var(--ink)] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div class="space-y-4">
          <div 
            *ngFor="let faq of faqs; let index = index"
            class="reveal-up bg-white rounded-2xl shadow-lg border border-[var(--border)] overflow-hidden"
          >
            <button
              class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[var(--muted)]/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-inset"
              (click)="toggleFAQ(index)"
              [attr.aria-expanded]="openIndex === index"
            >
              <h3 class="text-lg font-semibold text-[var(--ink)] pr-4">
                {{ faq.question }}
              </h3>
              <div *ngIf="openIndex === index" class="w-5 h-5 text-[var(--brand)] flex-shrink-0">
                <!-- Minus icon from Lucide -->
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>
              </div>
              <div *ngIf="openIndex !== index" class="w-5 h-5 text-[var(--brand)] flex-shrink-0">
                <!-- Plus icon from Lucide -->
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
            </button>
            
            <div 
              *ngIf="openIndex === index"
              class="px-8 pb-6 text-[var(--ink-70)] leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FaqComponent implements OnInit, AfterViewInit {
  openIndex: number | null = null;
  
  faqs = [
    {
      question: 'Is this white-labeled?',
      answer: 'Yes, your logo, colors, and URL are used throughout the platform.'
    },
    {
      question: 'Do residents need smartphones?',
      answer: 'No, there\'s a web portal and staff-assisted intake for residents without smartphones.'
    },
    {
      question: 'Do you integrate with our systems?',
      answer: 'Integration-ready; we\'ll discuss your existing technology stack during the demo.'
    },
    {
      question: 'How fast can we launch?',
      answer: 'Typical go-live in ~2 weeks with our comprehensive onboarding process.'
    },
    {
      question: 'What about accessibility?',
      answer: 'WCAG 2.1 AA compliant with large type, high contrast, and voiceover friendly design.'
    },
    {
      question: 'Data & privacy?',
      answer: 'Resident-friendly data minimization, comprehensive audit logs, and permission-based access controls.'
    }
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  toggleFAQ(index: number): void {
    this.openIndex = this.openIndex === index ? null : index;
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

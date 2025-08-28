import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead-form',
  template: `
    <section 
      #sectionRef 
      id="contact-form"
      class="py-20 relative overflow-hidden"
      [style.backgroundImage]="'linear-gradient(rgba(14, 17, 19, 0.8), rgba(14, 17, 19, 0.8)), url(https://images.pexels.com/photos/7551524/pexels-photo-7551524.jpeg?auto=compress&cs=tinysrgb&w=1200)'"
      style="background-size: cover; background-position: center;"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="reveal-up">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's get you a personalized demo.
            </h2>
            <p class="text-xl text-white/90 mb-8">
              We reply within 1 business day. No spam.
            </p>
          </div>

          <!-- Form -->
          <div class="reveal-up">
            <div *ngIf="!isSubmitted" [formGroup]="form" (ngSubmit)="onSubmit()" class="bg-white rounded-2xl p-8 shadow-2xl">
              <div class="space-y-6">
                <div>
                  <label for="fullName" class="block text-sm font-medium text-[var(--ink)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    formControlName="fullName"
                    class="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label for="workEmail" class="block text-sm font-medium text-[var(--ink)] mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    formControlName="workEmail"
                    class="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-colors"
                    placeholder="your.email@community.com"
                  />
                </div>

                <div>
                  <label for="community" class="block text-sm font-medium text-[var(--ink)] mb-2">
                    Community / Organization *
                  </label>
                  <input
                    type="text"
                    id="community"
                    formControlName="community"
                    class="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-colors"
                    placeholder="Community name"
                  />
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-[var(--ink)] mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    formControlName="phone"
                    class="w-full px-4 py-3 border border-[var(--border)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <button
                  type="submit"
                  [disabled]="form.invalid"
                  class="w-full btn-primary flex items-center justify-center group"
                >
                  <!-- Send icon from Lucide -->
                  <svg class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send Message
                </button>

                <p class="text-xs text-[var(--ink-50)] text-center">
                  By submitting, you agree to our
                  <a href="#" class="text-[var(--brand)] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <div *ngIf="isSubmitted" class="bg-white rounded-2xl p-8 shadow-2xl text-center">
              <!-- CheckCircle icon from Lucide -->
              <svg class="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <h3 class="text-2xl font-bold text-[var(--ink)] mb-4">
                Thanks for your interest!
              </h3>
              <p class="text-[var(--ink-70)] mb-8">
                We'll be in touch within 1 business day to schedule your personalized demo.
              </p>

              <!-- Calendly Embed Placeholder -->
              <div class="bg-[var(--muted)] rounded-xl p-8 mb-6">
                <h4 class="font-semibold text-[var(--ink)] mb-2">
                  Book your demo now:
                </h4>
                <div class="h-64 bg-white/50 rounded-lg flex items-center justify-center border-2 border-dashed border-[var(--border)]">
                  <span class="text-[var(--ink-50)]">
                    [Calendly embed would appear here]
                  </span>
                </div>
              </div>

              <button class="btn-secondary">
                Prefer WhatsApp?
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class LeadFormComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      workEmail: ['', [Validators.required, Validators.email]],
      community: ['', Validators.required],
      phone: ['']
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Simulate form submission
      this.isSubmitted = true;
      console.log('Form submitted:', this.form.value);
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

import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trust',
  template: `
    <section #sectionRef id="security-accessibility-you-can-trust" class="py-20 bg-[var(--paper)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Security & accessibility you can trust
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Access Control -->
          <div class="reveal-up text-center">
            <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <!-- Lock icon from Lucide -->
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Access control</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              SSO/SAML optional, role-based permissions, audit logs
            </p>
          </div>

          <!-- Privacy by Design -->
          <div class="reveal-up text-center">
            <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <!-- Shield icon from Lucide -->
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Privacy by design</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Data minimization; no PHI workflows
            </p>
          </div>

          <!-- Reliability -->
          <div class="reveal-up text-center">
            <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <!-- Server icon from Lucide -->
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Reliability</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Modern cloud hosting; backups; monitoring
            </p>
          </div>

          <!-- Accessibility -->
          <div class="reveal-up text-center">
            <div class="w-16 h-16 bg-[var(--brand)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <!-- Eye icon from Lucide -->
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Accessibility</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              WCAG 2.1 AA compliant UI
            </p>
          </div>
        </div>

        <!-- Compliance Badges -->
        <div class="mt-16 text-center reveal-up">
          <div class="flex flex-wrap justify-center gap-8 opacity-60">
            <div class="bg-white border border-[var(--border)] rounded-xl px-6 py-3 shadow-sm">
              <span class="text-sm font-semibold text-[var(--ink)]">SOC 2</span>
            </div>
            <div class="bg-white border border-[var(--border)] rounded-xl px-6 py-3 shadow-sm">
              <span class="text-sm font-semibold text-[var(--ink)]">WCAG 2.1 AA</span>
            </div>
            <div class="bg-white border border-[var(--border)] rounded-xl px-6 py-3 shadow-sm">
              <span class="text-sm font-semibold text-[var(--ink)]">GDPR Ready</span>
            </div>
            <div class="bg-white border border-[var(--border)] rounded-xl px-6 py-3 shadow-sm">
              <span class="text-sm font-semibold text-[var(--ink)]">Cloud Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class TrustComponent implements OnInit, AfterViewInit {
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

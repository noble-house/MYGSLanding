import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pathways',
  template: `
    <section #sectionRef id="built-for-your-level-of-care" class="py-20 bg-[var(--muted)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Built for your level of care
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- Independent Living -->
          <div class="reveal-up bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] card-hover">
            <div class="h-2 bg-gradient-to-r from-blue-500 to-teal-500"></div>
            <div class="p-8">
              <div class="w-14 h-14 bg-gradient-to-br from-[var(--brand)] to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <!-- Home icon from Lucide -->
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Independent Living</h3>
              <p class="text-[var(--ink-70)] leading-relaxed mb-6">
                Activities sign-ups, dining reservations, announcements, quick maintenance requests.
              </p>
              <button class="text-[var(--brand)] font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>

          <!-- Assisted Living -->
          <div class="reveal-up bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] card-hover">
            <div class="h-2 bg-gradient-to-r from-teal-500 to-green-500"></div>
            <div class="p-8">
              <div class="w-14 h-14 bg-gradient-to-br from-[var(--brand)] to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <!-- Users icon from Lucide -->
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Assisted Living</h3>
              <p class="text-[var(--ink-70)] leading-relaxed mb-6">
                Staff-assisted requests, checklists, routing, family notifications (no PHI).
              </p>
              <button class="text-[var(--brand)] font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>

          <!-- Memory Care -->
          <div class="reveal-up bg-white rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] card-hover">
            <div class="h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <div class="p-8">
              <div class="w-14 h-14 bg-gradient-to-br from-[var(--brand)] to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <!-- Shield icon from Lucide -->
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Memory Care</h3>
              <p class="text-[var(--ink-70)] leading-relaxed mb-6">
                Simplified resident interface, routine scheduling, family updates.
              </p>
              <button class="text-[var(--brand)] font-semibold hover:underline">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class PathwaysComponent implements OnInit, AfterViewInit {
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

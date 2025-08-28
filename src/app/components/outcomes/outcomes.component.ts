import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-outcomes',
  template: `
    <section #sectionRef class="py-20 bg-[var(--paper)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            Designed for senior-living outcomes
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <!-- Fewer calls, faster resolution -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-14 h-14 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-6">
              <!-- Phone icon from Lucide -->
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Fewer calls, faster resolution</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Self-serve requests with status updates</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Smart routing + SLA timers</span>
              </li>
            </ul>
          </div>

          <!-- Happier residents & families -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-14 h-14 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-6">
              <!-- Heart icon from Lucide -->
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Happier residents & families</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Mobile & web; clear expectations</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Announcements & notifications</span>
              </li>
            </ul>
          </div>

          <!-- Operational visibility -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-14 h-14 bg-[var(--brand)] rounded-2xl flex items-center justify-center mb-6">
              <!-- BarChart3 icon from Lucide -->
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[var(--ink)] mb-4">Operational visibility</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Workloads, escalations, exports</span>
              </li>
              <li class="flex items-start">
                <div class="w-2 h-2 bg-[var(--brand)] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span class="text-[var(--ink-70)] leading-relaxed">Dashboards for ED & corporate</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-center reveal-up">
          <a
            href="#modules"
            class="inline-flex items-center text-[var(--brand)] font-semibold hover:underline group"
          >
            See everything the platform includes
            <svg class="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class OutcomesComponent implements OnInit, AfterViewInit {
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

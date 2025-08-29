import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-modules',
  template: `
    <section #sectionRef id="modules" class="py-20 bg-[var(--paper)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 reveal-up">
          <h2 class="text-3xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
            What's inside (modules you can brand)
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Maintenance & Housekeeping -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Wrench icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Maintenance & Housekeeping</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Ticketing, routing, SLAs, statuses.
            </p>
          </div>

          <!-- Dining & Reservations -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- UtensilsCrossed icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v13.25m-4.5-13.25v13.25m9-13.25v13.25M12 8.25l-4.5-4.5m4.5 4.5 4.5-4.5m-4.5 4.5 4.5 4.5" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Dining & Reservations</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Menus, table bookings, dietary notes (non-PHI).
            </p>
          </div>

          <!-- Wellness & Activities -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Calendar icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Wellness & Activities</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Class listings, capacity, waitlists, check-ins.
            </p>
          </div>

          <!-- Transportation -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Car icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Transportation</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Trip requests, pickup windows, route status.
            </p>
          </div>

          <!-- Announcements & Messaging -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Megaphone icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-.636.244-1.248.688-1.712.444-.464.996-.696 1.592-.696.596 0 1.148.232 1.592.696.444.464.688 1.076.688 1.712 0 1.527-.2 3.012-.59 4.59m-3.102.069a18.03 18.03 0 0 1-.59-4.59c0-.636.244-1.248.688-1.712.444-.464.996-.696 1.592-.696.596 0 1.148.232 1.592.696.444.464.688 1.076.688 1.712 0 1.527-.2 3.012-.59 4.59" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Announcements & Messaging</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Targeted posts, push/email, read receipts.
            </p>
          </div>

          <!-- Resident & Family Access -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- UserCheck icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Resident & Family Access</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Web + mobile, role-based permissions.
            </p>
          </div>

          <!-- Emergency Communications -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Bell icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.85 3.85a2.25 2.25 0 013.182 0c.23.23.345.55.345.869V19.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V4.73c0-.319.115-.64.345-.869a2.25 2.25 0 013.182 0M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Emergency Communications</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Alert systems, weather notifications, safety protocols.
            </p>
          </div>

          <!-- Digital Signage -->
          <div class="reveal-up bg-white rounded-2xl p-8 shadow-lg border border-[var(--border)] card-hover">
            <div class="w-full h-32 bg-gradient-to-br from-[var(--muted)] to-gray-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
              <!-- Monitor icon from Lucide -->
              <svg class="w-8 h-8 text-[var(--brand)] opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div class="absolute top-2 right-2 text-xs bg-[var(--brand)] text-white px-2 py-1 rounded">
                Your Brand
              </div>
            </div>
            <h3 class="text-lg font-bold text-[var(--ink)] mb-3">Digital Signage</h3>
            <p class="text-[var(--ink-70)] text-sm leading-relaxed">
              Centralized display management, content scheduling.
            </p>
          </div>
        </div>

        <div class="text-center reveal-up">
          <p class="text-[var(--ink-70)] font-medium">
            All modules ship white-labeled for your communities.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ModulesComponent implements OnInit, AfterViewInit {
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

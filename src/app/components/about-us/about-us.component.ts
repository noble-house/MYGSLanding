import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `
    <section #sectionRef id="about-us" class="py-20 bg-[var(--muted)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="reveal-up">
            <h2 class="text-4xl lg:text-5xl font-bold text-[var(--ink)] mb-4">
              ABOUT US
            </h2>
            
            <div class="text-xl lg:text-2xl font-bold text-[var(--brand)] mb-6">
              <div>Delivering Modern Hospitality</div>
              <div>Through Branded Digital Experiences</div>
            </div>
            
            <p class="text-lg text-[var(--ink-70)] mb-8 leading-relaxed">
              MyGuestServices is your branded digital concierge offering guests one-touch access to dining, housekeeping, wellness bookings, and more. Built for hospitality, senior living, and modern guest-centric businesses.
            </p>
            
            <a href="#contact-form" class="btn-primary inline-block">
              Get In Touch
            </a>
          </div>

          <!-- Right Column - Video Player -->
          <div class="reveal-up">
            <div class="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div class="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/v3omaVZn9D8"
                  title="MyGuestServices - About Us"
                  class="w-full h-full"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutUsComponent implements OnInit, AfterViewInit {
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

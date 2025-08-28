import { Component, OnInit, HostListener } from '@angular/core';

interface NavLink {
  name: string;
  target: string;
}

@Component({
  selector: 'app-navigation',
  template: `
    <nav [class]="navClasses">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <div class="flex items-center">
              <span class="text-2xl font-bold text-[#4FD1C7] font-serif italic">My</span>
              <span class="text-2xl font-bold text-[#25646A] uppercase tracking-wide ml-1">Guest Service</span>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-8">
            <a
              *ngFor="let link of navLinks"
              [href]="'#' + link.target"
              class="text-[var(--ink-70)] hover:text-[var(--brand)] font-medium transition-colors duration-200"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden lg:flex items-center space-x-4">
            <button class="btn-primary">
              Login
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="lg:hidden">
            <button
              (click)="toggleMobileMenu()"
              class="text-[var(--ink)] hover:text-[var(--brand)] p-2"
              aria-label="Toggle mobile menu"
            >
              <svg *ngIf="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg *ngIf="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div *ngIf="isMobileMenuOpen" class="lg:hidden bg-white border-t border-[var(--border)]">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              *ngFor="let link of navLinks"
              [href]="'#' + link.target"
              class="block px-3 py-2 text-[var(--ink-70)] hover:text-[var(--brand)] font-medium"
              (click)="closeMobileMenu()"
            >
              {{ link.name }}
            </a>
            <div class="pt-4 space-y-2">
              <button class="w-full btn-primary">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks: NavLink[] = [
    { name: 'About Us', target: 'about-us' },
    { name: 'Features', target: 'modules' },
    { name: 'How It Works', target: 'go-live-in-two-weeks' },
    { name: 'For Communities', target: 'built-for-your-level-of-care' },
    { name: 'Security', target: 'security-accessibility-you-can-trust' },
    { name: 'Pricing', target: 'modular-plans-for-single-sites-or-groups' },
    { name: 'Contact', target: 'contact-form' }
  ];

  get navClasses(): string {
    return `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      this.isScrolled 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-[var(--border)]' 
        : 'bg-transparent'
    }`;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit(): void {
    // Initial scroll check
    this.onWindowScroll();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}

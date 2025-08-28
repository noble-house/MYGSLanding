import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-[var(--paper)] overflow-x-hidden">
      <app-navigation></app-navigation>
      <main>
        <app-hero></app-hero>
        <app-social-proof></app-social-proof>
        <app-about-us></app-about-us>
        <app-outcomes></app-outcomes>
        <app-pathways></app-pathways>
        <app-modules></app-modules>
        <app-how-it-works></app-how-it-works>
        <app-trust></app-trust>
        <app-case-study></app-case-study>
        <app-pricing-teaser></app-pricing-teaser>
        <app-faq></app-faq>
        <app-cta-section></app-cta-section>
        <app-lead-form></app-lead-form>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'MyGuestServices';
}

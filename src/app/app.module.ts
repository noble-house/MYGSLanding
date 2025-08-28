import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialProofComponent } from './components/social-proof/social-proof.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { PathwaysComponent } from './components/pathways/pathways.component';
import { ModulesComponent } from './components/modules/modules.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { TrustComponent } from './components/trust/trust.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { PricingTeaserComponent } from './components/pricing-teaser/pricing-teaser.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { LeadFormComponent } from './components/lead-form/lead-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    SocialProofComponent,
    AboutUsComponent,
    OutcomesComponent,
    PathwaysComponent,
    ModulesComponent,
    HowItWorksComponent,
    TrustComponent,
    CaseStudyComponent,
    PricingTeaserComponent,
    FaqComponent,
    CtaSectionComponent,
    LeadFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

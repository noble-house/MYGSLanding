import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-[var(--ink)] text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <span class="text-2xl font-bold text-[#4FD1C7] font-serif italic">My</span>
              <span class="text-2xl font-bold text-[#25646A] uppercase tracking-wide ml-1">Guest Service</span>
            </div>
            <p class="text-gray-400">
              White-labeled resident services platform for senior living communities.
            </p>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#modules" class="hover:text-white">Features</a></li>
              <li><a href="#go-live-in-two-weeks" class="hover:text-white">How It Works</a></li>
              <li><a href="#security-accessibility-you-can-trust" class="hover:text-white">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#about-us" class="hover:text-white">About Us</a></li>
              <li><a href="#contact-form" class="hover:text-white">Contact</a></li>
              <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-2 text-gray-400">
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">Documentation</a></li>
              <li><a href="#" class="hover:text-white">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MyGuestService. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {}

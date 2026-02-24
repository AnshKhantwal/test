import { Component, signal, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ConsultationForm {
  name: string;
  phone: string;
  email: string;
  symptoms: string;
  duration: string;
}

@Component({
  selector: 'app-typhoid',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './typhoid.component.html',
  styleUrl: './typhoid.component.scss',
})
export class TyphoidComponent {
  protected readonly title = signal('TB Caused by Typhoid: What You Need to Know');
  
  formData: ConsultationForm = {
    name: '',
    phone: '',
    email: '',
    symptoms: '',
    duration: ''
  };

  isSubmitted = signal(false);
  isLoading = signal(false);
  isScrolled = signal(false);

  symptoms = [
    { icon: '🤒', title: 'Persistent Fever', desc: 'Fever that continues or returns after typhoid recovery.' },
    { icon: '😮‍💨', title: 'Chronic Cough', desc: 'Cough developing weeks after typhoid, lasting more than 2-3 weeks.' },
    { icon: '💤', title: 'Unusual Fatigue', desc: 'Weakness or tiredness that is new or worsening post-typhoid.' },
    { icon: '🍽️', title: 'Loss of Appetite', desc: 'Reduced desire to eat and weight loss after typhoid.' },
    { icon: '🌙', title: 'Night Sweats', desc: 'Sweating at night that starts after typhoid recovery.' },
    { icon: '💔', title: 'Chest Pain', desc: 'Pain or discomfort in the chest, or difficulty breathing, after typhoid.' }
  ];

  facts = [
    'Typhoid can weaken your immune system, increasing TB risk.',
    'TB may develop weeks or months after typhoid recovery.',
    'Symptoms of TB after typhoid can be subtle or atypical.',
    'Early medical attention improves recovery chances.',
    'Both TB and typhoid are treatable with proper care.'
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  onSubmit() {
    this.isLoading.set(true);
    
    // Simulate form submission
    setTimeout(() => {
      this.isLoading.set(false);
      this.isSubmitted.set(true);
      
      // Reset form
      this.formData = {
        name: '',
        phone: '',
        email: '',
        symptoms: '',
        duration: ''
      };
    }, 1500);
  }

  redirectToTbClinic() {
    window.open('https://tbclinic.in', '_blank');
  }

  scrollToForm() {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}


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
  selector: 'app-blood-from-mouth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blood-from-mouth.component.html',
  styleUrl: './blood-from-mouth.component.scss',
})
export class bloodFromMouthComponent {
  protected readonly title = signal('Blood from Mouth Can Be TB');
  
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
    { icon: '🩸', title: 'Blood in Cough', desc: 'Coughing up blood or blood-streaked sputum (hemoptysis)' },
    { icon: '🤒', title: 'Persistent Fever', desc: 'Low-grade fever that persists for weeks' },
    { icon: '😓', title: 'Night Sweats', desc: 'Excessive sweating during sleep' },
    { icon: '⚖️', title: 'Weight Loss', desc: 'Unexplained weight loss over time' },
    { icon: '😰', title: 'Chronic Cough', desc: 'Cough lasting more than 3 weeks' },
    { icon: '💨', title: 'Breathing Difficulty', desc: 'Shortness of breath or chest pain' }
  ];

  facts = [
    'TB is curable with proper treatment',
    'Early diagnosis leads to better outcomes',
    'TB treatment typically takes 6-9 months',
    'TB can affect anyone regardless of age'
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


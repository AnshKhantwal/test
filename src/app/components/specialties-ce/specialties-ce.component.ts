import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Speciality {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-specialties-ce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties-ce.component.html',
  styleUrls: ['./specialties-ce.component.scss']
})
export class SpecialtiesCeComponent {
  specialties: Speciality[] = [
    { name: 'ABDOMINAL TB', icon: 'assets/icons/lungs.webp' },
    { name: 'BONE TB', icon: 'assets/icons/lymph.webp' },
    { name: 'BRAIN TB', icon: 'assets/icons/stomach.webp' },
    { name: 'GENITO-URINARY TB', icon: 'assets/icons/spine.webp' },
    { name: 'LYMPH NODE TB', icon: 'assets/icons/brain.webp' },
    { name: 'PLEURAL TB', icon: 'assets/icons/kidney.webp' },
    { name: 'PULMONARY TB', icon: 'assets/icons/lungs-fluid.webp' },
    { name: 'SKIN TB', icon: 'assets/icons/skin.webp' },
  ];

  expertSearchInfo = {
  title: 'Need Guidance or Treatment Support?',
  description:
    'Speak directly with our TB experts for diagnosis, treatment planning or second opinion. Compassionate care, every step of your recovery.',
  cta: 'Book Consultation'
};
}

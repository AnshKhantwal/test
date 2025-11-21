import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Treatment {
  title: string;
  details: string; // This is the content you requested
  icon: string;    
}

interface ExpertInfo {
  title: string;
  description: string;
  cta: string;
}

@Component({
  selector: 'app-tb-treatments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tb-treatments.component.html',
  styleUrls: ['./tb-treatments.component.scss'],
})
export class TbTreatmentsComponent {
  
  private iconBasePath = 'assets/icons/'; 

  treatments: Treatment[] = [
  {
    title: 'Pulmonary Tuberculosis',
    details: 'The most common form of TB, affecting the lungs. Early diagnosis and the right treatment plan ensure complete recovery. We focus on fast symptom relief and restoring lung strength.',
    icon: this.iconBasePath + 'lungs.webp',
  },
  {
    title: 'TB of Lymph Nodes',
    details: 'Seen as swelling in the neck or other parts of the body. This condition is fully treatable with medication when monitored with expert care.',
    icon: this.iconBasePath + 'lymph.webp',
  },
  {
    title: 'Abdominal Tuberculosis',
    details: 'Affects the digestive system and abdomen. With precise diagnosis and holistic nutritional support, patients regain digestive health safely.',
    icon: this.iconBasePath + 'stomach.webp',
  },
  {
    title: 'Bone & Spine TB',
    details: 'May cause back pain or difficulty walking. We ensure treatment that protects bone strength, mobility, and long-term spinal health.',
    icon: this.iconBasePath + 'spine.webp',
  },
  {
    title: 'TB Meningitis (Brain TB)',
    details: 'A rare but serious form of TB affecting the brain covering. We provide rapid-response treatment to protect neurological function and recovery.',
    icon: this.iconBasePath + 'brain.webp',
  },
  {
    title: 'Genito-Urinary TB',
    details: 'Affects kidneys, urinary system or reproductive organs. Because symptoms are often subtle, accurate diagnosis and consistent treatment are key.',
    icon: this.iconBasePath + 'kidney.webp',
  },
  {
    title: 'Pleural Effusion (TB Fluid in Lungs)',
    details: 'Build-up of fluid around the lungs causing breathlessness. Treatment combines medication with clinical management to restore full comfort while breathing.',
    icon: this.iconBasePath + 'lungs-fluid.webp',
  },
  {
    title: 'Skin TB',
    details: 'A rare form causing slow-healing skin patches. We combine medical therapy with careful skin recovery support.',
    icon: this.iconBasePath + 'skin.webp',
  },
];

expertSearchInfo: ExpertInfo = {
  title: 'Need Guidance or Treatment Support?',
  description:
    'Our TB experts are here to listen, guide, and support you at every step. Book a consultation or request a call-back.',
  cta: 'Book Consultation'
};
}
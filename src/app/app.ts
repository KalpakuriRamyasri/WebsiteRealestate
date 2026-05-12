import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WebsiteRealestate');
  
showPopup: boolean = false;
  formData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  };

  formStatus: string = '';

 submitForm() {
  debugger
  this.showPopup = true;
  const phoneNumber = "+971549919259";
  const message = `Hi:
 Name: ${this.formData.name}
Email: ${this.formData.email}
Phone: ${this.formData.phone}
City: ${this.formData.city}
Requirement: ${this.formData.message}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  setTimeout(() => {
    window.open(whatsappURL, '_blank');
  }, 1000);

  this.formData = {
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  };
  this.showPopup = false;
}
openVideo(url: string) {
  window.open(url, '_blank');
}
}

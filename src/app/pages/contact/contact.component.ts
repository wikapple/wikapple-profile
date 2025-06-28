import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactService } from '../../_services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CanComponentDeactivate } from '../../_guards/pending-changes.guard';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements CanComponentDeactivate {
  contactForm: FormGroup;
  private readonly contactService: ContactService = inject(ContactService);
  private readonly toastr = inject(ToastrService);
  submittingForm = false;
  submittedSuccessfully = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(200)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(254)],
      ],
      message: ['', [Validators.required, Validators.maxLength(3000)]],
    });
  }

  canDeactivate(): boolean {
    return (
      !this.submittingForm ||
      confirm('The form is submitting. Are you sure you want to leave?')
    );
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any): void {
    if (this.submittingForm) {
      $event.returnValue = true;
    }
  }

  onSubmit() {
    this.submittingForm = true;
    if (this.contactForm.valid) {
      const message = this.contactForm.value;

      this.contactService.submitContactForm(message).subscribe({
        next: (_) => {
          this.contactForm.reset();
          this.submittingForm = false;
          this.submittedSuccessfully = true;
        },
        error: (error) => {
          this.submittingForm = false;
          this.toastr.error(
            'Oops! An error occurred while sending the contact request.'
          );
        },
      });
    }
  }
}

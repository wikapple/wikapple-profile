import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private http = inject(HttpClient);

  baseUrl : string = environment['contact-service-base-url'];

  emailContactRoute: string = "/EmailContact"

  submitContactForm(model: any) {
    return this.http.post<any>(this.baseUrl + this.emailContactRoute, model);
  }
}

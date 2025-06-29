import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../../shared/image-dialog/image-dialog.component';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule, 
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule, 
    RouterModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

    openImage(imgUrl: string): void {
    this.dialog.open(ImageDialogComponent, {
      data: { imgUrl },
      panelClass: 'custom-dialog',
      maxWidth: '90vw',
    });
  }
}

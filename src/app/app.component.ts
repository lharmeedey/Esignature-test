import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'esignature';
  // selectedFile: any = '';
  selectedFilePath: string = '';
  // selectedFileB64: string = '';

  // isFileImage: boolean = false;
  // isFileDocument: boolean = false;
  selectedFile: File | null = null; // To store the selected file
  selectedFileB64: string = ''; // To store the Base64 string of the file
  isFileImage: boolean = false; // To track if the file is an image
  isFileDocument: boolean = false; // To track if the file is a document

  constructor(private pdfService: NgxExtendedPdfViewerService) {}

  // onFileSelected(event: any): void {
  //   this.selectedFile = event.target.files[0] ?? null;
  //   if (this.selectedFile) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]);

  //     reader.onload = (event) => {
  //       let path = event.target == null ? '' : event.target.result;
  //       this.selectedFilePath = path as string;
  //       this.selectedFileB64 = this.selectedFilePath.split(',')[1];
  //       if (this.selectedFile.includes('images')) {
  //         this.isFileImage = true;
  //         this.isFileDocument = false;
  //       } else {
  //         this.isFileImage = false;
  //         this.isFileDocument = true;
  //       }
  //     };
  //   }
  // }

  // onFileSelected(event: any): void {
  //   console.log('File input event:', event);

  //   const file = event.target.files[0]; // Get the selected file
  //   if (!file) {
  //     alert('No file selected. Please choose a file.');
  //     return;
  //   }

  //   console.log('Selected file:', file); // Log file details
  //   console.log('File type:', file.type);

  //   // Check if the file is a PDF
  //   if (file.type === 'application/pdf') {
  //     this.handlePdfPreview(file); // Pass the file to the handler
  //   } else {
  //     alert('Please upload a valid PDF file.'); // Show an alert for invalid file type
  //     this.resetPreview(); // Reset the preview
  //   }
  // }

  // private handlePdfPreview(file: File): void {
  //   const reader = new FileReader();

  //   reader.onload = (event) => {
  //     const base64Data = event.target?.result as string;

  //     // Ensure the Base64 string has the correct format
  //     if (!base64Data.startsWith('data:application/pdf;base64,')) {
  //       console.error('Invalid Base64 format:', base64Data);
  //       alert('Failed to process the PDF file. Invalid format.');
  //       return;
  //     }

  //     // Set the Base64 data for the PDF viewer
  //     this.selectedFileB64 = base64Data;
  //     console.log('Valid Base64 string:', this.selectedFileB64);

  //     // Update states to display the PDF in the viewer
  //     this.isFileImage = false;
  //     this.isFileDocument = true;
  //   };

  //   reader.onerror = (error) => {
  //     console.error('Error reading PDF file:', error);
  //     alert('Failed to read PDF file. Please try again.');
  //   };

  //   // Read the file as a Base64 data URL
  //   reader.readAsDataURL(file);
  // }

  // private resetPreview(): void {
  //   console.log('Resetting preview');
  //   this.selectedFile = null;
  //   this.selectedFileB64 = '';
  //   this.isFileImage = false;
  //   this.isFileDocument = false;
  // }

  // ngOnInit(): void {
  //   // Test with a small Base64-encoded PDF
  //   this.selectedFileB64 =
  //     'data:application/pdf;base64,JVBERi0xLjQKJ...(shortened Base64 string)...';
  //   this.isFileDocument = true;
  // }
}


import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/models/IContacts';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css'],
})
export class ContactManagerComponent implements OnInit {
  public loading: boolean = false;
  public contacts: IContact[] = [];
  public errorMessage: string | null = null;
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.loading = true;
    this.contactService.getAllContacts().subscribe(
      (data: IContact[]) => {
        this.contacts = data;
        this.loading = false;
      },
      (error: string | null) => {
        this.errorMessage = error;
        this.loading = false;
      }
    );
  }
}

//   ngOnInit(): void {
//     this.loading = true;
//     this.contactService.getContact().subscribe(
//       next,
//       (data: IContact[]) => {
//         this.contacts = data;
//         this.loading = false;
//       },
//       error,
//       (error: string | null) => {
//         this.errorMessage = error;
//         this.loading = false;
//       }
//     );
//   }
// }
// function next(
//   next: any,
//   arg1: (data: IContact[]) => void,
//   error: (msg: string) => never,
//   arg3: (error: string | null) => void
// ) {
//   throw new Error('Function not implemented.');
// }

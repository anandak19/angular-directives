import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  idStyleChanged = true;
  nameStyleChanged = true;
  emailStyleChanged = true;
  placeStyleChanged = true;

  people: any[] = [
    { id: 1, name: 'Mobin Thomas', email: 'mobin11@gmail.com', place: 'Alappuzha' },
    { id: 2, name: 'Keerthi S Nair', email: 'keerthi457@gmail.com', place: 'Ernakulam' },
    { id: 3, name: 'Hari Govind', email: 'hari12@gmail.com', place: 'Kollam' },
    { id: 4, name: 'Anjana Suresh', email: 'anjana412@gmail.com', place: 'Kannur' }
  ];


  changeIdStyle(){
    if (this.idStyleChanged) {
      this.idStyleChanged = false
    } else {
      this.idStyleChanged = true
    }
  }

  changeNameStyle(){
    if (this.nameStyleChanged) {
      this.nameStyleChanged = false
    } else {
      this.nameStyleChanged = true
    }
  }

  changeEmailStyle(){
    if (this.emailStyleChanged) {
      this.emailStyleChanged = false
    } else {
      this.emailStyleChanged = true
    }
  }

  changePlaceStyle(){
    if (this.placeStyleChanged) {
      this.placeStyleChanged = false
    } else {
      this.placeStyleChanged = true
    }
  }
}

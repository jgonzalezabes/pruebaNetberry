import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-tarea',
  templateUrl: './modal-tarea.component.html',
  styleUrls: ['./modal-tarea.component.css']
})
export class ModalTareaComponent {

  tagsList: string[] = ['Sin comenzar', 'En proceso', 'Finalizado'];

  constructor(
    public dialogRef: MatDialogRef<ModalTareaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

}

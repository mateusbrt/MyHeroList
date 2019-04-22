import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'mhl-dialog-create-hero',
  templateUrl: './dialog-create-hero.component.html',
  styleUrls: ['./dialog-create-hero.component.scss']
})
export class DialogCreateHeroComponent implements OnInit {

  public formGroup = new FormGroup({
    nome: new FormControl('', [
      Validators.required
    ]),
    identidadeSecreta: new FormControl('', [
      Validators.required
    ]),
    poderes: new FormControl('', [
      Validators.required
    ]),
    descricao: new FormControl(''),
    imagem: new FormControl('')
  });

  constructor(public dialogRef: MatDialogRef<DialogCreateHeroComponent>,
    ) { }

  ngOnInit() {
  }


}

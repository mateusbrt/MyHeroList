import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainScreenComponent } from './main-screen.component';
import { HeroComponent } from './hero/hero.component';

import { MatCardModule } from '@angular/material/card';
import { DialogCreateHeroComponent } from './dialog-create-hero/dialog-create-hero.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MainScreenComponent,
    HeroComponent,
    DialogCreateHeroComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    DialogCreateHeroComponent
  ]
})
export class MainScreenModule { }

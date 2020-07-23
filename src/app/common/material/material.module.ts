import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatGridListModule,
    MatBadgeModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule]
})
export class MaterialModule { }

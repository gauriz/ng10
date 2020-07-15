import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { UtilityService } from './common/services/utility.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './components/login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  webDevice = true;
  constructor(breakpointObserver: BreakpointObserver, util: UtilityService, private dialog: MatDialog) {
    breakpointObserver.observe([
      // Breakpoints.Tablet,
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.webDevice = false;
      } else {
        this.webDevice = true;
      }
      console.log(this.webDevice);
      util.emit({ webDevice: this.webDevice });
    });
  }

  login(): void {
    this.dialog.open(LoginComponent);
  }

  close(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }

}

import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  webDevice = true;
  constructor(breakpointObserver: BreakpointObserver) {
    // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    breakpointObserver.observe([
      Breakpoints.Tablet,
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.webDevice = false;
      } else {
        this.webDevice = true;
      }
    });

  }

  ngOnInit(): void {
  }

  close(reason: string): void {
    this.reason = reason;
    this.sidenav.close();
  }

}

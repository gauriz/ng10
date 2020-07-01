import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output()
  closeSideNav = new EventEmitter<any>();
  @Input() webDevice = true;

  sideNavOptions = [{
    text: 'Home',
    redirectUrl: ''
  }, {
    text: 'Profile',
    redirectUrl: ''
  }, {
    text: 'Wishlist',
    redirectUrl: ''
  }, {
    text: 'Cart',
    redirectUrl: ''
  }, {
    text: 'Home is where the heart is (;',
    redirectUrl: ''
  }];

  ngOnInit(): void {
  }

  closeSideNavigation(): void {
    this.closeSideNav.emit(true);
  }

  selectedValue(event): void {
    console.log(event.option.value);
  }
}

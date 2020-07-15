import {
  Component, OnInit, OnDestroy
} from '@angular/core';
import { UtilityService } from '../../common/services/utility.service';
import { HomeProductsService } from '../../common/services/home-products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  tiles: any[] = [
    { text: 'One', cols: 1, rows: 3, color: 'lightblue', image: true },
    { text: 'Two', cols: 5, rows: 3, color: 'lightblue', image: false }
  ];
  webDevice = false;
  categories = [];
  tempData: any[];
  countDown;
  dealsOfTheDay: any;
  topSelection: any;
  subs: Subscription[] = [];

  constructor(utilityService: UtilityService, private homeProducts: HomeProductsService) {
    if (typeof utilityService.webDevice !== 'undefined') {
      this.webDevice = utilityService.webDevice;
    }
    utilityService.changeEmitted$.subscribe(emit => {
      if ('webDevice' in emit) {
        this.webDevice = emit.webDevice;
      }
    });
  }
  ngOnInit(): void {
    this.countDownTimer();
    this.subs.push(this.homeProducts.getDealsOfTheDay().subscribe(deals => {
      if ('default' in deals && Array.isArray(deals.default)) {
        this.dealsOfTheDay = deals.default;
      }
    }));
    this.subs.push(this.homeProducts.getTopSelection().subscribe(tops => {
      if ('default' in tops && Array.isArray(tops.default)) {
        this.topSelection = tops.default;
      }
    }));
    this.subs.push(this.homeProducts.getCategories().subscribe(cats => {
      if ('default' in cats && Array.isArray(cats.default)) {
        this.categories = cats.default;
      }
    }));
  }

  countDownTimer(): void {
    setInterval(() => {
      const countDownDate = new Date(2020, 6, 14, 59, 59, 59).getTime();
      console.log();
      const now = new Date().getTime();
      const timeleft = countDownDate - now;
      // const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      this.countDown = hours + ':' + minutes + ':' + seconds + ' Left';
    }, 1000);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => { sub.unsubscribe() });
  }
}

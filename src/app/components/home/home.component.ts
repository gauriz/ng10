import {
  Component, OnInit
} from '@angular/core';
import { UtilityService } from 'src/app/common/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: any[] = [
    { text: 'One', cols: 1, rows: 3, color: 'lightblue', image: true },
    { text: 'Two', cols: 5, rows: 3, color: 'lightblue', image: false }
  ];
  webDevice = false;
  categories = [];
  tempData: any[];

  constructor(utilityService: UtilityService) {
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
    this.categories = [{
      image: 'assets/categoryHairbow.jpg',
      heading: 'Hairbows'
    }, {
      image: 'assets/categoryHandBags.jpg',
      heading: 'Handbags'
    }, {
      image: 'assets/categoryPhones.jpg',
      heading: 'Mobile phones'
    }, {
      image: 'assets/categoryFurniture.jpg',
      heading: 'Furniture'
    }, {
      image: 'assets/categoryUtensils.jpg',
      heading: 'Utensils'
    }, {
      image: 'assets/categoryCloths.jpg',
      heading: 'Fashion Wears'
    }, {
      image: 'assets/categoryCosmetics.jpg',
      heading: 'Cosmetics'
    }, {
      image: 'assets/categoryBathItems.jpg',
      heading: 'Bath Produts'
    }];
  }
}

import { Component } from '@angular/core';
import { faBookSkull, faCoffee, faEarthAfrica, faRadio } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  coffeeIcon = faCoffee;
  telegram = faEarthAfrica

}

import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadAdSense();
  }

  loadAdSense() {
    const script = this.renderer.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    script.async = true;
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('data-ad-client', 'ca-pub-2718840837060329');
    this.renderer.appendChild(document.head, script);
  }

}



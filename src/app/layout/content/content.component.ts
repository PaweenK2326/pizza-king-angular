import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    const navCollapse = document.querySelector('#navbarToggle') as HTMLDivElement;
    if(navCollapse.classList.contains('show')){
      const button = document.querySelector('#navbarToggleButton') as HTMLButtonElement;
      button.click();
    }
  }

}

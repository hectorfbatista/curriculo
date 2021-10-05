import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements AfterContentInit {

  loading = false;

  opcoes = {
    loop: true,
    items: 1,
    margin: 10,
    autoplay: true,
    dots: true,
    nav: true,
  };

  ngAfterContentInit(): void {
    if (window.localStorage) {
      if (!localStorage.getItem('reload')) {
          localStorage['reload'] = true;
          window.location.reload();
      } else {
          localStorage.removeItem('reload');
          this.loading = true;
      }
    }

  }

}

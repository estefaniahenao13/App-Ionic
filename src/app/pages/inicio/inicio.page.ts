import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'alert-outline',
      name: 'Alert',
      redirectTo: '/alert'

    },
    {
      icon: 'football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'

    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'

    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

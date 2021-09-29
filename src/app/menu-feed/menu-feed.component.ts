import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu-feed',
  templateUrl: './menu-feed.component.html',
  styleUrls: ['./menu-feed.component.css']
})
export class MenuFeedComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}

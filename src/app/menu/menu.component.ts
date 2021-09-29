import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { environment } from './../../environments/environment.prod';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.id = this.userLogin.id

      this.router.navigate(['/feed'])
    }, erro => {
      alert('Usuário ou senha estão incorreto!')
    })
  }

}

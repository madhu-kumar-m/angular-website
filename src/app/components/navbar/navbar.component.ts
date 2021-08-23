import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  showMenu(id_menulist:any, id_collapseexpand:any):void {

    var menuList = document.getElementById(id_menulist)!;
    var collapseexpand = document.getElementById(id_collapseexpand)!;

    if (menuList.style.display == "") {
    menuList.style.display = "block";
    collapseexpand.className = "fa fa-times";
    } 
     else if (menuList.style.display == "block") {
      menuList.style.display = "";
      collapseexpand.className = "fa fa-bars";
    }

  }
 

}

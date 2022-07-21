import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items = [
    {
      label: 'Home', 
      icon: 'pi pi-fw pi-home', 
      path: '/', 
      command: (event:any) => {
        this.onTabChange(event);
      }
    },
    {
      label: 'Blog', 
      icon: 'pi pi-fw pi-file', 
      path: 'blog',
      command: (event: any) => {
        this.onTabChange(event);
      }
    }
  ]

  @Input() index: number = 0

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onTabChange(event: any): void{
    console.log('event', event)
    this.router.navigate([event.item.path])

  }

}

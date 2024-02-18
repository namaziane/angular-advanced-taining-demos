import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  users: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    })
  }

}

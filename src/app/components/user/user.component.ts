import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Properties
  user: User;
  userid: string;

  // Methods
  constructor(private route: ActivatedRoute) {
      // this.route.params.subscribe( params => this.userid = params.id );
  }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com'
    };
  }
}

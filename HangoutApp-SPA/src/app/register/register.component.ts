import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegistor = new EventEmitter();

  model: any = {};
  constructor(private authService: AuthService, private aletify: AlertifyService) { }

  ngOnInit() {
  }

  register()  {
    this.authService.register(this.model).subscribe(() => {
      this.aletify.success('registration successfull');
    }, error => {
      this.aletify.error(error);
    });
  }

  cancel() {
    this.cancelRegistor.emit(false);
    this.aletify.message('Cancelled');
  }
}

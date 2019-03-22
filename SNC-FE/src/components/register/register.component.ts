import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { TestService } from '@services/test.service';








@Component({
  selector: 'register-root',
  templateUrl: './register.component.html',
  providers: [TestService],
})


export class Register implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private skeleService: TestService

  ) {  }
  skeleForm: FormGroup;


  questions = ["first", "last", "email", "address", "company", "phone", "password", "passConf"];


  ngOnInit() {
    this.skeleForm = this.formBuilder.group({

      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      passConf: ['', Validators.required]
    });


  }

  onSubmit() {
      console.log(this.skeleForm.value),
      this.router.navigateByUrl('/account')

}



}

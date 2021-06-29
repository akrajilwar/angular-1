import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formGroup: FormGroup;
  formData: FormData = new FormData();

  submitted: boolean = false;

  imgPhoto: string | ArrayBuffer | null = null;

  statesData: any = [];
  states: Array<String> = [];
  cities: Array<String> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private apiService: ApiService
  ) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: this.fb.group({
        state: ['', Validators.required],
        city: ['', Validators.required],
      }),
      photo: [null]
    });
  }

  ngOnInit(): void {
    this.apiService.states().subscribe(data => {
      this.statesData = data;
      this.states = Object.keys(data);
    })
  }

  get fC(): any { return this.formGroup.controls; }

  onPhotoSelect(event: any) {
    const element = event.target as HTMLInputElement;
    if (element.files!.length > 0) {
      const file = element.files![0];
      const reader = new FileReader();
      reader.onload = e => this.imgPhoto = e.target!.result;
      reader.readAsDataURL(file);
      this.formGroup.patchValue({
        photo: file
      });
      this.formGroup.get('photo')?.updateValueAndValidity();
    }
  }

  selectCity(state: String) {
    this.cities = [];
    this.cities = this.statesData[`${state}`];
  }

  onFormSubmit() {
    const formValue = this.formGroup.value;
    console.log(formValue)

    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    for (const key in formValue) {
      if (formValue.hasOwnProperty(key)) {
        if (key === 'address') {
          for (const addKey in formValue[key]) {
            this.formData.set(`address[${addKey}]`, formValue[key][addKey]);
          }
        } else {
          this.formData.set(key, formValue[key]);
        }
      }
    }

    this.submitted = false;
    this.formGroup.markAsDirty();
    this.submit();
  }

  submit() {
    this.authService.register(this.formData)
      .subscribe(arg => {
        console.log(arg);
        this.router.navigate(['/auth/login']);
      }, error => {
        console.log(error);
      });
  }

}

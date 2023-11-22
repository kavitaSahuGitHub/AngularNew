import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isFormSubmitted: boolean = false;
  myForm: FormGroup;
  genders = [

    { id: '1', value: 'Male' },

    { id: '2', value: 'Female' }

  ]
  notAllowedNames = ['Codemind', 'Technology'];
  // constructor() {
  //   //call createFrom from constructor
  //   this.createForm()
  //  }

//formbuilder: inject the class by dependency injection
  constructor(private fb: FormBuilder) {
    //call createFrom from constructor
    //this.createForm()

    thiscreateFormUsingFormBuilder()
   }


  ngOnInit() {
    //5 aug 2023 sat
    console.log('ngOnInit method called');
   /* setTimeout(() => {
      this.myForm.setValue({
        'userDetails' : {
          'username': 'kavita2401',
          'email': 'kavita2487.sahu@gmail.com'
        },
        'course' : 'HTML',
        'gender' : 'Female',
        'skills' : ['JavaScript']
      })
    }, 5000)*/

    //in setvValue we need to set all the control value , otherwise it throws error
    //to overcome this patchValue comes into picture.
setTimeout(() => {
this.myForm.patchValue({
  'userDetails' : {
    'email': 'patchtest@gmail.com'
  }
})
}, 5000)

  }

  createForm() {
    this.myForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl('', [Validators.required,this.NameNotAllowed.bind(this)]),
        'email': new FormControl(null,[Validators.required, Validators.email], this.EmailNotAllowed )
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([new FormControl('Angular8', Validators.required)])
    })
  
  }
createFormUsingFormBuilder() {
this.myForm = this.fb.group({
  userDetails: this.fb.group({
    username : ['',[Validators.required,this.NameNotAllowed.bind(this)]],
    email : ['',[Validators.required, Validators.email], this.EmailNotAllowed]
  }),
  course: ['Angular'],
  gender: ['Male'],
  skills: this.fb.array([])
})
}
  resetForm(){
    this.myForm.reset({
      'userDetails' : {
        'username': '',
        'email': ''
      },
      'course' : 'Angular',
      'gender' : 'Male',
      'skills' : ['']
    });
  }

  OnSubmit() {
    if (this.myForm.valid) {
      this.isFormSubmitted = true;
      console.log('Submit method called', this.myForm);
      console.log('Forms value', this.myForm.value);
    }
    console.log('Submit method called', this.myForm);
    //console.log('Forms value', this.myForm.value);
//reset form value
this.resetForm();
  }
  OnAddSkills() {
    // 1st way typecasting in FormArray
    (<FormArray>this.myForm.get('skills')).push(new FormControl('Javascript', Validators.required))
    // 2nd way
    var skillArr = this.myForm.get('skills') as FormArray;
    skillArr.push(new FormControl('Javascript', Validators.required))
  }

  //for synch validation: 4 aug
  NameNotAllowed(control: FormControl) {

    if (this.notAllowedNames.indexOf(control.value) !== -1) {
               // custom validation error code
        return { 'namesIsNotAllowed': true}

    }
    return null;

  }
//for asnyc validation: 4 aug
  EmailNotAllowed(control: FormControl) : Promise<any> | Observable<any> {
    const myPromise = new Promise<any>((resolve, reject) => {
      setTimeout( () => {
        if (control.value === 'kavitasearch94@gmail.com') {
          resolve({'emailNotAllowed': true})

        } else {

          resolve(null)

        }

      }, 3000)

    })

    return myPromise;

  }

}

function thiscreateFormUsingFormBuilder() {
  throw new Error('Function not implemented.');
}

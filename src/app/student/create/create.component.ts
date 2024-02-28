import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  form!:FormGroup;

  constructor(public studentService:StudentService, private router:Router){}

  ngOnInit():void{
    var d = new Date().getTime()
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      surname:new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.studentService.create(this.form.value).subscribe((re:any)=>{
      alert("Student Created Sccessfull!");
      this.router.navigateByUrl('student/index');
    })
  }
}

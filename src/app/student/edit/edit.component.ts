import { Component } from '@angular/core';
import { Student } from '../student';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!:string;
  student!:Student;
  form!:FormGroup;

  constructor(public studentService:StudentService, private router:Router, private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['studentId'];
    this.studentService.find(this.id).subscribe((data:Student)=>{
      this.student = data;
    });
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
    console.log(this.form.value)
    this.studentService.update(this.id,this.form.value).subscribe((res:any)=>{
      alert("Student updated")
      this.router.navigateByUrl('student/index')
    })
  }
}

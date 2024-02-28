import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  students:Student[]=[];

  constructor(public studentService:StudentService){}

  ngOnInit():void{
    this.studentService.getAll().subscribe((data:Student[])=>{
      this.students = data;
      console.log(this.students);
  })
}

deleteStudent(id:string){
  this.studentService.delete(id).subscribe(res=>{
    this.students = this.students.filter(item=>item.id !==id);
    alert("Student deleted")
  })
}
}

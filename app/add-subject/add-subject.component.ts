import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(public service : ServiceService,private router:Router) { }
  subjectForm:any
  ngOnInit(): void {

    this.subjectForm = new FormGroup({
      title : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required),
    });
  }

  addSubject(){

    this.service.addSubject(this.subjectForm.value).subscribe((res:any)=>{
      console.log(res);

    },err=>{

    })
    this.router.navigateByUrl("SubjectsList");
  }


}

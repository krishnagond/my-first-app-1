import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from  '@angular/forms';
import { UploadService } from '../services/upload.service'

@Component({
  selector: 'app-first',
  templateUrl: 'first.component.html',
 
})

export class FirstComponent implements OnInit {

    constructor(private router:Router,private formBuilder: FormBuilder, private uploadService: UploadService) {  
    this.form = this.formBuilder.group({
      fileName: ['']
    });
   }
  
  form: FormGroup;
  error: string='';
  filestatus:any={status:false,name:'Choose file'};
  uploadResponse = { status: '', message: '', filePath: '' };

  ngOnInit(): void {
    let token = localStorage.getItem("token");
      if(token==="null"){
        this.router.navigate(['logincomponent']);
      }
    }

    onFileChange(event:any) {
      if (event.target.files.length > 0) {
        console.log(event.target.files);
        const file = event.target.files[0];
       
        this.form.get('fileName')?.setValue(file);
        this.filestatus.name=this.form.get('fileName')?.value.name
        this.filestatus.status=true;
        console.log(this.form.get('fileName')?.value.name);
      }
    }
  
    onSubmit() {
      const formData = new FormData();
      formData.append('file', this.form.get('fileName')?.value);
      this.uploadService.upload(formData).subscribe(
        (res) => {
          this.uploadResponse = res;
          console.log(res);},
        (err) =>{
        this.error = err;
        console.log(err);
        }
      );
    }
}

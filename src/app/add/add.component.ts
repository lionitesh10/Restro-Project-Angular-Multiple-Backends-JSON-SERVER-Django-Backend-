import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {RestroService} from '../restro.service';
 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  alert:boolean=false
  addRestro=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(),
    email:new FormControl('')    
  })

  constructor(private restro:RestroService) { }

  collectRestro(){
    this.restro.saveRestro(this.addRestro.value).subscribe((result)=>{
      console.warn("Service",result)
    })
    this.alert=true;
    this.addRestro.reset({})
  }
  clear_alert(){
    this.alert=false
  }

  ngOnInit(): void {
  }

}

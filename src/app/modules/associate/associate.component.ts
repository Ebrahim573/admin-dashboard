import { Component, OnInit, ViewChild } from '@angular/core';
import { manage } from 'src/app/model/manage';
import { ManageService } from 'src/app/service/manage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';





@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent implements OnInit {
//assistant: manage[]=[];
@ViewChild('manageForm',{static:false})
manageForm! :NgForm;

manageData!:manage;
dataSource =new MatTableDataSource();
displayedColumns: string[]=['id','firstname','lastname','email','mobile','companyname','actions'];
@ViewChild(MatPaginator, {static: true})
paginator!: MatPaginator;
isEditMode =false;


  constructor(private manageService:ManageService) { }

  ngOnInit(): void {


this.dataSource.paginator=this.paginator;
this.getAllmanage()

  }
  getAllmanage(){
    this.manageService.getList().subscribe((response: any)=> {
      this.dataSource.data =response;
    });
    }
editItem(element:any){
  this.manageData= _.cloneDeep(element);
  this.isEditMode=true;
}
cancelEdit(){
  this.isEditMode=false;
  this.manageForm.resetForm();
}

deleteItem(id:string){
  this.manageService.deleteItem(id).subscribe.data.filter((o:any)=>{
return o.id !==id ? o :false;
  });
  console.log(this.dataSource.data);


}



  }






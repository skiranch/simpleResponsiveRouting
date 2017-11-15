import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers:[ServiceService]
})
export class GalleryComponent implements OnInit {

  @Input()
  filterOption:string;

  @Input()
  filterOptionStore:string;

  public details:Array<{}>
  
  constructor(public _myarray=ServiceService) {
    this.details= this._myarray.getData()
   }
   newImg:string;
  
  
   addImage(newImg,myIndex)
  {
   
    if(newImg==""){alert("Please Enter Image");}else{
     this.newImg=newImg;
     this._myarray[myIndex].imgarray.push({imgurl:newImg});
     this._myarray[myIndex].boxdisplay=!this._myarray[myIndex].boxdisplay;
  }}
 
  toggleTextbox(myIndex)
  { 
    this._myarray[myIndex].boxdisplay=!this._myarray[myIndex].boxdisplay;
   
  }
  disStatus:boolean=false;
  checkStore(filterOptionStore:string,stories:any):boolean
  { this.disStatus=false;
    for(let i=0;i<stories.length;i++)
    { 
      let sname2=stories[i].sname;
     if(sname2.search(filterOptionStore)==-1)
     {
      
     }else{
      this.disStatus=true;
     }
    }
  
   return this.disStatus;
  }

  ngOnInit() {
  }

}

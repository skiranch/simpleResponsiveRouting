import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor() { }

 public getData(): Array<{headlabel:string,headlabel2:string,color:string,imglable:string,imglable2:string,stories:Array<{sname:string}>,sch:Array<{schlabel:string}>,imgarray:Array<{imgurl:string}>,boxdisplay:boolean}>{
  return [
    {headlabel:'All Centres Gallery V2',headlabel2:'NOT PUBLISHED',color:'4px solid #ff9999',boxdisplay:false,imglable:'10 PRODUCTS',imglable2:'4 PUBLISHED',stories:[{sname:'Eastland Level 2'},{sname:'Robina Level 1'}],sch:[{schlabel:'Do Not Publish'}],imgarray:[{imgurl:'../assets/images/b8c8cea848343e9007e4c70093bd8996.jpg'},{imgurl:'../assets/images/71Uu3aPWtmL._UY445_.jpg'},{imgurl:'https://voguepk.com/wp-content/uploads/2017/03/Latest-Hairstyles-Fashion-Trends-for-Teen-Boys-3.jpg'},{imgurl:'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'}]},
    {headlabel:'New Gallery 2016',headlabel2:'PUBLISHED',color:'4px solid #41A317',boxdisplay:false,imglable:'10 PRODUCTS',imglable2:'4 PUBLISHED',stories:[{sname:'Eastland Level 2'},{sname:'Robina Level 1'}],sch:[{schlabel:'Publish ASAP'},{schlabel:'Do not unpublish'}],imgarray:[{imgurl:'../assets/images/b8c8cea848343e9007e4c70093bd8996.jpg'},{imgurl:'../assets/images/71Uu3aPWtmL._UY445_.jpg'},{imgurl:'https://voguepk.com/wp-content/uploads/2017/03/Latest-Hairstyles-Fashion-Trends-for-Teen-Boys-3.jpg'},{imgurl:'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'}]},
    {headlabel:'The Collection',headlabel2:'PENDING',color:'4px solid #77BFC7',boxdisplay:false,imglable:'10 PRODUCTS',imglable2:'4 PUBLISHED',stories:[{sname:'Eastland Level 2'},{sname:'Robina Level 1'}],sch:[{schlabel:'Publish on 21/02/2016'},{schlabel:'Do not unpublish'}],imgarray:[{imgurl:'../assets/images/b8c8cea848343e9007e4c70093bd8996.jpg'},{imgurl:'../assets/images/71Uu3aPWtmL._UY445_.jpg'},{imgurl:'https://voguepk.com/wp-content/uploads/2017/03/Latest-Hairstyles-Fashion-Trends-for-Teen-Boys-3.jpg'},{imgurl:'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'}]},
    {headlabel:'New Gallery 2016',headlabel2:'PUBLISHED',color:'4px solid #EAC117',boxdisplay:false,imglable:'10 PRODUCTS',imglable2:'4 PUBLISHED',stories:[{sname:'Eastland Level 2'},{sname:'Eastland Level 3'},{sname:'Eastland Level 4'},{sname:'Robina Level 1'}],sch:[{schlabel:'Publish ASAP'},{schlabel:'Do not unpublish'}],imgarray:[{imgurl:'../assets/images/b8c8cea848343e9007e4c70093bd8996.jpg'},{imgurl:'../assets/images/71Uu3aPWtmL._UY445_.jpg'},{imgurl:'https://voguepk.com/wp-content/uploads/2017/03/Latest-Hairstyles-Fashion-Trends-for-Teen-Boys-3.jpg'},{imgurl:'https://static.pexels.com/photos/235462/pexels-photo-235462.jpeg'}]}
  
  ]

}






}

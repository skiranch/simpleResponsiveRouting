import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmptyComponent } from './empty/empty.component';
import {GalleryComponent } from './gallery/gallery.component';

const routes:Routes=[
{path:'', redirectTo:'/Home',pathMatch:'full'},
{path:'Home', component:EmptyComponent},
{path:'Galleries', component:GalleryComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule] ,
    providers:[]
})

export class RoutingModule{}
//export const RoutingComponents=[GalleryComponent,EmptyComponent]//


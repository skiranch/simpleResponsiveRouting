import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routing';
//import {RoutingComponents} from './app.routing';//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { EmptyComponent } from './empty/empty.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    //RoutingComponents,//
    HeaderComponent,
    FooterComponent,
    EmptyComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule, RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, //RoutingComponents// 
  ]
})
export class AppModule { }

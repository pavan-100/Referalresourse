import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LayoutModule} from '@angular/cdk/layout';
import { HowworksComponent } from './components/howworks/howworks.component';
import { ReferalassComponent } from './components/referalass/referalass.component';
import { ReferalnotdoComponent } from './components/referalnotdo/referalnotdo.component';
import { BeingrefComponent } from './components/beingref/beingref.component';
import { AgentsComponent } from './components/agents/agents.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    NavbarComponent,
    HowworksComponent,
    ReferalassComponent,
    ReferalnotdoComponent,
    BeingrefComponent,
    AgentsComponent,
    ContactpageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

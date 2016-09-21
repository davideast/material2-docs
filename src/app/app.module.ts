import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdSidenavModule } from '@angular2-material/sidenav/sidenav';
import { MdListModule } from '@angular2-material/list/list';
import { MdCardModule } from '@angular2-material/card/card';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdRippleModule } from '@angular2-material/core/ripple/ripple';
import { PortalModule } from '@angular2-material/core/portal/portal-directives';
import { OverlayModule } from '@angular2-material/core/overlay/overlay-directives';
import { RtlModule } from '@angular2-material/core/rtl/dir';
import { MdIconModule } from '@angular2-material/icon/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MicrositeNavBarComponent } from './shared/microsite-nav-bar';
import { MicrositeHeroComponent } from './shared/microsite-hero';
import { MicrositeMainSectionComponent } from './shared/microsite-main-section';
import { MicrositeFooterComponent } from './shared/microsite-footer';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { GuideComponent } from './guide/guide.component';
import { ComponentsComponent } from './components/components.component';
import { MdGridListModule } from '@angular2-material/grid-list';
import { ComponentdocComponent } from './componentdoc/componentdoc.component';

@NgModule({
  declarations: [
    AppComponent,
    MicrositeNavBarComponent,
    MicrositeHeroComponent,
    MicrositeMainSectionComponent,
    MicrositeFooterComponent,
    HomeComponent,
    GuideComponent,
    ComponentsComponent,
    ComponentdocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    MdButtonModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdListModule.forRoot(),
    MdCardModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdRippleModule.forRoot(),
    OverlayModule.forRoot(),
    RtlModule.forRoot(),
    MdIconModule.forRoot(),
    MdGridListModule.forRoot(),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

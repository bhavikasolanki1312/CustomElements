import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
constructor(private injector : Injector){


}
ngDoBootstrap(){
  const el = createCustomElement(ButtonComponent, {injector : this.injector});
  customElements.define('ngsd-button',el);
}
 }

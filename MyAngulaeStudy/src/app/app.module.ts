import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ProprrtybindingComponent } from './proprrtybinding/proprrtybinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TemplatrReferenceComponent } from './template-reference/templatr-reference.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { BootstrapDesignComponent } from './bootstrap-design/bootstrap-design.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {  RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TvComponent } from './tv/tv.component';
import { CardComponent } from './card/card.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { ChildComponent } from './child/child.component';
import { AppserviceService } from './Service/appservice.service';
import { ParentComponent } from './Exercise1/parent/parent.component';
import { Child1Component } from './Exercise1/child1/child1.component';
import {HttpClientModule} from '@angular/common/http';
import { ApidataComponent } from './apidata/apidata.component';
import { Parent2Component } from './lifecycle/parent2/parent2.component';
import { Child2Component } from './lifecycle/child2/child2.component';
import { Task1Component } from './GTinterview/task1/task1.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
// import { LifecycleComponent } from './lifecycle/lifecycle.component'
import { ReactiveFormsModule } from '@angular/forms';
import { RFormComponent } from './r-form/r-form.component';
import { CpipePipe } from './custompipe/cpipe.pipe';
import { FilterPipe } from './custompipe/filter.pipe';
import { EmployeeComponent } from './CRUD/employee/employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginappComponent } from './loginapp/loginapp.component';
import { PushSpliceComponent } from './push-splice/push-splice.component';
import { FirstcomComponent } from './ng-container/firstcom/firstcom.component';
import { SecondcomComponent } from './ng-container/secondcom/secondcom.component';
import { ChildComponentComponent } from './component-communication/child-component/child-component.component';
import { ParentComponentComponent } from './component-communication/parent-component/parent-component.component';
const appRoutes:Routes=[
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'directive',component:BootstrapDesignComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'databinding',component:DatabindingComponent},
  {path:'propertybinding',component:ProprrtybindingComponent},
  {path:'classbinding',component:ClassbindingComponent},
  {path:'eventbinding',component:EventbindingComponent},
  {path:'templatereference',component:TemplatrReferenceComponent},
  {path:'twowaybinding',component:TwoWayBindingComponent},
  {path:'products',children:[
    {path:'',component:ProductsComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'tv',component:TvComponent},
    
  ]},
  {path:'buyproduct',component:BuyProductComponent},
  {path:'exercise1',component:ParentComponent},
  {path:'lifecycle',component:Parent2Component},
  {path:'task1',component:Task1Component},
  {path:'tempForm',component:TemplateformComponent},
  {path:'reactiveForm',component:ReactiveformComponent},
  {path:'rForm',component:RFormComponent},
  {path:'crud',component:EmployeeComponent},
  {path:'loginapp',component:LoginappComponent},
  {path:'pushdata',component:PushSpliceComponent},
  {path:'ngcontent',component:FirstcomComponent},
  {path:'component-communication',component:ParentComponentComponent},
  {path:'**',component:PagenotfoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    ProprrtybindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    TemplatrReferenceComponent,
    TwoWayBindingComponent,
    BootstrapDesignComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PagenotfoundComponent,
    ProductsComponent,
    LaptopComponent,
    TvComponent,
    CardComponent,
    BuyProductComponent,
    ChildComponent,
    ParentComponent,
    Child1Component,
    ApidataComponent,
    Parent2Component,
    Child2Component,
    Task1Component,
    TemplateformComponent,
    ReactiveformComponent,
    RFormComponent,
    CpipePipe,
    FilterPipe,
    EmployeeComponent,
    RegisterComponent,
    LoginappComponent,
    PushSpliceComponent,
    FirstcomComponent,
    SecondcomComponent,
    ChildComponentComponent,
    ParentComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonsModule.forRoot(),
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [AppserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

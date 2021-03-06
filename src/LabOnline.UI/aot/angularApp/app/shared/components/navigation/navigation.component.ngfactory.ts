/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../../angularApp/app/shared/components/navigation/navigation.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../../angularApp/app/core/services/auth.service';
import * as import9 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '../../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/common/src/directives/ng_if';
export class Wrapper_NavigationComponent {
  /*private*/ _eventHandler:Function;
  context:import0.NavigationComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any) {
    this._changed = false;
    this.context = new import0.NavigationComponent(p0);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_NavigationComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_NavigationComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.NavigationComponent>;
  _NavigationComponent_0_3:Wrapper_NavigationComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavigationComponent_Host0,renderType_NavigationComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'navigation',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_NavigationComponent0(this.viewUtils,this,0,this._el_0);
    this._NavigationComponent_0_3 = new Wrapper_NavigationComponent(this.injectorGet(import8.AuthService,this.parentIndex));
    this.compView_0.create(this._NavigationComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._NavigationComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.NavigationComponent) && (0 === requestNodeIndex))) { return this._NavigationComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._NavigationComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const NavigationComponentNgFactory:import7.ComponentFactory<import0.NavigationComponent> = new import7.ComponentFactory<import0.NavigationComponent>('navigation',View_NavigationComponent_Host0,import0.NavigationComponent);
const styles_NavigationComponent:any[] = ([] as any[]);
class View_NavigationComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import9.Wrapper_RouterLinkWithHref;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _el_12:any;
  _RouterLinkWithHref_12_3:import9.Wrapper_RouterLinkWithHref;
  _el_13:any;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_18:any;
  _arr_19:any;
  _arr_20:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_NavigationComponent1,renderType_NavigationComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_18 = import11.UNINITIALIZED;
    this._arr_19 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_20 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'ul',new import3.InlineArray2(2,'class','nav navbar-nav'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray4(4,'href','javascript:void(0);','title','Bienvenido'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_6,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_7_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import12.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import13.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.LocationStrategy,this.parentView.parentIndex));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'span',new import3.InlineArray4(4,'aria-hidden','true','class','glyphicon glyphicon-list-alt'),(null as any));
    this._text_9 = this.renderer.createText(this._el_7,' Home',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_0,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_11,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_12_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import12.Router,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import13.ActivatedRoute,this.parentView.parentIndex),this.parentView.parentView.injectorGet(import14.LocationStrategy,this.parentView.parentIndex));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_12,'span',new import3.InlineArray4(4,'aria-hidden','true','class','glyphicon glyphicon-cog'),(null as any));
    this._text_14 = this.renderer.createText(this._el_12,' Cambiar contraseña',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_12,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_12));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._el_12,
      this._el_13,
      this._text_14,
      this._text_15
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_7_3.context; }
    if (((token === import15.RouterLinkWithHref) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RouterLinkWithHref_12_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this._arr_19('/home');
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_12_0_0:any = this._arr_20('/changepsw');
    this._RouterLinkWithHref_12_3.check_routerLink(currVal_12_0_0,throwOnChange,false);
    this._RouterLinkWithHref_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    const currVal_18:any = import3.inlineInterpolate(1,'',this.parentView.context.auth.getUserName(),'');
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_4,currVal_18);
      this._expr_18 = currVal_18;
    }
    this._RouterLinkWithHref_7_3.checkHost(this,this,this._el_7,throwOnChange);
    this._RouterLinkWithHref_12_3.checkHost(this,this,this._el_12,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this._RouterLinkWithHref_12_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_7_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_12(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_12_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
var renderType_NavigationComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_NavigationComponent,{});
export class View_NavigationComponent0 extends import1.AppView<import0.NavigationComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _RouterLinkWithHref_18_3:import9.Wrapper_RouterLinkWithHref;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _vc_24:import10.ViewContainer;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import16.Wrapper_NgIf;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _arr_42:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_NavigationComponent0,renderType_NavigationComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_42 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray8(6,'class','navbar navbar-default navbar-fixed-top','role','navigation','style','border-bottom: #ED6A00; border-bottom-style: solid; border-bottom-width: 1px; height: 50px;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','navbar-header'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'button',new import3.InlineArray8(8,'class','navbar-toggle','data-target','.navbar-collapse','data-toggle','collapse','type','button'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','sr-only'),(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Toggle navigation',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_12 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_14 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_6,'span',new import3.InlineArray2(2,'class','icon-bar'),(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_17 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_4,'a',new import3.InlineArray2(2,'class','navbar-brand'),(null as any));
    this._RouterLinkWithHref_18_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_18,'img',new import3.InlineArray8(6,'height','45','src','assets/logo.png','style','margin-top:-12px;'),(null as any));
    this._text_20 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_21 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','navbar-collapse collapse navbar-right'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'            \n            ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22,(null as any));
    this._vc_24 = new import10.ViewContainer(24,22,this,this._anchor_24);
    this._TemplateRef_24_5 = new import17.TemplateRef_(this,24,this._anchor_24);
    this._NgIf_24_6 = new import16.Wrapper_NgIf(this._vc_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_22,'ul',new import3.InlineArray2(2,'class','nav navbar-nav navbar-right'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n                ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'\n                    ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,this._el_28,'a',new import3.InlineArray2(2,'href','#'),(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_30,'span',new import3.InlineArray4(4,'aria-hidden','true','class','glyphicon glyphicon-log-out'),(null as any));
    this._text_32 = this.renderer.createText(this._el_30,' Salir',(null as any));
    this._text_33 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._text_34 = this.renderer.createText(this._el_26,'\n            ',(null as any));
    this._text_35 = this.renderer.createText(this._el_22,'\n        ',(null as any));
    this._text_36 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_37 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_18));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_30,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_30));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._text_37
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._RouterLinkWithHref_18_3.context; }
    if (((token === import17.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import18.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_18_0_0:any = this._arr_42('/home');
    this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0,throwOnChange,false);
    this._RouterLinkWithHref_18_3.ngDoCheck(this,this._el_18,throwOnChange);
    const currVal_24_0_0:any = this.context.auth.isAuthenticated();
    this._NgIf_24_6.check_ngIf(currVal_24_0_0,throwOnChange,false);
    this._NgIf_24_6.ngDoCheck(this,this._anchor_24,throwOnChange);
    this._vc_24.detectChangesInNestedViews(throwOnChange);
    this._RouterLinkWithHref_18_3.checkHost(this,this,this._el_18,throwOnChange);
  }
  destroyInternal():void {
    this._vc_24.destroyNestedViews();
    this._RouterLinkWithHref_18_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 24)) { return new View_NavigationComponent1(this.viewUtils,this,24,this._anchor_24,this._vc_24); }
    return (null as any);
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_18_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_30(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.logout()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
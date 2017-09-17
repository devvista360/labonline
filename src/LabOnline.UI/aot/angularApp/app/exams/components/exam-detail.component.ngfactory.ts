/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../../angularApp/app/exams/components/exam-detail.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router_state';
import * as import9 from '../../../../../angularApp/app/core/services/auth.service';
import * as import10 from '../../../../../angularApp/app/core/services/exam.service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
export class Wrapper_ExamDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.ExamDetailComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.ExamDetailComponent(p0,p1,p2);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_ExamDetailComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_ExamDetailComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.ExamDetailComponent>;
  _ExamDetailComponent_0_3:Wrapper_ExamDetailComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ExamDetailComponent_Host0,renderType_ExamDetailComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'exam-detail-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_ExamDetailComponent0(this.viewUtils,this,0,this._el_0);
    this._ExamDetailComponent_0_3 = new Wrapper_ExamDetailComponent(this.injectorGet(import8.ActivatedRoute,this.parentIndex),this.injectorGet(import9.AuthService,this.parentIndex),this.injectorGet(import10.ExamService,this.parentIndex));
    this.compView_0.create(this._ExamDetailComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._ExamDetailComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ExamDetailComponent) && (0 === requestNodeIndex))) { return this._ExamDetailComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ExamDetailComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const ExamDetailComponentNgFactory:import7.ComponentFactory<import0.ExamDetailComponent> = new import7.ComponentFactory<import0.ExamDetailComponent>('exam-detail-component',View_ExamDetailComponent_Host0,import0.ExamDetailComponent);
const styles_ExamDetailComponent:any[] = ([] as any[]);
class View_ExamDetailComponent1 extends import1.AppView<any> {
  _el_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_ExamDetailComponent1,renderType_ExamDetailComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'img',new import3.InlineArray8(6,'height','24','src','/assets/spin.svg','width','24'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_ExamDetailComponent2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_ExamDetailComponent2,renderType_ExamDetailComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_1 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','alert alert-danger'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1:any = this.parentView.context.message;
    if (import3.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_ExamDetailComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_ExamDetailComponent,{});
export class View_ExamDetailComponent0 extends import1.AppView<import0.ExamDetailComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _vc_18:import11.ViewContainer;
  _TemplateRef_18_5:any;
  _NgIf_18_6:import14.Wrapper_NgIf;
  _text_19:any;
  _anchor_20:any;
  /*private*/ _vc_20:import11.ViewContainer;
  _TemplateRef_20_5:any;
  _NgIf_20_6:import14.Wrapper_NgIf;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  /*private*/ _expr_31:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_ExamDetailComponent0,renderType_ExamDetailComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_31 = import12.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'style','width:100%;'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','container body-content'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'div',new import3.InlineArray2(2,'class','col-md-12'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_8,'span',new import3.InlineArray2(2,'class','title'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_6,'\n            ',(null as any));
    this._text_12 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n            ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','col-md-12'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._vc_18 = new import11.ViewContainer(18,16,this,this._anchor_18);
    this._TemplateRef_18_5 = new import15.TemplateRef_(this,18,this._anchor_18);
    this._NgIf_18_6 = new import14.Wrapper_NgIf(this._vc_18.vcRef,this._TemplateRef_18_5);
    this._text_19 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._anchor_20 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._vc_20 = new import11.ViewContainer(20,16,this,this._anchor_20);
    this._TemplateRef_20_5 = new import15.TemplateRef_(this,20,this._anchor_20);
    this._NgIf_20_6 = new import14.Wrapper_NgIf(this._vc_20.vcRef,this._TemplateRef_20_5);
    this._text_21 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._text_22 = this.renderer.createText(this._el_14,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_24 = this.renderer.createText(this._el_0,'\n',(null as any));
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
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._anchor_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import16.NgIf) && (18 === requestNodeIndex))) { return this._NgIf_18_6.context; }
    if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) { return this._TemplateRef_20_5; }
    if (((token === import16.NgIf) && (20 === requestNodeIndex))) { return this._NgIf_20_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_18_0_0:any = this.context.isLoading;
    this._NgIf_18_6.check_ngIf(currVal_18_0_0,throwOnChange,false);
    this._NgIf_18_6.ngDoCheck(this,this._anchor_18,throwOnChange);
    const currVal_20_0_0:any = this.context.message;
    this._NgIf_20_6.check_ngIf(currVal_20_0_0,throwOnChange,false);
    this._NgIf_20_6.ngDoCheck(this,this._anchor_20,throwOnChange);
    this._vc_18.detectChangesInNestedViews(throwOnChange);
    this._vc_20.detectChangesInNestedViews(throwOnChange);
    const currVal_31:any = import3.inlineInterpolate(1,'Generando reporte para la solicitud ',this.context.examId,'...');
    if (import3.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setText(this._text_10,currVal_31);
      this._expr_31 = currVal_31;
    }
  }
  destroyInternal():void {
    this._vc_18.destroyNestedViews();
    this._vc_20.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 18)) { return new View_ExamDetailComponent1(this.viewUtils,this,18,this._anchor_18,this._vc_18); }
    if ((nodeIndex == 20)) { return new View_ExamDetailComponent2(this.viewUtils,this,20,this._anchor_20,this._vc_20); }
    return (null as any);
  }
}
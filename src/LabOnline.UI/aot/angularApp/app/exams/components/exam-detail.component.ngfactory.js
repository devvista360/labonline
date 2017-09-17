var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/exams/components/exam-detail.component';
import * as import1 from '@angular/core/src/linker/view';
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
var Wrapper_ExamDetailComponent = (function () {
    function Wrapper_ExamDetailComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.ExamDetailComponent(p0, p1, p2);
    }
    Wrapper_ExamDetailComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ExamDetailComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ExamDetailComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ExamDetailComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ExamDetailComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ExamDetailComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ExamDetailComponent;
}());
export { Wrapper_ExamDetailComponent };
var renderType_ExamDetailComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ExamDetailComponent_Host0 = (function (_super) {
    __extends(View_ExamDetailComponent_Host0, _super);
    function View_ExamDetailComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ExamDetailComponent_Host0, renderType_ExamDetailComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ExamDetailComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'exam-detail-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ExamDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._ExamDetailComponent_0_3 = new Wrapper_ExamDetailComponent(this.injectorGet(import8.ActivatedRoute, this.parentIndex), this.injectorGet(import9.AuthService, this.parentIndex), this.injectorGet(import10.ExamService, this.parentIndex));
        this.compView_0.create(this._ExamDetailComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ExamDetailComponent_0_3.context);
    };
    View_ExamDetailComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ExamDetailComponent) && (0 === requestNodeIndex))) {
            return this._ExamDetailComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ExamDetailComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ExamDetailComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ExamDetailComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ExamDetailComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamDetailComponent_Host0;
}(import1.AppView));
export var ExamDetailComponentNgFactory = new import7.ComponentFactory('exam-detail-component', View_ExamDetailComponent_Host0, import0.ExamDetailComponent);
var styles_ExamDetailComponent = [];
var View_ExamDetailComponent1 = (function (_super) {
    __extends(View_ExamDetailComponent1, _super);
    function View_ExamDetailComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ExamDetailComponent1, renderType_ExamDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ExamDetailComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ExamDetailComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamDetailComponent1;
}(import1.AppView));
var View_ExamDetailComponent2 = (function (_super) {
    __extends(View_ExamDetailComponent2, _super);
    function View_ExamDetailComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamDetailComponent2, renderType_ExamDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import12.UNINITIALIZED;
        return _this;
    }
    View_ExamDetailComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ExamDetailComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_ExamDetailComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamDetailComponent2;
}(import1.AppView));
var renderType_ExamDetailComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ExamDetailComponent, {});
var View_ExamDetailComponent0 = (function (_super) {
    __extends(View_ExamDetailComponent0, _super);
    function View_ExamDetailComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ExamDetailComponent0, renderType_ExamDetailComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_31 = import12.UNINITIALIZED;
        return _this;
    }
    View_ExamDetailComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'width:100%;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container body-content'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'span', new import3.InlineArray2(2, 'class', 'title'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_13 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_15 = this.renderer.createText(this._el_14, '\n            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_18 = new import11.ViewContainer(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import15.TemplateRef_(this, 18, this._anchor_18);
        this._NgIf_18_6 = new import14.Wrapper_NgIf(this._vc_18.vcRef, this._TemplateRef_18_5);
        this._text_19 = this.renderer.createText(this._el_16, '\n                ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_20 = new import11.ViewContainer(20, 16, this, this._anchor_20);
        this._TemplateRef_20_5 = new import15.TemplateRef_(this, 20, this._anchor_20);
        this._NgIf_20_6 = new import14.Wrapper_NgIf(this._vc_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_16, '\n            ', null);
        this._text_22 = this.renderer.createText(this._el_14, '\n        ', null);
        this._text_23 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_24 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
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
        ]), null);
        return null;
    };
    View_ExamDetailComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import16.NgIf) && (18 === requestNodeIndex))) {
            return this._NgIf_18_6.context;
        }
        if (((token === import15.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import16.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6.context;
        }
        return notFoundResult;
    };
    View_ExamDetailComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = this.context.isLoading;
        this._NgIf_18_6.check_ngIf(currVal_18_0_0, throwOnChange, false);
        this._NgIf_18_6.ngDoCheck(this, this._anchor_18, throwOnChange);
        var currVal_20_0_0 = this.context.message;
        this._NgIf_20_6.check_ngIf(currVal_20_0_0, throwOnChange, false);
        this._NgIf_20_6.ngDoCheck(this, this._anchor_20, throwOnChange);
        this._vc_18.detectChangesInNestedViews(throwOnChange);
        this._vc_20.detectChangesInNestedViews(throwOnChange);
        var currVal_31 = import3.inlineInterpolate(1, 'Generando reporte para la solicitud ', this.context.examId, '...');
        if (import3.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setText(this._text_10, currVal_31);
            this._expr_31 = currVal_31;
        }
    };
    View_ExamDetailComponent0.prototype.destroyInternal = function () {
        this._vc_18.destroyNestedViews();
        this._vc_20.destroyNestedViews();
    };
    View_ExamDetailComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 18)) {
            return new View_ExamDetailComponent1(this.viewUtils, this, 18, this._anchor_18, this._vc_18);
        }
        if ((nodeIndex == 20)) {
            return new View_ExamDetailComponent2(this.viewUtils, this, 20, this._anchor_20, this._vc_20);
        }
        return null;
    };
    return View_ExamDetailComponent0;
}(import1.AppView));
export { View_ExamDetailComponent0 };

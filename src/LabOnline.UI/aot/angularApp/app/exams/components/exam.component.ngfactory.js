var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/exams/components/exam.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/core/services/exam.service';
import * as import9 from '../../../../../angularApp/app/core/services/auth.service';
import * as import10 from '../../../../../angularApp/app/core/services/account.service';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/security';
import * as import15 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/common/src/directives/ng_class';
import * as import20 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import24 from '@angular/common/src/directives/ng_if';
var Wrapper_ExamComponent = (function () {
    function Wrapper_ExamComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.ExamComponent(p0, p1, p2, p3);
    }
    Wrapper_ExamComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ExamComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ExamComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ExamComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ExamComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ExamComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ExamComponent;
}());
export { Wrapper_ExamComponent };
var renderType_ExamComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ExamComponent_Host0 = (function (_super) {
    __extends(View_ExamComponent_Host0, _super);
    function View_ExamComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ExamComponent_Host0, renderType_ExamComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ExamComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'exam-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ExamComponent0(this.viewUtils, this, 0, this._el_0);
        this._ExamComponent_0_3 = new Wrapper_ExamComponent(this.injectorGet(import8.ExamService, this.parentIndex), this.injectorGet(import9.AuthService, this.parentIndex), this.injectorGet(import10.AccountService, this.parentIndex), this.injectorGet(import11.ActivatedRoute, this.parentIndex));
        this.compView_0.create(this._ExamComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ExamComponent_0_3.context);
    };
    View_ExamComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ExamComponent) && (0 === requestNodeIndex))) {
            return this._ExamComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ExamComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ExamComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ExamComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ExamComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent_Host0;
}(import1.AppView));
export var ExamComponentNgFactory = new import7.ComponentFactory('exam-component', View_ExamComponent_Host0, import0.ExamComponent);
var styles_ExamComponent = [];
var View_ExamComponent1 = (function (_super) {
    __extends(View_ExamComponent1, _super);
    function View_ExamComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent1, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ExamComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_ExamComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent1;
}(import1.AppView));
var View_ExamComponent2 = (function (_super) {
    __extends(View_ExamComponent2, _super);
    function View_ExamComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ExamComponent2, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ExamComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray4(4, 'class', 'input-group', 'style', 'width: 200px;float: left;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray16(16, 'aria-describedby', 'search', 'autofocus', '', 'class', 'form-control', 'maxlength', '30', 'placeholder', 'Buscar...', 'size', '15', 'style', 'height: 30px;', 'type', 'text'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray4(4, 'class', 'input-group-addon', 'id', 'search'), null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-search'), null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray4(4, 'input', null, 'keyup.enter', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_5));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._el_5,
            this._text_6
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ExamComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = ((this.parentView.context.filter = $event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keyup.enter')) {
            var pd_sub_1 = (this.parentView.context.search() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_ExamComponent2.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.search() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent2;
}(import1.AppView));
var View_ExamComponent3 = (function (_super) {
    __extends(View_ExamComponent3, _super);
    function View_ExamComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent3, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import13.UNINITIALIZED;
        _this._expr_3 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ExamComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.$implicit;
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'value', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import3.inlineInterpolate(1, 'Año ', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_ExamComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent3;
}(import1.AppView));
var View_ExamComponent4 = (function (_super) {
    __extends(View_ExamComponent4, _super);
    function View_ExamComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ExamComponent4, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ExamComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ExamComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent4;
}(import1.AppView));
var View_ExamComponent6 = (function (_super) {
    __extends(View_ExamComponent6, _super);
    function View_ExamComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent6, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import13.UNINITIALIZED;
        _this._expr_3 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ExamComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.context.$implicit;
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementProperty(this._el_0, 'value', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_ExamComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent6;
}(import1.AppView));
var View_ExamComponent7 = (function (_super) {
    __extends(View_ExamComponent7, _super);
    function View_ExamComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent7, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_6 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_7 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import15.Wrapper_NgClass(this.parentView.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentView.parentIndex), this.parentView.parentView.parentView.injectorGet(import17.KeyValueDiffers, this.parentView.parentView.parentIndex), new import18.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ExamComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_ExamComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_6((this.parentView.parentView.context.grid.currentPage == this.context.$implicit));
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_ExamComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent7.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.grid.setPage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent7;
}(import1.AppView));
var View_ExamComponent5 = (function (_super) {
    __extends(View_ExamComponent5, _super);
    function View_ExamComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent5, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_38 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        _this._map_39 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        _this._expr_40 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'pagingId', 'name', 'pagingId', 'style', 'height: 30px;width: 73px;float: left;'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_4, null);
        this._vc_6 = new import12.ViewContainer(6, 4, this, this._anchor_6);
        this._TemplateRef_6_5 = new import21.TemplateRef_(this, 6, this._anchor_6);
        this._NgFor_6_6 = new import20.Wrapper_NgFor(this._vc_6.vcRef, this._TemplateRef_6_5, this.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_7 = this.renderer.createText(this._el_4, '\n                                ', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_10_3 = new import15.Wrapper_NgClass(this.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.KeyValueDiffers, this.parentView.parentIndex), new import18.ElementRef(this._el_10), this.renderer);
        this._text_11 = this.renderer.createText(this._el_10, '\n                                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_12, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-backward'), null);
        this._text_14 = this.renderer.createText(this._el_10, '\n                            ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._anchor_16 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_16 = new import12.ViewContainer(16, 0, this, this._anchor_16);
        this._TemplateRef_16_5 = new import21.TemplateRef_(this, 16, this._anchor_16);
        this._NgFor_16_6 = new import20.Wrapper_NgFor(this._vc_16.vcRef, this._TemplateRef_16_5, this.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_17 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_18_3 = new import15.Wrapper_NgClass(this.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import17.KeyValueDiffers, this.parentView.parentIndex), new import18.ElementRef(this._el_18), this.renderer);
        this._text_19 = this.renderer.createText(this._el_18, '\n                                ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_20, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-forward'), null);
        this._text_22 = this.renderer.createText(this._el_18, '\n                            ', null);
        this._text_23 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_0, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_27 = this.renderer.createText(this._el_26, '', null);
        this._text_28 = this.renderer.createText(this._el_24, '\n                            ', null);
        this._text_29 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_4));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_12));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._el_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._anchor_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_ExamComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import22.NgFor) && (6 === requestNodeIndex))) {
            return this._NgFor_6_6.context;
        }
        if (((token === import19.NgClass) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._NgClass_10_3.context;
        }
        if (((token === import21.TemplateRef) && (16 === requestNodeIndex))) {
            return this._TemplateRef_16_5;
        }
        if (((token === import22.NgFor) && (16 === requestNodeIndex))) {
            return this._NgFor_16_6.context;
        }
        if (((token === import19.NgClass) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._NgClass_18_3.context;
        }
        return notFoundResult;
    };
    View_ExamComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_6_0_0 = this.parentView.context.grid.pageSizes;
        this._NgFor_6_6.check_ngForOf(currVal_6_0_0, throwOnChange, false);
        this._NgFor_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        var currVal_10_0_0 = this._map_38(((this.parentView.context.grid.currentPage == 1) || (this.parentView.context.grid.rowsCount == 0)));
        this._NgClass_10_3.check_ngClass(currVal_10_0_0, throwOnChange, false);
        this._NgClass_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_16_0_0 = this.parentView.context.grid.pagesIndex;
        this._NgFor_16_6.check_ngForOf(currVal_16_0_0, throwOnChange, false);
        this._NgFor_16_6.ngDoCheck(this, this._anchor_16, throwOnChange);
        var currVal_18_0_0 = this._map_39(((this.parentView.context.grid.currentPage == this.parentView.context.grid.rowsCount) || (this.parentView.context.grid.rowsCount == 0)));
        this._NgClass_18_3.check_ngClass(currVal_18_0_0, throwOnChange, false);
        this._NgClass_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_16.detectChangesInNestedViews(throwOnChange);
        var currVal_40 = import3.inlineInterpolate(2, '', this.parentView.context.grid.currentPage, '/', this.parentView.context.grid.rowsCount, '');
        if (import3.checkBinding(throwOnChange, this._expr_40, currVal_40)) {
            this.renderer.setText(this._text_27, currVal_40);
            this._expr_40 = currVal_40;
        }
    };
    View_ExamComponent5.prototype.destroyInternal = function () {
        this._vc_6.destroyNestedViews();
        this._vc_16.destroyNestedViews();
    };
    View_ExamComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_ExamComponent6(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 16)) {
            return new View_ExamComponent7(this.viewUtils, this, 16, this._anchor_16, this._vc_16);
        }
        return null;
    };
    View_ExamComponent5.prototype.handleEvent_4 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.parentView.context.grid.setPageSize($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ExamComponent5.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.prevPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ExamComponent5.prototype.handleEvent_20 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.nextPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent5;
}(import1.AppView));
var View_ExamComponent8 = (function (_super) {
    __extends(View_ExamComponent8, _super);
    function View_ExamComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent8, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'th', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ExamComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '\n                                        ', this.parentView.context.grid.columns[2].title, '\n                                    ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_ExamComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent8.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.sort(this.parentView.context.grid.columns[2].id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent8;
}(import1.AppView));
var View_ExamComponent9 = (function (_super) {
    __extends(View_ExamComponent9, _super);
    function View_ExamComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent9, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'th', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_ExamComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '\n                                        ', this.parentView.context.grid.columns[3].title, '\n                                    ');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_ExamComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent9.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.sort(this.parentView.context.grid.columns[3].id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent9;
}(import1.AppView));
var View_ExamComponent12 = (function (_super) {
    __extends(View_ExamComponent12, _super);
    function View_ExamComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent12, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_3 = import3.pureProxy3(function (p0, p1, p2) {
            return {
                PROCESADO: p0,
                'EN PROCESO': p1,
                CONFINDENCIAL: p2
            };
        });
        _this._expr_4 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import15.Wrapper_NgClass(this.parentView.parentView.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentView.parentView.parentIndex), this.parentView.parentView.parentView.parentView.injectorGet(import17.KeyValueDiffers, this.parentView.parentView.parentView.parentIndex), new import18.ElementRef(this._el_0), this.renderer);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ExamComponent12.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import19.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_ExamComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_3('examGreen', 'examYellow', 'examRed')[this.parentView.context.$implicit.processed];
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit.processed, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_ExamComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent12;
}(import1.AppView));
var View_ExamComponent13 = (function (_super) {
    __extends(View_ExamComponent13, _super);
    function View_ExamComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ExamComponent13, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ExamComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                                        ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray4(4, 'class', 'alert alert-info', 'style', 'margin-top: 10px; margin-bottom: 10px;'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                                            ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'strong', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Resultado confidencial!', null);
        this._text_6 = this.renderer.createText(this._el_2, ' Debe ser reclamado directamente en CEDIMED S.A.S.\n                                                        ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                                                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_ExamComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent13;
}(import1.AppView));
var View_ExamComponent11 = (function (_super) {
    __extends(View_ExamComponent11, _super);
    function View_ExamComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent11, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_15 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', new import3.InlineArray2(2, 'class', 'examItem'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'style', 'margin-right:10px;'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                                    ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_5 = new import12.ViewContainer(5, 0, this, this._anchor_5);
        this._TemplateRef_5_5 = new import21.TemplateRef_(this, 5, this._anchor_5);
        this._NgIf_5_6 = new import23.Wrapper_NgIf(this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_0, '\n                                                    ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_7 = new import12.ViewContainer(7, 0, this, this._anchor_7);
        this._TemplateRef_7_5 = new import21.TemplateRef_(this, 7, this._anchor_7);
        this._NgIf_7_6 = new import23.Wrapper_NgIf(this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_0, '\n                                                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8
        ]), null);
        return null;
    };
    View_ExamComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === import24.NgIf) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === import21.TemplateRef) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === import24.NgIf) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        return notFoundResult;
    };
    View_ExamComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5_0_0 = this.context.$implicit.processed;
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.parentView.parentView.context.isConfidentialState(this.context.$implicit.processed);
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        var currVal_15 = import3.inlineInterpolate(1, '', this.context.$implicit.examName, '');
        if (import3.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setText(this._text_3, currVal_15);
            this._expr_15 = currVal_15;
        }
    };
    View_ExamComponent11.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
    };
    View_ExamComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent11.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 5)) {
            return new View_ExamComponent12(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 7)) {
            return new View_ExamComponent13(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        return null;
    };
    return View_ExamComponent11;
}(import1.AppView));
var View_ExamComponent14 = (function (_super) {
    __extends(View_ExamComponent14, _super);
    function View_ExamComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent14, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'colText examData'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_ExamComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit[this.parentView.parentView.context.grid.columns[2].id], '');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_ExamComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent14;
}(import1.AppView));
var View_ExamComponent15 = (function (_super) {
    __extends(View_ExamComponent15, _super);
    function View_ExamComponent15(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent15, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '                                    \n                                    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'span', new import3.InlineArray2(2, 'class', 'colText examData'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_ExamComponent15.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit[this.parentView.parentView.context.grid.columns[3].id], '');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_ExamComponent15.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ExamComponent15;
}(import1.AppView));
var View_ExamComponent10 = (function (_super) {
    __extends(View_ExamComponent10, _super);
    function View_ExamComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ExamComponent10, renderType_ExamComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_62 = import13.UNINITIALIZED;
        _this._expr_63 = import13.UNINITIALIZED;
        _this._expr_64 = import13.UNINITIALIZED;
        _this._expr_65 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                                        ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'examDate'), null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n                                        ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'examOrder'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                                            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'a', new import3.InlineArray2(2, 'data-toggle', 'collapse'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n                                                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'i', new import3.InlineArray4(4, 'class', 'glyphicon glyphicon-th', 'style', 'margin-right: 5px;'), null);
        this._text_14 = this.renderer.createText(this._el_11, '', null);
        this._text_15 = this.renderer.createText(this._el_9, '\n                                        ', null);
        this._text_16 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._text_17 = this.renderer.createText(this._el_2, '\n                                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n                                        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'span', new import3.InlineArray2(2, 'class', 'colText examData'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n                                            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'a', new import3.InlineArray4(4, 'class', 'examLink', 'href', 'javascript:void(0);'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                                                ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'span', new import3.InlineArray4(4, 'class', 'glyphicon glyphicon-search', 'style', 'margin-right: 5px;'), null);
        this._text_25 = this.renderer.createText(this._el_22, 'Resultados\n                                            ', null);
        this._text_26 = this.renderer.createText(this._el_20, '\n                                        ', null);
        this._text_27 = this.renderer.createText(this._el_18, '\n                                        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_18, 'span', new import3.InlineArray2(2, 'class', 'colText examData'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                                            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'a', new import3.InlineArray4(4, 'class', 'examLink', 'href', 'javascript:void(0);'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                                                ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_30, 'span', new import3.InlineArray4(4, 'class', 'glyphicon glyphicon-download-alt', 'style', 'margin-right: 5px;'), null);
        this._text_33 = this.renderer.createText(this._el_30, 'Descargar\n                                            ', null);
        this._text_34 = this.renderer.createText(this._el_28, '\n                                        ', null);
        this._text_35 = this.renderer.createText(this._el_18, '\n                                    ', null);
        this._text_36 = this.renderer.createText(this._el_2, '\n                                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n                                        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'div', new import3.InlineArray2(2, 'class', 'collapse'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                                            ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'ul', new import3.InlineArray2(2, 'class', 'examItemContainer'), null);
        this._text_42 = this.renderer.createText(this._el_41, '\n                                                ', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._vc_43 = new import12.ViewContainer(43, 41, this, this._anchor_43);
        this._TemplateRef_43_5 = new import21.TemplateRef_(this, 43, this._anchor_43);
        this._NgFor_43_6 = new import20.Wrapper_NgFor(this._vc_43.vcRef, this._TemplateRef_43_5, this.parentView.parentView.injectorGet(import16.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_44 = this.renderer.createText(this._el_41, '\n                                            ', null);
        this._text_45 = this.renderer.createText(this._el_39, '\n                                        ', null);
        this._text_46 = this.renderer.createText(this._el_37, '\n                                    ', null);
        this._text_47 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._text_48 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_49 = new import12.ViewContainer(49, 0, this, this._anchor_49);
        this._TemplateRef_49_5 = new import21.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import23.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        this._text_50 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._anchor_51 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_51 = new import12.ViewContainer(51, 0, this, this._anchor_51);
        this._TemplateRef_51_5 = new import21.TemplateRef_(this, 51, this._anchor_51);
        this._NgIf_51_6 = new import23.Wrapper_NgIf(this._vc_51.vcRef, this._TemplateRef_51_5);
        this._text_52 = this.renderer.createText(this._el_0, '\n                            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_22));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._anchor_51,
            this._text_52
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ExamComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import22.NgFor) && (43 === requestNodeIndex))) {
            return this._NgFor_43_6.context;
        }
        if (((token === import21.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import24.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        if (((token === import21.TemplateRef) && (51 === requestNodeIndex))) {
            return this._TemplateRef_51_5;
        }
        if (((token === import24.NgIf) && (51 === requestNodeIndex))) {
            return this._NgIf_51_6.context;
        }
        return notFoundResult;
    };
    View_ExamComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_43_0_0 = this.context.$implicit.lineItems;
        this._NgFor_43_6.check_ngForOf(currVal_43_0_0, throwOnChange, false);
        this._NgFor_43_6.ngDoCheck(this, this._anchor_43, throwOnChange);
        var currVal_49_0_0 = this.parentView.context.patientEnabled;
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        var currVal_51_0_0 = this.parentView.context.patientEnabled;
        this._NgIf_51_6.check_ngIf(currVal_51_0_0, throwOnChange, false);
        this._NgIf_51_6.ngDoCheck(this, this._anchor_51, throwOnChange);
        this._vc_43.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._vc_51.detectChangesInNestedViews(throwOnChange);
        var currVal_62 = import3.inlineInterpolate(1, '\n                                            ', this.context.$implicit[this.parentView.context.grid.columns[0].id], '\n                                        ');
        if (import3.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this.renderer.setText(this._text_7, currVal_62);
            this._expr_62 = currVal_62;
        }
        var currVal_63 = import3.inlineInterpolate(1, '#', this.context.$implicit[this.parentView.context.grid.columns[1].id], '');
        if (import3.checkBinding(throwOnChange, this._expr_63, currVal_63)) {
            this.renderer.setElementProperty(this._el_11, 'href', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.URL, currVal_63));
            this._expr_63 = currVal_63;
        }
        var currVal_64 = import3.inlineInterpolate(1, '', this.context.$implicit[this.parentView.context.grid.columns[1].id], '\n                                            ');
        if (import3.checkBinding(throwOnChange, this._expr_64, currVal_64)) {
            this.renderer.setText(this._text_14, currVal_64);
            this._expr_64 = currVal_64;
        }
        var currVal_65 = import3.inlineInterpolate(1, '', this.context.$implicit[this.parentView.context.grid.columns[1].id], '');
        if (import3.checkBinding(throwOnChange, this._expr_65, currVal_65)) {
            this.renderer.setElementProperty(this._el_39, 'id', currVal_65);
            this._expr_65 = currVal_65;
        }
    };
    View_ExamComponent10.prototype.destroyInternal = function () {
        this._vc_43.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this._vc_51.destroyNestedViews();
    };
    View_ExamComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ExamComponent10.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 43)) {
            return new View_ExamComponent11(this.viewUtils, this, 43, this._anchor_43, this._vc_43);
        }
        if ((nodeIndex == 49)) {
            return new View_ExamComponent14(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        if ((nodeIndex == 51)) {
            return new View_ExamComponent15(this.viewUtils, this, 51, this._anchor_51, this._vc_51);
        }
        return null;
    };
    View_ExamComponent10.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.viewExam(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ExamComponent10.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.downloadExam(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent10;
}(import1.AppView));
var renderType_ExamComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ExamComponent, {});
var View_ExamComponent0 = (function (_super) {
    __extends(View_ExamComponent0, _super);
    function View_ExamComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_ExamComponent0, renderType_ExamComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_126 = import13.UNINITIALIZED;
        _this._expr_127 = import13.UNINITIALIZED;
        _this._expr_128 = import13.UNINITIALIZED;
        _this._expr_129 = import13.UNINITIALIZED;
        return _this;
    }
    View_ExamComponent0.prototype.createInternal = function (rootSelector) {
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
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'span', new import3.InlineArray4(4, 'class', 'title', 'style', 'float: left; margin: 5px;'), null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_6, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_13, 'span', new import3.InlineArray2(2, 'class', 'patientHeaderInfo'), null);
        this._text_15 = this.renderer.createText(this._el_14, '', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_21, null);
        this._vc_23 = new import12.ViewContainer(23, 21, this, this._anchor_23);
        this._TemplateRef_23_5 = new import21.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import23.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_21, '\n            ', null);
        this._text_25 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_26 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'form', new import3.InlineArray2(2, 'class', 'form-inline'), null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                    ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_33 = new import12.ViewContainer(33, 31, this, this._anchor_33);
        this._TemplateRef_33_5 = new import21.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import23.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_31, '\n                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_31, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n                            ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                                ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'yearId', 'name', 'yearId', 'style', 'height: 30px;width: 110px;float: left;'), null);
        this._text_42 = this.renderer.createText(this._el_41, '\n                                    ', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_41, null);
        this._vc_43 = new import12.ViewContainer(43, 41, this, this._anchor_43);
        this._TemplateRef_43_5 = new import21.TemplateRef_(this, 43, this._anchor_43);
        this._NgFor_43_6 = new import20.Wrapper_NgFor(this._vc_43.vcRef, this._TemplateRef_43_5, this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.ref);
        this._text_44 = this.renderer.createText(this._el_41, '\n                                ', null);
        this._text_45 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._text_46 = this.renderer.createText(this._el_37, '\n                            ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_37, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_48 = this.renderer.createText(this._el_47, '\n                                ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_47, null);
        this._vc_49 = new import12.ViewContainer(49, 47, this, this._anchor_49);
        this._TemplateRef_49_5 = new import21.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import23.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        this._text_50 = this.renderer.createText(this._el_47, '\n                            ', null);
        this._text_51 = this.renderer.createText(this._el_37, '\n                            ', null);
        this._el_52 = import3.createRenderElement(this.renderer, this._el_37, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_53 = this.renderer.createText(this._el_52, '\n                                ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_52, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_55 = this.renderer.createText(this._el_54, 'Ordenes: ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_54, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_57 = this.renderer.createText(this._el_56, '', null);
        this._text_58 = this.renderer.createText(this._el_52, '\n                            ', null);
        this._text_59 = this.renderer.createText(this._el_37, '\n                        ', null);
        this._text_60 = this.renderer.createText(this._el_35, '\n                        ', null);
        this._anchor_61 = this.renderer.createTemplateAnchor(this._el_35, null);
        this._vc_61 = new import12.ViewContainer(61, 35, this, this._anchor_61);
        this._TemplateRef_61_5 = new import21.TemplateRef_(this, 61, this._anchor_61);
        this._NgIf_61_6 = new import23.Wrapper_NgIf(this._vc_61.vcRef, this._TemplateRef_61_5);
        this._text_62 = this.renderer.createText(this._el_35, '                        \n                    ', null);
        this._text_63 = this.renderer.createText(this._el_31, '\n                ', null);
        this._text_64 = this.renderer.createText(this._el_29, '\n            ', null);
        this._text_65 = this.renderer.createText(this._el_27, '\n        ', null);
        this._text_66 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_67 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_68 = this.renderer.createText(this._el_67, '\n            ', null);
        this._el_69 = import3.createRenderElement(this.renderer, this._el_67, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_70 = this.renderer.createText(this._el_69, '        \n                ', null);
        this._el_71 = import3.createRenderElement(this.renderer, this._el_69, 'div', new import3.InlineArray2(2, 'class', 'table-responsive'), null);
        this._text_72 = this.renderer.createText(this._el_71, '\n                    ', null);
        this._el_73 = import3.createRenderElement(this.renderer, this._el_71, 'table', new import3.InlineArray2(2, 'class', 'table table-hover table-striped table-bordered table-condensed'), null);
        this._text_74 = this.renderer.createText(this._el_73, '\n                        ', null);
        this._el_75 = import3.createRenderElement(this.renderer, this._el_73, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_76 = this.renderer.createText(this._el_75, '\n                            ', null);
        this._el_77 = import3.createRenderElement(this.renderer, this._el_75, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_78 = this.renderer.createText(this._el_77, '\n                                ', null);
        this._el_79 = import3.createRenderElement(this.renderer, this._el_77, 'th', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_80 = this.renderer.createText(this._el_79, '\n                                    ', null);
        this._el_81 = import3.createRenderElement(this.renderer, this._el_79, 'a', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_82 = this.renderer.createText(this._el_81, '', null);
        this._text_83 = this.renderer.createText(this._el_79, '\n                                ', null);
        this._text_84 = this.renderer.createText(this._el_77, '\n                                ', null);
        this._anchor_85 = this.renderer.createTemplateAnchor(this._el_77, null);
        this._vc_85 = new import12.ViewContainer(85, 77, this, this._anchor_85);
        this._TemplateRef_85_5 = new import21.TemplateRef_(this, 85, this._anchor_85);
        this._NgIf_85_6 = new import23.Wrapper_NgIf(this._vc_85.vcRef, this._TemplateRef_85_5);
        this._text_86 = this.renderer.createText(this._el_77, '\n                                ', null);
        this._anchor_87 = this.renderer.createTemplateAnchor(this._el_77, null);
        this._vc_87 = new import12.ViewContainer(87, 77, this, this._anchor_87);
        this._TemplateRef_87_5 = new import21.TemplateRef_(this, 87, this._anchor_87);
        this._NgIf_87_6 = new import23.Wrapper_NgIf(this._vc_87.vcRef, this._TemplateRef_87_5);
        this._text_88 = this.renderer.createText(this._el_77, '\n                            ', null);
        this._text_89 = this.renderer.createText(this._el_75, '\n                        ', null);
        this._text_90 = this.renderer.createText(this._el_73, '\n                        ', null);
        this._el_91 = import3.createRenderElement(this.renderer, this._el_73, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_92 = this.renderer.createText(this._el_91, '\n                            ', null);
        this._anchor_93 = this.renderer.createTemplateAnchor(this._el_91, null);
        this._vc_93 = new import12.ViewContainer(93, 91, this, this._anchor_93);
        this._TemplateRef_93_5 = new import21.TemplateRef_(this, 93, this._anchor_93);
        this._NgFor_93_6 = new import20.Wrapper_NgFor(this._vc_93.vcRef, this._TemplateRef_93_5, this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.ref);
        this._text_94 = this.renderer.createText(this._el_91, '\n                        ', null);
        this._text_95 = this.renderer.createText(this._el_73, '\n                    ', null);
        this._text_96 = this.renderer.createText(this._el_71, '\n                ', null);
        this._text_97 = this.renderer.createText(this._el_69, '\n            ', null);
        this._text_98 = this.renderer.createText(this._el_67, '\n        ', null);
        this._text_99 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_100 = this.renderer.createText(this._el_0, '\n', null);
        this._text_101 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_41));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_81, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_81));
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
            this._el_11,
            this._text_12,
            this._el_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._text_60,
            this._anchor_61,
            this._text_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._el_73,
            this._text_74,
            this._el_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._el_79,
            this._text_80,
            this._el_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._anchor_85,
            this._text_86,
            this._anchor_87,
            this._text_88,
            this._text_89,
            this._text_90,
            this._el_91,
            this._text_92,
            this._anchor_93,
            this._text_94,
            this._text_95,
            this._text_96,
            this._text_97,
            this._text_98,
            this._text_99,
            this._text_100,
            this._text_101
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_ExamComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import21.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import24.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import21.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import24.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import21.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import22.NgFor) && (43 === requestNodeIndex))) {
            return this._NgFor_43_6.context;
        }
        if (((token === import21.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import24.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        if (((token === import21.TemplateRef) && (61 === requestNodeIndex))) {
            return this._TemplateRef_61_5;
        }
        if (((token === import24.NgIf) && (61 === requestNodeIndex))) {
            return this._NgIf_61_6.context;
        }
        if (((token === import21.TemplateRef) && (85 === requestNodeIndex))) {
            return this._TemplateRef_85_5;
        }
        if (((token === import24.NgIf) && (85 === requestNodeIndex))) {
            return this._NgIf_85_6.context;
        }
        if (((token === import21.TemplateRef) && (87 === requestNodeIndex))) {
            return this._TemplateRef_87_5;
        }
        if (((token === import24.NgIf) && (87 === requestNodeIndex))) {
            return this._NgIf_87_6.context;
        }
        if (((token === import21.TemplateRef) && (93 === requestNodeIndex))) {
            return this._TemplateRef_93_5;
        }
        if (((token === import22.NgFor) && (93 === requestNodeIndex))) {
            return this._NgFor_93_6.context;
        }
        return notFoundResult;
    };
    View_ExamComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_23_0_0 = this.context.message;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        var currVal_33_0_0 = this.context.searchEnabled;
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        var currVal_43_0_0 = this.context.searchYears;
        this._NgFor_43_6.check_ngForOf(currVal_43_0_0, throwOnChange, false);
        this._NgFor_43_6.ngDoCheck(this, this._anchor_43, throwOnChange);
        var currVal_49_0_0 = this.context.isLoading;
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        var currVal_61_0_0 = (this.context.grid.rowsCount > 1);
        this._NgIf_61_6.check_ngIf(currVal_61_0_0, throwOnChange, false);
        this._NgIf_61_6.ngDoCheck(this, this._anchor_61, throwOnChange);
        var currVal_85_0_0 = this.context.patientEnabled;
        this._NgIf_85_6.check_ngIf(currVal_85_0_0, throwOnChange, false);
        this._NgIf_85_6.ngDoCheck(this, this._anchor_85, throwOnChange);
        var currVal_87_0_0 = this.context.patientEnabled;
        this._NgIf_87_6.check_ngIf(currVal_87_0_0, throwOnChange, false);
        this._NgIf_87_6.ngDoCheck(this, this._anchor_87, throwOnChange);
        var currVal_93_0_0 = this.context.grid.rows;
        this._NgFor_93_6.check_ngForOf(currVal_93_0_0, throwOnChange, false);
        this._NgFor_93_6.ngDoCheck(this, this._anchor_93, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_43.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._vc_61.detectChangesInNestedViews(throwOnChange);
        this._vc_85.detectChangesInNestedViews(throwOnChange);
        this._vc_87.detectChangesInNestedViews(throwOnChange);
        this._vc_93.detectChangesInNestedViews(throwOnChange);
        var currVal_126 = import3.inlineInterpolate(1, 'Consulta de Resultados ', this.context.gridTitle, '');
        if (import3.checkBinding(throwOnChange, this._expr_126, currVal_126)) {
            this.renderer.setText(this._text_10, currVal_126);
            this._expr_126 = currVal_126;
        }
        var currVal_127 = import3.inlineInterpolate(2, '', this.context.userFullName, ' ', this.context.nationalId, '');
        if (import3.checkBinding(throwOnChange, this._expr_127, currVal_127)) {
            this.renderer.setText(this._text_15, currVal_127);
            this._expr_127 = currVal_127;
        }
        var currVal_128 = import3.inlineInterpolate(1, '', this.context.itemsCount, '');
        if (import3.checkBinding(throwOnChange, this._expr_128, currVal_128)) {
            this.renderer.setText(this._text_57, currVal_128);
            this._expr_128 = currVal_128;
        }
        var currVal_129 = import3.inlineInterpolate(1, '\n                                        ', this.context.grid.columns[1].title, '\n                                    ');
        if (import3.checkBinding(throwOnChange, this._expr_129, currVal_129)) {
            this.renderer.setText(this._text_82, currVal_129);
            this._expr_129 = currVal_129;
        }
    };
    View_ExamComponent0.prototype.destroyInternal = function () {
        this._vc_23.destroyNestedViews();
        this._vc_33.destroyNestedViews();
        this._vc_43.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this._vc_61.destroyNestedViews();
        this._vc_85.destroyNestedViews();
        this._vc_87.destroyNestedViews();
        this._vc_93.destroyNestedViews();
    };
    View_ExamComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_ExamComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        if ((nodeIndex == 33)) {
            return new View_ExamComponent2(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 43)) {
            return new View_ExamComponent3(this.viewUtils, this, 43, this._anchor_43, this._vc_43);
        }
        if ((nodeIndex == 49)) {
            return new View_ExamComponent4(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        if ((nodeIndex == 61)) {
            return new View_ExamComponent5(this.viewUtils, this, 61, this._anchor_61, this._vc_61);
        }
        if ((nodeIndex == 85)) {
            return new View_ExamComponent8(this.viewUtils, this, 85, this._anchor_85, this._vc_85);
        }
        if ((nodeIndex == 87)) {
            return new View_ExamComponent9(this.viewUtils, this, 87, this._anchor_87, this._vc_87);
        }
        if ((nodeIndex == 93)) {
            return new View_ExamComponent10(this.viewUtils, this, 93, this._anchor_93, this._vc_93);
        }
        return null;
    };
    View_ExamComponent0.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChange($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ExamComponent0.prototype.handleEvent_81 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.grid.sort(this.context.grid.columns[0].id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_ExamComponent0;
}(import1.AppView));
export { View_ExamComponent0 };

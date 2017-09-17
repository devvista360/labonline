var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/login/components/login.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/app.constants';
import * as import9 from '../../../../../angularApp/app/core/services/account.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import15 from '../../../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import18 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import23 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import24 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import25 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import26 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import27 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import28 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import29 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import30 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import31 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import32 from '@angular/router/src/router_state';
import * as import33 from '@angular/common/src/directives/ng_for';
import * as import34 from '@angular/common/src/directives/ng_class';
import * as import35 from '@angular/forms/src/directives/validators';
import * as import36 from '@angular/forms/src/validators';
import * as import37 from '@angular/forms/src/directives/control_value_accessor';
import * as import38 from '@angular/forms/src/directives/ng_model';
import * as import39 from '@angular/forms/src/directives/ng_control';
import * as import40 from '@angular/forms/src/directives/ng_control_status';
import * as import41 from '@angular/forms/src/directives/default_value_accessor';
import * as import42 from '@angular/router/src/directives/router_link';
import * as import43 from '@angular/forms/src/directives/ng_form';
import * as import44 from '@angular/forms/src/directives/control_container';
var Wrapper_LoginComponent = (function () {
    function Wrapper_LoginComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.LoginComponent(p0, p1, p2);
    }
    Wrapper_LoginComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_LoginComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_LoginComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_LoginComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_LoginComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_LoginComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_LoginComponent;
}());
export { Wrapper_LoginComponent };
var renderType_LoginComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_LoginComponent_Host0 = (function (_super) {
    __extends(View_LoginComponent_Host0, _super);
    function View_LoginComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_LoginComponent_Host0, renderType_LoginComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_LoginComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'login-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_LoginComponent0(this.viewUtils, this, 0, this._el_0);
        this._LoginComponent_0_3 = new Wrapper_LoginComponent(this.injectorGet(import8.Configuration, this.parentIndex), this.injectorGet(import9.AccountService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._LoginComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._LoginComponent_0_3.context);
    };
    View_LoginComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.LoginComponent) && (0 === requestNodeIndex))) {
            return this._LoginComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_LoginComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._LoginComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_LoginComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_LoginComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent_Host0;
}(import1.AppView));
export var LoginComponentNgFactory = new import7.ComponentFactory('login-component', View_LoginComponent_Host0, import0.LoginComponent);
var styles_LoginComponent = [];
var View_LoginComponent1 = (function (_super) {
    __extends(View_LoginComponent1, _super);
    function View_LoginComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_LoginComponent1, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import12.UNINITIALIZED;
        return _this;
    }
    View_LoginComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_LoginComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_LoginComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent1;
}(import1.AppView));
var View_LoginComponent2 = (function (_super) {
    __extends(View_LoginComponent2, _super);
    function View_LoginComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_LoginComponent2, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_LoginComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import16.ElementRef(this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_32_4.context);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import16.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import18.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_LoginComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.code;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit.code;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_LoginComponent2.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_LoginComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent2;
}(import1.AppView));
var View_LoginComponent4 = (function (_super) {
    __extends(View_LoginComponent4, _super);
    function View_LoginComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent4, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            El tipo de documento es requerido.\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent4;
}(import1.AppView));
var View_LoginComponent3 = (function (_super) {
    __extends(View_LoginComponent3, _super);
    function View_LoginComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent3, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import20.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_LoginComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import21.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_LoginComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView._NgModel_32_8.context.hasError('required');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_LoginComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_LoginComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LoginComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LoginComponent4(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_LoginComponent3;
}(import1.AppView));
var View_LoginComponent6 = (function (_super) {
    __extends(View_LoginComponent6, _super);
    function View_LoginComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent6, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            El documento es requerido.\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent6;
}(import1.AppView));
var View_LoginComponent5 = (function (_super) {
    __extends(View_LoginComponent5, _super);
    function View_LoginComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent5, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import20.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_LoginComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import21.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_LoginComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView._NgModel_42_8.context.hasError('required');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_LoginComponent5.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_LoginComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LoginComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LoginComponent6(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_LoginComponent5;
}(import1.AppView));
var View_LoginComponent8 = (function (_super) {
    __extends(View_LoginComponent8, _super);
    function View_LoginComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent8, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            La contraseña es requerida.\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent8;
}(import1.AppView));
var View_LoginComponent7 = (function (_super) {
    __extends(View_LoginComponent7, _super);
    function View_LoginComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent7, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import20.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_LoginComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import21.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_LoginComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView._NgModel_49_8.context.hasError('required');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_LoginComponent7.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_LoginComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LoginComponent7.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LoginComponent8(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_LoginComponent7;
}(import1.AppView));
var View_LoginComponent9 = (function (_super) {
    __extends(View_LoginComponent9, _super);
    function View_LoginComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_LoginComponent9, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_LoginComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import16.ElementRef(this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_56_4.context);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import16.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import18.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_LoginComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.code;
        this._NgSelectOption_0_3.check_value(currVal_0_0_0, throwOnChange, false);
        this._NgSelectOption_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_0_1_0 = this.context.$implicit.code;
        this._NgSelectMultipleOption_0_4.check_value(currVal_0_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_0_4.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_4 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setText(this._text_1, currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    View_LoginComponent9.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_LoginComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent9;
}(import1.AppView));
var View_LoginComponent11 = (function (_super) {
    __extends(View_LoginComponent11, _super);
    function View_LoginComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent11, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            El tipo de usuario es requerido.\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_LoginComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent11;
}(import1.AppView));
var View_LoginComponent10 = (function (_super) {
    __extends(View_LoginComponent10, _super);
    function View_LoginComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent10, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import20.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_LoginComponent10.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import21.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_LoginComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView._NgModel_56_8.context.hasError('required');
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_LoginComponent10.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_LoginComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_LoginComponent10.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_LoginComponent11(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_LoginComponent10;
}(import1.AppView));
var View_LoginComponent12 = (function (_super) {
    __extends(View_LoginComponent12, _super);
    function View_LoginComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_LoginComponent12, renderType_LoginComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_LoginComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_LoginComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_LoginComponent12;
}(import1.AppView));
var renderType_LoginComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_LoginComponent, {});
var View_LoginComponent0 = (function (_super) {
    __extends(View_LoginComponent0, _super);
    function View_LoginComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_LoginComponent0, renderType_LoginComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._map_156 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_157 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_158 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_159 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._expr_160 = import12.UNINITIALIZED;
        _this._arr_161 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_LoginComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'bgLogin'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row vertical-offset-100'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'col-md-4 col-md-offset-4'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'p', new import3.InlineArray2(2, 'class', 'headerForm'), null);
        this._text_9 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_6, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                    ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._vc_12 = new import11.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import20.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import19.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'span', new import3.InlineArray2(2, 'class', 'title'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Resultados en línea', null);
        this._text_22 = this.renderer.createText(this._el_17, '\n                    ', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_24, 'form', new import3.InlineArray4(4, 'novalidate', '', 'role', 'form'), null);
        this._NgForm_26_3 = new import22.Wrapper_NgForm(null, null);
        this._ControlContainer_26_4 = this._NgForm_26_3.context;
        this._NgControlStatusGroup_26_5 = new import23.Wrapper_NgControlStatusGroup(this._ControlContainer_26_4);
        this._text_27 = this.renderer.createText(this._el_26, '\n                            ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'fieldset', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                                    ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_30, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'docType', 'name', 'docType', 'required', ''), null);
        this._NgClass_32_3 = new import24.Wrapper_NgClass(this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import31.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_32), this.renderer);
        this._SelectControlValueAccessor_32_4 = new import14.Wrapper_SelectControlValueAccessor(this.renderer, new import16.ElementRef(this._el_32));
        this._RequiredValidator_32_5 = new import25.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_32_6 = [this._RequiredValidator_32_5.context];
        this._NG_VALUE_ACCESSOR_32_7 = [this._SelectControlValueAccessor_32_4.context];
        this._NgModel_32_8 = new import26.Wrapper_NgModel(this._ControlContainer_26_4, this._NG_VALIDATORS_32_6, null, this._NG_VALUE_ACCESSOR_32_7);
        this._NgControl_32_9 = this._NgModel_32_8.context;
        this._NgControlStatus_32_10 = new import23.Wrapper_NgControlStatus(this._NgControl_32_9);
        this._text_33 = this.renderer.createText(this._el_32, '\n                                        ', null);
        this._anchor_34 = this.renderer.createTemplateAnchor(this._el_32, null);
        this._vc_34 = new import11.ViewContainer(34, 32, this, this._anchor_34);
        this._TemplateRef_34_5 = new import20.TemplateRef_(this, 34, this._anchor_34);
        this._NgFor_34_6 = new import27.Wrapper_NgFor(this._vc_34.vcRef, this._TemplateRef_34_5, this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.ref);
        this._text_35 = this.renderer.createText(this._el_32, '\n                                    ', null);
        this._text_36 = this.renderer.createText(this._el_30, '\n                                    ', null);
        this._anchor_37 = this.renderer.createTemplateAnchor(this._el_30, null);
        this._vc_37 = new import11.ViewContainer(37, 30, this, this._anchor_37);
        this._TemplateRef_37_5 = new import20.TemplateRef_(this, 37, this._anchor_37);
        this._NgIf_37_6 = new import19.Wrapper_NgIf(this._vc_37.vcRef, this._TemplateRef_37_5);
        this._text_38 = this.renderer.createText(this._el_30, '\n                                ', null);
        this._text_39 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_41 = this.renderer.createText(this._el_40, '\n                                    ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'input', new import3.InlineArray16(16, 'autocomplete', 'off', 'autofocus', '', 'class', 'form-control', 'id', 'docId', 'name', 'docId', 'placeholder', 'Número de documento', 'required', '', 'type', 'text'), null);
        this._NgClass_42_3 = new import24.Wrapper_NgClass(this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import31.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_42), this.renderer);
        this._DefaultValueAccessor_42_4 = new import28.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_42));
        this._RequiredValidator_42_5 = new import25.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_42_6 = [this._RequiredValidator_42_5.context];
        this._NG_VALUE_ACCESSOR_42_7 = [this._DefaultValueAccessor_42_4.context];
        this._NgModel_42_8 = new import26.Wrapper_NgModel(this._ControlContainer_26_4, this._NG_VALIDATORS_42_6, null, this._NG_VALUE_ACCESSOR_42_7);
        this._NgControl_42_9 = this._NgModel_42_8.context;
        this._NgControlStatus_42_10 = new import23.Wrapper_NgControlStatus(this._NgControl_42_9);
        this._text_43 = this.renderer.createText(this._el_40, '\n                                    ', null);
        this._anchor_44 = this.renderer.createTemplateAnchor(this._el_40, null);
        this._vc_44 = new import11.ViewContainer(44, 40, this, this._anchor_44);
        this._TemplateRef_44_5 = new import20.TemplateRef_(this, 44, this._anchor_44);
        this._NgIf_44_6 = new import19.Wrapper_NgIf(this._vc_44.vcRef, this._TemplateRef_44_5);
        this._text_45 = this.renderer.createText(this._el_40, '\n                                ', null);
        this._text_46 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_48 = this.renderer.createText(this._el_47, '\n                                    ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_47, 'input', new import3.InlineArray16(16, 'autocomplete', 'off', 'class', 'form-control', 'id', 'pwd', 'name', 'pwd', 'placeholder', 'Contraseña', 'required', '', 'type', 'password', 'value', ''), null);
        this._NgClass_49_3 = new import24.Wrapper_NgClass(this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import31.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_49), this.renderer);
        this._DefaultValueAccessor_49_4 = new import28.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_49));
        this._RequiredValidator_49_5 = new import25.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_49_6 = [this._RequiredValidator_49_5.context];
        this._NG_VALUE_ACCESSOR_49_7 = [this._DefaultValueAccessor_49_4.context];
        this._NgModel_49_8 = new import26.Wrapper_NgModel(this._ControlContainer_26_4, this._NG_VALIDATORS_49_6, null, this._NG_VALUE_ACCESSOR_49_7);
        this._NgControl_49_9 = this._NgModel_49_8.context;
        this._NgControlStatus_49_10 = new import23.Wrapper_NgControlStatus(this._NgControl_49_9);
        this._text_50 = this.renderer.createText(this._el_47, '\n                                    ', null);
        this._anchor_51 = this.renderer.createTemplateAnchor(this._el_47, null);
        this._vc_51 = new import11.ViewContainer(51, 47, this, this._anchor_51);
        this._TemplateRef_51_5 = new import20.TemplateRef_(this, 51, this._anchor_51);
        this._NgIf_51_6 = new import19.Wrapper_NgIf(this._vc_51.vcRef, this._TemplateRef_51_5);
        this._text_52 = this.renderer.createText(this._el_47, '\n                                ', null);
        this._text_53 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_55 = this.renderer.createText(this._el_54, '\n                                    ', null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_54, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'userType', 'name', 'userType', 'required', ''), null);
        this._NgClass_56_3 = new import24.Wrapper_NgClass(this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import31.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_56), this.renderer);
        this._SelectControlValueAccessor_56_4 = new import14.Wrapper_SelectControlValueAccessor(this.renderer, new import16.ElementRef(this._el_56));
        this._RequiredValidator_56_5 = new import25.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_56_6 = [this._RequiredValidator_56_5.context];
        this._NG_VALUE_ACCESSOR_56_7 = [this._SelectControlValueAccessor_56_4.context];
        this._NgModel_56_8 = new import26.Wrapper_NgModel(this._ControlContainer_26_4, this._NG_VALIDATORS_56_6, null, this._NG_VALUE_ACCESSOR_56_7);
        this._NgControl_56_9 = this._NgModel_56_8.context;
        this._NgControlStatus_56_10 = new import23.Wrapper_NgControlStatus(this._NgControl_56_9);
        this._text_57 = this.renderer.createText(this._el_56, '\n                                        ', null);
        this._anchor_58 = this.renderer.createTemplateAnchor(this._el_56, null);
        this._vc_58 = new import11.ViewContainer(58, 56, this, this._anchor_58);
        this._TemplateRef_58_5 = new import20.TemplateRef_(this, 58, this._anchor_58);
        this._NgFor_58_6 = new import27.Wrapper_NgFor(this._vc_58.vcRef, this._TemplateRef_58_5, this.parentView.injectorGet(import30.IterableDiffers, this.parentIndex), this.ref);
        this._text_59 = this.renderer.createText(this._el_56, '\n                                    ', null);
        this._text_60 = this.renderer.createText(this._el_54, '\n                                    ', null);
        this._anchor_61 = this.renderer.createTemplateAnchor(this._el_54, null);
        this._vc_61 = new import11.ViewContainer(61, 54, this, this._anchor_61);
        this._TemplateRef_61_5 = new import20.TemplateRef_(this, 61, this._anchor_61);
        this._NgIf_61_6 = new import19.Wrapper_NgIf(this._vc_61.vcRef, this._TemplateRef_61_5);
        this._text_62 = this.renderer.createText(this._el_54, '\n                                ', null);
        this._text_63 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_28, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_65 = this.renderer.createText(this._el_64, '\n                                    ', null);
        this._el_66 = import3.createRenderElement(this.renderer, this._el_64, 'div', new import3.InlineArray2(2, 'class', 'col-6'), null);
        this._text_67 = this.renderer.createText(this._el_66, '\n                                        ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_66, 'button', new import3.InlineArray4(4, 'class', 'btn btn-warning px-2', 'type', 'submit'), null);
        this._text_69 = this.renderer.createText(this._el_68, 'Acceder', null);
        this._text_70 = this.renderer.createText(this._el_66, '\n                                        ', null);
        this._el_71 = import3.createRenderElement(this.renderer, this._el_66, 'button', new import3.InlineArray4(4, 'class', 'btn btn-link px-0 text-right', 'type', 'button'), null);
        this._RouterLink_71_3 = new import29.Wrapper_RouterLink(this.parentView.injectorGet(import10.Router, this.parentIndex), this.parentView.injectorGet(import32.ActivatedRoute, this.parentIndex));
        this._text_72 = this.renderer.createText(this._el_71, '¿Olvidó contraseña?', null);
        this._text_73 = this.renderer.createText(this._el_66, '\n                                        ', null);
        this._anchor_74 = this.renderer.createTemplateAnchor(this._el_66, null);
        this._vc_74 = new import11.ViewContainer(74, 66, this, this._anchor_74);
        this._TemplateRef_74_5 = new import20.TemplateRef_(this, 74, this._anchor_74);
        this._NgIf_74_6 = new import19.Wrapper_NgIf(this._vc_74.vcRef, this._TemplateRef_74_5);
        this._text_75 = this.renderer.createText(this._el_66, '\n                                    ', null);
        this._text_76 = this.renderer.createText(this._el_64, '\n                                ', null);
        this._text_77 = this.renderer.createText(this._el_28, '\n                            ', null);
        this._text_78 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._text_79 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._text_80 = this.renderer.createText(this._el_15, '\n                ', null);
        this._text_81 = this.renderer.createText(this._el_6, '\n\n                ', null);
        this._el_82 = import3.createRenderElement(this.renderer, this._el_6, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_83 = this.renderer.createText(this._el_82, '\n                    ', null);
        this._el_84 = import3.createRenderElement(this.renderer, this._el_82, 'div', new import3.InlineArray2(2, 'style', 'color: #00748A; background-color: #eee; text-align: center; width:auto;'), null);
        this._text_85 = this.renderer.createText(this._el_84, '\n                        ', null);
        this._el_86 = import3.createRenderElement(this.renderer, this._el_84, 'div', new import3.InlineArray2(2, 'style', 'padding-left: 10px; padding-right: 10px; margin-left: 10px; margin-right: 10px;'), null);
        this._text_87 = this.renderer.createText(this._el_86, '\n                            Cualquier inquietud  por favor comunicarse al 4440019 extensión 125.\n                            ', null);
        this._el_88 = import3.createRenderElement(this.renderer, this._el_86, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_89 = this.renderer.createText(this._el_86, '\n                            Le recomendamos usar los navegadores Web Chrome 43 o superior, Firefox 38 o superior, Safari 8 o superior, Internet Explorer 10, 11.\n                        ', null);
        this._text_90 = this.renderer.createText(this._el_84, '\n                    ', null);
        this._text_91 = this.renderer.createText(this._el_82, '\n                ', null);
        this._text_92 = this.renderer.createText(this._el_6, '\n\n            ', null);
        this._text_93 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_94 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_95 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_26, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_26));
        this._NgForm_26_3.subscribe(this, this.eventHandler(this.handleEvent_26), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_32, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_32));
        this._NgModel_32_8.subscribe(this, this.eventHandler(this.handleEvent_32), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_42, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_42));
        this._NgModel_42_8.subscribe(this, this.eventHandler(this.handleEvent_42), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_49, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_49));
        this._NgModel_49_8.subscribe(this, this.eventHandler(this.handleEvent_49), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_56, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_56));
        this._NgModel_56_8.subscribe(this, this.eventHandler(this.handleEvent_56), true);
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_71, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_71));
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
            this._text_9,
            this._el_10,
            this._text_11,
            this._anchor_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._anchor_34,
            this._text_35,
            this._text_36,
            this._anchor_37,
            this._text_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._anchor_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._anchor_51,
            this._text_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._anchor_58,
            this._text_59,
            this._text_60,
            this._anchor_61,
            this._text_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._text_70,
            this._el_71,
            this._text_72,
            this._text_73,
            this._anchor_74,
            this._text_75,
            this._text_76,
            this._text_77,
            this._text_78,
            this._text_79,
            this._text_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._el_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._text_92,
            this._text_93,
            this._text_94,
            this._text_95
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5
        ]);
        return null;
    };
    View_LoginComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import21.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import20.TemplateRef) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === import33.NgFor) && (34 === requestNodeIndex))) {
            return this._NgFor_34_6.context;
        }
        if (((token === import34.NgClass) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgClass_32_3.context;
        }
        if (((token === import17.SelectControlValueAccessor) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._SelectControlValueAccessor_32_4.context;
        }
        if (((token === import35.RequiredValidator) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._RequiredValidator_32_5.context;
        }
        if (((token === import36.NG_VALIDATORS) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NG_VALIDATORS_32_6;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NG_VALUE_ACCESSOR_32_7;
        }
        if (((token === import38.NgModel) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgModel_32_8.context;
        }
        if (((token === import39.NgControl) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgControl_32_9;
        }
        if (((token === import40.NgControlStatus) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 35)))) {
            return this._NgControlStatus_32_10.context;
        }
        if (((token === import20.TemplateRef) && (37 === requestNodeIndex))) {
            return this._TemplateRef_37_5;
        }
        if (((token === import21.NgIf) && (37 === requestNodeIndex))) {
            return this._NgIf_37_6.context;
        }
        if (((token === import34.NgClass) && (42 === requestNodeIndex))) {
            return this._NgClass_42_3.context;
        }
        if (((token === import41.DefaultValueAccessor) && (42 === requestNodeIndex))) {
            return this._DefaultValueAccessor_42_4.context;
        }
        if (((token === import35.RequiredValidator) && (42 === requestNodeIndex))) {
            return this._RequiredValidator_42_5.context;
        }
        if (((token === import36.NG_VALIDATORS) && (42 === requestNodeIndex))) {
            return this._NG_VALIDATORS_42_6;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (42 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_42_7;
        }
        if (((token === import38.NgModel) && (42 === requestNodeIndex))) {
            return this._NgModel_42_8.context;
        }
        if (((token === import39.NgControl) && (42 === requestNodeIndex))) {
            return this._NgControl_42_9;
        }
        if (((token === import40.NgControlStatus) && (42 === requestNodeIndex))) {
            return this._NgControlStatus_42_10.context;
        }
        if (((token === import20.TemplateRef) && (44 === requestNodeIndex))) {
            return this._TemplateRef_44_5;
        }
        if (((token === import21.NgIf) && (44 === requestNodeIndex))) {
            return this._NgIf_44_6.context;
        }
        if (((token === import34.NgClass) && (49 === requestNodeIndex))) {
            return this._NgClass_49_3.context;
        }
        if (((token === import41.DefaultValueAccessor) && (49 === requestNodeIndex))) {
            return this._DefaultValueAccessor_49_4.context;
        }
        if (((token === import35.RequiredValidator) && (49 === requestNodeIndex))) {
            return this._RequiredValidator_49_5.context;
        }
        if (((token === import36.NG_VALIDATORS) && (49 === requestNodeIndex))) {
            return this._NG_VALIDATORS_49_6;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && (49 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_49_7;
        }
        if (((token === import38.NgModel) && (49 === requestNodeIndex))) {
            return this._NgModel_49_8.context;
        }
        if (((token === import39.NgControl) && (49 === requestNodeIndex))) {
            return this._NgControl_49_9;
        }
        if (((token === import40.NgControlStatus) && (49 === requestNodeIndex))) {
            return this._NgControlStatus_49_10.context;
        }
        if (((token === import20.TemplateRef) && (51 === requestNodeIndex))) {
            return this._TemplateRef_51_5;
        }
        if (((token === import21.NgIf) && (51 === requestNodeIndex))) {
            return this._NgIf_51_6.context;
        }
        if (((token === import20.TemplateRef) && (58 === requestNodeIndex))) {
            return this._TemplateRef_58_5;
        }
        if (((token === import33.NgFor) && (58 === requestNodeIndex))) {
            return this._NgFor_58_6.context;
        }
        if (((token === import34.NgClass) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgClass_56_3.context;
        }
        if (((token === import17.SelectControlValueAccessor) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._SelectControlValueAccessor_56_4.context;
        }
        if (((token === import35.RequiredValidator) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._RequiredValidator_56_5.context;
        }
        if (((token === import36.NG_VALIDATORS) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NG_VALIDATORS_56_6;
        }
        if (((token === import37.NG_VALUE_ACCESSOR) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NG_VALUE_ACCESSOR_56_7;
        }
        if (((token === import38.NgModel) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgModel_56_8.context;
        }
        if (((token === import39.NgControl) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgControl_56_9;
        }
        if (((token === import40.NgControlStatus) && ((56 <= requestNodeIndex) && (requestNodeIndex <= 59)))) {
            return this._NgControlStatus_56_10.context;
        }
        if (((token === import20.TemplateRef) && (61 === requestNodeIndex))) {
            return this._TemplateRef_61_5;
        }
        if (((token === import21.NgIf) && (61 === requestNodeIndex))) {
            return this._NgIf_61_6.context;
        }
        if (((token === import42.RouterLink) && ((71 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._RouterLink_71_3.context;
        }
        if (((token === import20.TemplateRef) && (74 === requestNodeIndex))) {
            return this._TemplateRef_74_5;
        }
        if (((token === import21.NgIf) && (74 === requestNodeIndex))) {
            return this._NgIf_74_6.context;
        }
        if (((token === import43.NgForm) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._NgForm_26_3.context;
        }
        if (((token === import44.ControlContainer) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._ControlContainer_26_4;
        }
        if (((token === import40.NgControlStatusGroup) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 78)))) {
            return this._NgControlStatusGroup_26_5.context;
        }
        return notFoundResult;
    };
    View_LoginComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.context.message;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        this._NgForm_26_3.ngDoCheck(this, this._el_26, throwOnChange);
        this._NgControlStatusGroup_26_5.ngDoCheck(this, this._el_26, throwOnChange);
        var currVal_32_0_0 = 'form-control';
        this._NgClass_32_3.check_klass(currVal_32_0_0, throwOnChange, false);
        var currVal_32_0_1 = this._map_156((this._NgModel_32_8.context.errors && (this._NgModel_32_8.context.dirty || this._NgModel_32_8.context.touched)));
        this._NgClass_32_3.check_ngClass(currVal_32_0_1, throwOnChange, false);
        this._NgClass_32_3.ngDoCheck(this, this._el_32, throwOnChange);
        this._SelectControlValueAccessor_32_4.ngDoCheck(this, this._el_32, throwOnChange);
        var currVal_32_2_0 = '';
        this._RequiredValidator_32_5.check_required(currVal_32_2_0, throwOnChange, false);
        this._RequiredValidator_32_5.ngDoCheck(this, this._el_32, throwOnChange);
        var currVal_32_3_0 = 'docType';
        this._NgModel_32_8.check_name(currVal_32_3_0, throwOnChange, false);
        var currVal_32_3_1 = this.context.user.documentType;
        this._NgModel_32_8.check_model(currVal_32_3_1, throwOnChange, false);
        this._NgModel_32_8.ngDoCheck(this, this._el_32, throwOnChange);
        this._NgControlStatus_32_10.ngDoCheck(this, this._el_32, throwOnChange);
        var currVal_34_0_0 = this.context.documentTypes;
        this._NgFor_34_6.check_ngForOf(currVal_34_0_0, throwOnChange, false);
        this._NgFor_34_6.ngDoCheck(this, this._anchor_34, throwOnChange);
        var currVal_37_0_0 = (this._NgModel_32_8.context.errors && (this._NgModel_32_8.context.dirty || this._NgModel_32_8.context.touched));
        this._NgIf_37_6.check_ngIf(currVal_37_0_0, throwOnChange, false);
        this._NgIf_37_6.ngDoCheck(this, this._anchor_37, throwOnChange);
        var currVal_42_0_0 = 'form-control';
        this._NgClass_42_3.check_klass(currVal_42_0_0, throwOnChange, false);
        var currVal_42_0_1 = this._map_157((this._NgModel_42_8.context.errors && (this._NgModel_49_8.context.dirty || this._NgModel_49_8.context.touched)));
        this._NgClass_42_3.check_ngClass(currVal_42_0_1, throwOnChange, false);
        this._NgClass_42_3.ngDoCheck(this, this._el_42, throwOnChange);
        this._DefaultValueAccessor_42_4.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_42_2_0 = '';
        this._RequiredValidator_42_5.check_required(currVal_42_2_0, throwOnChange, false);
        this._RequiredValidator_42_5.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_42_3_0 = 'docId';
        this._NgModel_42_8.check_name(currVal_42_3_0, throwOnChange, false);
        var currVal_42_3_1 = this.context.user.documentId;
        this._NgModel_42_8.check_model(currVal_42_3_1, throwOnChange, false);
        this._NgModel_42_8.ngDoCheck(this, this._el_42, throwOnChange);
        this._NgControlStatus_42_10.ngDoCheck(this, this._el_42, throwOnChange);
        var currVal_44_0_0 = (this._NgModel_42_8.context.errors && (this._NgModel_42_8.context.dirty || this._NgModel_42_8.context.touched));
        this._NgIf_44_6.check_ngIf(currVal_44_0_0, throwOnChange, false);
        this._NgIf_44_6.ngDoCheck(this, this._anchor_44, throwOnChange);
        var currVal_49_0_0 = 'form-control';
        this._NgClass_49_3.check_klass(currVal_49_0_0, throwOnChange, false);
        var currVal_49_0_1 = this._map_158((this._NgModel_49_8.context.errors && (this._NgModel_49_8.context.dirty || this._NgModel_49_8.context.touched)));
        this._NgClass_49_3.check_ngClass(currVal_49_0_1, throwOnChange, false);
        this._NgClass_49_3.ngDoCheck(this, this._el_49, throwOnChange);
        this._DefaultValueAccessor_49_4.ngDoCheck(this, this._el_49, throwOnChange);
        var currVal_49_2_0 = '';
        this._RequiredValidator_49_5.check_required(currVal_49_2_0, throwOnChange, false);
        this._RequiredValidator_49_5.ngDoCheck(this, this._el_49, throwOnChange);
        var currVal_49_3_0 = 'pwd';
        this._NgModel_49_8.check_name(currVal_49_3_0, throwOnChange, false);
        var currVal_49_3_1 = this.context.user.password;
        this._NgModel_49_8.check_model(currVal_49_3_1, throwOnChange, false);
        this._NgModel_49_8.ngDoCheck(this, this._el_49, throwOnChange);
        this._NgControlStatus_49_10.ngDoCheck(this, this._el_49, throwOnChange);
        var currVal_51_0_0 = (this._NgModel_49_8.context.errors && (this._NgModel_49_8.context.dirty || this._NgModel_49_8.context.touched));
        this._NgIf_51_6.check_ngIf(currVal_51_0_0, throwOnChange, false);
        this._NgIf_51_6.ngDoCheck(this, this._anchor_51, throwOnChange);
        var currVal_56_0_0 = 'form-control';
        this._NgClass_56_3.check_klass(currVal_56_0_0, throwOnChange, false);
        var currVal_56_0_1 = this._map_159((this._NgModel_56_8.context.errors && (this._NgModel_49_8.context.dirty || this._NgModel_49_8.context.touched)));
        this._NgClass_56_3.check_ngClass(currVal_56_0_1, throwOnChange, false);
        this._NgClass_56_3.ngDoCheck(this, this._el_56, throwOnChange);
        this._SelectControlValueAccessor_56_4.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_56_2_0 = '';
        this._RequiredValidator_56_5.check_required(currVal_56_2_0, throwOnChange, false);
        this._RequiredValidator_56_5.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_56_3_0 = 'userType';
        this._NgModel_56_8.check_name(currVal_56_3_0, throwOnChange, false);
        var currVal_56_3_1 = this.context.user.userType;
        this._NgModel_56_8.check_model(currVal_56_3_1, throwOnChange, false);
        this._NgModel_56_8.ngDoCheck(this, this._el_56, throwOnChange);
        this._NgControlStatus_56_10.ngDoCheck(this, this._el_56, throwOnChange);
        var currVal_58_0_0 = this.context.userTypes;
        this._NgFor_58_6.check_ngForOf(currVal_58_0_0, throwOnChange, false);
        this._NgFor_58_6.ngDoCheck(this, this._anchor_58, throwOnChange);
        var currVal_61_0_0 = (this._NgModel_56_8.context.errors && (this._NgModel_56_8.context.dirty || this._NgModel_56_8.context.touched));
        this._NgIf_61_6.check_ngIf(currVal_61_0_0, throwOnChange, false);
        this._NgIf_61_6.ngDoCheck(this, this._anchor_61, throwOnChange);
        var currVal_71_0_0 = this._arr_161('/forgot');
        this._RouterLink_71_3.check_routerLink(currVal_71_0_0, throwOnChange, false);
        this._RouterLink_71_3.ngDoCheck(this, this._el_71, throwOnChange);
        var currVal_74_0_0 = this.context.isLoading;
        this._NgIf_74_6.check_ngIf(currVal_74_0_0, throwOnChange, false);
        this._NgIf_74_6.ngDoCheck(this, this._anchor_74, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_34.detectChangesInNestedViews(throwOnChange);
        this._vc_37.detectChangesInNestedViews(throwOnChange);
        this._vc_44.detectChangesInNestedViews(throwOnChange);
        this._vc_51.detectChangesInNestedViews(throwOnChange);
        this._vc_58.detectChangesInNestedViews(throwOnChange);
        this._vc_61.detectChangesInNestedViews(throwOnChange);
        this._vc_74.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_26_5.checkHost(this, this, this._el_26, throwOnChange);
        this._RequiredValidator_32_5.checkHost(this, this, this._el_32, throwOnChange);
        this._NgControlStatus_32_10.checkHost(this, this, this._el_32, throwOnChange);
        this._RequiredValidator_42_5.checkHost(this, this, this._el_42, throwOnChange);
        this._NgControlStatus_42_10.checkHost(this, this, this._el_42, throwOnChange);
        this._RequiredValidator_49_5.checkHost(this, this, this._el_49, throwOnChange);
        this._NgControlStatus_49_10.checkHost(this, this, this._el_49, throwOnChange);
        this._RequiredValidator_56_5.checkHost(this, this, this._el_56, throwOnChange);
        this._NgControlStatus_56_10.checkHost(this, this, this._el_56, throwOnChange);
        var currVal_160 = !this._NgForm_26_3.context.valid;
        if (import3.checkBinding(throwOnChange, this._expr_160, currVal_160)) {
            this.renderer.setElementProperty(this._el_68, 'disabled', currVal_160);
            this._expr_160 = currVal_160;
        }
    };
    View_LoginComponent0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_34.destroyNestedViews();
        this._vc_37.destroyNestedViews();
        this._vc_44.destroyNestedViews();
        this._vc_51.destroyNestedViews();
        this._vc_58.destroyNestedViews();
        this._vc_61.destroyNestedViews();
        this._vc_74.destroyNestedViews();
        this._NgModel_32_8.ngOnDestroy();
        this._NgModel_42_8.ngOnDestroy();
        this._NgModel_49_8.ngOnDestroy();
        this._NgModel_56_8.ngOnDestroy();
        this._NgForm_26_3.ngOnDestroy();
    };
    View_LoginComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_LoginComponent1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 34)) {
            return new View_LoginComponent2(this.viewUtils, this, 34, this._anchor_34, this._vc_34);
        }
        if ((nodeIndex == 37)) {
            return new View_LoginComponent3(this.viewUtils, this, 37, this._anchor_37, this._vc_37);
        }
        if ((nodeIndex == 44)) {
            return new View_LoginComponent5(this.viewUtils, this, 44, this._anchor_44, this._vc_44);
        }
        if ((nodeIndex == 51)) {
            return new View_LoginComponent7(this.viewUtils, this, 51, this._anchor_51, this._vc_51);
        }
        if ((nodeIndex == 58)) {
            return new View_LoginComponent9(this.viewUtils, this, 58, this._anchor_58, this._vc_58);
        }
        if ((nodeIndex == 61)) {
            return new View_LoginComponent10(this.viewUtils, this, 61, this._anchor_61, this._vc_61);
        }
        if ((nodeIndex == 74)) {
            return new View_LoginComponent12(this.viewUtils, this, 74, this._anchor_74, this._vc_74);
        }
        return null;
    };
    View_LoginComponent0.prototype.handleEvent_26 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_26_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = ((this._NgForm_26_3.context.form.valid && this.context.login()) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LoginComponent0.prototype.handleEvent_32 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_32_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.user.documentType = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LoginComponent0.prototype.handleEvent_42 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_42_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.user.documentId = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LoginComponent0.prototype.handleEvent_49 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_49_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.user.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LoginComponent0.prototype.handleEvent_56 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_56_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.context.user.userType = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_LoginComponent0.prototype.handleEvent_71 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_71_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_LoginComponent0;
}(import1.AppView));
export { View_LoginComponent0 };

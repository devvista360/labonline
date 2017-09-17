var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/users/components/user.component';
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
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory';
import * as import20 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import22 from '@angular/forms/src/directives/checkbox_value_accessor';
import * as import23 from '@angular/forms/src/directives/control_value_accessor';
import * as import24 from '@angular/forms/src/directives/ng_model';
import * as import25 from '@angular/forms/src/directives/ng_control';
import * as import26 from '@angular/forms/src/directives/ng_control_status';
import * as import27 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import28 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import29 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import30 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import31 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import32 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import33 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import34 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import35 from '@angular/core/src/linker/template_ref';
import * as import36 from '@angular/common/src/directives/ng_class';
import * as import37 from '@angular/forms/src/directives/default_value_accessor';
import * as import38 from '@angular/forms/src/directives/validators';
import * as import39 from '@angular/forms/src/validators';
import * as import40 from '@angular/common/src/directives/ng_if';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from '@angular/forms/src/directives/ng_form';
import * as import43 from '@angular/forms/src/directives/control_container';
import * as import44 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import45 from '@angular/router/src/router_state';
import * as import46 from '@angular/common/src/location/location_strategy';
import * as import47 from '@angular/router/src/directives/router_link';
var Wrapper_UserComponent = (function () {
    function Wrapper_UserComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.UserComponent(p0, p1, p2);
    }
    Wrapper_UserComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_UserComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_UserComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_UserComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_UserComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_UserComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_UserComponent;
}());
export { Wrapper_UserComponent };
var renderType_UserComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_UserComponent_Host0 = (function (_super) {
    __extends(View_UserComponent_Host0, _super);
    function View_UserComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_UserComponent_Host0, renderType_UserComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_UserComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'user-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_UserComponent0(this.viewUtils, this, 0, this._el_0);
        this._UserComponent_0_3 = new Wrapper_UserComponent(this.injectorGet(import8.Configuration, this.parentIndex), this.injectorGet(import9.AccountService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._UserComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._UserComponent_0_3.context);
    };
    View_UserComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.UserComponent) && (0 === requestNodeIndex))) {
            return this._UserComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_UserComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._UserComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_UserComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_UserComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent_Host0;
}(import1.AppView));
export var UserComponentNgFactory = new import7.ComponentFactory('user-component', View_UserComponent_Host0, import0.UserComponent);
var styles_UserComponent = [];
var View_UserComponent1 = (function (_super) {
    __extends(View_UserComponent1, _super);
    function View_UserComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent1, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_UserComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_UserComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent1;
}(import1.AppView));
var View_UserComponent3 = (function (_super) {
    __extends(View_UserComponent3, _super);
    function View_UserComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent3, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                El nombre es requerido.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent3;
}(import1.AppView));
var View_UserComponent4 = (function (_super) {
    __extends(View_UserComponent4, _super);
    function View_UserComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent4, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                Los apellidos son requeridos.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent4;
}(import1.AppView));
var View_UserComponent5 = (function (_super) {
    __extends(View_UserComponent5, _super);
    function View_UserComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent5, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import16.ElementRef(this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_24_4.context);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import16.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import18.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_UserComponent5.prototype.detectChangesInternal = function (throwOnChange) {
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
    View_UserComponent5.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_UserComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent5;
}(import1.AppView));
var View_UserComponent6 = (function (_super) {
    __extends(View_UserComponent6, _super);
    function View_UserComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent6, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                El tipo de documento es requerido.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent6;
}(import1.AppView));
var View_UserComponent7 = (function (_super) {
    __extends(View_UserComponent7, _super);
    function View_UserComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent7, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                El documento es requerido.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent7;
}(import1.AppView));
var View_UserComponent8 = (function (_super) {
    __extends(View_UserComponent8, _super);
    function View_UserComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent8, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                El correo es requerido.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent8;
}(import1.AppView));
var View_UserComponent9 = (function (_super) {
    __extends(View_UserComponent9, _super);
    function View_UserComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent9, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_4 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'option', import3.EMPTY_INLINE_ARRAY, null);
        this._NgSelectOption_0_3 = new import14.Wrapper_NgSelectOption(new import16.ElementRef(this._el_0), this.renderer, this.parentView._SelectControlValueAccessor_48_4.context);
        this._NgSelectMultipleOption_0_4 = new import15.Wrapper_NgSelectMultipleOption(new import16.ElementRef(this._el_0), this.renderer, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import17.NgSelectOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectOption_0_3.context;
        }
        if (((token === import18.NgSelectMultipleOption) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._NgSelectMultipleOption_0_4.context;
        }
        return notFoundResult;
    };
    View_UserComponent9.prototype.detectChangesInternal = function (throwOnChange) {
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
    View_UserComponent9.prototype.destroyInternal = function () {
        this._NgSelectOption_0_3.ngOnDestroy();
        this._NgSelectMultipleOption_0_4.ngOnDestroy();
    };
    View_UserComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent9;
}(import1.AppView));
var View_UserComponent10 = (function (_super) {
    __extends(View_UserComponent10, _super);
    function View_UserComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent10, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                El tipo de usuario es requerido.\n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent10;
}(import1.AppView));
var View_UserComponent11 = (function (_super) {
    __extends(View_UserComponent11, _super);
    function View_UserComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent11, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'name', 'isActive', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_2_3 = new import19.Wrapper_CheckboxControlValueAccessor(this.renderer, new import16.ElementRef(this._el_2));
        this._NG_VALUE_ACCESSOR_2_4 = [this._CheckboxControlValueAccessor_2_3.context];
        this._NgModel_2_5 = new import20.Wrapper_NgModel(this.parentView._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_2_4);
        this._NgControl_2_6 = this._NgModel_2_5.context;
        this._NgControlStatus_2_7 = new import21.Wrapper_NgControlStatus(this._NgControl_2_6);
        this._text_3 = this.renderer.createText(this._el_0, 'Cuenta activa', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'name', 'isSendMail', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_6_3 = new import19.Wrapper_CheckboxControlValueAccessor(this.renderer, new import16.ElementRef(this._el_6));
        this._NG_VALUE_ACCESSOR_6_4 = [this._CheckboxControlValueAccessor_6_3.context];
        this._NgModel_6_5 = new import20.Wrapper_NgModel(this.parentView._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_6_4);
        this._NgControl_6_6 = this._NgModel_6_5.context;
        this._NgControlStatus_6_7 = new import21.Wrapper_NgControlStatus(this._NgControl_6_6);
        this._text_7 = this.renderer.createText(this._el_0, 'Enviar correo activación', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'input', new import3.InlineArray4(4, 'name', 'isResetPassword', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_10_3 = new import19.Wrapper_CheckboxControlValueAccessor(this.renderer, new import16.ElementRef(this._el_10));
        this._NG_VALUE_ACCESSOR_10_4 = [this._CheckboxControlValueAccessor_10_3.context];
        this._NgModel_10_5 = new import20.Wrapper_NgModel(this.parentView._ControlContainer_6_4, null, null, this._NG_VALUE_ACCESSOR_10_4);
        this._NgControl_10_6 = this._NgModel_10_5.context;
        this._NgControlStatus_10_7 = new import21.Wrapper_NgControlStatus(this._NgControl_10_6);
        this._text_11 = this.renderer.createText(this._el_0, 'Reiniciar contraseña', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_2));
        this._NgModel_2_5.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_6));
        this._NgModel_6_5.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_5.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
            this._el_12,
            this._text_13
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_UserComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.CheckboxControlValueAccessor) && (2 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_2_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (2 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_2_4;
        }
        if (((token === import24.NgModel) && (2 === requestNodeIndex))) {
            return this._NgModel_2_5.context;
        }
        if (((token === import25.NgControl) && (2 === requestNodeIndex))) {
            return this._NgControl_2_6;
        }
        if (((token === import26.NgControlStatus) && (2 === requestNodeIndex))) {
            return this._NgControlStatus_2_7.context;
        }
        if (((token === import22.CheckboxControlValueAccessor) && (6 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_6_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (6 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_6_4;
        }
        if (((token === import24.NgModel) && (6 === requestNodeIndex))) {
            return this._NgModel_6_5.context;
        }
        if (((token === import25.NgControl) && (6 === requestNodeIndex))) {
            return this._NgControl_6_6;
        }
        if (((token === import26.NgControlStatus) && (6 === requestNodeIndex))) {
            return this._NgControlStatus_6_7.context;
        }
        if (((token === import22.CheckboxControlValueAccessor) && (10 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_10_3.context;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_4;
        }
        if (((token === import24.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_5.context;
        }
        if (((token === import25.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_6;
        }
        if (((token === import26.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_7.context;
        }
        return notFoundResult;
    };
    View_UserComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        this._CheckboxControlValueAccessor_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        var currVal_2_1_0 = 'isActive';
        this._NgModel_2_5.check_name(currVal_2_1_0, throwOnChange, false);
        var currVal_2_1_1 = this.parentView.parentView.context.user.isActive;
        this._NgModel_2_5.check_model(currVal_2_1_1, throwOnChange, false);
        this._NgModel_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatus_2_7.ngDoCheck(this, this._el_2, throwOnChange);
        this._CheckboxControlValueAccessor_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_6_1_0 = 'isSendMail';
        this._NgModel_6_5.check_name(currVal_6_1_0, throwOnChange, false);
        var currVal_6_1_1 = this.parentView.parentView.context.user.isSendMail;
        this._NgModel_6_5.check_model(currVal_6_1_1, throwOnChange, false);
        this._NgModel_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatus_6_7.ngDoCheck(this, this._el_6, throwOnChange);
        this._CheckboxControlValueAccessor_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_1_0 = 'isResetPassword';
        this._NgModel_10_5.check_name(currVal_10_1_0, throwOnChange, false);
        var currVal_10_1_1 = this.parentView.parentView.context.user.isResetPassword;
        this._NgModel_10_5.check_model(currVal_10_1_1, throwOnChange, false);
        this._NgModel_10_5.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_7.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_2_7.checkHost(this, this, this._el_2, throwOnChange);
        this._NgControlStatus_6_7.checkHost(this, this, this._el_6, throwOnChange);
        this._NgControlStatus_10_7.checkHost(this, this, this._el_10, throwOnChange);
    };
    View_UserComponent11.prototype.destroyInternal = function () {
        this._NgModel_2_5.ngOnDestroy();
        this._NgModel_6_5.ngOnDestroy();
        this._NgModel_10_5.ngOnDestroy();
    };
    View_UserComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent11.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.user.isActive = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent11.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.user.isSendMail = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent11.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.parentView.context.user.isResetPassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent11;
}(import1.AppView));
var View_UserComponent12 = (function (_super) {
    __extends(View_UserComponent12, _super);
    function View_UserComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent12, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, ' ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray4(4, 'class', 'btn btn-danger btn-sm', 'type', 'button'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'Borrar', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_2));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), [disposable_0]);
        return null;
    };
    View_UserComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent12.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.parentView.context.delete() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent12;
}(import1.AppView));
var View_UserComponent2 = (function (_super) {
    __extends(View_UserComponent2, _super);
    function View_UserComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent2, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_153 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_154 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_155 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_156 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_157 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._map_158 = import3.pureProxy1(function (p0) {
            return { InputError: p0 };
        });
        _this._expr_159 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'style', 'margin-bottom: 15px; border-radius: 6px; padding: 10px; background-color: #eee; box-sizing: border-box;'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'form', new import3.InlineArray4(4, 'class', 'form-inline', 'novalidate', ''), null);
        this._NgForm_6_3 = new import27.Wrapper_NgForm(null, null);
        this._ControlContainer_6_4 = this._NgForm_6_3.context;
        this._NgControlStatusGroup_6_5 = new import21.Wrapper_NgControlStatusGroup(this._ControlContainer_6_4);
        this._text_7 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n                            ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'form-control input-sm text-uppercase', 'id', 'firstName', 'name', 'firstName', 'placeholder', 'NOMBRES', 'required', '', 'type', 'text'), null);
        this._NgClass_10_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_10), this.renderer);
        this._DefaultValueAccessor_10_4 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_10));
        this._RequiredValidator_10_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_10_6 = [this._RequiredValidator_10_5.context];
        this._NG_VALUE_ACCESSOR_10_7 = [this._DefaultValueAccessor_10_4.context];
        this._NgModel_10_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_10_6, null, this._NG_VALUE_ACCESSOR_10_7);
        this._NgControl_10_9 = this._NgModel_10_8.context;
        this._NgControlStatus_10_10 = new import21.Wrapper_NgControlStatus(this._NgControl_10_9);
        this._text_11 = this.renderer.createText(this._el_8, '\n                            ', null);
        this._anchor_12 = this.renderer.createTemplateAnchor(this._el_8, null);
        this._vc_12 = new import11.ViewContainer(12, 8, this, this._anchor_12);
        this._TemplateRef_12_5 = new import35.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import31.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_8, '\n                        ', null);
        this._text_14 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'form-control input-sm text-uppercase', 'id', 'lastName', 'name', 'lastName', 'placeholder', 'APELLIDOS', 'required', '', 'type', 'text'), null);
        this._NgClass_17_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_17), this.renderer);
        this._DefaultValueAccessor_17_4 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_17));
        this._RequiredValidator_17_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_17_6 = [this._RequiredValidator_17_5.context];
        this._NG_VALUE_ACCESSOR_17_7 = [this._DefaultValueAccessor_17_4.context];
        this._NgModel_17_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_17_6, null, this._NG_VALUE_ACCESSOR_17_7);
        this._NgControl_17_9 = this._NgModel_17_8.context;
        this._NgControlStatus_17_10 = new import21.Wrapper_NgControlStatus(this._NgControl_17_9);
        this._text_18 = this.renderer.createText(this._el_15, '\n                            ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_15, null);
        this._vc_19 = new import11.ViewContainer(19, 15, this, this._anchor_19);
        this._TemplateRef_19_5 = new import35.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import31.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_15, '\n                        ', null);
        this._text_21 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n                            ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'documentType', 'name', 'documentType', 'required', ''), null);
        this._NgClass_24_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_24), this.renderer);
        this._SelectControlValueAccessor_24_4 = new import14.Wrapper_SelectControlValueAccessor(this.renderer, new import16.ElementRef(this._el_24));
        this._RequiredValidator_24_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_24_6 = [this._RequiredValidator_24_5.context];
        this._NG_VALUE_ACCESSOR_24_7 = [this._SelectControlValueAccessor_24_4.context];
        this._NgModel_24_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_24_6, null, this._NG_VALUE_ACCESSOR_24_7);
        this._NgControl_24_9 = this._NgModel_24_8.context;
        this._NgControlStatus_24_10 = new import21.Wrapper_NgControlStatus(this._NgControl_24_9);
        this._text_25 = this.renderer.createText(this._el_24, '\n                                ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_26 = new import11.ViewContainer(26, 24, this, this._anchor_26);
        this._TemplateRef_26_5 = new import35.TemplateRef_(this, 26, this._anchor_26);
        this._NgFor_26_6 = new import32.Wrapper_NgFor(this._vc_26.vcRef, this._TemplateRef_26_5, this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_27 = this.renderer.createText(this._el_24, '\n                            ', null);
        this._text_28 = this.renderer.createText(this._el_22, '\n                            ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_29 = new import11.ViewContainer(29, 22, this, this._anchor_29);
        this._TemplateRef_29_5 = new import35.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import31.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_22, '\n                        ', null);
        this._text_31 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_33 = this.renderer.createText(this._el_32, '\n                            ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_32, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'form-control input-sm text-uppercase', 'id', 'documentId', 'name', 'documentId', 'placeholder', 'DOCUMENTO', 'required', '', 'type', 'text'), null);
        this._NgClass_34_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_34), this.renderer);
        this._DefaultValueAccessor_34_4 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_34));
        this._RequiredValidator_34_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_34_6 = [this._RequiredValidator_34_5.context];
        this._NG_VALUE_ACCESSOR_34_7 = [this._DefaultValueAccessor_34_4.context];
        this._NgModel_34_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_34_6, null, this._NG_VALUE_ACCESSOR_34_7);
        this._NgControl_34_9 = this._NgModel_34_8.context;
        this._NgControlStatus_34_10 = new import21.Wrapper_NgControlStatus(this._NgControl_34_9);
        this._text_35 = this.renderer.createText(this._el_32, '\n                            ', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(this._el_32, null);
        this._vc_36 = new import11.ViewContainer(36, 32, this, this._anchor_36);
        this._TemplateRef_36_5 = new import35.TemplateRef_(this, 36, this._anchor_36);
        this._NgIf_36_6 = new import31.Wrapper_NgIf(this._vc_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(this._el_32, '\n                        ', null);
        this._text_38 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_40 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._el_41 = import3.createRenderElement(this.renderer, this._el_39, 'input', new import3.InlineArray16(14, 'autocomplete', 'off', 'class', 'form-control input-sm', 'id', 'email', 'name', 'email', 'placeholder', 'CORREO', 'required', '', 'type', 'email'), null);
        this._NgClass_41_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_41), this.renderer);
        this._DefaultValueAccessor_41_4 = new import29.Wrapper_DefaultValueAccessor(this.renderer, new import16.ElementRef(this._el_41));
        this._RequiredValidator_41_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_41_6 = [this._RequiredValidator_41_5.context];
        this._NG_VALUE_ACCESSOR_41_7 = [this._DefaultValueAccessor_41_4.context];
        this._NgModel_41_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_41_6, null, this._NG_VALUE_ACCESSOR_41_7);
        this._NgControl_41_9 = this._NgModel_41_8.context;
        this._NgControlStatus_41_10 = new import21.Wrapper_NgControlStatus(this._NgControl_41_9);
        this._text_42 = this.renderer.createText(this._el_39, '\n                            ', null);
        this._anchor_43 = this.renderer.createTemplateAnchor(this._el_39, null);
        this._vc_43 = new import11.ViewContainer(43, 39, this, this._anchor_43);
        this._TemplateRef_43_5 = new import35.TemplateRef_(this, 43, this._anchor_43);
        this._NgIf_43_6 = new import31.Wrapper_NgIf(this._vc_43.vcRef, this._TemplateRef_43_5);
        this._text_44 = this.renderer.createText(this._el_39, '\n                        ', null);
        this._text_45 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_47 = this.renderer.createText(this._el_46, '\n                            ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'select', new import3.InlineArray8(8, 'class', 'form-control', 'id', 'userType', 'name', 'userType', 'required', ''), null);
        this._NgClass_48_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_48), this.renderer);
        this._SelectControlValueAccessor_48_4 = new import14.Wrapper_SelectControlValueAccessor(this.renderer, new import16.ElementRef(this._el_48));
        this._RequiredValidator_48_5 = new import30.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_48_6 = [this._RequiredValidator_48_5.context];
        this._NG_VALUE_ACCESSOR_48_7 = [this._SelectControlValueAccessor_48_4.context];
        this._NgModel_48_8 = new import20.Wrapper_NgModel(this._ControlContainer_6_4, this._NG_VALIDATORS_48_6, null, this._NG_VALUE_ACCESSOR_48_7);
        this._NgControl_48_9 = this._NgModel_48_8.context;
        this._NgControlStatus_48_10 = new import21.Wrapper_NgControlStatus(this._NgControl_48_9);
        this._text_49 = this.renderer.createText(this._el_48, '\n                                ', null);
        this._anchor_50 = this.renderer.createTemplateAnchor(this._el_48, null);
        this._vc_50 = new import11.ViewContainer(50, 48, this, this._anchor_50);
        this._TemplateRef_50_5 = new import35.TemplateRef_(this, 50, this._anchor_50);
        this._NgFor_50_6 = new import32.Wrapper_NgFor(this._vc_50.vcRef, this._TemplateRef_50_5, this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_51 = this.renderer.createText(this._el_48, '\n                            ', null);
        this._text_52 = this.renderer.createText(this._el_46, '\n                            ', null);
        this._anchor_53 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._vc_53 = new import11.ViewContainer(53, 46, this, this._anchor_53);
        this._TemplateRef_53_5 = new import35.TemplateRef_(this, 53, this._anchor_53);
        this._NgIf_53_6 = new import31.Wrapper_NgIf(this._vc_53.vcRef, this._TemplateRef_53_5);
        this._text_54 = this.renderer.createText(this._el_46, '\n                        ', null);
        this._text_55 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._anchor_56 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_56 = new import11.ViewContainer(56, 6, this, this._anchor_56);
        this._TemplateRef_56_5 = new import35.TemplateRef_(this, 56, this._anchor_56);
        this._NgIf_56_6 = new import31.Wrapper_NgIf(this._vc_56.vcRef, this._TemplateRef_56_5);
        this._text_57 = this.renderer.createText(this._el_6, '\n                        ', null);
        this._el_58 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_59 = this.renderer.createText(this._el_58, '\n                             ', null);
        this._el_60 = import3.createRenderElement(this.renderer, this._el_58, 'button', new import3.InlineArray4(4, 'class', 'btn btn-warning btn-sm', 'type', 'submit'), null);
        this._text_61 = this.renderer.createText(this._el_60, 'Guardar', null);
        this._text_62 = this.renderer.createText(this._el_58, '\n                            ', null);
        this._anchor_63 = this.renderer.createTemplateAnchor(this._el_58, null);
        this._vc_63 = new import11.ViewContainer(63, 58, this, this._anchor_63);
        this._TemplateRef_63_5 = new import35.TemplateRef_(this, 63, this._anchor_63);
        this._NgIf_63_6 = new import31.Wrapper_NgIf(this._vc_63.vcRef, this._TemplateRef_63_5);
        this._text_64 = this.renderer.createText(this._el_58, '\n                             ', null);
        this._el_65 = import3.createRenderElement(this.renderer, this._el_58, 'button', new import3.InlineArray4(4, 'class', 'btn btn-cancel btn-sm', 'type', 'button'), null);
        this._text_66 = this.renderer.createText(this._el_65, 'Cancelar', null);
        this._text_67 = this.renderer.createText(this._el_58, '\n                        ', null);
        this._text_68 = this.renderer.createText(this._el_6, '\n                    ', null);
        this._text_69 = this.renderer.createText(this._el_4, '\n                ', null);
        this._text_70 = this.renderer.createText(this._el_2, '\n            ', null);
        this._text_71 = this.renderer.createText(this._el_0, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_6, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_6));
        this._NgForm_6_3.subscribe(this, this.eventHandler(this.handleEvent_6), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_10));
        this._NgModel_10_8.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_8.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_24, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_24));
        this._NgModel_24_8.subscribe(this, this.eventHandler(this.handleEvent_24), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_34, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_34));
        this._NgModel_34_8.subscribe(this, this.eventHandler(this.handleEvent_34), true);
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_41, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_41));
        this._NgModel_41_8.subscribe(this, this.eventHandler(this.handleEvent_41), true);
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_48, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_48));
        this._NgModel_48_8.subscribe(this, this.eventHandler(this.handleEvent_48), true);
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_65, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_65));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._anchor_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._anchor_50,
            this._text_51,
            this._text_52,
            this._anchor_53,
            this._text_54,
            this._text_55,
            this._anchor_56,
            this._text_57,
            this._el_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._text_62,
            this._anchor_63,
            this._text_64,
            this._el_65,
            this._text_66,
            this._text_67,
            this._text_68,
            this._text_69,
            this._text_70,
            this._text_71
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ]);
        return null;
    };
    View_UserComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.NgClass) && (10 === requestNodeIndex))) {
            return this._NgClass_10_3.context;
        }
        if (((token === import37.DefaultValueAccessor) && (10 === requestNodeIndex))) {
            return this._DefaultValueAccessor_10_4.context;
        }
        if (((token === import38.RequiredValidator) && (10 === requestNodeIndex))) {
            return this._RequiredValidator_10_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && (10 === requestNodeIndex))) {
            return this._NG_VALIDATORS_10_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (10 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_10_7;
        }
        if (((token === import24.NgModel) && (10 === requestNodeIndex))) {
            return this._NgModel_10_8.context;
        }
        if (((token === import25.NgControl) && (10 === requestNodeIndex))) {
            return this._NgControl_10_9;
        }
        if (((token === import26.NgControlStatus) && (10 === requestNodeIndex))) {
            return this._NgControlStatus_10_10.context;
        }
        if (((token === import35.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import40.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import36.NgClass) && (17 === requestNodeIndex))) {
            return this._NgClass_17_3.context;
        }
        if (((token === import37.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_4.context;
        }
        if (((token === import38.RequiredValidator) && (17 === requestNodeIndex))) {
            return this._RequiredValidator_17_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && (17 === requestNodeIndex))) {
            return this._NG_VALIDATORS_17_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_7;
        }
        if (((token === import24.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_8.context;
        }
        if (((token === import25.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_9;
        }
        if (((token === import26.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_10.context;
        }
        if (((token === import35.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import40.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import35.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import41.NgFor) && (26 === requestNodeIndex))) {
            return this._NgFor_26_6.context;
        }
        if (((token === import36.NgClass) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgClass_24_3.context;
        }
        if (((token === import17.SelectControlValueAccessor) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._SelectControlValueAccessor_24_4.context;
        }
        if (((token === import38.RequiredValidator) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._RequiredValidator_24_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NG_VALIDATORS_24_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NG_VALUE_ACCESSOR_24_7;
        }
        if (((token === import24.NgModel) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgModel_24_8.context;
        }
        if (((token === import25.NgControl) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgControl_24_9;
        }
        if (((token === import26.NgControlStatus) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgControlStatus_24_10.context;
        }
        if (((token === import35.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import40.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import36.NgClass) && (34 === requestNodeIndex))) {
            return this._NgClass_34_3.context;
        }
        if (((token === import37.DefaultValueAccessor) && (34 === requestNodeIndex))) {
            return this._DefaultValueAccessor_34_4.context;
        }
        if (((token === import38.RequiredValidator) && (34 === requestNodeIndex))) {
            return this._RequiredValidator_34_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && (34 === requestNodeIndex))) {
            return this._NG_VALIDATORS_34_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (34 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_34_7;
        }
        if (((token === import24.NgModel) && (34 === requestNodeIndex))) {
            return this._NgModel_34_8.context;
        }
        if (((token === import25.NgControl) && (34 === requestNodeIndex))) {
            return this._NgControl_34_9;
        }
        if (((token === import26.NgControlStatus) && (34 === requestNodeIndex))) {
            return this._NgControlStatus_34_10.context;
        }
        if (((token === import35.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import40.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import36.NgClass) && (41 === requestNodeIndex))) {
            return this._NgClass_41_3.context;
        }
        if (((token === import37.DefaultValueAccessor) && (41 === requestNodeIndex))) {
            return this._DefaultValueAccessor_41_4.context;
        }
        if (((token === import38.RequiredValidator) && (41 === requestNodeIndex))) {
            return this._RequiredValidator_41_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && (41 === requestNodeIndex))) {
            return this._NG_VALIDATORS_41_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && (41 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_41_7;
        }
        if (((token === import24.NgModel) && (41 === requestNodeIndex))) {
            return this._NgModel_41_8.context;
        }
        if (((token === import25.NgControl) && (41 === requestNodeIndex))) {
            return this._NgControl_41_9;
        }
        if (((token === import26.NgControlStatus) && (41 === requestNodeIndex))) {
            return this._NgControlStatus_41_10.context;
        }
        if (((token === import35.TemplateRef) && (43 === requestNodeIndex))) {
            return this._TemplateRef_43_5;
        }
        if (((token === import40.NgIf) && (43 === requestNodeIndex))) {
            return this._NgIf_43_6.context;
        }
        if (((token === import35.TemplateRef) && (50 === requestNodeIndex))) {
            return this._TemplateRef_50_5;
        }
        if (((token === import41.NgFor) && (50 === requestNodeIndex))) {
            return this._NgFor_50_6.context;
        }
        if (((token === import36.NgClass) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NgClass_48_3.context;
        }
        if (((token === import17.SelectControlValueAccessor) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._SelectControlValueAccessor_48_4.context;
        }
        if (((token === import38.RequiredValidator) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._RequiredValidator_48_5.context;
        }
        if (((token === import39.NG_VALIDATORS) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NG_VALIDATORS_48_6;
        }
        if (((token === import23.NG_VALUE_ACCESSOR) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NG_VALUE_ACCESSOR_48_7;
        }
        if (((token === import24.NgModel) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NgModel_48_8.context;
        }
        if (((token === import25.NgControl) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NgControl_48_9;
        }
        if (((token === import26.NgControlStatus) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 51)))) {
            return this._NgControlStatus_48_10.context;
        }
        if (((token === import35.TemplateRef) && (53 === requestNodeIndex))) {
            return this._TemplateRef_53_5;
        }
        if (((token === import40.NgIf) && (53 === requestNodeIndex))) {
            return this._NgIf_53_6.context;
        }
        if (((token === import35.TemplateRef) && (56 === requestNodeIndex))) {
            return this._TemplateRef_56_5;
        }
        if (((token === import40.NgIf) && (56 === requestNodeIndex))) {
            return this._NgIf_56_6.context;
        }
        if (((token === import35.TemplateRef) && (63 === requestNodeIndex))) {
            return this._TemplateRef_63_5;
        }
        if (((token === import40.NgIf) && (63 === requestNodeIndex))) {
            return this._NgIf_63_6.context;
        }
        if (((token === import42.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._NgForm_6_3.context;
        }
        if (((token === import43.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._ControlContainer_6_4;
        }
        if (((token === import26.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 68)))) {
            return this._NgControlStatusGroup_6_5.context;
        }
        return notFoundResult;
    };
    View_UserComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_6_3.ngDoCheck(this, this._el_6, throwOnChange);
        this._NgControlStatusGroup_6_5.ngDoCheck(this, this._el_6, throwOnChange);
        var currVal_10_0_0 = 'form-control input-sm text-uppercase';
        this._NgClass_10_3.check_klass(currVal_10_0_0, throwOnChange, false);
        var currVal_10_0_1 = this._map_153((this._NgModel_10_8.context.errors && (this._NgModel_10_8.context.dirty || this._NgModel_10_8.context.touched)));
        this._NgClass_10_3.check_ngClass(currVal_10_0_1, throwOnChange, false);
        this._NgClass_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_10_4.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_2_0 = '';
        this._RequiredValidator_10_5.check_required(currVal_10_2_0, throwOnChange, false);
        this._RequiredValidator_10_5.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_10_3_0 = 'firstName';
        this._NgModel_10_8.check_name(currVal_10_3_0, throwOnChange, false);
        var currVal_10_3_1 = this.parentView.context.user.firstName;
        this._NgModel_10_8.check_model(currVal_10_3_1, throwOnChange, false);
        this._NgModel_10_8.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatus_10_10.ngDoCheck(this, this._el_10, throwOnChange);
        var currVal_12_0_0 = (this._NgModel_10_8.context.errors && (this._NgModel_10_8.context.dirty || this._NgModel_10_8.context.touched));
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_17_0_0 = 'form-control input-sm text-uppercase';
        this._NgClass_17_3.check_klass(currVal_17_0_0, throwOnChange, false);
        var currVal_17_0_1 = this._map_154((this._NgModel_17_8.context.errors && (this._NgModel_17_8.context.dirty || this._NgModel_17_8.context.touched)));
        this._NgClass_17_3.check_ngClass(currVal_17_0_1, throwOnChange, false);
        this._NgClass_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        this._DefaultValueAccessor_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_2_0 = '';
        this._RequiredValidator_17_5.check_required(currVal_17_2_0, throwOnChange, false);
        this._RequiredValidator_17_5.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_17_3_0 = 'lastName';
        this._NgModel_17_8.check_name(currVal_17_3_0, throwOnChange, false);
        var currVal_17_3_1 = this.parentView.context.user.lastName;
        this._NgModel_17_8.check_model(currVal_17_3_1, throwOnChange, false);
        this._NgModel_17_8.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_10.ngDoCheck(this, this._el_17, throwOnChange);
        var currVal_19_0_0 = (this._NgModel_17_8.context.errors && (this._NgModel_17_8.context.dirty || this._NgModel_17_8.context.touched));
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        var currVal_24_0_0 = 'form-control';
        this._NgClass_24_3.check_klass(currVal_24_0_0, throwOnChange, false);
        var currVal_24_0_1 = this._map_155((this._NgModel_24_8.context.errors && (this._NgModel_24_8.context.dirty || this._NgModel_24_8.context.touched)));
        this._NgClass_24_3.check_ngClass(currVal_24_0_1, throwOnChange, false);
        this._NgClass_24_3.ngDoCheck(this, this._el_24, throwOnChange);
        this._SelectControlValueAccessor_24_4.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_24_2_0 = '';
        this._RequiredValidator_24_5.check_required(currVal_24_2_0, throwOnChange, false);
        this._RequiredValidator_24_5.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_24_3_0 = 'documentType';
        this._NgModel_24_8.check_name(currVal_24_3_0, throwOnChange, false);
        var currVal_24_3_1 = this.parentView.context.user.documentType;
        this._NgModel_24_8.check_model(currVal_24_3_1, throwOnChange, false);
        this._NgModel_24_8.ngDoCheck(this, this._el_24, throwOnChange);
        this._NgControlStatus_24_10.ngDoCheck(this, this._el_24, throwOnChange);
        var currVal_26_0_0 = this.parentView.context.documentTypes;
        this._NgFor_26_6.check_ngForOf(currVal_26_0_0, throwOnChange, false);
        this._NgFor_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        var currVal_29_0_0 = (this._NgModel_24_8.context.errors && (this._NgModel_24_8.context.dirty || this._NgModel_24_8.context.touched));
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        var currVal_34_0_0 = 'form-control input-sm text-uppercase';
        this._NgClass_34_3.check_klass(currVal_34_0_0, throwOnChange, false);
        var currVal_34_0_1 = this._map_156((this._NgModel_34_8.context.errors && (this._NgModel_34_8.context.dirty || this._NgModel_34_8.context.touched)));
        this._NgClass_34_3.check_ngClass(currVal_34_0_1, throwOnChange, false);
        this._NgClass_34_3.ngDoCheck(this, this._el_34, throwOnChange);
        this._DefaultValueAccessor_34_4.ngDoCheck(this, this._el_34, throwOnChange);
        var currVal_34_2_0 = '';
        this._RequiredValidator_34_5.check_required(currVal_34_2_0, throwOnChange, false);
        this._RequiredValidator_34_5.ngDoCheck(this, this._el_34, throwOnChange);
        var currVal_34_3_0 = 'documentId';
        this._NgModel_34_8.check_name(currVal_34_3_0, throwOnChange, false);
        var currVal_34_3_1 = this.parentView.context.user.documentId;
        this._NgModel_34_8.check_model(currVal_34_3_1, throwOnChange, false);
        this._NgModel_34_8.ngDoCheck(this, this._el_34, throwOnChange);
        this._NgControlStatus_34_10.ngDoCheck(this, this._el_34, throwOnChange);
        var currVal_36_0_0 = (this._NgModel_34_8.context.errors && (this._NgModel_34_8.context.dirty || this._NgModel_34_8.context.touched));
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.ngDoCheck(this, this._anchor_36, throwOnChange);
        var currVal_41_0_0 = 'form-control input-sm';
        this._NgClass_41_3.check_klass(currVal_41_0_0, throwOnChange, false);
        var currVal_41_0_1 = this._map_157((this._NgModel_41_8.context.errors && (this._NgModel_41_8.context.dirty || this._NgModel_41_8.context.touched)));
        this._NgClass_41_3.check_ngClass(currVal_41_0_1, throwOnChange, false);
        this._NgClass_41_3.ngDoCheck(this, this._el_41, throwOnChange);
        this._DefaultValueAccessor_41_4.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_41_2_0 = '';
        this._RequiredValidator_41_5.check_required(currVal_41_2_0, throwOnChange, false);
        this._RequiredValidator_41_5.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_41_3_0 = 'email';
        this._NgModel_41_8.check_name(currVal_41_3_0, throwOnChange, false);
        var currVal_41_3_1 = this.parentView.context.user.email;
        this._NgModel_41_8.check_model(currVal_41_3_1, throwOnChange, false);
        this._NgModel_41_8.ngDoCheck(this, this._el_41, throwOnChange);
        this._NgControlStatus_41_10.ngDoCheck(this, this._el_41, throwOnChange);
        var currVal_43_0_0 = (this._NgModel_41_8.context.errors && (this._NgModel_41_8.context.dirty || this._NgModel_41_8.context.touched));
        this._NgIf_43_6.check_ngIf(currVal_43_0_0, throwOnChange, false);
        this._NgIf_43_6.ngDoCheck(this, this._anchor_43, throwOnChange);
        var currVal_48_0_0 = 'form-control';
        this._NgClass_48_3.check_klass(currVal_48_0_0, throwOnChange, false);
        var currVal_48_0_1 = this._map_158((this._NgModel_48_8.context.errors && (this._NgModel_48_8.context.dirty || this._NgModel_48_8.context.touched)));
        this._NgClass_48_3.check_ngClass(currVal_48_0_1, throwOnChange, false);
        this._NgClass_48_3.ngDoCheck(this, this._el_48, throwOnChange);
        this._SelectControlValueAccessor_48_4.ngDoCheck(this, this._el_48, throwOnChange);
        var currVal_48_2_0 = '';
        this._RequiredValidator_48_5.check_required(currVal_48_2_0, throwOnChange, false);
        this._RequiredValidator_48_5.ngDoCheck(this, this._el_48, throwOnChange);
        var currVal_48_3_0 = 'userType';
        this._NgModel_48_8.check_name(currVal_48_3_0, throwOnChange, false);
        var currVal_48_3_1 = this.parentView.context.user.userType;
        this._NgModel_48_8.check_model(currVal_48_3_1, throwOnChange, false);
        this._NgModel_48_8.ngDoCheck(this, this._el_48, throwOnChange);
        this._NgControlStatus_48_10.ngDoCheck(this, this._el_48, throwOnChange);
        var currVal_50_0_0 = this.parentView.context.userTypes;
        this._NgFor_50_6.check_ngForOf(currVal_50_0_0, throwOnChange, false);
        this._NgFor_50_6.ngDoCheck(this, this._anchor_50, throwOnChange);
        var currVal_53_0_0 = (this._NgModel_48_8.context.errors && (this._NgModel_48_8.context.dirty || this._NgModel_48_8.context.touched));
        this._NgIf_53_6.check_ngIf(currVal_53_0_0, throwOnChange, false);
        this._NgIf_53_6.ngDoCheck(this, this._anchor_53, throwOnChange);
        var currVal_56_0_0 = this.parentView.context.isEditing;
        this._NgIf_56_6.check_ngIf(currVal_56_0_0, throwOnChange, false);
        this._NgIf_56_6.ngDoCheck(this, this._anchor_56, throwOnChange);
        var currVal_63_0_0 = this.parentView.context.isEditing;
        this._NgIf_63_6.check_ngIf(currVal_63_0_0, throwOnChange, false);
        this._NgIf_63_6.ngDoCheck(this, this._anchor_63, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        this._vc_43.detectChangesInNestedViews(throwOnChange);
        this._vc_50.detectChangesInNestedViews(throwOnChange);
        this._vc_53.detectChangesInNestedViews(throwOnChange);
        this._vc_56.detectChangesInNestedViews(throwOnChange);
        this._vc_63.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_6_5.checkHost(this, this, this._el_6, throwOnChange);
        this._RequiredValidator_10_5.checkHost(this, this, this._el_10, throwOnChange);
        this._NgControlStatus_10_10.checkHost(this, this, this._el_10, throwOnChange);
        this._RequiredValidator_17_5.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_17_10.checkHost(this, this, this._el_17, throwOnChange);
        this._RequiredValidator_24_5.checkHost(this, this, this._el_24, throwOnChange);
        this._NgControlStatus_24_10.checkHost(this, this, this._el_24, throwOnChange);
        this._RequiredValidator_34_5.checkHost(this, this, this._el_34, throwOnChange);
        this._NgControlStatus_34_10.checkHost(this, this, this._el_34, throwOnChange);
        this._RequiredValidator_41_5.checkHost(this, this, this._el_41, throwOnChange);
        this._NgControlStatus_41_10.checkHost(this, this, this._el_41, throwOnChange);
        this._RequiredValidator_48_5.checkHost(this, this, this._el_48, throwOnChange);
        this._NgControlStatus_48_10.checkHost(this, this, this._el_48, throwOnChange);
        var currVal_159 = this._NgForm_6_3.context.invalid;
        if (import3.checkBinding(throwOnChange, this._expr_159, currVal_159)) {
            this.renderer.setElementProperty(this._el_60, 'disabled', currVal_159);
            this._expr_159 = currVal_159;
        }
    };
    View_UserComponent2.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_36.destroyNestedViews();
        this._vc_43.destroyNestedViews();
        this._vc_50.destroyNestedViews();
        this._vc_53.destroyNestedViews();
        this._vc_56.destroyNestedViews();
        this._vc_63.destroyNestedViews();
        this._NgModel_10_8.ngOnDestroy();
        this._NgModel_17_8.ngOnDestroy();
        this._NgModel_24_8.ngOnDestroy();
        this._NgModel_34_8.ngOnDestroy();
        this._NgModel_41_8.ngOnDestroy();
        this._NgModel_48_8.ngOnDestroy();
        this._NgForm_6_3.ngOnDestroy();
    };
    View_UserComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_UserComponent3(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 19)) {
            return new View_UserComponent4(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 26)) {
            return new View_UserComponent5(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        if ((nodeIndex == 29)) {
            return new View_UserComponent6(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 36)) {
            return new View_UserComponent7(this.viewUtils, this, 36, this._anchor_36, this._vc_36);
        }
        if ((nodeIndex == 43)) {
            return new View_UserComponent8(this.viewUtils, this, 43, this._anchor_43, this._vc_43);
        }
        if ((nodeIndex == 50)) {
            return new View_UserComponent9(this.viewUtils, this, 50, this._anchor_50, this._vc_50);
        }
        if ((nodeIndex == 53)) {
            return new View_UserComponent10(this.viewUtils, this, 53, this._anchor_53, this._vc_53);
        }
        if ((nodeIndex == 56)) {
            return new View_UserComponent11(this.viewUtils, this, 56, this._anchor_56, this._vc_56);
        }
        if ((nodeIndex == 63)) {
            return new View_UserComponent12(this.viewUtils, this, 63, this._anchor_63, this._vc_63);
        }
        return null;
    };
    View_UserComponent2.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_6_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = ((this._NgForm_6_3.context.valid && this.parentView.context.update()) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_10 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_10_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.firstName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_17 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.lastName = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_24 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_24_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.documentType = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_34 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_34_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.documentId = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_41 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_41_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.email = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_48 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._SelectControlValueAccessor_48_4.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.userType = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent2.prototype.handleEvent_65 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            this.parentView.context.cancel();
            var pd_sub_0 = (this._NgForm_6_3.context.reset() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent2;
}(import1.AppView));
var View_UserComponent13 = (function (_super) {
    __extends(View_UserComponent13, _super);
    function View_UserComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_UserComponent13, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_UserComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_UserComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent13;
}(import1.AppView));
var View_UserComponent14 = (function (_super) {
    __extends(View_UserComponent14, _super);
    function View_UserComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent14, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_6 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_7 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_0), this.renderer);
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
    View_UserComponent14.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_UserComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_6((this.parentView.context.grid.pageSize == this.context.$implicit));
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_UserComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent14.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.setPageSize(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent14;
}(import1.AppView));
var View_UserComponent15 = (function (_super) {
    __extends(View_UserComponent15, _super);
    function View_UserComponent15(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent15, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_6 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_7 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import28.Wrapper_NgClass(this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import34.KeyValueDiffers, this.parentView.parentIndex), new import16.ElementRef(this._el_0), this.renderer);
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
    View_UserComponent15.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_UserComponent15.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_6((this.parentView.context.grid.currentPage == this.context.$implicit));
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_UserComponent15.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent15.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.setPage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent15;
}(import1.AppView));
var View_UserComponent16 = (function (_super) {
    __extends(View_UserComponent16, _super);
    function View_UserComponent16(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent16, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent16.prototype.createInternal = function (rootSelector) {
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
    View_UserComponent16.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_UserComponent16.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent16.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.sort(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent16;
}(import1.AppView));
var View_UserComponent18 = (function (_super) {
    __extends(View_UserComponent18, _super);
    function View_UserComponent18(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent18, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import12.UNINITIALIZED;
        return _this;
    }
    View_UserComponent18.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_UserComponent18.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit[this.context.$implicit.id], '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_UserComponent18.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_UserComponent18;
}(import1.AppView));
var View_UserComponent17 = (function (_super) {
    __extends(View_UserComponent17, _super);
    function View_UserComponent17(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_UserComponent17, renderType_UserComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_26 = import3.pureProxy1(function (p0) {
            return { id: p0 };
        });
        _this._arr_27 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        _this._map_28 = import3.pureProxy1(function (p0) {
            return { id: p0 };
        });
        _this._arr_29 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_UserComponent17.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import35.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import32.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import33.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'style', 'text-align:center'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                                        ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray4(4, 'href', 'javascript:void(0);', 'title', 'Editar'), null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-pencil'), null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                                         \n                                        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray4(4, 'target', '_blank', 'title', 'Resultados'), null);
        this._RouterLinkWithHref_11_3 = new import44.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import45.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import46.LocationStrategy, this.parentView.parentIndex));
        this._text_12 = this.renderer.createText(this._el_11, '\n                                            ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-list'), null);
        this._text_14 = this.renderer.createText(this._el_6, '                                           \n                                         \n                                        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'a', new import3.InlineArray4(4, 'target', '_blank', 'title', 'Auditoria'), null);
        this._RouterLinkWithHref_15_3 = new import44.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import45.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import46.LocationStrategy, this.parentView.parentIndex));
        this._text_16 = this.renderer.createText(this._el_15, '\n                                            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-eye-open'), null);
        this._text_18 = this.renderer.createText(this._el_6, '\n                                    ', null);
        this._text_19 = this.renderer.createText(this._el_4, '\n                                ', null);
        this._text_20 = this.renderer.createText(this._el_0, '\n                            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_8));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
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
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_UserComponent17.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import41.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        if (((token === import47.RouterLinkWithHref) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLinkWithHref_11_3.context;
        }
        if (((token === import47.RouterLinkWithHref) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLinkWithHref_15_3.context;
        }
        return notFoundResult;
    };
    View_UserComponent17.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.grid.columns;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_11_0_0 = '_blank';
        this._RouterLinkWithHref_11_3.check_target(currVal_11_0_0, throwOnChange, false);
        var currVal_11_0_1 = this._map_26(this.context.$implicit.id);
        this._RouterLinkWithHref_11_3.check_queryParams(currVal_11_0_1, throwOnChange, false);
        var currVal_11_0_2 = this._arr_27('/exams');
        this._RouterLinkWithHref_11_3.check_routerLink(currVal_11_0_2, throwOnChange, false);
        this._RouterLinkWithHref_11_3.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_15_0_0 = '_blank';
        this._RouterLinkWithHref_15_3.check_target(currVal_15_0_0, throwOnChange, false);
        var currVal_15_0_1 = this._map_28(this.context.$implicit.id);
        this._RouterLinkWithHref_15_3.check_queryParams(currVal_15_0_1, throwOnChange, false);
        var currVal_15_0_2 = this._arr_29('/audit');
        this._RouterLinkWithHref_15_3.check_routerLink(currVal_15_0_2, throwOnChange, false);
        this._RouterLinkWithHref_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_11_3.checkHost(this, this, this._el_11, throwOnChange);
        this._RouterLinkWithHref_15_3.checkHost(this, this, this._el_15, throwOnChange);
    };
    View_UserComponent17.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._RouterLinkWithHref_11_3.ngOnDestroy();
        this._RouterLinkWithHref_15_3.ngOnDestroy();
    };
    View_UserComponent17.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_UserComponent17.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_UserComponent18(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    View_UserComponent17.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.select(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent17.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_11_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_UserComponent17.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_15_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_UserComponent17;
}(import1.AppView));
var renderType_UserComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_UserComponent, {});
var View_UserComponent0 = (function (_super) {
    __extends(View_UserComponent0, _super);
    function View_UserComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_UserComponent0, renderType_UserComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_169 = import12.UNINITIALIZED;
        _this._expr_170 = import12.UNINITIALIZED;
        _this._expr_171 = import12.UNINITIALIZED;
        _this._map_172 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        _this._map_173 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        return _this;
    }
    View_UserComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'style', 'width:100%;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container-fluid'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_8, 'span', new import3.InlineArray2(2, 'class', 'title'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Usuarios', null);
        this._text_11 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_6, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_14 = new import11.ViewContainer(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import35.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import31.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_12, '\n                ', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_19 = new import11.ViewContainer(19, 2, this, this._anchor_19);
        this._TemplateRef_19_5 = new import35.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import31.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n                ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'form', new import3.InlineArray2(2, 'class', 'form-inline'), null);
        this._NgForm_25_3 = new import27.Wrapper_NgForm(null, null);
        this._ControlContainer_25_4 = this._NgForm_25_3.context;
        this._NgControlStatusGroup_25_5 = new import21.Wrapper_NgControlStatusGroup(this._ControlContainer_25_4);
        this._text_26 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                            ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_29, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, '\n                                ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_31, 'div', new import3.InlineArray2(2, 'class', 'input-group'), null);
        this._text_34 = this.renderer.createText(this._el_33, '\n                                    ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'input', new import3.InlineArrayDynamic(18, 'aria-describedby', 'search', 'autofocus', '', 'class', 'form-control', 'maxlength', '30', 'placeholder', 'Buscar...', 'size', '15', 'style', 'height: 30px;', 'title', 'Use * para todos, número de documento, parte del nombre o parte del correo', 'type', 'text'), null);
        this._text_36 = this.renderer.createText(this._el_33, '\n                                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_33, 'span', new import3.InlineArray4(4, 'class', 'input-group-addon', 'id', 'search'), null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_37, 'span', new import3.InlineArray2(2, 'class', 'glyphicon glyphicon-search'), null);
        this._text_39 = this.renderer.createText(this._el_33, '\n                                ', null);
        this._text_40 = this.renderer.createText(this._el_31, '                                \n                            ', null);
        this._text_41 = this.renderer.createText(this._el_29, '\n                            ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_29, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_43 = this.renderer.createText(this._el_42, '\n                                ', null);
        this._anchor_44 = this.renderer.createTemplateAnchor(this._el_42, null);
        this._vc_44 = new import11.ViewContainer(44, 42, this, this._anchor_44);
        this._TemplateRef_44_5 = new import35.TemplateRef_(this, 44, this._anchor_44);
        this._NgIf_44_6 = new import31.Wrapper_NgIf(this._vc_44.vcRef, this._TemplateRef_44_5);
        this._text_45 = this.renderer.createText(this._el_42, '\n                            ', null);
        this._text_46 = this.renderer.createText(this._el_29, '\n                        ', null);
        this._text_47 = this.renderer.createText(this._el_27, '\n                    ', null);
        this._text_48 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_49 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_50 = this.renderer.createText(this._el_49, '\n                        ', null);
        this._el_51 = import3.createRenderElement(this.renderer, this._el_49, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_52 = this.renderer.createText(this._el_51, '\n                            ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_51, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_54 = this.renderer.createText(this._el_53, '\n                                ', null);
        this._el_55 = import3.createRenderElement(this.renderer, this._el_53, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_56 = import3.createRenderElement(this.renderer, this._el_55, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-plus'), null);
        this._text_57 = this.renderer.createText(this._el_55, ' Nuevo', null);
        this._text_58 = this.renderer.createText(this._el_53, '\n                            ', null);
        this._text_59 = this.renderer.createText(this._el_51, '\n                            ', null);
        this._el_60 = import3.createRenderElement(this.renderer, this._el_51, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_61 = this.renderer.createText(this._el_60, '\n                                ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_60, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_63 = this.renderer.createText(this._el_62, 'Filtro: ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_62, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_60, '\n                            ', null);
        this._text_67 = this.renderer.createText(this._el_51, '\n                            ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_51, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_69 = this.renderer.createText(this._el_68, '\n                                ', null);
        this._el_70 = import3.createRenderElement(this.renderer, this._el_68, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_71 = this.renderer.createText(this._el_70, 'Total: ', null);
        this._el_72 = import3.createRenderElement(this.renderer, this._el_70, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_73 = this.renderer.createText(this._el_72, '', null);
        this._text_74 = this.renderer.createText(this._el_68, '\n                            ', null);
        this._text_75 = this.renderer.createText(this._el_51, '\n                        ', null);
        this._text_76 = this.renderer.createText(this._el_49, '\n                    ', null);
        this._text_77 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_78 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_79 = this.renderer.createText(this._el_78, '\n                        ', null);
        this._el_80 = import3.createRenderElement(this.renderer, this._el_78, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_81 = this.renderer.createText(this._el_80, '\n                            ', null);
        this._el_82 = import3.createRenderElement(this.renderer, this._el_80, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_83 = this.renderer.createText(this._el_82, '\n                                ', null);
        this._el_84 = import3.createRenderElement(this.renderer, this._el_82, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_85 = this.renderer.createText(this._el_84, 'Paginación:', null);
        this._text_86 = this.renderer.createText(this._el_82, '\n                            ', null);
        this._text_87 = this.renderer.createText(this._el_80, '\n                            ', null);
        this._anchor_88 = this.renderer.createTemplateAnchor(this._el_80, null);
        this._vc_88 = new import11.ViewContainer(88, 80, this, this._anchor_88);
        this._TemplateRef_88_5 = new import35.TemplateRef_(this, 88, this._anchor_88);
        this._NgFor_88_6 = new import32.Wrapper_NgFor(this._vc_88.vcRef, this._TemplateRef_88_5, this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.ref);
        this._text_89 = this.renderer.createText(this._el_80, '\n                        ', null);
        this._text_90 = this.renderer.createText(this._el_78, '\n                    ', null);
        this._text_91 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._el_92 = import3.createRenderElement(this.renderer, this._el_25, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_93 = this.renderer.createText(this._el_92, '\n                        ', null);
        this._el_94 = import3.createRenderElement(this.renderer, this._el_92, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_95 = this.renderer.createText(this._el_94, '\n                            ', null);
        this._el_96 = import3.createRenderElement(this.renderer, this._el_94, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_97 = this.renderer.createText(this._el_96, '\n                                ', null);
        this._el_98 = import3.createRenderElement(this.renderer, this._el_96, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_99 = this.renderer.createText(this._el_98, '', null);
        this._text_100 = this.renderer.createText(this._el_96, '\n                            ', null);
        this._text_101 = this.renderer.createText(this._el_94, '                          \n                            ', null);
        this._el_102 = import3.createRenderElement(this.renderer, this._el_94, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_102_3 = new import28.Wrapper_NgClass(this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import34.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_102), this.renderer);
        this._text_103 = this.renderer.createText(this._el_102, '\n                                ', null);
        this._el_104 = import3.createRenderElement(this.renderer, this._el_102, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_105 = import3.createRenderElement(this.renderer, this._el_104, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-backward'), null);
        this._text_106 = this.renderer.createText(this._el_102, '\n                            ', null);
        this._text_107 = this.renderer.createText(this._el_94, '\n                            ', null);
        this._anchor_108 = this.renderer.createTemplateAnchor(this._el_94, null);
        this._vc_108 = new import11.ViewContainer(108, 94, this, this._anchor_108);
        this._TemplateRef_108_5 = new import35.TemplateRef_(this, 108, this._anchor_108);
        this._NgFor_108_6 = new import32.Wrapper_NgFor(this._vc_108.vcRef, this._TemplateRef_108_5, this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.ref);
        this._text_109 = this.renderer.createText(this._el_94, '\n                            ', null);
        this._el_110 = import3.createRenderElement(this.renderer, this._el_94, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_110_3 = new import28.Wrapper_NgClass(this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import34.KeyValueDiffers, this.parentIndex), new import16.ElementRef(this._el_110), this.renderer);
        this._text_111 = this.renderer.createText(this._el_110, '\n                                ', null);
        this._el_112 = import3.createRenderElement(this.renderer, this._el_110, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_113 = import3.createRenderElement(this.renderer, this._el_112, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-forward'), null);
        this._text_114 = this.renderer.createText(this._el_110, '\n                            ', null);
        this._text_115 = this.renderer.createText(this._el_94, '\n                        ', null);
        this._text_116 = this.renderer.createText(this._el_92, '                        \n                    ', null);
        this._text_117 = this.renderer.createText(this._el_25, '\n                ', null);
        this._text_118 = this.renderer.createText(this._el_23, '\n                ', null);
        this._el_119 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray2(2, 'class', 'table-responsive'), null);
        this._text_120 = this.renderer.createText(this._el_119, '\n                    ', null);
        this._el_121 = import3.createRenderElement(this.renderer, this._el_119, 'table', new import3.InlineArray2(2, 'class', 'table table-hover table-striped table-bordered table-condensed'), null);
        this._text_122 = this.renderer.createText(this._el_121, '\n                        ', null);
        this._el_123 = import3.createRenderElement(this.renderer, this._el_121, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_124 = this.renderer.createText(this._el_123, '\n                            ', null);
        this._el_125 = import3.createRenderElement(this.renderer, this._el_123, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_126 = this.renderer.createText(this._el_125, '\n                                ', null);
        this._anchor_127 = this.renderer.createTemplateAnchor(this._el_125, null);
        this._vc_127 = new import11.ViewContainer(127, 125, this, this._anchor_127);
        this._TemplateRef_127_5 = new import35.TemplateRef_(this, 127, this._anchor_127);
        this._NgFor_127_6 = new import32.Wrapper_NgFor(this._vc_127.vcRef, this._TemplateRef_127_5, this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.ref);
        this._text_128 = this.renderer.createText(this._el_125, '\n                                ', null);
        this._el_129 = import3.createRenderElement(this.renderer, this._el_125, 'th', new import3.InlineArray2(2, 'class', 'colHeader'), null);
        this._text_130 = this.renderer.createText(this._el_125, '\n                            ', null);
        this._text_131 = this.renderer.createText(this._el_123, '\n                        ', null);
        this._text_132 = this.renderer.createText(this._el_121, '\n                        ', null);
        this._el_133 = import3.createRenderElement(this.renderer, this._el_121, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_134 = this.renderer.createText(this._el_133, '\n                            ', null);
        this._anchor_135 = this.renderer.createTemplateAnchor(this._el_133, null);
        this._vc_135 = new import11.ViewContainer(135, 133, this, this._anchor_135);
        this._TemplateRef_135_5 = new import35.TemplateRef_(this, 135, this._anchor_135);
        this._NgFor_135_6 = new import32.Wrapper_NgFor(this._vc_135.vcRef, this._TemplateRef_135_5, this.parentView.injectorGet(import33.IterableDiffers, this.parentIndex), this.ref);
        this._text_136 = this.renderer.createText(this._el_133, '\n                        ', null);
        this._text_137 = this.renderer.createText(this._el_121, '\n                    ', null);
        this._text_138 = this.renderer.createText(this._el_119, '\n                ', null);
        this._text_139 = this.renderer.createText(this._el_23, '\n            ', null);
        this._text_140 = this.renderer.createText(this._el_21, '\n        ', null);
        this._text_141 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_142 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_25));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_35, new import3.InlineArray4(4, 'input', null, 'keyup.enter', null), this.eventHandler(this.handleEvent_35));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_38, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_38));
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_55, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_55));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_104, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_104));
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_112, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_112));
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
            this._el_12,
            this._text_13,
            this._anchor_14,
            this._text_15,
            this._text_16,
            this._text_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._anchor_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._el_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._text_59,
            this._el_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._text_67,
            this._el_68,
            this._text_69,
            this._el_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._text_74,
            this._text_75,
            this._text_76,
            this._text_77,
            this._el_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._el_82,
            this._text_83,
            this._el_84,
            this._text_85,
            this._text_86,
            this._text_87,
            this._anchor_88,
            this._text_89,
            this._text_90,
            this._text_91,
            this._el_92,
            this._text_93,
            this._el_94,
            this._text_95,
            this._el_96,
            this._text_97,
            this._el_98,
            this._text_99,
            this._text_100,
            this._text_101,
            this._el_102,
            this._text_103,
            this._el_104,
            this._el_105,
            this._text_106,
            this._text_107,
            this._anchor_108,
            this._text_109,
            this._el_110,
            this._text_111,
            this._el_112,
            this._el_113,
            this._text_114,
            this._text_115,
            this._text_116,
            this._text_117,
            this._text_118,
            this._el_119,
            this._text_120,
            this._el_121,
            this._text_122,
            this._el_123,
            this._text_124,
            this._el_125,
            this._text_126,
            this._anchor_127,
            this._text_128,
            this._el_129,
            this._text_130,
            this._text_131,
            this._text_132,
            this._el_133,
            this._text_134,
            this._anchor_135,
            this._text_136,
            this._text_137,
            this._text_138,
            this._text_139,
            this._text_140,
            this._text_141,
            this._text_142
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
    View_UserComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import35.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import40.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import35.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import40.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import35.TemplateRef) && (44 === requestNodeIndex))) {
            return this._TemplateRef_44_5;
        }
        if (((token === import40.NgIf) && (44 === requestNodeIndex))) {
            return this._NgIf_44_6.context;
        }
        if (((token === import35.TemplateRef) && (88 === requestNodeIndex))) {
            return this._TemplateRef_88_5;
        }
        if (((token === import41.NgFor) && (88 === requestNodeIndex))) {
            return this._NgFor_88_6.context;
        }
        if (((token === import36.NgClass) && ((102 <= requestNodeIndex) && (requestNodeIndex <= 106)))) {
            return this._NgClass_102_3.context;
        }
        if (((token === import35.TemplateRef) && (108 === requestNodeIndex))) {
            return this._TemplateRef_108_5;
        }
        if (((token === import41.NgFor) && (108 === requestNodeIndex))) {
            return this._NgFor_108_6.context;
        }
        if (((token === import36.NgClass) && ((110 <= requestNodeIndex) && (requestNodeIndex <= 114)))) {
            return this._NgClass_110_3.context;
        }
        if (((token === import42.NgForm) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 117)))) {
            return this._NgForm_25_3.context;
        }
        if (((token === import43.ControlContainer) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 117)))) {
            return this._ControlContainer_25_4;
        }
        if (((token === import26.NgControlStatusGroup) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 117)))) {
            return this._NgControlStatusGroup_25_5.context;
        }
        if (((token === import35.TemplateRef) && (127 === requestNodeIndex))) {
            return this._TemplateRef_127_5;
        }
        if (((token === import41.NgFor) && (127 === requestNodeIndex))) {
            return this._NgFor_127_6.context;
        }
        if (((token === import35.TemplateRef) && (135 === requestNodeIndex))) {
            return this._TemplateRef_135_5;
        }
        if (((token === import41.NgFor) && (135 === requestNodeIndex))) {
            return this._NgFor_135_6.context;
        }
        return notFoundResult;
    };
    View_UserComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_14_0_0 = this.context.message;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        var currVal_19_0_0 = (this.context.isEditing || this.context.isNew);
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._NgForm_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        this._NgControlStatusGroup_25_5.ngDoCheck(this, this._el_25, throwOnChange);
        var currVal_44_0_0 = this.context.isLoading;
        this._NgIf_44_6.check_ngIf(currVal_44_0_0, throwOnChange, false);
        this._NgIf_44_6.ngDoCheck(this, this._anchor_44, throwOnChange);
        var currVal_88_0_0 = this.context.grid.pageSizes;
        this._NgFor_88_6.check_ngForOf(currVal_88_0_0, throwOnChange, false);
        this._NgFor_88_6.ngDoCheck(this, this._anchor_88, throwOnChange);
        var currVal_102_0_0 = this._map_172(((this.context.grid.currentPage == 1) || (this.context.grid.rowsCount == 0)));
        this._NgClass_102_3.check_ngClass(currVal_102_0_0, throwOnChange, false);
        this._NgClass_102_3.ngDoCheck(this, this._el_102, throwOnChange);
        var currVal_108_0_0 = this.context.grid.pagesIndex;
        this._NgFor_108_6.check_ngForOf(currVal_108_0_0, throwOnChange, false);
        this._NgFor_108_6.ngDoCheck(this, this._anchor_108, throwOnChange);
        var currVal_110_0_0 = this._map_173(((this.context.grid.currentPage == this.context.grid.rowsCount) || (this.context.grid.rowsCount == 0)));
        this._NgClass_110_3.check_ngClass(currVal_110_0_0, throwOnChange, false);
        this._NgClass_110_3.ngDoCheck(this, this._el_110, throwOnChange);
        var currVal_127_0_0 = this.context.grid.columns;
        this._NgFor_127_6.check_ngForOf(currVal_127_0_0, throwOnChange, false);
        this._NgFor_127_6.ngDoCheck(this, this._anchor_127, throwOnChange);
        var currVal_135_0_0 = this.context.grid.rows;
        this._NgFor_135_6.check_ngForOf(currVal_135_0_0, throwOnChange, false);
        this._NgFor_135_6.ngDoCheck(this, this._anchor_135, throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_44.detectChangesInNestedViews(throwOnChange);
        this._vc_88.detectChangesInNestedViews(throwOnChange);
        this._vc_108.detectChangesInNestedViews(throwOnChange);
        this._vc_127.detectChangesInNestedViews(throwOnChange);
        this._vc_135.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_25_5.checkHost(this, this, this._el_25, throwOnChange);
        var currVal_169 = import3.inlineInterpolate(1, '', this.context.grid.itemsCount, '');
        if (import3.checkBinding(throwOnChange, this._expr_169, currVal_169)) {
            this.renderer.setText(this._text_65, currVal_169);
            this._expr_169 = currVal_169;
        }
        var currVal_170 = import3.inlineInterpolate(1, '', this.context.totalRows, '');
        if (import3.checkBinding(throwOnChange, this._expr_170, currVal_170)) {
            this.renderer.setText(this._text_73, currVal_170);
            this._expr_170 = currVal_170;
        }
        var currVal_171 = import3.inlineInterpolate(2, 'Página ', this.context.grid.currentPage, ' de ', this.context.grid.rowsCount, '');
        if (import3.checkBinding(throwOnChange, this._expr_171, currVal_171)) {
            this.renderer.setText(this._text_99, currVal_171);
            this._expr_171 = currVal_171;
        }
    };
    View_UserComponent0.prototype.destroyInternal = function () {
        this._vc_14.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_44.destroyNestedViews();
        this._vc_88.destroyNestedViews();
        this._vc_108.destroyNestedViews();
        this._vc_127.destroyNestedViews();
        this._vc_135.destroyNestedViews();
        this._NgForm_25_3.ngOnDestroy();
    };
    View_UserComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 14)) {
            return new View_UserComponent1(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 19)) {
            return new View_UserComponent2(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 44)) {
            return new View_UserComponent13(this.viewUtils, this, 44, this._anchor_44, this._vc_44);
        }
        if ((nodeIndex == 88)) {
            return new View_UserComponent14(this.viewUtils, this, 88, this._anchor_88, this._vc_88);
        }
        if ((nodeIndex == 108)) {
            return new View_UserComponent15(this.viewUtils, this, 108, this._anchor_108, this._vc_108);
        }
        if ((nodeIndex == 127)) {
            return new View_UserComponent16(this.viewUtils, this, 127, this._anchor_127, this._vc_127);
        }
        if ((nodeIndex == 135)) {
            return new View_UserComponent17(this.viewUtils, this, 135, this._anchor_135, this._vc_135);
        }
        return null;
    };
    View_UserComponent0.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_25_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_UserComponent0.prototype.handleEvent_35 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = ((this.context.filter = $event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'keyup.enter')) {
            var pd_sub_1 = (this.context.getPeople() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    View_UserComponent0.prototype.handleEvent_38 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.getPeople() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent0.prototype.handleEvent_55 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.create() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent0.prototype.handleEvent_104 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.grid.prevPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_UserComponent0.prototype.handleEvent_112 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.grid.nextPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_UserComponent0;
}(import1.AppView));
export { View_UserComponent0 };

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/users/components/reset.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/core/services/account.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '../../../../../angularApp/app/core/services/auth.service';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/core/src/change_detection/change_detection_util';
import * as import14 from '@angular/core/src/security';
import * as import15 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import16 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import17 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import18 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import20 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import21 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/common/src/location/location_strategy';
import * as import25 from '@angular/forms/src/directives/default_value_accessor';
import * as import26 from '@angular/forms/src/directives/validators';
import * as import27 from '@angular/forms/src/validators';
import * as import28 from '@angular/forms/src/directives/control_value_accessor';
import * as import29 from '@angular/forms/src/directives/ng_model';
import * as import30 from '@angular/forms/src/directives/ng_control';
import * as import31 from '@angular/forms/src/directives/ng_control_status';
import * as import32 from '@angular/common/src/directives/ng_if';
import * as import33 from '@angular/router/src/directives/router_link';
import * as import34 from '@angular/forms/src/directives/ng_form';
import * as import35 from '@angular/forms/src/directives/control_container';
var Wrapper_ResetPasswordComponent = (function () {
    function Wrapper_ResetPasswordComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.ResetPasswordComponent(p0, p1, p2, p3);
    }
    Wrapper_ResetPasswordComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ResetPasswordComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ResetPasswordComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ResetPasswordComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ResetPasswordComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ResetPasswordComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ResetPasswordComponent;
}());
export { Wrapper_ResetPasswordComponent };
var renderType_ResetPasswordComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ResetPasswordComponent_Host0 = (function (_super) {
    __extends(View_ResetPasswordComponent_Host0, _super);
    function View_ResetPasswordComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ResetPasswordComponent_Host0, renderType_ResetPasswordComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ResetPasswordComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'reset-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ResetPasswordComponent0(this.viewUtils, this, 0, this._el_0);
        this._ResetPasswordComponent_0_3 = new Wrapper_ResetPasswordComponent(this.injectorGet(import8.AccountService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injectorGet(import10.ActivatedRoute, this.parentIndex), this.injectorGet(import11.AuthService, this.parentIndex));
        this.compView_0.create(this._ResetPasswordComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ResetPasswordComponent_0_3.context);
    };
    View_ResetPasswordComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ResetPasswordComponent) && (0 === requestNodeIndex))) {
            return this._ResetPasswordComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ResetPasswordComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ResetPasswordComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ResetPasswordComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ResetPasswordComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ResetPasswordComponent_Host0;
}(import1.AppView));
export var ResetPasswordComponentNgFactory = new import7.ComponentFactory('reset-component', View_ResetPasswordComponent_Host0, import0.ResetPasswordComponent);
var styles_ResetPasswordComponent = [];
var View_ResetPasswordComponent1 = (function (_super) {
    __extends(View_ResetPasswordComponent1, _super);
    function View_ResetPasswordComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ResetPasswordComponent1, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import13.UNINITIALIZED;
        return _this;
    }
    View_ResetPasswordComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ResetPasswordComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_ResetPasswordComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ResetPasswordComponent1;
}(import1.AppView));
var View_ResetPasswordComponent2 = (function (_super) {
    __extends(View_ResetPasswordComponent2, _super);
    function View_ResetPasswordComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ResetPasswordComponent2, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ResetPasswordComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ResetPasswordComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ResetPasswordComponent2;
}(import1.AppView));
var View_ResetPasswordComponent4 = (function (_super) {
    __extends(View_ResetPasswordComponent4, _super);
    function View_ResetPasswordComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ResetPasswordComponent4, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ResetPasswordComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                                La contraseña es entre 4 y 20 caracteres.\n                                            ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_ResetPasswordComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ResetPasswordComponent4;
}(import1.AppView));
var View_ResetPasswordComponent5 = (function (_super) {
    __extends(View_ResetPasswordComponent5, _super);
    function View_ResetPasswordComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ResetPasswordComponent5, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ResetPasswordComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                                La confirmación de contraseña es incorrecta.\n                                            ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    };
    View_ResetPasswordComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ResetPasswordComponent5;
}(import1.AppView));
var View_ResetPasswordComponent3 = (function (_super) {
    __extends(View_ResetPasswordComponent3, _super);
    function View_ResetPasswordComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ResetPasswordComponent3, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_62 = import13.UNINITIALIZED;
        _this._arr_63 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ResetPasswordComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                Puedes crear una nueva contraseña para tener nuevamente acceso a tu cuenta.\n                            ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'form', new import3.InlineArray4(4, 'novalidate', '', 'role', 'form'), null);
        this._NgForm_5_3 = new import15.Wrapper_NgForm(null, null);
        this._ControlContainer_5_4 = this._NgForm_5_3.context;
        this._NgControlStatusGroup_5_5 = new import16.Wrapper_NgControlStatusGroup(this._ControlContainer_5_4);
        this._text_6 = this.renderer.createText(this._el_5, '\n                                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'fieldset', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                                    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                                        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'input', new import3.InlineArrayDynamic(24, 'autocomplete', 'off', 'autofocus', '', 'class', 'form-control', 'id', 'password', 'maxlength', '20', 'minlength', '4', 'name', 'password', 'placeholder', 'Nueva contraseña', 'required', '', 'reverse', 'true', 'type', 'password', 'validateEqual', 'confirmPassword'), null);
        this._DefaultValueAccessor_11_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_11));
        this._RequiredValidator_11_4 = new import18.Wrapper_RequiredValidator();
        this._MinLengthValidator_11_5 = new import18.Wrapper_MinLengthValidator();
        this._MaxLengthValidator_11_6 = new import18.Wrapper_MaxLengthValidator();
        this._NG_VALIDATORS_11_7 = [
            this._RequiredValidator_11_4.context,
            this._MinLengthValidator_11_5.context,
            this._MaxLengthValidator_11_6.context
        ];
        this._NG_VALUE_ACCESSOR_11_8 = [this._DefaultValueAccessor_11_3.context];
        this._NgModel_11_9 = new import19.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_11_7, null, this._NG_VALUE_ACCESSOR_11_8);
        this._NgControl_11_10 = this._NgModel_11_9.context;
        this._NgControlStatus_11_11 = new import16.Wrapper_NgControlStatus(this._NgControl_11_10);
        this._text_12 = this.renderer.createText(this._el_9, '\n                                        ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_13 = new import12.ViewContainer(13, 9, this, this._anchor_13);
        this._TemplateRef_13_5 = new import23.TemplateRef_(this, 13, this._anchor_13);
        this._NgIf_13_6 = new import20.Wrapper_NgIf(this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_9, '\n                                    ', null);
        this._text_15 = this.renderer.createText(this._el_7, '\n                                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                                        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'input', new import3.InlineArrayDynamic(20, 'autocomplete', 'off', 'class', 'form-control', 'id', 'confirmPassword', 'maxlength', '20', 'minlength', '4', 'name', 'confirmPassword', 'placeholder', 'Confirmar contraseña', 'required', '', 'type', 'password', 'validateEqual', 'password'), null);
        this._DefaultValueAccessor_18_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_18));
        this._RequiredValidator_18_4 = new import18.Wrapper_RequiredValidator();
        this._MinLengthValidator_18_5 = new import18.Wrapper_MinLengthValidator();
        this._MaxLengthValidator_18_6 = new import18.Wrapper_MaxLengthValidator();
        this._NG_VALIDATORS_18_7 = [
            this._RequiredValidator_18_4.context,
            this._MinLengthValidator_18_5.context,
            this._MaxLengthValidator_18_6.context
        ];
        this._NG_VALUE_ACCESSOR_18_8 = [this._DefaultValueAccessor_18_3.context];
        this._NgModel_18_9 = new import19.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_18_7, null, this._NG_VALUE_ACCESSOR_18_8);
        this._NgControl_18_10 = this._NgModel_18_9.context;
        this._NgControlStatus_18_11 = new import16.Wrapper_NgControlStatus(this._NgControl_18_10);
        this._text_19 = this.renderer.createText(this._el_16, '\n                                        ', null);
        this._anchor_20 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_20 = new import12.ViewContainer(20, 16, this, this._anchor_20);
        this._TemplateRef_20_5 = new import23.TemplateRef_(this, 20, this._anchor_20);
        this._NgIf_20_6 = new import20.Wrapper_NgIf(this._vc_20.vcRef, this._TemplateRef_20_5);
        this._text_21 = this.renderer.createText(this._el_16, '\n                                    ', null);
        this._text_22 = this.renderer.createText(this._el_7, ' \n                                    ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_24 = this.renderer.createText(this._el_23, '\n                                        ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'button', new import3.InlineArray4(4, 'class', 'btn btn-warning btn-sm', 'type', 'button'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                                            Cambiar contraseña\n                                        ', null);
        this._text_27 = this.renderer.createText(this._el_23, '\n                                        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_23, 'a', new import3.InlineArray2(2, 'class', 'btn btn-cancel btn-sm'), null);
        this._RouterLinkWithHref_28_3 = new import21.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import9.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import10.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.LocationStrategy, this.parentView.parentIndex));
        this._text_29 = this.renderer.createText(this._el_28, 'Cancelar', null);
        this._text_30 = this.renderer.createText(this._el_23, '                                    \n                                    ', null);
        this._text_31 = this.renderer.createText(this._el_7, '                             \n                                ', null);
        this._text_32 = this.renderer.createText(this._el_5, '\n                            ', null);
        this._text_33 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_5));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_11));
        this._NgModel_11_9.subscribe(this, this.eventHandler(this.handleEvent_11), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_18));
        this._NgModel_18_9.subscribe(this, this.eventHandler(this.handleEvent_18), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_25));
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_28));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._anchor_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_ResetPasswordComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import25.DefaultValueAccessor) && (11 === requestNodeIndex))) {
            return this._DefaultValueAccessor_11_3.context;
        }
        if (((token === import26.RequiredValidator) && (11 === requestNodeIndex))) {
            return this._RequiredValidator_11_4.context;
        }
        if (((token === import26.MinLengthValidator) && (11 === requestNodeIndex))) {
            return this._MinLengthValidator_11_5.context;
        }
        if (((token === import26.MaxLengthValidator) && (11 === requestNodeIndex))) {
            return this._MaxLengthValidator_11_6.context;
        }
        if (((token === import27.NG_VALIDATORS) && (11 === requestNodeIndex))) {
            return this._NG_VALIDATORS_11_7;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (11 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_11_8;
        }
        if (((token === import29.NgModel) && (11 === requestNodeIndex))) {
            return this._NgModel_11_9.context;
        }
        if (((token === import30.NgControl) && (11 === requestNodeIndex))) {
            return this._NgControl_11_10;
        }
        if (((token === import31.NgControlStatus) && (11 === requestNodeIndex))) {
            return this._NgControlStatus_11_11.context;
        }
        if (((token === import23.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import32.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import25.DefaultValueAccessor) && (18 === requestNodeIndex))) {
            return this._DefaultValueAccessor_18_3.context;
        }
        if (((token === import26.RequiredValidator) && (18 === requestNodeIndex))) {
            return this._RequiredValidator_18_4.context;
        }
        if (((token === import26.MinLengthValidator) && (18 === requestNodeIndex))) {
            return this._MinLengthValidator_18_5.context;
        }
        if (((token === import26.MaxLengthValidator) && (18 === requestNodeIndex))) {
            return this._MaxLengthValidator_18_6.context;
        }
        if (((token === import27.NG_VALIDATORS) && (18 === requestNodeIndex))) {
            return this._NG_VALIDATORS_18_7;
        }
        if (((token === import28.NG_VALUE_ACCESSOR) && (18 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_18_8;
        }
        if (((token === import29.NgModel) && (18 === requestNodeIndex))) {
            return this._NgModel_18_9.context;
        }
        if (((token === import30.NgControl) && (18 === requestNodeIndex))) {
            return this._NgControl_18_10;
        }
        if (((token === import31.NgControlStatus) && (18 === requestNodeIndex))) {
            return this._NgControlStatus_18_11.context;
        }
        if (((token === import23.TemplateRef) && (20 === requestNodeIndex))) {
            return this._TemplateRef_20_5;
        }
        if (((token === import32.NgIf) && (20 === requestNodeIndex))) {
            return this._NgIf_20_6.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._RouterLinkWithHref_28_3.context;
        }
        if (((token === import34.NgForm) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgForm_5_3.context;
        }
        if (((token === import35.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._ControlContainer_5_4;
        }
        if (((token === import31.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 32)))) {
            return this._NgControlStatusGroup_5_5.context;
        }
        return notFoundResult;
    };
    View_ResetPasswordComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._DefaultValueAccessor_11_3.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_1_0 = '';
        this._RequiredValidator_11_4.check_required(currVal_11_1_0, throwOnChange, false);
        this._RequiredValidator_11_4.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_2_0 = '4';
        this._MinLengthValidator_11_5.check_minlength(currVal_11_2_0, throwOnChange, false);
        this._MinLengthValidator_11_5.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_3_0 = '20';
        this._MaxLengthValidator_11_6.check_maxlength(currVal_11_3_0, throwOnChange, false);
        this._MaxLengthValidator_11_6.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_4_0 = 'password';
        this._NgModel_11_9.check_name(currVal_11_4_0, throwOnChange, false);
        var currVal_11_4_1 = this.parentView.context.user.password;
        this._NgModel_11_9.check_model(currVal_11_4_1, throwOnChange, false);
        this._NgModel_11_9.ngDoCheck(this, this._el_11, throwOnChange);
        this._NgControlStatus_11_11.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_13_0_0 = (this._NgModel_11_9.context.errors && (this._NgModel_11_9.context.dirty || this._NgModel_11_9.context.touched));
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        this._DefaultValueAccessor_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_1_0 = '';
        this._RequiredValidator_18_4.check_required(currVal_18_1_0, throwOnChange, false);
        this._RequiredValidator_18_4.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_2_0 = '4';
        this._MinLengthValidator_18_5.check_minlength(currVal_18_2_0, throwOnChange, false);
        this._MinLengthValidator_18_5.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_3_0 = '20';
        this._MaxLengthValidator_18_6.check_maxlength(currVal_18_3_0, throwOnChange, false);
        this._MaxLengthValidator_18_6.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_18_4_0 = 'confirmPassword';
        this._NgModel_18_9.check_name(currVal_18_4_0, throwOnChange, false);
        var currVal_18_4_1 = this.parentView.context.user.confirmPassword;
        this._NgModel_18_9.check_model(currVal_18_4_1, throwOnChange, false);
        this._NgModel_18_9.ngDoCheck(this, this._el_18, throwOnChange);
        this._NgControlStatus_18_11.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_20_0_0 = (this._NgModel_18_9.context.errors && (this._NgModel_18_9.context.dirty || this._NgModel_18_9.context.touched));
        this._NgIf_20_6.check_ngIf(currVal_20_0_0, throwOnChange, false);
        this._NgIf_20_6.ngDoCheck(this, this._anchor_20, throwOnChange);
        var currVal_28_0_0 = this._arr_63('/login');
        this._RouterLinkWithHref_28_3.check_routerLink(currVal_28_0_0, throwOnChange, false);
        this._RouterLinkWithHref_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_20.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_5_5.checkHost(this, this, this._el_5, throwOnChange);
        this._RequiredValidator_11_4.checkHost(this, this, this._el_11, throwOnChange);
        this._MinLengthValidator_11_5.checkHost(this, this, this._el_11, throwOnChange);
        this._MaxLengthValidator_11_6.checkHost(this, this, this._el_11, throwOnChange);
        this._NgControlStatus_11_11.checkHost(this, this, this._el_11, throwOnChange);
        this._RequiredValidator_18_4.checkHost(this, this, this._el_18, throwOnChange);
        this._MinLengthValidator_18_5.checkHost(this, this, this._el_18, throwOnChange);
        this._MaxLengthValidator_18_6.checkHost(this, this, this._el_18, throwOnChange);
        this._NgControlStatus_18_11.checkHost(this, this, this._el_18, throwOnChange);
        var currVal_62 = (this.parentView.context.isLoading || this._NgForm_5_3.context.invalid);
        if (import3.checkBinding(throwOnChange, this._expr_62, currVal_62)) {
            this.renderer.setElementProperty(this._el_25, 'disabled', currVal_62);
            this._expr_62 = currVal_62;
        }
        this._RouterLinkWithHref_28_3.checkHost(this, this, this._el_28, throwOnChange);
    };
    View_ResetPasswordComponent3.prototype.destroyInternal = function () {
        this._vc_13.destroyNestedViews();
        this._vc_20.destroyNestedViews();
        this._NgModel_11_9.ngOnDestroy();
        this._NgModel_18_9.ngOnDestroy();
        this._RouterLinkWithHref_28_3.ngOnDestroy();
        this._NgForm_5_3.ngOnDestroy();
    };
    View_ResetPasswordComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ResetPasswordComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 13)) {
            return new View_ResetPasswordComponent4(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        if ((nodeIndex == 20)) {
            return new View_ResetPasswordComponent5(this.viewUtils, this, 20, this._anchor_20, this._vc_20);
        }
        return null;
    };
    View_ResetPasswordComponent3.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_5_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_ResetPasswordComponent3.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_11_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ResetPasswordComponent3.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_18_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.confirmPassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ResetPasswordComponent3.prototype.handleEvent_25 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.changePassword() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ResetPasswordComponent3.prototype.handleEvent_28 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_28_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ResetPasswordComponent3;
}(import1.AppView));
var View_ResetPasswordComponent6 = (function (_super) {
    __extends(View_ResetPasswordComponent6, _super);
    function View_ResetPasswordComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ResetPasswordComponent6, renderType_ResetPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_12 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ResetPasswordComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                    La contraseña ha sido cambiada exitosamente.\n                                ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray2(2, 'class', 'btn btn-warning'), null);
        this._RouterLinkWithHref_7_3 = new import21.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import9.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import10.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.LocationStrategy, this.parentView.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, 'Regresar', null);
        this._text_9 = this.renderer.createText(this._el_5, '\n                                ', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._text_10
        ]), [disposable_0]);
        return null;
    };
    View_ResetPasswordComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    View_ResetPasswordComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this._arr_12('/login');
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
    };
    View_ResetPasswordComponent6.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    View_ResetPasswordComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ResetPasswordComponent6.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ResetPasswordComponent6;
}(import1.AppView));
var renderType_ResetPasswordComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ResetPasswordComponent, {});
var View_ResetPasswordComponent0 = (function (_super) {
    __extends(View_ResetPasswordComponent0, _super);
    function View_ResetPasswordComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ResetPasswordComponent0, renderType_ResetPasswordComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ResetPasswordComponent0.prototype.createInternal = function (rootSelector) {
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
        this._vc_12 = new import12.ViewContainer(12, 10, this, this._anchor_12);
        this._TemplateRef_12_5 = new import23.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import20.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'span', new import3.InlineArray2(2, 'class', 'title'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Restablecer contraseña', null);
        this._text_22 = this.renderer.createText(this._el_17, '\n                        ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._vc_23 = new import12.ViewContainer(23, 17, this, this._anchor_23);
        this._TemplateRef_23_5 = new import23.TemplateRef_(this, 23, this._anchor_23);
        this._NgIf_23_6 = new import20.Wrapper_NgIf(this._vc_23.vcRef, this._TemplateRef_23_5);
        this._text_24 = this.renderer.createText(this._el_17, '\n                    ', null);
        this._text_25 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_28 = new import12.ViewContainer(28, 26, this, this._anchor_28);
        this._TemplateRef_28_5 = new import23.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import20.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(this._el_26, null);
        this._vc_30 = new import12.ViewContainer(30, 26, this, this._anchor_30);
        this._TemplateRef_30_5 = new import23.TemplateRef_(this, 30, this._anchor_30);
        this._NgIf_30_6 = new import20.Wrapper_NgIf(this._vc_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._text_32 = this.renderer.createText(this._el_15, '                    \n                ', null);
        this._text_33 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_34 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_35 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_36 = this.renderer.createText(this._el_0, '\n', null);
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
            this._anchor_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34,
            this._text_35,
            this._text_36
        ]), null);
        return null;
    };
    View_ResetPasswordComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import32.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import23.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import32.NgIf) && (23 === requestNodeIndex))) {
            return this._NgIf_23_6.context;
        }
        if (((token === import23.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import32.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === import23.TemplateRef) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === import32.NgIf) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        return notFoundResult;
    };
    View_ResetPasswordComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.context.message;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_23_0_0 = this.context.isLoading;
        this._NgIf_23_6.check_ngIf(currVal_23_0_0, throwOnChange, false);
        this._NgIf_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        var currVal_28_0_0 = (this.context.isConfirmed && !this.context.isPasswordChanged);
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        var currVal_30_0_0 = this.context.isPasswordChanged;
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
    };
    View_ResetPasswordComponent0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_23.destroyNestedViews();
        this._vc_28.destroyNestedViews();
        this._vc_30.destroyNestedViews();
    };
    View_ResetPasswordComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_ResetPasswordComponent1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 23)) {
            return new View_ResetPasswordComponent2(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        if ((nodeIndex == 28)) {
            return new View_ResetPasswordComponent3(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        if ((nodeIndex == 30)) {
            return new View_ResetPasswordComponent6(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        return null;
    };
    return View_ResetPasswordComponent0;
}(import1.AppView));
export { View_ResetPasswordComponent0 };

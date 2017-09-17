var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/users/components/change.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/app.constants';
import * as import9 from '../../../../../angularApp/app/core/services/account.service';
import * as import10 from '@angular/router/src/router';
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
import * as import24 from '@angular/router/src/router_state';
import * as import25 from '@angular/common/src/location/location_strategy';
import * as import26 from '@angular/forms/src/directives/default_value_accessor';
import * as import27 from '@angular/forms/src/directives/validators';
import * as import28 from '@angular/forms/src/validators';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_model';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from '@angular/forms/src/directives/ng_control_status';
import * as import33 from '@angular/common/src/directives/ng_if';
import * as import34 from '@angular/router/src/directives/router_link';
import * as import35 from '@angular/forms/src/directives/ng_form';
import * as import36 from '@angular/forms/src/directives/control_container';
var Wrapper_ChangePasswordComponent = (function () {
    function Wrapper_ChangePasswordComponent(p0, p1, p2, p3) {
        this._changed = false;
        this.context = new import0.ChangePasswordComponent(p0, p1, p2, p3);
    }
    Wrapper_ChangePasswordComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ChangePasswordComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ChangePasswordComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ChangePasswordComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ChangePasswordComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ChangePasswordComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ChangePasswordComponent;
}());
export { Wrapper_ChangePasswordComponent };
var renderType_ChangePasswordComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ChangePasswordComponent_Host0 = (function (_super) {
    __extends(View_ChangePasswordComponent_Host0, _super);
    function View_ChangePasswordComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ChangePasswordComponent_Host0, renderType_ChangePasswordComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ChangePasswordComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'change-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ChangePasswordComponent0(this.viewUtils, this, 0, this._el_0);
        this._ChangePasswordComponent_0_3 = new Wrapper_ChangePasswordComponent(this.injectorGet(import8.Configuration, this.parentIndex), this.injectorGet(import9.AccountService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex), this.injectorGet(import11.AuthService, this.parentIndex));
        this.compView_0.create(this._ChangePasswordComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ChangePasswordComponent_0_3.context);
    };
    View_ChangePasswordComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ChangePasswordComponent) && (0 === requestNodeIndex))) {
            return this._ChangePasswordComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ChangePasswordComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ChangePasswordComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ChangePasswordComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent_Host0;
}(import1.AppView));
export var ChangePasswordComponentNgFactory = new import7.ComponentFactory('change-component', View_ChangePasswordComponent_Host0, import0.ChangePasswordComponent);
var styles_ChangePasswordComponent = [];
var View_ChangePasswordComponent1 = (function (_super) {
    __extends(View_ChangePasswordComponent1, _super);
    function View_ChangePasswordComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ChangePasswordComponent1, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import13.UNINITIALIZED;
        return _this;
    }
    View_ChangePasswordComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ChangePasswordComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import14.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_ChangePasswordComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent1;
}(import1.AppView));
var View_ChangePasswordComponent3 = (function (_super) {
    __extends(View_ChangePasswordComponent3, _super);
    function View_ChangePasswordComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ChangePasswordComponent3, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ChangePasswordComponent3.prototype.createInternal = function (rootSelector) {
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
    View_ChangePasswordComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent3;
}(import1.AppView));
var View_ChangePasswordComponent4 = (function (_super) {
    __extends(View_ChangePasswordComponent4, _super);
    function View_ChangePasswordComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ChangePasswordComponent4, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ChangePasswordComponent4.prototype.createInternal = function (rootSelector) {
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
    View_ChangePasswordComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent4;
}(import1.AppView));
var View_ChangePasswordComponent5 = (function (_super) {
    __extends(View_ChangePasswordComponent5, _super);
    function View_ChangePasswordComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ChangePasswordComponent5, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ChangePasswordComponent5.prototype.createInternal = function (rootSelector) {
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
    View_ChangePasswordComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent5;
}(import1.AppView));
var View_ChangePasswordComponent6 = (function (_super) {
    __extends(View_ChangePasswordComponent6, _super);
    function View_ChangePasswordComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ChangePasswordComponent6, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ChangePasswordComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ChangePasswordComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ChangePasswordComponent6;
}(import1.AppView));
var View_ChangePasswordComponent2 = (function (_super) {
    __extends(View_ChangePasswordComponent2, _super);
    function View_ChangePasswordComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ChangePasswordComponent2, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_83 = import13.UNINITIALIZED;
        _this._arr_84 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ChangePasswordComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'form', new import3.InlineArray4(4, 'novalidate', '', 'role', 'form'), null);
        this._NgForm_2_3 = new import15.Wrapper_NgForm(null, null);
        this._ControlContainer_2_4 = this._NgForm_2_3.context;
        this._NgControlStatusGroup_2_5 = new import16.Wrapper_NgControlStatusGroup(this._ControlContainer_2_4);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'fieldset', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                                    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'input', new import3.InlineArrayDynamic(20, 'autocomplete', 'off', 'autofocus', '', 'class', 'form-control', 'id', 'password', 'maxlength', '20', 'minlength', '4', 'name', 'currentpassword', 'placeholder', 'Contraseña actual', 'required', '', 'type', 'password'), null);
        this._DefaultValueAccessor_8_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_8));
        this._RequiredValidator_8_4 = new import18.Wrapper_RequiredValidator();
        this._MinLengthValidator_8_5 = new import18.Wrapper_MinLengthValidator();
        this._MaxLengthValidator_8_6 = new import18.Wrapper_MaxLengthValidator();
        this._NG_VALIDATORS_8_7 = [
            this._RequiredValidator_8_4.context,
            this._MinLengthValidator_8_5.context,
            this._MaxLengthValidator_8_6.context
        ];
        this._NG_VALUE_ACCESSOR_8_8 = [this._DefaultValueAccessor_8_3.context];
        this._NgModel_8_9 = new import19.Wrapper_NgModel(this._ControlContainer_2_4, this._NG_VALIDATORS_8_7, null, this._NG_VALUE_ACCESSOR_8_8);
        this._NgControl_8_10 = this._NgModel_8_9.context;
        this._NgControlStatus_8_11 = new import16.Wrapper_NgControlStatus(this._NgControl_8_10);
        this._text_9 = this.renderer.createText(this._el_6, '\n                                        ', null);
        this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6, null);
        this._vc_10 = new import12.ViewContainer(10, 6, this, this._anchor_10);
        this._TemplateRef_10_5 = new import23.TemplateRef_(this, 10, this._anchor_10);
        this._NgIf_10_6 = new import20.Wrapper_NgIf(this._vc_10.vcRef, this._TemplateRef_10_5);
        this._text_11 = this.renderer.createText(this._el_6, '\n                                    ', null);
        this._text_12 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_14 = this.renderer.createText(this._el_13, '\n                                        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'input', new import3.InlineArrayDynamic(22, 'autocomplete', 'off', 'class', 'form-control', 'id', 'password', 'maxlength', '20', 'minlength', '4', 'name', 'password', 'placeholder', 'Nueva contraseña', 'required', '', 'reverse', 'true', 'type', 'password', 'validateEqual', 'confirmPassword'), null);
        this._DefaultValueAccessor_15_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_15));
        this._RequiredValidator_15_4 = new import18.Wrapper_RequiredValidator();
        this._MinLengthValidator_15_5 = new import18.Wrapper_MinLengthValidator();
        this._MaxLengthValidator_15_6 = new import18.Wrapper_MaxLengthValidator();
        this._NG_VALIDATORS_15_7 = [
            this._RequiredValidator_15_4.context,
            this._MinLengthValidator_15_5.context,
            this._MaxLengthValidator_15_6.context
        ];
        this._NG_VALUE_ACCESSOR_15_8 = [this._DefaultValueAccessor_15_3.context];
        this._NgModel_15_9 = new import19.Wrapper_NgModel(this._ControlContainer_2_4, this._NG_VALIDATORS_15_7, null, this._NG_VALUE_ACCESSOR_15_8);
        this._NgControl_15_10 = this._NgModel_15_9.context;
        this._NgControlStatus_15_11 = new import16.Wrapper_NgControlStatus(this._NgControl_15_10);
        this._text_16 = this.renderer.createText(this._el_13, '\n                                        ', null);
        this._anchor_17 = this.renderer.createTemplateAnchor(this._el_13, null);
        this._vc_17 = new import12.ViewContainer(17, 13, this, this._anchor_17);
        this._TemplateRef_17_5 = new import23.TemplateRef_(this, 17, this._anchor_17);
        this._NgIf_17_6 = new import20.Wrapper_NgIf(this._vc_17.vcRef, this._TemplateRef_17_5);
        this._text_18 = this.renderer.createText(this._el_13, '\n                                    ', null);
        this._text_19 = this.renderer.createText(this._el_4, '\n                                    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_4, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n                                        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'input', new import3.InlineArrayDynamic(20, 'autocomplete', 'off', 'class', 'form-control', 'id', 'confirmPassword', 'maxlength', '20', 'minlength', '4', 'name', 'confirmPassword', 'placeholder', 'Confirmar contraseña', 'required', '', 'type', 'password', 'validateEqual', 'password'), null);
        this._DefaultValueAccessor_22_3 = new import17.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_22));
        this._RequiredValidator_22_4 = new import18.Wrapper_RequiredValidator();
        this._MinLengthValidator_22_5 = new import18.Wrapper_MinLengthValidator();
        this._MaxLengthValidator_22_6 = new import18.Wrapper_MaxLengthValidator();
        this._NG_VALIDATORS_22_7 = [
            this._RequiredValidator_22_4.context,
            this._MinLengthValidator_22_5.context,
            this._MaxLengthValidator_22_6.context
        ];
        this._NG_VALUE_ACCESSOR_22_8 = [this._DefaultValueAccessor_22_3.context];
        this._NgModel_22_9 = new import19.Wrapper_NgModel(this._ControlContainer_2_4, this._NG_VALIDATORS_22_7, null, this._NG_VALUE_ACCESSOR_22_8);
        this._NgControl_22_10 = this._NgModel_22_9.context;
        this._NgControlStatus_22_11 = new import16.Wrapper_NgControlStatus(this._NgControl_22_10);
        this._text_23 = this.renderer.createText(this._el_20, '\n                                        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_20, null);
        this._vc_24 = new import12.ViewContainer(24, 20, this, this._anchor_24);
        this._TemplateRef_24_5 = new import23.TemplateRef_(this, 24, this._anchor_24);
        this._NgIf_24_6 = new import20.Wrapper_NgIf(this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_20, '\n                                    ', null);
        this._text_26 = this.renderer.createText(this._el_4, '                              \n                                ', null);
        this._text_27 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                                    ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'button', new import3.InlineArray4(4, 'class', 'btn btn-warning btn-sm', 'type', 'submit'), null);
        this._text_31 = this.renderer.createText(this._el_30, '\n                                        Cambiar contraseña\n                                    ', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n                                    ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_28, 'a', new import3.InlineArray2(2, 'class', 'btn btn-cancel btn-sm'), null);
        this._RouterLinkWithHref_33_3 = new import21.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import25.LocationStrategy, this.parentView.parentIndex));
        this._text_34 = this.renderer.createText(this._el_33, 'Cancelar', null);
        this._text_35 = this.renderer.createText(this._el_28, '\n                                    ', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(this._el_28, null);
        this._vc_36 = new import12.ViewContainer(36, 28, this, this._anchor_36);
        this._TemplateRef_36_5 = new import23.TemplateRef_(this, 36, this._anchor_36);
        this._NgIf_36_6 = new import20.Wrapper_NgIf(this._vc_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(this._el_28, '\n                                ', null);
        this._text_38 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._text_39 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_2));
        this._NgForm_2_3.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_8, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_8));
        this._NgModel_8_9.subscribe(this, this.eventHandler(this.handleEvent_8), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_15));
        this._NgModel_15_9.subscribe(this, this.eventHandler(this.handleEvent_15), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_22, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_22));
        this._NgModel_22_9.subscribe(this, this.eventHandler(this.handleEvent_22), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_33, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_33));
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
            this._anchor_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._anchor_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._text_38,
            this._text_39
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4
        ]);
        return null;
    };
    View_ChangePasswordComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.DefaultValueAccessor) && (8 === requestNodeIndex))) {
            return this._DefaultValueAccessor_8_3.context;
        }
        if (((token === import27.RequiredValidator) && (8 === requestNodeIndex))) {
            return this._RequiredValidator_8_4.context;
        }
        if (((token === import27.MinLengthValidator) && (8 === requestNodeIndex))) {
            return this._MinLengthValidator_8_5.context;
        }
        if (((token === import27.MaxLengthValidator) && (8 === requestNodeIndex))) {
            return this._MaxLengthValidator_8_6.context;
        }
        if (((token === import28.NG_VALIDATORS) && (8 === requestNodeIndex))) {
            return this._NG_VALIDATORS_8_7;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_8_8;
        }
        if (((token === import30.NgModel) && (8 === requestNodeIndex))) {
            return this._NgModel_8_9.context;
        }
        if (((token === import31.NgControl) && (8 === requestNodeIndex))) {
            return this._NgControl_8_10;
        }
        if (((token === import32.NgControlStatus) && (8 === requestNodeIndex))) {
            return this._NgControlStatus_8_11.context;
        }
        if (((token === import23.TemplateRef) && (10 === requestNodeIndex))) {
            return this._TemplateRef_10_5;
        }
        if (((token === import33.NgIf) && (10 === requestNodeIndex))) {
            return this._NgIf_10_6.context;
        }
        if (((token === import26.DefaultValueAccessor) && (15 === requestNodeIndex))) {
            return this._DefaultValueAccessor_15_3.context;
        }
        if (((token === import27.RequiredValidator) && (15 === requestNodeIndex))) {
            return this._RequiredValidator_15_4.context;
        }
        if (((token === import27.MinLengthValidator) && (15 === requestNodeIndex))) {
            return this._MinLengthValidator_15_5.context;
        }
        if (((token === import27.MaxLengthValidator) && (15 === requestNodeIndex))) {
            return this._MaxLengthValidator_15_6.context;
        }
        if (((token === import28.NG_VALIDATORS) && (15 === requestNodeIndex))) {
            return this._NG_VALIDATORS_15_7;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_15_8;
        }
        if (((token === import30.NgModel) && (15 === requestNodeIndex))) {
            return this._NgModel_15_9.context;
        }
        if (((token === import31.NgControl) && (15 === requestNodeIndex))) {
            return this._NgControl_15_10;
        }
        if (((token === import32.NgControlStatus) && (15 === requestNodeIndex))) {
            return this._NgControlStatus_15_11.context;
        }
        if (((token === import23.TemplateRef) && (17 === requestNodeIndex))) {
            return this._TemplateRef_17_5;
        }
        if (((token === import33.NgIf) && (17 === requestNodeIndex))) {
            return this._NgIf_17_6.context;
        }
        if (((token === import26.DefaultValueAccessor) && (22 === requestNodeIndex))) {
            return this._DefaultValueAccessor_22_3.context;
        }
        if (((token === import27.RequiredValidator) && (22 === requestNodeIndex))) {
            return this._RequiredValidator_22_4.context;
        }
        if (((token === import27.MinLengthValidator) && (22 === requestNodeIndex))) {
            return this._MinLengthValidator_22_5.context;
        }
        if (((token === import27.MaxLengthValidator) && (22 === requestNodeIndex))) {
            return this._MaxLengthValidator_22_6.context;
        }
        if (((token === import28.NG_VALIDATORS) && (22 === requestNodeIndex))) {
            return this._NG_VALIDATORS_22_7;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (22 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_22_8;
        }
        if (((token === import30.NgModel) && (22 === requestNodeIndex))) {
            return this._NgModel_22_9.context;
        }
        if (((token === import31.NgControl) && (22 === requestNodeIndex))) {
            return this._NgControl_22_10;
        }
        if (((token === import32.NgControlStatus) && (22 === requestNodeIndex))) {
            return this._NgControlStatus_22_11.context;
        }
        if (((token === import23.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import33.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import34.RouterLinkWithHref) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) {
            return this._RouterLinkWithHref_33_3.context;
        }
        if (((token === import23.TemplateRef) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === import33.NgIf) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        if (((token === import35.NgForm) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._NgForm_2_3.context;
        }
        if (((token === import36.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._ControlContainer_2_4;
        }
        if (((token === import32.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 38)))) {
            return this._NgControlStatusGroup_2_5.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this._NgControlStatusGroup_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._DefaultValueAccessor_8_3.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_1_0 = '';
        this._RequiredValidator_8_4.check_required(currVal_8_1_0, throwOnChange, false);
        this._RequiredValidator_8_4.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_2_0 = '4';
        this._MinLengthValidator_8_5.check_minlength(currVal_8_2_0, throwOnChange, false);
        this._MinLengthValidator_8_5.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_3_0 = '20';
        this._MaxLengthValidator_8_6.check_maxlength(currVal_8_3_0, throwOnChange, false);
        this._MaxLengthValidator_8_6.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_8_4_0 = 'currentpassword';
        this._NgModel_8_9.check_name(currVal_8_4_0, throwOnChange, false);
        var currVal_8_4_1 = this.parentView.context.user.currentpassword;
        this._NgModel_8_9.check_model(currVal_8_4_1, throwOnChange, false);
        this._NgModel_8_9.ngDoCheck(this, this._el_8, throwOnChange);
        this._NgControlStatus_8_11.ngDoCheck(this, this._el_8, throwOnChange);
        var currVal_10_0_0 = (this._NgModel_8_9.context.errors && (this._NgModel_8_9.context.dirty || this._NgModel_8_9.context.touched));
        this._NgIf_10_6.check_ngIf(currVal_10_0_0, throwOnChange, false);
        this._NgIf_10_6.ngDoCheck(this, this._anchor_10, throwOnChange);
        this._DefaultValueAccessor_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_1_0 = '';
        this._RequiredValidator_15_4.check_required(currVal_15_1_0, throwOnChange, false);
        this._RequiredValidator_15_4.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_2_0 = '4';
        this._MinLengthValidator_15_5.check_minlength(currVal_15_2_0, throwOnChange, false);
        this._MinLengthValidator_15_5.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_3_0 = '20';
        this._MaxLengthValidator_15_6.check_maxlength(currVal_15_3_0, throwOnChange, false);
        this._MaxLengthValidator_15_6.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_15_4_0 = 'password';
        this._NgModel_15_9.check_name(currVal_15_4_0, throwOnChange, false);
        var currVal_15_4_1 = this.parentView.context.user.password;
        this._NgModel_15_9.check_model(currVal_15_4_1, throwOnChange, false);
        this._NgModel_15_9.ngDoCheck(this, this._el_15, throwOnChange);
        this._NgControlStatus_15_11.ngDoCheck(this, this._el_15, throwOnChange);
        var currVal_17_0_0 = (this._NgModel_15_9.context.errors && (this._NgModel_15_9.context.dirty || this._NgModel_15_9.context.touched));
        this._NgIf_17_6.check_ngIf(currVal_17_0_0, throwOnChange, false);
        this._NgIf_17_6.ngDoCheck(this, this._anchor_17, throwOnChange);
        this._DefaultValueAccessor_22_3.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_22_1_0 = '';
        this._RequiredValidator_22_4.check_required(currVal_22_1_0, throwOnChange, false);
        this._RequiredValidator_22_4.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_22_2_0 = '4';
        this._MinLengthValidator_22_5.check_minlength(currVal_22_2_0, throwOnChange, false);
        this._MinLengthValidator_22_5.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_22_3_0 = '20';
        this._MaxLengthValidator_22_6.check_maxlength(currVal_22_3_0, throwOnChange, false);
        this._MaxLengthValidator_22_6.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_22_4_0 = 'confirmPassword';
        this._NgModel_22_9.check_name(currVal_22_4_0, throwOnChange, false);
        var currVal_22_4_1 = this.parentView.context.user.confirmPassword;
        this._NgModel_22_9.check_model(currVal_22_4_1, throwOnChange, false);
        this._NgModel_22_9.ngDoCheck(this, this._el_22, throwOnChange);
        this._NgControlStatus_22_11.ngDoCheck(this, this._el_22, throwOnChange);
        var currVal_24_0_0 = (this._NgModel_22_9.context.errors && (this._NgModel_22_9.context.dirty || this._NgModel_22_9.context.touched));
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        var currVal_33_0_0 = this._arr_84('/home');
        this._RouterLinkWithHref_33_3.check_routerLink(currVal_33_0_0, throwOnChange, false);
        this._RouterLinkWithHref_33_3.ngDoCheck(this, this._el_33, throwOnChange);
        var currVal_36_0_0 = this.parentView.context.isLoading;
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.ngDoCheck(this, this._anchor_36, throwOnChange);
        this._vc_10.detectChangesInNestedViews(throwOnChange);
        this._vc_17.detectChangesInNestedViews(throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_2_5.checkHost(this, this, this._el_2, throwOnChange);
        this._RequiredValidator_8_4.checkHost(this, this, this._el_8, throwOnChange);
        this._MinLengthValidator_8_5.checkHost(this, this, this._el_8, throwOnChange);
        this._MaxLengthValidator_8_6.checkHost(this, this, this._el_8, throwOnChange);
        this._NgControlStatus_8_11.checkHost(this, this, this._el_8, throwOnChange);
        this._RequiredValidator_15_4.checkHost(this, this, this._el_15, throwOnChange);
        this._MinLengthValidator_15_5.checkHost(this, this, this._el_15, throwOnChange);
        this._MaxLengthValidator_15_6.checkHost(this, this, this._el_15, throwOnChange);
        this._NgControlStatus_15_11.checkHost(this, this, this._el_15, throwOnChange);
        this._RequiredValidator_22_4.checkHost(this, this, this._el_22, throwOnChange);
        this._MinLengthValidator_22_5.checkHost(this, this, this._el_22, throwOnChange);
        this._MaxLengthValidator_22_6.checkHost(this, this, this._el_22, throwOnChange);
        this._NgControlStatus_22_11.checkHost(this, this, this._el_22, throwOnChange);
        var currVal_83 = (this.parentView.context.isLoading || this._NgForm_2_3.context.invalid);
        if (import3.checkBinding(throwOnChange, this._expr_83, currVal_83)) {
            this.renderer.setElementProperty(this._el_30, 'disabled', currVal_83);
            this._expr_83 = currVal_83;
        }
        this._RouterLinkWithHref_33_3.checkHost(this, this, this._el_33, throwOnChange);
    };
    View_ChangePasswordComponent2.prototype.destroyInternal = function () {
        this._vc_10.destroyNestedViews();
        this._vc_17.destroyNestedViews();
        this._vc_24.destroyNestedViews();
        this._vc_36.destroyNestedViews();
        this._NgModel_8_9.ngOnDestroy();
        this._NgModel_15_9.ngOnDestroy();
        this._NgModel_22_9.ngOnDestroy();
        this._RouterLinkWithHref_33_3.ngOnDestroy();
        this._NgForm_2_3.ngOnDestroy();
    };
    View_ChangePasswordComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ChangePasswordComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 10)) {
            return new View_ChangePasswordComponent3(this.viewUtils, this, 10, this._anchor_10, this._vc_10);
        }
        if ((nodeIndex == 17)) {
            return new View_ChangePasswordComponent4(this.viewUtils, this, 17, this._anchor_17, this._vc_17);
        }
        if ((nodeIndex == 24)) {
            return new View_ChangePasswordComponent5(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        if ((nodeIndex == 36)) {
            return new View_ChangePasswordComponent6(this.viewUtils, this, 36, this._anchor_36, this._vc_36);
        }
        return null;
    };
    View_ChangePasswordComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_2_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = ((this._NgForm_2_3.context.form.valid && this.parentView.context.change()) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent2.prototype.handleEvent_8 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_8_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.currentpassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent2.prototype.handleEvent_15 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_15_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent2.prototype.handleEvent_22 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_22_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.user.confirmPassword = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ChangePasswordComponent2.prototype.handleEvent_33 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_33_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ChangePasswordComponent2;
}(import1.AppView));
var View_ChangePasswordComponent7 = (function (_super) {
    __extends(View_ChangePasswordComponent7, _super);
    function View_ChangePasswordComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ChangePasswordComponent7, renderType_ChangePasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._arr_12 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ChangePasswordComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                    La contraseña ha sido cambiada exitosamente.\n                                ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '\n                                    ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'a', new import3.InlineArray2(2, 'class', 'btn btn-warning'), null);
        this._RouterLinkWithHref_7_3 = new import21.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import10.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import25.LocationStrategy, this.parentView.parentIndex));
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
    View_ChangePasswordComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import34.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this._arr_12('/home');
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
    };
    View_ChangePasswordComponent7.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
    };
    View_ChangePasswordComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ChangePasswordComponent7.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ChangePasswordComponent7;
}(import1.AppView));
var renderType_ChangePasswordComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ChangePasswordComponent, {});
var View_ChangePasswordComponent0 = (function (_super) {
    __extends(View_ChangePasswordComponent0, _super);
    function View_ChangePasswordComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ChangePasswordComponent0, renderType_ChangePasswordComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ChangePasswordComponent0.prototype.createInternal = function (rootSelector) {
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
        this._text_21 = this.renderer.createText(this._el_20, 'Cambiar Contraseña', null);
        this._text_22 = this.renderer.createText(this._el_17, '\n                    ', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_26 = new import12.ViewContainer(26, 24, this, this._anchor_26);
        this._TemplateRef_26_5 = new import23.TemplateRef_(this, 26, this._anchor_26);
        this._NgIf_26_6 = new import20.Wrapper_NgIf(this._vc_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_28 = new import12.ViewContainer(28, 24, this, this._anchor_28);
        this._TemplateRef_28_5 = new import23.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import20.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._text_30 = this.renderer.createText(this._el_15, '                    \n                ', null);
        this._text_31 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_32 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_33 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_34 = this.renderer.createText(this._el_0, '\n', null);
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
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._text_30,
            this._text_31,
            this._text_32,
            this._text_33,
            this._text_34
        ]), null);
        return null;
    };
    View_ChangePasswordComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import33.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import23.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import33.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import23.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import33.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        return notFoundResult;
    };
    View_ChangePasswordComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_12_0_0 = this.context.message;
        this._NgIf_12_6.check_ngIf(currVal_12_0_0, throwOnChange, false);
        this._NgIf_12_6.ngDoCheck(this, this._anchor_12, throwOnChange);
        var currVal_26_0_0 = !this.context.isSuccess;
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = this.context.isSuccess;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        this._vc_12.detectChangesInNestedViews(throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
    };
    View_ChangePasswordComponent0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._vc_28.destroyNestedViews();
    };
    View_ChangePasswordComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_ChangePasswordComponent1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 26)) {
            return new View_ChangePasswordComponent2(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        if ((nodeIndex == 28)) {
            return new View_ChangePasswordComponent7(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_ChangePasswordComponent0;
}(import1.AppView));
export { View_ChangePasswordComponent0 };

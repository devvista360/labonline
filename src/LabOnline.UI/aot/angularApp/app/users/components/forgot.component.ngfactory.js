var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/users/components/forgot.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/core/services/account.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../../../../angularApp/app/core/services/auth.service';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import18 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import19 from '../../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import20 from '../../../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import21 from '../../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import22 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/router/src/router_state';
import * as import25 from '@angular/common/src/location/location_strategy';
import * as import26 from '@angular/forms/src/directives/default_value_accessor';
import * as import27 from '@angular/forms/src/directives/validators';
import * as import28 from '@angular/forms/src/validators';
import * as import29 from '@angular/forms/src/directives/control_value_accessor';
import * as import30 from '@angular/forms/src/directives/ng_model';
import * as import31 from '@angular/forms/src/directives/ng_control';
import * as import32 from '@angular/forms/src/directives/ng_control_status';
import * as import33 from '@angular/router/src/directives/router_link';
import * as import34 from '@angular/forms/src/directives/ng_form';
import * as import35 from '@angular/forms/src/directives/control_container';
var Wrapper_ForgotPasswordComponent = (function () {
    function Wrapper_ForgotPasswordComponent(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.ForgotPasswordComponent(p0, p1, p2);
    }
    Wrapper_ForgotPasswordComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_ForgotPasswordComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_ForgotPasswordComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_ForgotPasswordComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_ForgotPasswordComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_ForgotPasswordComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_ForgotPasswordComponent;
}());
export { Wrapper_ForgotPasswordComponent };
var renderType_ForgotPasswordComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_ForgotPasswordComponent_Host0 = (function (_super) {
    __extends(View_ForgotPasswordComponent_Host0, _super);
    function View_ForgotPasswordComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ForgotPasswordComponent_Host0, renderType_ForgotPasswordComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ForgotPasswordComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'forgot-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ForgotPasswordComponent0(this.viewUtils, this, 0, this._el_0);
        this._ForgotPasswordComponent_0_3 = new Wrapper_ForgotPasswordComponent(this.injectorGet(import8.AccountService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex), this.injectorGet(import10.AuthService, this.parentIndex));
        this.compView_0.create(this._ForgotPasswordComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ForgotPasswordComponent_0_3.context);
    };
    View_ForgotPasswordComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ForgotPasswordComponent) && (0 === requestNodeIndex))) {
            return this._ForgotPasswordComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_ForgotPasswordComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ForgotPasswordComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_ForgotPasswordComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_ForgotPasswordComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ForgotPasswordComponent_Host0;
}(import1.AppView));
export var ForgotPasswordComponentNgFactory = new import7.ComponentFactory('forgot-component', View_ForgotPasswordComponent_Host0, import0.ForgotPasswordComponent);
var styles_ForgotPasswordComponent = [];
var View_ForgotPasswordComponent1 = (function (_super) {
    __extends(View_ForgotPasswordComponent1, _super);
    function View_ForgotPasswordComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ForgotPasswordComponent1, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import12.UNINITIALIZED;
        return _this;
    }
    View_ForgotPasswordComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ForgotPasswordComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import13.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_ForgotPasswordComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ForgotPasswordComponent1;
}(import1.AppView));
var View_ForgotPasswordComponent4 = (function (_super) {
    __extends(View_ForgotPasswordComponent4, _super);
    function View_ForgotPasswordComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ForgotPasswordComponent4, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ForgotPasswordComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'LabelError'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                                El correo electrónico es requerido.\n                                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_ForgotPasswordComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ForgotPasswordComponent4;
}(import1.AppView));
var View_ForgotPasswordComponent3 = (function (_super) {
    __extends(View_ForgotPasswordComponent3, _super);
    function View_ForgotPasswordComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ForgotPasswordComponent3, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ForgotPasswordComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import11.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import15.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import14.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                                        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_ForgotPasswordComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import16.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_ForgotPasswordComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = (this.parentView._NgModel_11_8.context.hasError('required') || this.parentView._NgModel_11_8.context.hasError('pattern'));
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_ForgotPasswordComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_ForgotPasswordComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ForgotPasswordComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_ForgotPasswordComponent4(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_ForgotPasswordComponent3;
}(import1.AppView));
var View_ForgotPasswordComponent5 = (function (_super) {
    __extends(View_ForgotPasswordComponent5, _super);
    function View_ForgotPasswordComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_ForgotPasswordComponent5, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_ForgotPasswordComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_ForgotPasswordComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_ForgotPasswordComponent5;
}(import1.AppView));
var View_ForgotPasswordComponent2 = (function (_super) {
    __extends(View_ForgotPasswordComponent2, _super);
    function View_ForgotPasswordComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ForgotPasswordComponent2, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_47 = import12.UNINITIALIZED;
        _this._arr_48 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ForgotPasswordComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                Ingrese el correo electrónico que tienes registrado y recibirás \n                                un mensaje con instrucciones para cambiar tu contraseña.\n                            ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'form', new import3.InlineArray4(4, 'novalidate', '', 'role', 'form'), null);
        this._NgForm_5_3 = new import17.Wrapper_NgForm(null, null);
        this._ControlContainer_5_4 = this._NgForm_5_3.context;
        this._NgControlStatusGroup_5_5 = new import18.Wrapper_NgControlStatusGroup(this._ControlContainer_5_4);
        this._text_6 = this.renderer.createText(this._el_5, '\n                                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_5, 'fieldset', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '\n                                    ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n                                        ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'input', new import3.InlineArrayDynamic(18, 'autocomplete', 'off', 'autofocus', '', 'class', 'form-control', 'id', 'email', 'name', 'email', 'pattern', '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$', 'placeholder', 'Dirección de correo', 'required', '', 'type', 'email'), null);
        this._DefaultValueAccessor_11_3 = new import19.Wrapper_DefaultValueAccessor(this.renderer, new import23.ElementRef(this._el_11));
        this._RequiredValidator_11_4 = new import20.Wrapper_RequiredValidator();
        this._PatternValidator_11_5 = new import20.Wrapper_PatternValidator();
        this._NG_VALIDATORS_11_6 = [
            this._RequiredValidator_11_4.context,
            this._PatternValidator_11_5.context
        ];
        this._NG_VALUE_ACCESSOR_11_7 = [this._DefaultValueAccessor_11_3.context];
        this._NgModel_11_8 = new import21.Wrapper_NgModel(this._ControlContainer_5_4, this._NG_VALIDATORS_11_6, null, this._NG_VALUE_ACCESSOR_11_7);
        this._NgControl_11_9 = this._NgModel_11_8.context;
        this._NgControlStatus_11_10 = new import18.Wrapper_NgControlStatus(this._NgControl_11_9);
        this._text_12 = this.renderer.createText(this._el_9, '\n                                        ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_13 = new import11.ViewContainer(13, 9, this, this._anchor_13);
        this._TemplateRef_13_5 = new import15.TemplateRef_(this, 13, this._anchor_13);
        this._NgIf_13_6 = new import14.Wrapper_NgIf(this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_9, '\n                                    ', null);
        this._text_15 = this.renderer.createText(this._el_7, '\n                                    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_7, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                                        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'button', new import3.InlineArray4(4, 'class', 'btn btn-warning btn-sm', 'type', 'submit'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n                                            Enviar correo\n                                        ', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                                        ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray2(2, 'class', 'btn btn-cancel btn-sm'), null);
        this._RouterLinkWithHref_21_3 = new import22.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import9.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import25.LocationStrategy, this.parentView.parentIndex));
        this._text_22 = this.renderer.createText(this._el_21, 'Cancelar', null);
        this._text_23 = this.renderer.createText(this._el_16, '\n                                        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._vc_24 = new import11.ViewContainer(24, 16, this, this._anchor_24);
        this._TemplateRef_24_5 = new import15.TemplateRef_(this, 24, this._anchor_24);
        this._NgIf_24_6 = new import14.Wrapper_NgIf(this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_16, '\n                                    ', null);
        this._text_26 = this.renderer.createText(this._el_7, '                                                                \n                                ', null);
        this._text_27 = this.renderer.createText(this._el_5, '\n                            ', null);
        this._text_28 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_5, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_5));
        this._NgForm_5_3.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_11));
        this._NgModel_11_8.subscribe(this, this.eventHandler(this.handleEvent_11), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_21, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_21));
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
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._text_28
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_ForgotPasswordComponent2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import26.DefaultValueAccessor) && (11 === requestNodeIndex))) {
            return this._DefaultValueAccessor_11_3.context;
        }
        if (((token === import27.RequiredValidator) && (11 === requestNodeIndex))) {
            return this._RequiredValidator_11_4.context;
        }
        if (((token === import27.PatternValidator) && (11 === requestNodeIndex))) {
            return this._PatternValidator_11_5.context;
        }
        if (((token === import28.NG_VALIDATORS) && (11 === requestNodeIndex))) {
            return this._NG_VALIDATORS_11_6;
        }
        if (((token === import29.NG_VALUE_ACCESSOR) && (11 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_11_7;
        }
        if (((token === import30.NgModel) && (11 === requestNodeIndex))) {
            return this._NgModel_11_8.context;
        }
        if (((token === import31.NgControl) && (11 === requestNodeIndex))) {
            return this._NgControl_11_9;
        }
        if (((token === import32.NgControlStatus) && (11 === requestNodeIndex))) {
            return this._NgControlStatus_11_10.context;
        }
        if (((token === import15.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import16.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import33.RouterLinkWithHref) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._RouterLinkWithHref_21_3.context;
        }
        if (((token === import15.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import16.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === import34.NgForm) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgForm_5_3.context;
        }
        if (((token === import35.ControlContainer) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._ControlContainer_5_4;
        }
        if (((token === import32.NgControlStatusGroup) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._NgControlStatusGroup_5_5.context;
        }
        return notFoundResult;
    };
    View_ForgotPasswordComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._DefaultValueAccessor_11_3.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_1_0 = '';
        this._RequiredValidator_11_4.check_required(currVal_11_1_0, throwOnChange, false);
        this._RequiredValidator_11_4.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_2_0 = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
        this._PatternValidator_11_5.check_pattern(currVal_11_2_0, throwOnChange, false);
        this._PatternValidator_11_5.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_11_3_0 = 'email';
        this._NgModel_11_8.check_name(currVal_11_3_0, throwOnChange, false);
        var currVal_11_3_1 = this.parentView.context.userEmail;
        this._NgModel_11_8.check_model(currVal_11_3_1, throwOnChange, false);
        this._NgModel_11_8.ngDoCheck(this, this._el_11, throwOnChange);
        this._NgControlStatus_11_10.ngDoCheck(this, this._el_11, throwOnChange);
        var currVal_13_0_0 = (this._NgModel_11_8.context.errors && (this._NgModel_11_8.context.dirty || this._NgModel_11_8.context.touched));
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        var currVal_21_0_0 = this._arr_48('/login');
        this._RouterLinkWithHref_21_3.check_routerLink(currVal_21_0_0, throwOnChange, false);
        this._RouterLinkWithHref_21_3.ngDoCheck(this, this._el_21, throwOnChange);
        var currVal_24_0_0 = this.parentView.context.isLoading;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_5_5.checkHost(this, this, this._el_5, throwOnChange);
        this._RequiredValidator_11_4.checkHost(this, this, this._el_11, throwOnChange);
        this._PatternValidator_11_5.checkHost(this, this, this._el_11, throwOnChange);
        this._NgControlStatus_11_10.checkHost(this, this, this._el_11, throwOnChange);
        var currVal_47 = (this.parentView.context.isLoading || this._NgForm_5_3.context.invalid);
        if (import3.checkBinding(throwOnChange, this._expr_47, currVal_47)) {
            this.renderer.setElementProperty(this._el_18, 'disabled', currVal_47);
            this._expr_47 = currVal_47;
        }
        this._RouterLinkWithHref_21_3.checkHost(this, this, this._el_21, throwOnChange);
    };
    View_ForgotPasswordComponent2.prototype.destroyInternal = function () {
        this._vc_13.destroyNestedViews();
        this._vc_24.destroyNestedViews();
        this._NgModel_11_8.ngOnDestroy();
        this._RouterLinkWithHref_21_3.ngOnDestroy();
        this._NgForm_5_3.ngOnDestroy();
    };
    View_ForgotPasswordComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ForgotPasswordComponent2.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 13)) {
            return new View_ForgotPasswordComponent3(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        if ((nodeIndex == 24)) {
            return new View_ForgotPasswordComponent5(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    View_ForgotPasswordComponent2.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_5_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = ((this._NgForm_5_3.context.form.valid && this.parentView.context.recover()) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ForgotPasswordComponent2.prototype.handleEvent_11 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_11_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            var pd_sub_0 = ((this.parentView.context.userEmail = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_ForgotPasswordComponent2.prototype.handleEvent_21 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_21_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ForgotPasswordComponent2;
}(import1.AppView));
var View_ForgotPasswordComponent6 = (function (_super) {
    __extends(View_ForgotPasswordComponent6, _super);
    function View_ForgotPasswordComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_ForgotPasswordComponent6, renderType_ForgotPasswordComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_23 = import12.UNINITIALIZED;
        _this._arr_24 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_ForgotPasswordComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_2, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'Solicitud procesada correctamente', null);
        this._text_8 = this.renderer.createText(this._el_2, '\n                                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_2, '', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_2, '\n                                Por favor comprueba el correo electrónico.\n                                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_2, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_2, '\n                            ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n                            ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                                ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'a', new import3.InlineArray2(2, 'class', 'btn btn-warning btn-sm'), null);
        this._RouterLinkWithHref_18_3 = new import22.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import9.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import24.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import25.LocationStrategy, this.parentView.parentIndex));
        this._text_19 = this.renderer.createText(this._el_18, 'Regresar', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                            ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n                        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
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
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21
        ]), [disposable_0]);
        return null;
    };
    View_ForgotPasswordComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import33.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        return notFoundResult;
    };
    View_ForgotPasswordComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = this._arr_24('/login');
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_23 = import3.inlineInterpolate(1, '\n                                Se envío un mensaje con instrucciones a la cuenta de correo ', this.parentView.context.userEmail, ' de Resultados de Laboratorio – CediMed S.A.S.\n                                ');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_10, currVal_23);
            this._expr_23 = currVal_23;
        }
        this._RouterLinkWithHref_18_3.checkHost(this, this, this._el_18, throwOnChange);
    };
    View_ForgotPasswordComponent6.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_18_3.ngOnDestroy();
    };
    View_ForgotPasswordComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_ForgotPasswordComponent6.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_ForgotPasswordComponent6;
}(import1.AppView));
var renderType_ForgotPasswordComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ForgotPasswordComponent, {});
var View_ForgotPasswordComponent0 = (function (_super) {
    __extends(View_ForgotPasswordComponent0, _super);
    function View_ForgotPasswordComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_ForgotPasswordComponent0, renderType_ForgotPasswordComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_ForgotPasswordComponent0.prototype.createInternal = function (rootSelector) {
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
        this._TemplateRef_12_5 = new import15.TemplateRef_(this, 12, this._anchor_12);
        this._NgIf_12_6 = new import14.Wrapper_NgIf(this._vc_12.vcRef, this._TemplateRef_12_5);
        this._text_13 = this.renderer.createText(this._el_10, '\n                ', null);
        this._text_14 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'div', new import3.InlineArray2(2, 'class', 'panel panel-default'), null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-heading'), null);
        this._text_18 = this.renderer.createText(this._el_17, '\n                        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_17, 'h3', new import3.InlineArray2(2, 'class', 'panel-title'), null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_19, 'span', new import3.InlineArray2(2, 'class', 'title'), null);
        this._text_21 = this.renderer.createText(this._el_20, '¿Olvidó su contraseña?', null);
        this._text_22 = this.renderer.createText(this._el_17, '\n                    ', null);
        this._text_23 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_15, 'div', new import3.InlineArray2(2, 'class', 'panel-body'), null);
        this._text_25 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_26 = new import11.ViewContainer(26, 24, this, this._anchor_26);
        this._TemplateRef_26_5 = new import15.TemplateRef_(this, 26, this._anchor_26);
        this._NgIf_26_6 = new import14.Wrapper_NgIf(this._vc_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(this._el_24, '\n                        ', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(this._el_24, null);
        this._vc_28 = new import11.ViewContainer(28, 24, this, this._anchor_28);
        this._TemplateRef_28_5 = new import15.TemplateRef_(this, 28, this._anchor_28);
        this._NgIf_28_6 = new import14.Wrapper_NgIf(this._vc_28.vcRef, this._TemplateRef_28_5);
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
    View_ForgotPasswordComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (12 === requestNodeIndex))) {
            return this._TemplateRef_12_5;
        }
        if (((token === import16.NgIf) && (12 === requestNodeIndex))) {
            return this._NgIf_12_6.context;
        }
        if (((token === import15.TemplateRef) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === import16.NgIf) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === import15.TemplateRef) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === import16.NgIf) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        return notFoundResult;
    };
    View_ForgotPasswordComponent0.prototype.detectChangesInternal = function (throwOnChange) {
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
    View_ForgotPasswordComponent0.prototype.destroyInternal = function () {
        this._vc_12.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._vc_28.destroyNestedViews();
    };
    View_ForgotPasswordComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 12)) {
            return new View_ForgotPasswordComponent1(this.viewUtils, this, 12, this._anchor_12, this._vc_12);
        }
        if ((nodeIndex == 26)) {
            return new View_ForgotPasswordComponent2(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        if ((nodeIndex == 28)) {
            return new View_ForgotPasswordComponent6(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        return null;
    };
    return View_ForgotPasswordComponent0;
}(import1.AppView));
export { View_ForgotPasswordComponent0 };

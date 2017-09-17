var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../../angularApp/app/shared/components/navigation/navigation.component';
import * as import1 from '@angular/core/src/linker/view';
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
var Wrapper_NavigationComponent = (function () {
    function Wrapper_NavigationComponent(p0) {
        this._changed = false;
        this.context = new import0.NavigationComponent(p0);
    }
    Wrapper_NavigationComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NavigationComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_NavigationComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NavigationComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NavigationComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NavigationComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NavigationComponent;
}());
export { Wrapper_NavigationComponent };
var renderType_NavigationComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_NavigationComponent_Host0 = (function (_super) {
    __extends(View_NavigationComponent_Host0, _super);
    function View_NavigationComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_NavigationComponent_Host0, renderType_NavigationComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_NavigationComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'navigation', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_NavigationComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavigationComponent_0_3 = new Wrapper_NavigationComponent(this.injectorGet(import8.AuthService, this.parentIndex));
        this.compView_0.create(this._NavigationComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._NavigationComponent_0_3.context);
    };
    View_NavigationComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.NavigationComponent) && (0 === requestNodeIndex))) {
            return this._NavigationComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_NavigationComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavigationComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_NavigationComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_NavigationComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_NavigationComponent_Host0;
}(import1.AppView));
export var NavigationComponentNgFactory = new import7.ComponentFactory('navigation', View_NavigationComponent_Host0, import0.NavigationComponent);
var styles_NavigationComponent = [];
var View_NavigationComponent1 = (function (_super) {
    __extends(View_NavigationComponent1, _super);
    function View_NavigationComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_NavigationComponent1, renderType_NavigationComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_18 = import11.UNINITIALIZED;
        _this._arr_19 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        _this._arr_20 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_NavigationComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_2, 'a', new import3.InlineArray4(4, 'href', 'javascript:void(0);', 'title', 'Bienvenido'), null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_6, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_7_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import12.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import14.LocationStrategy, this.parentView.parentIndex));
        this._el_8 = import3.createRenderElement(this.renderer, this._el_7, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-list-alt'), null);
        this._text_9 = this.renderer.createText(this._el_7, ' Home', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_11, 'a', import3.EMPTY_INLINE_ARRAY, null);
        this._RouterLinkWithHref_12_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.injectorGet(import12.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.ActivatedRoute, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import14.LocationStrategy, this.parentView.parentIndex));
        this._el_13 = import3.createRenderElement(this.renderer, this._el_12, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-cog'), null);
        this._text_14 = this.renderer.createText(this._el_12, ' Cambiar contraseña', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_12));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
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
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_NavigationComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._RouterLinkWithHref_7_3.context;
        }
        if (((token === import15.RouterLinkWithHref) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._RouterLinkWithHref_12_3.context;
        }
        return notFoundResult;
    };
    View_NavigationComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_7_0_0 = this._arr_19('/home');
        this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLinkWithHref_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        var currVal_12_0_0 = this._arr_20('/changepsw');
        this._RouterLinkWithHref_12_3.check_routerLink(currVal_12_0_0, throwOnChange, false);
        this._RouterLinkWithHref_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        var currVal_18 = import3.inlineInterpolate(1, '', this.parentView.context.auth.getUserName(), '');
        if (import3.checkBinding(throwOnChange, this._expr_18, currVal_18)) {
            this.renderer.setText(this._text_4, currVal_18);
            this._expr_18 = currVal_18;
        }
        this._RouterLinkWithHref_7_3.checkHost(this, this, this._el_7, throwOnChange);
        this._RouterLinkWithHref_12_3.checkHost(this, this, this._el_12, throwOnChange);
    };
    View_NavigationComponent1.prototype.destroyInternal = function () {
        this._RouterLinkWithHref_7_3.ngOnDestroy();
        this._RouterLinkWithHref_12_3.ngOnDestroy();
    };
    View_NavigationComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_NavigationComponent1.prototype.handleEvent_7 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_7_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavigationComponent1.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_12_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_NavigationComponent1;
}(import1.AppView));
var renderType_NavigationComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_NavigationComponent, {});
var View_NavigationComponent0 = (function (_super) {
    __extends(View_NavigationComponent0, _super);
    function View_NavigationComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_NavigationComponent0, renderType_NavigationComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._arr_42 = import3.pureProxy1(function (p0) {
            return [p0];
        });
        return _this;
    }
    View_NavigationComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray8(6, 'class', 'navbar navbar-default navbar-fixed-top', 'role', 'navigation', 'style', 'border-bottom: #ED6A00; border-bottom-style: solid; border-bottom-width: 1px; height: 50px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'container'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'button', new import3.InlineArray8(8, 'class', 'navbar-toggle', 'data-target', '.navbar-collapse', 'data-toggle', 'collapse', 'type', 'button'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'sr-only'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Toggle navigation', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_12 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_14 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_6, 'span', new import3.InlineArray2(2, 'class', 'icon-bar'), null);
        this._text_16 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._RouterLinkWithHref_18_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex), this.parentView.injectorGet(import14.LocationStrategy, this.parentIndex));
        this._el_19 = import3.createRenderElement(this.renderer, this._el_18, 'img', new import3.InlineArray8(6, 'height', '45', 'src', 'assets/logo.png', 'style', 'margin-top:-12px;'), null);
        this._text_20 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_21 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'navbar-collapse collapse navbar-right'), null);
        this._text_23 = this.renderer.createText(this._el_22, '            \n            ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_24 = new import10.ViewContainer(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import17.TemplateRef_(this, 24, this._anchor_24);
        this._NgIf_24_6 = new import16.Wrapper_NgIf(this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(this._el_22, '\n            ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_22, 'ul', new import3.InlineArray2(2, 'class', 'nav navbar-nav navbar-right'), null);
        this._text_27 = this.renderer.createText(this._el_26, '\n                ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_26, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_29 = this.renderer.createText(this._el_28, '\n                    ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'a', new import3.InlineArray2(2, 'href', '#'), null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_30, 'span', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-log-out'), null);
        this._text_32 = this.renderer.createText(this._el_30, ' Salir', null);
        this._text_33 = this.renderer.createText(this._el_28, '\n                ', null);
        this._text_34 = this.renderer.createText(this._el_26, '\n            ', null);
        this._text_35 = this.renderer.createText(this._el_22, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
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
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_NavigationComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RouterLinkWithHref) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._RouterLinkWithHref_18_3.context;
        }
        if (((token === import17.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import18.NgIf) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        return notFoundResult;
    };
    View_NavigationComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_18_0_0 = this._arr_42('/home');
        this._RouterLinkWithHref_18_3.check_routerLink(currVal_18_0_0, throwOnChange, false);
        this._RouterLinkWithHref_18_3.ngDoCheck(this, this._el_18, throwOnChange);
        var currVal_24_0_0 = this.context.auth.isAuthenticated();
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._RouterLinkWithHref_18_3.checkHost(this, this, this._el_18, throwOnChange);
    };
    View_NavigationComponent0.prototype.destroyInternal = function () {
        this._vc_24.destroyNestedViews();
        this._RouterLinkWithHref_18_3.ngOnDestroy();
    };
    View_NavigationComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 24)) {
            return new View_NavigationComponent1(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    };
    View_NavigationComponent0.prototype.handleEvent_18 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLinkWithHref_18_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_NavigationComponent0.prototype.handleEvent_30 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.logout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_NavigationComponent0;
}(import1.AppView));
export { View_NavigationComponent0 };

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../angularApp/app/app.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../angularApp/app/shared/components/navigation/navigation.component';
import * as import9 from './shared/components/navigation/navigation.component.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import12 from '../../../angularApp/app/shared/components/customfooter/customfooter.component';
import * as import13 from './shared/components/customfooter/customfooter.component.ngfactory';
import * as import14 from '../../../angularApp/app/core/services/auth.service';
import * as import15 from '@angular/router/src/router_outlet_map';
import * as import16 from '@angular/core/src/linker/component_factory_resolver';
import * as import17 from '@angular/router/src/directives/router_outlet';
var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent() {
        this._changed = false;
        this.context = new import0.AppComponent();
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
export { Wrapper_AppComponent };
var renderType_AppComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'my-app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent();
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AppComponent) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(import1.AppView));
export var AppComponentNgFactory = new import7.ComponentFactory('my-app', View_AppComponent_Host0, import0.AppComponent);
var styles_AppComponent = [];
var renderType_AppComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AppComponent0, renderType_AppComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'navigation', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_0 = new import9.View_NavigationComponent0(this.viewUtils, this, 0, this._el_0);
        this._NavigationComponent_0_3 = new import9.Wrapper_NavigationComponent(this.parentView.injectorGet(import14.AuthService, this.parentIndex));
        this.compView_0.create(this._NavigationComponent_0_3.context);
        this._text_1 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_2 = new import10.ViewContainer(2, null, this, this._el_2);
        this._RouterOutlet_2_5 = new import11.Wrapper_RouterOutlet(this.parentView.injectorGet(import15.RouterOutletMap, this.parentIndex), this._vc_2.vcRef, this.parentView.injectorGet(import16.ComponentFactoryResolver, this.parentIndex), null);
        this._text_3 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, parentRenderNode, 'customfooter', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_4 = new import13.View_CustomFooterComponent0(this.viewUtils, this, 4, this._el_4);
        this._CustomFooterComponent_4_3 = new import13.Wrapper_CustomFooterComponent();
        this.compView_4.create(this._CustomFooterComponent_4_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import8.NavigationComponent) && (0 === requestNodeIndex))) {
            return this._NavigationComponent_0_3.context;
        }
        if (((token === import17.RouterOutlet) && (2 === requestNodeIndex))) {
            return this._RouterOutlet_2_5.context;
        }
        if (((token === import12.CustomFooterComponent) && (4 === requestNodeIndex))) {
            return this._CustomFooterComponent_4_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NavigationComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._RouterOutlet_2_5.ngDoCheck(this, this._el_2, throwOnChange);
        this._CustomFooterComponent_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        this.compView_4.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this.compView_0.destroy();
        this.compView_4.destroy();
        this._RouterOutlet_2_5.ngOnDestroy();
    };
    return View_AppComponent0;
}(import1.AppView));
export { View_AppComponent0 };

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../../angularApp/app/shared/components/customfooter/customfooter.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
var Wrapper_CustomFooterComponent = (function () {
    function Wrapper_CustomFooterComponent() {
        this._changed = false;
        this.context = new import0.CustomFooterComponent();
    }
    Wrapper_CustomFooterComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_CustomFooterComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_CustomFooterComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_CustomFooterComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_CustomFooterComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_CustomFooterComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_CustomFooterComponent;
}());
export { Wrapper_CustomFooterComponent };
var renderType_CustomFooterComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_CustomFooterComponent_Host0 = (function (_super) {
    __extends(View_CustomFooterComponent_Host0, _super);
    function View_CustomFooterComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_CustomFooterComponent_Host0, renderType_CustomFooterComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_CustomFooterComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'customfooter', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CustomFooterComponent0(this.viewUtils, this, 0, this._el_0);
        this._CustomFooterComponent_0_3 = new Wrapper_CustomFooterComponent();
        this.compView_0.create(this._CustomFooterComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CustomFooterComponent_0_3.context);
    };
    View_CustomFooterComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CustomFooterComponent) && (0 === requestNodeIndex))) {
            return this._CustomFooterComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_CustomFooterComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._CustomFooterComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_CustomFooterComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_CustomFooterComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_CustomFooterComponent_Host0;
}(import1.AppView));
export var CustomFooterComponentNgFactory = new import7.ComponentFactory('customfooter', View_CustomFooterComponent_Host0, import0.CustomFooterComponent);
var styles_CustomFooterComponent = [];
var renderType_CustomFooterComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CustomFooterComponent, {});
var View_CustomFooterComponent0 = (function (_super) {
    __extends(View_CustomFooterComponent0, _super);
    function View_CustomFooterComponent0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_CustomFooterComponent0, renderType_CustomFooterComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_CustomFooterComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'footer', new import3.InlineArray2(2, 'class', 'footer'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    return View_CustomFooterComponent0;
}(import1.AppView));
export { View_CustomFooterComponent0 };
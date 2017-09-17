var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '../../../../../angularApp/app/audit/components/audit.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../../../angularApp/app/app.constants';
import * as import9 from '../../../../../angularApp/app/core/services/audit.service';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/common/src/location/location';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '@angular/core/src/change_detection/change_detection_util';
import * as import15 from '@angular/core/src/security';
import * as import16 from '../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import17 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import18 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/common/src/directives/ng_class';
import * as import21 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from '@angular/core/src/linker/template_ref';
import * as import23 from '@angular/common/src/directives/ng_for';
import * as import24 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import25 from '../../../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import26 from '../../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import27 from '@angular/common/src/directives/ng_if';
import * as import28 from '@angular/forms/src/directives/ng_form';
import * as import29 from '@angular/forms/src/directives/control_container';
import * as import30 from '@angular/forms/src/directives/ng_control_status';
var Wrapper_AuditComponent = (function () {
    function Wrapper_AuditComponent(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.AuditComponent(p0, p1, p2, p3, p4);
    }
    Wrapper_AuditComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AuditComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AuditComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AuditComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AuditComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AuditComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AuditComponent;
}());
export { Wrapper_AuditComponent };
var renderType_AuditComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_AuditComponent_Host0 = (function (_super) {
    __extends(View_AuditComponent_Host0, _super);
    function View_AuditComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_AuditComponent_Host0, renderType_AuditComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_AuditComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'audit-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AuditComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuditComponent_0_3 = new Wrapper_AuditComponent(this.injectorGet(import8.Configuration, this.parentIndex), this.injectorGet(import9.AuditService, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex), this.injectorGet(import11.ActivatedRoute, this.parentIndex), this.injectorGet(import12.Location, this.parentIndex));
        this.compView_0.create(this._AuditComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AuditComponent_0_3.context);
    };
    View_AuditComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AuditComponent) && (0 === requestNodeIndex))) {
            return this._AuditComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AuditComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AuditComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AuditComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AuditComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuditComponent_Host0;
}(import1.AppView));
export var AuditComponentNgFactory = new import7.ComponentFactory('audit-component', View_AuditComponent_Host0, import0.AuditComponent);
var styles_AuditComponent = [];
var View_AuditComponent1 = (function (_super) {
    __extends(View_AuditComponent1, _super);
    function View_AuditComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AuditComponent1, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_1 = import14.UNINITIALIZED;
        return _this;
    }
    View_AuditComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'alert alert-danger'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_AuditComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1 = this.parentView.context.message;
        if (import3.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_0, 'innerHTML', this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML, currVal_1));
            this._expr_1 = currVal_1;
        }
    };
    View_AuditComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuditComponent1;
}(import1.AppView));
var View_AuditComponent2 = (function (_super) {
    __extends(View_AuditComponent2, _super);
    function View_AuditComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AuditComponent2, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AuditComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'img', new import3.InlineArray8(6, 'height', '24', 'src', '/assets/spin.svg', 'width', '24'), null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_AuditComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuditComponent2;
}(import1.AppView));
var View_AuditComponent3 = (function (_super) {
    __extends(View_AuditComponent3, _super);
    function View_AuditComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AuditComponent3, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_6 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_7 = import14.UNINITIALIZED;
        return _this;
    }
    View_AuditComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import16.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import18.KeyValueDiffers, this.parentView.parentIndex), new import19.ElementRef(this._el_0), this.renderer);
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
    View_AuditComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_AuditComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_6((this.parentView.context.grid.pageSize == this.context.$implicit));
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_AuditComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AuditComponent3.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.setPageSize(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AuditComponent3;
}(import1.AppView));
var View_AuditComponent4 = (function (_super) {
    __extends(View_AuditComponent4, _super);
    function View_AuditComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AuditComponent4, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._map_6 = import3.pureProxy1(function (p0) {
            return { active: p0 };
        });
        _this._expr_7 = import14.UNINITIALIZED;
        return _this;
    }
    View_AuditComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_0_3 = new import16.Wrapper_NgClass(this.parentView.parentView.injectorGet(import17.IterableDiffers, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import18.KeyValueDiffers, this.parentView.parentIndex), new import19.ElementRef(this._el_0), this.renderer);
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
    View_AuditComponent4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import20.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) {
            return this._NgClass_0_3.context;
        }
        return notFoundResult;
    };
    View_AuditComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this._map_6((this.parentView.context.grid.currentPage == this.context.$implicit));
        this._NgClass_0_3.check_ngClass(currVal_0_0_0, throwOnChange, false);
        this._NgClass_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        var currVal_7 = import3.inlineInterpolate(1, '', this.context.$implicit, '');
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setText(this._text_3, currVal_7);
            this._expr_7 = currVal_7;
        }
    };
    View_AuditComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AuditComponent4.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.setPage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AuditComponent4;
}(import1.AppView));
var View_AuditComponent5 = (function (_super) {
    __extends(View_AuditComponent5, _super);
    function View_AuditComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AuditComponent5, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_5 = import14.UNINITIALIZED;
        return _this;
    }
    View_AuditComponent5.prototype.createInternal = function (rootSelector) {
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
    View_AuditComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = import3.inlineInterpolate(1, '', this.context.$implicit.title, '');
        if (import3.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_3, currVal_5);
            this._expr_5 = currVal_5;
        }
    };
    View_AuditComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AuditComponent5.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.grid.sort(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AuditComponent5;
}(import1.AppView));
var View_AuditComponent7 = (function (_super) {
    __extends(View_AuditComponent7, _super);
    function View_AuditComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        var _this = _super.call(this, View_AuditComponent7, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
        _this._expr_2 = import14.UNINITIALIZED;
        return _this;
    }
    View_AuditComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'td', new import3.InlineArray2(2, 'class', 'colText'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AuditComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = import3.inlineInterpolate(1, '', this.parentView.context.$implicit[this.context.$implicit.id], '');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AuditComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AuditComponent7;
}(import1.AppView));
var View_AuditComponent6 = (function (_super) {
    __extends(View_AuditComponent6, _super);
    function View_AuditComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        return _super.call(this, View_AuditComponent6, renderType_AuditComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer) || this;
    }
    View_AuditComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                                ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import13.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import22.TemplateRef_(this, 2, this._anchor_2);
        this._NgFor_2_6 = new import21.Wrapper_NgFor(this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(import17.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '                                \n                            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AuditComponent6.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import23.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AuditComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.grid.columns;
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AuditComponent6.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AuditComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AuditComponent6.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AuditComponent7(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AuditComponent6;
}(import1.AppView));
var renderType_AuditComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AuditComponent, {});
var View_AuditComponent0 = (function (_super) {
    __extends(View_AuditComponent0, _super);
    function View_AuditComponent0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_AuditComponent0, renderType_AuditComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
        _this._expr_130 = import14.UNINITIALIZED;
        _this._expr_131 = import14.UNINITIALIZED;
        _this._map_132 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        _this._map_133 = import3.pureProxy1(function (p0) {
            return { disabled: p0 };
        });
        return _this;
    }
    View_AuditComponent0.prototype.createInternal = function (rootSelector) {
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
        this._text_10 = this.renderer.createText(this._el_9, 'Auditoría', null);
        this._text_11 = this.renderer.createText(this._el_6, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_6, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '\n                    ', null);
        this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_14 = new import13.ViewContainer(14, 12, this, this._anchor_14);
        this._TemplateRef_14_5 = new import22.TemplateRef_(this, 14, this._anchor_14);
        this._NgIf_14_6 = new import24.Wrapper_NgIf(this._vc_14.vcRef, this._TemplateRef_14_5);
        this._text_15 = this.renderer.createText(this._el_12, '\n                ', null);
        this._text_16 = this.renderer.createText(this._el_6, '\n            ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_18 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_20 = this.renderer.createText(this._el_19, '\n            ', null);
        this._el_21 = import3.createRenderElement(this.renderer, this._el_19, 'div', new import3.InlineArray2(2, 'class', 'col-md-12'), null);
        this._text_22 = this.renderer.createText(this._el_21, '\n                ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_21, 'form', new import3.InlineArray2(2, 'class', 'form-inline'), null);
        this._NgForm_23_3 = new import25.Wrapper_NgForm(null, null);
        this._ControlContainer_23_4 = this._NgForm_23_3.context;
        this._NgControlStatusGroup_23_5 = new import26.Wrapper_NgControlStatusGroup(this._ControlContainer_23_4);
        this._text_24 = this.renderer.createText(this._el_23, '\n                    ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n                        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_25, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_28 = this.renderer.createText(this._el_27, '\n                            ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_27, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._text_30 = this.renderer.createText(this._el_29, '\n                                ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_29, null);
        this._vc_31 = new import13.ViewContainer(31, 29, this, this._anchor_31);
        this._TemplateRef_31_5 = new import22.TemplateRef_(this, 31, this._anchor_31);
        this._NgIf_31_6 = new import24.Wrapper_NgIf(this._vc_31.vcRef, this._TemplateRef_31_5);
        this._text_32 = this.renderer.createText(this._el_29, '\n                            ', null);
        this._text_33 = this.renderer.createText(this._el_27, '\n                            ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_27, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_35 = this.renderer.createText(this._el_34, '\n                                ', null);
        this._el_36 = import3.createRenderElement(this.renderer, this._el_34, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_37 = this.renderer.createText(this._el_36, 'Total: ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_36, 'b', import3.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(this._el_38, '', null);
        this._text_40 = this.renderer.createText(this._el_34, '\n                            ', null);
        this._text_41 = this.renderer.createText(this._el_27, '\n                        ', null);
        this._text_42 = this.renderer.createText(this._el_25, '\n                    ', null);
        this._text_43 = this.renderer.createText(this._el_23, '\n                    ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_45 = this.renderer.createText(this._el_44, '\n                        ', null);
        this._el_46 = import3.createRenderElement(this.renderer, this._el_44, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_47 = this.renderer.createText(this._el_46, '\n                            ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_46, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_49 = this.renderer.createText(this._el_48, '\n                                ', null);
        this._el_50 = import3.createRenderElement(this.renderer, this._el_48, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_51 = this.renderer.createText(this._el_50, 'Paginación:', null);
        this._text_52 = this.renderer.createText(this._el_48, '\n                            ', null);
        this._text_53 = this.renderer.createText(this._el_46, '\n                            ', null);
        this._anchor_54 = this.renderer.createTemplateAnchor(this._el_46, null);
        this._vc_54 = new import13.ViewContainer(54, 46, this, this._anchor_54);
        this._TemplateRef_54_5 = new import22.TemplateRef_(this, 54, this._anchor_54);
        this._NgFor_54_6 = new import21.Wrapper_NgFor(this._vc_54.vcRef, this._TemplateRef_54_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_55 = this.renderer.createText(this._el_46, '\n                        ', null);
        this._text_56 = this.renderer.createText(this._el_44, '\n                    ', null);
        this._text_57 = this.renderer.createText(this._el_23, '\n                    ', null);
        this._el_58 = import3.createRenderElement(this.renderer, this._el_23, 'div', new import3.InlineArray4(4, 'class', 'form-group', 'style', 'margin-right: 10px'), null);
        this._text_59 = this.renderer.createText(this._el_58, '\n                        ', null);
        this._el_60 = import3.createRenderElement(this.renderer, this._el_58, 'ul', new import3.InlineArray4(4, 'class', 'pagination pagination-sm', 'style', 'margin: 0px'), null);
        this._text_61 = this.renderer.createText(this._el_60, '\n                            ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_60, 'li', new import3.InlineArray2(2, 'class', 'disabled'), null);
        this._text_63 = this.renderer.createText(this._el_62, '\n                                ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_62, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._text_65 = this.renderer.createText(this._el_64, '', null);
        this._text_66 = this.renderer.createText(this._el_62, '\n                            ', null);
        this._text_67 = this.renderer.createText(this._el_60, '                          \n                            ', null);
        this._el_68 = import3.createRenderElement(this.renderer, this._el_60, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_68_3 = new import16.Wrapper_NgClass(this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import18.KeyValueDiffers, this.parentIndex), new import19.ElementRef(this._el_68), this.renderer);
        this._text_69 = this.renderer.createText(this._el_68, '\n                                ', null);
        this._el_70 = import3.createRenderElement(this.renderer, this._el_68, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_71 = import3.createRenderElement(this.renderer, this._el_70, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-backward'), null);
        this._text_72 = this.renderer.createText(this._el_68, '\n                            ', null);
        this._text_73 = this.renderer.createText(this._el_60, '\n                            ', null);
        this._anchor_74 = this.renderer.createTemplateAnchor(this._el_60, null);
        this._vc_74 = new import13.ViewContainer(74, 60, this, this._anchor_74);
        this._TemplateRef_74_5 = new import22.TemplateRef_(this, 74, this._anchor_74);
        this._NgFor_74_6 = new import21.Wrapper_NgFor(this._vc_74.vcRef, this._TemplateRef_74_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_75 = this.renderer.createText(this._el_60, '\n                            ', null);
        this._el_76 = import3.createRenderElement(this.renderer, this._el_60, 'li', import3.EMPTY_INLINE_ARRAY, null);
        this._NgClass_76_3 = new import16.Wrapper_NgClass(this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import18.KeyValueDiffers, this.parentIndex), new import19.ElementRef(this._el_76), this.renderer);
        this._text_77 = this.renderer.createText(this._el_76, '\n                                ', null);
        this._el_78 = import3.createRenderElement(this.renderer, this._el_76, 'a', new import3.InlineArray2(2, 'href', 'javascript:void(0);'), null);
        this._el_79 = import3.createRenderElement(this.renderer, this._el_78, 'i', new import3.InlineArray4(4, 'aria-hidden', 'true', 'class', 'glyphicon glyphicon-step-forward'), null);
        this._text_80 = this.renderer.createText(this._el_76, '\n                            ', null);
        this._text_81 = this.renderer.createText(this._el_60, '\n                        ', null);
        this._text_82 = this.renderer.createText(this._el_58, '                        \n                    ', null);
        this._text_83 = this.renderer.createText(this._el_23, '\n                ', null);
        this._text_84 = this.renderer.createText(this._el_21, '\n                ', null);
        this._el_85 = import3.createRenderElement(this.renderer, this._el_21, 'div', new import3.InlineArray2(2, 'class', 'table-responsive'), null);
        this._text_86 = this.renderer.createText(this._el_85, '\n                    ', null);
        this._el_87 = import3.createRenderElement(this.renderer, this._el_85, 'table', new import3.InlineArray2(2, 'class', 'table table-hover table-striped table-bordered table-condensed'), null);
        this._text_88 = this.renderer.createText(this._el_87, '\n                        ', null);
        this._el_89 = import3.createRenderElement(this.renderer, this._el_87, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_90 = this.renderer.createText(this._el_89, '\n                            ', null);
        this._el_91 = import3.createRenderElement(this.renderer, this._el_89, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_92 = this.renderer.createText(this._el_91, '\n                                ', null);
        this._anchor_93 = this.renderer.createTemplateAnchor(this._el_91, null);
        this._vc_93 = new import13.ViewContainer(93, 91, this, this._anchor_93);
        this._TemplateRef_93_5 = new import22.TemplateRef_(this, 93, this._anchor_93);
        this._NgFor_93_6 = new import21.Wrapper_NgFor(this._vc_93.vcRef, this._TemplateRef_93_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_94 = this.renderer.createText(this._el_91, '\n                            ', null);
        this._text_95 = this.renderer.createText(this._el_89, '\n                        ', null);
        this._text_96 = this.renderer.createText(this._el_87, '\n                        ', null);
        this._el_97 = import3.createRenderElement(this.renderer, this._el_87, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_98 = this.renderer.createText(this._el_97, '\n                            ', null);
        this._anchor_99 = this.renderer.createTemplateAnchor(this._el_97, null);
        this._vc_99 = new import13.ViewContainer(99, 97, this, this._anchor_99);
        this._TemplateRef_99_5 = new import22.TemplateRef_(this, 99, this._anchor_99);
        this._NgFor_99_6 = new import21.Wrapper_NgFor(this._vc_99.vcRef, this._TemplateRef_99_5, this.parentView.injectorGet(import17.IterableDiffers, this.parentIndex), this.ref);
        this._text_100 = this.renderer.createText(this._el_97, '\n                        ', null);
        this._text_101 = this.renderer.createText(this._el_87, '\n                    ', null);
        this._text_102 = this.renderer.createText(this._el_85, '\n                ', null);
        this._text_103 = this.renderer.createText(this._el_21, '\n            ', null);
        this._text_104 = this.renderer.createText(this._el_19, '\n        ', null);
        this._text_105 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_106 = this.renderer.createText(this._el_0, '   \n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_23, new import3.InlineArray4(4, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_23));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_70, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_70));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_78, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_78));
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
            this._el_19,
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
            this._anchor_31,
            this._text_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._text_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._text_53,
            this._anchor_54,
            this._text_55,
            this._text_56,
            this._text_57,
            this._el_58,
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
            this._el_71,
            this._text_72,
            this._text_73,
            this._anchor_74,
            this._text_75,
            this._el_76,
            this._text_77,
            this._el_78,
            this._el_79,
            this._text_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._text_84,
            this._el_85,
            this._text_86,
            this._el_87,
            this._text_88,
            this._el_89,
            this._text_90,
            this._el_91,
            this._text_92,
            this._anchor_93,
            this._text_94,
            this._text_95,
            this._text_96,
            this._el_97,
            this._text_98,
            this._anchor_99,
            this._text_100,
            this._text_101,
            this._text_102,
            this._text_103,
            this._text_104,
            this._text_105,
            this._text_106
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    };
    View_AuditComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.TemplateRef) && (14 === requestNodeIndex))) {
            return this._TemplateRef_14_5;
        }
        if (((token === import27.NgIf) && (14 === requestNodeIndex))) {
            return this._NgIf_14_6.context;
        }
        if (((token === import22.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import27.NgIf) && (31 === requestNodeIndex))) {
            return this._NgIf_31_6.context;
        }
        if (((token === import22.TemplateRef) && (54 === requestNodeIndex))) {
            return this._TemplateRef_54_5;
        }
        if (((token === import23.NgFor) && (54 === requestNodeIndex))) {
            return this._NgFor_54_6.context;
        }
        if (((token === import20.NgClass) && ((68 <= requestNodeIndex) && (requestNodeIndex <= 72)))) {
            return this._NgClass_68_3.context;
        }
        if (((token === import22.TemplateRef) && (74 === requestNodeIndex))) {
            return this._TemplateRef_74_5;
        }
        if (((token === import23.NgFor) && (74 === requestNodeIndex))) {
            return this._NgFor_74_6.context;
        }
        if (((token === import20.NgClass) && ((76 <= requestNodeIndex) && (requestNodeIndex <= 80)))) {
            return this._NgClass_76_3.context;
        }
        if (((token === import28.NgForm) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._NgForm_23_3.context;
        }
        if (((token === import29.ControlContainer) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._ControlContainer_23_4;
        }
        if (((token === import30.NgControlStatusGroup) && ((23 <= requestNodeIndex) && (requestNodeIndex <= 83)))) {
            return this._NgControlStatusGroup_23_5.context;
        }
        if (((token === import22.TemplateRef) && (93 === requestNodeIndex))) {
            return this._TemplateRef_93_5;
        }
        if (((token === import23.NgFor) && (93 === requestNodeIndex))) {
            return this._NgFor_93_6.context;
        }
        if (((token === import22.TemplateRef) && (99 === requestNodeIndex))) {
            return this._TemplateRef_99_5;
        }
        if (((token === import23.NgFor) && (99 === requestNodeIndex))) {
            return this._NgFor_99_6.context;
        }
        return notFoundResult;
    };
    View_AuditComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_14_0_0 = this.context.message;
        this._NgIf_14_6.check_ngIf(currVal_14_0_0, throwOnChange, false);
        this._NgIf_14_6.ngDoCheck(this, this._anchor_14, throwOnChange);
        this._NgForm_23_3.ngDoCheck(this, this._el_23, throwOnChange);
        this._NgControlStatusGroup_23_5.ngDoCheck(this, this._el_23, throwOnChange);
        var currVal_31_0_0 = this.context.isLoading;
        this._NgIf_31_6.check_ngIf(currVal_31_0_0, throwOnChange, false);
        this._NgIf_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        var currVal_54_0_0 = this.context.grid.pageSizes;
        this._NgFor_54_6.check_ngForOf(currVal_54_0_0, throwOnChange, false);
        this._NgFor_54_6.ngDoCheck(this, this._anchor_54, throwOnChange);
        var currVal_68_0_0 = this._map_132(((this.context.grid.currentPage == 1) || (this.context.grid.rowsCount == 0)));
        this._NgClass_68_3.check_ngClass(currVal_68_0_0, throwOnChange, false);
        this._NgClass_68_3.ngDoCheck(this, this._el_68, throwOnChange);
        var currVal_74_0_0 = this.context.grid.pagesIndex;
        this._NgFor_74_6.check_ngForOf(currVal_74_0_0, throwOnChange, false);
        this._NgFor_74_6.ngDoCheck(this, this._anchor_74, throwOnChange);
        var currVal_76_0_0 = this._map_133(((this.context.grid.currentPage == this.context.grid.rowsCount) || (this.context.grid.rowsCount == 0)));
        this._NgClass_76_3.check_ngClass(currVal_76_0_0, throwOnChange, false);
        this._NgClass_76_3.ngDoCheck(this, this._el_76, throwOnChange);
        var currVal_93_0_0 = this.context.grid.columns;
        this._NgFor_93_6.check_ngForOf(currVal_93_0_0, throwOnChange, false);
        this._NgFor_93_6.ngDoCheck(this, this._anchor_93, throwOnChange);
        var currVal_99_0_0 = this.context.grid.rows;
        this._NgFor_99_6.check_ngForOf(currVal_99_0_0, throwOnChange, false);
        this._NgFor_99_6.ngDoCheck(this, this._anchor_99, throwOnChange);
        this._vc_14.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_54.detectChangesInNestedViews(throwOnChange);
        this._vc_74.detectChangesInNestedViews(throwOnChange);
        this._vc_93.detectChangesInNestedViews(throwOnChange);
        this._vc_99.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_23_5.checkHost(this, this, this._el_23, throwOnChange);
        var currVal_130 = import3.inlineInterpolate(1, '', this.context.totalRows, '');
        if (import3.checkBinding(throwOnChange, this._expr_130, currVal_130)) {
            this.renderer.setText(this._text_39, currVal_130);
            this._expr_130 = currVal_130;
        }
        var currVal_131 = import3.inlineInterpolate(2, 'Página ', this.context.grid.currentPage, ' de ', this.context.grid.rowsCount, '');
        if (import3.checkBinding(throwOnChange, this._expr_131, currVal_131)) {
            this.renderer.setText(this._text_65, currVal_131);
            this._expr_131 = currVal_131;
        }
    };
    View_AuditComponent0.prototype.destroyInternal = function () {
        this._vc_14.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_54.destroyNestedViews();
        this._vc_74.destroyNestedViews();
        this._vc_93.destroyNestedViews();
        this._vc_99.destroyNestedViews();
        this._NgForm_23_3.ngOnDestroy();
    };
    View_AuditComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 14)) {
            return new View_AuditComponent1(this.viewUtils, this, 14, this._anchor_14, this._vc_14);
        }
        if ((nodeIndex == 31)) {
            return new View_AuditComponent2(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 54)) {
            return new View_AuditComponent3(this.viewUtils, this, 54, this._anchor_54, this._vc_54);
        }
        if ((nodeIndex == 74)) {
            return new View_AuditComponent4(this.viewUtils, this, 74, this._anchor_74, this._vc_74);
        }
        if ((nodeIndex == 93)) {
            return new View_AuditComponent5(this.viewUtils, this, 93, this._anchor_93, this._vc_93);
        }
        if ((nodeIndex == 99)) {
            return new View_AuditComponent6(this.viewUtils, this, 99, this._anchor_99, this._vc_99);
        }
        return null;
    };
    View_AuditComponent0.prototype.handleEvent_23 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_23_3.handleEvent(eventName, $event) && result);
        return result;
    };
    View_AuditComponent0.prototype.handleEvent_70 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.grid.prevPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AuditComponent0.prototype.handleEvent_78 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context.grid.nextPage() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AuditComponent0;
}(import1.AppView));
export { View_AuditComponent0 };

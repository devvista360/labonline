var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../../angularApp/app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/router/src/router_module';
import * as import6 from '../../../angularApp/app/shared/shared.module';
import * as import7 from '../../../angularApp/app/core/core.module';
import * as import8 from '@angular/forms/src/directives';
import * as import9 from '@angular/forms/src/form_providers';
import * as import10 from '@angular/http/src/http_module';
import * as import11 from '../../../angularApp/app/home/home.module';
import * as import12 from '../../../angularApp/app/login/login.module';
import * as import13 from '../../../angularApp/app/users/user.module';
import * as import14 from '../../../angularApp/app/audit/audit.module';
import * as import15 from '../../../angularApp/app/exams/exam.module';
import * as import16 from '@angular/common/src/localization';
import * as import17 from '@angular/core/src/application_init';
import * as import18 from '@angular/core/src/testability/testability';
import * as import19 from '@angular/core/src/application_ref';
import * as import20 from '@angular/core/src/linker/compiler';
import * as import21 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import22 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import23 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import24 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import25 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import26 from '@angular/core/src/animation/animation_queue';
import * as import27 from '@angular/core/src/linker/view_utils';
import * as import28 from '@angular/platform-browser/src/browser/title';
import * as import29 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import30 from '@angular/http/src/backends/browser_xhr';
import * as import31 from '@angular/http/src/base_response_options';
import * as import32 from '@angular/http/src/backends/xhr_backend';
import * as import33 from '@angular/http/src/base_request_options';
import * as import34 from '@angular/common/src/location/location';
import * as import35 from '@angular/router/src/url_tree';
import * as import36 from '@angular/router/src/router_outlet_map';
import * as import37 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import38 from '@angular/router/src/router_preloader';
import * as import39 from '../../../angularApp/app/app.constants';
import * as import40 from '../../../angularApp/app/core/services/account.service';
import * as import41 from '../../../angularApp/app/core/services/auth.service';
import * as import42 from '../../../angularApp/app/core/services/auth.guard';
import * as import43 from '../../../angularApp/app/core/services/audit.service';
import * as import44 from '../../../angularApp/app/core/services/exam.service';
import * as import46 from './home/components/home.component.ngfactory';
import * as import47 from './login/components/login.component.ngfactory';
import * as import48 from './users/components/user.component.ngfactory';
import * as import49 from './users/components/change.component.ngfactory';
import * as import50 from './users/components/forgot.component.ngfactory';
import * as import51 from './users/components/reset.component.ngfactory';
import * as import52 from './audit/components/audit.component.ngfactory';
import * as import53 from './exams/components/exam.component.ngfactory';
import * as import54 from './exams/components/exam-detail.component.ngfactory';
import * as import55 from './app.component.ngfactory';
import * as import56 from '@angular/core/src/i18n/tokens';
import * as import57 from '@angular/core/src/application_tokens';
import * as import58 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import59 from '@angular/platform-browser/src/dom/events/key_events';
import * as import60 from '@angular/core/src/zone/ng_zone';
import * as import61 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import62 from '../../../angularApp/app/home/components/home.component';
import * as import63 from '../../../angularApp/app/login/components/login.component';
import * as import64 from '../../../angularApp/app/users/components/user.component';
import * as import65 from '../../../angularApp/app/users/components/change.component';
import * as import66 from '../../../angularApp/app/users/components/forgot.component';
import * as import67 from '../../../angularApp/app/users/components/reset.component';
import * as import68 from '../../../angularApp/app/audit/components/audit.component';
import * as import69 from '../../../angularApp/app/exams/components/exam.component';
import * as import70 from '../../../angularApp/app/exams/components/exam-detail.component';
import * as import71 from '@angular/common/src/location/platform_location';
import * as import72 from '@angular/common/src/location/location_strategy';
import * as import73 from '@angular/router/src/url_handling_strategy';
import * as import74 from '@angular/router/src/route_reuse_strategy';
import * as import75 from '@angular/router/src/router';
import * as import76 from '@angular/core/src/console';
import * as import77 from '@angular/core/src/error_handler';
import * as import78 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import79 from '@angular/platform-browser/src/dom/animation_driver';
import * as import80 from '@angular/core/src/render/api';
import * as import81 from '@angular/core/src/security';
import * as import82 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import83 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import84 from '@angular/http/src/interfaces';
import * as import85 from '@angular/http/src/http';
import * as import86 from '@angular/router/src/router_config_loader';
import * as import87 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import88 from '@angular/router/src/router_state';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import46.HomeComponentNgFactory,
            import47.LoginComponentNgFactory,
            import48.UserComponentNgFactory,
            import49.ChangePasswordComponentNgFactory,
            import50.ForgotPasswordComponentNgFactory,
            import51.ResetPasswordComponentNgFactory,
            import52.AuditComponentNgFactory,
            import53.ExamComponentNgFactory,
            import54.ExamDetailComponentNgFactory,
            import55.AppComponentNgFactory
        ], [import55.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_16", {
        get: function () {
            if ((this.__LOCALE_ID_16 == null)) {
                (this.__LOCALE_ID_16 = import3._localeFactory(this.parent.get(import56.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_17", {
        get: function () {
            if ((this.__NgLocalization_17 == null)) {
                (this.__NgLocalization_17 = new import16.NgLocaleLocalization(this._LOCALE_ID_16));
            }
            return this.__NgLocalization_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_24", {
        get: function () {
            if ((this.__ApplicationRef_24 == null)) {
                (this.__ApplicationRef_24 = this._ApplicationRef__23);
            }
            return this.__ApplicationRef_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_25", {
        get: function () {
            if ((this.__Compiler_25 == null)) {
                (this.__Compiler_25 = new import20.Compiler());
            }
            return this.__Compiler_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_26", {
        get: function () {
            if ((this.__APP_ID_26 == null)) {
                (this.__APP_ID_26 = import57._appIdRandomProviderFactory());
            }
            return this.__APP_ID_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_27", {
        get: function () {
            if ((this.__DOCUMENT_27 == null)) {
                (this.__DOCUMENT_27 = import4._document());
            }
            return this.__DOCUMENT_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_28", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_28 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_28 = new import21.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_29", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_29 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_29 = [
                    new import58.DomEventsPlugin(),
                    new import59.KeyEventsPlugin(),
                    new import21.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_28)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_30", {
        get: function () {
            if ((this.__EventManager_30 == null)) {
                (this.__EventManager_30 = new import22.EventManager(this._EVENT_MANAGER_PLUGINS_29, this.parent.get(import60.NgZone)));
            }
            return this.__EventManager_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_32", {
        get: function () {
            if ((this.__AnimationDriver_32 == null)) {
                (this.__AnimationDriver_32 = import4._resolveDefaultAnimationDriver());
            }
            return this.__AnimationDriver_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_33", {
        get: function () {
            if ((this.__DomRootRenderer_33 == null)) {
                (this.__DomRootRenderer_33 = new import24.DomRootRenderer_(this._DOCUMENT_27, this._EventManager_30, this._DomSharedStylesHost_31, this._AnimationDriver_32, this._APP_ID_26));
            }
            return this.__DomRootRenderer_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgProbeToken_34", {
        get: function () {
            if ((this.__NgProbeToken_34 == null)) {
                (this.__NgProbeToken_34 = [import5.routerNgProbeToken()]);
            }
            return this.__NgProbeToken_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_35", {
        get: function () {
            if ((this.__RootRenderer_35 == null)) {
                (this.__RootRenderer_35 = import61._createConditionalRootRenderer(this._DomRootRenderer_33, this.parent.get(import61.NgProbeToken, null), this._NgProbeToken_34));
            }
            return this.__RootRenderer_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_36", {
        get: function () {
            if ((this.__DomSanitizer_36 == null)) {
                (this.__DomSanitizer_36 = new import25.DomSanitizerImpl());
            }
            return this.__DomSanitizer_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_37", {
        get: function () {
            if ((this.__Sanitizer_37 == null)) {
                (this.__Sanitizer_37 = this._DomSanitizer_36);
            }
            return this.__Sanitizer_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_38", {
        get: function () {
            if ((this.__AnimationQueue_38 == null)) {
                (this.__AnimationQueue_38 = new import26.AnimationQueue(this.parent.get(import60.NgZone)));
            }
            return this.__AnimationQueue_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_39", {
        get: function () {
            if ((this.__ViewUtils_39 == null)) {
                (this.__ViewUtils_39 = new import27.ViewUtils(this._RootRenderer_35, this._Sanitizer_37, this._AnimationQueue_38));
            }
            return this.__ViewUtils_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_40", {
        get: function () {
            if ((this.__IterableDiffers_40 == null)) {
                (this.__IterableDiffers_40 = import3._iterableDiffersFactory());
            }
            return this.__IterableDiffers_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_41", {
        get: function () {
            if ((this.__KeyValueDiffers_41 == null)) {
                (this.__KeyValueDiffers_41 = import3._keyValueDiffersFactory());
            }
            return this.__KeyValueDiffers_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_42", {
        get: function () {
            if ((this.__SharedStylesHost_42 == null)) {
                (this.__SharedStylesHost_42 = this._DomSharedStylesHost_31);
            }
            return this.__SharedStylesHost_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_43", {
        get: function () {
            if ((this.__Title_43 == null)) {
                (this.__Title_43 = new import28.Title());
            }
            return this.__Title_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_44", {
        get: function () {
            if ((this.__RadioControlRegistry_44 == null)) {
                (this.__RadioControlRegistry_44 = new import29.RadioControlRegistry());
            }
            return this.__RadioControlRegistry_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_45", {
        get: function () {
            if ((this.__BrowserXhr_45 == null)) {
                (this.__BrowserXhr_45 = new import30.BrowserXhr());
            }
            return this.__BrowserXhr_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_46", {
        get: function () {
            if ((this.__ResponseOptions_46 == null)) {
                (this.__ResponseOptions_46 = new import31.BaseResponseOptions());
            }
            return this.__ResponseOptions_46;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_47", {
        get: function () {
            if ((this.__XSRFStrategy_47 == null)) {
                (this.__XSRFStrategy_47 = import10._createDefaultCookieXSRFStrategy());
            }
            return this.__XSRFStrategy_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_48", {
        get: function () {
            if ((this.__XHRBackend_48 == null)) {
                (this.__XHRBackend_48 = new import32.XHRBackend(this._BrowserXhr_45, this._ResponseOptions_46, this._XSRFStrategy_47));
            }
            return this.__XHRBackend_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_49", {
        get: function () {
            if ((this.__RequestOptions_49 == null)) {
                (this.__RequestOptions_49 = new import33.BaseRequestOptions());
            }
            return this.__RequestOptions_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_50", {
        get: function () {
            if ((this.__Http_50 == null)) {
                (this.__Http_50 = import10.httpFactory(this._XHRBackend_48, this._RequestOptions_49));
            }
            return this.__Http_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTES_51", {
        get: function () {
            if ((this.__ROUTES_51 == null)) {
                (this.__ROUTES_51 = [
                    [{
                            path: '',
                            component: import62.HomeComponent
                        }
                    ],
                    [{
                            path: '',
                            component: import63.LoginComponent
                        }
                    ],
                    [
                        {
                            path: '',
                            component: import64.UserComponent
                        },
                        {
                            path: 'changepsw',
                            component: import65.ChangePasswordComponent
                        },
                        {
                            path: 'forgot',
                            component: import66.ForgotPasswordComponent
                        },
                        {
                            path: 'resetpwd/:id',
                            component: import67.ResetPasswordComponent
                        }
                    ],
                    [{
                            path: '',
                            component: import68.AuditComponent
                        }
                    ],
                    [
                        {
                            path: '',
                            component: import69.ExamComponent
                        },
                        {
                            path: 'exams/:id',
                            component: import69.ExamComponent
                        },
                        {
                            path: 'examdetail/:id',
                            component: import70.ExamDetailComponent
                        }
                    ],
                    [
                        {
                            path: 'audit',
                            loadChildren: './audit/audit.module#AuditModule'
                        },
                        {
                            path: 'login',
                            loadChildren: './login/login.module#LoginModule'
                        },
                        {
                            path: 'home',
                            loadChildren: './home/home.module#HomeModule',
                            canActivate: [import42.AuthGuard]
                        },
                        {
                            path: 'about',
                            loadChildren: './about/about.module#AboutModule',
                            canActivate: [import42.AuthGuard]
                        },
                        {
                            path: 'users',
                            loadChildren: './users/user.module#UserModule',
                            canActivate: [import42.AuthGuard]
                        },
                        {
                            path: 'exams',
                            loadChildren: './exams/exam.module#ExamModule',
                            canActivate: [import42.AuthGuard]
                        },
                        {
                            path: '',
                            redirectTo: 'home',
                            pathMatch: 'full'
                        },
                        {
                            path: '**',
                            redirectTo: ''
                        }
                    ]
                ]);
            }
            return this.__ROUTES_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_CONFIGURATION_52", {
        get: function () {
            if ((this.__ROUTER_CONFIGURATION_52 == null)) {
                (this.__ROUTER_CONFIGURATION_52 = { useHash: true });
            }
            return this.__ROUTER_CONFIGURATION_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LocationStrategy_53", {
        get: function () {
            if ((this.__LocationStrategy_53 == null)) {
                (this.__LocationStrategy_53 = import5.provideLocationStrategy(this.parent.get(import71.PlatformLocation), this.parent.get(import72.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_52));
            }
            return this.__LocationStrategy_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Location_54", {
        get: function () {
            if ((this.__Location_54 == null)) {
                (this.__Location_54 = new import34.Location(this._LocationStrategy_53));
            }
            return this.__Location_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UrlSerializer_55", {
        get: function () {
            if ((this.__UrlSerializer_55 == null)) {
                (this.__UrlSerializer_55 = new import35.DefaultUrlSerializer());
            }
            return this.__UrlSerializer_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterOutletMap_56", {
        get: function () {
            if ((this.__RouterOutletMap_56 == null)) {
                (this.__RouterOutletMap_56 = new import36.RouterOutletMap());
            }
            return this.__RouterOutletMap_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgModuleFactoryLoader_57", {
        get: function () {
            if ((this.__NgModuleFactoryLoader_57 == null)) {
                (this.__NgModuleFactoryLoader_57 = new import37.SystemJsNgModuleLoader(this._Compiler_25, this.parent.get(import37.SystemJsNgModuleLoaderConfig, null)));
            }
            return this.__NgModuleFactoryLoader_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Router_58", {
        get: function () {
            if ((this.__Router_58 == null)) {
                (this.__Router_58 = import5.setupRouter(this._ApplicationRef_24, this._UrlSerializer_55, this._RouterOutletMap_56, this._Location_54, this, this._NgModuleFactoryLoader_57, this._Compiler_25, this._ROUTES_51, this._ROUTER_CONFIGURATION_52, this.parent.get(import73.UrlHandlingStrategy, null), this.parent.get(import74.RouteReuseStrategy, null)));
            }
            return this.__Router_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_59", {
        get: function () {
            if ((this.__ActivatedRoute_59 == null)) {
                (this.__ActivatedRoute_59 = import5.rootRoute(this._Router_58));
            }
            return this.__ActivatedRoute_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_63", {
        get: function () {
            if ((this.__PreloadAllModules_63 == null)) {
                (this.__PreloadAllModules_63 = new import38.PreloadAllModules());
            }
            return this.__PreloadAllModules_63;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_64", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_64 == null)) {
                (this.__ROUTER_INITIALIZER_64 = import5.getBootstrapListener(this._RouterInitializer_19));
            }
            return this.__ROUTER_INITIALIZER_64;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_65", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_65 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_65 = [this._ROUTER_INITIALIZER_64]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_65;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Configuration_66", {
        get: function () {
            if ((this.__Configuration_66 == null)) {
                (this.__Configuration_66 = new import39.Configuration());
            }
            return this.__Configuration_66;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AccountService_67", {
        get: function () {
            if ((this.__AccountService_67 == null)) {
                (this.__AccountService_67 = new import40.AccountService(this._Http_50, this._Configuration_66));
            }
            return this.__AccountService_67;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthService_68", {
        get: function () {
            if ((this.__AuthService_68 == null)) {
                (this.__AuthService_68 = new import41.AuthService(this._Router_58));
            }
            return this.__AuthService_68;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuthGuard_69", {
        get: function () {
            if ((this.__AuthGuard_69 == null)) {
                (this.__AuthGuard_69 = new import42.AuthGuard(this._Router_58, this._AuthService_68));
            }
            return this.__AuthGuard_69;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AuditService_70", {
        get: function () {
            if ((this.__AuditService_70 == null)) {
                (this.__AuditService_70 = new import43.AuditService(this._Http_50, this._Configuration_66, this._AuthGuard_69));
            }
            return this.__AuditService_70;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ExamService_71", {
        get: function () {
            if ((this.__ExamService_71 == null)) {
                (this.__ExamService_71 = new import44.ExamService(this._Http_50, this._Configuration_66, this._AuthService_68));
            }
            return this.__ExamService_71;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ROUTER_FORROOT_GUARD_3 = import5.provideForRootGuard(this.parent.get(import75.Router, null));
        this._RouterModule_4 = new import5.RouterModule(this._ROUTER_FORROOT_GUARD_3);
        this._SharedModule_5 = new import6.SharedModule();
        this._CoreModule_6 = new import7.CoreModule();
        this._InternalFormsSharedModule_7 = new import8.InternalFormsSharedModule();
        this._FormsModule_8 = new import9.FormsModule();
        this._HttpModule_9 = new import10.HttpModule();
        this._HomeModule_10 = new import11.HomeModule();
        this._LoginModule_11 = new import12.LoginModule();
        this._UserModule_12 = new import13.UserModule();
        this._AuditModule_13 = new import14.AuditModule();
        this._ExamModule_14 = new import15.ExamModule();
        this._AppModule_15 = new import1.AppModule();
        this._ErrorHandler_18 = import4.errorHandler();
        this._RouterInitializer_19 = new import5.RouterInitializer(this);
        this._APP_INITIALIZER_20 = [import5.getAppInitializer(this._RouterInitializer_19)];
        this._ApplicationInitStatus_21 = new import17.ApplicationInitStatus(this._APP_INITIALIZER_20);
        this._Testability_22 = new import18.Testability(this.parent.get(import60.NgZone));
        this._ApplicationRef__23 = new import19.ApplicationRef_(this.parent.get(import60.NgZone), this.parent.get(import76.Console), this, this._ErrorHandler_18, this, this._ApplicationInitStatus_21, this.parent.get(import18.TestabilityRegistry, null), this._Testability_22);
        this._DomSharedStylesHost_31 = new import23.DomSharedStylesHost(this._DOCUMENT_27);
        this._NoPreloading_60 = new import38.NoPreloading();
        this._PreloadingStrategy_61 = this._NoPreloading_60;
        this._RouterPreloader_62 = new import38.RouterPreloader(this._Router_58, this._NgModuleFactoryLoader_57, this._Compiler_25, this, this._PreloadingStrategy_61);
        return this._AppModule_15;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_3;
        }
        if ((token === import5.RouterModule)) {
            return this._RouterModule_4;
        }
        if ((token === import6.SharedModule)) {
            return this._SharedModule_5;
        }
        if ((token === import7.CoreModule)) {
            return this._CoreModule_6;
        }
        if ((token === import8.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_7;
        }
        if ((token === import9.FormsModule)) {
            return this._FormsModule_8;
        }
        if ((token === import10.HttpModule)) {
            return this._HttpModule_9;
        }
        if ((token === import11.HomeModule)) {
            return this._HomeModule_10;
        }
        if ((token === import12.LoginModule)) {
            return this._LoginModule_11;
        }
        if ((token === import13.UserModule)) {
            return this._UserModule_12;
        }
        if ((token === import14.AuditModule)) {
            return this._AuditModule_13;
        }
        if ((token === import15.ExamModule)) {
            return this._ExamModule_14;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_15;
        }
        if ((token === import56.LOCALE_ID)) {
            return this._LOCALE_ID_16;
        }
        if ((token === import16.NgLocalization)) {
            return this._NgLocalization_17;
        }
        if ((token === import77.ErrorHandler)) {
            return this._ErrorHandler_18;
        }
        if ((token === import5.RouterInitializer)) {
            return this._RouterInitializer_19;
        }
        if ((token === import17.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_20;
        }
        if ((token === import17.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_21;
        }
        if ((token === import18.Testability)) {
            return this._Testability_22;
        }
        if ((token === import19.ApplicationRef_)) {
            return this._ApplicationRef__23;
        }
        if ((token === import19.ApplicationRef)) {
            return this._ApplicationRef_24;
        }
        if ((token === import20.Compiler)) {
            return this._Compiler_25;
        }
        if ((token === import57.APP_ID)) {
            return this._APP_ID_26;
        }
        if ((token === import78.DOCUMENT)) {
            return this._DOCUMENT_27;
        }
        if ((token === import21.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_28;
        }
        if ((token === import22.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_29;
        }
        if ((token === import22.EventManager)) {
            return this._EventManager_30;
        }
        if ((token === import23.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_31;
        }
        if ((token === import79.AnimationDriver)) {
            return this._AnimationDriver_32;
        }
        if ((token === import24.DomRootRenderer)) {
            return this._DomRootRenderer_33;
        }
        if ((token === import19.NgProbeToken)) {
            return this._NgProbeToken_34;
        }
        if ((token === import80.RootRenderer)) {
            return this._RootRenderer_35;
        }
        if ((token === import25.DomSanitizer)) {
            return this._DomSanitizer_36;
        }
        if ((token === import81.Sanitizer)) {
            return this._Sanitizer_37;
        }
        if ((token === import26.AnimationQueue)) {
            return this._AnimationQueue_38;
        }
        if ((token === import27.ViewUtils)) {
            return this._ViewUtils_39;
        }
        if ((token === import82.IterableDiffers)) {
            return this._IterableDiffers_40;
        }
        if ((token === import83.KeyValueDiffers)) {
            return this._KeyValueDiffers_41;
        }
        if ((token === import23.SharedStylesHost)) {
            return this._SharedStylesHost_42;
        }
        if ((token === import28.Title)) {
            return this._Title_43;
        }
        if ((token === import29.RadioControlRegistry)) {
            return this._RadioControlRegistry_44;
        }
        if ((token === import30.BrowserXhr)) {
            return this._BrowserXhr_45;
        }
        if ((token === import31.ResponseOptions)) {
            return this._ResponseOptions_46;
        }
        if ((token === import84.XSRFStrategy)) {
            return this._XSRFStrategy_47;
        }
        if ((token === import32.XHRBackend)) {
            return this._XHRBackend_48;
        }
        if ((token === import33.RequestOptions)) {
            return this._RequestOptions_49;
        }
        if ((token === import85.Http)) {
            return this._Http_50;
        }
        if ((token === import86.ROUTES)) {
            return this._ROUTES_51;
        }
        if ((token === import5.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_52;
        }
        if ((token === import72.LocationStrategy)) {
            return this._LocationStrategy_53;
        }
        if ((token === import34.Location)) {
            return this._Location_54;
        }
        if ((token === import35.UrlSerializer)) {
            return this._UrlSerializer_55;
        }
        if ((token === import36.RouterOutletMap)) {
            return this._RouterOutletMap_56;
        }
        if ((token === import87.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_57;
        }
        if ((token === import75.Router)) {
            return this._Router_58;
        }
        if ((token === import88.ActivatedRoute)) {
            return this._ActivatedRoute_59;
        }
        if ((token === import38.NoPreloading)) {
            return this._NoPreloading_60;
        }
        if ((token === import38.PreloadingStrategy)) {
            return this._PreloadingStrategy_61;
        }
        if ((token === import38.RouterPreloader)) {
            return this._RouterPreloader_62;
        }
        if ((token === import38.PreloadAllModules)) {
            return this._PreloadAllModules_63;
        }
        if ((token === import5.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_64;
        }
        if ((token === import57.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_65;
        }
        if ((token === import39.Configuration)) {
            return this._Configuration_66;
        }
        if ((token === import40.AccountService)) {
            return this._AccountService_67;
        }
        if ((token === import41.AuthService)) {
            return this._AuthService_68;
        }
        if ((token === import42.AuthGuard)) {
            return this._AuthGuard_69;
        }
        if ((token === import43.AuditService)) {
            return this._AuditService_70;
        }
        if ((token === import44.ExamService)) {
            return this._ExamService_71;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__23.ngOnDestroy();
        this._DomSharedStylesHost_31.ngOnDestroy();
        this._RouterPreloader_62.ngOnDestroy();
    };
    return AppModuleInjector;
}(import0.NgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);

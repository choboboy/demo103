/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/user-service';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '@angular/common/src/pipes/uppercase_pipe';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from 'ionic-angular/components/app/app';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/gestures/gesture-controller';
import * as import28 from '@angular/core/src/linker/template_ref';
import * as import29 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import30 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import31 from 'ionic-angular/components/navbar/navbar';
import * as import32 from '@angular/common/src/directives/ng_for';
import * as import33 from 'ionic-angular/components/list/list';
import * as import34 from 'ionic-angular/components/content/content';
import * as import35 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import36 from '@angular/core/src/linker/query_list';
import * as import37 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import38 from 'ionic-angular/util/form';
import * as import39 from 'ionic-angular/components/avatar/avatar';
import * as import40 from 'ionic-angular/components/item/item';
import * as import41 from '@angular/core/src/security';
export var Wrapper_HomePage = (function () {
    function Wrapper_HomePage(p0, p1) {
        this.changed = false;
        this.context = new import0.HomePage(p0, p1);
    }
    Wrapper_HomePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_HomePage;
}());
var renderType_HomePage_Host = null;
var _View_HomePage_Host0 = (function (_super) {
    __extends(_View_HomePage_Host0, _super);
    function _View_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage_Host0, renderType_HomePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-home', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_HomePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.UserService));
        this._appEl_0.initComponent(this._HomePage_0_4.context, [], compView_0);
        compView_0.create(this._HomePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_HomePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.HomePage) && (0 === requestNodeIndex))) {
            return this._HomePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._HomePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage_Host0;
}(import1.AppView));
function viewFactory_HomePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage_Host === null)) {
        (renderType_HomePage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_HomePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var HomePageNgFactory = new import11.ComponentFactory('page-home', viewFactory_HomePage_Host0, import0.HomePage);
var styles_HomePage = [];
var renderType_HomePage = null;
var _View_HomePage0 = (function (_super) {
    __extends(_View_HomePage0, _super);
    function _View_HomePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage0, renderType_HomePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import22.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import14.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import14.Wrapper_ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import23.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Demo 103\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import15.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import15.Wrapper_Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import22.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import16.Wrapper_List(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import27.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import28.TemplateRef_(this._appEl_13, viewFactory_HomePage1);
        this._NgFor_13_6 = new import17.Wrapper_NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import29.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15
            ]),
            []
        ], null);
        this._text_16 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._pipe_uppercase_0 = new import18.UpperCasePipe();
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._text_15,
            this._text_16
        ], [], []);
        return null;
    };
    _View_HomePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import31.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import28.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import32.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6.context;
        }
        if (((token === import33.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._List_11_3.context;
        }
        if (((token === import34.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_HomePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = 'primary';
        this._Navbar_2_4.check_color(currVal_0, throwOnChange, false);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        this._List_11_3.detectChangesInternal(this, this._el_11, throwOnChange);
        var currVal_4 = this.context.users;
        this._NgFor_13_6.check_ngForOf(currVal_4, throwOnChange, false);
        this._NgFor_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_1 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_HomePage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_HomePage0;
}(import1.AppView));
export function viewFactory_HomePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_HomePage === null)) {
        (renderType_HomePage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_HomePage, {}));
    }
    return new _View_HomePage0(viewUtils, parentInjector, declarationEl);
}
var _View_HomePage1 = (function (_super) {
    __extends(_View_HomePage1, _super);
    function _View_HomePage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_HomePage1, renderType_HomePage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_HomePage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import35.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import35.Wrapper_Item(this.parent.parentInjector.get(import38.Form), this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import35.Wrapper_ItemContent();
        this._query_Label_0_0 = new import36.QueryList();
        this._query_Button_0_1 = new import36.QueryList();
        this._query_Icon_0_2 = new import36.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_2, 'item-left', '');
        this._Avatar_2_3 = new import37.Wrapper_Avatar();
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'img', null);
        this._text_5 = this.renderer.createText(this._el_2, '\n      ', null);
        this._text_6 = this.renderer.createText(null, '\n      ', null);
        this._el_7 = this.renderer.createElement(null, 'h2', null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(null, '\n      ', null);
        this._el_10 = this.renderer.createElement(null, 'p', null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [].concat([this._el_2]),
            [],
            [].concat([
                this._text_1,
                this._text_6,
                this._el_7,
                this._text_9,
                this._el_10,
                this._text_12
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._pipe_uppercase_0_0 = import4.pureProxy1(this.parent._pipe_uppercase_0.transform.bind(this.parent._pipe_uppercase_0));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12
        ], [], []);
        return null;
    };
    _View_HomePage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import39.Avatar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._Avatar_2_3.context;
        }
        if (((token === import40.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._Item_0_4.context;
        }
        if (((token === import40.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_HomePage1.prototype.detectChangesInternal = function (throwOnChange) {
        var valUnwrapper = new import7.ValueUnwrapper();
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Avatar_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this.context.$implicit.picture.medium;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_4, 'src', this.viewUtils.sanitizer.sanitize(import41.SecurityContext.URL, currVal_0));
            this._expr_0 = currVal_0;
        }
        valUnwrapper.reset();
        var currVal_1 = import4.interpolate(1, '', valUnwrapper.unwrap(import4.castByValue(this._pipe_uppercase_0_0, this.parent._pipe_uppercase_0.transform)(this.context.$implicit.name.first)), '');
        if ((valUnwrapper.hasWrappedValue || import4.checkBinding(throwOnChange, this._expr_1, currVal_1))) {
            this.renderer.setText(this._text_8, currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.email, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_11, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_HomePage1;
}(import1.AppView));
function viewFactory_HomePage1(viewUtils, parentInjector, declarationEl) {
    return new _View_HomePage1(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=home.ngfactory.js.map
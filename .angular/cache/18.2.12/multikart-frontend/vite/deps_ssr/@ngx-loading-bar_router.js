import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from "./chunk-V4BO7I2I.js";
import "./chunk-VED7U6UB.js";
import "./chunk-IXNWETZX.js";
import {
  LoadingBarModule,
  LoadingBarService
} from "./chunk-QVOH4NQB.js";
import "./chunk-OIIWII42.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-2FSAHAZ4.js";
import "./chunk-5IW5ZEPE.js";
import "./chunk-UOPINYA3.js";
import "./chunk-RPWZ4CMX.js";
import "./chunk-NQ4HTGF6.js";

// node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.mjs
var LoadingBarRouterModule = class {
  constructor(router, loader) {
    const ref = loader.useRef("router");
    router.events.subscribe((event) => {
      const navState = this.getCurrentNavigationState(router);
      if (navState && navState.ignoreLoadingBar) {
        return;
      }
      if (event instanceof NavigationStart) {
        ref.start();
      }
      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        ref.complete();
      }
    });
  }
  getCurrentNavigationState(router) {
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
      return currentNavigation.extras.state;
    }
    return {};
  }
};
LoadingBarRouterModule.ɵfac = function LoadingBarRouterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadingBarRouterModule)(ɵɵinject(Router), ɵɵinject(LoadingBarService));
};
LoadingBarRouterModule.ɵmod = ɵɵdefineNgModule({
  type: LoadingBarRouterModule,
  imports: [RouterModule, LoadingBarModule],
  exports: [RouterModule, LoadingBarModule]
});
LoadingBarRouterModule.ɵinj = ɵɵdefineInjector({
  imports: [[RouterModule, LoadingBarModule], RouterModule, LoadingBarModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarRouterModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: LoadingBarService
    }];
  }, null);
})();
export {
  LoadingBarRouterModule
};
//# sourceMappingURL=@ngx-loading-bar_router.js.map

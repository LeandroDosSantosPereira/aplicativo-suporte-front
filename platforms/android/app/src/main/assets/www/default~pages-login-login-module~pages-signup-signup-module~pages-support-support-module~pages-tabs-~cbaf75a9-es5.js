function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-login-login-module~pages-signup-signup-module~pages-support-support-module~pages-tabs-~cbaf75a9"], {
  /***/
  "./node_modules/rxjs/internal/Observable.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Observable.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var canReportError_1 = __webpack_require__(
    /*! ./util/canReportError */
    "./node_modules/rxjs/internal/util/canReportError.js");

    var toSubscriber_1 = __webpack_require__(
    /*! ./util/toSubscriber */
    "./node_modules/rxjs/internal/util/toSubscriber.js");

    var observable_1 = __webpack_require__(
    /*! ./symbol/observable */
    "./node_modules/rxjs/internal/symbol/observable.js");

    var pipe_1 = __webpack_require__(
    /*! ./util/pipe */
    "./node_modules/rxjs/internal/util/pipe.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var Observable = function () {
      function Observable(subscribe) {
        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };

      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);

        if (operator) {
          sink.add(operator.call(sink, this.source));
        } else {
          sink.add(this.source || config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        }

        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;

            if (sink.syncErrorThrown) {
              throw sink.syncErrorValue;
            }
          }
        }

        return sink;
      };

      Observable.prototype._trySubscribe = function (sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            sink.syncErrorThrown = true;
            sink.syncErrorValue = err;
          }

          if (canReportError_1.canReportError(sink)) {
            sink.error(err);
          } else {
            console.warn(err);
          }
        }
      };

      Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var subscription;
          subscription = _this.subscribe(function (value) {
            try {
              next(value);
            } catch (err) {
              reject(err);

              if (subscription) {
                subscription.unsubscribe();
              }
            }
          }, reject, resolve);
        });
      };

      Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
      };

      Observable.prototype[observable_1.observable] = function () {
        return this;
      };

      Observable.prototype.pipe = function () {
        var operations = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }

        if (operations.length === 0) {
          return this;
        }

        return pipe_1.pipeFromArray(operations)(this);
      };

      Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;

        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
          var value;

          _this.subscribe(function (x) {
            return value = x;
          }, function (err) {
            return reject(err);
          }, function () {
            return resolve(value);
          });
        });
      };

      Observable.create = function (subscribe) {
        return new Observable(subscribe);
      };

      return Observable;
    }();

    exports.Observable = Observable;

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    } //# sourceMappingURL=Observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/Observer.js":
  /*!************************************************!*\
    !*** ./node_modules/rxjs/internal/Observer.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObserverJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    exports.empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError_1.hostReportError(err);
        }
      },
      complete: function complete() {}
    }; //# sourceMappingURL=Observer.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscriber.js":
  /*!**************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscriber.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    var __extends = this && this.__extends || function () {
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      return function (d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var Observer_1 = __webpack_require__(
    /*! ./Observer */
    "./node_modules/rxjs/internal/Observer.js");

    var Subscription_1 = __webpack_require__(
    /*! ./Subscription */
    "./node_modules/rxjs/internal/Subscription.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../internal/symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var config_1 = __webpack_require__(
    /*! ./config */
    "./node_modules/rxjs/internal/config.js");

    var hostReportError_1 = __webpack_require__(
    /*! ./util/hostReportError */
    "./node_modules/rxjs/internal/util/hostReportError.js");

    var Subscriber = function (_super) {
      __extends(Subscriber, _super);

      function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this.destination = Observer_1.empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this.destination = Observer_1.empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this.destination = destinationOrNext;
                destinationOrNext.add(_this);
              } else {
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext);
              }

              break;
            }

          default:
            _this.syncErrorThrowable = true;
            _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
            break;
        }

        return _this;
      }

      Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () {
        return this;
      };

      Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
      };

      Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
          this._next(value);
        }
      };

      Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          this.isStopped = true;

          this._error(err);
        }
      };

      Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
          this.isStopped = true;

          this._complete();
        }
      };

      Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
          return;
        }

        this.isStopped = true;

        _super.prototype.unsubscribe.call(this);
      };

      Subscriber.prototype._next = function (value) {
        this.destination.next(value);
      };

      Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
      };

      Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
      };

      Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
      };

      return Subscriber;
    }(Subscription_1.Subscription);

    exports.Subscriber = Subscriber;

    var SafeSubscriber = function (_super) {
      __extends(SafeSubscriber, _super);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;

        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;

        if (isFunction_1.isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== Observer_1.empty) {
            context = Object.create(observerOrNext);

            if (isFunction_1.isFunction(context.unsubscribe)) {
              _this.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this.unsubscribe.bind(_this);
          }
        }

        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
      }

      SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
          var _parentSubscriber = this._parentSubscriber;

          if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
            this.__tryOrUnsub(this._next, value);
          } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;
          var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;

          if (this._error) {
            if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._error, err);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, this._error, err);

              this.unsubscribe();
            }
          } else if (!_parentSubscriber.syncErrorThrowable) {
            this.unsubscribe();

            if (useDeprecatedSynchronousErrorHandling) {
              throw err;
            }

            hostReportError_1.hostReportError(err);
          } else {
            if (useDeprecatedSynchronousErrorHandling) {
              _parentSubscriber.syncErrorValue = err;
              _parentSubscriber.syncErrorThrown = true;
            } else {
              hostReportError_1.hostReportError(err);
            }

            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.complete = function () {
        var _this = this;

        if (!this.isStopped) {
          var _parentSubscriber = this._parentSubscriber;

          if (this._complete) {
            var wrappedComplete = function wrappedComplete() {
              return _this._complete.call(_this._context);
            };

            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(wrappedComplete);

              this.unsubscribe();
            } else {
              this.__tryOrSetError(_parentSubscriber, wrappedComplete);

              this.unsubscribe();
            }
          } else {
            this.unsubscribe();
          }
        }
      };

      SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
          fn.call(this._context, value);
        } catch (err) {
          this.unsubscribe();

          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
          } else {
            hostReportError_1.hostReportError(err);
          }
        }
      };

      SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
          throw new Error('bad call');
        }

        try {
          fn.call(this._context, value);
        } catch (err) {
          if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
          } else {
            hostReportError_1.hostReportError(err);
            return true;
          }
        }

        return false;
      };

      SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;

        _parentSubscriber.unsubscribe();
      };

      return SafeSubscriber;
    }(Subscriber);

    exports.SafeSubscriber = SafeSubscriber; //# sourceMappingURL=Subscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/Subscription.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/Subscription.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSubscriptionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var isArray_1 = __webpack_require__(
    /*! ./util/isArray */
    "./node_modules/rxjs/internal/util/isArray.js");

    var isObject_1 = __webpack_require__(
    /*! ./util/isObject */
    "./node_modules/rxjs/internal/util/isObject.js");

    var isFunction_1 = __webpack_require__(
    /*! ./util/isFunction */
    "./node_modules/rxjs/internal/util/isFunction.js");

    var UnsubscriptionError_1 = __webpack_require__(
    /*! ./util/UnsubscriptionError */
    "./node_modules/rxjs/internal/util/UnsubscriptionError.js");

    var Subscription = function () {
      function Subscription(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      Subscription.prototype.unsubscribe = function () {
        var errors;

        if (this.closed) {
          return;
        }

        var _a = this,
            _parentOrParents = _a._parentOrParents,
            _unsubscribe = _a._unsubscribe,
            _subscriptions = _a._subscriptions;

        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (_parentOrParents instanceof Subscription) {
          _parentOrParents.remove(this);
        } else if (_parentOrParents !== null) {
          for (var index = 0; index < _parentOrParents.length; ++index) {
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
          }
        }

        if (isFunction_1.isFunction(_unsubscribe)) {
          try {
            _unsubscribe.call(this);
          } catch (e) {
            errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
          }
        }

        if (isArray_1.isArray(_subscriptions)) {
          var index = -1;
          var len = _subscriptions.length;

          while (++index < len) {
            var sub = _subscriptions[index];

            if (isObject_1.isObject(sub)) {
              try {
                sub.unsubscribe();
              } catch (e) {
                errors = errors || [];

                if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                  errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                } else {
                  errors.push(e);
                }
              }
            }
          }
        }

        if (errors) {
          throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
      };

      Subscription.prototype.add = function (teardown) {
        var subscription = teardown;

        if (!teardown) {
          return Subscription.EMPTY;
        }

        switch (typeof teardown) {
          case 'function':
            subscription = new Subscription(teardown);

          case 'object':
            if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
              return subscription;
            } else if (this.closed) {
              subscription.unsubscribe();
              return subscription;
            } else if (!(subscription instanceof Subscription)) {
              var tmp = subscription;
              subscription = new Subscription();
              subscription._subscriptions = [tmp];
            }

            break;

          default:
            {
              throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }

        var _parentOrParents = subscription._parentOrParents;

        if (_parentOrParents === null) {
          subscription._parentOrParents = this;
        } else if (_parentOrParents instanceof Subscription) {
          if (_parentOrParents === this) {
            return subscription;
          }

          subscription._parentOrParents = [_parentOrParents, this];
        } else if (_parentOrParents.indexOf(this) === -1) {
          _parentOrParents.push(this);
        } else {
          return subscription;
        }

        var subscriptions = this._subscriptions;

        if (subscriptions === null) {
          this._subscriptions = [subscription];
        } else {
          subscriptions.push(subscription);
        }

        return subscription;
      };

      Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;

        if (subscriptions) {
          var subscriptionIndex = subscriptions.indexOf(subscription);

          if (subscriptionIndex !== -1) {
            subscriptions.splice(subscriptionIndex, 1);
          }
        }
      };

      Subscription.EMPTY = function (empty) {
        empty.closed = true;
        return empty;
      }(new Subscription());

      return Subscription;
    }();

    exports.Subscription = Subscription;

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError_1.UnsubscriptionError ? err.errors : err);
      }, []);
    } //# sourceMappingURL=Subscription.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/config.js":
  /*!**********************************************!*\
    !*** ./node_modules/rxjs/internal/config.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalConfigJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    exports.config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    }; //# sourceMappingURL=config.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/observable/throwError.js":
  /*!*************************************************************!*\
    !*** ./node_modules/rxjs/internal/observable/throwError.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalObservableThrowErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Observable_1 = __webpack_require__(
    /*! ../Observable */
    "./node_modules/rxjs/internal/Observable.js");

    function throwError(error, scheduler) {
      if (!scheduler) {
        return new Observable_1.Observable(function (subscriber) {
          return subscriber.error(error);
        });
      } else {
        return new Observable_1.Observable(function (subscriber) {
          return scheduler.schedule(dispatch, 0, {
            error: error,
            subscriber: subscriber
          });
        });
      }
    }

    exports.throwError = throwError;

    function dispatch(_a) {
      var error = _a.error,
          subscriber = _a.subscriber;
      subscriber.error(error);
    } //# sourceMappingURL=throwError.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/observable.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolObservableJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }(); //# sourceMappingURL=observable.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalSymbolRxSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    exports.$$rxSubscriber = exports.rxSubscriber; //# sourceMappingURL=rxSubscriber.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
  /*!****************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilUnsubscriptionErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) {
          return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    exports.UnsubscriptionError = UnsubscriptionErrorImpl; //# sourceMappingURL=UnsubscriptionError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/canReportError.js":
  /*!***********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilCanReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    function canReportError(observer) {
      while (observer) {
        var _a = observer,
            closed_1 = _a.closed,
            destination = _a.destination,
            isStopped = _a.isStopped;

        if (closed_1 || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber_1.Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    exports.canReportError = canReportError; //# sourceMappingURL=canReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/hostReportError.js":
  /*!************************************************************!*\
    !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
    \************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilHostReportErrorJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    exports.hostReportError = hostReportError; //# sourceMappingURL=hostReportError.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isArray.js":
  /*!****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isArray.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsArrayJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    exports.isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }(); //# sourceMappingURL=isArray.js.map

    /***/

  },

  /***/
  "./node_modules/rxjs/internal/util/isFunction.js":
  /*!*******************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsFunctionJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    exports.isFunction = isFunction; //# sourceMappingURL=isFunction.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/isObject.js":
  /*!*****************************************************!*\
    !*** ./node_modules/rxjs/internal/util/isObject.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilIsObjectJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    exports.isObject = isObject; //# sourceMappingURL=isObject.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/noop.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/noop.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilNoopJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    function noop() {}

    exports.noop = noop; //# sourceMappingURL=noop.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/pipe.js":
  /*!*************************************************!*\
    !*** ./node_modules/rxjs/internal/util/pipe.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilPipeJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var noop_1 = __webpack_require__(
    /*! ./noop */
    "./node_modules/rxjs/internal/util/noop.js");

    function pipe() {
      var fns = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }

      return pipeFromArray(fns);
    }

    exports.pipe = pipe;

    function pipeFromArray(fns) {
      if (!fns) {
        return noop_1.noop;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    exports.pipeFromArray = pipeFromArray; //# sourceMappingURL=pipe.js.map

    /***/
  },

  /***/
  "./node_modules/rxjs/internal/util/toSubscriber.js":
  /*!*********************************************************!*\
    !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRxjsInternalUtilToSubscriberJs(module, exports, __webpack_require__) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var Subscriber_1 = __webpack_require__(
    /*! ../Subscriber */
    "./node_modules/rxjs/internal/Subscriber.js");

    var rxSubscriber_1 = __webpack_require__(
    /*! ../symbol/rxSubscriber */
    "./node_modules/rxjs/internal/symbol/rxSubscriber.js");

    var Observer_1 = __webpack_require__(
    /*! ../Observer */
    "./node_modules/rxjs/internal/Observer.js");

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
          return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
      }

      return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
    }

    exports.toSubscriber = toSubscriber; //# sourceMappingURL=toSubscriber.js.map

    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/internal/observable/throwError */
    "./node_modules/rxjs/internal/observable/throwError.js");
    /* harmony import */


    var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _connectionurl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./connectionurl */
    "./src/app/auth/connectionurl.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http; //Recebe a url da classe ConnectionUrl

        this.link = new _connectionurl__WEBPACK_IMPORTED_MODULE_5__["ConnectionUrl"](); // Concatena a url com a rota

        this.url = this.link.urlconnection + 'api/v1/users'; // Do this on service. But for this demo lets do here

        this.token = localStorage.getItem('token');
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          Authorization: 'Bearer ' + this.token
        }); // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // Handle API errors


      _createClass(AuthService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "register",
        //Método de cadastrar o usuário
        value: function register(user) {
          // return this.http.post(`${this.url}/create`, user);
          return this.http.post("".concat(this.url), user);
        } //Método de login

      }, {
        key: "login",
        value: function login(credentials) {
          console.log(credentials);
          return this.http.post("".concat(this.url, "/login"), credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response.token;
          }));
        } // Método de atualizar usuário

      }, {
        key: "updateItem",
        value: function updateItem(id, item) {
          this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.token);
          return this.http.put(this.url + '/' + id, JSON.stringify(item), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } // Busca um usuário pelo id

      }, {
        key: "getItem",
        value: function getItem(id) {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.http.get(_this2.url + '/' + id, {
              headers: _this2.headers
            }).subscribe(function (data) {
              resolve(data);
              _this2.users = data;
            }, function (err) {
              // Caso aconteça algum problema
              console.log(err); // Verifica se está online

              if (navigator.onLine) {
                // Da um reload na página para forçar a pegar o token caso estaja conectado a internet
                document.location.reload(true);
              } else {
                // Se não estiver conectado exibe essa mensagem de erro
                alert("Você deve estar conectado á internet");
              }

              ;
            });
          });
        } // Busca todos os usuário

      }, {
        key: "getAll",
        value: function getAll() {
          var _this3 = this;

          return new Promise(function (resolve) {
            _this3.http.get(_this3.url, {
              headers: _this3.headers
            }).subscribe(function (data) {
              resolve(data);
            }, function (err) {
              console.log(err);
            });
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/auth/connectionurl.ts":
  /*!***************************************!*\
    !*** ./src/app/auth/connectionurl.ts ***!
    \***************************************/

  /*! exports provided: ConnectionUrl */

  /***/
  function srcAppAuthConnectionurlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionUrl", function () {
      return ConnectionUrl;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ConnectionUrl = function ConnectionUrl() {
      _classCallCheck(this, ConnectionUrl);

      // public urlconnection: string  = "http://localhost:3000/"   
      this.urlconnection = "https://api-suporte.herokuapp.com/"; // Comando de push no Heroku
      // git push heroku HEAD:master  
    };
    /***/

  }
}]);
//# sourceMappingURL=default~pages-login-login-module~pages-signup-signup-module~pages-support-support-module~pages-tabs-~cbaf75a9-es5.js.map
webpackJsonp([0],{

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(716);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageContent = function PageContent(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _pageContent2.default.pageContent },
    children
  );
};

PageContent.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = PageContent;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 236ab54a23af9490bc76227d0056d612
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type submitAnswerMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    id: number,
  },
|};
export type submitAnswerMutationResponse = {|
  +submitAnswer: ?{|
    +answer: {|
      +points: number,
      +question: ?{|
        +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
          +points: number,
          +fitnessPlan: ?{|
            +fitnessPlanId: number,
            +name: ?string,
            +parentFitnessPlan: ?{|
              +id: string,
            |},
          |},
        |}>,
      |},
    |},
  |},
|};
*/

/*
mutation submitAnswerMutation(
  $input: SubmitAnswerInput!
) {
  submitAnswer(input: $input) {
    answer {
      points
      question {
        fitnessPlanAnswerPoints {
          points
          fitnessPlan {
            fitnessPlanId
            name
            parentFitnessPlan {
              id
            }
            id
          }
          id
        }
        id
      }
      id
    }
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubmitAnswerInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SubmitAnswerInput!"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "points",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "fitnessPlanId",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v5 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "LinkedField",
    "alias": null,
    "name": "parentFitnessPlan",
    "storageKey": null,
    "args": null,
    "concreteType": "FitnessPlan",
    "plural": false,
    "selections": [v5]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "submitAnswerMutation",
    "id": null,
    "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      points\n      question {\n        fitnessPlanAnswerPoints {\n          points\n          fitnessPlan {\n            fitnessPlanId\n            name\n            parentFitnessPlan {\n              id\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "submitAnswerMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "submitAnswer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitAnswerPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "answer",
          "storageKey": null,
          "args": null,
          "concreteType": "Answer",
          "plural": false,
          "selections": [v2, {
            "kind": "LinkedField",
            "alias": null,
            "name": "question",
            "storageKey": null,
            "args": null,
            "concreteType": "Question",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "fitnessPlanAnswerPoints",
              "storageKey": null,
              "args": null,
              "concreteType": "FitnessPlanAnswerPoint",
              "plural": true,
              "selections": [v2, {
                "kind": "LinkedField",
                "alias": null,
                "name": "fitnessPlan",
                "storageKey": null,
                "args": null,
                "concreteType": "FitnessPlan",
                "plural": false,
                "selections": [v3, v4, v6]
              }]
            }]
          }]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "submitAnswerMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "submitAnswer",
        "storageKey": null,
        "args": v1,
        "concreteType": "SubmitAnswerPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "answer",
          "storageKey": null,
          "args": null,
          "concreteType": "Answer",
          "plural": false,
          "selections": [v2, {
            "kind": "LinkedField",
            "alias": null,
            "name": "question",
            "storageKey": null,
            "args": null,
            "concreteType": "Question",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "fitnessPlanAnswerPoints",
              "storageKey": null,
              "args": null,
              "concreteType": "FitnessPlanAnswerPoint",
              "plural": true,
              "selections": [v2, {
                "kind": "LinkedField",
                "alias": null,
                "name": "fitnessPlan",
                "storageKey": null,
                "args": null,
                "concreteType": "FitnessPlan",
                "plural": false,
                "selections": [v3, v4, v6, v5]
              }, v5]
            }, v5]
          }, v5]
        }]
      }]
    }
  };
}();
node /*: any*/.hash = '97eeda7926a88adfd6853e14cd7cdc28';
module.exports = node;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type qAndAContainer$ref: FragmentReference;
export type qAndAContainer = {|
  +questionByIndex: ?{|
    +questionText: string,
    +answers: ?$ReadOnlyArray<?{|
      +answerId: number,
      +answerText: string,
    |}>,
  |},
  +$refType: qAndAContainer$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "qAndAContainer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "RootArgument",
    "name": "questionIndex",
    "type": "Int"
  }],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "questionByIndex",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "index",
      "variableName": "questionIndex",
      "type": "Int"
    }],
    "concreteType": "Question",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "questionText",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "answers",
      "storageKey": null,
      "args": null,
      "concreteType": "Answer",
      "plural": true,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "answerId",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "answerText",
        "args": null,
        "storageKey": null
      }]
    }]
  }]
};
node /*: any*/.hash = 'bacbf1b72deedfcb4557eead1b60e2ce';
module.exports = node;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash eca7ec2892cedadb383df0e80ac0640f
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer$ref = any;
export type qAndAContainerRefetchQueryVariables = {|
  questionIndex?: ?number,
|};
export type qAndAContainerRefetchQueryResponse = {|
  +$fragmentRefs: qAndAContainer$ref,
|};
*/

/*
query qAndAContainerRefetchQuery(
  $questionIndex: Int
) {
  ...qAndAContainer
}

fragment qAndAContainer on Query {
  questionByIndex(index: $questionIndex) {
    questionText
    answers {
      answerId
      answerText
      id
    }
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "questionIndex",
    "type": "Int",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "qAndAContainerRefetchQuery",
    "id": null,
    "text": "query qAndAContainerRefetchQuery(\n  $questionIndex: Int\n) {\n  ...qAndAContainer\n}\n\nfragment qAndAContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    questionText\n    answers {\n      answerId\n      answerText\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "qAndAContainerRefetchQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "qAndAContainer",
        "args": null
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "qAndAContainerRefetchQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "questionByIndex",
        "storageKey": null,
        "args": [{
          "kind": "Variable",
          "name": "index",
          "variableName": "questionIndex",
          "type": "Int"
        }],
        "concreteType": "Question",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "questionText",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "answers",
          "storageKey": null,
          "args": null,
          "concreteType": "Answer",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "answerId",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "answerText",
            "args": null,
            "storageKey": null
          }, v1]
        }, v1]
      }]
    }
  };
}();
node /*: any*/.hash = 'a1d7b0fc73c8b9bd0b5f731bf960ebd5';
module.exports = node;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 8466afa296bd745b0ea5d338c181998e
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer$ref = any;
export type fitnessContainerQueryVariables = {|
  questionIndex?: ?number,
|};
export type fitnessContainerQueryResponse = {|
  +$fragmentRefs: qAndAContainer$ref,
|};
*/

/*
query fitnessContainerQuery(
  $questionIndex: Int
) {
  ...qAndAContainer
}

fragment qAndAContainer on Query {
  questionByIndex(index: $questionIndex) {
    questionText
    answers {
      answerId
      answerText
      id
    }
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "questionIndex",
    "type": "Int",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "fitnessContainerQuery",
    "id": null,
    "text": "query fitnessContainerQuery(\n  $questionIndex: Int\n) {\n  ...qAndAContainer\n}\n\nfragment qAndAContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    questionText\n    answers {\n      answerId\n      answerText\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "fitnessContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "qAndAContainer",
        "args": null
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "fitnessContainerQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "questionByIndex",
        "storageKey": null,
        "args": [{
          "kind": "Variable",
          "name": "index",
          "variableName": "questionIndex",
          "type": "Int"
        }],
        "concreteType": "Question",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "questionText",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "answers",
          "storageKey": null,
          "args": null,
          "concreteType": "Answer",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "answerId",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "answerText",
            "args": null,
            "storageKey": null
          }, v1]
        }, v1]
      }]
    }
  };
}();
node /*: any*/.hash = '1fb8ce95bc50a06a9c7f8a84d3b455a0';
module.exports = node;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(738);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} text - The text to show in the popup
 * @param {number} [millisecondsToShow=6000] - The amount of time in milliseconds to show the popup
 */
var showPopup = exports.showPopup = function showPopup(text) {
  var millisecondsToShow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6000;
  return {
    type: 'SHOW_POPUP',
    text: text,
    id: _shortid2.default.generate(),
    millisecondsToShow: millisecondsToShow
  };
};

/**
 *
 * @param {number} index - The index of the popup to hide
 */
var hidePopup = exports.hidePopup = function hidePopup(index) {
  return {
    type: 'HIDE_POPUP',
    index: index
  };
};

var showGenericErrorPopup = exports.showGenericErrorPopup = function showGenericErrorPopup(error) {
  // eslint-disable-next-line no-console
  console.error(error);

  return showPopup('An error has occurred. Please try refreshing the page.');
};

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(309);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(322);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(759);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(15);

var _foundRelay = __webpack_require__(338);

var _router = __webpack_require__(456);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(469);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(758);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })
  );
};

exports.default = App;

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(141);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(146);

var _createRender2 = _interopRequireDefault(_createRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderError = function RenderError(_ref) {
  var error = _ref.error,
      router = _ref.router;

  router.replace({
    pathname: '/error/' + error.status,
    state: {
      error: error.data
    }
  });
};

RenderError.propTypes = {
  error: _propTypes2.default.shape({
    status: _propTypes2.default.number.isRequired
  }).isRequired,
  router: _propTypes2.default.object.isRequired
};

exports.default = (0, _createConnectedRouter2.default)({
  render: (0, _createRender2.default)({
    renderError: RenderError
  })
});

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(470);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(471);

var _foundReducer = __webpack_require__(159);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(66);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(160);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(276);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(277);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(161);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(162);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(649);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(756);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(757);

var _reducer4 = _interopRequireDefault(_reducer3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

var middleWare = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer,
/* eslint-disable no-underscore-dangle */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable no-underscore-dangle */
);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  form: _reduxForm.reducer,
  popup: _reducer2.default,
  user: _reducer4.default
});

var store = (0, _redux.createStore)(reducers, {}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 649:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(278);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(279);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(653);

var _termsAndConditionsContainer = __webpack_require__(714);

var _privacyPolicyContainer = __webpack_require__(717);

var _imprintContainer = __webpack_require__(719);

var _errorPageContainer = __webpack_require__(722);

var _primaryLayoutContainer = __webpack_require__(725);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  _extends({ path: '/' }, _primaryLayoutContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _fitnessContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _extends({ path: 'error/:status' }, _errorPageContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'termsAndConditions' }, _termsAndConditionsContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'privacyPolicy' }, _privacyPolicyContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'imprint' }, _imprintContainer.routeConfig))
));

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(71);

var _fitness = __webpack_require__(703);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var query = function query() {
  var node = __webpack_require__(296);

  if (node.hash && node.hash !== '1fb8ce95bc50a06a9c7f8a84d3b455a0') {
    console.error('The definition of \'fitnessContainerQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(296);
};

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer,
  query: query
};

exports.default = FitnessContainer;

/***/ }),

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _qAndAContainer = __webpack_require__(704);

var _qAndAContainer2 = _interopRequireDefault(_qAndAContainer);

var _fitness = __webpack_require__(713);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fitness = function Fitness(props) {
  return _react2.default.createElement(
    'div',
    { className: _fitness2.default.fitness },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_qAndAContainer2.default, { data: props })
    )
  );
};

exports.default = Fitness;

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(71);

var _recompose = __webpack_require__(111);

var _relayCompose = __webpack_require__(112);

var _reactRedux = __webpack_require__(15);

var _qAndA = __webpack_require__(706);

var _qAndA2 = _interopRequireDefault(_qAndA);

var _submitAnswerMutation = __webpack_require__(709);

var _submitAnswerMutation2 = _interopRequireDefault(_submitAnswerMutation);

var _fitnessPlansRankedContainer = __webpack_require__(711);

var _fitnessPlansRankedContainer2 = _interopRequireDefault(_fitnessPlansRankedContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionIndex = 0;

var fragments = {
  data: function data() {
    var node = __webpack_require__(294);

    if (node.hash && node.hash !== 'bacbf1b72deedfcb4557eead1b60e2ce') {
      console.error('The definition of \'qAndAContainer\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(294);
  }
};

var refetchQuery = function refetchQuery() {
  var node = __webpack_require__(295);

  if (node.hash && node.hash !== 'a1d7b0fc73c8b9bd0b5f731bf960ebd5') {
    console.error('The definition of \'qAndAContainerRefetchQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(295);
};

var handlers = {
  answerOnClick: function answerOnClick(_ref) {
    var dispatch = _ref.dispatch,
        relay = _ref.relay;
    return function (id) {
      questionIndex += 1;
      (0, _submitAnswerMutation2.default)(id, dispatch);
      relay.refetch({ questionIndex: questionIndex });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _relayCompose.refetchContainer)(fragments, refetchQuery), (0, _recompose.flattenProp)('data'), (0, _recompose.flattenProp)('questionByIndex'), (0, _recompose.branch)(function (props) {
  return props.questionByIndex === null;
}, (0, _recompose.renderComponent)(_fitnessPlansRankedContainer2.default)), (0, _recompose.withHandlers)(handlers))(_qAndA2.default);

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(707);

var _qAndA2 = _interopRequireDefault(_qAndA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QAndA = function QAndA(_ref) {
  var questionText = _ref.questionText,
      answers = _ref.answers,
      answerOnClick = _ref.answerOnClick;
  return _react2.default.createElement(
    'div',
    { className: _qAndA2.default.qAndA },
    _react2.default.createElement(
      'div',
      { className: _qAndA2.default.question },
      questionText
    ),
    _react2.default.createElement(
      'div',
      { className: _qAndA2.default.answers },
      answers.map(function (answer) {
        return _react2.default.createElement(
          'div',
          { key: answer.answerId, className: _qAndA2.default.answerContainer },
          _react2.default.createElement(
            'button',
            {
              className: _qAndA2.default.answer,
              onClick: function onClick() {
                return answerOnClick(answer.answerId);
              }
            },
            answer.answerText
          )
        );
      })
    )
  );
};

QAndA.propTypes = {
  questionText: _propTypes2.default.string.isRequired,
  answers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    answerId: _propTypes2.default.instanceOf.isRequired,
    answerText: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  answerOnClick: _propTypes2.default.func.isRequired
};

exports.default = QAndA;

/***/ }),

/***/ 707:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(71);

var _relayCompose = __webpack_require__(112);

var _actions = __webpack_require__(710);

var mutation = function mutation() {
  var node = __webpack_require__(291);

  if (node.hash && node.hash !== '97eeda7926a88adfd6853e14cd7cdc28') {
    console.error('The definition of \'submitAnswerMutation\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(291);
};

exports.default = function (id, dispatch) {
  var variables = {
    input: {
      id: id
    }
  };

  return (0, _relayCompose.createMutation)(mutation, variables).then(function (_ref) {
    var submitAnswer = _ref.submitAnswer;
    var _submitAnswer$answer = submitAnswer.answer,
        question = _submitAnswer$answer.question,
        points = _submitAnswer$answer.points;

    var fitnessPlansPoints = question.fitnessPlanAnswerPoints.filter(function (x) {
      return x.fitnessPlan.name;
    }).map(function (x) {
      return {
        name: x.fitnessPlan.name,
        id: x.fitnessPlan.fitnessPlanId,
        points: x.points
      };
    });

    dispatch((0, _actions.rankFitnessPlans)(fitnessPlansPoints, points));
  });
};

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var rankFitnessPlans = exports.rankFitnessPlans = function rankFitnessPlans(fitnessPlansPoints, answerPoints) {
  return {
    type: 'RANK_FITNESS_PLANS',
    fitnessPlansPoints: fitnessPlansPoints,
    answerPoints: answerPoints
  };
};

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(15);

var _reactRelay = __webpack_require__(71);

var _relayCompose = __webpack_require__(112);

var _recompose = __webpack_require__(111);

var _fitnessPlansRaked = __webpack_require__(712);

var _fitnessPlansRaked2 = _interopRequireDefault(_fitnessPlansRaked);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    rankedFitnessPlans: user.rankedFitnessPlans
  };
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(mapStateToProps))(_fitnessPlansRaked2.default);

/***/ }),

/***/ 712:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessPlansRanked = function FitnessPlansRanked(_ref) {
  var rankedFitnessPlans = _ref.rankedFitnessPlans;
  return _react2.default.createElement(
    'div',
    null,
    rankedFitnessPlans.map(function (rankedFitnessPlan) {
      return _react2.default.createElement(
        'div',
        { key: rankedFitnessPlan.id },
        rankedFitnessPlan.name
      );
    })
  );
};

FitnessPlansRanked.propTypes = {
  rankedFitnessPlans: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired
  }).isRequired).isRequired
};

exports.default = FitnessPlansRanked;

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d"};

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(715);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(175);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditions = function TermsAndConditions() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Terms and Conditions'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: April 14th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      '"You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. "We," "us," and "our" refer to reggest. "Content" means text, images, photos, audio, video, location data, and all other forms of data or communication. "Your Content" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. "User Content" means Content that users submit or transmit to, through, or in connection with the Site. "reggest Content" means Content that we create and make available in connection with the Site. "Third Party Content" means Content that originates from parties other than reggest or its users, which is made available in connection with the Site. "Site Content" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and reggest Content.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Terms'
        ),
        _react2.default.createElement(
          'p',
          null,
          'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Disclaimer'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials on the reggest website are provided "as shown". reggest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, reggest does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Limitations'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In no event shall reggest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Revisions and Errors'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The materials appearing on our website could include technical, typographical, or photographic errors. reggest does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'reggest has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user"s own risk.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Governing Law'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Any claim relating to the reggest website shall be governed by the laws of the country of note without regard to its conflict of law provisions.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'English Language'
        ),
        _react2.default.createElement(
          'p',
          null,
          'In the event of a conflict between these Terms and a foreign language version of our Terms of Use, the English language version of these Terms governs. All disputes, claims and causes of action (and related proceedings) will be communicated in English.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Copyright policy, notice and claim information'
        ),
        _react2.default.createElement(
          'p',
          null,
          'All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by reggest and its third-party information providers, and are protected by international intellectual property laws.'
        )
      )
    )
  );
};

exports.default = TermsAndConditions;

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(718);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(175);

var _pageContent2 = _interopRequireDefault(_pageContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicy = function PrivacyPolicy() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Privacy Policy'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Last Updated: April 14th 2018'
    ),
    _react2.default.createElement(
      'p',
      null,
      'This privacy policy has been compiled to better serve those who are concerned with how their \'Personally Identifiable Information\' (PII) is being used online. PII, as described in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.'
    ),
    _react2.default.createElement(
      'ol',
      null,
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'What personal information do we collect?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When registering for our newsletter, you will be asked to enter your email address. This is to help us indentify you and keep you updated. We will not send you any emails that you do not request.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'When do we collect information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We collect certain information from you when you register for our newsletter.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'How do we protect your information?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not use vulnerability scanning and/or scanning to PCI standards. We never ask for credit card numbers. We use regular Malware Scanning. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Do we use \'cookies\'?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Yes. Cookies are small files that a site or its service provider transfers to your computer\'s hard drive through your Web browser that enables the site\'s or service provider\'s systems to recognize your browser and capture and remember certain information. They are used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'We use cookies to:'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Understand and save user\'s preferences for future visits.'
          ),
          _react2.default.createElement(
            'li',
            null,
            'Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'Cookies are an important part of our website and the website will not work without having them enabled. By using our site you allow us to use cookies.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party disclosure'
        ),
        _react2.default.createElement(
          'p',
          null,
          'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Third-party links'
        ),
        _react2.default.createElement(
          'p',
          null,
          'There may be third-party links to radio station websites throughout our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites. Any link on our site to a third part website that is not relevant or if we deem it inappropriate, may be removed.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Google'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Google\'s advertising requirements can be summed up by Google\'s Advertising Principles. They are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not enabled Google AdSense on our site.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'California Online Privacy Protection Act'
        ),
        _react2.default.createElement(
          'p',
          null,
          'CalOPPA is the first state law in the nation to require commercial websites and online services to post a privacy policy. The law\'s reach stretches well beyond California to require any person or company in the United States (and conceivably the world) that operates websites collecting Personally Identifiable Information from California consumers to post a conspicuous privacy policy on its website stating exactly the information being collected and those individuals or companies with whom it is being shared. - See more at: http://consumercal.org/california-online-privacy-protection-act-caloppa/#sthash.0FdRbT51.dpuf'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'According to CalOPPA, we agree to the following:'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Users can visit our site anonymously. This privacy policy has a link to it from our home page in the header. Our Privacy Policy link includes the word \'Privacy\' and can easily be found on the page specified above. You will be notified of any Privacy Policy changes: \u2022 On our Privacy Policy Page Can change your personal information: \u2022 Through our website'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Does our site allow third-party behavioral tracking?'
        ),
        _react2.default.createElement(
          'p',
          null,
          'It\'s important to note that we allow third-party behavioral tracking'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'COPPA (Children Online Privacy Protection Act)'
        ),
        _react2.default.createElement(
          'p',
          null,
          'When it comes to the collection of personal information from children under the age of 13 years old, the Children\'s Online Privacy Protection Act (COPPA) puts parents in control. The Federal Trade Commission, United States\' consumer protection agency, enforces the COPPA Rule, which spells out what operators of websites and online services must do to protect children\'s privacy and safety online. We do not specifically market to children under the age of 13 years old.'
        )
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Fair Information Practices'
        ),
        _react2.default.createElement(
          'p',
          null,
          'The Fair Information Practices Principles form the backbone of privacy law in the United States and the concepts they include have played a significant role in the development of data protection laws around the globe. Understanding the Fair Information Practice Principles and how they should be implemented is critical to comply with the various privacy laws that protect personal information. In order to be in line with Fair Information Practices we will take the following responsive action, should a data breach occur: We will notify you via email within 7 business days. We will also notify users via an in-site notification on the home page within 7 business days. We also agree to the Individual Redress Principle which requires that individuals have the right to legally pursue enforceable rights against data collectors and processors who fail to adhere to the law. This principle requires not only that individuals have enforceable rights against data users, but also that individuals have recourse to courts or government agencies to investigate and/or prosecute non-compliance by data processors.'
        )
      )
    )
  );
};

exports.default = PrivacyPolicy;

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(720);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(175);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(721);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Imprint = function Imprint() {
  return _react2.default.createElement(
    _pageContent2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: _imprint2.default.imprintContent },
      _react2.default.createElement(
        'h1',
        null,
        'Imprint'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Company Name: VAST NETWORK LTD'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Managing Director: Martin Dawson'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Address: 26 CalderView, Rastrick, Brighouse, HD63DQ United Kingdom'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Telephone: +(44)7473591097'
      ),
      _react2.default.createElement(
        'div',
        null,
        'Email address: info@reggest.com'
      )
    )
  );
};

exports.default = Imprint;

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(111);

var _errorPage = __webpack_require__(723);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createProps = function createProps(_ref) {
  var status = _ref.status,
      error = _ref.error;

  switch (status) {
    case 404:
      return { error: 'The page could not be found.' };
    default:
      return { error: error };
  }
};

var enhance = (0, _recompose.compose)((0, _recompose.withProps)(createProps));

var ErrorPageContainer = enhance(_errorPage2.default);

var routeConfig = exports.routeConfig = {
  render: function render(_ref2) {
    var props = _ref2.props;
    return props && _react2.default.createElement(ErrorPageContainer, {
      status: parseInt(props.params.status, 10),
      error: props.location.state.error
    });
  }
};

exports.default = ErrorPageContainer;

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(724);

var _errorPage2 = _interopRequireDefault(_errorPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage(_ref) {
  var status = _ref.status,
      error = _ref.error;
  return _react2.default.createElement(
    'div',
    { className: _errorPage2.default.errorPage },
    _react2.default.createElement(
      'h1',
      null,
      'Error ',
      status
    ),
    _react2.default.createElement(
      'div',
      { className: _errorPage2.default.error },
      _react2.default.createElement(
        'div',
        null,
        error
      ),
      'We have been notified of the error \xAF\\_(\u30C4)_/\xAF. Please try again later.'
    )
  );
};

ErrorPage.defaultProps = {
  error: 'An unknown error has occured.'
};

ErrorPage.propTypes = {
  status: _propTypes2.default.number.isRequired,
  error: _propTypes2.default.string,
  quotation: _propTypes2.default.string.isRequired
};

exports.default = ErrorPage;

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(726);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(727);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(176);

var _primaryLayout = __webpack_require__(735);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(736);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(746);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(747);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(749);

var _footer2 = _interopRequireDefault(_footer);

var _popupsContainer = __webpack_require__(751);

var _popupsContainer2 = _interopRequireDefault(_popupsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayout = function PrimaryLayout(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _displayType2.default,
    null,
    function (displayType) {
      var displayTypeClassName = (0, _classnames2.default)(displayType.isMobile && 'mobile', displayType.isTablet && 'tablet', displayType.isDesktop && 'desktop');

      return _react2.default.createElement(
        _primaryLayoutErrorBoundary2.default,
        {
          className: (0, _classnames2.default)(displayTypeClassName, _primaryLayout2.default.primaryLayout)
        },
        _react2.default.createElement(
          'div',
          { className: _primaryLayout2.default.wrap },
          _react2.default.createElement(
            'div',
            { className: _primaryLayout2.default.main },
            _react2.default.createElement(
              _found.Link,
              { to: '/', className: _primaryLayout2.default.reggest },
              'reggest'
            ),
            children
          )
        ),
        _react2.default.createElement(_footer2.default, null),
        _react2.default.createElement(_popupsContainer2.default, null),
        _react2.default.createElement(_cookieNoticeContainer2.default, null)
      );
    }
  );
};

PrimaryLayout.defaultProps = {
  children: null
};

PrimaryLayout.propTypes = {
  children: _propTypes2.default.node
};

exports.default = PrimaryLayout;

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1","reggest":"Components-layouts-primaryLayout-primaryLayout__reggest--RIHSC"};

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(15);

var _cookieNotice = __webpack_require__(737);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

var _actions = __webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(null, { showPopup: _actions.showPopup })(_cookieNotice2.default);

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieNotice = function (_React$Component) {
  _inherits(CookieNotice, _React$Component);

  function CookieNotice() {
    _classCallCheck(this, CookieNotice);

    return _possibleConstructorReturn(this, (CookieNotice.__proto__ || Object.getPrototypeOf(CookieNotice)).apply(this, arguments));
  }

  _createClass(CookieNotice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var cookieNoticeShown = localStorage.getItem('cookieNoticeShown');

      if (!cookieNoticeShown) {
        this.props.showPopup('This website uses cookies to give you the best user experience, by continuing to use the site you are agreeing to our use of cookies.', 15000);

        localStorage.setItem('cookieNoticeShown', true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CookieNotice;
}(_react2.default.Component);

CookieNotice.propTypes = {
  showPopup: _propTypes2.default.func.isRequired
};

exports.default = CookieNotice;

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(111);

var _found = __webpack_require__(176);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PrimaryLayoutErrorBoundary = function (_React$Component) {
  _inherits(PrimaryLayoutErrorBoundary, _React$Component);

  function PrimaryLayoutErrorBoundary() {
    _classCallCheck(this, PrimaryLayoutErrorBoundary);

    return _possibleConstructorReturn(this, (PrimaryLayoutErrorBoundary.__proto__ || Object.getPrototypeOf(PrimaryLayoutErrorBoundary)).apply(this, arguments));
  }

  _createClass(PrimaryLayoutErrorBoundary, [{
    key: 'componentDidCatch',
    value: function componentDidCatch() {
      // this.props.router.push('/error/500');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      );
    }
  }]);

  return PrimaryLayoutErrorBoundary;
}(_react2.default.Component);

PrimaryLayoutErrorBoundary.defaultProps = {
  className: null
};

PrimaryLayoutErrorBoundary.propTypes = {
  router: _propTypes2.default.object.isRequired,
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string
};

exports.default = (0, _recompose.compose)(_found.withRouter)(PrimaryLayoutErrorBoundary);

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizes = __webpack_require__(748);

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayType = function (_React$Component) {
  _inherits(DisplayType, _React$Component);

  function DisplayType() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DisplayType);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DisplayType.__proto__ || Object.getPrototypeOf(DisplayType)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      displayType: 'desktop'
    }, _this.getDisplayType = function (windowWidth) {
      if (windowWidth < _sizes2.default.breakpointMobile.value) {
        return 'mobile';
      }

      if (windowWidth < _sizes2.default.breakpointTablet.value) {
        return 'tablet';
      }

      return 'desktop';
    }, _this.updateDisplayType = function () {
      var windowWidth = document.body.getBoundingClientRect().width;
      var displayType = _this.getDisplayType(windowWidth);

      if (displayType !== _this.state.displayType) {
        _this.setState({ displayType: displayType });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DisplayType, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      window.addEventListener('resize', this.updateDisplayType);
      this.updateDisplayType();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDisplayType);
    }
  }, {
    key: 'render',
    value: function render() {
      var displayType = {
        isMobile: this.state.displayType === 'mobile',
        isTablet: this.state.displayType === 'tablet',
        isDesktop: this.state.displayType === 'desktop'
      };

      return this.props.children(displayType);
    }
  }]);

  return DisplayType;
}(_react2.default.Component);

DisplayType.propTypes = {
  children: _propTypes2.default.func.isRequired
};

exports.default = DisplayType;

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sizes = {
  breakpointMobile: { value: 768, unit: 'px' },
  breakpointTablet: { value: 992, unit: 'px' },
  breakpointDesktop: { value: 1200, unit: 'px' }
};

exports.default = sizes;

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(176);

var _footer = __webpack_require__(750);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: _footer2.default.footer },
    _react2.default.createElement(
      _found.Link,
      { to: '/termsAndConditions' },
      'terms and conditions'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/privacyPolicy' },
      'privacy policy'
    ),
    _react2.default.createElement(
      _found.Link,
      { to: '/imprint' },
      'imprint'
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(15);

var _popups = __webpack_require__(752);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(305);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var popup = _ref.popup;
  return {
    popups: popup.popups
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  hidePopup: _actions.hidePopup
})(_popups2.default);

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(753);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(755);

var _popups2 = _interopRequireDefault(_popups);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popups = function Popups(_ref) {
  var popups = _ref.popups,
      hidePopup = _ref.hidePopup;
  return popups.length > 0 ? _react2.default.createElement(
    'div',
    { className: _popups2.default.popups },
    popups.map(function (popup, index) {
      return _react2.default.createElement(_popup2.default, {
        key: popup.id,
        index: index,
        text: popup.text,
        hidePopup: hidePopup,
        millisecondsToShow: popup.millisecondsToShow
      });
    })
  ) : null;
};

Popups.propTypes = {
  hidePopup: _propTypes2.default.func.isRequired,
  popups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    text: _propTypes2.default.string.isRequired,
    millisecondsToShow: _propTypes2.default.number.isRequired
  })).isRequired
};

exports.default = Popups;

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(754);

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popup = function (_React$Component) {
  _inherits(Popup, _React$Component);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        return _this2.props.hidePopup(_this2.props.index);
      }, this.props.millisecondsToShow);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _popup2.default.popup },
        this.props.text
      );
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.propTypes = {
  index: _propTypes2.default.number.isRequired,
  text: _propTypes2.default.string.isRequired,
  hidePopup: _propTypes2.default.func.isRequired,
  millisecondsToShow: _propTypes2.default.number.isRequired
};

exports.default = Popup;

/***/ }),

/***/ 754:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"Components-shared-popup-popup__popup--24OYM"};

/***/ }),

/***/ 755:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"Components-shared-popup-popups__popups--1m1KE"};

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = {
  popups: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_POPUP':
      {
        var popups = [].concat(_toConsumableArray(state.popups), [{
          id: action.id,
          text: action.text,
          millisecondsToShow: action.millisecondsToShow
        }]);

        return _extends({}, state, {
          popups: popups
        });
      }
    case 'HIDE_POPUP':
      {
        var _popups = state.popups.filter(function (_, i) {
          return i !== action.index;
        });

        return _extends({}, state, {
          popups: _popups
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable no-underscore-dangle */
var fitnessPlansDefault = {};

window._Constants.fitnessPlans.forEach(function (x) {
  fitnessPlansDefault[x.Name] = {
    points: 0
  };
});

var defaultState = {
  fitnessPlans: fitnessPlansDefault,
  rankedFitnessPlans: []
};

/* eslint-enable no-underscore-dangle */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'RANK_FITNESS_PLANS':
      {
        var fitnessPlans = {};

        action.fitnessPlansPoints.forEach(function (x) {
          var maxNumber = Math.max(action.answerPoints, x.points);
          var minNumber = Math.min(action.answerPoints, x.points);
          var difference = maxNumber - minNumber;
          var newPoints = state.fitnessPlans[x.name].points + difference;

          fitnessPlans[x.name] = _extends({}, state.fitnessPlans[x.name], {
            id: x.id,
            name: x.name,
            points: newPoints
          });
        });

        var rankedFitnessPlans = Object.keys(fitnessPlans).map(function (key) {
          return fitnessPlans[key];
        });

        rankedFitnessPlans.sort(function (a, b) {
          return a.points - b.points;
        });

        return _extends({}, state, {
          rankedFitnessPlans: rankedFitnessPlans,
          fitnessPlans: fitnessPlans
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(112);

var fetchQuery = function fetchQuery(operation, variables) {
  return fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables: variables
    })
  }).then(function (response) {
    return response.json();
  }).then(function (json) {
    // https://github.com/facebook/relay/issues/1816
    if (json.errors) {
      return Promise.reject(json.errors);
    }

    return Promise.resolve(json);
  });
};

var network = _relayRuntime.Network.create(fetchQuery);
var source = new _relayRuntime.RecordSource();
var store = new _relayRuntime.Store(source);
var environment = new _relayRuntime.Environment({
  network: network,
  store: store
});

(0, _relayCompose.setEnviroment)(environment);

exports.default = environment;

/***/ }),

/***/ 759:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[307]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXIuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1JhbmtlZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zUmFrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidjAiLCJ2MSIsInYyIiwidjMiLCJ2NCIsInY1IiwidjYiLCJoYXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInNob3dQb3B1cCIsInRleHQiLCJtaWxsaXNlY29uZHNUb1Nob3ciLCJ0eXBlIiwiaWQiLCJnZW5lcmF0ZSIsImhpZGVQb3B1cCIsImluZGV4Iiwic2hvd0dlbmVyaWNFcnJvclBvcHVwIiwiZXJyb3IiLCJjb25zb2xlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc29sdmVyIiwiQXBwIiwic3RvcmUiLCJSZW5kZXJFcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwibWlkZGxlV2FyZSIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJyZWR1Y2VycyIsImZvdW5kIiwiZm9ybSIsInBvcHVwIiwidXNlciIsImRpc3BhdGNoIiwiaW5pdCIsIkZpdG5lc3NDb250YWluZXIiLCJxdWVyeSIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiRml0bmVzcyIsImZpdG5lc3MiLCJwcm9wcyIsInF1ZXN0aW9uSW5kZXgiLCJmcmFnbWVudHMiLCJyZWZldGNoUXVlcnkiLCJoYW5kbGVycyIsImFuc3dlck9uQ2xpY2siLCJyZWxheSIsInJlZmV0Y2giLCJxdWVzdGlvbkJ5SW5kZXgiLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsInF1ZXN0aW9uIiwibWFwIiwiYW5zd2VyIiwiYW5zd2VySWQiLCJhbnN3ZXJDb250YWluZXIiLCJhbnN3ZXJUZXh0Iiwic3RyaW5nIiwiYXJyYXlPZiIsImluc3RhbmNlT2YiLCJmdW5jIiwibXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInRoZW4iLCJzdWJtaXRBbnN3ZXIiLCJwb2ludHMiLCJmaXRuZXNzUGxhbnNQb2ludHMiLCJmaXRuZXNzUGxhbkFuc3dlclBvaW50cyIsImZpbHRlciIsIngiLCJmaXRuZXNzUGxhbiIsIm5hbWUiLCJmaXRuZXNzUGxhbklkIiwicmFua0ZpdG5lc3NQbGFucyIsImFuc3dlclBvaW50cyIsIm1hcFN0YXRlVG9Qcm9wcyIsInJhbmtlZEZpdG5lc3NQbGFucyIsIkZpdG5lc3NQbGFuc1JhbmtlZCIsInJhbmtlZEZpdG5lc3NQbGFuIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJyZWdnZXN0IiwiQ29va2llTm90aWNlIiwiY29va2llTm90aWNlU2hvd24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIlByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiRGlzcGxheVR5cGUiLCJnZXREaXNwbGF5VHlwZSIsIndpbmRvd1dpZHRoIiwiYnJlYWtwb2ludE1vYmlsZSIsInZhbHVlIiwiYnJlYWtwb2ludFRhYmxldCIsInVwZGF0ZURpc3BsYXlUeXBlIiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic2V0U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemVzIiwidW5pdCIsImJyZWFrcG9pbnREZXNrdG9wIiwiRm9vdGVyIiwiZm9vdGVyIiwicG9wdXBzIiwiUG9wdXBzIiwibGVuZ3RoIiwiUG9wdXAiLCJzZXRUaW1lb3V0IiwiZGVmYXVsdFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsIl8iLCJpIiwiZml0bmVzc1BsYW5zRGVmYXVsdCIsIl9Db25zdGFudHMiLCJmaXRuZXNzUGxhbnMiLCJmb3JFYWNoIiwiTmFtZSIsIm1heE51bWJlciIsIk1hdGgiLCJtYXgiLCJtaW5OdW1iZXIiLCJtaW4iLCJkaWZmZXJlbmNlIiwibmV3UG9pbnRzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNvcnQiLCJhIiwiYiIsImZldGNoUXVlcnkiLCJvcGVyYXRpb24iLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJlcnJvcnMiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzb3VyY2UiLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQSxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNsQjtBQUFBO0FBQUEsTUFBSyxXQUFXLHNCQUFPQyxXQUF2QjtBQUNHRDtBQURILEdBRGtCO0FBQUEsQ0FBcEI7O0FBTUFELFlBQVlH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RGY7O0FBTUE7O0FBRUEsSUFBTXNCLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQVlwRyxTQUFaO0FBQUEsU0FDakJxRyxNQUFNLFVBQU4sRUFBa0I7QUFDaEJDLFlBQVEsTUFEUTtBQUVoQkMsaUJBQWEsYUFGRztBQUdoQkMsYUFBUztBQUNQQyxjQUFRLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FITztBQU9oQjdDLFVBQU04QyxLQUFLQyxTQUFMLENBQWU7QUFDbkJ4SSxhQUFPaUksVUFBVTNLLElBREU7QUFFbkJ1RTtBQUZtQixLQUFmO0FBUFUsR0FBbEIsRUFXR0UsSUFYSCxDQVdRO0FBQUEsV0FBWTBHLFNBQVNDLElBQVQsRUFBWjtBQUFBLEdBWFIsRUFZRzNHLElBWkgsQ0FZUSxVQUFDMkcsSUFBRCxFQUFVO0FBQ2Q7QUFDQSxRQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2YsYUFBT0MsUUFBUUMsTUFBUixDQUFlSCxLQUFLQyxNQUFwQixDQUFQO0FBQ0Q7O0FBRUQsV0FBT0MsUUFBUUUsT0FBUixDQUFnQkosSUFBaEIsQ0FBUDtBQUNELEdBbkJILENBRGlCO0FBQUEsQ0FBbkI7O0FBc0JBLElBQU1LLFVBQVUsc0JBQVFDLE1BQVIsQ0FBZWhCLFVBQWYsQ0FBaEI7QUFDQSxJQUFNaUIsU0FBUyxnQ0FBZjtBQUNBLElBQU01SyxRQUFRLHdCQUFVNEssTUFBVixDQUFkO0FBQ0EsSUFBTUMsY0FBYyw4QkFBZ0I7QUFDbENILGtCQURrQztBQUVsQzFLO0FBRmtDLENBQWhCLENBQXBCOztBQUtBLGlDQUFjNkssV0FBZDs7a0JBRWVBLFc7Ozs7Ozs7QUN4Q2YseUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZUNvbnRlbnQubGVzcyc7XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250ZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuUGFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDIzNmFiNTRhMjNhZjk0OTBiYzc2MjI3ZDAwNTZkNjEyXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDoge1xuICAgIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gIH0sXG58fTtcbmV4cG9ydCB0eXBlIHN1Ym1pdEFuc3dlck11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc3VibWl0QW5zd2VyOiA/e3xcbiAgICArYW5zd2VyOiB7fFxuICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgK3F1ZXN0aW9uOiA/e3xcbiAgICAgICAgK2ZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgICAgICtmaXRuZXNzUGxhbjogP3t8XG4gICAgICAgICAgICArZml0bmVzc1BsYW5JZDogbnVtYmVyLFxuICAgICAgICAgICAgK25hbWU6ID9zdHJpbmcsXG4gICAgICAgICAgICArcGFyZW50Rml0bmVzc1BsYW46ID97fFxuICAgICAgICAgICAgICAraWQ6IHN0cmluZyxcbiAgICAgICAgICAgIHx9LFxuICAgICAgICAgIHx9LFxuICAgICAgICB8fT4sXG4gICAgICB8fSxcbiAgICB8fSxcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxuICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxuKSB7XG4gIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XG4gICAgYW5zd2VyIHtcbiAgICAgIHBvaW50c1xuICAgICAgcXVlc3Rpb24ge1xuICAgICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgICAgcG9pbnRzXG4gICAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgZml0bmVzc1BsYW5JZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgcGFyZW50Rml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWRcbiAgICAgICAgfVxuICAgICAgICBpZFxuICAgICAgfVxuICAgICAgaWRcbiAgICB9XG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1Ym1pdEFuc3dlcklucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJtaXRBbnN3ZXJJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwicG9pbnRzXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuSWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjQgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NSA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NiA9IHtcbiAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJwYXJlbnRGaXRuZXNzUGxhblwiLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgXCJwbHVyYWxcIjogZmFsc2UsXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgdjVcbiAgXVxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcXG4gICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXFxuKSB7XFxuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBhbnN3ZXIge1xcbiAgICAgIHBvaW50c1xcbiAgICAgIHF1ZXN0aW9uIHtcXG4gICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcXG4gICAgICAgICAgcG9pbnRzXFxuICAgICAgICAgIGZpdG5lc3NQbGFuIHtcXG4gICAgICAgICAgICBmaXRuZXNzUGxhbklkXFxuICAgICAgICAgICAgbmFtZVxcbiAgICAgICAgICAgIHBhcmVudEZpdG5lc3NQbGFuIHtcXG4gICAgICAgICAgICAgIGlkXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIGlkXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaWRcXG4gICAgICAgIH1cXG4gICAgICAgIGlkXFxuICAgICAgfVxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyTXV0YXRpb25cIixcbiAgICBcInR5cGVcIjogXCJNdXRhdGlvblwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiB2MSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJTdWJtaXRBbnN3ZXJQYXlsb2FkXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuQW5zd2VyUG9pbnRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjZcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjVcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHY1XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB2NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnOTdlZWRhNzkyNmE4OGFkZmQ2ODUzZTE0Y2Q3Y2RjMjgnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3N1Ym1pdEFuc3dlck11dGF0aW9uLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIHFBbmRBQ29udGFpbmVyJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lciA9IHt8XG4gICtxdWVzdGlvbkJ5SW5kZXg6ID97fFxuICAgICtxdWVzdGlvblRleHQ6IHN0cmluZyxcbiAgICArYW5zd2VyczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICAgK2Fuc3dlcklkOiBudW1iZXIsXG4gICAgICArYW5zd2VyVGV4dDogc3RyaW5nLFxuICAgIHx9PixcbiAgfH0sXG4gICskcmVmVHlwZTogcUFuZEFDb250YWluZXIkcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclwiLFxuICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiUm9vdEFyZ3VtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgICBcInR5cGVcIjogXCJJbnRcIlxuICAgIH1cbiAgXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25CeUluZGV4XCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclRleHRcIixcbiAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYmFjYmYxYjcyZGVlZGZjYjQ1NTdlZWFkMWI2MGUyY2UnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGVjYTdlYzI4OTJjZWRhZGIzODNkZjBlODBhYzA2NDBmXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lciRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVZhcmlhYmxlcyA9IHt8XG4gIHF1ZXN0aW9uSW5kZXg/OiA/bnVtYmVyLFxufH07XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVJlc3BvbnNlID0ge3xcbiAgKyRmcmFnbWVudFJlZnM6IHFBbmRBQ29udGFpbmVyJHJlZixcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkoXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcbikge1xuICAuLi5xQW5kQUNvbnRhaW5lclxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lciBvbiBRdWVyeSB7XG4gIHF1ZXN0aW9uQnlJbmRleChpbmRleDogJHF1ZXN0aW9uSW5kZXgpIHtcbiAgICBxdWVzdGlvblRleHRcbiAgICBhbnN3ZXJzIHtcbiAgICAgIGFuc3dlcklkXG4gICAgICBhbnN3ZXJUZXh0XG4gICAgICBpZFxuICAgIH1cbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgIFwidHlwZVwiOiBcIkludFwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeShcXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcXG4pIHtcXG4gIC4uLnFBbmRBQ29udGFpbmVyXFxufVxcblxcbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyIG9uIFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uQnlJbmRleChpbmRleDogJHF1ZXN0aW9uSW5kZXgpIHtcXG4gICAgcXVlc3Rpb25UZXh0XFxuICAgIGFuc3dlcnMge1xcbiAgICAgIGFuc3dlcklkXFxuICAgICAgYW5zd2VyVGV4dFxcbiAgICAgIGlkXFxuICAgIH1cXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uQnlJbmRleFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYTFkN2IwZmM3M2M4YjliZDBiNWY3MzFiZjk2MGViZDUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5LmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDg0NjZhZmEyOTZiZDc0NWIwZWE1ZDMzOGMxODE5OThlXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lciRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBxdWVzdGlvbkluZGV4PzogP251bWJlcixcbnx9O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogcUFuZEFDb250YWluZXIkcmVmLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkoXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcbikge1xuICAuLi5xQW5kQUNvbnRhaW5lclxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lciBvbiBRdWVyeSB7XG4gIHF1ZXN0aW9uQnlJbmRleChpbmRleDogJHF1ZXN0aW9uSW5kZXgpIHtcbiAgICBxdWVzdGlvblRleHRcbiAgICBhbnN3ZXJzIHtcbiAgICAgIGFuc3dlcklkXG4gICAgICBhbnN3ZXJUZXh0XG4gICAgICBpZFxuICAgIH1cbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgIFwidHlwZVwiOiBcIkludFwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5KFxcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxcbikge1xcbiAgLi4ucUFuZEFDb250YWluZXJcXG59XFxuXFxuZnJhZ21lbnQgcUFuZEFDb250YWluZXIgb24gUXVlcnkge1xcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xcbiAgICBxdWVzdGlvblRleHRcXG4gICAgYW5zd2VycyB7XFxuICAgICAgYW5zd2VySWRcXG4gICAgICBhbnN3ZXJUZXh0XFxuICAgICAgaWRcXG4gICAgfVxcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkJ5SW5kZXhcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkludFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYxXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzFmYjhjZTk1YmM1MGEwNmE5YzdmOGE4NGQzYjQ1NWEwJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgcG9wdXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzVG9TaG93PTYwMDBdIC0gVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSBwb3B1cFxuICovXG5leHBvcnQgY29uc3Qgc2hvd1BvcHVwID0gKHRleHQsIG1pbGxpc2Vjb25kc1RvU2hvdyA9IDYwMDApID0+ICh7XG4gIHR5cGU6ICdTSE9XX1BPUFVQJyxcbiAgdGV4dCxcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgbWlsbGlzZWNvbmRzVG9TaG93LFxufSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcG9wdXAgdG8gaGlkZVxuICovXG5leHBvcnQgY29uc3QgaGlkZVBvcHVwID0gaW5kZXggPT4gKHtcbiAgdHlwZTogJ0hJREVfUE9QVVAnLFxuICBpbmRleCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0dlbmVyaWNFcnJvclBvcHVwID0gKGVycm9yKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiBzaG93UG9wdXAoJ0FuIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHRyeSByZWZyZXNoaW5nIHRoZSBwYWdlLicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vdXNlci9yZWR1Y2VyJztcblxuY29uc3QgaGlzdG9yeUVuaGFuY2VyID0gY3JlYXRlSGlzdG9yeUVuaGFuY2VyKHtcbiAgcHJvdG9jb2w6IG5ldyBCcm93c2VyUHJvdG9jb2woKSxcbiAgbWlkZGxld2FyZXM6IFtxdWVyeU1pZGRsZXdhcmVdLFxufSk7XG5cbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIoXG4gIG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKSxcbik7XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlKFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICBoaXN0b3J5RW5oYW5jZXIsXG4gIG1hdGNoZXJFbmhhbmNlcixcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSxcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbiAgcG9wdXAsXG4gIHVzZXIsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgaW1wcmludFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcblxuaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IEZpdG5lc3M7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5KFxuICAgICRxdWVzdGlvbkluZGV4OiBJbnRcbiAgKSB7XG4gICAgLi4ucUFuZEFDb250YWluZXJcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEZpdG5lc3NDb250YWluZXIsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFFBbmRBIGZyb20gJy4uL3FBbmRBL3FBbmRBQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuXG5jb25zdCBGaXRuZXNzID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICA8UUFuZEEgZGF0YT17cHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCB3aXRoSGFuZGxlcnMsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHJlZmV0Y2hDb250YWluZXIgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBxQW5kQSBmcm9tICcuL3FBbmRBJztcbmltcG9ydCBzdWJtaXRBbnN3ZXJNdXRhdGlvbiBmcm9tICcuL3N1Ym1pdEFuc3dlck11dGF0aW9uJztcbmltcG9ydCBmaXRuZXNzUGxhbnNSYW5rZWQgZnJvbSAnLi4vZml0bmVzcy9maXRuZXNzUGxhbnNSYW5rZWRDb250YWluZXInO1xuXG5sZXQgcXVlc3Rpb25JbmRleCA9IDA7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHFBbmRBQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgICBxdWVzdGlvbkJ5SW5kZXggKFxuICAgICAgaW5kZXg6ICRxdWVzdGlvbkluZGV4XG4gICAgKSB7XG4gICAgICBxdWVzdGlvblRleHRcbiAgICAgIGFuc3dlcnMge1xuICAgICAgICBhbnN3ZXJJZFxuICAgICAgICBhbnN3ZXJUZXh0XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCByZWZldGNoUXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeShcbiAgICAkcXVlc3Rpb25JbmRleDogSW50XG4gICkge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyXG4gIH1cbmA7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBhbnN3ZXJPbkNsaWNrOiAoeyBkaXNwYXRjaCwgcmVsYXkgfSkgPT4gKGlkKSA9PiB7XG4gICAgcXVlc3Rpb25JbmRleCArPSAxO1xuICAgIHN1Ym1pdEFuc3dlck11dGF0aW9uKGlkLCBkaXNwYXRjaCk7XG4gICAgcmVsYXkucmVmZXRjaCh7IHF1ZXN0aW9uSW5kZXggfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBjb25uZWN0KCksXG4gIHJlZmV0Y2hDb250YWluZXIoZnJhZ21lbnRzLCByZWZldGNoUXVlcnkpLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBmbGF0dGVuUHJvcCgncXVlc3Rpb25CeUluZGV4JyksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiBwcm9wcy5xdWVzdGlvbkJ5SW5kZXggPT09IG51bGwsXG4gICAgcmVuZGVyQ29tcG9uZW50KGZpdG5lc3NQbGFuc1JhbmtlZCksXG4gICksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKHFBbmRBKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3FBbmRBLmxlc3MnO1xuXG5jb25zdCBRQW5kQSA9ICh7IHF1ZXN0aW9uVGV4dCwgYW5zd2VycywgYW5zd2VyT25DbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucUFuZEF9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PntxdWVzdGlvblRleHR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmFuc3dlcklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlck9uQ2xpY2soYW5zd2VyLmFuc3dlcklkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUUFuZEEucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFuc3dlcklkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZi5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2VyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXItLTJyMVFIXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmltcG9ydCB7IHJhbmtGaXRuZXNzUGxhbnMgfSBmcm9tICcuLi91c2VyL2FjdGlvbnMnO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxuICAgICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXG4gICkge1xuICAgIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XG4gICAgICBhbnN3ZXIge1xuICAgICAgICBwb2ludHNcbiAgICAgICAgcXVlc3Rpb24ge1xuICAgICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcbiAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgICBmaXRuZXNzUGxhbklkXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgcGFyZW50Rml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IChpZCwgZGlzcGF0Y2gpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICkudGhlbigoeyBzdWJtaXRBbnN3ZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlc3Rpb24sIHBvaW50cyB9ID0gc3VibWl0QW5zd2VyLmFuc3dlcjtcbiAgICBjb25zdCBmaXRuZXNzUGxhbnNQb2ludHMgPSBxdWVzdGlvbi5maXRuZXNzUGxhbkFuc3dlclBvaW50cy5maWx0ZXIoeCA9PiB4LmZpdG5lc3NQbGFuLm5hbWUpLm1hcCh4ID0+ICh7XG4gICAgICBuYW1lOiB4LmZpdG5lc3NQbGFuLm5hbWUsXG4gICAgICBpZDogeC5maXRuZXNzUGxhbi5maXRuZXNzUGxhbklkLFxuICAgICAgcG9pbnRzOiB4LnBvaW50cyxcbiAgICB9KSk7XG5cbiAgICBkaXNwYXRjaChyYW5rRml0bmVzc1BsYW5zKGZpdG5lc3NQbGFuc1BvaW50cywgcG9pbnRzKSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJleHBvcnQgY29uc3QgcmFua0ZpdG5lc3NQbGFucyA9IChmaXRuZXNzUGxhbnNQb2ludHMsIGFuc3dlclBvaW50cykgPT4gKHtcbiAgdHlwZTogJ1JBTktfRklUTkVTU19QTEFOUycsXG4gIGZpdG5lc3NQbGFuc1BvaW50cyxcbiAgYW5zd2VyUG9pbnRzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvYWN0aW9ucy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgcXVlcnlSZW5kZXJlciwgZnJhZ21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgZml0bmVzc1BsYW5zUmFua2VkIGZyb20gJy4vZml0bmVzc1BsYW5zUmFrZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyIH0pID0+ICh7XG4gIHJhbmtlZEZpdG5lc3NQbGFuczogdXNlci5yYW5rZWRGaXRuZXNzUGxhbnMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpLFxuKShmaXRuZXNzUGxhbnNSYW5rZWQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1JhbmtlZENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBGaXRuZXNzUGxhbnNSYW5rZWQgPSAoeyByYW5rZWRGaXRuZXNzUGxhbnMgfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtyYW5rZWRGaXRuZXNzUGxhbnMubWFwKHJhbmtlZEZpdG5lc3NQbGFuID0+XG4gICAgICA8ZGl2IGtleT17cmFua2VkRml0bmVzc1BsYW4uaWR9PntyYW5rZWRGaXRuZXNzUGxhbi5uYW1lfTwvZGl2PlxuICAgICl9XG4gIDwvZGl2PlxuKTtcblxuRml0bmVzc1BsYW5zUmFua2VkLnByb3BUeXBlcyA9IHtcbiAgcmFua2VkRml0bmVzc1BsYW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzUGxhbnNSYW5rZWQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zUmFrZWQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmaXRuZXNzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc19fZml0bmVzcy0tUmk3N2RcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnMgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gcmVnZ2VzdC5cbiAgICAgICZxdW90O0NvbnRlbnQmcXVvdDsgbWVhbnMgdGV4dCwgaW1hZ2VzLCBwaG90b3MsIGF1ZGlvLCB2aWRlbywgbG9jYXRpb24gZGF0YSxcbiAgICAgIGFuZCBhbGwgb3RoZXIgZm9ybXMgb2YgZGF0YSBvciBjb21tdW5pY2F0aW9uLlxuICAgICAgJnF1b3Q7WW91ciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLCBvciBpblxuICAgICAgY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLCBzdWNoIGFzIHJhdGluZ3MsIHJldmlld3MsIGNvbXBsaW1lbnRzLCBpbnZpdGF0aW9ucyxcbiAgICAgIGNoZWNrLWlucywgbWVzc2FnZXMsIGFuZCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwdWJsaWNseSBkaXNwbGF5IG9yIGRpc3BsYXllZCBpblxuICAgICAgeW91ciBhY2NvdW50IHByb2ZpbGUuXG4gICAgICAmcXVvdDtVc2VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHVzZXJzIHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCxcbiAgICAgIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS4gJnF1b3Q7cmVnZ2VzdCBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdFxuICAgICAgd2UgY3JlYXRlIGFuZCBtYWtlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtUaGlyZCBQYXJ0eSBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCBvcmlnaW5hdGVzIGZyb20gcGFydGllcyBvdGhlclxuICAgICAgdGhhbiByZWdnZXN0IG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCByZWdnZXN0IENvbnRlbnQuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRlcm1zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgYWNjZXNzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieSB0aGVzZSB3ZWJzaXRlIFRlcm1zXG4gICAgICAgICAgYW5kIENvbmRpdGlvbnMgb2YgVXNlLCBhbGwgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucywgYW5kIGFncmVlIHRoYXQgeW91XG4gICAgICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBjb21wbGlhbmNlIHdpdGggYW55IGFwcGxpY2FibGUgbG9jYWwgbGF3cy5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggYW55IG9mIHRoZXNlIHRlcm1zLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyBvclxuICAgICAgICAgIGFjY2Vzc2luZyB0aGlzIHNpdGUuIFRoZSBtYXRlcmlhbHMgY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBhcmUgcHJvdGVjdGVkXG4gICAgICAgICAgYnkgYXBwbGljYWJsZSBjb3B5cmlnaHQgYW5kIHRyYWRlIG1hcmsgbGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgb24gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBhcmUgcHJvdmlkZWQgJnF1b3Q7YXMgc2hvd24mcXVvdDsuXG4gICAgICAgICAgcmVnZ2VzdCBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICBsaWtlbHkgcmVzdWx0cywgb3IgcmVsaWFiaWxpdHkgb2YgdGhlIHVzZSBvZiB0aGUgbWF0ZXJpYWxzIG9uIGl0cyBpbnRlcm5ldFxuICAgICAgICAgIHdlYnNpdGUgb3Igb3RoZXJ3aXNlIHJlbGF0aW5nIHRvIHN1Y2ggbWF0ZXJpYWxzIG9yIG9uIGFueSBzaXRlcyBsaW5rZWQgdG8gdGhpcyBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGltaXRhdGlvbnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiBubyBldmVudCBzaGFsbCByZWdnZXN0IG9yIGl0cyBzdXBwbGllcnMgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyAoaW5jbHVkaW5nLCB3aXRob3V0XG4gICAgICAgICAgbGltaXRhdGlvbiwgZGFtYWdlcyBmb3IgbG9zcyBvZiBkYXRhIG9yIHByb2ZpdCwgb3IgZHVlIHRvIGJ1c2luZXNzIGludGVycnVwdGlvbilcbiAgICAgICAgICBhcmlzaW5nIG91dCBvZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlIG1hdGVyaWFscyBvbiBvdXIgaW50ZXJuZXQgc2l0ZSBvclxuICAgICAgICAgIG9mZmVyZWQgc2VydmljZXMsIGV2ZW4gaWYgd2Ugb3IgYW4gYXV0aG9yaXplZCByZXByZXNlbnRhdGl2ZSBoYXMgYmVlbiBub3RpZmllZFxuICAgICAgICAgIG9yYWxseSBvciBpbiB3cml0aW5nIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZS4gQmVjYXVzZSBzb21lIGp1cmlzZGljdGlvbnNcbiAgICAgICAgICBkbyBub3QgYWxsb3cgbGltaXRhdGlvbnMgb24gaW1wbGllZCB3YXJyYW50aWVzLCBvciBsaW1pdGF0aW9ucyBvZiBsaWFiaWxpdHkgZm9yXG4gICAgICAgICAgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIHRoZXNlIGxpbWl0YXRpb25zIG1heSBub3QgYXBwbHkgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+UmV2aXNpb25zIGFuZCBFcnJvcnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIGFwcGVhcmluZyBvbiBvdXIgd2Vic2l0ZSBjb3VsZCBpbmNsdWRlIHRlY2huaWNhbCwgdHlwb2dyYXBoaWNhbCxcbiAgICAgICAgICBvciBwaG90b2dyYXBoaWMgZXJyb3JzLiByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgcmVnZ2VzdCBoYXMgbm90IHJldmlld2VkIGFsbCBvZiB0aGUgc2l0ZXMgbGlua2VkIHRvIGl0cyBpbnRlcm5ldCB3ZWJzaXRlXG4gICAgICAgICAgYW5kIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRzIG9mIGFueSBzdWNoIGxpbmtlZCBzaXRlLlxuICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgYW55IGxpbmsgZG9lcyBub3QgaW1wbHkgZW5kb3JzZW1lbnQgYnkgdXMgb2YgdGhlIHNpdGUuXG4gICAgICAgICAgVXNlIG9mIGFueSBzdWNoIGxpbmtlZCB3ZWJzaXRlIGlzIGF0IHRoZSB1c2VyJnF1b3Q7cyBvd24gcmlzay5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvdmVybmluZyBMYXc8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbnkgY2xhaW0gcmVsYXRpbmcgdG8gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3c1xuICAgICAgICAgIG9mIHRoZSBjb3VudHJ5IG9mIG5vdGUgd2l0aG91dCByZWdhcmQgdG8gaXRzIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RW5nbGlzaCBMYW5ndWFnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGJldHdlZW4gdGhlc2UgVGVybXMgYW5kIGEgZm9yZWlnbiBsYW5ndWFnZSB2ZXJzaW9uXG4gICAgICAgICAgb2Ygb3VyIFRlcm1zIG9mIFVzZSwgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyBnb3Zlcm5zLlxuICAgICAgICAgIEFsbCBkaXNwdXRlcywgY2xhaW1zIGFuZCBjYXVzZXMgb2YgYWN0aW9uIChhbmQgcmVsYXRlZCBwcm9jZWVkaW5ncykgd2lsbCBiZVxuICAgICAgICAgIGNvbW11bmljYXRlZCBpbiBFbmdsaXNoLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q29weXJpZ2h0IHBvbGljeSwgbm90aWNlIGFuZCBjbGFpbSBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsbCBtYXRlcmlhbHMgb24gdGhpcyBzaXRlLCB3aGV0aGVyIHNlcGFyYXRlIG9yIGNvbXBpbGVkLCBpbmNsdWRpbmcsXG4gICAgICAgICAgYnV0IG5vdCBsaW1pdGVkIHRvLCB0ZXh0LCBncmFwaGljcywgYXVkaW8gY2xpcHMsIGxvZ29zLCBidXR0b25zLCBpbWFnZXMsXG4gICAgICAgICAgZGlnaXRhbCBkb3dubG9hZHMsIGRhdGEgY29tcGlsYXRpb25zLCBzb2Z0d2FyZSwgaWNvbnMsIGh0bWwgY29kZSBhbmQgeG1sIGNvZGUsXG4gICAgICAgICAgYXMgd2VsbCBhcyBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgZHJlc3MsIGFuZCBvdGhlciByaWdodHNcbiAgICAgICAgICB0aGVyZWluLCBhcmUgb3duZWQgb3IgbGljZW5zZWQgYnkgcmVnZ2VzdCBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlQ29udGVudFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcGFnZUNvbnRlbnRfX3BhZ2VDb250ZW50LS13cHV0V1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJpbXBvcnQgSW1wcmludCBmcm9tICcuL2ltcHJpbnQnO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltcHJpbnQubGVzcyc7XG5cbmNvbnN0IEltcHJpbnQgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltcHJpbnRDb250ZW50fT5cbiAgICAgIDxoMT5JbXByaW50PC9oMT5cbiAgICAgIDxkaXY+Q29tcGFueSBOYW1lOiBWQVNUIE5FVFdPUksgTFREPC9kaXY+XG4gICAgICA8ZGl2Pk1hbmFnaW5nIERpcmVjdG9yOiBNYXJ0aW4gRGF3c29uPC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3M6IDI2IENhbGRlclZpZXcsIFJhc3RyaWNrLCBCcmlnaG91c2UsIEhENjNEUSBVbml0ZWQgS2luZ2RvbTwvZGl2PlxuICAgICAgPGRpdj5UZWxlcGhvbmU6ICsoNDQpNzQ3MzU5MTA5NzwvZGl2PlxuICAgICAgPGRpdj5FbWFpbCBhZGRyZXNzOiBpbmZvQHJlZ2dlc3QuY29tPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWZvb3Rlci1pbXByaW50X19pbXByaW50Q29udGVudC0tMTVyTE1cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzLCBmbGF0dGVuUHJvcCB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9lcnJvclBhZ2UnO1xuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4ge1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzKGNyZWF0ZVByb3BzKSxcbik7XG5cbmNvbnN0IEVycm9yUGFnZUNvbnRhaW5lciA9IGVuaGFuY2UoRXJyb3JQYWdlKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIChcbiAgICA8RXJyb3JQYWdlQ29udGFpbmVyXG4gICAgICBzdGF0dXM9e3BhcnNlSW50KHByb3BzLnBhcmFtcy5zdGF0dXMsIDEwKX1cbiAgICAgIGVycm9yPXtwcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2UubGVzcyc7XG5cbmNvbnN0IEVycm9yUGFnZSA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0+XG4gICAgPGgxPkVycm9yIHtzdGF0dXN9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICAgV2UgaGF2ZSBiZWVuIG5vdGlmaWVkIG9mIHRoZSBlcnJvciDCr1xcXyjjg4QpXy/Cry4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQuJyxcbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcXVvdGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclBhZ2VcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JQYWdlLS0xYVMtelwiLFwiZXJyb3JcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3ItLTYyS1pDXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpbWFyeUxheW91dCBmcm9tICcuL3ByaW1hcnlMYXlvdXQnO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJpbWFyeUxheW91dC5sZXNzJztcbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi4vLi4vZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lcic7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRGlzcGxheVR5cGUgZnJvbSAnLi4vLi4vc2hhcmVkL2Rpc3BsYXlUeXBlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgUG9wdXBzIGZyb20gJy4uLy4uL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxEaXNwbGF5VHlwZT5cbiAgICB7KGRpc3BsYXlUeXBlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5VHlwZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzTW9iaWxlICYmICdtb2JpbGUnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc1RhYmxldCAmJiAndGFibGV0JyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNEZXNrdG9wICYmICdkZXNrdG9wJyxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhkaXNwbGF5VHlwZUNsYXNzTmFtZSwgc3R5bGVzLnByaW1hcnlMYXlvdXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2dlc3R9PnJlZ2dlc3Q8L0xpbms+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8UG9wdXBzIC8+XG4gICAgICAgICAgPENvb2tpZU5vdGljZSAvPlxuICAgICAgICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuICAgICAgKTtcbiAgICB9fVxuICA8L0Rpc3BsYXlUeXBlPlxuKTtcblxuUHJpbWFyeUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuUHJpbWFyeUxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dC0tM0ZWamJcIixcIndyYXBcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3dyYXAtLTNPdjM4XCIsXCJtYWluXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19tYWluLS0xRzZhMVwiLFwicmVnZ2VzdFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcmVnZ2VzdC0tUklIU0NcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDczNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4vY29va2llTm90aWNlJztcbmltcG9ydCB7IHNob3dQb3B1cCB9IGZyb20gJy4uL3NoYXJlZC9wb3B1cC9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHNob3dQb3B1cCB9KShDb29raWVOb3RpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENvb2tpZU5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvb2tpZU5vdGljZVNob3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJyk7XG5cbiAgICBpZiAoIWNvb2tpZU5vdGljZVNob3duKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dQb3B1cCgnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UsIGJ5IGNvbnRpbnVpbmcgdG8gdXNlIHRoZSBzaXRlIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3VyIHVzZSBvZiBjb29raWVzLicsIDE1MDAwKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJywgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5Db29raWVOb3RpY2UucHJvcFR5cGVzID0ge1xuICBzaG93UG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWVOb3RpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ2ZvdW5kJztcblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgICAvLyB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvZXJyb3IvNTAwJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbmNsYXNzIERpc3BsYXlUeXBlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzcGxheVR5cGU6ICdkZXNrdG9wJyxcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICB9XG5cbiAgZ2V0RGlzcGxheVR5cGUgPSAod2luZG93V2lkdGgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPCBzaXplcy5icmVha3BvaW50TW9iaWxlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gJ21vYmlsZSc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludFRhYmxldC52YWx1ZSkge1xuICAgICAgcmV0dXJuICd0YWJsZXQnO1xuICAgIH1cblxuICAgIHJldHVybiAnZGVza3RvcCc7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB0aGlzLmdldERpc3BsYXlUeXBlKHdpbmRvd1dpZHRoKTtcblxuICAgIGlmIChkaXNwbGF5VHlwZSAhPT0gdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5VHlwZSA9IHtcbiAgICAgIGlzTW9iaWxlOiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAnbW9iaWxlJyxcbiAgICAgIGlzVGFibGV0OiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAndGFibGV0JyxcbiAgICAgIGlzRGVza3RvcDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ2Rlc2t0b3AnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbihkaXNwbGF5VHlwZSk7XG4gIH1cbn1cblxuRGlzcGxheVR5cGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJjb25zdCBzaXplcyA9IHtcbiAgYnJlYWtwb2ludE1vYmlsZTogeyB2YWx1ZTogNzY4LCB1bml0OiAncHgnIH0sXG4gIGJyZWFrcG9pbnRUYWJsZXQ6IHsgdmFsdWU6IDk5MiwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50RGVza3RvcDogeyB2YWx1ZTogMTIwMCwgdW5pdDogJ3B4JyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2l6ZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9zaXplcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLmxlc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICA8TGluayB0bz1cIi90ZXJtc0FuZENvbmRpdGlvbnNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvTGluaz5cbiAgICA8TGluayB0bz1cIi9wcml2YWN5UG9saWN5XCI+cHJpdmFjeSBwb2xpY3k8L0xpbms+XG4gICAgPExpbmsgdG89XCIvaW1wcmludFwiPmltcHJpbnQ8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJDb21wb25lbnRzLWZvb3Rlci1mb290ZXJfX2Zvb3Rlci0tM1MxbjRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gNzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQb3B1cHMgZnJvbSAnLi9wb3B1cHMnO1xuaW1wb3J0IHsgaGlkZVBvcHVwIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcG9wdXAgfSkgPT4gKHtcbiAgcG9wdXBzOiBwb3B1cC5wb3B1cHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgaGlkZVBvcHVwLFxufSkoUG9wdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXBzLmxlc3MnO1xuXG5jb25zdCBQb3B1cHMgPSAoeyBwb3B1cHMsIGhpZGVQb3B1cCB9KSA9PiAoXG4gIHBvcHVwcy5sZW5ndGggPiAwID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBzfT5cbiAgICAgIHtwb3B1cHMubWFwKChwb3B1cCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAga2V5PXtwb3B1cC5pZH1cbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgdGV4dD17cG9wdXAudGV4dH1cbiAgICAgICAgICBoaWRlUG9wdXA9e2hpZGVQb3B1cH1cbiAgICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c9e3BvcHVwLm1pbGxpc2Vjb25kc1RvU2hvd31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PilcbiAgICA6IG51bGxcbik7XG5cblBvcHVwcy5wcm9wVHlwZXMgPSB7XG4gIGhpZGVQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcG9wdXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXAubGVzcyc7XG5cbmNsYXNzIFBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmhpZGVQb3B1cCh0aGlzLnByb3BzLmluZGV4KSwgdGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cF9fcG9wdXAtLTI0T1lNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwc1wiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBzX19wb3B1cHMtLTFtMUtFXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHBvcHVwczogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBbLi4uc3RhdGUucG9wdXBzLCB7XG4gICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c6IGFjdGlvbi5taWxsaXNlY29uZHNUb1Nob3csXG4gICAgICB9XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ0hJREVfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBzdGF0ZS5wb3B1cHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBhY3Rpb24uaW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBmaXRuZXNzUGxhbnNEZWZhdWx0ID0ge307XG5cbndpbmRvdy5fQ29uc3RhbnRzLmZpdG5lc3NQbGFucy5mb3JFYWNoKCh4KSA9PiB7XG4gIGZpdG5lc3NQbGFuc0RlZmF1bHRbeC5OYW1lXSA9IHtcbiAgICBwb2ludHM6IDAsXG4gIH07XG59KTtcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBmaXRuZXNzUGxhbnM6IGZpdG5lc3NQbGFuc0RlZmF1bHQsXG4gIHJhbmtlZEZpdG5lc3NQbGFuczogW10sXG59O1xuXG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnUkFOS19GSVRORVNTX1BMQU5TJzoge1xuICAgICAgY29uc3QgZml0bmVzc1BsYW5zID0ge307XG5cbiAgICAgIGFjdGlvbi5maXRuZXNzUGxhbnNQb2ludHMuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBjb25zdCBtYXhOdW1iZXIgPSBNYXRoLm1heChhY3Rpb24uYW5zd2VyUG9pbnRzLCB4LnBvaW50cyk7XG4gICAgICAgIGNvbnN0IG1pbk51bWJlciA9IE1hdGgubWluKGFjdGlvbi5hbnN3ZXJQb2ludHMsIHgucG9pbnRzKTtcbiAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IG1heE51bWJlciAtIG1pbk51bWJlcjtcbiAgICAgICAgY29uc3QgbmV3UG9pbnRzID0gc3RhdGUuZml0bmVzc1BsYW5zW3gubmFtZV0ucG9pbnRzICsgZGlmZmVyZW5jZTtcblxuICAgICAgICBmaXRuZXNzUGxhbnNbeC5uYW1lXSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZS5maXRuZXNzUGxhbnNbeC5uYW1lXSxcbiAgICAgICAgICBpZDogeC5pZCxcbiAgICAgICAgICBuYW1lOiB4Lm5hbWUsXG4gICAgICAgICAgcG9pbnRzOiBuZXdQb2ludHMsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmFua2VkRml0bmVzc1BsYW5zID0gT2JqZWN0LmtleXMoZml0bmVzc1BsYW5zKS5tYXAoa2V5ID0+IGZpdG5lc3NQbGFuc1trZXldKTtcblxuICAgICAgcmFua2VkRml0bmVzc1BsYW5zLnNvcnQoKGEsIGIpID0+IGEucG9pbnRzIC0gYi5wb2ludHMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmFua2VkRml0bmVzc1BsYW5zLFxuICAgICAgICBmaXRuZXNzUGxhbnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvcmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
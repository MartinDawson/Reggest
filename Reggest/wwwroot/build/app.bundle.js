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

var _pageContent = __webpack_require__(713);

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

/***/ 292:
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

/***/ 293:
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

/***/ 294:
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

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(306);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(319);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(758);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _foundRelay = __webpack_require__(335);

var _router = __webpack_require__(453);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(466);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(757);

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

/***/ 453:
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

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(467);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(468);

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

var _routeConfig = __webpack_require__(646);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(755);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(756);

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

/***/ 646:
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

var _fitnessContainer = __webpack_require__(650);

var _termsAndConditionsContainer = __webpack_require__(711);

var _privacyPolicyContainer = __webpack_require__(714);

var _imprintContainer = __webpack_require__(716);

var _errorPageContainer = __webpack_require__(719);

var _primaryLayoutContainer = __webpack_require__(722);

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

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(71);

var _fitness = __webpack_require__(700);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var query = function query() {
  var node = __webpack_require__(294);

  if (node.hash && node.hash !== '1fb8ce95bc50a06a9c7f8a84d3b455a0') {
    console.error('The definition of \'fitnessContainerQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(294);
};

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer,
  query: query
};

exports.default = FitnessContainer;

/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _qAndAContainer = __webpack_require__(701);

var _qAndAContainer2 = _interopRequireDefault(_qAndAContainer);

var _fitness = __webpack_require__(710);

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

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(71);

var _recompose = __webpack_require__(75);

var _relayCompose = __webpack_require__(112);

var _reactRedux = __webpack_require__(16);

var _qAndA = __webpack_require__(703);

var _qAndA2 = _interopRequireDefault(_qAndA);

var _submitAnswerMutation = __webpack_require__(706);

var _submitAnswerMutation2 = _interopRequireDefault(_submitAnswerMutation);

var _fitnessPlansRankedContainer = __webpack_require__(708);

var _fitnessPlansRankedContainer2 = _interopRequireDefault(_fitnessPlansRankedContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionIndex = 0;

var fragments = {
  data: function data() {
    var node = __webpack_require__(292);

    if (node.hash && node.hash !== 'bacbf1b72deedfcb4557eead1b60e2ce') {
      console.error('The definition of \'qAndAContainer\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(292);
  }
};

var refetchQuery = function refetchQuery() {
  var node = __webpack_require__(293);

  if (node.hash && node.hash !== 'a1d7b0fc73c8b9bd0b5f731bf960ebd5') {
    console.error('The definition of \'qAndAContainerRefetchQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(293);
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

/***/ 703:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(704);

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

/***/ 704:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(71);

var _relayCompose = __webpack_require__(112);

var _actions = __webpack_require__(707);

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

/***/ 707:
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

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(16);

var _reactRelay = __webpack_require__(71);

var _relayCompose = __webpack_require__(112);

var _recompose = __webpack_require__(75);

var _fitnessPlansRaked = __webpack_require__(709);

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

/***/ 709:
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
    }),
    _react2.default.createElement(
      'div',
      null,
      'Subscribe to our newsletter to see the rest of your fitness plans and keep updated. It takes 10 seconds and we will never spam you.'
    )
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

/***/ 710:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d"};

/***/ }),

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(712);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 712:
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

/***/ 713:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(715);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

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

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(717);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 717:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(175);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(718);

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

/***/ 718:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(75);

var _errorPage = __webpack_require__(720);

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

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(721);

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

/***/ 721:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(723);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

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

var _classnames = __webpack_require__(724);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(176);

var _primaryLayout = __webpack_require__(732);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(733);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(736);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(737);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(739);

var _footer2 = _interopRequireDefault(_footer);

var _popupsContainer = __webpack_require__(741);

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

/***/ 732:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1","reggest":"Components-layouts-primaryLayout-primaryLayout__reggest--RIHSC"};

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(75);

var _cookieNotice = __webpack_require__(734);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stateHandlers = {
  showCookieNotice: function showCookieNotice() {
    return function () {
      return {
        showingCookieNotice: true
      };
    };
  },
  hideCookieNotice: function hideCookieNotice() {
    return function () {
      return {
        showingCookieNotice: false
      };
    };
  }
};

exports.default = (0, _recompose.compose)((0, _recompose.withStateHandlers)(null, stateHandlers), (0, _recompose.lifecycle)({
  componentDidMount: function componentDidMount() {
    var cookieNoticeShown = localStorage.getItem('cookieNoticeShown');

    if (!cookieNoticeShown) {
      this.props.showCookieNotice(true);

      localStorage.setItem('cookieNoticeShown', true);
    }
  }
}), (0, _recompose.branch)(function (props) {
  return !props.showingCookieNotice;
}, _recompose.renderNothing))(_cookieNotice2.default);

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cookieNotice = __webpack_require__(735);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookieNotice = function CookieNotice(_ref) {
  var hideCookieNotice = _ref.hideCookieNotice;
  return _react2.default.createElement(
    'div',
    { className: _cookieNotice2.default.cookieNotice },
    'This website uses cookies to give you the best user experience, by continuing to use the site you are agreeing to our use of cookies.',
    _react2.default.createElement(
      'button',
      { onClick: hideCookieNotice },
      'Close'
    )
  );
};

CookieNotice.propTypes = {
  hideCookieNotice: _propTypes2.default.func.isRequired
};

exports.default = CookieNotice;

/***/ }),

/***/ 735:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cookieNotice":"Components-footer-cookieNotice__cookieNotice--3wVgu"};

/***/ }),

/***/ 736:
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

var _recompose = __webpack_require__(75);

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

var _sizes = __webpack_require__(738);

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

/***/ 738:
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

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(176);

var _footer = __webpack_require__(740);

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

/***/ 740:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(16);

var _popups = __webpack_require__(742);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(746);

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

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(743);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(745);

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

/***/ 743:
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

var _popup = __webpack_require__(744);

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

      if (Number.isFinite(this.props.millisecondsToShow)) {
        setTimeout(function () {
          return _this2.props.hidePopup(_this2.props.index);
        }, this.props.millisecondsToShow);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _popup2.default.popup },
        this.props.text,
        _react2.default.createElement(
          'button',
          { onClick: this.props.hidePopup(this.props.index) },
          'Close'
        )
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

/***/ 744:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"Components-shared-popup-popup__popup--24OYM"};

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"Components-shared-popup-popups__popups--1m1KE"};

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(747);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {string} text - The text to show in the popup
 * @param {number} [millisecondsToShow] - Optional: The amount of time
 * in milliseconds to show the popup
 */
var showPopup = exports.showPopup = function showPopup(text, millisecondsToShow) {
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

/***/ 755:
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

/***/ 756:
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

/***/ 757:
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

/***/ 758:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[304]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXIuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3N1Ym1pdEFuc3dlck11dGF0aW9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYW5rZWRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1Jha2VkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2Rpc3BsYXlUeXBlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3NpemVzLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidjAiLCJ2MSIsInYyIiwidjMiLCJ2NCIsInY1IiwidjYiLCJoYXNoIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNvbHZlciIsIkFwcCIsInN0b3JlIiwiUmVuZGVyRXJyb3IiLCJlcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwibWlkZGxlV2FyZSIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJyZWR1Y2VycyIsImZvdW5kIiwiZm9ybSIsInBvcHVwIiwidXNlciIsImRpc3BhdGNoIiwiaW5pdCIsIkZpdG5lc3NDb250YWluZXIiLCJxdWVyeSIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiRml0bmVzcyIsImZpdG5lc3MiLCJwcm9wcyIsInF1ZXN0aW9uSW5kZXgiLCJmcmFnbWVudHMiLCJyZWZldGNoUXVlcnkiLCJoYW5kbGVycyIsImFuc3dlck9uQ2xpY2siLCJyZWxheSIsImlkIiwicmVmZXRjaCIsInF1ZXN0aW9uQnlJbmRleCIsIlFBbmRBIiwicXVlc3Rpb25UZXh0IiwiYW5zd2VycyIsInFBbmRBIiwicXVlc3Rpb24iLCJtYXAiLCJhbnN3ZXIiLCJhbnN3ZXJJZCIsImFuc3dlckNvbnRhaW5lciIsImFuc3dlclRleHQiLCJzdHJpbmciLCJhcnJheU9mIiwiaW5zdGFuY2VPZiIsImZ1bmMiLCJtdXRhdGlvbiIsInZhcmlhYmxlcyIsImlucHV0IiwidGhlbiIsInN1Ym1pdEFuc3dlciIsInBvaW50cyIsImZpdG5lc3NQbGFuc1BvaW50cyIsImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIiwiZmlsdGVyIiwieCIsImZpdG5lc3NQbGFuIiwibmFtZSIsImZpdG5lc3NQbGFuSWQiLCJyYW5rRml0bmVzc1BsYW5zIiwiYW5zd2VyUG9pbnRzIiwidHlwZSIsIm1hcFN0YXRlVG9Qcm9wcyIsInJhbmtlZEZpdG5lc3NQbGFucyIsIkZpdG5lc3NQbGFuc1JhbmtlZCIsInJhbmtlZEZpdG5lc3NQbGFuIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJyZWdnZXN0Iiwic3RhdGVIYW5kbGVycyIsInNob3dDb29raWVOb3RpY2UiLCJzaG93aW5nQ29va2llTm90aWNlIiwiaGlkZUNvb2tpZU5vdGljZSIsImNvbXBvbmVudERpZE1vdW50IiwiY29va2llTm90aWNlU2hvd24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIkNvb2tpZU5vdGljZSIsImNvb2tpZU5vdGljZSIsIlByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiRGlzcGxheVR5cGUiLCJnZXREaXNwbGF5VHlwZSIsIndpbmRvd1dpZHRoIiwiYnJlYWtwb2ludE1vYmlsZSIsInZhbHVlIiwiYnJlYWtwb2ludFRhYmxldCIsInVwZGF0ZURpc3BsYXlUeXBlIiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic2V0U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemVzIiwidW5pdCIsImJyZWFrcG9pbnREZXNrdG9wIiwiRm9vdGVyIiwiZm9vdGVyIiwicG9wdXBzIiwiaGlkZVBvcHVwIiwiUG9wdXBzIiwibGVuZ3RoIiwiaW5kZXgiLCJ0ZXh0IiwibWlsbGlzZWNvbmRzVG9TaG93IiwiUG9wdXAiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsInNldFRpbWVvdXQiLCJzaG93UG9wdXAiLCJnZW5lcmF0ZSIsInNob3dHZW5lcmljRXJyb3JQb3B1cCIsImNvbnNvbGUiLCJkZWZhdWx0U3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiXyIsImkiLCJmaXRuZXNzUGxhbnNEZWZhdWx0IiwiX0NvbnN0YW50cyIsImZpdG5lc3NQbGFucyIsImZvckVhY2giLCJOYW1lIiwibWF4TnVtYmVyIiwiTWF0aCIsIm1heCIsIm1pbk51bWJlciIsIm1pbiIsImRpZmZlcmVuY2UiLCJuZXdQb2ludHMiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwic29ydCIsImEiLCJiIiwiZmV0Y2hRdWVyeSIsIm9wZXJhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImVycm9ycyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwibmV0d29yayIsImNyZWF0ZSIsInNvdXJjZSIsImVudmlyb25tZW50Il0sIm1hcHBp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Q1BDLGNBQVEsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUhPO0FBT2hCdkQsVUFBTXdELEtBQUtDLFNBQUwsQ0FBZTtBQUNuQjFKLGFBQU9tSixVQUFVbEMsSUFERTtBQUVuQm5GO0FBRm1CLEtBQWY7QUFQVSxHQUFsQixFQVdHRSxJQVhILENBV1E7QUFBQSxXQUFZMkgsU0FBU0MsSUFBVCxFQUFaO0FBQUEsR0FYUixFQVlHNUgsSUFaSCxDQVlRLFVBQUM0SCxJQUFELEVBQVU7QUFDZDtBQUNBLFFBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixhQUFPQyxRQUFRQyxNQUFSLENBQWVILEtBQUtDLE1BQXBCLENBQVA7QUFDRDs7QUFFRCxXQUFPQyxRQUFRRSxPQUFSLENBQWdCSixJQUFoQixDQUFQO0FBQ0QsR0FuQkgsQ0FEaUI7QUFBQSxDQUFuQjs7QUFzQkEsSUFBTUssVUFBVSxzQkFBUUMsTUFBUixDQUFlaEIsVUFBZixDQUFoQjtBQUNBLElBQU1pQixTQUFTLGdDQUFmO0FBQ0EsSUFBTS9MLFFBQVEsd0JBQVUrTCxNQUFWLENBQWQ7QUFDQSxJQUFNQyxjQUFjLDhCQUFnQjtBQUNsQ0gsa0JBRGtDO0FBRWxDN0w7QUFGa0MsQ0FBaEIsQ0FBcEI7O0FBS0EsaUNBQWNnTSxXQUFkOztrQkFFZUEsVzs7Ozs7OztBQ3hDZix5QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlQ29udGVudC5sZXNzJztcblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRlbnR9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5QYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMjM2YWI1NGEyM2FmOTQ5MGJjNzYyMjdkMDA1NmQ2MTJcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzdWJtaXRBbnN3ZXJNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiB7XG4gICAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgfSxcbnx9O1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtzdWJtaXRBbnN3ZXI6ID97fFxuICAgICthbnN3ZXI6IHt8XG4gICAgICArcG9pbnRzOiBudW1iZXIsXG4gICAgICArcXVlc3Rpb246ID97fFxuICAgICAgICArZml0bmVzc1BsYW5BbnN3ZXJQb2ludHM6ID8kUmVhZE9ubHlBcnJheTw/e3xcbiAgICAgICAgICArcG9pbnRzOiBudW1iZXIsXG4gICAgICAgICAgK2ZpdG5lc3NQbGFuOiA/e3xcbiAgICAgICAgICAgICtmaXRuZXNzUGxhbklkOiBudW1iZXIsXG4gICAgICAgICAgICArbmFtZTogP3N0cmluZyxcbiAgICAgICAgICAgICtwYXJlbnRGaXRuZXNzUGxhbjogP3t8XG4gICAgICAgICAgICAgICtpZDogc3RyaW5nLFxuICAgICAgICAgICAgfH0sXG4gICAgICAgICAgfH0sXG4gICAgICAgIHx9PixcbiAgICAgIHx9LFxuICAgIHx9LFxuICB8fSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXG4gICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXG4pIHtcbiAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICBhbnN3ZXIge1xuICAgICAgcG9pbnRzXG4gICAgICBxdWVzdGlvbiB7XG4gICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcbiAgICAgICAgICBwb2ludHNcbiAgICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgICBmaXRuZXNzUGxhbklkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBwYXJlbnRGaXRuZXNzUGxhbiB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3VibWl0QW5zd2VySW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1Ym1pdEFuc3dlcklucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJwb2ludHNcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5JZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnY1ID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnY2ID0ge1xuICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcInBhcmVudEZpdG5lc3NQbGFuXCIsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB2NVxuICBdXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxcbiAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcXG4pIHtcXG4gIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XFxuICAgIGFuc3dlciB7XFxuICAgICAgcG9pbnRzXFxuICAgICAgcXVlc3Rpb24ge1xcbiAgICAgICAgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMge1xcbiAgICAgICAgICBwb2ludHNcXG4gICAgICAgICAgZml0bmVzc1BsYW4ge1xcbiAgICAgICAgICAgIGZpdG5lc3NQbGFuSWRcXG4gICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgcGFyZW50Rml0bmVzc1BsYW4ge1xcbiAgICAgICAgICAgICAgaWRcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgaWRcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBpZFxcbiAgICAgICAgfVxcbiAgICAgICAgaWRcXG4gICAgICB9XFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NlxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhbkFuc3dlclBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdjVcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHY1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2NVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc5N2VlZGE3OTI2YTg4YWRmZDY4NTNlMTRjZDdjZGMyOCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgcUFuZEFDb250YWluZXIkcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIHFBbmRBQ29udGFpbmVyID0ge3xcbiAgK3F1ZXN0aW9uQnlJbmRleDogP3t8XG4gICAgK3F1ZXN0aW9uVGV4dDogc3RyaW5nLFxuICAgICthbnN3ZXJzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgICArYW5zd2VySWQ6IG51bWJlcixcbiAgICAgICthbnN3ZXJUZXh0OiBzdHJpbmcsXG4gICAgfH0+LFxuICB8fSxcbiAgKyRyZWZUeXBlOiBxQW5kQUNvbnRhaW5lciRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyXCIsXG4gIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJSb290QXJndW1lbnRcIixcbiAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICAgIFwidHlwZVwiOiBcIkludFwiXG4gICAgfVxuICBdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkJ5SW5kZXhcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICAgICAgICBcInR5cGVcIjogXCJJbnRcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25UZXh0XCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdiYWNiZjFiNzJkZWVkZmNiNDU1N2VlYWQxYjYwZTJjZSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXIuZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggZWNhN2VjMjg5MmNlZGFkYjM4M2RmMGU4MGFjMDY0MGZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHFBbmRBQ29udGFpbmVyJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5VmFyaWFibGVzID0ge3xcbiAgcXVlc3Rpb25JbmRleD86ID9udW1iZXIsXG58fTtcbmV4cG9ydCB0eXBlIHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogcUFuZEFDb250YWluZXIkcmVmLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeShcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxuKSB7XG4gIC4uLnFBbmRBQ29udGFpbmVyXG59XG5cbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xuICAgIHF1ZXN0aW9uVGV4dFxuICAgIGFuc3dlcnMge1xuICAgICAgYW5zd2VySWRcbiAgICAgIGFuc3dlclRleHRcbiAgICAgIGlkXG4gICAgfVxuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgXCJ0eXBlXCI6IFwiSW50XCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5KFxcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxcbikge1xcbiAgLi4ucUFuZEFDb250YWluZXJcXG59XFxuXFxuZnJhZ21lbnQgcUFuZEFDb250YWluZXIgb24gUXVlcnkge1xcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xcbiAgICBxdWVzdGlvblRleHRcXG4gICAgYW5zd2VycyB7XFxuICAgICAgYW5zd2VySWRcXG4gICAgICBhbnN3ZXJUZXh0XFxuICAgICAgaWRcXG4gICAgfVxcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25CeUluZGV4XCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJpbmRleFwiLFxuICAgICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJJbnRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25UZXh0XCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2Vyc1wiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcklkXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclRleHRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdhMWQ3YjBmYzczYzhiOWJkMGI1ZjczMWJmOTYwZWJkNSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggODQ2NmFmYTI5NmJkNzQ1YjBlYTVkMzM4YzE4MTk5OGVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHFBbmRBQ29udGFpbmVyJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8XG4gIHF1ZXN0aW9uSW5kZXg/OiA/bnVtYmVyLFxufH07XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICskZnJhZ21lbnRSZWZzOiBxQW5kQUNvbnRhaW5lciRyZWYsXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeShcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxuKSB7XG4gIC4uLnFBbmRBQ29udGFpbmVyXG59XG5cbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xuICAgIHF1ZXN0aW9uVGV4dFxuICAgIGFuc3dlcnMge1xuICAgICAgYW5zd2VySWRcbiAgICAgIGFuc3dlclRleHRcbiAgICAgIGlkXG4gICAgfVxuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgXCJ0eXBlXCI6IFwiSW50XCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkoXFxuICAkcXVlc3Rpb25JbmRleDogSW50XFxuKSB7XFxuICAuLi5xQW5kQUNvbnRhaW5lclxcbn1cXG5cXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lciBvbiBRdWVyeSB7XFxuICBxdWVzdGlvbkJ5SW5kZXgoaW5kZXg6ICRxdWVzdGlvbkluZGV4KSB7XFxuICAgIHF1ZXN0aW9uVGV4dFxcbiAgICBhbnN3ZXJzIHtcXG4gICAgICBhbnN3ZXJJZFxcbiAgICAgIGFuc3dlclRleHRcXG4gICAgICBpZFxcbiAgICB9XFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uQnlJbmRleFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMWZiOGNlOTViYzUwYTA2YTljN2Y4YTg0ZDNiNDU1YTAnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vdXNlci9yZWR1Y2VyJztcblxuY29uc3QgaGlzdG9yeUVuaGFuY2VyID0gY3JlYXRlSGlzdG9yeUVuaGFuY2VyKHtcbiAgcHJvdG9jb2w6IG5ldyBCcm93c2VyUHJvdG9jb2woKSxcbiAgbWlkZGxld2FyZXM6IFtxdWVyeU1pZGRsZXdhcmVdLFxufSk7XG5cbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIoXG4gIG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKSxcbik7XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlKFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICBoaXN0b3J5RW5oYW5jZXIsXG4gIG1hdGNoZXJFbmhhbmNlcixcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbiAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSxcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbiAgcG9wdXAsXG4gIHVzZXIsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgaW1wcmludFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcblxuaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IEZpdG5lc3M7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5KFxuICAgICRxdWVzdGlvbkluZGV4OiBJbnRcbiAgKSB7XG4gICAgLi4ucUFuZEFDb250YWluZXJcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEZpdG5lc3NDb250YWluZXIsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFFBbmRBIGZyb20gJy4uL3FBbmRBL3FBbmRBQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuXG5jb25zdCBGaXRuZXNzID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICA8UUFuZEEgZGF0YT17cHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCB3aXRoSGFuZGxlcnMsIGJyYW5jaCwgcmVuZGVyQ29tcG9uZW50IH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHJlZmV0Y2hDb250YWluZXIgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBxQW5kQSBmcm9tICcuL3FBbmRBJztcbmltcG9ydCBzdWJtaXRBbnN3ZXJNdXRhdGlvbiBmcm9tICcuL3N1Ym1pdEFuc3dlck11dGF0aW9uJztcbmltcG9ydCBmaXRuZXNzUGxhbnNSYW5rZWQgZnJvbSAnLi4vZml0bmVzcy9maXRuZXNzUGxhbnNSYW5rZWRDb250YWluZXInO1xuXG5sZXQgcXVlc3Rpb25JbmRleCA9IDA7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHFBbmRBQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgICBxdWVzdGlvbkJ5SW5kZXggKFxuICAgICAgaW5kZXg6ICRxdWVzdGlvbkluZGV4XG4gICAgKSB7XG4gICAgICBxdWVzdGlvblRleHRcbiAgICAgIGFuc3dlcnMge1xuICAgICAgICBhbnN3ZXJJZFxuICAgICAgICBhbnN3ZXJUZXh0XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCByZWZldGNoUXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeShcbiAgICAkcXVlc3Rpb25JbmRleDogSW50XG4gICkge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyXG4gIH1cbmA7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBhbnN3ZXJPbkNsaWNrOiAoeyBkaXNwYXRjaCwgcmVsYXkgfSkgPT4gKGlkKSA9PiB7XG4gICAgcXVlc3Rpb25JbmRleCArPSAxO1xuICAgIHN1Ym1pdEFuc3dlck11dGF0aW9uKGlkLCBkaXNwYXRjaCk7XG4gICAgcmVsYXkucmVmZXRjaCh7IHF1ZXN0aW9uSW5kZXggfSk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBjb25uZWN0KCksXG4gIHJlZmV0Y2hDb250YWluZXIoZnJhZ21lbnRzLCByZWZldGNoUXVlcnkpLFxuICBmbGF0dGVuUHJvcCgnZGF0YScpLFxuICBmbGF0dGVuUHJvcCgncXVlc3Rpb25CeUluZGV4JyksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiBwcm9wcy5xdWVzdGlvbkJ5SW5kZXggPT09IG51bGwsXG4gICAgcmVuZGVyQ29tcG9uZW50KGZpdG5lc3NQbGFuc1JhbmtlZCksXG4gICksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKHFBbmRBKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3FBbmRBLmxlc3MnO1xuXG5jb25zdCBRQW5kQSA9ICh7IHF1ZXN0aW9uVGV4dCwgYW5zd2VycywgYW5zd2VyT25DbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucUFuZEF9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PntxdWVzdGlvblRleHR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmFuc3dlcklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlck9uQ2xpY2soYW5zd2VyLmFuc3dlcklkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUUFuZEEucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFuc3dlcklkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZi5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2VyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXItLTJyMVFIXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmltcG9ydCB7IHJhbmtGaXRuZXNzUGxhbnMgfSBmcm9tICcuLi91c2VyL2FjdGlvbnMnO1xuXG5jb25zdCBtdXRhdGlvbiA9IGdyYXBocWxgXG4gIG11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxuICAgICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXG4gICkge1xuICAgIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XG4gICAgICBhbnN3ZXIge1xuICAgICAgICBwb2ludHNcbiAgICAgICAgcXVlc3Rpb24ge1xuICAgICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcbiAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgICBmaXRuZXNzUGxhbklkXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgcGFyZW50Rml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IChpZCwgZGlzcGF0Y2gpID0+IHtcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICkudGhlbigoeyBzdWJtaXRBbnN3ZXIgfSkgPT4ge1xuICAgIGNvbnN0IHsgcXVlc3Rpb24sIHBvaW50cyB9ID0gc3VibWl0QW5zd2VyLmFuc3dlcjtcbiAgICBjb25zdCBmaXRuZXNzUGxhbnNQb2ludHMgPSBxdWVzdGlvbi5maXRuZXNzUGxhbkFuc3dlclBvaW50cy5maWx0ZXIoeCA9PiB4LmZpdG5lc3NQbGFuLm5hbWUpLm1hcCh4ID0+ICh7XG4gICAgICBuYW1lOiB4LmZpdG5lc3NQbGFuLm5hbWUsXG4gICAgICBpZDogeC5maXRuZXNzUGxhbi5maXRuZXNzUGxhbklkLFxuICAgICAgcG9pbnRzOiB4LnBvaW50cyxcbiAgICB9KSk7XG5cbiAgICBkaXNwYXRjaChyYW5rRml0bmVzc1BsYW5zKGZpdG5lc3NQbGFuc1BvaW50cywgcG9pbnRzKSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJleHBvcnQgY29uc3QgcmFua0ZpdG5lc3NQbGFucyA9IChmaXRuZXNzUGxhbnNQb2ludHMsIGFuc3dlclBvaW50cykgPT4gKHtcbiAgdHlwZTogJ1JBTktfRklUTkVTU19QTEFOUycsXG4gIGZpdG5lc3NQbGFuc1BvaW50cyxcbiAgYW5zd2VyUG9pbnRzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvYWN0aW9ucy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgcXVlcnlSZW5kZXJlciwgZnJhZ21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgZml0bmVzc1BsYW5zUmFua2VkIGZyb20gJy4vZml0bmVzc1BsYW5zUmFrZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyIH0pID0+ICh7XG4gIHJhbmtlZEZpdG5lc3NQbGFuczogdXNlci5yYW5rZWRGaXRuZXNzUGxhbnMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpLFxuKShmaXRuZXNzUGxhbnNSYW5rZWQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1JhbmtlZENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBGaXRuZXNzUGxhbnNSYW5rZWQgPSAoeyByYW5rZWRGaXRuZXNzUGxhbnMgfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtyYW5rZWRGaXRuZXNzUGxhbnMubWFwKHJhbmtlZEZpdG5lc3NQbGFuID0+XG4gICAgICA8ZGl2IGtleT17cmFua2VkRml0bmVzc1BsYW4uaWR9PntyYW5rZWRGaXRuZXNzUGxhbi5uYW1lfTwvZGl2PlxuICAgICl9XG4gICAgPGRpdj5cbiAgICAgIFN1YnNjcmliZSB0byBvdXIgbmV3c2xldHRlciB0byBzZWUgdGhlIHJlc3Qgb2YgeW91ciBmaXRuZXNzIHBsYW5zXG4gICAgICBhbmQga2VlcCB1cGRhdGVkLlxuICAgICAgSXQgdGFrZXMgMTAgc2Vjb25kcyBhbmQgd2Ugd2lsbCBuZXZlciBzcGFtIHlvdS5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5GaXRuZXNzUGxhbnNSYW5rZWQucHJvcFR5cGVzID0ge1xuICByYW5rZWRGaXRuZXNzUGxhbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3NQbGFuc1JhbmtlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYWtlZC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZpdG5lc3NcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzX19maXRuZXNzLS1SaTc3ZFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gJy4vdGVybXNBbmRDb25kaXRpb25zJztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyID0gVGVybXNBbmRDb25kaXRpb25zO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9ucyA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgICZxdW90O1lvdSZxdW90OyBhbmQgJnF1b3Q7eW91ciZxdW90OyByZWZlciB0byB5b3UsIGFzIGEgdXNlciBvZiB0aGUgU2l0ZS5cbiAgICAgIEEgJnF1b3Q7dXNlciZxdW90OyBpcyBzb21lb25lIHdobyBhY2Nlc3Nlcyxicm93c2VzLCBjcmF3bHMsIHNjcmFwZXMsIG9yIGluIGFueVxuICAgICAgd2F5IHVzZXMgdGhlIFNpdGUuICZxdW90O1dlLCZxdW90OyAmcXVvdDt1cywmcXVvdDsgYW5kICZxdW90O291ciZxdW90OyByZWZlciB0byByZWdnZXN0LlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtyZWdnZXN0IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0XG4gICAgICB3ZSBjcmVhdGUgYW5kIG1ha2UgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1RoaXJkIFBhcnR5IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBwYXJ0aWVzIG90aGVyXG4gICAgICB0aGFuIHJlZ2dlc3Qgb3IgaXRzIHVzZXJzLCB3aGljaCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtTaXRlIENvbnRlbnQmcXVvdDsgbWVhbnMgYWxsIG9mIHRoZSBDb250ZW50IHRoYXQgaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvblxuICAgICAgd2l0aCB0aGUgU2l0ZSwgaW5jbHVkaW5nIFlvdXIgQ29udGVudCwgVXNlciBDb250ZW50LCBUaGlyZCBQYXJ0eSBDb250ZW50LFxuICAgICAgYW5kIHJlZ2dlc3QgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgcmVnZ2VzdCB3ZWJzaXRlIGFyZSBwcm92aWRlZCAmcXVvdDthcyBzaG93biZxdW90Oy5cbiAgICAgICAgICByZWdnZXN0IG1ha2VzIG5vIHdhcnJhbnRpZXMsIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBhbmQgaGVyZWJ5IGRpc2NsYWltc1xuICAgICAgICAgIGFuZCBuZWdhdGVzIGFsbCBvdGhlciB3YXJyYW50aWVzLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbXBsaWVkXG4gICAgICAgICAgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICAgICAgcHVycG9zZSwgb3Igbm9uLWluZnJpbmdlbWVudCBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3Igb3RoZXIgdmlvbGF0aW9uIG9mIHJpZ2h0cy5cbiAgICAgICAgICBGdXJ0aGVyLCByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIHJlZ2dlc3Qgb3IgaXRzIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIChpbmNsdWRpbmcsIHdpdGhvdXRcbiAgICAgICAgICBsaW1pdGF0aW9uLCBkYW1hZ2VzIGZvciBsb3NzIG9mIGRhdGEgb3IgcHJvZml0LCBvciBkdWUgdG8gYnVzaW5lc3MgaW50ZXJydXB0aW9uKVxuICAgICAgICAgIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciBpbnRlcm5ldCBzaXRlIG9yXG4gICAgICAgICAgb2ZmZXJlZCBzZXJ2aWNlcywgZXZlbiBpZiB3ZSBvciBhbiBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIGhhcyBiZWVuIG5vdGlmaWVkXG4gICAgICAgICAgb3JhbGx5IG9yIGluIHdyaXRpbmcgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlLiBCZWNhdXNlIHNvbWUganVyaXNkaWN0aW9uc1xuICAgICAgICAgIGRvIG5vdCBhbGxvdyBsaW1pdGF0aW9ucyBvbiBpbXBsaWVkIHdhcnJhbnRpZXMsIG9yIGxpbWl0YXRpb25zIG9mIGxpYWJpbGl0eSBmb3JcbiAgICAgICAgICBjb25zZXF1ZW50aWFsIG9yIGluY2lkZW50YWwgZGFtYWdlcywgdGhlc2UgbGltaXRhdGlvbnMgbWF5IG5vdCBhcHBseSB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5SZXZpc2lvbnMgYW5kIEVycm9yczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgYXBwZWFyaW5nIG9uIG91ciB3ZWJzaXRlIGNvdWxkIGluY2x1ZGUgdGVjaG5pY2FsLCB0eXBvZ3JhcGhpY2FsLFxuICAgICAgICAgIG9yIHBob3RvZ3JhcGhpYyBlcnJvcnMuIHJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCB0aGF0IGFueSBvZiB0aGUgbWF0ZXJpYWxzIG9uXG4gICAgICAgICAgaXRzIHdlYnNpdGUgYXJlIGFjY3VyYXRlLCBjb21wbGV0ZSwgb3IgY3VycmVudC4gV2UgbWF5IG1ha2UgY2hhbmdlcyB0byB0aGVcbiAgICAgICAgICBtYXRlcmlhbHMgY29udGFpbmVkIG9uIGl0cyB3ZWJzaXRlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICByZWdnZXN0IGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgcmVnZ2VzdCB3ZWJzaXRlIHNoYWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzXG4gICAgICAgICAgb2YgdGhlIGNvdW50cnkgb2Ygbm90ZSB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5FbmdsaXNoIExhbmd1YWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gdGhlIGV2ZW50IG9mIGEgY29uZmxpY3QgYmV0d2VlbiB0aGVzZSBUZXJtcyBhbmQgYSBmb3JlaWduIGxhbmd1YWdlIHZlcnNpb25cbiAgICAgICAgICBvZiBvdXIgVGVybXMgb2YgVXNlLCB0aGUgRW5nbGlzaCBsYW5ndWFnZSB2ZXJzaW9uIG9mIHRoZXNlIFRlcm1zIGdvdmVybnMuXG4gICAgICAgICAgQWxsIGRpc3B1dGVzLCBjbGFpbXMgYW5kIGNhdXNlcyBvZiBhY3Rpb24gKGFuZCByZWxhdGVkIHByb2NlZWRpbmdzKSB3aWxsIGJlXG4gICAgICAgICAgY29tbXVuaWNhdGVkIGluIEVuZ2xpc2guXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Db3B5cmlnaHQgcG9saWN5LCBub3RpY2UgYW5kIGNsYWltIGluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIG1hdGVyaWFscyBvbiB0aGlzIHNpdGUsIHdoZXRoZXIgc2VwYXJhdGUgb3IgY29tcGlsZWQsIGluY2x1ZGluZyxcbiAgICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8sIHRleHQsIGdyYXBoaWNzLCBhdWRpbyBjbGlwcywgbG9nb3MsIGJ1dHRvbnMsIGltYWdlcyxcbiAgICAgICAgICBkaWdpdGFsIGRvd25sb2FkcywgZGF0YSBjb21waWxhdGlvbnMsIHNvZnR3YXJlLCBpY29ucywgaHRtbCBjb2RlIGFuZCB4bWwgY29kZSxcbiAgICAgICAgICBhcyB3ZWxsIGFzIGFsbCBjb3B5cmlnaHQsIHBhdGVudCwgdHJhZGVtYXJrLCB0cmFkZSBkcmVzcywgYW5kIG90aGVyIHJpZ2h0c1xuICAgICAgICAgIHRoZXJlaW4sIGFyZSBvd25lZCBvciBsaWNlbnNlZCBieSByZWdnZXN0IGFuZCBpdHMgdGhpcmQtcGFydHkgaW5mb3JtYXRpb24gcHJvdmlkZXJzLFxuICAgICAgICAgIGFuZCBhcmUgcHJvdGVjdGVkIGJ5IGludGVybmF0aW9uYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IGxhd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2VDb250ZW50XCI6XCJDb21wb25lbnRzLXNoYXJlZC1wYWdlQ29udGVudF9fcGFnZUNvbnRlbnQtLXdwdXRXXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcml2YWN5UG9saWN5IGZyb20gJy4vcHJpdmFjeVBvbGljeSc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3lDb250YWluZXIgPSBQcml2YWN5UG9saWN5O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpdmFjeVBvbGljeUNvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3lDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3kgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpclxuICAgICAgJmFwb3M7UGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24mYXBvczsgKFBJSSkgaXMgYmVpbmcgdXNlZCBvbmxpbmUuXG4gICAgICBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAgICAgIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG9cbiAgICAgIGlkZW50aWZ5IGFuIGluZGl2aWR1YWwgaW4gY29udGV4dC4gUGxlYXNlIHJlYWQgb3VyIHByaXZhY3kgcG9saWN5IGNhcmVmdWxseSB0byBnZXQgYSBjbGVhclxuICAgICAgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGVcbiAgICAgIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGF0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGRvIHdlIGNvbGxlY3Q/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3Igb3VyIG5ld3NsZXR0ZXIsIHlvdSB3aWxsIGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICBUaGlzIGlzIHRvIGhlbHAgdXMgaW5kZW50aWZ5IHlvdSBhbmQga2VlcCB5b3UgdXBkYXRlZC4gV2Ugd2lsbCBub3Qgc2VuZCB5b3UgYW55IGVtYWlscyB0aGF0IHlvdVxuICAgICAgICAgIGRvIG5vdCByZXF1ZXN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGNvbGxlY3QgY2VydGFpbiBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSByZWdpc3RlciBmb3Igb3VyIG5ld3NsZXR0ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Ib3cgZG8gd2UgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy5cbiAgICAgICAgICBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuIFdlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuXG4gICAgICAgICAgWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBjb250YWluZWQgYmVoaW5kIHNlY3VyZWQgbmV0d29ya3MgYW5kIGlzIG9ubHkgYWNjZXNzaWJsZVxuICAgICAgICAgIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlXG4gICAgICAgICAgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxuICAgICAgICAgIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuXG4gICAgICAgICAgV2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyXG4gICAgICAgICAgaW5mb3JtYXRpb24gdG8gbWFpbnRhaW4gdGhlIHNhZmV0eSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG8gd2UgdXNlICZhcG9zO2Nvb2tpZXMmYXBvczs/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWVzLiBDb29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGEgc2l0ZSBvciBpdHMgc2VydmljZSBwcm92aWRlciB0cmFuc2ZlcnMgdG8geW91clxuICAgICAgICAgIGNvbXB1dGVyJmFwb3M7cyBoYXJkIGRyaXZlIHRocm91Z2ggeW91ciBXZWIgYnJvd3NlciB0aGF0IGVuYWJsZXMgdGhlXG4gICAgICAgICAgc2l0ZSZhcG9zO3Mgb3Igc2VydmljZSBwcm92aWRlciZhcG9zO3Mgc3lzdGVtcyB0byByZWNvZ25pemUgeW91ciBicm93c2VyIGFuZCBjYXB0dXJlXG4gICAgICAgICAgYW5kIHJlbWVtYmVyIGNlcnRhaW4gaW5mb3JtYXRpb24uIFRoZXkgYXJlIHVzZWQgdG8gaGVscCB1cyB1bmRlcnN0YW5kIHlvdXIgcHJlZmVyZW5jZXNcbiAgICAgICAgICBiYXNlZCBvbiBwcmV2aW91cyBvciBjdXJyZW50IHNpdGUgYWN0aXZpdHksIHdoaWNoIGVuYWJsZXMgdXMgdG8gcHJvdmlkZVxuICAgICAgICAgIHlvdSB3aXRoIGltcHJvdmVkIHNlcnZpY2VzLiBXZSBhbHNvIHVzZSBjb29raWVzIHRvIGhlbHAgdXMgY29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dFxuICAgICAgICAgIHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbiBzbyB0aGF0IHdlIGNhbiBvZmZlciBiZXR0ZXIgc2l0ZVxuICAgICAgICAgIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2UgdXNlIGNvb2tpZXMgdG86PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5VbmRlcnN0YW5kIGFuZCBzYXZlIHVzZXImYXBvcztzIHByZWZlcmVuY2VzIGZvciBmdXR1cmUgdmlzaXRzLjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dCBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICBpbiBvcmRlciB0byBvZmZlciBiZXR0ZXIgc2l0ZSBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIFdlIG1heSBhbHNvIHVzZSB0cnVzdGVkIHRoaXJkLXBhcnR5IHNlcnZpY2VzIHRoYXQgdHJhY2sgdGhpc1xuICAgICAgICAgICAgaW5mb3JtYXRpb24gb24gb3VyIGJlaGFsZlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENvb2tpZXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciB3ZWJzaXRlIGFuZCB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgd2l0aG91dCBoYXZpbmcgdGhlbSBlbmFibGVkLiBCeSB1c2luZyBvdXIgc2l0ZSB5b3UgYWxsb3cgdXMgdG8gdXNlIGNvb2tpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgbWF5IGJlIHRoaXJkLXBhcnR5IGxpbmtzIHRvIHJhZGlvIHN0YXRpb24gd2Vic2l0ZXMgdGhyb3VnaG91dCBvdXJcbiAgICAgICAgICB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kXG4gICAgICAgICAgYWN0aXZpdGllcyBvZiB0aGVzZSBsaW5rZWQgc2l0ZXMuIE5vbmV0aGVsZXNzLCB3ZSBzZWVrIHRvIHByb3RlY3RcbiAgICAgICAgICB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy5cbiAgICAgICAgICBBbnkgbGluayBvbiBvdXIgc2l0ZSB0byBhIHRoaXJkIHBhcnQgd2Vic2l0ZSB0aGF0IGlzIG5vdCByZWxldmFudFxuICAgICAgICAgIG9yIGlmIHdlIGRlZW0gaXQgaW5hcHByb3ByaWF0ZSwgbWF5IGJlIHJlbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb29nbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBHb29nbGUmYXBvcztzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG9cbiAgICAgICAgICBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW5cblxuICAgICAgICAgIFdlIGhhdmUgbm90IGVuYWJsZWQgR29vZ2xlIEFkU2Vuc2Ugb24gb3VyIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuXG4gICAgICAgICAgVGhlIGxhdyZhcG9zO3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnlcbiAgICAgICAgICBpbiB0aGUgVW5pdGVkIFN0YXRlcyAoYW5kIGNvbmNlaXZhYmx5IHRoZSB3b3JsZCkgdGhhdCBvcGVyYXRlcyB3ZWJzaXRlcyBjb2xsZWN0aW5nXG4gICAgICAgICAgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXNcbiAgICAgICAgICBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmRcbiAgICAgICAgICB0aG9zZSBpbmRpdmlkdWFscyBvciBjb21wYW5pZXMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nIHNoYXJlZC4gLSBTZWUgbW9yZSBhdDpcbiAgICAgICAgICBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWZcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkFjY29yZGluZyB0byBDYWxPUFBBLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseS5cbiAgICAgICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBhIGxpbmsgdG8gaXQgZnJvbSBvdXIgaG9tZSBwYWdlIGluIHRoZSBoZWFkZXIuXG4gICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJmFwb3M7UHJpdmFjeSZhcG9zOyBhbmQgY2FuIGVhc2lseVxuICAgICAgICAgIGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS5cblxuICAgICAgICAgIFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOlxuICAgICAgICAgICAgICAgIOKAoiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZVxuICAgICAgICAgIENhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICDigKIgVGhyb3VnaCBvdXIgd2Vic2l0ZVxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmdcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNPUFBBIChDaGlsZHJlbiBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCk8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW5cbiAgICAgICAgICB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZCwgdGhlIENoaWxkcmVuJmFwb3M7cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuIFRoZSBGZWRlcmFsIFRyYWRlIENvbW1pc3Npb24sIFVuaXRlZCBTdGF0ZXMmYXBvcztcbiAgICAgICAgICBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdFxuICAgICAgICAgIG9wZXJhdG9ycyBvZiB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIG11c3QgZG8gdG8gcHJvdGVjdCBjaGlsZHJlbiZhcG9zO3NcbiAgICAgICAgICBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLlxuXG4gICAgICAgICAgV2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyBQcmluY2lwbGVzIGZvcm0gdGhlIGJhY2tib25lIG9mIHByaXZhY3lcbiAgICAgICAgICBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudFxuICAgICAgICAgIHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmdcbiAgICAgICAgICB0aGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZSBQcmluY2lwbGVzIGFuZCBob3cgdGhleSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgaXNcbiAgICAgICAgICBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgSW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGVcbiAgICAgICAgICBmb2xsb3dpbmcgcmVzcG9uc2l2ZSBhY3Rpb24sIHNob3VsZCBhIGRhdGEgYnJlYWNoIG9jY3VyOlxuXG4gICAgICAgICAgV2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLiBXZSB3aWxsIGFsc29cbiAgICAgICAgICBub3RpZnkgdXNlcnMgdmlhIGFuIGluLXNpdGUgbm90aWZpY2F0aW9uIG9uIHRoZSBob21lIHBhZ2Ugd2l0aGluIDcgYnVzaW5lc3MgZGF5cy5cblxuICAgICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdCBpbmRpdmlkdWFsc1xuICAgICAgICAgIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9yc1xuICAgICAgICAgIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seVxuICAgICAgICAgIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0XG4gICAgICAgICAgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZVxuICAgICAgICAgIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1wcmludC5sZXNzJztcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wcmludENvbnRlbnR9PlxuICAgICAgPGgxPkltcHJpbnQ8L2gxPlxuICAgICAgPGRpdj5Db21wYW55IE5hbWU6IFZBU1QgTkVUV09SSyBMVEQ8L2Rpdj5cbiAgICAgIDxkaXY+TWFuYWdpbmcgRGlyZWN0b3I6IE1hcnRpbiBEYXdzb248L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzczogMjYgQ2FsZGVyVmlldywgUmFzdHJpY2ssIEJyaWdob3VzZSwgSEQ2M0RRIFVuaXRlZCBLaW5nZG9tPC9kaXY+XG4gICAgICA8ZGl2PlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsIGFkZHJlc3M6IGluZm9AcmVnZ2VzdC5jb208L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW1wcmludENvbnRlbnRcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWltcHJpbnRfX2ltcHJpbnRDb250ZW50LS0xNXJMTVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Vycm9yUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb3BzID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogJ1RoZSBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC4nIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoY3JlYXRlUHJvcHMpLFxuKTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gZW5oYW5jZShFcnJvclBhZ2UpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocHJvcHMucGFyYW1zLnN0YXR1cywgMTApfVxuICAgICAgZXJyb3I9e3Byb3BzLmxvY2F0aW9uLnN0YXRlLmVycm9yfVxuICAgIC8+XG4gICksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yUGFnZS5sZXNzJztcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfT5cbiAgICA8aDE+RXJyb3Ige3N0YXR1c308L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkVycm9yUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC4nLFxufTtcblxuRXJyb3JQYWdlLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBxdW90YXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yUGFnZVwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclBhZ2UtLTFhUy16XCIsXCJlcnJvclwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvci0tNjJLWkNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNzIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gJy4vcHJpbWFyeUxheW91dCc7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXRDb250YWluZXIgPSBQcmltYXJ5TGF5b3V0O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpbWFyeUxheW91dENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdmb3VuZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmltYXJ5TGF5b3V0Lmxlc3MnO1xuaW1wb3J0IENvb2tpZU5vdGljZSBmcm9tICcuLi8uLi9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyJztcbmltcG9ydCBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBmcm9tICcuL3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5JztcbmltcG9ydCBEaXNwbGF5VHlwZSBmcm9tICcuLi8uLi9zaGFyZWQvZGlzcGxheVR5cGUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9mb290ZXIvZm9vdGVyJztcbmltcG9ydCBQb3B1cHMgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lcic7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXQgPSAoe1xuICBjaGlsZHJlbixcbn0pID0+IChcbiAgPERpc3BsYXlUeXBlPlxuICAgIHsoZGlzcGxheVR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGRpc3BsYXlUeXBlQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgZGlzcGxheVR5cGUuaXNNb2JpbGUgJiYgJ21vYmlsZScsXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzVGFibGV0ICYmICd0YWJsZXQnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc0Rlc2t0b3AgJiYgJ2Rlc2t0b3AnLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGRpc3BsYXlUeXBlQ2xhc3NOYW1lLCBzdHlsZXMucHJpbWFyeUxheW91dCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMucmVnZ2VzdH0+cmVnZ2VzdDwvTGluaz5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDxQb3B1cHMgLz5cbiAgICAgICAgICA8Q29va2llTm90aWNlIC8+XG4gICAgICAgIDwvUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgICApO1xuICAgIH19XG4gIDwvRGlzcGxheVR5cGU+XG4pO1xuXG5QcmltYXJ5TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5QcmltYXJ5TGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwcmltYXJ5TGF5b3V0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19wcmltYXJ5TGF5b3V0LS0zRlZqYlwiLFwid3JhcFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fd3JhcC0tM092MzhcIixcIm1haW5cIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX21haW4tLTFHNmExXCIsXCJyZWdnZXN0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19yZWdnZXN0LS1SSUhTQ1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZUhhbmRsZXJzLCBsaWZlY3ljbGUsIGJyYW5jaCwgcmVuZGVyTm90aGluZyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi9jb29raWVOb3RpY2UnO1xuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICBzaG93Q29va2llTm90aWNlOiAoKSA9PiAoKSA9PiAoe1xuICAgIHNob3dpbmdDb29raWVOb3RpY2U6IHRydWUsXG4gIH0pLFxuICBoaWRlQ29va2llTm90aWNlOiAoKSA9PiAoKSA9PiAoe1xuICAgIHNob3dpbmdDb29raWVOb3RpY2U6IGZhbHNlLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKG51bGwsIHN0YXRlSGFuZGxlcnMpLFxuICBsaWZlY3ljbGUoe1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgY29va2llTm90aWNlU2hvd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nKTtcblxuICAgICAgaWYgKCFjb29raWVOb3RpY2VTaG93bikge1xuICAgICAgICB0aGlzLnByb3BzLnNob3dDb29raWVOb3RpY2UodHJ1ZSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiAhcHJvcHMuc2hvd2luZ0Nvb2tpZU5vdGljZSxcbiAgICByZW5kZXJOb3RoaW5nLFxuICApLFxuKShDb29raWVOb3RpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb29raWVOb3RpY2UubGVzcyc7XG5cbmNvbnN0IENvb2tpZU5vdGljZSA9ICh7IGhpZGVDb29raWVOb3RpY2UgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvb2tpZU5vdGljZX0+XG4gICAgVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UsXG4gICAgYnkgY29udGludWluZyB0byB1c2UgdGhlIHNpdGUgeW91IGFyZSBhZ3JlZWluZyB0byBvdXIgdXNlIG9mIGNvb2tpZXMuXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoaWRlQ29va2llTm90aWNlfT5DbG9zZTwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbkNvb2tpZU5vdGljZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGVDb29raWVOb3RpY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWVOb3RpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjb29raWVOb3RpY2VcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWNvb2tpZU5vdGljZV9fY29va2llTm90aWNlLS0zd1ZndVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdmb3VuZCc7XG5cbmNsYXNzIFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgLy8gdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Vycm9yLzUwMCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuXG5jbGFzcyBEaXNwbGF5VHlwZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXlUeXBlOiAnZGVza3RvcCcsXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheVR5cGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgfVxuXG4gIGdldERpc3BsYXlUeXBlID0gKHdpbmRvd1dpZHRoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludE1vYmlsZS52YWx1ZSkge1xuICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRUYWJsZXQudmFsdWUpIHtcbiAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2Rlc2t0b3AnO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVR5cGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gdGhpcy5nZXREaXNwbGF5VHlwZSh3aW5kb3dXaWR0aCk7XG5cbiAgICBpZiAoZGlzcGxheVR5cGUgIT09IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5VHlwZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB7XG4gICAgICBpc01vYmlsZTogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ21vYmlsZScsXG4gICAgICBpc1RhYmxldDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ3RhYmxldCcsXG4gICAgICBpc0Rlc2t0b3A6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdkZXNrdG9wJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oZGlzcGxheVR5cGUpO1xuICB9XG59XG5cbkRpc3BsYXlUeXBlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Rpc3BsYXlUeXBlLmpzIiwiY29uc3Qgc2l6ZXMgPSB7XG4gIGJyZWFrcG9pbnRNb2JpbGU6IHsgdmFsdWU6IDc2OCwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50VGFibGV0OiB7IHZhbHVlOiA5OTIsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludERlc2t0b3A6IHsgdmFsdWU6IDEyMDAsIHVuaXQ6ICdweCcgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpemVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5sZXNzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgPExpbmsgdG89XCIvdGVybXNBbmRDb25kaXRpb25zXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L0xpbms+XG4gICAgPExpbmsgdG89XCIvcHJpdmFjeVBvbGljeVwiPnByaXZhY3kgcG9saWN5PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2ltcHJpbnRcIj5pbXByaW50PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvb3RlclwiOlwiQ29tcG9uZW50cy1mb290ZXItZm9vdGVyX19mb290ZXItLTNTMW40XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUG9wdXBzIGZyb20gJy4vcG9wdXBzJztcbmltcG9ydCB7IGhpZGVQb3B1cCB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHBvcHVwIH0pID0+ICh7XG4gIHBvcHVwczogcG9wdXAucG9wdXBzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gIGhpZGVQb3B1cCxcbn0pKFBvcHVwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwcy5sZXNzJztcblxuY29uc3QgUG9wdXBzID0gKHsgcG9wdXBzLCBoaWRlUG9wdXAgfSkgPT4gKFxuICBwb3B1cHMubGVuZ3RoID4gMCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwc30+XG4gICAgICB7cG9wdXBzLm1hcCgocG9wdXAsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIGtleT17cG9wdXAuaWR9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHRleHQ9e3BvcHVwLnRleHR9XG4gICAgICAgICAgaGlkZVBvcHVwPXtoaWRlUG9wdXB9XG4gICAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93PXtwb3B1cC5taWxsaXNlY29uZHNUb1Nob3d9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj4pXG4gICAgOiBudWxsXG4pO1xuXG5Qb3B1cHMucHJvcFR5cGVzID0ge1xuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvcHVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBtaWxsaXNlY29uZHNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwLmxlc3MnO1xuXG5jbGFzcyBQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUodGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlkZVBvcHVwKHRoaXMucHJvcHMuaW5kZXgpLCB0aGlzLnByb3BzLm1pbGxpc2Vjb25kc1RvU2hvdyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlUG9wdXAodGhpcy5wcm9wcy5pbmRleCl9PkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cF9fcG9wdXAtLTI0T1lNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwc1wiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBzX19wb3B1cHMtLTFtMUtFXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBwb3B1cFxuICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZHNUb1Nob3ddIC0gT3B0aW9uYWw6IFRoZSBhbW91bnQgb2YgdGltZVxuICogaW4gbWlsbGlzZWNvbmRzIHRvIHNob3cgdGhlIHBvcHVwXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93UG9wdXAgPSAodGV4dCwgbWlsbGlzZWNvbmRzVG9TaG93KSA9PiAoe1xuICB0eXBlOiAnU0hPV19QT1BVUCcsXG4gIHRleHQsXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gIG1pbGxpc2Vjb25kc1RvU2hvdyxcbn0pO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHBvcHVwIHRvIGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVQb3B1cCA9IGluZGV4ID0+ICh7XG4gIHR5cGU6ICdISURFX1BPUFVQJyxcbiAgaW5kZXgsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNob3dHZW5lcmljRXJyb3JQb3B1cCA9IChlcnJvcikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gc2hvd1BvcHVwKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSB0cnkgcmVmcmVzaGluZyB0aGUgcGFnZS4nKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBwb3B1cHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gWy4uLnN0YXRlLnBvcHVwcywge1xuICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93OiBhY3Rpb24ubWlsbGlzZWNvbmRzVG9TaG93LFxuICAgICAgfV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdISURFX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gc3RhdGUucG9wdXBzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuY29uc3QgZml0bmVzc1BsYW5zRGVmYXVsdCA9IHt9O1xuXG53aW5kb3cuX0NvbnN0YW50cy5maXRuZXNzUGxhbnMuZm9yRWFjaCgoeCkgPT4ge1xuICBmaXRuZXNzUGxhbnNEZWZhdWx0W3guTmFtZV0gPSB7XG4gICAgcG9pbnRzOiAwLFxuICB9O1xufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgZml0bmVzc1BsYW5zOiBmaXRuZXNzUGxhbnNEZWZhdWx0LFxuICByYW5rZWRGaXRuZXNzUGxhbnM6IFtdLFxufTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JBTktfRklUTkVTU19QTEFOUyc6IHtcbiAgICAgIGNvbnN0IGZpdG5lc3NQbGFucyA9IHt9O1xuXG4gICAgICBhY3Rpb24uZml0bmVzc1BsYW5zUG9pbnRzLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgY29uc3QgbWF4TnVtYmVyID0gTWF0aC5tYXgoYWN0aW9uLmFuc3dlclBvaW50cywgeC5wb2ludHMpO1xuICAgICAgICBjb25zdCBtaW5OdW1iZXIgPSBNYXRoLm1pbihhY3Rpb24uYW5zd2VyUG9pbnRzLCB4LnBvaW50cyk7XG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXhOdW1iZXIgLSBtaW5OdW1iZXI7XG4gICAgICAgIGNvbnN0IG5ld1BvaW50cyA9IHN0YXRlLmZpdG5lc3NQbGFuc1t4Lm5hbWVdLnBvaW50cyArIGRpZmZlcmVuY2U7XG5cbiAgICAgICAgZml0bmVzc1BsYW5zW3gubmFtZV0gPSB7XG4gICAgICAgICAgLi4uc3RhdGUuZml0bmVzc1BsYW5zW3gubmFtZV0sXG4gICAgICAgICAgaWQ6IHguaWQsXG4gICAgICAgICAgbmFtZTogeC5uYW1lLFxuICAgICAgICAgIHBvaW50czogbmV3UG9pbnRzLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHJhbmtlZEZpdG5lc3NQbGFucyA9IE9iamVjdC5rZXlzKGZpdG5lc3NQbGFucykubWFwKGtleSA9PiBmaXRuZXNzUGxhbnNba2V5XSk7XG5cbiAgICAgIHJhbmtlZEZpdG5lc3NQbGFucy5zb3J0KChhLCBiKSA9PiBhLnBvaW50cyAtIGIucG9pbnRzKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJhbmtlZEZpdG5lc3NQbGFucyxcbiAgICAgICAgZml0bmVzc1BsYW5zLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy91c2VyL3JlZHVjZXIuanMiLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uLCB2YXJpYWJsZXMpID0+XG4gIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2FwcC9hcHAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
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

var _pageContent = __webpack_require__(712);

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
 * @relayHash 503cacdd4ec52eec6b939ac2e43feb56
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
      +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
        +points: number,
        +fitnessPlan: ?{|
          +name: string,
        |},
      |}>,
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
      fitnessPlanAnswerPoints {
        points
        fitnessPlan {
          name
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
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v4 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "submitAnswerMutation",
    "id": null,
    "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      points\n      fitnessPlanAnswerPoints {\n        points\n        fitnessPlan {\n          name\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
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
              "selections": [v3]
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
              "selections": [v3, v4]
            }, v4]
          }, v4]
        }]
      }]
    }
  };
}();
node /*: any*/.hash = '105ff848593b0798c47d1a7f4f51e851';
module.exports = node;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type qAndAContainer_question$ref: FragmentReference;
export type qAndAContainer_question = {|
  +questionText: string,
  +answers: ?$ReadOnlyArray<?{|
    +answerId: number,
    +answerText: string,
    +points: number,
  |}>,
  +$refType: qAndAContainer_question$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "qAndAContainer_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
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
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "points",
      "args": null,
      "storageKey": null
    }]
  }]
};
node /*: any*/.hash = 'c0d505175d65be9f477c3754e1debc62';
module.exports = node;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 866dcfebe9edbcc6e4e04007c38fe652
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer_question$ref = any;
export type qAndAContainerRefetchQueryVariables = {| |};
export type qAndAContainerRefetchQueryResponse = {|
  +question: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
|};
*/

/*
query qAndAContainerRefetchQuery {
  question {
    ...qAndAContainer_question
    id
  }
}

fragment qAndAContainer_question on Question {
  questionText
  answers {
    answerId
    answerText
    points
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = {
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
    "text": "query qAndAContainerRefetchQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    points\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "qAndAContainerRefetchQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "qAndAContainer_question",
          "args": null
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "qAndAContainerRefetchQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": null,
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
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "points",
            "args": null,
            "storageKey": null
          }, v0]
        }, v0]
      }]
    }
  };
}();
node /*: any*/.hash = 'e4bcf4165fcd5403d2854252566be518';
module.exports = node;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 07a55a19cbc7171725b1e05904f00f45
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type qAndAContainer_question$ref = any;
export type fitnessContainerQueryVariables = {| |};
export type fitnessContainerQueryResponse = {|
  +question: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
|};
*/

/*
query fitnessContainerQuery {
  question {
    ...qAndAContainer_question
    id
  }
}

fragment qAndAContainer_question on Question {
  questionText
  answers {
    answerId
    answerText
    points
    id
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = {
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
    "text": "query fitnessContainerQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    points\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "fitnessContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "qAndAContainer_question",
          "args": null
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "fitnessContainerQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": null,
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
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "points",
            "args": null,
            "storageKey": null
          }, v0]
        }, v0]
      }]
    }
  };
}();
node /*: any*/.hash = '35493b6b4248c5ffebe51c6d14b034ba';
module.exports = node;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(734);

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

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(307);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(320);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(754);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(16);

var _foundRelay = __webpack_require__(336);

var _router = __webpack_require__(454);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(467);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(753);

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

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(139);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(144);

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

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(468);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(469);

var _foundReducer = __webpack_require__(157);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(66);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(158);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(276);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(277);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(159);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(160);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(647);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(752);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(767);

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

/***/ 647:
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

var _fitnessContainer = __webpack_require__(651);

var _termsAndConditionsContainer = __webpack_require__(710);

var _privacyPolicyContainer = __webpack_require__(713);

var _imprintContainer = __webpack_require__(715);

var _errorPageContainer = __webpack_require__(718);

var _primaryLayoutContainer = __webpack_require__(721);

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

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(105);

var _fitness = __webpack_require__(701);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var query = function query() {
  var node = __webpack_require__(294);

  if (node.hash && node.hash !== '35493b6b4248c5ffebe51c6d14b034ba') {
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

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndAContainer = __webpack_require__(702);

var _qAndAContainer2 = _interopRequireDefault(_qAndAContainer);

var _fitness = __webpack_require__(709);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fitness = function Fitness(_ref) {
  var question = _ref.question;
  return _react2.default.createElement(
    'div',
    { className: _fitness2.default.fitness },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_qAndAContainer2.default, { question: question })
    )
  );
};

Fitness.propTypes = {
  question: _propTypes2.default.object.isRequired
};

exports.default = Fitness;

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(105);

var _recompose = __webpack_require__(173);

var _relayCompose = __webpack_require__(174);

var _reactRedux = __webpack_require__(16);

var _qAndA = __webpack_require__(704);

var _qAndA2 = _interopRequireDefault(_qAndA);

var _submitAnswerMutation = __webpack_require__(707);

var _submitAnswerMutation2 = _interopRequireDefault(_submitAnswerMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  question: function question() {
    var node = __webpack_require__(292);

    if (node.hash && node.hash !== 'c0d505175d65be9f477c3754e1debc62') {
      console.error('The definition of \'qAndAContainer_question\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(292);
  }
};

var refetchQuery = function refetchQuery() {
  var node = __webpack_require__(293);

  if (node.hash && node.hash !== 'e4bcf4165fcd5403d2854252566be518') {
    console.error('The definition of \'qAndAContainerRefetchQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(293);
};

var handlers = {
  answerOnClick: function answerOnClick(_ref) {
    var dispatch = _ref.dispatch,
        relay = _ref.relay;
    return function (id) {
      (0, _submitAnswerMutation2.default)(id, dispatch);
      relay.refetch();
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _relayCompose.refetchContainer)(fragments, refetchQuery), (0, _recompose.flattenProp)('question'), (0, _recompose.withHandlers)(handlers))(_qAndA2.default);

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(705);

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
    points: _propTypes2.default.number.isRequired,
    answerText: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  answerOnClick: _propTypes2.default.func.isRequired
};

exports.default = QAndA;

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(105);

var _relayCompose = __webpack_require__(174);

var _actions = __webpack_require__(708);

var mutation = function mutation() {
  var node = __webpack_require__(291);

  if (node.hash && node.hash !== '105ff848593b0798c47d1a7f4f51e851') {
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
        fitnessPlanAnswerPoints = _submitAnswer$answer.fitnessPlanAnswerPoints,
        points = _submitAnswer$answer.points;

    var fitnessPlansPoints = fitnessPlanAnswerPoints.map(function (x) {
      return {
        name: x.fitnessPlan.name,
        points: x.points
      };
    });

    dispatch((0, _actions.addPoints)(fitnessPlansPoints, points));
  });
};

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addPoints = exports.addPoints = function addPoints(fitnessPlansPoints, answerPoints) {
  return {
    type: 'ADD_POINTS',
    fitnessPlansPoints: fitnessPlansPoints,
    answerPoints: answerPoints
  };
};

/***/ }),

/***/ 709:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d"};

/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(711);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 711:
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

/***/ 712:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(714);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 714:
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

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(716);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(175);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(717);

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

/***/ 717:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(173);

var _errorPage = __webpack_require__(719);

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

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(720);

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

/***/ 720:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(722);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(723);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(176);

var _primaryLayout = __webpack_require__(731);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(732);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(742);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(743);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(745);

var _footer2 = _interopRequireDefault(_footer);

var _popupsContainer = __webpack_require__(747);

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

/***/ 731:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1","reggest":"Components-layouts-primaryLayout-primaryLayout__reggest--RIHSC"};

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(16);

var _cookieNotice = __webpack_require__(733);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

var _actions = __webpack_require__(303);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(null, { showPopup: _actions.showPopup })(_cookieNotice2.default);

/***/ }),

/***/ 733:
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

/***/ 742:
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

var _recompose = __webpack_require__(173);

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

var _sizes = __webpack_require__(744);

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

/***/ 744:
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

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(176);

var _footer = __webpack_require__(746);

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

/***/ 746:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(16);

var _popups = __webpack_require__(748);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(303);

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

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(749);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(751);

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

/***/ 749:
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

var _popup = __webpack_require__(750);

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

/***/ 750:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"Components-shared-popup-popup__popup--24OYM"};

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"Components-shared-popup-popups__popups--1m1KE"};

/***/ }),

/***/ 752:
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

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(174);

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

/***/ 754:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 767:
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
  fitnessPlans: fitnessPlansDefault
};

/* eslint-enable no-underscore-dangle */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_POINTS':
      {
        debugger;
        var fitnessPlans = {};

        action.fitnessPlansPoints.forEach(function (x) {
          var maxNumber = Math.max(action.answerPoints, x.points);
          var minNumber = Math.min(action.answerPoints, x.points);
          var difference = maxNumber - minNumber;
          var newPoints = state.fitnessPlans[x.name].points + difference;

          fitnessPlans[x.name] = _extends({}, state.fitnessPlans[x.name], {
            points: newPoints
          });
        });

        return _extends({}, state, {
          fitnessPlans: fitnessPlans
        });
      }
    default:
      return state;
  }
};

exports.default = reducer;

/***/ })

},[305]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9yZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidjAiLCJ2MSIsInYyIiwidjMiLCJ2NCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2hvd1BvcHVwIiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsInR5cGUiLCJpZCIsImdlbmVyYXRlIiwiaGlkZVBvcHVwIiwiaW5kZXgiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJlcnJvciIsImNvbnNvbGUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwic3RhdHVzIiwic3RhdGUiLCJkYXRhIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJtaWRkbGVXYXJlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJ1c2VyIiwiZGlzcGF0Y2giLCJpbml0IiwiRml0bmVzc0NvbnRhaW5lciIsInF1ZXJ5Iiwicm91dGVDb25maWciLCJDb21wb25lbnQiLCJGaXRuZXNzIiwicXVlc3Rpb24iLCJmaXRuZXNzIiwiZnJhZ21lbnRzIiwicmVmZXRjaFF1ZXJ5IiwiaGFuZGxlcnMiLCJhbnN3ZXJPbkNsaWNrIiwicmVsYXkiLCJyZWZldGNoIiwiUUFuZEEiLCJxdWVzdGlvblRleHQiLCJhbnN3ZXJzIiwicUFuZEEiLCJtYXAiLCJhbnN3ZXIiLCJhbnN3ZXJJZCIsImFuc3dlckNvbnRhaW5lciIsImFuc3dlclRleHQiLCJzdHJpbmciLCJhcnJheU9mIiwiaW5zdGFuY2VPZiIsInBvaW50cyIsImZ1bmMiLCJtdXRhdGlvbiIsInZhcmlhYmxlcyIsImlucHV0IiwidGhlbiIsInN1Ym1pdEFuc3dlciIsImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIiwiZml0bmVzc1BsYW5zUG9pbnRzIiwibmFtZSIsIngiLCJmaXRuZXNzUGxhbiIsImFkZFBvaW50cyIsImFuc3dlclBvaW50cyIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsIlRlcm1zQW5kQ29uZGl0aW9ucyIsIlByaXZhY3lQb2xpY3lDb250YWluZXIiLCJQcml2YWN5UG9saWN5IiwiSW1wcmludENvbnRhaW5lciIsIkltcHJpbnQiLCJpbXByaW50Q29udGVudCIsImNyZWF0ZVByb3BzIiwiZW5oYW5jZSIsIkVycm9yUGFnZUNvbnRhaW5lciIsInByb3BzIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJyZWdnZXN0IiwiQ29va2llTm90aWNlIiwiY29va2llTm90aWNlU2hvd24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsIlByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiRGlzcGxheVR5cGUiLCJnZXREaXNwbGF5VHlwZSIsIndpbmRvd1dpZHRoIiwiYnJlYWtwb2ludE1vYmlsZSIsInZhbHVlIiwiYnJlYWtwb2ludFRhYmxldCIsInVwZGF0ZURpc3BsYXlUeXBlIiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic2V0U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemVzIiwidW5pdCIsImJyZWFrcG9pbnREZXNrdG9wIiwiRm9vdGVyIiwiZm9vdGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicG9wdXBzIiwiUG9wdXBzIiwibGVuZ3RoIiwiUG9wdXAiLCJzZXRUaW1lb3V0IiwiZGVmYXVsdFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsImZpbHRlciIsIl8iLCJpIiwiZmV0Y2hRdWVyeSIsIm9wZXJhdGlvbiIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwianNvbiIsImVycm9ycyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwibmV0d29yayIsImNyZWF0ZSIsInNvdXJjZSIsImVudmlyb25tZW50IiwiZml0bmVzc1BsYW5zRGVmYXVsdCIsIl9Db25zdGFudHMiLCJmaXRuZXNzUGxhbnMiLCJmb3JFYWNoIiwiTmFtZSIsIm1heE51bWJlciIsIk1hdGgiLCJtYXgiLCJtaW5OdW1iZXIiLCJtaW4iLCJkaWZmZXJlbmNlIiwibmV3UG9pbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ2xCO0FBQUE7QUFBQSxNQUFLLFdBQVcsc0JBQU9DLFdBQXZCO0FBQ0dEO0FBREgsR0FEa0I7QUFBQSxDQUFwQjs7QUFNQUQsWUFBWUcsU0FBWixHQUF3QjtBQUN0QkYsWUFBVSxvQkFBVUcsSUFBVixDQUFlQztBQURILENBQXhCOztrQkFJZUwsVzs7Ozs7Ozs7QUNmZjs7Ozs7QUFLQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSxJQUFNSSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUUsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxPQUZWO0FBR0UsWUFBUSxvQkFIVjtBQUlFLG9CQUFnQjtBQUpsQixHQURPLENBQVQ7QUFB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LFVBQUM1RixDQUFELEVBQU87QUFDdkMsY0FBTThGLFlBQVlDLEtBQUtDLEdBQUwsQ0FBUzlCLE9BQU8vRCxZQUFoQixFQUE4QkgsRUFBRVYsTUFBaEMsQ0FBbEI7QUFDQSxjQUFNMkcsWUFBWUYsS0FBS0csR0FBTCxDQUFTaEMsT0FBTy9ELFlBQWhCLEVBQThCSCxFQUFFVixNQUFoQyxDQUFsQjtBQUNBLGNBQU02RyxhQUFhTCxZQUFZRyxTQUEvQjtBQUNBLGNBQU1HLFlBQVkzSixNQUFNa0osWUFBTixDQUFtQjNGLEVBQUVELElBQXJCLEVBQTJCVCxNQUEzQixHQUFvQzZHLFVBQXREOztBQUVBUix1QkFBYTNGLEVBQUVELElBQWYsaUJBQ0t0RCxNQUFNa0osWUFBTixDQUFtQjNGLEVBQUVELElBQXJCLENBREw7QUFFRVQsb0JBQVE4RztBQUZWO0FBSUQsU0FWRDs7QUFZQSw0QkFDSzNKLEtBREw7QUFFRWtKO0FBRkY7QUFJRDtBQUNEO0FBQVMsYUFBT2xKLEtBQVA7QUFyQlg7QUF1QkQsQ0F4QkQ7O2tCQTBCZXdILE8iLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZUNvbnRlbnQubGVzcyc7XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250ZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuUGFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDUwM2NhY2RkNGVjNTJlZWM2YjkzOWFjMmU0M2ZlYjU2XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDoge1xuICAgIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gIH0sXG58fTtcbmV4cG9ydCB0eXBlIHN1Ym1pdEFuc3dlck11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc3VibWl0QW5zd2VyOiA/e3xcbiAgICArYW5zd2VyOiB7fFxuICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgK2ZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgICAgICtwb2ludHM6IG51bWJlcixcbiAgICAgICAgK2ZpdG5lc3NQbGFuOiA/e3xcbiAgICAgICAgICArbmFtZTogc3RyaW5nLFxuICAgICAgICB8fSxcbiAgICAgIHx9PixcbiAgICB8fSxcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxuICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxuKSB7XG4gIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XG4gICAgYW5zd2VyIHtcbiAgICAgIHBvaW50c1xuICAgICAgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMge1xuICAgICAgICBwb2ludHNcbiAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3VibWl0QW5zd2VySW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgIFwibmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1Ym1pdEFuc3dlcklucHV0IVwiXG4gIH1cbl0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJwb2ludHNcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjMgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXFxuICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxcbikge1xcbiAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgYW5zd2VyIHtcXG4gICAgICBwb2ludHNcXG4gICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XFxuICAgICAgICBwb2ludHNcXG4gICAgICAgIGZpdG5lc3NQbGFuIHtcXG4gICAgICAgICAgbmFtZVxcbiAgICAgICAgICBpZFxcbiAgICAgICAgfVxcbiAgICAgICAgaWRcXG4gICAgICB9XFxuICAgICAgaWRcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHNcIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuQW5zd2VyUG9pbnRcIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjNcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB2NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHY0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzEwNWZmODQ4NTkzYjA3OThjNDdkMWE3ZjRmNTFlODUxJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvX19nZW5lcmF0ZWRfXy9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gPSB7fFxuICArcXVlc3Rpb25UZXh0OiBzdHJpbmcsXG4gICthbnN3ZXJzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2Fuc3dlcklkOiBudW1iZXIsXG4gICAgK2Fuc3dlclRleHQ6IHN0cmluZyxcbiAgICArcG9pbnRzOiBudW1iZXIsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXCIsXG4gIFwidHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJwb2ludHNcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYzBkNTA1MTc1ZDY1YmU5ZjQ3N2MzNzU0ZTFkZWJjNjInO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyX3F1ZXN0aW9uLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDg2NmRjZmViZTllZGJjYzZlNGUwNDAwN2MzOGZlNjUyXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVZhcmlhYmxlcyA9IHt8IHx9O1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlSZXNwb25zZSA9IHt8XG4gICtxdWVzdGlvbjogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZixcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcbiAgcXVlc3Rpb24ge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBwb2ludHNcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uIHtcXG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xcbiAgcXVlc3Rpb25UZXh0XFxuICBhbnN3ZXJzIHtcXG4gICAgYW5zd2VySWRcXG4gICAgYW5zd2VyVGV4dFxcbiAgICBwb2ludHNcXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwb2ludHNcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdlNGJjZjQxNjVmY2Q1NDAzZDI4NTQyNTI1NjZiZTUxOCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggMDdhNTVhMTljYmM3MTcxNzI1YjFlMDU5MDRmMDBmNDVcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJRdWVyeVZhcmlhYmxlcyA9IHt8IHx9O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArcXVlc3Rpb246ID97fFxuICAgICskZnJhZ21lbnRSZWZzOiBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYsXG4gIHx9LFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkge1xuICBxdWVzdGlvbiB7XG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcbiAgcXVlc3Rpb25UZXh0XG4gIGFuc3dlcnMge1xuICAgIGFuc3dlcklkXG4gICAgYW5zd2VyVGV4dFxuICAgIHBvaW50c1xuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeSB7XFxuICBxdWVzdGlvbiB7XFxuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcXG4gIHF1ZXN0aW9uVGV4dFxcbiAgYW5zd2VycyB7XFxuICAgIGFuc3dlcklkXFxuICAgIGFuc3dlclRleHRcXG4gICAgcG9pbnRzXFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJwb2ludHNcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2MFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICczNTQ5M2I2YjQyNDhjNWZmZWJlNTFjNmQxNGIwMzRiYSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsImltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIHBvcHVwXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kc1RvU2hvdz02MDAwXSAtIFRoZSBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gc2hvdyB0aGUgcG9wdXBcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dQb3B1cCA9ICh0ZXh0LCBtaWxsaXNlY29uZHNUb1Nob3cgPSA2MDAwKSA9PiAoe1xuICB0eXBlOiAnU0hPV19QT1BVUCcsXG4gIHRleHQsXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gIG1pbGxpc2Vjb25kc1RvU2hvdyxcbn0pO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHBvcHVwIHRvIGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVQb3B1cCA9IGluZGV4ID0+ICh7XG4gIHR5cGU6ICdISURFX1BPUFVQJyxcbiAgaW5kZXgsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNob3dHZW5lcmljRXJyb3JQb3B1cCA9IChlcnJvcikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gc2hvd1BvcHVwKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSB0cnkgcmVmcmVzaGluZyB0aGUgcGFnZS4nKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9hcHAubGVzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICdmb3VuZC1yZWxheSc7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0aW5nL3JvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKGVudmlyb25tZW50KTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIG1hdGNoQ29udGV4dD17eyBzdG9yZSB9fSByZXNvbHZlcj17cmVzb2x2ZXJ9IC8+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlQ29ubmVjdGVkUm91dGVyJztcbmltcG9ydCBjcmVhdGVSZW5kZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZVJlbmRlcic7XG5cbmNvbnN0IFJlbmRlckVycm9yID0gKHsgZXJyb3IsIHJvdXRlciB9KSA9PiB7XG4gIHJvdXRlci5yZXBsYWNlKHtcbiAgICBwYXRobmFtZTogYC9lcnJvci8ke2Vycm9yLnN0YXR1c31gLFxuICAgIHN0YXRlOiB7XG4gICAgICBlcnJvcjogZXJyb3IuZGF0YSxcbiAgICB9LFxuICB9KTtcbn07XG5cblJlbmRlckVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdGVkUm91dGVyKHtcbiAgcmVuZGVyOiBjcmVhdGVSZW5kZXIoe1xuICAgIHJlbmRlckVycm9yOiBSZW5kZXJFcnJvcixcbiAgfSksXG59KTtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHsgcmVkdWNlciBhcyBmb3JtIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgZm91bmQgZnJvbSAnZm91bmQvbGliL2ZvdW5kUmVkdWNlcic7XG5pbXBvcnQgRmFyY2VBY3Rpb25zIGZyb20gJ2ZhcmNlL2xpYi9BY3Rpb25zJztcbmltcG9ydCBCcm93c2VyUHJvdG9jb2wgZnJvbSAnZmFyY2UvbGliL0Jyb3dzZXJQcm90b2NvbCc7XG5pbXBvcnQgY3JlYXRlSGlzdG9yeUVuaGFuY2VyIGZyb20gJ2ZhcmNlL2xpYi9jcmVhdGVIaXN0b3J5RW5oYW5jZXInO1xuaW1wb3J0IHF1ZXJ5TWlkZGxld2FyZSBmcm9tICdmYXJjZS9saWIvcXVlcnlNaWRkbGV3YXJlJztcbmltcG9ydCBjcmVhdGVNYXRjaEVuaGFuY2VyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVNYXRjaEVuaGFuY2VyJztcbmltcG9ydCBNYXRjaGVyIGZyb20gJ2ZvdW5kL2xpYi9NYXRjaGVyJztcblxuaW1wb3J0IHJvdXRlQ29uZmlnIGZyb20gJy4uL3JvdXRpbmcvcm91dGVDb25maWcnO1xuaW1wb3J0IHBvcHVwIGZyb20gJy4uLy4uL3NoYXJlZC9wb3B1cC9yZWR1Y2VyJztcbmltcG9ydCB1c2VyIGZyb20gJy4uLy4uL3VzZXIvcmVkdWNlcic7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIHByb3RvY29sOiBuZXcgQnJvd3NlclByb3RvY29sKCksXG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyRW5oYW5jZXIgPSBjcmVhdGVNYXRjaEVuaGFuY2VyKFxuICBuZXcgTWF0Y2hlcihyb3V0ZUNvbmZpZyksXG4pO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4gIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCksXG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbik7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgZm91bmQsXG4gIGZvcm0sXG4gIHBvcHVwLFxuICB1c2VyLFxufSk7XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHt9LCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1ha2VSb3V0ZUNvbmZpZyBmcm9tICdmb3VuZC9saWIvbWFrZVJvdXRlQ29uZmlnJztcbmltcG9ydCBSb3V0ZSBmcm9tICdmb3VuZC9saWIvUm91dGUnO1xuXG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBmaXRuZXNzUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9maXRuZXNzL2ZpdG5lc3NDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgdGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGltcHJpbnRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGVycm9yUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcmltYXJ5TGF5b3V0Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLnByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZ30+XG4gICAgPFJvdXRlIHsuLi5maXRuZXNzUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJlcnJvci86c3RhdHVzXCIgey4uLmVycm9yUGFnZVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwidGVybXNBbmRDb25kaXRpb25zXCIgey4uLnRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwicHJpdmFjeVBvbGljeVwiIHsuLi5wcml2YWN5UG9saWN5Um91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJpbXByaW50XCIgey4uLmltcHJpbnRSb3V0ZUNvbmZpZ30gLz5cbiAgPC9Sb3V0ZT4sXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5cbmltcG9ydCBGaXRuZXNzIGZyb20gJy4vZml0bmVzcyc7XG5cbmNvbnN0IEZpdG5lc3NDb250YWluZXIgPSBGaXRuZXNzO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeSB7XG4gICAgcXVlc3Rpb24ge1xuICAgICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBGaXRuZXNzQ29udGFpbmVyLFxuICBxdWVyeSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3NDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUUFuZEEgZnJvbSAnLi4vcUFuZEEvcUFuZEFDb250YWluZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpdG5lc3MubGVzcyc7XG5cbmNvbnN0IEZpdG5lc3MgPSAoeyBxdWVzdGlvbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZml0bmVzc30+XG4gICAgPGRpdj5cbiAgICAgIDxRQW5kQSBxdWVzdGlvbj17cXVlc3Rpb259IC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRml0bmVzcy5wcm9wVHlwZXMgPSB7XG4gIHF1ZXN0aW9uOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgY29tcG9zZSwgZmxhdHRlblByb3AsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyByZWZldGNoQ29udGFpbmVyIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgcUFuZEEgZnJvbSAnLi9xQW5kQSc7XG5pbXBvcnQgc3VibWl0QW5zd2VyTXV0YXRpb24gZnJvbSAnLi9zdWJtaXRBbnN3ZXJNdXRhdGlvbic7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcbiAgICBxdWVzdGlvblRleHRcbiAgICBhbnN3ZXJzIHtcbiAgICAgIGFuc3dlcklkXG4gICAgICBhbnN3ZXJUZXh0XG4gICAgICBwb2ludHNcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHJlZmV0Y2hRdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcbiAgICBxdWVzdGlvbiB7XG4gICAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIGFuc3dlck9uQ2xpY2s6ICh7IGRpc3BhdGNoLCByZWxheSB9KSA9PiAoaWQpID0+IHtcbiAgICBzdWJtaXRBbnN3ZXJNdXRhdGlvbihpZCwgZGlzcGF0Y2gpO1xuICAgIHJlbGF5LnJlZmV0Y2goKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QoKSxcbiAgcmVmZXRjaENvbnRhaW5lcihmcmFnbWVudHMsIHJlZmV0Y2hRdWVyeSksXG4gIGZsYXR0ZW5Qcm9wKCdxdWVzdGlvbicpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuKShxQW5kQSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9xQW5kQS5sZXNzJztcblxuY29uc3QgUUFuZEEgPSAoeyBxdWVzdGlvblRleHQsIGFuc3dlcnMsIGFuc3dlck9uQ2xpY2sgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnFBbmRBfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ufT57cXVlc3Rpb25UZXh0fTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc30+XG4gICAgICB7YW5zd2Vycy5tYXAoYW5zd2VyID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5hbnN3ZXJJZH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbnN3ZXJPbkNsaWNrKGFuc3dlci5hbnN3ZXJJZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Fuc3dlci5hbnN3ZXJUZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cblFBbmRBLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFuc3dlcnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbnN3ZXJJZDogUHJvcFR5cGVzLmluc3RhbmNlT2YuaXNSZXF1aXJlZCxcbiAgICAgIHBvaW50czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2VyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXItLTJyMVFIXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmltcG9ydCB7IGFkZFBvaW50cyB9IGZyb20gJy4uL3VzZXIvYWN0aW9ucyc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXG4gICAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbiAgKSB7XG4gICAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGFuc3dlciB7XG4gICAgICAgIHBvaW50c1xuICAgICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgICAgcG9pbnRzXG4gICAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKGlkLCBkaXNwYXRjaCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKS50aGVuKCh7IHN1Ym1pdEFuc3dlciB9KSA9PiB7XG4gICAgY29uc3QgeyBmaXRuZXNzUGxhbkFuc3dlclBvaW50cywgcG9pbnRzIH0gPSBzdWJtaXRBbnN3ZXIuYW5zd2VyO1xuICAgIGNvbnN0IGZpdG5lc3NQbGFuc1BvaW50cyA9IGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzLm1hcCh4ID0+ICh7XG4gICAgICBuYW1lOiB4LmZpdG5lc3NQbGFuLm5hbWUsXG4gICAgICBwb2ludHM6IHgucG9pbnRzLFxuICAgIH0pKTtcblxuICAgIGRpc3BhdGNoKGFkZFBvaW50cyhmaXRuZXNzUGxhbnNQb2ludHMsIHBvaW50cykpO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL3N1Ym1pdEFuc3dlck11dGF0aW9uLmpzIiwiZXhwb3J0IGNvbnN0IGFkZFBvaW50cyA9IChmaXRuZXNzUGxhbnNQb2ludHMsIGFuc3dlclBvaW50cykgPT4gKHtcbiAgdHlwZTogJ0FERF9QT0lOVFMnLFxuICBmaXRuZXNzUGxhbnNQb2ludHMsXG4gIGFuc3dlclBvaW50cyxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmaXRuZXNzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc19fZml0bmVzcy0tUmk3N2RcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnMgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gcmVnZ2VzdC5cbiAgICAgICZxdW90O0NvbnRlbnQmcXVvdDsgbWVhbnMgdGV4dCwgaW1hZ2VzLCBwaG90b3MsIGF1ZGlvLCB2aWRlbywgbG9jYXRpb24gZGF0YSxcbiAgICAgIGFuZCBhbGwgb3RoZXIgZm9ybXMgb2YgZGF0YSBvciBjb21tdW5pY2F0aW9uLlxuICAgICAgJnF1b3Q7WW91ciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLCBvciBpblxuICAgICAgY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLCBzdWNoIGFzIHJhdGluZ3MsIHJldmlld3MsIGNvbXBsaW1lbnRzLCBpbnZpdGF0aW9ucyxcbiAgICAgIGNoZWNrLWlucywgbWVzc2FnZXMsIGFuZCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwdWJsaWNseSBkaXNwbGF5IG9yIGRpc3BsYXllZCBpblxuICAgICAgeW91ciBhY2NvdW50IHByb2ZpbGUuXG4gICAgICAmcXVvdDtVc2VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHVzZXJzIHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCxcbiAgICAgIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS4gJnF1b3Q7cmVnZ2VzdCBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdFxuICAgICAgd2UgY3JlYXRlIGFuZCBtYWtlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtUaGlyZCBQYXJ0eSBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCBvcmlnaW5hdGVzIGZyb20gcGFydGllcyBvdGhlclxuICAgICAgdGhhbiByZWdnZXN0IG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCByZWdnZXN0IENvbnRlbnQuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRlcm1zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgYWNjZXNzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieSB0aGVzZSB3ZWJzaXRlIFRlcm1zXG4gICAgICAgICAgYW5kIENvbmRpdGlvbnMgb2YgVXNlLCBhbGwgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucywgYW5kIGFncmVlIHRoYXQgeW91XG4gICAgICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBjb21wbGlhbmNlIHdpdGggYW55IGFwcGxpY2FibGUgbG9jYWwgbGF3cy5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggYW55IG9mIHRoZXNlIHRlcm1zLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyBvclxuICAgICAgICAgIGFjY2Vzc2luZyB0aGlzIHNpdGUuIFRoZSBtYXRlcmlhbHMgY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBhcmUgcHJvdGVjdGVkXG4gICAgICAgICAgYnkgYXBwbGljYWJsZSBjb3B5cmlnaHQgYW5kIHRyYWRlIG1hcmsgbGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgb24gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBhcmUgcHJvdmlkZWQgJnF1b3Q7YXMgc2hvd24mcXVvdDsuXG4gICAgICAgICAgcmVnZ2VzdCBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICBsaWtlbHkgcmVzdWx0cywgb3IgcmVsaWFiaWxpdHkgb2YgdGhlIHVzZSBvZiB0aGUgbWF0ZXJpYWxzIG9uIGl0cyBpbnRlcm5ldFxuICAgICAgICAgIHdlYnNpdGUgb3Igb3RoZXJ3aXNlIHJlbGF0aW5nIHRvIHN1Y2ggbWF0ZXJpYWxzIG9yIG9uIGFueSBzaXRlcyBsaW5rZWQgdG8gdGhpcyBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGltaXRhdGlvbnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiBubyBldmVudCBzaGFsbCByZWdnZXN0IG9yIGl0cyBzdXBwbGllcnMgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyAoaW5jbHVkaW5nLCB3aXRob3V0XG4gICAgICAgICAgbGltaXRhdGlvbiwgZGFtYWdlcyBmb3IgbG9zcyBvZiBkYXRhIG9yIHByb2ZpdCwgb3IgZHVlIHRvIGJ1c2luZXNzIGludGVycnVwdGlvbilcbiAgICAgICAgICBhcmlzaW5nIG91dCBvZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlIG1hdGVyaWFscyBvbiBvdXIgaW50ZXJuZXQgc2l0ZSBvclxuICAgICAgICAgIG9mZmVyZWQgc2VydmljZXMsIGV2ZW4gaWYgd2Ugb3IgYW4gYXV0aG9yaXplZCByZXByZXNlbnRhdGl2ZSBoYXMgYmVlbiBub3RpZmllZFxuICAgICAgICAgIG9yYWxseSBvciBpbiB3cml0aW5nIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZS4gQmVjYXVzZSBzb21lIGp1cmlzZGljdGlvbnNcbiAgICAgICAgICBkbyBub3QgYWxsb3cgbGltaXRhdGlvbnMgb24gaW1wbGllZCB3YXJyYW50aWVzLCBvciBsaW1pdGF0aW9ucyBvZiBsaWFiaWxpdHkgZm9yXG4gICAgICAgICAgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIHRoZXNlIGxpbWl0YXRpb25zIG1heSBub3QgYXBwbHkgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+UmV2aXNpb25zIGFuZCBFcnJvcnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIGFwcGVhcmluZyBvbiBvdXIgd2Vic2l0ZSBjb3VsZCBpbmNsdWRlIHRlY2huaWNhbCwgdHlwb2dyYXBoaWNhbCxcbiAgICAgICAgICBvciBwaG90b2dyYXBoaWMgZXJyb3JzLiByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgcmVnZ2VzdCBoYXMgbm90IHJldmlld2VkIGFsbCBvZiB0aGUgc2l0ZXMgbGlua2VkIHRvIGl0cyBpbnRlcm5ldCB3ZWJzaXRlXG4gICAgICAgICAgYW5kIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRzIG9mIGFueSBzdWNoIGxpbmtlZCBzaXRlLlxuICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgYW55IGxpbmsgZG9lcyBub3QgaW1wbHkgZW5kb3JzZW1lbnQgYnkgdXMgb2YgdGhlIHNpdGUuXG4gICAgICAgICAgVXNlIG9mIGFueSBzdWNoIGxpbmtlZCB3ZWJzaXRlIGlzIGF0IHRoZSB1c2VyJnF1b3Q7cyBvd24gcmlzay5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvdmVybmluZyBMYXc8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbnkgY2xhaW0gcmVsYXRpbmcgdG8gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3c1xuICAgICAgICAgIG9mIHRoZSBjb3VudHJ5IG9mIG5vdGUgd2l0aG91dCByZWdhcmQgdG8gaXRzIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RW5nbGlzaCBMYW5ndWFnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGJldHdlZW4gdGhlc2UgVGVybXMgYW5kIGEgZm9yZWlnbiBsYW5ndWFnZSB2ZXJzaW9uXG4gICAgICAgICAgb2Ygb3VyIFRlcm1zIG9mIFVzZSwgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyBnb3Zlcm5zLlxuICAgICAgICAgIEFsbCBkaXNwdXRlcywgY2xhaW1zIGFuZCBjYXVzZXMgb2YgYWN0aW9uIChhbmQgcmVsYXRlZCBwcm9jZWVkaW5ncykgd2lsbCBiZVxuICAgICAgICAgIGNvbW11bmljYXRlZCBpbiBFbmdsaXNoLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q29weXJpZ2h0IHBvbGljeSwgbm90aWNlIGFuZCBjbGFpbSBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsbCBtYXRlcmlhbHMgb24gdGhpcyBzaXRlLCB3aGV0aGVyIHNlcGFyYXRlIG9yIGNvbXBpbGVkLCBpbmNsdWRpbmcsXG4gICAgICAgICAgYnV0IG5vdCBsaW1pdGVkIHRvLCB0ZXh0LCBncmFwaGljcywgYXVkaW8gY2xpcHMsIGxvZ29zLCBidXR0b25zLCBpbWFnZXMsXG4gICAgICAgICAgZGlnaXRhbCBkb3dubG9hZHMsIGRhdGEgY29tcGlsYXRpb25zLCBzb2Z0d2FyZSwgaWNvbnMsIGh0bWwgY29kZSBhbmQgeG1sIGNvZGUsXG4gICAgICAgICAgYXMgd2VsbCBhcyBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgZHJlc3MsIGFuZCBvdGhlciByaWdodHNcbiAgICAgICAgICB0aGVyZWluLCBhcmUgb3duZWQgb3IgbGljZW5zZWQgYnkgcmVnZ2VzdCBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlQ29udGVudFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcGFnZUNvbnRlbnRfX3BhZ2VDb250ZW50LS13cHV0V1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJpbXBvcnQgSW1wcmludCBmcm9tICcuL2ltcHJpbnQnO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltcHJpbnQubGVzcyc7XG5cbmNvbnN0IEltcHJpbnQgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltcHJpbnRDb250ZW50fT5cbiAgICAgIDxoMT5JbXByaW50PC9oMT5cbiAgICAgIDxkaXY+Q29tcGFueSBOYW1lOiBWQVNUIE5FVFdPUksgTFREPC9kaXY+XG4gICAgICA8ZGl2Pk1hbmFnaW5nIERpcmVjdG9yOiBNYXJ0aW4gRGF3c29uPC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3M6IDI2IENhbGRlclZpZXcsIFJhc3RyaWNrLCBCcmlnaG91c2UsIEhENjNEUSBVbml0ZWQgS2luZ2RvbTwvZGl2PlxuICAgICAgPGRpdj5UZWxlcGhvbmU6ICsoNDQpNzQ3MzU5MTA5NzwvZGl2PlxuICAgICAgPGRpdj5FbWFpbCBhZGRyZXNzOiBpbmZvQHJlZ2dlc3QuY29tPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWZvb3Rlci1pbXByaW50X19pbXByaW50Q29udGVudC0tMTVyTE1cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzLCBmbGF0dGVuUHJvcCB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9lcnJvclBhZ2UnO1xuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4ge1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzKGNyZWF0ZVByb3BzKSxcbik7XG5cbmNvbnN0IEVycm9yUGFnZUNvbnRhaW5lciA9IGVuaGFuY2UoRXJyb3JQYWdlKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIChcbiAgICA8RXJyb3JQYWdlQ29udGFpbmVyXG4gICAgICBzdGF0dXM9e3BhcnNlSW50KHByb3BzLnBhcmFtcy5zdGF0dXMsIDEwKX1cbiAgICAgIGVycm9yPXtwcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2UubGVzcyc7XG5cbmNvbnN0IEVycm9yUGFnZSA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0+XG4gICAgPGgxPkVycm9yIHtzdGF0dXN9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICAgV2UgaGF2ZSBiZWVuIG5vdGlmaWVkIG9mIHRoZSBlcnJvciDCr1xcXyjjg4QpXy/Cry4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQuJyxcbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcXVvdGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclBhZ2VcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JQYWdlLS0xYVMtelwiLFwiZXJyb3JcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3ItLTYyS1pDXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpbWFyeUxheW91dCBmcm9tICcuL3ByaW1hcnlMYXlvdXQnO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJpbWFyeUxheW91dC5sZXNzJztcbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi4vLi4vZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lcic7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRGlzcGxheVR5cGUgZnJvbSAnLi4vLi4vc2hhcmVkL2Rpc3BsYXlUeXBlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgUG9wdXBzIGZyb20gJy4uLy4uL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxEaXNwbGF5VHlwZT5cbiAgICB7KGRpc3BsYXlUeXBlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5VHlwZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzTW9iaWxlICYmICdtb2JpbGUnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc1RhYmxldCAmJiAndGFibGV0JyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNEZXNrdG9wICYmICdkZXNrdG9wJyxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhkaXNwbGF5VHlwZUNsYXNzTmFtZSwgc3R5bGVzLnByaW1hcnlMYXlvdXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2dlc3R9PnJlZ2dlc3Q8L0xpbms+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8UG9wdXBzIC8+XG4gICAgICAgICAgPENvb2tpZU5vdGljZSAvPlxuICAgICAgICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuICAgICAgKTtcbiAgICB9fVxuICA8L0Rpc3BsYXlUeXBlPlxuKTtcblxuUHJpbWFyeUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuUHJpbWFyeUxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dC0tM0ZWamJcIixcIndyYXBcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3dyYXAtLTNPdjM4XCIsXCJtYWluXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19tYWluLS0xRzZhMVwiLFwicmVnZ2VzdFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcmVnZ2VzdC0tUklIU0NcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDczMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4vY29va2llTm90aWNlJztcbmltcG9ydCB7IHNob3dQb3B1cCB9IGZyb20gJy4uL3NoYXJlZC9wb3B1cC9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHNob3dQb3B1cCB9KShDb29raWVOb3RpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENvb2tpZU5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvb2tpZU5vdGljZVNob3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJyk7XG5cbiAgICBpZiAoIWNvb2tpZU5vdGljZVNob3duKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dQb3B1cCgnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UsIGJ5IGNvbnRpbnVpbmcgdG8gdXNlIHRoZSBzaXRlIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3VyIHVzZSBvZiBjb29raWVzLicsIDE1MDAwKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJywgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5Db29raWVOb3RpY2UucHJvcFR5cGVzID0ge1xuICBzaG93UG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWVOb3RpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ2ZvdW5kJztcblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgICAvLyB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvZXJyb3IvNTAwJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbmNsYXNzIERpc3BsYXlUeXBlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzcGxheVR5cGU6ICdkZXNrdG9wJyxcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICB9XG5cbiAgZ2V0RGlzcGxheVR5cGUgPSAod2luZG93V2lkdGgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPCBzaXplcy5icmVha3BvaW50TW9iaWxlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gJ21vYmlsZSc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludFRhYmxldC52YWx1ZSkge1xuICAgICAgcmV0dXJuICd0YWJsZXQnO1xuICAgIH1cblxuICAgIHJldHVybiAnZGVza3RvcCc7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB0aGlzLmdldERpc3BsYXlUeXBlKHdpbmRvd1dpZHRoKTtcblxuICAgIGlmIChkaXNwbGF5VHlwZSAhPT0gdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5VHlwZSA9IHtcbiAgICAgIGlzTW9iaWxlOiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAnbW9iaWxlJyxcbiAgICAgIGlzVGFibGV0OiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAndGFibGV0JyxcbiAgICAgIGlzRGVza3RvcDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ2Rlc2t0b3AnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbihkaXNwbGF5VHlwZSk7XG4gIH1cbn1cblxuRGlzcGxheVR5cGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJjb25zdCBzaXplcyA9IHtcbiAgYnJlYWtwb2ludE1vYmlsZTogeyB2YWx1ZTogNzY4LCB1bml0OiAncHgnIH0sXG4gIGJyZWFrcG9pbnRUYWJsZXQ6IHsgdmFsdWU6IDk5MiwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50RGVza3RvcDogeyB2YWx1ZTogMTIwMCwgdW5pdDogJ3B4JyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2l6ZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9zaXplcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLmxlc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICA8TGluayB0bz1cIi90ZXJtc0FuZENvbmRpdGlvbnNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvTGluaz5cbiAgICA8TGluayB0bz1cIi9wcml2YWN5UG9saWN5XCI+cHJpdmFjeSBwb2xpY3k8L0xpbms+XG4gICAgPExpbmsgdG89XCIvaW1wcmludFwiPmltcHJpbnQ8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJDb21wb25lbnRzLWZvb3Rlci1mb290ZXJfX2Zvb3Rlci0tM1MxbjRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gNzQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQb3B1cHMgZnJvbSAnLi9wb3B1cHMnO1xuaW1wb3J0IHsgaGlkZVBvcHVwIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcG9wdXAgfSkgPT4gKHtcbiAgcG9wdXBzOiBwb3B1cC5wb3B1cHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgaGlkZVBvcHVwLFxufSkoUG9wdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXBzLmxlc3MnO1xuXG5jb25zdCBQb3B1cHMgPSAoeyBwb3B1cHMsIGhpZGVQb3B1cCB9KSA9PiAoXG4gIHBvcHVwcy5sZW5ndGggPiAwID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBzfT5cbiAgICAgIHtwb3B1cHMubWFwKChwb3B1cCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAga2V5PXtwb3B1cC5pZH1cbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgdGV4dD17cG9wdXAudGV4dH1cbiAgICAgICAgICBoaWRlUG9wdXA9e2hpZGVQb3B1cH1cbiAgICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c9e3BvcHVwLm1pbGxpc2Vjb25kc1RvU2hvd31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PilcbiAgICA6IG51bGxcbik7XG5cblBvcHVwcy5wcm9wVHlwZXMgPSB7XG4gIGhpZGVQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcG9wdXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXAubGVzcyc7XG5cbmNsYXNzIFBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmhpZGVQb3B1cCh0aGlzLnByb3BzLmluZGV4KSwgdGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cF9fcG9wdXAtLTI0T1lNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwc1wiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBzX19wb3B1cHMtLTFtMUtFXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHBvcHVwczogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBbLi4uc3RhdGUucG9wdXBzLCB7XG4gICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c6IGFjdGlvbi5taWxsaXNlY29uZHNUb1Nob3csXG4gICAgICB9XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ0hJREVfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBzdGF0ZS5wb3B1cHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBhY3Rpb24uaW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNvbnN0IGZpdG5lc3NQbGFuc0RlZmF1bHQgPSB7fTtcblxud2luZG93Ll9Db25zdGFudHMuZml0bmVzc1BsYW5zLmZvckVhY2goKHgpID0+IHtcbiAgZml0bmVzc1BsYW5zRGVmYXVsdFt4Lk5hbWVdID0ge1xuICAgIHBvaW50czogMCxcbiAgfTtcbn0pO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGZpdG5lc3NQbGFuczogZml0bmVzc1BsYW5zRGVmYXVsdCxcbn07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUE9JTlRTJzoge2RlYnVnZ2VyXG4gICAgICBjb25zdCBmaXRuZXNzUGxhbnMgPSB7fTtcblxuICAgICAgYWN0aW9uLmZpdG5lc3NQbGFuc1BvaW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IG1heE51bWJlciA9IE1hdGgubWF4KGFjdGlvbi5hbnN3ZXJQb2ludHMsIHgucG9pbnRzKTtcbiAgICAgICAgY29uc3QgbWluTnVtYmVyID0gTWF0aC5taW4oYWN0aW9uLmFuc3dlclBvaW50cywgeC5wb2ludHMpO1xuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4TnVtYmVyIC0gbWluTnVtYmVyO1xuICAgICAgICBjb25zdCBuZXdQb2ludHMgPSBzdGF0ZS5maXRuZXNzUGxhbnNbeC5uYW1lXS5wb2ludHMgKyBkaWZmZXJlbmNlO1xuXG4gICAgICAgIGZpdG5lc3NQbGFuc1t4Lm5hbWVdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpdG5lc3NQbGFuc1t4Lm5hbWVdLFxuICAgICAgICAgIHBvaW50czogbmV3UG9pbnRzLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaXRuZXNzUGxhbnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvcmVkdWNlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=
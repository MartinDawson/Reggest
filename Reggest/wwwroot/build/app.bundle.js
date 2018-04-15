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
 * @relayHash 624c9d66b8ced03de2b9d0b0e3e9f192
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
      +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
        +points: ?number,
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
    "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      fitnessPlanAnswerPoints {\n        points\n        fitnessPlan {\n          name\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n",
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
              "selections": [v3, v4]
            }, v4]
          }, v4]
        }]
      }]
    }
  };
}();
node /*: any*/.hash = '2fc002e830e41d36e06284d610de10b6';
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
  +questionText: ?string,
  +answers: ?$ReadOnlyArray<?{|
    +answerId: number,
    +answerText: ?string,
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
    }]
  }]
};
node /*: any*/.hash = 'c08fdc305d8731938647f226ed0b0105';
module.exports = node;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 81ccf23a6732cca385e3757cb1c3e7cc
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
    "text": "query qAndAContainerRefetchQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
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
 * @relayHash f49cab12834a30d571e551bc52514ea5
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
    "text": "query fitnessContainerQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
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
  popup: _reducer2.default
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

    if (node.hash && node.hash !== 'c08fdc305d8731938647f226ed0b0105') {
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

  if (node.hash && node.hash !== '2fc002e830e41d36e06284d610de10b6') {
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

  return (0, _relayCompose.createMutation)(mutation, variables).then(function (submitAnswer) {
    debugger;
    var fitnessPlanAnswerPoints = submitAnswer.answer.fitnessPlanAnswerPoint;

    dispatch((0, _actions.addPoints)(submitAnswer.answer.fitnessPlanAnswerPoint));
  });
};

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addPoints = exports.addPoints = function addPoints(points) {
  return {
    type: 'ADD_POINTS',
    points: points
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

/***/ })

},[305]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidjAiLCJ2MSIsInYyIiwidjMiLCJ2NCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2hvd1BvcHVwIiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsInR5cGUiLCJpZCIsImdlbmVyYXRlIiwiaGlkZVBvcHVwIiwiaW5kZXgiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJlcnJvciIsImNvbnNvbGUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwic3RhdHVzIiwic3RhdGUiLCJkYXRhIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJtaWRkbGVXYXJlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJkaXNwYXRjaCIsImluaXQiLCJGaXRuZXNzQ29udGFpbmVyIiwicXVlcnkiLCJyb3V0ZUNvbmZpZyIsIkNvbXBvbmVudCIsIkZpdG5lc3MiLCJxdWVzdGlvbiIsImZpdG5lc3MiLCJmcmFnbWVudHMiLCJyZWZldGNoUXVlcnkiLCJoYW5kbGVycyIsImFuc3dlck9uQ2xpY2siLCJyZWxheSIsInJlZmV0Y2giLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsIm1hcCIsImFuc3dlciIsImFuc3dlcklkIiwiYW5zd2VyQ29udGFpbmVyIiwiYW5zd2VyVGV4dCIsInN0cmluZyIsImFycmF5T2YiLCJpbnN0YW5jZU9mIiwiZnVuYyIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aGVuIiwic3VibWl0QW5zd2VyIiwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMiLCJmaXRuZXNzUGxhbkFuc3dlclBvaW50IiwiYWRkUG9pbnRzIiwicG9pbnRzIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJwYXJzZUludCIsInBhcmFtcyIsImxvY2F0aW9uIiwiRXJyb3JQYWdlIiwiZXJyb3JQYWdlIiwiZGVmYXVsdFByb3BzIiwicXVvdGF0aW9uIiwiUHJpbWFyeUxheW91dENvbnRhaW5lciIsIlByaW1hcnlMYXlvdXQiLCJkaXNwbGF5VHlwZSIsImRpc3BsYXlUeXBlQ2xhc3NOYW1lIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsInByaW1hcnlMYXlvdXQiLCJ3cmFwIiwibWFpbiIsInJlZ2dlc3QiLCJDb29raWVOb3RpY2UiLCJjb29raWVOb3RpY2VTaG93biIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJjbGFzc05hbWUiLCJEaXNwbGF5VHlwZSIsImdldERpc3BsYXlUeXBlIiwid2luZG93V2lkdGgiLCJicmVha3BvaW50TW9iaWxlIiwidmFsdWUiLCJicmVha3BvaW50VGFibGV0IiwidXBkYXRlRGlzcGxheVR5cGUiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZXMiLCJ1bml0IiwiYnJlYWtwb2ludERlc2t0b3AiLCJGb290ZXIiLCJmb290ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwb3B1cHMiLCJQb3B1cHMiLCJsZW5ndGgiLCJQb3B1cCIsInNldFRpbWVvdXQiLCJkZWZhdWx0U3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZmlsdGVyIiwiXyIsImkiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7OztBQ2ZmOzs7OztBQUtBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxJQUFNSSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUUsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxPQUZWO0FBR0UsWUFBUSxvQkFIVjtBQUlFLG9CQUFnQjtBQUpsQixHQURPLENBQVQ7QUFBQSxNQVFBQyxLQUFLLENBQ0g7QUFDRSxZQUFRLFVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxvQkFBZ0IsT0FIbEI7QUFJRSxZQUFRO0FBSlYsR0FERyxDQVJMO0FBQUEsTUFnQkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLFFBSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBaEJMO0FBQUEsTUF1QkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7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QWdCO0FBRlQsS0FITztBQU9oQjdCLFVBQU04QixLQUFLQyxTQUFMLENBQWU7QUFDbkI1RyxhQUFPcUcsVUFBVTlJLElBREU7QUFFbkJtRTtBQUZtQixLQUFmO0FBUFUsR0FBbEIsRUFXR0UsSUFYSCxDQVdRO0FBQUEsV0FBWWlGLFNBQVNDLElBQVQsRUFBWjtBQUFBLEdBWFIsRUFZR2xGLElBWkgsQ0FZUSxVQUFDa0YsSUFBRCxFQUFVO0FBQ2Q7QUFDQSxRQUFJQSxLQUFLQyxNQUFULEVBQWlCO0FBQ2YsYUFBT0MsUUFBUUMsTUFBUixDQUFlSCxLQUFLQyxNQUFwQixDQUFQO0FBQ0Q7O0FBRUQsV0FBT0MsUUFBUUUsT0FBUixDQUFnQkosSUFBaEIsQ0FBUDtBQUNELEdBbkJILENBRGlCO0FBQUEsQ0FBbkI7O0FBc0JBLElBQU1LLFVBQVUsc0JBQVFDLE1BQVIsQ0FBZWhCLFVBQWYsQ0FBaEI7QUFDQSxJQUFNaUIsU0FBUyxnQ0FBZjtBQUNBLElBQU0vSSxRQUFRLHdCQUFVK0ksTUFBVixDQUFkO0FBQ0EsSUFBTUMsY0FBYyw4QkFBZ0I7QUFDbENILGtCQURrQztBQUVsQzdJO0FBRmtDLENBQWhCLENBQXBCOztBQUtBLGlDQUFjZ0osV0FBZDs7a0JBRWVBLFc7Ozs7Ozs7QUN4Q2YseUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZUNvbnRlbnQubGVzcyc7XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250ZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuUGFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDYyNGM5ZDY2YjhjZWQwM2RlMmI5ZDBiMGUzZTlmMTkyXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDoge1xuICAgIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gIH0sXG58fTtcbmV4cG9ydCB0eXBlIHN1Ym1pdEFuc3dlck11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc3VibWl0QW5zd2VyOiA/e3xcbiAgICArYW5zd2VyOiB7fFxuICAgICAgK2ZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgICAgICtwb2ludHM6ID9udW1iZXIsXG4gICAgICAgICtmaXRuZXNzUGxhbjogP3t8XG4gICAgICAgICAgK25hbWU6IHN0cmluZyxcbiAgICAgICAgfH0sXG4gICAgICB8fT4sXG4gICAgfH0sXG4gIHx9LFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcbiAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbikge1xuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGFuc3dlciB7XG4gICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgIHBvaW50c1xuICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJtaXRBbnN3ZXJJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3VibWl0QW5zd2VySW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcInBvaW50c1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnY0ID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcXG4gICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXFxuKSB7XFxuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBhbnN3ZXIge1xcbiAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcXG4gICAgICAgIHBvaW50c1xcbiAgICAgICAgZml0bmVzc1BsYW4ge1xcbiAgICAgICAgICBuYW1lXFxuICAgICAgICAgIGlkXFxuICAgICAgICB9XFxuICAgICAgICBpZFxcbiAgICAgIH1cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhbkFuc3dlclBvaW50XCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB2NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHY0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzJmYzAwMmU4MzBlNDFkMzZlMDYyODRkNjEwZGUxMGI2Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvX19nZW5lcmF0ZWRfXy9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gPSB7fFxuICArcXVlc3Rpb25UZXh0OiA/c3RyaW5nLFxuICArYW5zd2VyczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICthbnN3ZXJJZDogbnVtYmVyLFxuICAgICthbnN3ZXJUZXh0OiA/c3RyaW5nLFxuICB8fT4sXG4gICskcmVmVHlwZTogcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lcl9xdWVzdGlvblwiLFxuICBcInR5cGVcIjogXCJRdWVzdGlvblwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25UZXh0XCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwiYW5zd2Vyc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcklkXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclRleHRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYzA4ZmRjMzA1ZDg3MzE5Mzg2NDdmMjI2ZWQwYjAxMDUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyX3F1ZXN0aW9uLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDgxY2NmMjNhNjczMmNjYTM4NWUzNzU3Y2IxYzNlN2NjXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVZhcmlhYmxlcyA9IHt8IHx9O1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlSZXNwb25zZSA9IHt8XG4gICtxdWVzdGlvbjogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZixcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcbiAgcXVlc3Rpb24ge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uIHtcXG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xcbiAgcXVlc3Rpb25UZXh0XFxuICBhbnN3ZXJzIHtcXG4gICAgYW5zd2VySWRcXG4gICAgYW5zd2VyVGV4dFxcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjBcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZTRiY2Y0MTY1ZmNkNTQwM2QyODU0MjUyNTY2YmU1MTgnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5LmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGY0OWNhYjEyODM0YTMwZDU3MWU1NTFiYzUyNTE0ZWE1XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fCB8fTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK3F1ZXN0aW9uOiA/e3xcbiAgICArJGZyYWdtZW50UmVmczogcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmLFxuICB8fSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5IHtcbiAgcXVlc3Rpb24ge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkge1xcbiAgcXVlc3Rpb24ge1xcbiAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XFxuICBxdWVzdGlvblRleHRcXG4gIGFuc3dlcnMge1xcbiAgICBhbnN3ZXJJZFxcbiAgICBhbnN3ZXJUZXh0XFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYwXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzM1NDkzYjZiNDI0OGM1ZmZlYmU1MWM2ZDE0YjAzNGJhJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgcG9wdXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzVG9TaG93PTYwMDBdIC0gVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSBwb3B1cFxuICovXG5leHBvcnQgY29uc3Qgc2hvd1BvcHVwID0gKHRleHQsIG1pbGxpc2Vjb25kc1RvU2hvdyA9IDYwMDApID0+ICh7XG4gIHR5cGU6ICdTSE9XX1BPUFVQJyxcbiAgdGV4dCxcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgbWlsbGlzZWNvbmRzVG9TaG93LFxufSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcG9wdXAgdG8gaGlkZVxuICovXG5leHBvcnQgY29uc3QgaGlkZVBvcHVwID0gaW5kZXggPT4gKHtcbiAgdHlwZTogJ0hJREVfUE9QVVAnLFxuICBpbmRleCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0dlbmVyaWNFcnJvclBvcHVwID0gKGVycm9yKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiBzaG93UG9wdXAoJ0FuIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHRyeSByZWZyZXNoaW5nIHRoZSBwYWdlLicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBwcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG59KTtcblxuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihcbiAgbmV3IE1hdGNoZXIocm91dGVDb25maWcpLFxuKTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLFxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxuICBmb3JtLFxuICBwb3B1cCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYWtlUm91dGVDb25maWcgZnJvbSAnZm91bmQvbGliL21ha2VSb3V0ZUNvbmZpZyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnZm91bmQvbGliL1JvdXRlJztcblxuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZml0bmVzc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZml0bmVzcy9maXRuZXNzQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBlcnJvclBhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Um91dGVDb25maWd9PlxuICAgIDxSb3V0ZSB7Li4uZml0bmVzc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiZXJyb3IvOnN0YXR1c1wiIHsuLi5lcnJvclBhZ2VSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInRlcm1zQW5kQ29uZGl0aW9uc1wiIHsuLi50ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInByaXZhY3lQb2xpY3lcIiB7Li4ucHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiaW1wcmludFwiIHsuLi5pbXByaW50Um91dGVDb25maWd9IC8+XG4gIDwvUm91dGU+LFxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuXG5pbXBvcnQgRml0bmVzcyBmcm9tICcuL2ZpdG5lc3MnO1xuXG5jb25zdCBGaXRuZXNzQ29udGFpbmVyID0gRml0bmVzcztcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkge1xuICAgIHF1ZXN0aW9uIHtcbiAgICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogRml0bmVzc0NvbnRhaW5lcixcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFFBbmRBIGZyb20gJy4uL3FBbmRBL3FBbmRBQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuXG5jb25zdCBGaXRuZXNzID0gKHsgcXVlc3Rpb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICA8UUFuZEEgcXVlc3Rpb249e3F1ZXN0aW9ufSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkZpdG5lc3MucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgcmVmZXRjaENvbnRhaW5lciB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHFBbmRBIGZyb20gJy4vcUFuZEEnO1xuaW1wb3J0IHN1Ym1pdEFuc3dlck11dGF0aW9uIGZyb20gJy4vc3VibWl0QW5zd2VyTXV0YXRpb24nO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gICAgcXVlc3Rpb25UZXh0XG4gICAgYW5zd2VycyB7XG4gICAgICBhbnN3ZXJJZFxuICAgICAgYW5zd2VyVGV4dFxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgcmVmZXRjaFF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkge1xuICAgIHF1ZXN0aW9uIHtcbiAgICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgYW5zd2VyT25DbGljazogKHsgZGlzcGF0Y2gsIHJlbGF5IH0pID0+IChpZCkgPT4ge1xuICAgIHN1Ym1pdEFuc3dlck11dGF0aW9uKGlkLCBkaXNwYXRjaCk7XG4gICAgcmVsYXkucmVmZXRjaCgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgY29ubmVjdCgpLFxuICByZWZldGNoQ29udGFpbmVyKGZyYWdtZW50cywgcmVmZXRjaFF1ZXJ5KSxcbiAgZmxhdHRlblByb3AoJ3F1ZXN0aW9uJyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKHFBbmRBKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3FBbmRBLmxlc3MnO1xuXG5jb25zdCBRQW5kQSA9ICh7IHF1ZXN0aW9uVGV4dCwgYW5zd2VycywgYW5zd2VyT25DbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucUFuZEF9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PntxdWVzdGlvblRleHR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmFuc3dlcklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlck9uQ2xpY2soYW5zd2VyLmFuc3dlcklkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUUFuZEEucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFuc3dlcklkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZi5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2VyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXItLTJyMVFIXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmltcG9ydCB7IGFkZFBvaW50cyB9IGZyb20gJy4uL3VzZXIvYWN0aW9ucyc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXG4gICAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbiAgKSB7XG4gICAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGFuc3dlciB7XG4gICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcbiAgICAgICAgICBwb2ludHNcbiAgICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoaWQsIGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApLnRoZW4oKHN1Ym1pdEFuc3dlcikgPT4ge2RlYnVnZ2VyXG4gICAgY29uc3QgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMgPSBzdWJtaXRBbnN3ZXIuYW5zd2VyLmZpdG5lc3NQbGFuQW5zd2VyUG9pbnQ7XG5cbiAgICBkaXNwYXRjaChhZGRQb2ludHMoc3VibWl0QW5zd2VyLmFuc3dlci5maXRuZXNzUGxhbkFuc3dlclBvaW50KSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJleHBvcnQgY29uc3QgYWRkUG9pbnRzID0gcG9pbnRzID0+ICh7XG4gIHR5cGU6ICdBRERfUE9JTlRTJyxcbiAgcG9pbnRzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvYWN0aW9ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZpdG5lc3NcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzX19maXRuZXNzLS1SaTc3ZFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gJy4vdGVybXNBbmRDb25kaXRpb25zJztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyID0gVGVybXNBbmRDb25kaXRpb25zO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9ucyA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgICZxdW90O1lvdSZxdW90OyBhbmQgJnF1b3Q7eW91ciZxdW90OyByZWZlciB0byB5b3UsIGFzIGEgdXNlciBvZiB0aGUgU2l0ZS5cbiAgICAgIEEgJnF1b3Q7dXNlciZxdW90OyBpcyBzb21lb25lIHdobyBhY2Nlc3Nlcyxicm93c2VzLCBjcmF3bHMsIHNjcmFwZXMsIG9yIGluIGFueVxuICAgICAgd2F5IHVzZXMgdGhlIFNpdGUuICZxdW90O1dlLCZxdW90OyAmcXVvdDt1cywmcXVvdDsgYW5kICZxdW90O291ciZxdW90OyByZWZlciB0byByZWdnZXN0LlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtyZWdnZXN0IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0XG4gICAgICB3ZSBjcmVhdGUgYW5kIG1ha2UgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1RoaXJkIFBhcnR5IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBwYXJ0aWVzIG90aGVyXG4gICAgICB0aGFuIHJlZ2dlc3Qgb3IgaXRzIHVzZXJzLCB3aGljaCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtTaXRlIENvbnRlbnQmcXVvdDsgbWVhbnMgYWxsIG9mIHRoZSBDb250ZW50IHRoYXQgaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvblxuICAgICAgd2l0aCB0aGUgU2l0ZSwgaW5jbHVkaW5nIFlvdXIgQ29udGVudCwgVXNlciBDb250ZW50LCBUaGlyZCBQYXJ0eSBDb250ZW50LFxuICAgICAgYW5kIHJlZ2dlc3QgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgcmVnZ2VzdCB3ZWJzaXRlIGFyZSBwcm92aWRlZCAmcXVvdDthcyBzaG93biZxdW90Oy5cbiAgICAgICAgICByZWdnZXN0IG1ha2VzIG5vIHdhcnJhbnRpZXMsIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBhbmQgaGVyZWJ5IGRpc2NsYWltc1xuICAgICAgICAgIGFuZCBuZWdhdGVzIGFsbCBvdGhlciB3YXJyYW50aWVzLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbXBsaWVkXG4gICAgICAgICAgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICAgICAgcHVycG9zZSwgb3Igbm9uLWluZnJpbmdlbWVudCBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3Igb3RoZXIgdmlvbGF0aW9uIG9mIHJpZ2h0cy5cbiAgICAgICAgICBGdXJ0aGVyLCByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIHJlZ2dlc3Qgb3IgaXRzIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIChpbmNsdWRpbmcsIHdpdGhvdXRcbiAgICAgICAgICBsaW1pdGF0aW9uLCBkYW1hZ2VzIGZvciBsb3NzIG9mIGRhdGEgb3IgcHJvZml0LCBvciBkdWUgdG8gYnVzaW5lc3MgaW50ZXJydXB0aW9uKVxuICAgICAgICAgIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciBpbnRlcm5ldCBzaXRlIG9yXG4gICAgICAgICAgb2ZmZXJlZCBzZXJ2aWNlcywgZXZlbiBpZiB3ZSBvciBhbiBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIGhhcyBiZWVuIG5vdGlmaWVkXG4gICAgICAgICAgb3JhbGx5IG9yIGluIHdyaXRpbmcgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlLiBCZWNhdXNlIHNvbWUganVyaXNkaWN0aW9uc1xuICAgICAgICAgIGRvIG5vdCBhbGxvdyBsaW1pdGF0aW9ucyBvbiBpbXBsaWVkIHdhcnJhbnRpZXMsIG9yIGxpbWl0YXRpb25zIG9mIGxpYWJpbGl0eSBmb3JcbiAgICAgICAgICBjb25zZXF1ZW50aWFsIG9yIGluY2lkZW50YWwgZGFtYWdlcywgdGhlc2UgbGltaXRhdGlvbnMgbWF5IG5vdCBhcHBseSB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5SZXZpc2lvbnMgYW5kIEVycm9yczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgYXBwZWFyaW5nIG9uIG91ciB3ZWJzaXRlIGNvdWxkIGluY2x1ZGUgdGVjaG5pY2FsLCB0eXBvZ3JhcGhpY2FsLFxuICAgICAgICAgIG9yIHBob3RvZ3JhcGhpYyBlcnJvcnMuIHJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCB0aGF0IGFueSBvZiB0aGUgbWF0ZXJpYWxzIG9uXG4gICAgICAgICAgaXRzIHdlYnNpdGUgYXJlIGFjY3VyYXRlLCBjb21wbGV0ZSwgb3IgY3VycmVudC4gV2UgbWF5IG1ha2UgY2hhbmdlcyB0byB0aGVcbiAgICAgICAgICBtYXRlcmlhbHMgY29udGFpbmVkIG9uIGl0cyB3ZWJzaXRlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICByZWdnZXN0IGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgcmVnZ2VzdCB3ZWJzaXRlIHNoYWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzXG4gICAgICAgICAgb2YgdGhlIGNvdW50cnkgb2Ygbm90ZSB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5FbmdsaXNoIExhbmd1YWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gdGhlIGV2ZW50IG9mIGEgY29uZmxpY3QgYmV0d2VlbiB0aGVzZSBUZXJtcyBhbmQgYSBmb3JlaWduIGxhbmd1YWdlIHZlcnNpb25cbiAgICAgICAgICBvZiBvdXIgVGVybXMgb2YgVXNlLCB0aGUgRW5nbGlzaCBsYW5ndWFnZSB2ZXJzaW9uIG9mIHRoZXNlIFRlcm1zIGdvdmVybnMuXG4gICAgICAgICAgQWxsIGRpc3B1dGVzLCBjbGFpbXMgYW5kIGNhdXNlcyBvZiBhY3Rpb24gKGFuZCByZWxhdGVkIHByb2NlZWRpbmdzKSB3aWxsIGJlXG4gICAgICAgICAgY29tbXVuaWNhdGVkIGluIEVuZ2xpc2guXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Db3B5cmlnaHQgcG9saWN5LCBub3RpY2UgYW5kIGNsYWltIGluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIG1hdGVyaWFscyBvbiB0aGlzIHNpdGUsIHdoZXRoZXIgc2VwYXJhdGUgb3IgY29tcGlsZWQsIGluY2x1ZGluZyxcbiAgICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8sIHRleHQsIGdyYXBoaWNzLCBhdWRpbyBjbGlwcywgbG9nb3MsIGJ1dHRvbnMsIGltYWdlcyxcbiAgICAgICAgICBkaWdpdGFsIGRvd25sb2FkcywgZGF0YSBjb21waWxhdGlvbnMsIHNvZnR3YXJlLCBpY29ucywgaHRtbCBjb2RlIGFuZCB4bWwgY29kZSxcbiAgICAgICAgICBhcyB3ZWxsIGFzIGFsbCBjb3B5cmlnaHQsIHBhdGVudCwgdHJhZGVtYXJrLCB0cmFkZSBkcmVzcywgYW5kIG90aGVyIHJpZ2h0c1xuICAgICAgICAgIHRoZXJlaW4sIGFyZSBvd25lZCBvciBsaWNlbnNlZCBieSByZWdnZXN0IGFuZCBpdHMgdGhpcmQtcGFydHkgaW5mb3JtYXRpb24gcHJvdmlkZXJzLFxuICAgICAgICAgIGFuZCBhcmUgcHJvdGVjdGVkIGJ5IGludGVybmF0aW9uYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IGxhd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2VDb250ZW50XCI6XCJDb21wb25lbnRzLXNoYXJlZC1wYWdlQ29udGVudF9fcGFnZUNvbnRlbnQtLXdwdXRXXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcml2YWN5UG9saWN5IGZyb20gJy4vcHJpdmFjeVBvbGljeSc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3lDb250YWluZXIgPSBQcml2YWN5UG9saWN5O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpdmFjeVBvbGljeUNvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3lDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3kgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpclxuICAgICAgJmFwb3M7UGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24mYXBvczsgKFBJSSkgaXMgYmVpbmcgdXNlZCBvbmxpbmUuXG4gICAgICBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAgICAgIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG9cbiAgICAgIGlkZW50aWZ5IGFuIGluZGl2aWR1YWwgaW4gY29udGV4dC4gUGxlYXNlIHJlYWQgb3VyIHByaXZhY3kgcG9saWN5IGNhcmVmdWxseSB0byBnZXQgYSBjbGVhclxuICAgICAgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGVcbiAgICAgIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGF0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGRvIHdlIGNvbGxlY3Q/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3Igb3VyIG5ld3NsZXR0ZXIsIHlvdSB3aWxsIGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICBUaGlzIGlzIHRvIGhlbHAgdXMgaW5kZW50aWZ5IHlvdSBhbmQga2VlcCB5b3UgdXBkYXRlZC4gV2Ugd2lsbCBub3Qgc2VuZCB5b3UgYW55IGVtYWlscyB0aGF0IHlvdVxuICAgICAgICAgIGRvIG5vdCByZXF1ZXN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGNvbGxlY3QgY2VydGFpbiBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSByZWdpc3RlciBmb3Igb3VyIG5ld3NsZXR0ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Ib3cgZG8gd2UgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy5cbiAgICAgICAgICBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuIFdlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuXG4gICAgICAgICAgWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBjb250YWluZWQgYmVoaW5kIHNlY3VyZWQgbmV0d29ya3MgYW5kIGlzIG9ubHkgYWNjZXNzaWJsZVxuICAgICAgICAgIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlXG4gICAgICAgICAgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxuICAgICAgICAgIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuXG4gICAgICAgICAgV2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyXG4gICAgICAgICAgaW5mb3JtYXRpb24gdG8gbWFpbnRhaW4gdGhlIHNhZmV0eSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG8gd2UgdXNlICZhcG9zO2Nvb2tpZXMmYXBvczs/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWVzLiBDb29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGEgc2l0ZSBvciBpdHMgc2VydmljZSBwcm92aWRlciB0cmFuc2ZlcnMgdG8geW91clxuICAgICAgICAgIGNvbXB1dGVyJmFwb3M7cyBoYXJkIGRyaXZlIHRocm91Z2ggeW91ciBXZWIgYnJvd3NlciB0aGF0IGVuYWJsZXMgdGhlXG4gICAgICAgICAgc2l0ZSZhcG9zO3Mgb3Igc2VydmljZSBwcm92aWRlciZhcG9zO3Mgc3lzdGVtcyB0byByZWNvZ25pemUgeW91ciBicm93c2VyIGFuZCBjYXB0dXJlXG4gICAgICAgICAgYW5kIHJlbWVtYmVyIGNlcnRhaW4gaW5mb3JtYXRpb24uIFRoZXkgYXJlIHVzZWQgdG8gaGVscCB1cyB1bmRlcnN0YW5kIHlvdXIgcHJlZmVyZW5jZXNcbiAgICAgICAgICBiYXNlZCBvbiBwcmV2aW91cyBvciBjdXJyZW50IHNpdGUgYWN0aXZpdHksIHdoaWNoIGVuYWJsZXMgdXMgdG8gcHJvdmlkZVxuICAgICAgICAgIHlvdSB3aXRoIGltcHJvdmVkIHNlcnZpY2VzLiBXZSBhbHNvIHVzZSBjb29raWVzIHRvIGhlbHAgdXMgY29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dFxuICAgICAgICAgIHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbiBzbyB0aGF0IHdlIGNhbiBvZmZlciBiZXR0ZXIgc2l0ZVxuICAgICAgICAgIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2UgdXNlIGNvb2tpZXMgdG86PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5VbmRlcnN0YW5kIGFuZCBzYXZlIHVzZXImYXBvcztzIHByZWZlcmVuY2VzIGZvciBmdXR1cmUgdmlzaXRzLjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dCBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICBpbiBvcmRlciB0byBvZmZlciBiZXR0ZXIgc2l0ZSBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIFdlIG1heSBhbHNvIHVzZSB0cnVzdGVkIHRoaXJkLXBhcnR5IHNlcnZpY2VzIHRoYXQgdHJhY2sgdGhpc1xuICAgICAgICAgICAgaW5mb3JtYXRpb24gb24gb3VyIGJlaGFsZlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENvb2tpZXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciB3ZWJzaXRlIGFuZCB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgd2l0aG91dCBoYXZpbmcgdGhlbSBlbmFibGVkLiBCeSB1c2luZyBvdXIgc2l0ZSB5b3UgYWxsb3cgdXMgdG8gdXNlIGNvb2tpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgbWF5IGJlIHRoaXJkLXBhcnR5IGxpbmtzIHRvIHJhZGlvIHN0YXRpb24gd2Vic2l0ZXMgdGhyb3VnaG91dCBvdXJcbiAgICAgICAgICB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kXG4gICAgICAgICAgYWN0aXZpdGllcyBvZiB0aGVzZSBsaW5rZWQgc2l0ZXMuIE5vbmV0aGVsZXNzLCB3ZSBzZWVrIHRvIHByb3RlY3RcbiAgICAgICAgICB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy5cbiAgICAgICAgICBBbnkgbGluayBvbiBvdXIgc2l0ZSB0byBhIHRoaXJkIHBhcnQgd2Vic2l0ZSB0aGF0IGlzIG5vdCByZWxldmFudFxuICAgICAgICAgIG9yIGlmIHdlIGRlZW0gaXQgaW5hcHByb3ByaWF0ZSwgbWF5IGJlIHJlbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb29nbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBHb29nbGUmYXBvcztzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG9cbiAgICAgICAgICBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW5cblxuICAgICAgICAgIFdlIGhhdmUgbm90IGVuYWJsZWQgR29vZ2xlIEFkU2Vuc2Ugb24gb3VyIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuXG4gICAgICAgICAgVGhlIGxhdyZhcG9zO3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnlcbiAgICAgICAgICBpbiB0aGUgVW5pdGVkIFN0YXRlcyAoYW5kIGNvbmNlaXZhYmx5IHRoZSB3b3JsZCkgdGhhdCBvcGVyYXRlcyB3ZWJzaXRlcyBjb2xsZWN0aW5nXG4gICAgICAgICAgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXNcbiAgICAgICAgICBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmRcbiAgICAgICAgICB0aG9zZSBpbmRpdmlkdWFscyBvciBjb21wYW5pZXMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nIHNoYXJlZC4gLSBTZWUgbW9yZSBhdDpcbiAgICAgICAgICBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWZcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkFjY29yZGluZyB0byBDYWxPUFBBLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseS5cbiAgICAgICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBhIGxpbmsgdG8gaXQgZnJvbSBvdXIgaG9tZSBwYWdlIGluIHRoZSBoZWFkZXIuXG4gICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJmFwb3M7UHJpdmFjeSZhcG9zOyBhbmQgY2FuIGVhc2lseVxuICAgICAgICAgIGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS5cblxuICAgICAgICAgIFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOlxuICAgICAgICAgICAgICAgIOKAoiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZVxuICAgICAgICAgIENhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICDigKIgVGhyb3VnaCBvdXIgd2Vic2l0ZVxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmdcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNPUFBBIChDaGlsZHJlbiBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCk8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW5cbiAgICAgICAgICB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZCwgdGhlIENoaWxkcmVuJmFwb3M7cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuIFRoZSBGZWRlcmFsIFRyYWRlIENvbW1pc3Npb24sIFVuaXRlZCBTdGF0ZXMmYXBvcztcbiAgICAgICAgICBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdFxuICAgICAgICAgIG9wZXJhdG9ycyBvZiB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIG11c3QgZG8gdG8gcHJvdGVjdCBjaGlsZHJlbiZhcG9zO3NcbiAgICAgICAgICBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLlxuXG4gICAgICAgICAgV2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyBQcmluY2lwbGVzIGZvcm0gdGhlIGJhY2tib25lIG9mIHByaXZhY3lcbiAgICAgICAgICBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudFxuICAgICAgICAgIHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmdcbiAgICAgICAgICB0aGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZSBQcmluY2lwbGVzIGFuZCBob3cgdGhleSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgaXNcbiAgICAgICAgICBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgSW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGVcbiAgICAgICAgICBmb2xsb3dpbmcgcmVzcG9uc2l2ZSBhY3Rpb24sIHNob3VsZCBhIGRhdGEgYnJlYWNoIG9jY3VyOlxuXG4gICAgICAgICAgV2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLiBXZSB3aWxsIGFsc29cbiAgICAgICAgICBub3RpZnkgdXNlcnMgdmlhIGFuIGluLXNpdGUgbm90aWZpY2F0aW9uIG9uIHRoZSBob21lIHBhZ2Ugd2l0aGluIDcgYnVzaW5lc3MgZGF5cy5cblxuICAgICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdCBpbmRpdmlkdWFsc1xuICAgICAgICAgIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9yc1xuICAgICAgICAgIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seVxuICAgICAgICAgIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0XG4gICAgICAgICAgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZVxuICAgICAgICAgIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1wcmludC5sZXNzJztcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wcmludENvbnRlbnR9PlxuICAgICAgPGgxPkltcHJpbnQ8L2gxPlxuICAgICAgPGRpdj5Db21wYW55IE5hbWU6IFZBU1QgTkVUV09SSyBMVEQ8L2Rpdj5cbiAgICAgIDxkaXY+TWFuYWdpbmcgRGlyZWN0b3I6IE1hcnRpbiBEYXdzb248L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzczogMjYgQ2FsZGVyVmlldywgUmFzdHJpY2ssIEJyaWdob3VzZSwgSEQ2M0RRIFVuaXRlZCBLaW5nZG9tPC9kaXY+XG4gICAgICA8ZGl2PlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsIGFkZHJlc3M6IGluZm9AcmVnZ2VzdC5jb208L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW1wcmludENvbnRlbnRcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWltcHJpbnRfX2ltcHJpbnRDb250ZW50LS0xNXJMTVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Vycm9yUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb3BzID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogJ1RoZSBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC4nIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoY3JlYXRlUHJvcHMpLFxuKTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gZW5oYW5jZShFcnJvclBhZ2UpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocHJvcHMucGFyYW1zLnN0YXR1cywgMTApfVxuICAgICAgZXJyb3I9e3Byb3BzLmxvY2F0aW9uLnN0YXRlLmVycm9yfVxuICAgIC8+XG4gICksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yUGFnZS5sZXNzJztcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfT5cbiAgICA8aDE+RXJyb3Ige3N0YXR1c308L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkVycm9yUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC4nLFxufTtcblxuRXJyb3JQYWdlLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBxdW90YXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yUGFnZVwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclBhZ2UtLTFhUy16XCIsXCJlcnJvclwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvci0tNjJLWkNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gJy4vcHJpbWFyeUxheW91dCc7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXRDb250YWluZXIgPSBQcmltYXJ5TGF5b3V0O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpbWFyeUxheW91dENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdmb3VuZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcmltYXJ5TGF5b3V0Lmxlc3MnO1xuaW1wb3J0IENvb2tpZU5vdGljZSBmcm9tICcuLi8uLi9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyJztcbmltcG9ydCBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBmcm9tICcuL3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5JztcbmltcG9ydCBEaXNwbGF5VHlwZSBmcm9tICcuLi8uLi9zaGFyZWQvZGlzcGxheVR5cGUnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9mb290ZXIvZm9vdGVyJztcbmltcG9ydCBQb3B1cHMgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lcic7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXQgPSAoe1xuICBjaGlsZHJlbixcbn0pID0+IChcbiAgPERpc3BsYXlUeXBlPlxuICAgIHsoZGlzcGxheVR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGRpc3BsYXlUeXBlQ2xhc3NOYW1lID0gY2xhc3NuYW1lcyhcbiAgICAgICAgZGlzcGxheVR5cGUuaXNNb2JpbGUgJiYgJ21vYmlsZScsXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzVGFibGV0ICYmICd0YWJsZXQnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc0Rlc2t0b3AgJiYgJ2Rlc2t0b3AnLFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGRpc3BsYXlUeXBlQ2xhc3NOYW1lLCBzdHlsZXMucHJpbWFyeUxheW91dCl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMucmVnZ2VzdH0+cmVnZ2VzdDwvTGluaz5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDxQb3B1cHMgLz5cbiAgICAgICAgICA8Q29va2llTm90aWNlIC8+XG4gICAgICAgIDwvUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgICApO1xuICAgIH19XG4gIDwvRGlzcGxheVR5cGU+XG4pO1xuXG5QcmltYXJ5TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5QcmltYXJ5TGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwcmltYXJ5TGF5b3V0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19wcmltYXJ5TGF5b3V0LS0zRlZqYlwiLFwid3JhcFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fd3JhcC0tM092MzhcIixcIm1haW5cIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX21haW4tLTFHNmExXCIsXCJyZWdnZXN0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19yZWdnZXN0LS1SSUhTQ1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi9jb29raWVOb3RpY2UnO1xuaW1wb3J0IHsgc2hvd1BvcHVwIH0gZnJvbSAnLi4vc2hhcmVkL3BvcHVwL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgc2hvd1BvcHVwIH0pKENvb2tpZU5vdGljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ29va2llTm90aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29va2llTm90aWNlU2hvd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nKTtcblxuICAgIGlmICghY29va2llTm90aWNlU2hvd24pIHtcbiAgICAgIHRoaXMucHJvcHMuc2hvd1BvcHVwKCdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGdpdmUgeW91IHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZSwgYnkgY29udGludWluZyB0byB1c2UgdGhlIHNpdGUgeW91IGFyZSBhZ3JlZWluZyB0byBvdXIgdXNlIG9mIGNvb2tpZXMuJywgMTUwMDApO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkNvb2tpZU5vdGljZS5wcm9wVHlwZXMgPSB7XG4gIHNob3dQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZU5vdGljZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnZm91bmQnO1xuXG5jbGFzcyBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAgIC8vIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkucHJvcFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4pKFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuY2xhc3MgRGlzcGxheVR5cGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNwbGF5VHlwZTogJ2Rlc2t0b3AnLFxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSk7XG4gIH1cblxuICBnZXREaXNwbGF5VHlwZSA9ICh3aW5kb3dXaWR0aCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRNb2JpbGUudmFsdWUpIHtcbiAgICAgIHJldHVybiAnbW9iaWxlJztcbiAgICB9XG5cbiAgICBpZiAod2luZG93V2lkdGggPCBzaXplcy5icmVha3BvaW50VGFibGV0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gJ3RhYmxldCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdkZXNrdG9wJztcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlUeXBlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBkaXNwbGF5VHlwZSA9IHRoaXMuZ2V0RGlzcGxheVR5cGUod2luZG93V2lkdGgpO1xuXG4gICAgaWYgKGRpc3BsYXlUeXBlICE9PSB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0ge1xuICAgICAgaXNNb2JpbGU6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdtb2JpbGUnLFxuICAgICAgaXNUYWJsZXQ6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICd0YWJsZXQnLFxuICAgICAgaXNEZXNrdG9wOiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAnZGVza3RvcCcsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKGRpc3BsYXlUeXBlKTtcbiAgfVxufVxuXG5EaXNwbGF5VHlwZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheVR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9kaXNwbGF5VHlwZS5qcyIsImNvbnN0IHNpemVzID0ge1xuICBicmVha3BvaW50TW9iaWxlOiB7IHZhbHVlOiA3NjgsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludFRhYmxldDogeyB2YWx1ZTogOTkyLCB1bml0OiAncHgnIH0sXG4gIGJyZWFrcG9pbnREZXNrdG9wOiB7IHZhbHVlOiAxMjAwLCB1bml0OiAncHgnIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3NpemVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdmb3VuZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubGVzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgIDxMaW5rIHRvPVwiL3Rlcm1zQW5kQ29uZGl0aW9uc1wiPnRlcm1zIGFuZCBjb25kaXRpb25zPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3ByaXZhY3lQb2xpY3lcIj5wcml2YWN5IHBvbGljeTwvTGluaz5cbiAgICA8TGluayB0bz1cIi9pbXByaW50XCI+aW1wcmludDwvTGluaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmb290ZXJcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWZvb3Rlcl9fZm9vdGVyLS0zUzFuNFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBvcHVwcyBmcm9tICcuL3BvcHVwcyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwb3B1cCB9KSA9PiAoe1xuICBwb3B1cHM6IHBvcHVwLnBvcHVwcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuICBoaWRlUG9wdXAsXG59KShQb3B1cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3B1cHMubGVzcyc7XG5cbmNvbnN0IFBvcHVwcyA9ICh7IHBvcHVwcywgaGlkZVBvcHVwIH0pID0+IChcbiAgcG9wdXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cHN9PlxuICAgICAge3BvcHVwcy5tYXAoKHBvcHVwLCBpbmRleCkgPT4gKFxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBrZXk9e3BvcHVwLmlkfVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB0ZXh0PXtwb3B1cC50ZXh0fVxuICAgICAgICAgIGhpZGVQb3B1cD17aGlkZVBvcHVwfVxuICAgICAgICAgIG1pbGxpc2Vjb25kc1RvU2hvdz17cG9wdXAubWlsbGlzZWNvbmRzVG9TaG93fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+KVxuICAgIDogbnVsbFxuKTtcblxuUG9wdXBzLnByb3BUeXBlcyA9IHtcbiAgaGlkZVBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3B1cHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWlsbGlzZWNvbmRzVG9TaG93OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3B1cC5sZXNzJztcblxuY2xhc3MgUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlkZVBvcHVwKHRoaXMucHJvcHMuaW5kZXgpLCB0aGlzLnByb3BzLm1pbGxpc2Vjb25kc1RvU2hvdyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwfT5cbiAgICAgICAge3RoaXMucHJvcHMudGV4dH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhpZGVQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWlsbGlzZWNvbmRzVG9TaG93OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicG9wdXBcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBvcHVwLXBvcHVwX19wb3B1cC0tMjRPWU1cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicG9wdXBzXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cHNfX3BvcHVwcy0tMW0xS0VcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzc1xuLy8gbW9kdWxlIGlkID0gNzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgcG9wdXBzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0hPV19QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IFsuLi5zdGF0ZS5wb3B1cHMsIHtcbiAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogYWN0aW9uLm1pbGxpc2Vjb25kc1RvU2hvdyxcbiAgICAgIH1dO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnSElERV9QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IHN0YXRlLnBvcHVwcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5pbmRleCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwiaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE5ldHdvcmssXG4gIFJlY29yZFNvdXJjZSxcbiAgU3RvcmUsXG59IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbiwgdmFyaWFibGVzKSA9PlxuICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlbGF5L2lzc3Vlcy8xODE2XG4gICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24uZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICB9KTtcblxuY29uc3QgbmV0d29yayA9IE5ldHdvcmsuY3JlYXRlKGZldGNoUXVlcnkpO1xuY29uc3Qgc291cmNlID0gbmV3IFJlY29yZFNvdXJjZSgpO1xuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoc291cmNlKTtcbmNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yayxcbiAgc3RvcmUsXG59KTtcblxuc2V0RW52aXJvbWVudChlbnZpcm9ubWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
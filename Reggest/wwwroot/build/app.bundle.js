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
 * @relayHash cb9cc8902828ef57a1b82e3f49055d81
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type submitAnswerMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    answerId: number,
  },
|};
export type submitAnswerMutationResponse = {|
  +submitAnswer: ?{|
    +answer: {|
      +fitnessPlanAnswerPoints: ?$ReadOnlyArray<?{|
        +points: number,
        +fitnessPlan: {|
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
  debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzIl0sIm5hbWVzIjpbIlBhZ2VDb250ZW50IiwiY2hpbGRyZW4iLCJwYWdlQ29udGVudCIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwidjAiLCJ2MSIsInYyIiwidjMiLCJ2NCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwic2hvd1BvcHVwIiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsInR5cGUiLCJpZCIsImdlbmVyYXRlIiwiaGlkZVBvcHVwIiwiaW5kZXgiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJlcnJvciIsImNvbnNvbGUiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwic3RhdHVzIiwic3RhdGUiLCJkYXRhIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJtaWRkbGVXYXJlIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJkaXNwYXRjaCIsImluaXQiLCJGaXRuZXNzQ29udGFpbmVyIiwicXVlcnkiLCJyb3V0ZUNvbmZpZyIsIkNvbXBvbmVudCIsIkZpdG5lc3MiLCJxdWVzdGlvbiIsImZpdG5lc3MiLCJmcmFnbWVudHMiLCJyZWZldGNoUXVlcnkiLCJoYW5kbGVycyIsImFuc3dlck9uQ2xpY2siLCJyZWxheSIsInJlZmV0Y2giLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsIm1hcCIsImFuc3dlciIsImFuc3dlcklkIiwiYW5zd2VyQ29udGFpbmVyIiwiYW5zd2VyVGV4dCIsInN0cmluZyIsImFycmF5T2YiLCJpbnN0YW5jZU9mIiwiZnVuYyIsIm11dGF0aW9uIiwidmFyaWFibGVzIiwiaW5wdXQiLCJ0aGVuIiwic3VibWl0QW5zd2VyIiwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMiLCJmaXRuZXNzUGxhbkFuc3dlclBvaW50IiwiYWRkUG9pbnRzIiwicG9pbnRzIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJwYXJzZUludCIsInBhcmFtcyIsImxvY2F0aW9uIiwiRXJyb3JQYWdlIiwiZXJyb3JQYWdlIiwiZGVmYXVsdFByb3BzIiwicXVvdGF0aW9uIiwiUHJpbWFyeUxheW91dENvbnRhaW5lciIsIlByaW1hcnlMYXlvdXQiLCJkaXNwbGF5VHlwZSIsImRpc3BsYXlUeXBlQ2xhc3NOYW1lIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsInByaW1hcnlMYXlvdXQiLCJ3cmFwIiwibWFpbiIsInJlZ2dlc3QiLCJDb29raWVOb3RpY2UiLCJjb29raWVOb3RpY2VTaG93biIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJjbGFzc05hbWUiLCJEaXNwbGF5VHlwZSIsImdldERpc3BsYXlUeXBlIiwid2luZG93V2lkdGgiLCJicmVha3BvaW50TW9iaWxlIiwidmFsdWUiLCJicmVha3BvaW50VGFibGV0IiwidXBkYXRlRGlzcGxheVR5cGUiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZXMiLCJ1bml0IiwiYnJlYWtwb2ludERlc2t0b3AiLCJGb290ZXIiLCJmb290ZXIiLCJtYXBTdGF0ZVRvUHJvcHMiLCJwb3B1cHMiLCJQb3B1cHMiLCJsZW5ndGgiLCJQb3B1cCIsInNldFRpbWVvdXQiLCJkZWZhdWx0U3RhdGUiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZmlsdGVyIiwiXyIsImkiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7OztBQ2ZmOzs7OztBQUtBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxJQUFNSSxLQUFJLHFCQUFKLEdBQTZCLFlBQVU7QUFDN0MsTUFBSUUsS0FBSyxDQUNQO0FBQ0UsWUFBUSxlQURWO0FBRUUsWUFBUSxPQUZWO0FBR0UsWUFBUSxvQkFIVjtBQUlFLG9CQUFnQjtBQUpsQixHQURPLENBQVQ7QUFBQSxNQVFBQyxLQUFLLENBQ0g7QUFDRSxZQUFRLFVBRFY7QUFFRSxZQUFRLE9BRlY7QUFHRSxvQkFBZ0IsT0FIbEI7QUFJRSxZQUFRO0FBSlYsR0FERyxDQVJMO0FBQUEsTUFnQkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7QUFFSCxhQUFTLElBRk47QUFHSCxZQUFRLFFBSEw7QUFJSCxZQUFRLElBSkw7QUFLSCxrQkFBYztBQUxYLEdBaEJMO0FBQUEsTUF1QkFDLEtBQUs7QUFDSCxZQUFRLGFBREw7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QTtBQUZGLE9BREY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FURjtBQWVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQWZGO0FBNEJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQTVCRjtBQXlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsU0FGRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixPQXpDRjtBQXlERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0F6REY7QUFnRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BaEVGO0FBNEVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQTVFRjtBQXNGRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0F0RkY7QUFtR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BbkdGO0FBaUhFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFG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UCxzQkFBZ0I7QUFGVCxLQUhPO0FBT2hCN0IsVUFBTThCLEtBQUtDLFNBQUwsQ0FBZTtBQUNuQjVHLGFBQU9xRyxVQUFVOUksSUFERTtBQUVuQm1FO0FBRm1CLEtBQWY7QUFQVSxHQUFsQixFQVdHRSxJQVhILENBV1E7QUFBQSxXQUFZaUYsU0FBU0MsSUFBVCxFQUFaO0FBQUEsR0FYUixFQVlHbEYsSUFaSCxDQVlRLFVBQUNrRixJQUFELEVBQVU7QUFDZDtBQUNBLFFBQUlBLEtBQUtDLE1BQVQsRUFBaUI7QUFDZixhQUFPQyxRQUFRQyxNQUFSLENBQWVILEtBQUtDLE1BQXBCLENBQVA7QUFDRDs7QUFFRCxXQUFPQyxRQUFRRSxPQUFSLENBQWdCSixJQUFoQixDQUFQO0FBQ0QsR0FuQkgsQ0FEaUI7QUFBQSxDQUFuQjs7QUFzQkEsSUFBTUssVUFBVSxzQkFBUUMsTUFBUixDQUFlaEIsVUFBZixDQUFoQjtBQUNBLElBQU1pQixTQUFTLGdDQUFmO0FBQ0EsSUFBTS9JLFFBQVEsd0JBQVUrSSxNQUFWLENBQWQ7QUFDQSxJQUFNQyxjQUFjLDhCQUFnQjtBQUNsQ0gsa0JBRGtDO0FBRWxDN0k7QUFGa0MsQ0FBaEIsQ0FBcEI7O0FBS0EsaUNBQWNnSixXQUFkOztrQkFFZUEsVzs7Ozs7OztBQ3hDZix5QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlQ29udGVudC5sZXNzJztcblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRlbnR9PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5QYWdlQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggY2I5Y2M4OTAyODI4ZWY1N2ExYjgyZTNmNDkwNTVkODFcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzdWJtaXRBbnN3ZXJNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiB7XG4gICAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gICAgYW5zd2VySWQ6IG51bWJlcixcbiAgfSxcbnx9O1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtzdWJtaXRBbnN3ZXI6ID97fFxuICAgICthbnN3ZXI6IHt8XG4gICAgICArZml0bmVzc1BsYW5BbnN3ZXJQb2ludHM6ID8kUmVhZE9ubHlBcnJheTw/e3xcbiAgICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgICArZml0bmVzc1BsYW46IHt8XG4gICAgICAgICAgK25hbWU6IHN0cmluZyxcbiAgICAgICAgfH0sXG4gICAgICB8fT4sXG4gICAgfH0sXG4gIHx9LFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcbiAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbikge1xuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGFuc3dlciB7XG4gICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgIHBvaW50c1xuICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgbmFtZVxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJtaXRBbnN3ZXJJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3VibWl0QW5zd2VySW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcInBvaW50c1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnY0ID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImlkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwibXV0YXRpb25cIixcbiAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcXG4gICRpbnB1dDogU3VibWl0QW5zd2VySW5wdXQhXFxuKSB7XFxuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBhbnN3ZXIge1xcbiAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcXG4gICAgICAgIHBvaW50c1xcbiAgICAgICAgZml0bmVzc1BsYW4ge1xcbiAgICAgICAgICBuYW1lXFxuICAgICAgICAgIGlkXFxuICAgICAgICB9XFxuICAgICAgICBpZFxcbiAgICAgIH1cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXCIsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhbkFuc3dlclBvaW50XCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYzXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICB2NFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHY0XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzJmYzAwMmU4MzBlNDFkMzZlMDYyODRkNjEwZGUxMGI2Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvX19nZW5lcmF0ZWRfXy9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gPSB7fFxuICArcXVlc3Rpb25UZXh0OiA/c3RyaW5nLFxuICArYW5zd2VyczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICthbnN3ZXJJZDogbnVtYmVyLFxuICAgICthbnN3ZXJUZXh0OiA/c3RyaW5nLFxuICB8fT4sXG4gICskcmVmVHlwZTogcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lcl9xdWVzdGlvblwiLFxuICBcInR5cGVcIjogXCJRdWVzdGlvblwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25UZXh0XCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwiYW5zd2Vyc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcklkXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclRleHRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnYzA4ZmRjMzA1ZDg3MzE5Mzg2NDdmMjI2ZWQwYjAxMDUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyX3F1ZXN0aW9uLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDgxY2NmMjNhNjczMmNjYTM4NWUzNzU3Y2IxYzNlN2NjXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVZhcmlhYmxlcyA9IHt8IHx9O1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlSZXNwb25zZSA9IHt8XG4gICtxdWVzdGlvbjogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZixcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcbiAgcXVlc3Rpb24ge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IHFBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uIHtcXG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xcbiAgcXVlc3Rpb25UZXh0XFxuICBhbnN3ZXJzIHtcXG4gICAgYW5zd2VySWRcXG4gICAgYW5zd2VyVGV4dFxcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjBcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZTRiY2Y0MTY1ZmNkNTQwM2QyODU0MjUyNTY2YmU1MTgnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyUmVmZXRjaFF1ZXJ5LmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGY0OWNhYjEyODM0YTMwZDU3MWU1NTFiYzUyNTE0ZWE1XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fCB8fTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgK3F1ZXN0aW9uOiA/e3xcbiAgICArJGZyYWdtZW50UmVmczogcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmLFxuICB8fSxcbnx9O1xuKi9cblxuXG4vKlxucXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5IHtcbiAgcXVlc3Rpb24ge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJxdWVyeVwiLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkge1xcbiAgcXVlc3Rpb24ge1xcbiAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XFxuICBxdWVzdGlvblRleHRcXG4gIGFuc3dlcnMge1xcbiAgICBhbnN3ZXJJZFxcbiAgICBhbnN3ZXJUZXh0XFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJRdWVzdGlvblwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYwXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzM1NDkzYjZiNDI0OGM1ZmZlYmU1MWM2ZDE0YjAzNGJhJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgcG9wdXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzVG9TaG93PTYwMDBdIC0gVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSBwb3B1cFxuICovXG5leHBvcnQgY29uc3Qgc2hvd1BvcHVwID0gKHRleHQsIG1pbGxpc2Vjb25kc1RvU2hvdyA9IDYwMDApID0+ICh7XG4gIHR5cGU6ICdTSE9XX1BPUFVQJyxcbiAgdGV4dCxcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgbWlsbGlzZWNvbmRzVG9TaG93LFxufSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcG9wdXAgdG8gaGlkZVxuICovXG5leHBvcnQgY29uc3QgaGlkZVBvcHVwID0gaW5kZXggPT4gKHtcbiAgdHlwZTogJ0hJREVfUE9QVVAnLFxuICBpbmRleCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0dlbmVyaWNFcnJvclBvcHVwID0gKGVycm9yKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiBzaG93UG9wdXAoJ0FuIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHRyeSByZWZyZXNoaW5nIHRoZSBwYWdlLicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBwcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG59KTtcblxuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihcbiAgbmV3IE1hdGNoZXIocm91dGVDb25maWcpLFxuKTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLFxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxuICBmb3JtLFxuICBwb3B1cCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYWtlUm91dGVDb25maWcgZnJvbSAnZm91bmQvbGliL21ha2VSb3V0ZUNvbmZpZyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnZm91bmQvbGliL1JvdXRlJztcblxuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZml0bmVzc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZml0bmVzcy9maXRuZXNzQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBlcnJvclBhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Um91dGVDb25maWd9PlxuICAgIDxSb3V0ZSB7Li4uZml0bmVzc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiZXJyb3IvOnN0YXR1c1wiIHsuLi5lcnJvclBhZ2VSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInRlcm1zQW5kQ29uZGl0aW9uc1wiIHsuLi50ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInByaXZhY3lQb2xpY3lcIiB7Li4ucHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiaW1wcmludFwiIHsuLi5pbXByaW50Um91dGVDb25maWd9IC8+XG4gIDwvUm91dGU+LFxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuXG5pbXBvcnQgRml0bmVzcyBmcm9tICcuL2ZpdG5lc3MnO1xuXG5jb25zdCBGaXRuZXNzQ29udGFpbmVyID0gRml0bmVzcztcblxuY29uc3QgcXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkge1xuICAgIHF1ZXN0aW9uIHtcbiAgICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogRml0bmVzc0NvbnRhaW5lcixcbiAgcXVlcnksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFFBbmRBIGZyb20gJy4uL3FBbmRBL3FBbmRBQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuXG5jb25zdCBGaXRuZXNzID0gKHsgcXVlc3Rpb24gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICA8UUFuZEEgcXVlc3Rpb249e3F1ZXN0aW9ufSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkZpdG5lc3MucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvbjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgcmVmZXRjaENvbnRhaW5lciB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHFBbmRBIGZyb20gJy4vcUFuZEEnO1xuaW1wb3J0IHN1Ym1pdEFuc3dlck11dGF0aW9uIGZyb20gJy4vc3VibWl0QW5zd2VyTXV0YXRpb24nO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gICAgcXVlc3Rpb25UZXh0XG4gICAgYW5zd2VycyB7XG4gICAgICBhbnN3ZXJJZFxuICAgICAgYW5zd2VyVGV4dFxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgcmVmZXRjaFF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgcUFuZEFDb250YWluZXJSZWZldGNoUXVlcnkge1xuICAgIHF1ZXN0aW9uIHtcbiAgICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgYW5zd2VyT25DbGljazogKHsgZGlzcGF0Y2gsIHJlbGF5IH0pID0+IChpZCkgPT4ge1xuICAgIHN1Ym1pdEFuc3dlck11dGF0aW9uKGlkLCBkaXNwYXRjaCk7XG4gICAgcmVsYXkucmVmZXRjaCgpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgY29ubmVjdCgpLFxuICByZWZldGNoQ29udGFpbmVyKGZyYWdtZW50cywgcmVmZXRjaFF1ZXJ5KSxcbiAgZmxhdHRlblByb3AoJ3F1ZXN0aW9uJyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKHFBbmRBKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3FBbmRBLmxlc3MnO1xuXG5jb25zdCBRQW5kQSA9ICh7IHF1ZXN0aW9uVGV4dCwgYW5zd2VycywgYW5zd2VyT25DbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucUFuZEF9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PntxdWVzdGlvblRleHR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmFuc3dlcklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlck9uQ2xpY2soYW5zd2VyLmFuc3dlcklkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUUFuZEEucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFuc3dlcklkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZi5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2VyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXItLTJyMVFIXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmltcG9ydCB7IGFkZFBvaW50cyB9IGZyb20gJy4uL3VzZXIvYWN0aW9ucyc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXG4gICAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbiAgKSB7XG4gICAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGFuc3dlciB7XG4gICAgICAgIGZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzIHtcbiAgICAgICAgICBwb2ludHNcbiAgICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoaWQsIGRpc3BhdGNoKSA9PiB7ZGVidWdnZXJcbiAgY29uc3QgdmFyaWFibGVzID0ge1xuICAgIGlucHV0OiB7XG4gICAgICBpZCxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVNdXRhdGlvbihcbiAgICBtdXRhdGlvbixcbiAgICB2YXJpYWJsZXMsXG4gICkudGhlbigoc3VibWl0QW5zd2VyKSA9PiB7ZGVidWdnZXJcbiAgICBjb25zdCBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyA9IHN1Ym1pdEFuc3dlci5hbnN3ZXIuZml0bmVzc1BsYW5BbnN3ZXJQb2ludDtcblxuICAgIGRpc3BhdGNoKGFkZFBvaW50cyhzdWJtaXRBbnN3ZXIuYW5zd2VyLmZpdG5lc3NQbGFuQW5zd2VyUG9pbnQpKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5qcyIsImV4cG9ydCBjb25zdCBhZGRQb2ludHMgPSBwb2ludHMgPT4gKHtcbiAgdHlwZTogJ0FERF9QT0lOVFMnLFxuICBwb2ludHMsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvdXNlci9hY3Rpb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZml0bmVzc1wiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NfX2ZpdG5lc3MtLVJpNzdkXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzc1xuLy8gbW9kdWxlIGlkID0gNzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSAnLi90ZXJtc0FuZENvbmRpdGlvbnMnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIgPSBUZXJtc0FuZENvbmRpdGlvbnM7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgJnF1b3Q7WW91JnF1b3Q7IGFuZCAmcXVvdDt5b3VyJnF1b3Q7IHJlZmVyIHRvIHlvdSwgYXMgYSB1c2VyIG9mIHRoZSBTaXRlLlxuICAgICAgQSAmcXVvdDt1c2VyJnF1b3Q7IGlzIHNvbWVvbmUgd2hvIGFjY2Vzc2VzLGJyb3dzZXMsIGNyYXdscywgc2NyYXBlcywgb3IgaW4gYW55XG4gICAgICB3YXkgdXNlcyB0aGUgU2l0ZS4gJnF1b3Q7V2UsJnF1b3Q7ICZxdW90O3VzLCZxdW90OyBhbmQgJnF1b3Q7b3VyJnF1b3Q7IHJlZmVyIHRvIHJlZ2dlc3QuXG4gICAgICAmcXVvdDtDb250ZW50JnF1b3Q7IG1lYW5zIHRleHQsIGltYWdlcywgcGhvdG9zLCBhdWRpbywgdmlkZW8sIGxvY2F0aW9uIGRhdGEsXG4gICAgICBhbmQgYWxsIG90aGVyIGZvcm1zIG9mIGRhdGEgb3IgY29tbXVuaWNhdGlvbi5cbiAgICAgICZxdW90O1lvdXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgeW91IHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCwgb3IgaW5cbiAgICAgIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZSwgc3VjaCBhcyByYXRpbmdzLCByZXZpZXdzLCBjb21wbGltZW50cywgaW52aXRhdGlvbnMsXG4gICAgICBjaGVjay1pbnMsIG1lc3NhZ2VzLCBhbmQgaW5mb3JtYXRpb24gdGhhdCB5b3UgcHVibGljbHkgZGlzcGxheSBvciBkaXNwbGF5ZWQgaW5cbiAgICAgIHlvdXIgYWNjb3VudCBwcm9maWxlLlxuICAgICAgJnF1b3Q7VXNlciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB1c2VycyBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsXG4gICAgICBvciBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuICZxdW90O3JlZ2dlc3QgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXRcbiAgICAgIHdlIGNyZWF0ZSBhbmQgbWFrZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7VGhpcmQgUGFydHkgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgb3JpZ2luYXRlcyBmcm9tIHBhcnRpZXMgb3RoZXJcbiAgICAgIHRoYW4gcmVnZ2VzdCBvciBpdHMgdXNlcnMsIHdoaWNoIGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1NpdGUgQ29udGVudCZxdW90OyBtZWFucyBhbGwgb2YgdGhlIENvbnRlbnQgdGhhdCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uXG4gICAgICB3aXRoIHRoZSBTaXRlLCBpbmNsdWRpbmcgWW91ciBDb250ZW50LCBVc2VyIENvbnRlbnQsIFRoaXJkIFBhcnR5IENvbnRlbnQsXG4gICAgICBhbmQgcmVnZ2VzdCBDb250ZW50LlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UZXJtczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJ5IGFjY2Vzc2luZyB0aGlzIHdlYnNpdGUsIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnkgdGhlc2Ugd2Vic2l0ZSBUZXJtc1xuICAgICAgICAgIGFuZCBDb25kaXRpb25zIG9mIFVzZSwgYWxsIGFwcGxpY2FibGUgbGF3cyBhbmQgcmVndWxhdGlvbnMsIGFuZCBhZ3JlZSB0aGF0IHlvdVxuICAgICAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgY29tcGxpYW5jZSB3aXRoIGFueSBhcHBsaWNhYmxlIGxvY2FsIGxhd3MuXG4gICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB3aXRoIGFueSBvZiB0aGVzZSB0ZXJtcywgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gdXNpbmcgb3JcbiAgICAgICAgICBhY2Nlc3NpbmcgdGhpcyBzaXRlLiBUaGUgbWF0ZXJpYWxzIGNvbnRhaW5lZCBpbiB0aGlzIHdlYnNpdGUgYXJlIHByb3RlY3RlZFxuICAgICAgICAgIGJ5IGFwcGxpY2FibGUgY29weXJpZ2h0IGFuZCB0cmFkZSBtYXJrIGxhdy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRpc2NsYWltZXI8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIG9uIHRoZSByZWdnZXN0IHdlYnNpdGUgYXJlIHByb3ZpZGVkICZxdW90O2FzIHNob3duJnF1b3Q7LlxuICAgICAgICAgIHJlZ2dlc3QgbWFrZXMgbm8gd2FycmFudGllcywgZXhwcmVzc2VkIG9yIGltcGxpZWQsIGFuZCBoZXJlYnkgZGlzY2xhaW1zXG4gICAgICAgICAgYW5kIG5lZ2F0ZXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIGltcGxpZWRcbiAgICAgICAgICB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXJcbiAgICAgICAgICBwdXJwb3NlLCBvciBub24taW5mcmluZ2VtZW50IG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciBvdGhlciB2aW9sYXRpb24gb2YgcmlnaHRzLlxuICAgICAgICAgIEZ1cnRoZXIsIHJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMgY29uY2VybmluZyB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgbGlrZWx5IHJlc3VsdHMsIG9yIHJlbGlhYmlsaXR5IG9mIHRoZSB1c2Ugb2YgdGhlIG1hdGVyaWFscyBvbiBpdHMgaW50ZXJuZXRcbiAgICAgICAgICB3ZWJzaXRlIG9yIG90aGVyd2lzZSByZWxhdGluZyB0byBzdWNoIG1hdGVyaWFscyBvciBvbiBhbnkgc2l0ZXMgbGlua2VkIHRvIHRoaXMgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbWl0YXRpb25zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gbm8gZXZlbnQgc2hhbGwgcmVnZ2VzdCBvciBpdHMgc3VwcGxpZXJzIGJlIGxpYWJsZSBmb3IgYW55IGRhbWFnZXMgKGluY2x1ZGluZywgd2l0aG91dFxuICAgICAgICAgIGxpbWl0YXRpb24sIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZGF0YSBvciBwcm9maXQsIG9yIGR1ZSB0byBidXNpbmVzcyBpbnRlcnJ1cHRpb24pXG4gICAgICAgICAgYXJpc2luZyBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZSBtYXRlcmlhbHMgb24gb3VyIGludGVybmV0IHNpdGUgb3JcbiAgICAgICAgICBvZmZlcmVkIHNlcnZpY2VzLCBldmVuIGlmIHdlIG9yIGFuIGF1dGhvcml6ZWQgcmVwcmVzZW50YXRpdmUgaGFzIGJlZW4gbm90aWZpZWRcbiAgICAgICAgICBvcmFsbHkgb3IgaW4gd3JpdGluZyBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2UuIEJlY2F1c2Ugc29tZSBqdXJpc2RpY3Rpb25zXG4gICAgICAgICAgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGltcGxpZWQgd2FycmFudGllcywgb3IgbGltaXRhdGlvbnMgb2YgbGlhYmlsaXR5IGZvclxuICAgICAgICAgIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCB0aGVzZSBsaW1pdGF0aW9ucyBtYXkgbm90IGFwcGx5IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlJldmlzaW9ucyBhbmQgRXJyb3JzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBhcHBlYXJpbmcgb24gb3VyIHdlYnNpdGUgY291bGQgaW5jbHVkZSB0ZWNobmljYWwsIHR5cG9ncmFwaGljYWwsXG4gICAgICAgICAgb3IgcGhvdG9ncmFwaGljIGVycm9ycy4gcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IHRoYXQgYW55IG9mIHRoZSBtYXRlcmlhbHMgb25cbiAgICAgICAgICBpdHMgd2Vic2l0ZSBhcmUgYWNjdXJhdGUsIGNvbXBsZXRlLCBvciBjdXJyZW50LiBXZSBtYXkgbWFrZSBjaGFuZ2VzIHRvIHRoZVxuICAgICAgICAgIG1hdGVyaWFscyBjb250YWluZWQgb24gaXRzIHdlYnNpdGUgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHJlZ2dlc3QgaGFzIG5vdCByZXZpZXdlZCBhbGwgb2YgdGhlIHNpdGVzIGxpbmtlZCB0byBpdHMgaW50ZXJuZXQgd2Vic2l0ZVxuICAgICAgICAgIGFuZCBpcyBub3QgcmVzcG9uc2libGUgZm9yIHRoZSBjb250ZW50cyBvZiBhbnkgc3VjaCBsaW5rZWQgc2l0ZS5cbiAgICAgICAgICBUaGUgaW5jbHVzaW9uIG9mIGFueSBsaW5rIGRvZXMgbm90IGltcGx5IGVuZG9yc2VtZW50IGJ5IHVzIG9mIHRoZSBzaXRlLlxuICAgICAgICAgIFVzZSBvZiBhbnkgc3VjaCBsaW5rZWQgd2Vic2l0ZSBpcyBhdCB0aGUgdXNlciZxdW90O3Mgb3duIHJpc2suXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb3Zlcm5pbmcgTGF3PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW55IGNsYWltIHJlbGF0aW5nIHRvIHRoZSByZWdnZXN0IHdlYnNpdGUgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3NcbiAgICAgICAgICBvZiB0aGUgY291bnRyeSBvZiBub3RlIHdpdGhvdXQgcmVnYXJkIHRvIGl0cyBjb25mbGljdCBvZiBsYXcgcHJvdmlzaW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkVuZ2xpc2ggTGFuZ3VhZ2U8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiB0aGUgZXZlbnQgb2YgYSBjb25mbGljdCBiZXR3ZWVuIHRoZXNlIFRlcm1zIGFuZCBhIGZvcmVpZ24gbGFuZ3VhZ2UgdmVyc2lvblxuICAgICAgICAgIG9mIG91ciBUZXJtcyBvZiBVc2UsIHRoZSBFbmdsaXNoIGxhbmd1YWdlIHZlcnNpb24gb2YgdGhlc2UgVGVybXMgZ292ZXJucy5cbiAgICAgICAgICBBbGwgZGlzcHV0ZXMsIGNsYWltcyBhbmQgY2F1c2VzIG9mIGFjdGlvbiAoYW5kIHJlbGF0ZWQgcHJvY2VlZGluZ3MpIHdpbGwgYmVcbiAgICAgICAgICBjb21tdW5pY2F0ZWQgaW4gRW5nbGlzaC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBwb2xpY3ksIG5vdGljZSBhbmQgY2xhaW0gaW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGwgbWF0ZXJpYWxzIG9uIHRoaXMgc2l0ZSwgd2hldGhlciBzZXBhcmF0ZSBvciBjb21waWxlZCwgaW5jbHVkaW5nLFxuICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0bywgdGV4dCwgZ3JhcGhpY3MsIGF1ZGlvIGNsaXBzLCBsb2dvcywgYnV0dG9ucywgaW1hZ2VzLFxuICAgICAgICAgIGRpZ2l0YWwgZG93bmxvYWRzLCBkYXRhIGNvbXBpbGF0aW9ucywgc29mdHdhcmUsIGljb25zLCBodG1sIGNvZGUgYW5kIHhtbCBjb2RlLFxuICAgICAgICAgIGFzIHdlbGwgYXMgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIHRyYWRlIGRyZXNzLCBhbmQgb3RoZXIgcmlnaHRzXG4gICAgICAgICAgdGhlcmVpbiwgYXJlIG93bmVkIG9yIGxpY2Vuc2VkIGJ5IHJlZ2dlc3QgYW5kIGl0cyB0aGlyZC1wYXJ0eSBpbmZvcm1hdGlvbiBwcm92aWRlcnMsXG4gICAgICAgICAgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgaW50ZXJuYXRpb25hbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgbGF3cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUNvbnRlbnRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBhZ2VDb250ZW50X19wYWdlQ29udGVudC0td3B1dFdcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaXZhY3lQb2xpY3kgZnJvbSAnLi9wcml2YWN5UG9saWN5JztcblxuY29uc3QgUHJpdmFjeVBvbGljeUNvbnRhaW5lciA9IFByaXZhY3lQb2xpY3k7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcml2YWN5UG9saWN5Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgUHJpdmFjeVBvbGljeSA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5Qcml2YWN5IFBvbGljeTwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGJlZW4gY29tcGlsZWQgdG8gYmV0dGVyIHNlcnZlIHRob3NlIHdobyBhcmUgY29uY2VybmVkIHdpdGggaG93IHRoZWlyXG4gICAgICAmYXBvcztQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiZhcG9zOyAoUElJKSBpcyBiZWluZyB1c2VkIG9ubGluZS5cbiAgICAgIFBJSSwgYXMgZGVzY3JpYmVkIGluIFVTIHByaXZhY3kgbGF3IGFuZCBpbmZvcm1hdGlvbiBzZWN1cml0eSwgaXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgdXNlZFxuICAgICAgb24gaXRzIG93biBvciB3aXRoIG90aGVyIGluZm9ybWF0aW9uIHRvIGlkZW50aWZ5LCBjb250YWN0LCBvciBsb2NhdGUgYSBzaW5nbGUgcGVyc29uLCBvciB0b1xuICAgICAgaWRlbnRpZnkgYW4gaW5kaXZpZHVhbCBpbiBjb250ZXh0LiBQbGVhc2UgcmVhZCBvdXIgcHJpdmFjeSBwb2xpY3kgY2FyZWZ1bGx5IHRvIGdldCBhIGNsZWFyXG4gICAgICB1bmRlcnN0YW5kaW5nIG9mIGhvdyB3ZSBjb2xsZWN0LCB1c2UsIHByb3RlY3Qgb3Igb3RoZXJ3aXNlIGhhbmRsZVxuICAgICAgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGggb3VyIHdlYnNpdGUuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoYXQgcGVyc29uYWwgaW5mb3JtYXRpb24gZG8gd2UgY29sbGVjdD88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBvdXIgbmV3c2xldHRlciwgeW91IHdpbGwgYmUgYXNrZWQgdG8gZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgIFRoaXMgaXMgdG8gaGVscCB1cyBpbmRlbnRpZnkgeW91IGFuZCBrZWVwIHlvdSB1cGRhdGVkLiBXZSB3aWxsIG5vdCBzZW5kIHlvdSBhbnkgZW1haWxzIHRoYXQgeW91XG4gICAgICAgICAgZG8gbm90IHJlcXVlc3QuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGVuIGRvIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgY29sbGVjdCBjZXJ0YWluIGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IHJlZ2lzdGVyIGZvciBvdXIgbmV3c2xldHRlci5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkhvdyBkbyB3ZSBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHVzZSB2dWxuZXJhYmlsaXR5IHNjYW5uaW5nIGFuZC9vciBzY2FubmluZyB0byBQQ0kgc3RhbmRhcmRzLlxuICAgICAgICAgIFdlIG5ldmVyIGFzayBmb3IgY3JlZGl0IGNhcmQgbnVtYmVycy4gV2UgdXNlIHJlZ3VsYXIgTWFsd2FyZSBTY2FubmluZy5cbiAgICAgICAgICBZb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGNvbnRhaW5lZCBiZWhpbmQgc2VjdXJlZCBuZXR3b3JrcyBhbmQgaXMgb25seSBhY2Nlc3NpYmxlXG4gICAgICAgICAgYnkgYSBsaW1pdGVkIG51bWJlciBvZiBwZXJzb25zIHdobyBoYXZlIHNwZWNpYWwgYWNjZXNzIHJpZ2h0cyB0byBzdWNoIHN5c3RlbXMsIGFuZCBhcmVcbiAgICAgICAgICByZXF1aXJlZCB0byBrZWVwIHRoZSBpbmZvcm1hdGlvbiBjb25maWRlbnRpYWwuIEluIGFkZGl0aW9uLCBhbGwgc2Vuc2l0aXZlIGluZm9ybWF0aW9uXG4gICAgICAgICAgeW91IHN1cHBseSBpcyBlbmNyeXB0ZWQgdmlhIFNlY3VyZSBTb2NrZXQgTGF5ZXIgKFNTTCkgdGVjaG5vbG9neS5cbiAgICAgICAgICBXZSBpbXBsZW1lbnQgYSB2YXJpZXR5IG9mIHNlY3VyaXR5IG1lYXN1cmVzIHdoZW4gYSB1c2VyIGVudGVycywgc3VibWl0cywgb3IgYWNjZXNzZXMgdGhlaXJcbiAgICAgICAgICBpbmZvcm1hdGlvbiB0byBtYWludGFpbiB0aGUgc2FmZXR5IG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EbyB3ZSB1c2UgJmFwb3M7Y29va2llcyZhcG9zOz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBZZXMuIENvb2tpZXMgYXJlIHNtYWxsIGZpbGVzIHRoYXQgYSBzaXRlIG9yIGl0cyBzZXJ2aWNlIHByb3ZpZGVyIHRyYW5zZmVycyB0byB5b3VyXG4gICAgICAgICAgY29tcHV0ZXImYXBvcztzIGhhcmQgZHJpdmUgdGhyb3VnaCB5b3VyIFdlYiBicm93c2VyIHRoYXQgZW5hYmxlcyB0aGVcbiAgICAgICAgICBzaXRlJmFwb3M7cyBvciBzZXJ2aWNlIHByb3ZpZGVyJmFwb3M7cyBzeXN0ZW1zIHRvIHJlY29nbml6ZSB5b3VyIGJyb3dzZXIgYW5kIGNhcHR1cmVcbiAgICAgICAgICBhbmQgcmVtZW1iZXIgY2VydGFpbiBpbmZvcm1hdGlvbi4gVGhleSBhcmUgdXNlZCB0byBoZWxwIHVzIHVuZGVyc3RhbmQgeW91ciBwcmVmZXJlbmNlc1xuICAgICAgICAgIGJhc2VkIG9uIHByZXZpb3VzIG9yIGN1cnJlbnQgc2l0ZSBhY3Rpdml0eSwgd2hpY2ggZW5hYmxlcyB1cyB0byBwcm92aWRlXG4gICAgICAgICAgeW91IHdpdGggaW1wcm92ZWQgc2VydmljZXMuIFdlIGFsc28gdXNlIGNvb2tpZXMgdG8gaGVscCB1cyBjb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0XG4gICAgICAgICAgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uIHNvIHRoYXQgd2UgY2FuIG9mZmVyIGJldHRlciBzaXRlXG4gICAgICAgICAgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XZSB1c2UgY29va2llcyB0bzo8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlVuZGVyc3RhbmQgYW5kIHNhdmUgdXNlciZhcG9zO3MgcHJlZmVyZW5jZXMgZm9yIGZ1dHVyZSB2aXNpdHMuPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBDb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0IHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbnNcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIG9mZmVyIGJldHRlciBzaXRlIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgV2UgbWF5IGFsc28gdXNlIHRydXN0ZWQgdGhpcmQtcGFydHkgc2VydmljZXMgdGhhdCB0cmFjayB0aGlzXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiBvbiBvdXIgYmVoYWxmXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ29va2llcyBhcmUgYW4gaW1wb3J0YW50IHBhcnQgb2Ygb3VyIHdlYnNpdGUgYW5kIHRoZSB3ZWJzaXRlIHdpbGwgbm90IHdvcmtcbiAgICAgICAgICB3aXRob3V0IGhhdmluZyB0aGVtIGVuYWJsZWQuIEJ5IHVzaW5nIG91ciBzaXRlIHlvdSBhbGxvdyB1cyB0byB1c2UgY29va2llcy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGRpc2Nsb3N1cmU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3Qgc2VsbCwgdHJhZGUsIG9yIG90aGVyd2lzZSB0cmFuc2ZlciB0byBvdXRzaWRlXG4gICAgICAgICAgcGFydGllcyB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgbGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBtYXkgYmUgdGhpcmQtcGFydHkgbGlua3MgdG8gcmFkaW8gc3RhdGlvbiB3ZWJzaXRlcyB0aHJvdWdob3V0IG91clxuICAgICAgICAgIHdlYnNpdGUuIFRoZXNlIHRoaXJkLXBhcnR5IHNpdGVzIGhhdmUgc2VwYXJhdGUgYW5kIGluZGVwZW5kZW50IHByaXZhY3kgcG9saWNpZXMuXG4gICAgICAgICAgV2UgdGhlcmVmb3JlIGhhdmUgbm8gcmVzcG9uc2liaWxpdHkgb3IgbGlhYmlsaXR5IGZvciB0aGUgY29udGVudCBhbmRcbiAgICAgICAgICBhY3Rpdml0aWVzIG9mIHRoZXNlIGxpbmtlZCBzaXRlcy4gTm9uZXRoZWxlc3MsIHdlIHNlZWsgdG8gcHJvdGVjdFxuICAgICAgICAgIHRoZSBpbnRlZ3JpdHkgb2Ygb3VyIHNpdGUgYW5kIHdlbGNvbWUgYW55IGZlZWRiYWNrIGFib3V0IHRoZXNlIHNpdGVzLlxuICAgICAgICAgIEFueSBsaW5rIG9uIG91ciBzaXRlIHRvIGEgdGhpcmQgcGFydCB3ZWJzaXRlIHRoYXQgaXMgbm90IHJlbGV2YW50XG4gICAgICAgICAgb3IgaWYgd2UgZGVlbSBpdCBpbmFwcHJvcHJpYXRlLCBtYXkgYmUgcmVtb3ZlZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvb2dsZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgYWR2ZXJ0aXNpbmcgcmVxdWlyZW1lbnRzIGNhbiBiZSBzdW1tZWQgdXAgYnlcbiAgICAgICAgICBHb29nbGUmYXBvcztzIEFkdmVydGlzaW5nIFByaW5jaXBsZXMuIFRoZXkgYXJlIHB1dCBpbiBwbGFjZSB0b1xuICAgICAgICAgIHByb3ZpZGUgYSBwb3NpdGl2ZSBleHBlcmllbmNlIGZvciB1c2Vycy4gaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWR3b3Jkc3BvbGljeS9hbnN3ZXIvMTMxNjU0OD9obD1lblxuXG4gICAgICAgICAgV2UgaGF2ZSBub3QgZW5hYmxlZCBHb29nbGUgQWRTZW5zZSBvbiBvdXIgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNhbGlmb3JuaWEgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3Q8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDYWxPUFBBIGlzIHRoZSBmaXJzdCBzdGF0ZSBsYXcgaW4gdGhlIG5hdGlvbiB0byByZXF1aXJlIGNvbW1lcmNpYWxcbiAgICAgICAgICB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIHRvIHBvc3QgYSBwcml2YWN5IHBvbGljeS5cbiAgICAgICAgICBUaGUgbGF3JmFwb3M7cyByZWFjaCBzdHJldGNoZXMgd2VsbCBiZXlvbmQgQ2FsaWZvcm5pYSB0byByZXF1aXJlIGFueSBwZXJzb24gb3IgY29tcGFueVxuICAgICAgICAgIGluIHRoZSBVbml0ZWQgU3RhdGVzIChhbmQgY29uY2VpdmFibHkgdGhlIHdvcmxkKSB0aGF0IG9wZXJhdGVzIHdlYnNpdGVzIGNvbGxlY3RpbmdcbiAgICAgICAgICBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzIHRvIHBvc3QgYSBjb25zcGljdW91c1xuICAgICAgICAgIHByaXZhY3kgcG9saWN5IG9uIGl0cyB3ZWJzaXRlIHN0YXRpbmcgZXhhY3RseSB0aGUgaW5mb3JtYXRpb24gYmVpbmcgY29sbGVjdGVkIGFuZFxuICAgICAgICAgIHRob3NlIGluZGl2aWR1YWxzIG9yIGNvbXBhbmllcyB3aXRoIHdob20gaXQgaXMgYmVpbmcgc2hhcmVkLiAtIFNlZSBtb3JlIGF0OlxuICAgICAgICAgIGh0dHA6Ly9jb25zdW1lcmNhbC5vcmcvY2FsaWZvcm5pYS1vbmxpbmUtcHJpdmFjeS1wcm90ZWN0aW9uLWFjdC1jYWxvcHBhLyNzdGhhc2guMEZkUmJUNTEuZHB1ZlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+QWNjb3JkaW5nIHRvIENhbE9QUEEsIHdlIGFncmVlIHRvIHRoZSBmb2xsb3dpbmc6PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNlcnMgY2FuIHZpc2l0IG91ciBzaXRlIGFub255bW91c2x5LlxuICAgICAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGEgbGluayB0byBpdCBmcm9tIG91ciBob21lIHBhZ2UgaW4gdGhlIGhlYWRlci5cbiAgICAgICAgICBPdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCAmYXBvcztQcml2YWN5JmFwb3M7IGFuZCBjYW4gZWFzaWx5XG4gICAgICAgICAgYmUgZm91bmQgb24gdGhlIHBhZ2Ugc3BlY2lmaWVkIGFib3ZlLlxuXG4gICAgICAgICAgWW91IHdpbGwgYmUgbm90aWZpZWQgb2YgYW55IFByaXZhY3kgUG9saWN5IGNoYW5nZXM6XG4gICAgICAgICAgICAgICAg4oCiIE9uIG91ciBQcml2YWN5IFBvbGljeSBQYWdlXG4gICAgICAgICAgQ2FuIGNoYW5nZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgIOKAoiBUaHJvdWdoIG91ciB3ZWJzaXRlXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Eb2VzIG91ciBzaXRlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmc/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSXQmYXBvcztzIGltcG9ydGFudCB0byBub3RlIHRoYXQgd2UgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZ1xuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q09QUEEgKENoaWxkcmVuIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gaXQgY29tZXMgdG8gdGhlIGNvbGxlY3Rpb24gb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlblxuICAgICAgICAgIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLCB0aGUgQ2hpbGRyZW4mYXBvcztzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb25cbiAgICAgICAgICBBY3QgKENPUFBBKSBwdXRzIHBhcmVudHMgaW4gY29udHJvbC4gVGhlIEZlZGVyYWwgVHJhZGUgQ29tbWlzc2lvbiwgVW5pdGVkIFN0YXRlcyZhcG9zO1xuICAgICAgICAgIGNvbnN1bWVyIHByb3RlY3Rpb24gYWdlbmN5LCBlbmZvcmNlcyB0aGUgQ09QUEEgUnVsZSwgd2hpY2ggc3BlbGxzIG91dCB3aGF0XG4gICAgICAgICAgb3BlcmF0b3JzIG9mIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgbXVzdCBkbyB0byBwcm90ZWN0IGNoaWxkcmVuJmFwb3M7c1xuICAgICAgICAgIHByaXZhY3kgYW5kIHNhZmV0eSBvbmxpbmUuXG5cbiAgICAgICAgICBXZSBkbyBub3Qgc3BlY2lmaWNhbGx5IG1hcmtldCB0byBjaGlsZHJlbiB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIFByaW5jaXBsZXMgZm9ybSB0aGUgYmFja2JvbmUgb2YgcHJpdmFjeVxuICAgICAgICAgIGxhdyBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQgdGhlIGNvbmNlcHRzIHRoZXkgaW5jbHVkZSBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50XG4gICAgICAgICAgcm9sZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2YgZGF0YSBwcm90ZWN0aW9uIGxhd3MgYXJvdW5kIHRoZSBnbG9iZS4gVW5kZXJzdGFuZGluZ1xuICAgICAgICAgIHRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlIFByaW5jaXBsZXMgYW5kIGhvdyB0aGV5IHNob3VsZCBiZSBpbXBsZW1lbnRlZCBpc1xuICAgICAgICAgIGNyaXRpY2FsIHRvIGNvbXBseSB3aXRoIHRoZSB2YXJpb3VzIHByaXZhY3kgbGF3cyB0aGF0IHByb3RlY3QgcGVyc29uYWwgaW5mb3JtYXRpb24uXG5cbiAgICAgICAgICBJbiBvcmRlciB0byBiZSBpbiBsaW5lIHdpdGggRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgd2Ugd2lsbCB0YWtlIHRoZVxuICAgICAgICAgIGZvbGxvd2luZyByZXNwb25zaXZlIGFjdGlvbiwgc2hvdWxkIGEgZGF0YSBicmVhY2ggb2NjdXI6XG5cbiAgICAgICAgICBXZSB3aWxsIG5vdGlmeSB5b3UgdmlhIGVtYWlsIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuIFdlIHdpbGwgYWxzb1xuICAgICAgICAgIG5vdGlmeSB1c2VycyB2aWEgYW4gaW4tc2l0ZSBub3RpZmljYXRpb24gb24gdGhlIGhvbWUgcGFnZSB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLlxuXG4gICAgICAgICAgV2UgYWxzbyBhZ3JlZSB0byB0aGUgSW5kaXZpZHVhbCBSZWRyZXNzIFByaW5jaXBsZSB3aGljaCByZXF1aXJlcyB0aGF0IGluZGl2aWR1YWxzXG4gICAgICAgICAgaGF2ZSB0aGUgcmlnaHQgdG8gbGVnYWxseSBwdXJzdWUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSBjb2xsZWN0b3JzXG4gICAgICAgICAgYW5kIHByb2Nlc3NvcnMgd2hvIGZhaWwgdG8gYWRoZXJlIHRvIHRoZSBsYXcuIFRoaXMgcHJpbmNpcGxlIHJlcXVpcmVzIG5vdCBvbmx5XG4gICAgICAgICAgdGhhdCBpbmRpdmlkdWFscyBoYXZlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgdXNlcnMsIGJ1dCBhbHNvIHRoYXRcbiAgICAgICAgICBpbmRpdmlkdWFscyBoYXZlIHJlY291cnNlIHRvIGNvdXJ0cyBvciBnb3Zlcm5tZW50IGFnZW5jaWVzIHRvIGludmVzdGlnYXRlXG4gICAgICAgICAgYW5kL29yIHByb3NlY3V0ZSBub24tY29tcGxpYW5jZSBieSBkYXRhIHByb2Nlc3NvcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwiaW1wb3J0IEltcHJpbnQgZnJvbSAnLi9pbXByaW50JztcblxuY29uc3QgSW1wcmludENvbnRhaW5lciA9IEltcHJpbnQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBJbXByaW50Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbXByaW50Lmxlc3MnO1xuXG5jb25zdCBJbXByaW50ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbXByaW50Q29udGVudH0+XG4gICAgICA8aDE+SW1wcmludDwvaDE+XG4gICAgICA8ZGl2PkNvbXBhbnkgTmFtZTogVkFTVCBORVRXT1JLIExURDwvZGl2PlxuICAgICAgPGRpdj5NYW5hZ2luZyBEaXJlY3RvcjogTWFydGluIERhd3NvbjwvZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzOiAyNiBDYWxkZXJWaWV3LCBSYXN0cmljaywgQnJpZ2hvdXNlLCBIRDYzRFEgVW5pdGVkIEtpbmdkb208L2Rpdj5cbiAgICAgIDxkaXY+VGVsZXBob25lOiArKDQ0KTc0NzM1OTEwOTc8L2Rpdj5cbiAgICAgIDxkaXY+RW1haWwgYWRkcmVzczogaW5mb0ByZWdnZXN0LmNvbTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbXByaW50Q29udGVudFwiOlwiQ29tcG9uZW50cy1mb290ZXItaW1wcmludF9faW1wcmludENvbnRlbnQtLTE1ckxNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgZmxhdHRlblByb3AgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vZXJyb3JQYWdlJztcblxuY29uc3QgY3JlYXRlUHJvcHMgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIDQwNDpcbiAgICAgIHJldHVybiB7IGVycm9yOiAnVGhlIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLicgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyhjcmVhdGVQcm9wcyksXG4pO1xuXG5jb25zdCBFcnJvclBhZ2VDb250YWluZXIgPSBlbmhhbmNlKEVycm9yUGFnZSk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcmVuZGVyOiAoeyBwcm9wcyB9KSA9PiBwcm9wcyAmJiAoXG4gICAgPEVycm9yUGFnZUNvbnRhaW5lclxuICAgICAgc3RhdHVzPXtwYXJzZUludChwcm9wcy5wYXJhbXMuc3RhdHVzLCAxMCl9XG4gICAgICBlcnJvcj17cHJvcHMubG9jYXRpb24uc3RhdGUuZXJyb3J9XG4gICAgLz5cbiAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3JQYWdlLmxlc3MnO1xuXG5jb25zdCBFcnJvclBhZ2UgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9PlxuICAgIDxoMT5FcnJvciB7c3RhdHVzfTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L2Rpdj5cbiAgICAgIFdlIGhhdmUgYmVlbiBub3RpZmllZCBvZiB0aGUgZXJyb3Igwq9cXF8o44OEKV8vwq8uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRXJyb3JQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkLicsXG59O1xuXG5FcnJvclBhZ2UucHJvcFR5cGVzID0ge1xuICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHF1b3RhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JQYWdlXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yUGFnZS0tMWFTLXpcIixcImVycm9yXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yLS02MktaQ1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSAnLi9wcmltYXJ5TGF5b3V0JztcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcmltYXJ5TGF5b3V0Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ByaW1hcnlMYXlvdXQubGVzcyc7XG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4uLy4uL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXInO1xuaW1wb3J0IFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGZyb20gJy4vcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnknO1xuaW1wb3J0IERpc3BsYXlUeXBlIGZyb20gJy4uLy4uL3NoYXJlZC9kaXNwbGF5VHlwZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IFBvcHVwcyBmcm9tICcuLi8uLi9zaGFyZWQvcG9wdXAvcG9wdXBzQ29udGFpbmVyJztcblxuY29uc3QgUHJpbWFyeUxheW91dCA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4gKFxuICA8RGlzcGxheVR5cGU+XG4gICAgeyhkaXNwbGF5VHlwZSkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheVR5cGVDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICBkaXNwbGF5VHlwZS5pc01vYmlsZSAmJiAnbW9iaWxlJyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNUYWJsZXQgJiYgJ3RhYmxldCcsXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzRGVza3RvcCAmJiAnZGVza3RvcCcsXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UHJpbWFyeUxheW91dEVycm9yQm91bmRhcnlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZGlzcGxheVR5cGVDbGFzc05hbWUsIHN0eWxlcy5wcmltYXJ5TGF5b3V0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9e3N0eWxlcy5yZWdnZXN0fT5yZWdnZXN0PC9MaW5rPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPFBvcHVwcyAvPlxuICAgICAgICAgIDxDb29raWVOb3RpY2UgLz5cbiAgICAgICAgPC9QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbiAgICAgICk7XG4gICAgfX1cbiAgPC9EaXNwbGF5VHlwZT5cbik7XG5cblByaW1hcnlMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cblByaW1hcnlMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInByaW1hcnlMYXlvdXRcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3ByaW1hcnlMYXlvdXQtLTNGVmpiXCIsXCJ3cmFwXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X193cmFwLS0zT3YzOFwiLFwibWFpblwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fbWFpbi0tMUc2YTFcIixcInJlZ2dlc3RcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3JlZ2dlc3QtLVJJSFNDXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IENvb2tpZU5vdGljZSBmcm9tICcuL2Nvb2tpZU5vdGljZSc7XG5pbXBvcnQgeyBzaG93UG9wdXAgfSBmcm9tICcuLi9zaGFyZWQvcG9wdXAvYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBzaG93UG9wdXAgfSkoQ29va2llTm90aWNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jbGFzcyBDb29raWVOb3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjb29raWVOb3RpY2VTaG93biA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb29raWVOb3RpY2VTaG93bicpO1xuXG4gICAgaWYgKCFjb29raWVOb3RpY2VTaG93bikge1xuICAgICAgdGhpcy5wcm9wcy5zaG93UG9wdXAoJ1RoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZ2l2ZSB5b3UgdGhlIGJlc3QgdXNlciBleHBlcmllbmNlLCBieSBjb250aW51aW5nIHRvIHVzZSB0aGUgc2l0ZSB5b3UgYXJlIGFncmVlaW5nIHRvIG91ciB1c2Ugb2YgY29va2llcy4nLCAxNTAwMCk7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVOb3RpY2VTaG93bicsIHRydWUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuQ29va2llTm90aWNlLnByb3BUeXBlcyA9IHtcbiAgc2hvd1BvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llTm90aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdmb3VuZCc7XG5cbmNsYXNzIFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgLy8gdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Vycm9yLzUwMCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuXG5jbGFzcyBEaXNwbGF5VHlwZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXlUeXBlOiAnZGVza3RvcCcsXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheVR5cGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgfVxuXG4gIGdldERpc3BsYXlUeXBlID0gKHdpbmRvd1dpZHRoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludE1vYmlsZS52YWx1ZSkge1xuICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRUYWJsZXQudmFsdWUpIHtcbiAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2Rlc2t0b3AnO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVR5cGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gdGhpcy5nZXREaXNwbGF5VHlwZSh3aW5kb3dXaWR0aCk7XG5cbiAgICBpZiAoZGlzcGxheVR5cGUgIT09IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5VHlwZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB7XG4gICAgICBpc01vYmlsZTogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ21vYmlsZScsXG4gICAgICBpc1RhYmxldDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ3RhYmxldCcsXG4gICAgICBpc0Rlc2t0b3A6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdkZXNrdG9wJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oZGlzcGxheVR5cGUpO1xuICB9XG59XG5cbkRpc3BsYXlUeXBlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Rpc3BsYXlUeXBlLmpzIiwiY29uc3Qgc2l6ZXMgPSB7XG4gIGJyZWFrcG9pbnRNb2JpbGU6IHsgdmFsdWU6IDc2OCwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50VGFibGV0OiB7IHZhbHVlOiA5OTIsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludERlc2t0b3A6IHsgdmFsdWU6IDEyMDAsIHVuaXQ6ICdweCcgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpemVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5sZXNzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgPExpbmsgdG89XCIvdGVybXNBbmRDb25kaXRpb25zXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L0xpbms+XG4gICAgPExpbmsgdG89XCIvcHJpdmFjeVBvbGljeVwiPnByaXZhY3kgcG9saWN5PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2ltcHJpbnRcIj5pbXByaW50PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvb3RlclwiOlwiQ29tcG9uZW50cy1mb290ZXItZm9vdGVyX19mb290ZXItLTNTMW40XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUG9wdXBzIGZyb20gJy4vcG9wdXBzJztcbmltcG9ydCB7IGhpZGVQb3B1cCB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHBvcHVwIH0pID0+ICh7XG4gIHBvcHVwczogcG9wdXAucG9wdXBzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gIGhpZGVQb3B1cCxcbn0pKFBvcHVwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwcy5sZXNzJztcblxuY29uc3QgUG9wdXBzID0gKHsgcG9wdXBzLCBoaWRlUG9wdXAgfSkgPT4gKFxuICBwb3B1cHMubGVuZ3RoID4gMCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwc30+XG4gICAgICB7cG9wdXBzLm1hcCgocG9wdXAsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIGtleT17cG9wdXAuaWR9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHRleHQ9e3BvcHVwLnRleHR9XG4gICAgICAgICAgaGlkZVBvcHVwPXtoaWRlUG9wdXB9XG4gICAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93PXtwb3B1cC5taWxsaXNlY29uZHNUb1Nob3d9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj4pXG4gICAgOiBudWxsXG4pO1xuXG5Qb3B1cHMucHJvcFR5cGVzID0ge1xuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvcHVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBtaWxsaXNlY29uZHNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwLmxlc3MnO1xuXG5jbGFzcyBQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9wcy5oaWRlUG9wdXAodGhpcy5wcm9wcy5pbmRleCksIHRoaXMucHJvcHMubWlsbGlzZWNvbmRzVG9TaG93KTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9PlxuICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Qb3B1cC5wcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGlkZVBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtaWxsaXNlY29uZHNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwb3B1cFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBfX3BvcHVwLS0yNE9ZTVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwb3B1cHNcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBvcHVwLXBvcHVwc19fcG9wdXBzLS0xbTFLRVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBwb3B1cHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gWy4uLnN0YXRlLnBvcHVwcywge1xuICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93OiBhY3Rpb24ubWlsbGlzZWNvbmRzVG9TaG93LFxuICAgICAgfV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdISURFX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gc3RhdGUucG9wdXBzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uLCB2YXJpYWJsZXMpID0+XG4gIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2FwcC9hcHAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
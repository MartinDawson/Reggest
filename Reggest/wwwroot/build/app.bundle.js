webpackJsonp([0],{

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitnessPlans":"Components-fitness-fitnessPlans__fitnessPlans--3dMGi","fitnessPlan":"Components-fitness-fitnessPlans__fitnessPlan--3Q3MO","fitnessPlanRanked":"Components-fitness-fitnessPlans__fitnessPlanRanked--2VMpf","stats":"Components-fitness-fitnessPlans__stats--4Wfxt","name":"Components-fitness-fitnessPlans__name--1FlPc","description":"Components-fitness-fitnessPlans__description--1039g","daysPerWeek":"Components-fitness-fitnessPlans__daysPerWeek--2AuuV","timePerWorkout":"Components-fitness-fitnessPlans__timePerWorkout--3xzNv","label":"Components-fitness-fitnessPlans__label--3adgd","answers":"Components-fitness-fitnessPlans__answers--ez8sk"};

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideModal = exports.showModal = undefined;

var _scrollLock = __webpack_require__(736);

var showModal = exports.showModal = function showModal(id, variables) {
  (0, _scrollLock.disableBodyScroll)();

  return {
    type: 'SHOW_MODAL',
    id: id,
    variables: variables
  };
};

var hideModal = exports.hideModal = function hideModal() {
  (0, _scrollLock.resetBodyScroll)();

  return {
    type: 'HIDE_MODAL'
  };
};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(739);

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

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 407f94da728fa1b5881f8972d606e8bd
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type variationPlansContainer_fitnessPlan$ref = any;
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
            +description: ?string,
            +daysPerWeek: number,
            +timeToWorkout: ?{|
              +hours: ?number,
              +minutes: ?number,
            |},
            +$fragmentRefs: variationPlansContainer_fitnessPlan$ref,
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
            description
            daysPerWeek
            timeToWorkout {
              hours
              minutes
            }
            ...variationPlansContainer_fitnessPlan
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

fragment variationPlansContainer_fitnessPlan on FitnessPlan {
  variationPlans {
    fitnessPlanId
    daysPerWeek
    id
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
    "name": "description",
    "args": null,
    "storageKey": null
  },
      v6 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "daysPerWeek",
    "args": null,
    "storageKey": null
  },
      v7 = {
    "kind": "LinkedField",
    "alias": null,
    "name": "timeToWorkout",
    "storageKey": null,
    "args": null,
    "concreteType": "TimeToWorkout",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "hours",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "minutes",
      "args": null,
      "storageKey": null
    }]
  },
      v8 = {
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
    "text": "mutation submitAnswerMutation(\n  $input: SubmitAnswerInput!\n) {\n  submitAnswer(input: $input) {\n    answer {\n      points\n      question {\n        fitnessPlanAnswerPoints {\n          points\n          fitnessPlan {\n            fitnessPlanId\n            name\n            description\n            daysPerWeek\n            timeToWorkout {\n              hours\n              minutes\n            }\n            ...variationPlansContainer_fitnessPlan\n            id\n          }\n          id\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment variationPlansContainer_fitnessPlan on FitnessPlan {\n  variationPlans {\n    fitnessPlanId\n    daysPerWeek\n    id\n  }\n}\n",
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
                "selections": [v3, v4, v5, v6, v7, {
                  "kind": "FragmentSpread",
                  "name": "variationPlansContainer_fitnessPlan",
                  "args": null
                }]
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
                "selections": [v3, v4, v5, v6, v7, {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "variationPlans",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "FitnessPlan",
                  "plural": true,
                  "selections": [v3, v6, v8]
                }, v8]
              }, v8]
            }, v8]
          }, v8]
        }]
      }]
    }
  };
}();
node /*: any*/.hash = 'cfda04c5dbde357bcfb0fd4c6d5f185d';
module.exports = node;

/***/ }),

/***/ 298:
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

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluralize = __webpack_require__(731);

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (time) {
  var newTime = '';

  if (time.hours) {
    newTime += (0, _pluralize2.default)('hour', time.hours, true);

    if (time.minutes) {
      newTime += ' ';
    }
  }

  if (time.minutes) {
    newTime += (0, _pluralize2.default)('minute', time.minutes, true);
  }

  return newTime;
};

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(19);

var _relayCompose = __webpack_require__(47);

var _reactRelay = __webpack_require__(45);

var _variationPlans = __webpack_require__(732);

var _variationPlans2 = _interopRequireDefault(_variationPlans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  fitnessPlan: function fitnessPlan() {
    var node = __webpack_require__(301);

    if (node.hash && node.hash !== '49bdd88b073898f4fbe1c1426f19c44f') {
      console.error('The definition of \'variationPlansContainer_fitnessPlan\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(301);
  }
};

exports.default = (0, _recompose.compose)((0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('fitnessPlan'), (0, _recompose.branch)(function (props) {
  return props.variationPlans.length === 0;
}, _recompose.renderNothing))(_variationPlans2.default);

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type variationPlansContainer_fitnessPlan$ref: FragmentReference;
export type variationPlansContainer_fitnessPlan = {|
  +variationPlans: ?$ReadOnlyArray<?{|
    +fitnessPlanId: number,
    +daysPerWeek: number,
  |}>,
  +$refType: variationPlansContainer_fitnessPlan$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "variationPlansContainer_fitnessPlan",
  "type": "FitnessPlan",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "variationPlans",
    "storageKey": null,
    "args": null,
    "concreteType": "FitnessPlan",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "fitnessPlanId",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "daysPerWeek",
      "args": null,
      "storageKey": null
    }]
  }]
};
node /*: any*/.hash = '49bdd88b073898f4fbe1c1426f19c44f';
module.exports = node;

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
type variationPlansContainer_fitnessPlan$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type fitnessPlansContainer$ref: FragmentReference;
export type fitnessPlansContainer = {|
  +fitnessPlans: ?$ReadOnlyArray<?{|
    +fitnessPlanId: number,
    +name: ?string,
    +description: ?string,
    +daysPerWeek: number,
    +timeToWorkout: ?{|
      +hours: ?number,
      +minutes: ?number,
    |},
    +$fragmentRefs: variationPlansContainer_fitnessPlan$ref,
  |}>,
  +$refType: fitnessPlansContainer$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "fitnessPlansContainer",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [{
    "kind": "LinkedField",
    "alias": null,
    "name": "fitnessPlans",
    "storageKey": null,
    "args": null,
    "concreteType": "FitnessPlan",
    "plural": true,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "fitnessPlanId",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "daysPerWeek",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "timeToWorkout",
      "storageKey": null,
      "args": null,
      "concreteType": "TimeToWorkout",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "hours",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "minutes",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "variationPlansContainer_fitnessPlan",
      "args": null
    }]
  }]
};
node /*: any*/.hash = '7e261a988cf680cb717b7e1700c8b05e';
module.exports = node;

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable */



/*::
import type { ConcreteFragment } from 'relay-runtime';
type fitnessPlansContainer$ref = any;
type qAndAContainer_question$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type fitnessContainer$ref: FragmentReference;
export type fitnessContainer = {|
  +questionByIndex: ?{|
    +$fragmentRefs: qAndAContainer_question$ref,
  |},
  +$fragmentRefs: fitnessPlansContainer$ref,
  +$refType: fitnessContainer$ref,
|};
*/

var node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "fitnessContainer",
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
      "kind": "FragmentSpread",
      "name": "qAndAContainer_question",
      "args": null
    }]
  }, {
    "kind": "FragmentSpread",
    "name": "fitnessPlansContainer",
    "args": null
  }]
};
node /*: any*/.hash = '08e3b254020159f63f918851347d8efa';
module.exports = node;

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash c0949a449faf36c4c73464c72e666ce6
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessContainer$ref = any;
export type fitnessContainerRefetchQueryVariables = {|
  questionIndex?: ?number,
|};
export type fitnessContainerRefetchQueryResponse = {|
  +$fragmentRefs: fitnessContainer$ref,
|};
*/

/*
query fitnessContainerRefetchQuery(
  $questionIndex: Int
) {
  ...fitnessContainer
}

fragment fitnessContainer on Query {
  questionByIndex(index: $questionIndex) {
    ...qAndAContainer_question
    id
  }
  ...fitnessPlansContainer
}

fragment qAndAContainer_question on Question {
  questionText
  answers {
    answerId
    answerText
    id
  }
}

fragment fitnessPlansContainer on Query {
  fitnessPlans {
    fitnessPlanId
    name
    description
    daysPerWeek
    timeToWorkout {
      hours
      minutes
    }
    ...variationPlansContainer_fitnessPlan
    id
  }
}

fragment variationPlansContainer_fitnessPlan on FitnessPlan {
  variationPlans {
    fitnessPlanId
    daysPerWeek
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
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "fitnessPlanId",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "daysPerWeek",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "fitnessContainerRefetchQuery",
    "id": null,
    "text": "query fitnessContainerRefetchQuery(\n  $questionIndex: Int\n) {\n  ...fitnessContainer\n}\n\nfragment fitnessContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    ...qAndAContainer_question\n    id\n  }\n  ...fitnessPlansContainer\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans {\n    fitnessPlanId\n    name\n    description\n    daysPerWeek\n    timeToWorkout {\n      hours\n      minutes\n    }\n    ...variationPlansContainer_fitnessPlan\n    id\n  }\n}\n\nfragment variationPlansContainer_fitnessPlan on FitnessPlan {\n  variationPlans {\n    fitnessPlanId\n    daysPerWeek\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "fitnessContainerRefetchQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "fitnessContainer",
        "args": null
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "fitnessContainerRefetchQuery",
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
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "fitnessPlans",
        "storageKey": null,
        "args": null,
        "concreteType": "FitnessPlan",
        "plural": true,
        "selections": [v2, {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        }, v3, {
          "kind": "LinkedField",
          "alias": null,
          "name": "timeToWorkout",
          "storageKey": null,
          "args": null,
          "concreteType": "TimeToWorkout",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "hours",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "minutes",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "variationPlans",
          "storageKey": null,
          "args": null,
          "concreteType": "FitnessPlan",
          "plural": true,
          "selections": [v2, v3, v1]
        }, v1]
      }]
    }
  };
}();
node /*: any*/.hash = '1aa5be760fb74c0eed48f257d3fe6067';
module.exports = node;

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 961f534d085350902d1ca1eba487db30
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
type fitnessContainer$ref = any;
type fitnessPlansContainer$ref = any;
export type fitnessContainerQueryVariables = {|
  questionIndex?: ?number,
|};
export type fitnessContainerQueryResponse = {|
  +$fragmentRefs: (fitnessContainer$ref & fitnessPlansContainer$ref),
|};
*/

/*
query fitnessContainerQuery(
  $questionIndex: Int
) {
  ...fitnessContainer
  ...fitnessPlansContainer
}

fragment fitnessContainer on Query {
  questionByIndex(index: $questionIndex) {
    ...qAndAContainer_question
    id
  }
  ...fitnessPlansContainer
}

fragment fitnessPlansContainer on Query {
  fitnessPlans {
    fitnessPlanId
    name
    description
    daysPerWeek
    timeToWorkout {
      hours
      minutes
    }
    ...variationPlansContainer_fitnessPlan
    id
  }
}

fragment variationPlansContainer_fitnessPlan on FitnessPlan {
  variationPlans {
    fitnessPlanId
    daysPerWeek
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
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "fitnessPlanId",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "daysPerWeek",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "fitnessContainerQuery",
    "id": null,
    "text": "query fitnessContainerQuery(\n  $questionIndex: Int\n) {\n  ...fitnessContainer\n  ...fitnessPlansContainer\n}\n\nfragment fitnessContainer on Query {\n  questionByIndex(index: $questionIndex) {\n    ...qAndAContainer_question\n    id\n  }\n  ...fitnessPlansContainer\n}\n\nfragment fitnessPlansContainer on Query {\n  fitnessPlans {\n    fitnessPlanId\n    name\n    description\n    daysPerWeek\n    timeToWorkout {\n      hours\n      minutes\n    }\n    ...variationPlansContainer_fitnessPlan\n    id\n  }\n}\n\nfragment variationPlansContainer_fitnessPlan on FitnessPlan {\n  variationPlans {\n    fitnessPlanId\n    daysPerWeek\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerId\n    answerText\n    id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "fitnessContainerQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "fitnessContainer",
        "args": null
      }, {
        "kind": "FragmentSpread",
        "name": "fitnessPlansContainer",
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
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "fitnessPlans",
        "storageKey": null,
        "args": null,
        "concreteType": "FitnessPlan",
        "plural": true,
        "selections": [v2, {
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "description",
          "args": null,
          "storageKey": null
        }, v3, {
          "kind": "LinkedField",
          "alias": null,
          "name": "timeToWorkout",
          "storageKey": null,
          "args": null,
          "concreteType": "TimeToWorkout",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "hours",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "minutes",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "variationPlans",
          "storageKey": null,
          "args": null,
          "concreteType": "FitnessPlan",
          "plural": true,
          "selections": [v2, v3, v1]
        }, v1]
      }]
    }
  };
}();
node /*: any*/.hash = 'e564f3b58664fcc2a2770c3c111b4b4f';
module.exports = node;

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationErrors = __webpack_require__(316);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationField = function ValidationField(_ref) {
  var children = _ref.children,
      error = _ref.error,
      touched = _ref.touched,
      className = _ref.className;

  var errors = error;

  if (!Array.isArray(error)) {
    errors = [error];
  }

  return _react2.default.createElement(
    'div',
    { className: className },
    children,
    touched ? _react2.default.createElement(_validationErrors2.default, { errors: errors }) : null
  );
};

ValidationField.defaultProps = {
  error: null,
  className: null
};

ValidationField.propTypes = {
  children: _propTypes2.default.node.isRequired,
  touched: _propTypes2.default.bool.isRequired,
  error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
  className: _propTypes2.default.string
};

exports.default = ValidationField;

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(784);

var _validationError2 = _interopRequireDefault(_validationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Errors = function Errors(_ref) {
  var errors = _ref.errors;
  return errors.length ? _react2.default.createElement(
    'div',
    null,
    errors.map(function (error) {
      return _react2.default.createElement(_validationError2.default, { key: error, error: error });
    })
  ) : null;
};

Errors.propTypes = {
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired
};

exports.default = Errors;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 7883d2d02d17d10e85f9877da68ef47e
 */

/* eslint-disable */



/*::
import type { ConcreteRequest } from 'relay-runtime';
export type subscribeNewsletterMutationVariables = {|
  input: {
    clientMutationId?: ?string,
    email: string,
    recaptcha: string,
  },
|};
export type subscribeNewsletterMutationResponse = {|
  +subscribeNewsletter: ?{|
    +clientMutationId: ?string,
  |},
|};
*/

/*
mutation subscribeNewsletterMutation(
  $input: SubscribeNewsletterInput!
) {
  subscribeNewsletter(input: $input) {
    clientMutationId
  }
}
*/

var node /*: ConcreteRequest*/ = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SubscribeNewsletterInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "subscribeNewsletter",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SubscribeNewsletterInput!"
    }],
    "concreteType": "SubscribeNewsletterPayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "clientMutationId",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "subscribeNewsletterMutation",
    "id": null,
    "text": "mutation subscribeNewsletterMutation(\n  $input: SubscribeNewsletterInput!\n) {\n  subscribeNewsletter(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "subscribeNewsletterMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "subscribeNewsletterMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();
node /*: any*/.hash = '4c9823bf5c166e8b655c0f228e629154';
module.exports = node;

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(320);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(333);

var _app = __webpack_require__(335);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(804);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _foundRelay = __webpack_require__(351);

var _reactCookie = __webpack_require__(235);

var _router = __webpack_require__(475);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(488);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(803);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolver = new _foundRelay.Resolver(_environment2.default);

var App = function App() {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _reactCookie.CookiesProvider,
      null,
      _react2.default.createElement(_router2.default, { matchContext: { store: _store2.default }, resolver: resolver })
    )
  );
};

exports.default = App;

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(142);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(147);

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

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(20);

var _reduxThunk = __webpack_require__(489);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(148);

var _foundReducer = __webpack_require__(161);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(71);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(162);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(282);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(283);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(163);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(164);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(667);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(800);

var _reducer2 = _interopRequireDefault(_reducer);

var _reducer3 = __webpack_require__(801);

var _reducer4 = _interopRequireDefault(_reducer3);

var _reducer5 = __webpack_require__(802);

var _reducer6 = _interopRequireDefault(_reducer5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

var middleWare = composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  form: _reduxForm.reducer,
  popup: _reducer2.default,
  modal: _reducer6.default,
  user: _reducer4.default
});

var store = (0, _redux.createStore)(reducers, {}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(284);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(285);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(671);

var _termsAndConditionsContainer = __webpack_require__(737);

var _privacyPolicyContainer = __webpack_require__(740);

var _imprintContainer = __webpack_require__(742);

var _errorPageContainer = __webpack_require__(745);

var _primaryLayoutContainer = __webpack_require__(748);

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

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(12);

var _reactRelay = __webpack_require__(45);

var _recompose = __webpack_require__(19);

var _relayCompose = __webpack_require__(47);

var _reactCookie = __webpack_require__(235);

var _fitness = __webpack_require__(722);

var _fitness2 = _interopRequireDefault(_fitness);

var _actions = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  data: function data() {
    var node = __webpack_require__(303);

    if (node.hash && node.hash !== '08e3b254020159f63f918851347d8efa') {
      console.error('The definition of \'fitnessContainer\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(303);
  }
};

var refetchQuery = function refetchQuery() {
  var node = __webpack_require__(304);

  if (node.hash && node.hash !== '1aa5be760fb74c0eed48f257d3fe6067') {
    console.error('The definition of \'fitnessContainerRefetchQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(304);
};

var query = function query() {
  var node = __webpack_require__(305);

  if (node.hash && node.hash !== 'e564f3b58664fcc2a2770c3c111b4b4f') {
    console.error('The definition of \'fitnessContainerQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(305);
};

var handlers = {
  getNextQuestion: function getNextQuestion(_ref) {
    var relay = _ref.relay;
    return function (questionIndex) {
      return relay.refetch({ questionIndex: questionIndex });
    };
  }
};

var FitnessContainer = (0, _recompose.compose)((0, _reactRedux.connect)(), _reactCookie.withCookies, (0, _relayCompose.refetchContainer)(fragments, refetchQuery), (0, _recompose.withProps)(function (props) {
  return {
    hasQuestion: props.data.questionByIndex !== null
  };
}), (0, _recompose.lifecycle)({
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.hasQuestion !== this.props.hasQuestion && !nextProps.hasQuestion) {
      var newsletterPopupShown = this.props.cookies.get('newsletterPopupShown');

      if (!newsletterPopupShown) {
        this.props.dispatch((0, _actions.showModal)('fitnessPlans'));
        var expires = new Date();

        expires.setDate(expires.getDate() + 15);

        this.props.cookies.set('newsletterPopupShown', true, {
          expires: expires
        });
      }
    }
  }
}), (0, _recompose.withHandlers)(handlers))(_fitness2.default);

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer,
  query: query,
  render: function render(_ref2) {
    var props = _ref2.props;
    return props && _react2.default.createElement(FitnessContainer, { data: props });
  }
};

exports.default = FitnessContainer;

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndAContainer = __webpack_require__(723);

var _qAndAContainer2 = _interopRequireDefault(_qAndAContainer);

var _fitnessPlansContainer = __webpack_require__(729);

var _fitnessPlansContainer2 = _interopRequireDefault(_fitnessPlansContainer);

var _fitness = __webpack_require__(733);

var _fitness2 = _interopRequireDefault(_fitness);

var _fitnessPlansRankedContainer = __webpack_require__(734);

var _fitnessPlansRankedContainer2 = _interopRequireDefault(_fitnessPlansRankedContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fitness = function Fitness(props) {
  return _react2.default.createElement(
    'div',
    { className: _fitness2.default.fitness },
    _react2.default.createElement(
      'div',
      null,
      props.hasQuestion ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: _fitness2.default.title },
          _react2.default.createElement(
            'div',
            null,
            'let\'s suggest a fitness plan for you.'
          ),
          _react2.default.createElement(
            'div',
            null,
            'simply answer a few questions...'
          )
        ),
        _react2.default.createElement(_qAndAContainer2.default, { question: props.data.questionByIndex, getNextQuestion: props.getNextQuestion }),
        _react2.default.createElement(
          'div',
          { className: _fitness2.default.title },
          'or see all certified fitness plans'
        ),
        _react2.default.createElement(_fitnessPlansContainer2.default, { data: props.data })
      ) : _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: _fitness2.default.title },
          _react2.default.createElement(
            'div',
            null,
            'Your suggested fitness plans.'
          )
        ),
        _react2.default.createElement(_fitnessPlansRankedContainer2.default, null)
      )
    )
  );
};

Fitness.propTypes = {
  hasQuestion: _propTypes2.default.bool.isRequired,
  getNextQuestion: _propTypes2.default.func.isRequired,
  data: _propTypes2.default.shape({
    questionByIndex: _propTypes2.default.object
  }).isRequired
};

exports.default = Fitness;

/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(45);

var _recompose = __webpack_require__(19);

var _reactRedux = __webpack_require__(12);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _relayCompose = __webpack_require__(47);

var _qAndA = __webpack_require__(724);

var _qAndA2 = _interopRequireDefault(_qAndA);

var _submitAnswerMutation = __webpack_require__(727);

var _submitAnswerMutation2 = _interopRequireDefault(_submitAnswerMutation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionIndex = 0;

var handlers = {
  answerOnClick: function answerOnClick(_ref) {
    var dispatch = _ref.dispatch,
        getNextQuestion = _ref.getNextQuestion;
    return function (id) {
      questionIndex += 1;
      (0, _submitAnswerMutation2.default)(id, dispatch);
      getNextQuestion(questionIndex);
    };
  }
};

var fragments = {
  question: function question() {
    var node = __webpack_require__(298);

    if (node.hash && node.hash !== 'c08fdc305d8731938647f226ed0b0105') {
      console.error('The definition of \'qAndAContainer_question\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(298);
  }
};

var propTypes = {
  getNextQuestion: _propTypes2.default.func.isRequired
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)(propTypes), (0, _reactRedux.connect)(), (0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('question'), (0, _recompose.withHandlers)(handlers))(_qAndA2.default);

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(725);

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

/***/ 725:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"qAndA":"Components-qAndA-qAndA__qAndA--3LZkn","question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answers":"Components-qAndA-qAndA__answers--19WMc","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRelay = __webpack_require__(45);

var _relayCompose = __webpack_require__(47);

var _actions = __webpack_require__(728);

var mutation = function mutation() {
  var node = __webpack_require__(297);

  if (node.hash && node.hash !== 'cfda04c5dbde357bcfb0fd4c6d5f185d') {
    console.error('The definition of \'submitAnswerMutation\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(297);
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
      return _extends({
        points: x.points
      }, x.fitnessPlan);
    });

    dispatch((0, _actions.rankFitnessPlans)(fitnessPlansPoints, points));
  });
};

/***/ }),

/***/ 728:
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

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(19);

var _relayCompose = __webpack_require__(47);

var _reactRelay = __webpack_require__(45);

var _fitnessPlans = __webpack_require__(730);

var _fitnessPlans2 = _interopRequireDefault(_fitnessPlans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  data: function data() {
    var node = __webpack_require__(302);

    if (node.hash && node.hash !== '7e261a988cf680cb717b7e1700c8b05e') {
      console.error('The definition of \'fitnessPlansContainer\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(302);
  }
};

exports.default = (0, _recompose.compose)((0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('data'))(_fitnessPlans2.default);

/***/ }),

/***/ 730:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fitnessPlans = __webpack_require__(177);

var _fitnessPlans2 = _interopRequireDefault(_fitnessPlans);

var _convertTimeToWorkout = __webpack_require__(299);

var _convertTimeToWorkout2 = _interopRequireDefault(_convertTimeToWorkout);

var _variationPlansContainer = __webpack_require__(300);

var _variationPlansContainer2 = _interopRequireDefault(_variationPlansContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessPlans = function FitnessPlans(_ref) {
  var fitnessPlans = _ref.fitnessPlans;
  return _react2.default.createElement(
    'div',
    { className: _fitnessPlans2.default.fitnessPlans },
    _react2.default.createElement(
      'ul',
      null,
      fitnessPlans.map(function (fitnessPlan) {
        return _react2.default.createElement(
          'li',
          { key: fitnessPlan.fitnessPlanId, className: _fitnessPlans2.default.fitnessPlan },
          _react2.default.createElement(
            'div',
            { className: _fitnessPlans2.default.name },
            fitnessPlan.name
          ),
          _react2.default.createElement(
            'div',
            { className: _fitnessPlans2.default.stats },
            _react2.default.createElement(
              'div',
              { className: _fitnessPlans2.default.daysPerWeek },
              _react2.default.createElement(
                'span',
                { className: _fitnessPlans2.default.label },
                'Workouts per week:'
              ),
              _react2.default.createElement(
                'span',
                { className: _fitnessPlans2.default.answer },
                fitnessPlan.daysPerWeek,
                ' days'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _fitnessPlans2.default.timePerWorkout },
              _react2.default.createElement(
                'span',
                { className: _fitnessPlans2.default.label },
                'Time per workout:'
              ),
              _react2.default.createElement(
                'span',
                { className: _fitnessPlans2.default.answer },
                (0, _convertTimeToWorkout2.default)(fitnessPlan.timeToWorkout)
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _fitnessPlans2.default.description },
            fitnessPlan.description
          )
        );
      })
    )
  );
};

FitnessPlans.propTypes = {
  fitnessPlans: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    fitnessPlanId: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    daysPerWeek: _propTypes2.default.number.isRequired,
    timeToWorkout: _propTypes2.default.shape({
      hours: _propTypes2.default.number.isRequired,
      minutes: _propTypes2.default.number.isRequired
    })
  }).isRequired).isRequired
};

exports.default = FitnessPlans;

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fitnessPlans = __webpack_require__(177);

var _fitnessPlans2 = _interopRequireDefault(_fitnessPlans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VariationPlans = function VariationPlans(_ref) {
  var variationPlans = _ref.variationPlans;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: _fitnessPlans2.default.daysPerWeek },
      _react2.default.createElement(
        'span',
        { className: _fitnessPlans2.default.label },
        'Alternative workouts per week:'
      ),
      _react2.default.createElement(
        'span',
        { className: _fitnessPlans2.default.answers },
        variationPlans.map(function (variationPlan, i) {
          return _react2.default.createElement(
            'span',
            { key: variationPlan.fitnessPlanId, className: _fitnessPlans2.default.answer },
            variationPlan.daysPerWeek,
            i < variationPlans.length - 1 ? '/' : null
          );
        })
      ),
      'days'
    )
  );
};

VariationPlans.propTypes = {
  variationPlans: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    daysPerWeek: _propTypes2.default.number.isRequired
  }).isRequired).isRequired
};

exports.default = VariationPlans;

/***/ }),

/***/ 733:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d","title":"Components-fitness-fitness__title--2aNKI"};

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _recompose = __webpack_require__(19);

var _fitnessPlansRaked = __webpack_require__(735);

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

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fitnessPlans = __webpack_require__(177);

var _fitnessPlans2 = _interopRequireDefault(_fitnessPlans);

var _convertTimeToWorkout = __webpack_require__(299);

var _convertTimeToWorkout2 = _interopRequireDefault(_convertTimeToWorkout);

var _variationPlansContainer = __webpack_require__(300);

var _variationPlansContainer2 = _interopRequireDefault(_variationPlansContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessPlansRanked = function FitnessPlansRanked(_ref) {
  var rankedFitnessPlans = _ref.rankedFitnessPlans;
  return _react2.default.createElement(
    'div',
    { className: _fitnessPlans2.default.fitnessPlans },
    _react2.default.createElement(
      'ol',
      null,
      rankedFitnessPlans.map(function (fitnessPlan) {
        return _react2.default.createElement(
          'li',
          { key: fitnessPlan.fitnessPlanId, className: _fitnessPlans2.default.fitnessPlanRanked },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: _fitnessPlans2.default.name },
              fitnessPlan.name
            ),
            _react2.default.createElement(
              'div',
              { className: _fitnessPlans2.default.stats },
              _react2.default.createElement(
                'div',
                { className: _fitnessPlans2.default.daysPerWeek },
                _react2.default.createElement(
                  'span',
                  { className: _fitnessPlans2.default.label },
                  'Workouts per week:'
                ),
                _react2.default.createElement(
                  'span',
                  { className: _fitnessPlans2.default.answer },
                  fitnessPlan.daysPerWeek,
                  ' days'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _fitnessPlans2.default.timePerWorkout },
                _react2.default.createElement(
                  'span',
                  { className: _fitnessPlans2.default.label },
                  'Time per workout:'
                ),
                _react2.default.createElement(
                  'span',
                  { className: _fitnessPlans2.default.answer },
                  (0, _convertTimeToWorkout2.default)(fitnessPlan.timeToWorkout)
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _fitnessPlans2.default.description },
              fitnessPlan.description
            )
          )
        );
      })
    )
  );
};

FitnessPlansRanked.propTypes = {
  rankedFitnessPlans: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    fitnessPlanId: _propTypes2.default.number.isRequired,
    name: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    daysPerWeek: _propTypes2.default.number.isRequired,
    timeToWorkout: _propTypes2.default.shape({
      hours: _propTypes2.default.number.isRequired,
      minutes: _propTypes2.default.number.isRequired
    })
  }).isRequired).isRequired
};

exports.default = FitnessPlansRanked;

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var documentScrollTop = 0;
var bodyScrollTop = 0;

var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';

    // following is neccessary on iOS. position fixed will reset scroll position
    documentScrollTop = window.document.documentElement.scrollTop;
    bodyScrollTop = window.document.body.scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.right = 0;
    document.body.style.left = 0;
  }
};

var resetBodyScroll = exports.resetBodyScroll = function resetBodyScroll() {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = '';
    document.body.style.right = 'initial';
    document.body.style.left = 'initial';

    // reset position and scroll position
    document.body.style.position = '';
    try {
      window.document.documentElement.scrollTop = documentScrollTop;
    } catch (e) {
      console.error(e);
    } // eslint-disable-line no-console
    try {
      window.document.body.scrollTop = bodyScrollTop;
    } catch (e) {
      console.error(e);
    } // eslint-disable-line no-console
  }
};

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(738);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(179);

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

/***/ 739:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(741);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(179);

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

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(743);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(179);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(744);

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

/***/ 744:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(19);

var _errorPage = __webpack_require__(746);

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

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(747);

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

/***/ 747:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(749);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(180);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(181);

var _primaryLayout = __webpack_require__(757);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(758);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(761);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(762);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(764);

var _footer2 = _interopRequireDefault(_footer);

var _popupsContainer = __webpack_require__(766);

var _popupsContainer2 = _interopRequireDefault(_popupsContainer);

var _newsletterModalContainer = __webpack_require__(780);

var _newsletterModalContainer2 = _interopRequireDefault(_newsletterModalContainer);

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
              'div',
              { className: _primaryLayout2.default.reggestContainer },
              _react2.default.createElement(
                _found.Link,
                { to: '/', className: _primaryLayout2.default.reggest },
                'reggest',
                _react2.default.createElement(
                  'div',
                  { className: _primaryLayout2.default.betaLabel },
                  'beta'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _primaryLayout2.default.moto },
                'fitness plan suggester'
              )
            ),
            children
          )
        ),
        _react2.default.createElement(_footer2.default, null),
        _react2.default.createElement(_popupsContainer2.default, null),
        _react2.default.createElement(_newsletterModalContainer2.default, null),
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

/***/ 757:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1","reggestContainer":"Components-layouts-primaryLayout-primaryLayout__reggestContainer--24G5G","reggest":"Components-layouts-primaryLayout-primaryLayout__reggest--RIHSC","betaLabel":"Components-layouts-primaryLayout-primaryLayout__betaLabel--N0agG","moto":"Components-layouts-primaryLayout-primaryLayout__moto--38Qzk"};

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recompose = __webpack_require__(19);

var _cookieNotice = __webpack_require__(759);

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

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cookieNotice = __webpack_require__(760);

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

/***/ 760:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cookieNotice":"Components-footer-cookieNotice__cookieNotice--3wVgu"};

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(19);

var _found = __webpack_require__(181);

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

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizes = __webpack_require__(763);

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

/***/ 763:
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

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(181);

var _footer = __webpack_require__(765);

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

/***/ 765:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _popups = __webpack_require__(767);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(771);

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

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(768);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(770);

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

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(769);

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

/***/ 769:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"Components-shared-popup-popup__popup--24OYM"};

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"Components-shared-popup-popups__popups--1m1KE"};

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(772);

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

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxForm = __webpack_require__(148);

var _recompose = __webpack_require__(19);

var _reactRedux = __webpack_require__(12);

var _newsletterModal = __webpack_require__(781);

var _newsletterModal2 = _interopRequireDefault(_newsletterModal);

var _validation = __webpack_require__(797);

var _validation2 = _interopRequireDefault(_validation);

var _subscribeNewsletterMutation = __webpack_require__(799);

var _subscribeNewsletterMutation2 = _interopRequireDefault(_subscribeNewsletterMutation);

var _actions = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handlers = {
  hideModal: function hideModal(_ref) {
    var dispatch = _ref.dispatch;
    return function () {
      return dispatch((0, _actions.hideModal)());
    };
  },
  onSubmit: function onSubmit(_ref2) {
    var dispatch = _ref2.dispatch;
    return function (input) {
      return (0, _subscribeNewsletterMutation2.default)(input, dispatch).then(function () {
        return dispatch((0, _actions.hideModal)());
      }).catch(function (error) {
        throw new _reduxForm.SubmissionError(error);
      });
    };
  }
};

exports.default = (0, _recompose.compose)((0, _reactRedux.connect)(), (0, _recompose.withHandlers)(handlers), (0, _reduxForm.reduxForm)({
  form: 'newsletter',
  validate: _validation2.default
}))(_newsletterModal2.default);

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(148);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _newsletterModal = __webpack_require__(782);

var _newsletterModal2 = _interopRequireDefault(_newsletterModal);

var _inputTextField = __webpack_require__(783);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

var _modalContainer = __webpack_require__(787);

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _button = __webpack_require__(793);

var _button2 = _interopRequireDefault(_button);

var _validationErrors = __webpack_require__(316);

var _validationErrors2 = _interopRequireDefault(_validationErrors);

var _recaptcha = __webpack_require__(795);

var _recaptcha2 = _interopRequireDefault(_recaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsletterModal = function NewsletterModal(_ref) {
  var handleSubmit = _ref.handleSubmit,
      error = _ref.error,
      hideModal = _ref.hideModal;
  return _react2.default.createElement(
    _modalContainer2.default,
    { title: 'Subscribe.', id: 'fitnessPlans', allowOverlayHideModal: false },
    _react2.default.createElement(_validationErrors2.default, { errors: error }),
    _react2.default.createElement(
      'div',
      { className: _newsletterModal2.default.subscribeText },
      _react2.default.createElement(
        'div',
        null,
        'Subscribe to get your fitness plans emailed to you.'
      )
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, action: '' },
      _react2.default.createElement(
        'div',
        { className: _newsletterModal2.default.fields },
        _react2.default.createElement(_reduxForm.Field, { name: 'email', component: _inputTextField2.default, placeholder: 'email (required)' })
      ),
      _react2.default.createElement(_reduxForm.Field, { name: 'recaptcha', component: _recaptcha2.default }),
      _react2.default.createElement(
        'div',
        { className: _newsletterModal2.default.buttons },
        _react2.default.createElement(
          _button2.default,
          { styleName: 'primary', className: _newsletterModal2.default.emailButton },
          'Subscribe me'
        ),
        _react2.default.createElement(
          _button2.default,
          { styleName: 'primary', type: 'button', className: _newsletterModal2.default.noThanksButton, onClick: hideModal },
          'No thanks'
        )
      )
    )
  );
};

NewsletterModal.defaultProps = {
  error: []
};

NewsletterModal.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired),
  hideModal: _propTypes2.default.func.isRequired
};

exports.default = NewsletterModal;

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"Components-email-newsletterModal__modal--2YllD","close":"Components-email-newsletterModal__close--3lShT","title":"Components-email-newsletterModal__title--3WjAu","fields":"Components-email-newsletterModal__fields--2Z7vM","subscribeText":"Components-email-newsletterModal__subscribeText--23P8x","buttons":"Components-email-newsletterModal__buttons--3e_Rh"};

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationField = __webpack_require__(315);

var _validationField2 = _interopRequireDefault(_validationField);

var _inputTextField = __webpack_require__(786);

var _inputTextField2 = _interopRequireDefault(_inputTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InputTextField = function InputTextField(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error,
      props = _objectWithoutProperties(_ref, ['input', 'meta']);

  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement('input', _extends({}, input, {
      className: _inputTextField2.default.input
    }, props))
  );
};

InputTextField.propTypes = {
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = InputTextField;

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validationError = __webpack_require__(785);

var _validationError2 = _interopRequireDefault(_validationError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var error = _ref.error;
  return error && _react2.default.createElement(
    'span',
    { className: _validationError2.default.error },
    error
  );
};

Error.defaultProps = {
  error: null
};

Error.propTypes = {
  error: _propTypes2.default.string
};

exports.default = Error;

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"error":"Components-shared-validationField-validationError__error--1Pa9n"};

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"input":"Components-shared-inputField-inputTextField__input--2hNlL"};

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(12);

var _recompose = __webpack_require__(19);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = __webpack_require__(788);

var _modal2 = _interopRequireDefault(_modal);

var _actions = __webpack_require__(178);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var modal = _ref.modal;
  var id = _ref2.id;
  return {
    isCurrentModal: modal.currentModal === id
  };
};

exports.default = (0, _recompose.compose)((0, _recompose.setPropTypes)({
  id: _propTypes2.default.string.isRequired
}), (0, _reactRedux.connect)(mapStateToProps, {
  hideModal: _actions.hideModal,
  showModal: _actions.showModal
}), (0, _recompose.branch)(function (props) {
  return !props.isCurrentModal;
}, _recompose.renderNothing))(_modal2.default);

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(180);

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = __webpack_require__(789);

var _modal2 = _interopRequireDefault(_modal);

var _overlay = __webpack_require__(790);

var _overlay2 = _interopRequireDefault(_overlay);

var _cross = __webpack_require__(792);

var _cross2 = _interopRequireDefault(_cross);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
  var children = _ref.children,
      title = _ref.title,
      hideModal = _ref.hideModal,
      className = _ref.className,
      allowOverlayHideModal = _ref.allowOverlayHideModal;
  return _react2.default.createElement(
    _overlay2.default,
    { onClick: allowOverlayHideModal ? hideModal : null },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)(_modal2.default.modal, className) },
      _react2.default.createElement(
        'button',
        { onClick: hideModal, className: _modal2.default.close },
        _react2.default.createElement(_cross2.default, null)
      ),
      _react2.default.createElement(
        'div',
        { className: _modal2.default.title },
        title
      ),
      children
    )
  );
};

Modal.defaultProps = {
  className: null,
  allowOverlayHideModal: true
};

Modal.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  hideModal: _propTypes2.default.func.isRequired,
  allowOverlayHideModal: _propTypes2.default.bool
};

exports.default = Modal;

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"Components-shared-modal-modal__modal--2D0pp","close":"Components-shared-modal-modal__close--1tVJ4","title":"Components-shared-modal-modal__title--ynB38"};

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overlay = __webpack_require__(791);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/click-events-have-key-events */
// No Key event as it should be handled by other objects such as a modal close icon
var Overlay = function Overlay(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: _overlay2.default.overlay },
    children,
    _react2.default.createElement('div', { className: _overlay2.default.clickableOverlay, tabIndex: -1, role: 'button', onClick: onClick })
  );
};

Overlay.defaultProps = {
  onClick: Function.prototype
};

Overlay.propTypes = {
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.node.isRequired
};

exports.default = Overlay;

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"Components-shared-overlay-overlay__overlay--V6EnX","clickableOverlay":"Components-shared-overlay-overlay__clickableOverlay--hxyzW"};

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CrossIcon = function CrossIcon(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ['className']);

  return _react2.default.createElement(
    'svg',
    _extends({ className: className }, props, { xmlns: 'http://www.w3.org/2000/svg', width: '16', height: '16', viewBox: '0 0 16 16' }),
    _react2.default.createElement(
      'title',
      null,
      'Close'
    ),
    _react2.default.createElement('path', { d: 'M13.957 3.457l-1.414-1.414L8 6.586 3.457 2.043 2.043 3.457 6.586 8l-4.543 4.543 1.414 1.414L8 9.414l4.543 4.543 1.414-1.414L9.414 8z' })
  );
};

CrossIcon.defaultProps = {
  className: null
};

CrossIcon.propTypes = {
  className: _propTypes2.default.string
};

exports.default = CrossIcon;

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(180);

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__(794);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
  var children = _ref.children,
      styleName = _ref.styleName,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['children', 'styleName', 'className']);

  return _react2.default.createElement(
    'button',
    _extends({}, props, {
      className: (0, _classnames2.default)(_button2.default.button, styleName && _button2.default[styleName], className)
    }),
    children
  );
};

Button.defaultProps = {
  styleName: null,
  className: null
};

Button.propTypes = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  styleName: _propTypes2.default.string
};

exports.default = Button;

/***/ }),

/***/ 794:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"Components-shared-button-button__button--mBboU","primary":"Components-shared-button-button__primary--1x78D","secondary":"Components-shared-button-button__secondary--R4fYU","tertiary":"Components-shared-button-button__tertiary--QVAv3"};

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRecaptcha = __webpack_require__(796);

var _reactRecaptcha2 = _interopRequireDefault(_reactRecaptcha);

var _validationField = __webpack_require__(315);

var _validationField2 = _interopRequireDefault(_validationField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Captcha = function Captcha(_ref) {
  var input = _ref.input,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      _ref$meta$error = _ref$meta.error,
      error = _ref$meta$error === undefined ? [] : _ref$meta$error;
  return _react2.default.createElement(
    _validationField2.default,
    { touched: touched, error: error },
    _react2.default.createElement(_reactRecaptcha2.default, {
      verifyCallback: function verifyCallback(response) {
        return input.onChange(response);
      },
      sitekey: undefined
    })
  );
};

Captcha.propTypes = {
  input: _propTypes2.default.shape({
    onChange: _propTypes2.default.func.isRequired
  }).isRequired,
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool.isRequired,
    error: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
  }).isRequired
};

exports.default = Captcha;

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noWhiteSpace = __webpack_require__(798);

var _noWhiteSpace2 = _interopRequireDefault(_noWhiteSpace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validation = function validation(values) {
  var errors = {};

  if (!values.recaptcha) {
    errors.recaptcha = 'reCAPTCHA is required';
  }

  if (!values.email || !(0, _noWhiteSpace2.default)(values.email)) {
    errors.email = 'Email is required';
  } else if (!/^.+@.+$/i.test(values.email)) {
    errors.email = 'Must be a valid email address';
  }

  return errors;
};

exports.default = validation;

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  return value.replace(/^\s+$/, '').length > 0;
};

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(45);

var _relayCompose = __webpack_require__(47);

var mutation = function mutation() {
  var node = __webpack_require__(317);

  if (node.hash && node.hash !== '4c9823bf5c166e8b655c0f228e629154') {
    console.error('The definition of \'subscribeNewsletterMutation\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(317);
};

exports.default = function (_ref) {
  var email = _ref.email,
      recaptcha = _ref.recaptcha;

  var variables = {
    input: {
      email: email,
      recaptcha: recaptcha
    }
  };

  return (0, _relayCompose.createMutation)(mutation, variables);
};

/***/ }),

/***/ 800:
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

/***/ 801:
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

          fitnessPlans[x.name] = _extends({}, state.fitnessPlans[x.name], x, {
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

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_MODAL':
      return _extends({}, state, action.variables, {
        currentModal: action.id
      });
    case 'HIDE_MODAL':
      return _extends({}, state, {
        currentModal: null
      });
    default:
      return state;
  }
};

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(15);

var _relayCompose = __webpack_require__(47);

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

/***/ 804:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[318]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvY29udmVydFRpbWVUb1dvcmtvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc1BsYW5zQ29udGFpbmVyLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lci5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkZpZWxkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3JzLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvX19nZW5lcmF0ZWRfXy9zdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3N1Ym1pdEFuc3dlck11dGF0aW9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvdmFyaWF0aW9uUGxhbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zUmFua2VkQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYWtlZC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvc2Nyb2xsTG9jay5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRGaWVsZC9pbnB1dFRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3IubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dEZpZWxkL2lucHV0VGV4dEZpZWxkLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWxDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9vdmVybGF5L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvb3ZlcmxheS9vdmVybGF5Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9pY29ucy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9idXR0b24ubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2VtYWlsL3JlY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2VtYWlsL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbm9XaGl0ZVNwYWNlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAubGVzcyJdLCJuYW1lcyI6WyJzaG93TW9kYWwiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJoaWRlTW9kYWwiLCJQYWdlQ29udGVudCIsImNoaWxkcmVuIiwicGFnZUNvbnRlbnQiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInYwIiwidjEiLCJ2MiIsInYzIiwidjQiLCJ2NSIsInY2IiwidjciLCJ2OCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwidGltZSIsIm5ld1RpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJmcmFnbWVudHMiLCJwcm9wcyIsInZhcmlhdGlvblBsYW5zIiwibGVuZ3RoIiwiVmFsaWRhdGlvbkZpZWxkIiwiZXJyb3IiLCJ0b3VjaGVkIiwiY2xhc3NOYW1lIiwiZXJyb3JzIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdFByb3BzIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJFcnJvcnMiLCJtYXAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwic3RhdHVzIiwic3RhdGUiLCJkYXRhIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwibWlkZGxlV2FyZSIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJtb2RhbCIsInVzZXIiLCJkaXNwYXRjaCIsImluaXQiLCJyZWZldGNoUXVlcnkiLCJxdWVyeSIsImhhbmRsZXJzIiwiZ2V0TmV4dFF1ZXN0aW9uIiwicmVsYXkiLCJyZWZldGNoIiwicXVlc3Rpb25JbmRleCIsIkZpdG5lc3NDb250YWluZXIiLCJoYXNRdWVzdGlvbiIsInF1ZXN0aW9uQnlJbmRleCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJuZXdzbGV0dGVyUG9wdXBTaG93biIsImNvb2tpZXMiLCJnZXQiLCJleHBpcmVzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwic2V0Iiwicm91dGVDb25maWciLCJDb21wb25lbnQiLCJGaXRuZXNzIiwiZml0bmVzcyIsInRpdGxlIiwiZnVuYyIsImFuc3dlck9uQ2xpY2siLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYW5zd2VySWQiLCJhbnN3ZXJDb250YWluZXIiLCJhbnN3ZXJUZXh0IiwiaW5zdGFuY2VPZiIsIm11dGF0aW9uIiwiaW5wdXQiLCJ0aGVuIiwic3VibWl0QW5zd2VyIiwicG9pbnRzIiwiZml0bmVzc1BsYW5zUG9pbnRzIiwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMiLCJmaWx0ZXIiLCJ4IiwiZml0bmVzc1BsYW4iLCJuYW1lIiwicmFua0ZpdG5lc3NQbGFucyIsImFuc3dlclBvaW50cyIsIkZpdG5lc3NQbGFucyIsImZpdG5lc3NQbGFucyIsImZpdG5lc3NQbGFuSWQiLCJzdGF0cyIsImRheXNQZXJXZWVrIiwibGFiZWwiLCJ0aW1lUGVyV29ya291dCIsInRpbWVUb1dvcmtvdXQiLCJkZXNjcmlwdGlvbiIsIlZhcmlhdGlvblBsYW5zIiwidmFyaWF0aW9uUGxhbiIsImkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyYW5rZWRGaXRuZXNzUGxhbnMiLCJGaXRuZXNzUGxhbnNSYW5rZWQiLCJmaXRuZXNzUGxhblJhbmtlZCIsImRvY3VtZW50U2Nyb2xsVG9wIiwiYm9keVNjcm9sbFRvcCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwb3NpdGlvbiIsInJpZ2h0IiwibGVmdCIsInJlc2V0Qm9keVNjcm9sbCIsImUiLCJjb25zb2xlIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJyZWdnZXN0Q29udGFpbmVyIiwicmVnZ2VzdCIsImJldGFMYWJlbCIsIm1vdG8iLCJzdGF0ZUhhbmRsZXJzIiwic2hvd0Nvb2tpZU5vdGljZSIsInNob3dpbmdDb29raWVOb3RpY2UiLCJoaWRlQ29va2llTm90aWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb29raWVOb3RpY2VTaG93biIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiQ29va2llTm90aWNlIiwiY29va2llTm90aWNlIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJEaXNwbGF5VHlwZSIsImdldERpc3BsYXlUeXBlIiwid2luZG93V2lkdGgiLCJicmVha3BvaW50TW9iaWxlIiwidmFsdWUiLCJicmVha3BvaW50VGFibGV0IiwidXBkYXRlRGlzcGxheVR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInNldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplcyIsInVuaXQiLCJicmVha3BvaW50RGVza3RvcCIsIkZvb3RlciIsImZvb3RlciIsInBvcHVwcyIsImhpZGVQb3B1cCIsIlBvcHVwcyIsImluZGV4IiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsIlBvcHVwIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJzZXRUaW1lb3V0Iiwic2hvd1BvcHVwIiwiZ2VuZXJhdGUiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJvblN1Ym1pdCIsImNhdGNoIiwidmFsaWRhdGUiLCJOZXdzbGV0dGVyTW9kYWwiLCJoYW5kbGVTdWJtaXQiLCJzdWJzY3JpYmVUZXh0IiwiZmllbGRzIiwiYnV0dG9ucyIsImVtYWlsQnV0dG9uIiwibm9UaGFua3NCdXR0b24iLCJJbnB1dFRleHRGaWVsZCIsIm1ldGEiLCJFcnJvciIsImlzQ3VycmVudE1vZGFsIiwiY3VycmVudE1vZGFsIiwiTW9kYWwiLCJhbGxvd092ZXJsYXlIaWRlTW9kYWwiLCJjbG9zZSIsIk92ZXJsYXkiLCJvbkNsaWNrIiwib3ZlcmxheSIsImNsaWNrYWJsZU92ZXJsYXkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsIkNyb3NzSWNvbiIsIkJ1dHRvbiIsInN0eWxlTmFtZSIsImJ1dHRvbiIsIkNhcHRjaGEiLCJvbkNoYW5nZSIsInJlc3BvbnNlIiwiUkVDQVBUQ0hBX1NJVEVfS0VZIiwidmFsaWRhdGlvbiIsInZhbHVlcyIsInJlY2FwdGNoYSIsImVtYWlsIiwidGVzdCIsImRlZmF1bHRTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJfIiwiZml0bmVzc1BsYW5zRGVmYXVsdCIsIl9Db25zdGFudHMiLCJmb3JFYWNoIiwiTmFtZSIsIm1heE51bWJlciIsIk1hdGgiLCJtYXgiLCJtaW5OdW1iZXIiLCJtaW4iLCJkaWZmZXJlbmNlIiwibmV3UG9pbnRzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNvcnQiLCJhIiwiYiIsImZldGNoUXVlcnkiLCJvcGVyYXRpb24iLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxrQkFBa0IsK29COzs7Ozs7Ozs7Ozs7Ozs7QUNEbEI7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxFQUFELEVBQUtDLFNBQUwsRUFBbUI7QUFDMUM7O0FBRUEsU0FBTztBQUNMQyxVQUFNLFlBREQ7QUFFTEYsVUFGSztBQUdMQztBQUhLLEdBQVA7QUFLRCxDQVJNOztBQVVBLElBQU1FLGdDQUFZLFNBQVpBLFNBQVksR0FBTTtBQUM3Qjs7QUFFQSxTQUFPO0FBQ0xELFVBQU07QUFERCxHQUFQO0FBR0QsQ0FOTSxDOzs7Ozs7Ozs7Ozs7OztBQ1pQOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUUsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFV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S3VELEtBREw7QUFFRTRMLHNCQUFjO0FBRmhCO0FBSUY7QUFBUyxhQUFPNUwsS0FBUDtBQVpYO0FBY0QsQzs7Ozs7Ozs7Ozs7Ozs7QUNmRDs7QUFNQTs7QUFFQSxJQUFNd08sYUFBYSxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBWS9SLFNBQVo7QUFBQSxTQUNqQmdTLE1BQU0sVUFBTixFQUFrQjtBQUNoQkMsWUFBUSxNQURRO0FBRWhCQyxpQkFBYSxhQUZHO0FBR2hCQyxhQUFTO0FBQ1BDLGNBQVEsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUhPO0FBT2hCbkosVUFBTW9KLEtBQUtDLFNBQUwsQ0FBZTtBQUNuQnpOLGFBQU9rTixVQUFVcEUsSUFERTtBQUVuQjNOO0FBRm1CLEtBQWY7QUFQVSxHQUFsQixFQVdHbUgsSUFYSCxDQVdRO0FBQUEsV0FBWStJLFNBQVNxQyxJQUFULEVBQVo7QUFBQSxHQVhSLEVBWUdwTCxJQVpILENBWVEsVUFBQ29MLElBQUQsRUFBVTtBQUNkO0FBQ0EsUUFBSUEsS0FBS3RRLE1BQVQsRUFBaUI7QUFDZixhQUFPdVEsUUFBUUMsTUFBUixDQUFlRixLQUFLdFEsTUFBcEIsQ0FBUDtBQUNEOztBQUVELFdBQU91USxRQUFRRSxPQUFSLENBQWdCSCxJQUFoQixDQUFQO0FBQ0QsR0FuQkgsQ0FEaUI7QUFBQSxDQUFuQjs7QUFzQkEsSUFBTUksVUFBVSxzQkFBUUMsTUFBUixDQUFlZCxVQUFmLENBQWhCO0FBQ0EsSUFBTWUsU0FBUyxnQ0FBZjtBQUNBLElBQU03UCxRQUFRLHdCQUFVNlAsTUFBVixDQUFkO0FBQ0EsSUFBTUMsY0FBYyw4QkFBZ0I7QUFDbENILGtCQURrQztBQUVsQzNQO0FBRmtDLENBQWhCLENBQXBCOztBQUtBLGlDQUFjOFAsV0FBZDs7a0JBRWVBLFc7Ozs7Ozs7QUN4Q2YseUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZpdG5lc3NQbGFuc1wiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fZml0bmVzc1BsYW5zLS0zZE1HaVwiLFwiZml0bmVzc1BsYW5cIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX2ZpdG5lc3NQbGFuLS0zUTNNT1wiLFwiZml0bmVzc1BsYW5SYW5rZWRcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX2ZpdG5lc3NQbGFuUmFua2VkLS0yVk1wZlwiLFwic3RhdHNcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX3N0YXRzLS00V2Z4dFwiLFwibmFtZVwiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fbmFtZS0tMUZsUGNcIixcImRlc2NyaXB0aW9uXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19kZXNjcmlwdGlvbi0tMTAzOWdcIixcImRheXNQZXJXZWVrXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19kYXlzUGVyV2Vlay0tMkF1dVZcIixcInRpbWVQZXJXb3Jrb3V0XCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX190aW1lUGVyV29ya291dC0tM3h6TnZcIixcImxhYmVsXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19sYWJlbC0tM2FkZ2RcIixcImFuc3dlcnNcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX2Fuc3dlcnMtLWV6OHNrXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFucy5sZXNzXG4vLyBtb2R1bGUgaWQgPSAxNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcmVzZXRCb2R5U2Nyb2xsLCBkaXNhYmxlQm9keVNjcm9sbCB9IGZyb20gJy4uL3V0aWxpdGllcy9zY3JvbGxMb2NrJztcblxuZXhwb3J0IGNvbnN0IHNob3dNb2RhbCA9IChpZCwgdmFyaWFibGVzKSA9PiB7XG4gIGRpc2FibGVCb2R5U2Nyb2xsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU0hPV19NT0RBTCcsXG4gICAgaWQsXG4gICAgdmFyaWFibGVzLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHtcbiAgcmVzZXRCb2R5U2Nyb2xsKCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnSElERV9NT0RBTCcsXG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvYWN0aW9ucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZUNvbnRlbnQubGVzcyc7XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250ZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuUGFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDQwN2Y5NGRhNzI4ZmExYjU4ODFmODk3MmQ2MDZlOGJkXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBzdWJtaXRBbnN3ZXJNdXRhdGlvblZhcmlhYmxlcyA9IHt8XG4gIGlucHV0OiB7XG4gICAgY2xpZW50TXV0YXRpb25JZD86ID9zdHJpbmcsXG4gICAgaWQ6IG51bWJlcixcbiAgfSxcbnx9O1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtzdWJtaXRBbnN3ZXI6ID97fFxuICAgICthbnN3ZXI6IHt8XG4gICAgICArcG9pbnRzOiBudW1iZXIsXG4gICAgICArcXVlc3Rpb246ID97fFxuICAgICAgICArZml0bmVzc1BsYW5BbnN3ZXJQb2ludHM6ID8kUmVhZE9ubHlBcnJheTw/e3xcbiAgICAgICAgICArcG9pbnRzOiBudW1iZXIsXG4gICAgICAgICAgK2ZpdG5lc3NQbGFuOiA/e3xcbiAgICAgICAgICAgICtmaXRuZXNzUGxhbklkOiBudW1iZXIsXG4gICAgICAgICAgICArbmFtZTogP3N0cmluZyxcbiAgICAgICAgICAgICtkZXNjcmlwdGlvbjogP3N0cmluZyxcbiAgICAgICAgICAgICtkYXlzUGVyV2VlazogbnVtYmVyLFxuICAgICAgICAgICAgK3RpbWVUb1dvcmtvdXQ6ID97fFxuICAgICAgICAgICAgICAraG91cnM6ID9udW1iZXIsXG4gICAgICAgICAgICAgICttaW51dGVzOiA/bnVtYmVyLFxuICAgICAgICAgICAgfH0sXG4gICAgICAgICAgICArJGZyYWdtZW50UmVmczogdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4kcmVmLFxuICAgICAgICAgIHx9LFxuICAgICAgICB8fT4sXG4gICAgICB8fSxcbiAgICB8fSxcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxuICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxuKSB7XG4gIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XG4gICAgYW5zd2VyIHtcbiAgICAgIHBvaW50c1xuICAgICAgcXVlc3Rpb24ge1xuICAgICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgICAgcG9pbnRzXG4gICAgICAgICAgZml0bmVzc1BsYW4ge1xuICAgICAgICAgICAgZml0bmVzc1BsYW5JZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIGRheXNQZXJXZWVrXG4gICAgICAgICAgICB0aW1lVG9Xb3Jrb3V0IHtcbiAgICAgICAgICAgICAgaG91cnNcbiAgICAgICAgICAgICAgbWludXRlc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgfVxuICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICAgIGlkXG4gICAgfVxuICB9XG59XG5cbmZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcbiAgdmFyaWF0aW9uUGxhbnMge1xuICAgIGZpdG5lc3NQbGFuSWRcbiAgICBkYXlzUGVyV2Vla1xuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1Ym1pdEFuc3dlcklucHV0IVwiLFxuICAgIFwiZGVmYXVsdFZhbHVlXCI6IG51bGxcbiAgfVxuXSxcbnYxID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidmFyaWFibGVOYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJtaXRBbnN3ZXJJbnB1dCFcIlxuICB9XG5dLFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwicG9pbnRzXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuSWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjQgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NSA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJkYXlzUGVyV2Vla1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52NyA9IHtcbiAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJ0aW1lVG9Xb3Jrb3V0XCIsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJjb25jcmV0ZVR5cGVcIjogXCJUaW1lVG9Xb3Jrb3V0XCIsXG4gIFwicGx1cmFsXCI6IGZhbHNlLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJob3Vyc1wiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcIm1pbnV0ZXNcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9XG4gIF1cbn0sXG52OCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwibXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXFxuICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxcbikge1xcbiAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcXG4gICAgYW5zd2VyIHtcXG4gICAgICBwb2ludHNcXG4gICAgICBxdWVzdGlvbiB7XFxuICAgICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XFxuICAgICAgICAgIHBvaW50c1xcbiAgICAgICAgICBmaXRuZXNzUGxhbiB7XFxuICAgICAgICAgICAgZml0bmVzc1BsYW5JZFxcbiAgICAgICAgICAgIG5hbWVcXG4gICAgICAgICAgICBkZXNjcmlwdGlvblxcbiAgICAgICAgICAgIGRheXNQZXJXZWVrXFxuICAgICAgICAgICAgdGltZVRvV29ya291dCB7XFxuICAgICAgICAgICAgICBob3Vyc1xcbiAgICAgICAgICAgICAgbWludXRlc1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAuLi52YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblxcbiAgICAgICAgICAgIGlkXFxuICAgICAgICAgIH1cXG4gICAgICAgICAgaWRcXG4gICAgICAgIH1cXG4gICAgICAgIGlkXFxuICAgICAgfVxcbiAgICAgIGlkXFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gb24gRml0bmVzc1BsYW4ge1xcbiAgdmFyaWF0aW9uUGxhbnMge1xcbiAgICBmaXRuZXNzUGxhbklkXFxuICAgIGRheXNQZXJXZWVrXFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhbkFuc3dlclBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlck11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwic3VibWl0QW5zd2VyXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogdjEsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3VibWl0QW5zd2VyUGF5bG9hZFwiLFxuICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhbkFuc3dlclBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgdjIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY4XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB2OFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdjhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHY4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2NmZGEwNGM1ZGJkZTM1N2JjZmIwZmQ0YzZkNWYxODVkJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvX19nZW5lcmF0ZWRfXy9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gPSB7fFxuICArcXVlc3Rpb25UZXh0OiBzdHJpbmcsXG4gICthbnN3ZXJzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2Fuc3dlcklkOiBudW1iZXIsXG4gICAgK2Fuc3dlclRleHQ6IHN0cmluZyxcbiAgfH0+LFxuICArJHJlZlR5cGU6IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZixcbnx9O1xuKi9cblxuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlRnJhZ21lbnQqLyA9IHtcbiAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgXCJ0eXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2MwOGZkYzMwNWQ4NzMxOTM4NjQ3ZjIyNmVkMGIwMTA1Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvX19nZW5lcmF0ZWRfXy9xQW5kQUNvbnRhaW5lcl9xdWVzdGlvbi5ncmFwaHFsLmpzIiwiaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnO1xuXG5leHBvcnQgZGVmYXVsdCAodGltZSkgPT4ge1xuICBsZXQgbmV3VGltZSA9ICcnO1xuXG4gIGlmICh0aW1lLmhvdXJzKSB7XG4gICAgbmV3VGltZSArPSBwbHVyYWxpemUoJ2hvdXInLCB0aW1lLmhvdXJzLCB0cnVlKTtcblxuICAgIGlmICh0aW1lLm1pbnV0ZXMpIHtcbiAgICAgIG5ld1RpbWUgKz0gJyAnO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lLm1pbnV0ZXMpIHtcbiAgICBuZXdUaW1lICs9IHBsdXJhbGl6ZSgnbWludXRlJywgdGltZS5taW51dGVzLCB0cnVlKTtcbiAgfVxuXG4gIHJldHVybiBuZXdUaW1lO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy9jb252ZXJ0VGltZVRvV29ya291dC5qcyIsImltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wLCBicmFuY2gsIHJlbmRlck5vdGhpbmcgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5cbmltcG9ydCBWYXJpYXRpb25QbGFucyBmcm9tICcuL3ZhcmlhdGlvblBsYW5zJztcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gb24gRml0bmVzc1BsYW4ge1xuICAgIHZhcmlhdGlvblBsYW5zIHtcbiAgICAgIGZpdG5lc3NQbGFuSWRcbiAgICAgIGRheXNQZXJXZWVrXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBmcmFnbWVudChmcmFnbWVudHMpLFxuICBmbGF0dGVuUHJvcCgnZml0bmVzc1BsYW4nKSxcbiAgYnJhbmNoKFxuICAgIHByb3BzID0+IHByb3BzLnZhcmlhdGlvblBsYW5zLmxlbmd0aCA9PT0gMCxcbiAgICByZW5kZXJOb3RoaW5nLFxuICApLFxuKShWYXJpYXRpb25QbGFucyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvdmFyaWF0aW9uUGxhbnNDb250YWluZXIuanMiLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiA9IHt8XG4gICt2YXJpYXRpb25QbGFuczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICtmaXRuZXNzUGxhbklkOiBudW1iZXIsXG4gICAgK2RheXNQZXJXZWVrOiBudW1iZXIsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXCIsXG4gIFwidHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5JZFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJkYXlzUGVyV2Vla1wiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc0OWJkZDg4YjA3Mzg5OGY0ZmJlMWMxNDI2ZjE5YzQ0Zic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy92YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbi5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuJHJlZiA9IGFueTtcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIGZpdG5lc3NQbGFuc0NvbnRhaW5lciRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgZml0bmVzc1BsYW5zQ29udGFpbmVyID0ge3xcbiAgK2ZpdG5lc3NQbGFuczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICtmaXRuZXNzUGxhbklkOiBudW1iZXIsXG4gICAgK25hbWU6ID9zdHJpbmcsXG4gICAgK2Rlc2NyaXB0aW9uOiA/c3RyaW5nLFxuICAgICtkYXlzUGVyV2VlazogbnVtYmVyLFxuICAgICt0aW1lVG9Xb3Jrb3V0OiA/e3xcbiAgICAgICtob3VyczogP251bWJlcixcbiAgICAgICttaW51dGVzOiA/bnVtYmVyLFxuICAgIHx9LFxuICAgICskZnJhZ21lbnRSZWZzOiB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiRyZWYsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBmaXRuZXNzUGxhbnNDb250YWluZXIkcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbnNDb250YWluZXJcIixcbiAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuc1wiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5JZFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImRheXNQZXJXZWVrXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcInRpbWVUb1dvcmtvdXRcIixcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlRpbWVUb1dvcmtvdXRcIixcbiAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgIFwibmFtZVwiOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtaW51dGVzXCIsXG4gICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwidmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnN2UyNjFhOTg4Y2Y2ODBjYjcxN2I3ZTE3MDBjOGIwNWUnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc1BsYW5zQ29udGFpbmVyLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgZml0bmVzc1BsYW5zQ29udGFpbmVyJHJlZiA9IGFueTtcbnR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmID0gYW55O1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgZml0bmVzc0NvbnRhaW5lciRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lciA9IHt8XG4gICtxdWVzdGlvbkJ5SW5kZXg6ID97fFxuICAgICskZnJhZ21lbnRSZWZzOiBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYsXG4gIHx9LFxuICArJGZyYWdtZW50UmVmczogZml0bmVzc1BsYW5zQ29udGFpbmVyJHJlZixcbiAgKyRyZWZUeXBlOiBmaXRuZXNzQ29udGFpbmVyJHJlZixcbnx9O1xuKi9cblxuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlRnJhZ21lbnQqLyA9IHtcbiAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclwiLFxuICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiUm9vdEFyZ3VtZW50XCIsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgICBcInR5cGVcIjogXCJJbnRcIlxuICAgIH1cbiAgXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25CeUluZGV4XCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwicUFuZEFDb250YWluZXJfcXVlc3Rpb25cIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5zQ29udGFpbmVyXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbFxuICAgIH1cbiAgXVxufTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzA4ZTNiMjU0MDIwMTU5ZjYzZjkxODg1MTM0N2Q4ZWZhJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXIuZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggYzA5NDlhNDQ5ZmFmMzZjNGM3MzQ2NGM3MmU2NjZjZTZcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIGZpdG5lc3NDb250YWluZXIkcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeVZhcmlhYmxlcyA9IHt8XG4gIHF1ZXN0aW9uSW5kZXg/OiA/bnVtYmVyLFxufH07XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUmVmZXRjaFF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogZml0bmVzc0NvbnRhaW5lciRyZWYsXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IGZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkoXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcbikge1xuICAuLi5maXRuZXNzQ29udGFpbmVyXG59XG5cbmZyYWdtZW50IGZpdG5lc3NDb250YWluZXIgb24gUXVlcnkge1xuICBxdWVzdGlvbkJ5SW5kZXgoaW5kZXg6ICRxdWVzdGlvbkluZGV4KSB7XG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cbiAgICBpZFxuICB9XG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxufVxuXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XG4gIHF1ZXN0aW9uVGV4dFxuICBhbnN3ZXJzIHtcbiAgICBhbnN3ZXJJZFxuICAgIGFuc3dlclRleHRcbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IGZpdG5lc3NQbGFuc0NvbnRhaW5lciBvbiBRdWVyeSB7XG4gIGZpdG5lc3NQbGFucyB7XG4gICAgZml0bmVzc1BsYW5JZFxuICAgIG5hbWVcbiAgICBkZXNjcmlwdGlvblxuICAgIGRheXNQZXJXZWVrXG4gICAgdGltZVRvV29ya291dCB7XG4gICAgICBob3Vyc1xuICAgICAgbWludXRlc1xuICAgIH1cbiAgICAuLi52YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblxuICAgIGlkXG4gIH1cbn1cblxuZnJhZ21lbnQgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gb24gRml0bmVzc1BsYW4ge1xuICB2YXJpYXRpb25QbGFucyB7XG4gICAgZml0bmVzc1BsYW5JZFxuICAgIGRheXNQZXJXZWVrXG4gICAgaWRcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICBcInR5cGVcIjogXCJJbnRcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbklkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImRheXNQZXJXZWVrXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IGZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkoXFxuICAkcXVlc3Rpb25JbmRleDogSW50XFxuKSB7XFxuICAuLi5maXRuZXNzQ29udGFpbmVyXFxufVxcblxcbmZyYWdtZW50IGZpdG5lc3NDb250YWluZXIgb24gUXVlcnkge1xcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xcbiAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxcbiAgICBpZFxcbiAgfVxcbiAgLi4uZml0bmVzc1BsYW5zQ29udGFpbmVyXFxufVxcblxcbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcXG4gIHF1ZXN0aW9uVGV4dFxcbiAgYW5zd2VycyB7XFxuICAgIGFuc3dlcklkXFxuICAgIGFuc3dlclRleHRcXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgZml0bmVzc1BsYW5zQ29udGFpbmVyIG9uIFF1ZXJ5IHtcXG4gIGZpdG5lc3NQbGFucyB7XFxuICAgIGZpdG5lc3NQbGFuSWRcXG4gICAgbmFtZVxcbiAgICBkZXNjcmlwdGlvblxcbiAgICBkYXlzUGVyV2Vla1xcbiAgICB0aW1lVG9Xb3Jrb3V0IHtcXG4gICAgICBob3Vyc1xcbiAgICAgIG1pbnV0ZXNcXG4gICAgfVxcbiAgICAuLi52YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblxcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiBvbiBGaXRuZXNzUGxhbiB7XFxuICB2YXJpYXRpb25QbGFucyB7XFxuICAgIGZpdG5lc3NQbGFuSWRcXG4gICAgZGF5c1BlcldlZWtcXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uQnlJbmRleFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5zXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHYyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHYzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0aW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJUaW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtaW51dGVzXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhcmlhdGlvblBsYW5zXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMWFhNWJlNzYwZmI3NGMwZWVkNDhmMjU3ZDNmZTYwNjcnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeS5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA5NjFmNTM0ZDA4NTM1MDkwMmQxY2ExZWJhNDg3ZGIzMFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgZml0bmVzc0NvbnRhaW5lciRyZWYgPSBhbnk7XG50eXBlIGZpdG5lc3NQbGFuc0NvbnRhaW5lciRyZWYgPSBhbnk7XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBxdWVzdGlvbkluZGV4PzogP251bWJlcixcbnx9O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclF1ZXJ5UmVzcG9uc2UgPSB7fFxuICArJGZyYWdtZW50UmVmczogKGZpdG5lc3NDb250YWluZXIkcmVmICYgZml0bmVzc1BsYW5zQ29udGFpbmVyJHJlZiksXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeShcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxuKSB7XG4gIC4uLmZpdG5lc3NDb250YWluZXJcbiAgLi4uZml0bmVzc1BsYW5zQ29udGFpbmVyXG59XG5cbmZyYWdtZW50IGZpdG5lc3NDb250YWluZXIgb24gUXVlcnkge1xuICBxdWVzdGlvbkJ5SW5kZXgoaW5kZXg6ICRxdWVzdGlvbkluZGV4KSB7XG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cbiAgICBpZFxuICB9XG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxufVxuXG5mcmFnbWVudCBmaXRuZXNzUGxhbnNDb250YWluZXIgb24gUXVlcnkge1xuICBmaXRuZXNzUGxhbnMge1xuICAgIGZpdG5lc3NQbGFuSWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgICBkYXlzUGVyV2Vla1xuICAgIHRpbWVUb1dvcmtvdXQge1xuICAgICAgaG91cnNcbiAgICAgIG1pbnV0ZXNcbiAgICB9XG4gICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcbiAgdmFyaWF0aW9uUGxhbnMge1xuICAgIGZpdG5lc3NQbGFuSWRcbiAgICBkYXlzUGVyV2Vla1xuICAgIGlkXG4gIH1cbn1cblxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xuICBxdWVzdGlvblRleHRcbiAgYW5zd2VycyB7XG4gICAgYW5zd2VySWRcbiAgICBhbnN3ZXJUZXh0XG4gICAgaWRcbiAgfVxufVxuKi9cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZVJlcXVlc3QqLyA9IChmdW5jdGlvbigpe1xudmFyIHYwID0gW1xuICB7XG4gICAgXCJraW5kXCI6IFwiTG9jYWxBcmd1bWVudFwiLFxuICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICBcInR5cGVcIjogXCJJbnRcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MiA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbklkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnYzID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcImRheXNQZXJXZWVrXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufTtcbnJldHVybiB7XG4gIFwia2luZFwiOiBcIlJlcXVlc3RcIixcbiAgXCJvcGVyYXRpb25LaW5kXCI6IFwicXVlcnlcIixcbiAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gIFwiaWRcIjogbnVsbCxcbiAgXCJ0ZXh0XCI6IFwicXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5KFxcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxcbikge1xcbiAgLi4uZml0bmVzc0NvbnRhaW5lclxcbiAgLi4uZml0bmVzc1BsYW5zQ29udGFpbmVyXFxufVxcblxcbmZyYWdtZW50IGZpdG5lc3NDb250YWluZXIgb24gUXVlcnkge1xcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xcbiAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxcbiAgICBpZFxcbiAgfVxcbiAgLi4uZml0bmVzc1BsYW5zQ29udGFpbmVyXFxufVxcblxcbmZyYWdtZW50IGZpdG5lc3NQbGFuc0NvbnRhaW5lciBvbiBRdWVyeSB7XFxuICBmaXRuZXNzUGxhbnMge1xcbiAgICBmaXRuZXNzUGxhbklkXFxuICAgIG5hbWVcXG4gICAgZGVzY3JpcHRpb25cXG4gICAgZGF5c1BlcldlZWtcXG4gICAgdGltZVRvV29ya291dCB7XFxuICAgICAgaG91cnNcXG4gICAgICBtaW51dGVzXFxuICAgIH1cXG4gICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gb24gRml0bmVzc1BsYW4ge1xcbiAgdmFyaWF0aW9uUGxhbnMge1xcbiAgICBmaXRuZXNzUGxhbklkXFxuICAgIGRheXNQZXJXZWVrXFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcXG4gIHF1ZXN0aW9uVGV4dFxcbiAgYW5zd2VycyB7XFxuICAgIGFuc3dlcklkXFxuICAgIGFuc3dlclRleHRcXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuc0NvbnRhaW5lclwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uQnlJbmRleFwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiaW5kZXhcIixcbiAgICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJJZFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5zXCIsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHYyLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHYzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0aW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJUaW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJtaW51dGVzXCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInZhcmlhdGlvblBsYW5zXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB2MyxcbiAgICAgICAgICAgICAgdjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnZTU2NGYzYjU4NjY0ZmNjMmEyNzcwYzNjMTExYjRiNGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFZhbGlkYXRpb25FcnJvcnMgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3JzJztcblxuY29uc3QgVmFsaWRhdGlvbkZpZWxkID0gKHtcbiAgY2hpbGRyZW4sXG4gIGVycm9yLFxuICB0b3VjaGVkLFxuICBjbGFzc05hbWUsXG59KSA9PiB7XG4gIGxldCBlcnJvcnMgPSBlcnJvcjtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoZXJyb3IpKSB7XG4gICAgZXJyb3JzID0gW2Vycm9yXTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7dG91Y2hlZCA/IDxWYWxpZGF0aW9uRXJyb3JzIGVycm9ycz17ZXJyb3JzfSAvPiA6IG51bGx9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5WYWxpZGF0aW9uRmllbGQuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuVmFsaWRhdGlvbkZpZWxkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIHRvdWNoZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbkZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbkZpZWxkL3ZhbGlkYXRpb25GaWVsZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gJy4vdmFsaWRhdGlvbkVycm9yJztcblxuY29uc3QgRXJyb3JzID0gKHsgZXJyb3JzIH0pID0+IChcbiAgZXJyb3JzLmxlbmd0aCA/IChcbiAgICA8ZGl2PlxuICAgICAge2Vycm9ycy5tYXAoZXJyb3IgPT4gPFZhbGlkYXRpb25FcnJvciBrZXk9e2Vycm9yfSBlcnJvcj17ZXJyb3J9IC8+KX1cbiAgICA8L2Rpdj5cbiAgKSA6IG51bGxcbik7XG5cbkVycm9ycy5wcm9wVHlwZXMgPSB7XG4gIGVycm9yczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvcnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkVycm9ycy5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggNzg4M2QyZDAyZDE3ZDEwZTg1Zjk4NzdkYTY4ZWY0N2VcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDoge1xuICAgIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcmVjYXB0Y2hhOiBzdHJpbmcsXG4gIH0sXG58fTtcbmV4cG9ydCB0eXBlIHN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvblJlc3BvbnNlID0ge3xcbiAgK3N1YnNjcmliZU5ld3NsZXR0ZXI6ID97fFxuICAgICtjbGllbnRNdXRhdGlvbklkOiA/c3RyaW5nLFxuICB8fSxcbnx9O1xuKi9cblxuXG4vKlxubXV0YXRpb24gc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uKFxuICAkaW5wdXQ6IFN1YnNjcmliZU5ld3NsZXR0ZXJJbnB1dCFcbikge1xuICBzdWJzY3JpYmVOZXdzbGV0dGVyKGlucHV0OiAkaW5wdXQpIHtcbiAgICBjbGllbnRNdXRhdGlvbklkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgIFwidHlwZVwiOiBcIlN1YnNjcmliZU5ld3NsZXR0ZXJJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgXCJhbGlhc1wiOiBudWxsLFxuICAgIFwibmFtZVwiOiBcInN1YnNjcmliZU5ld3NsZXR0ZXJcIixcbiAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICBcImFyZ3NcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJWYXJpYWJsZVwiLFxuICAgICAgICBcIm5hbWVcIjogXCJpbnB1dFwiLFxuICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgICAgIFwidHlwZVwiOiBcIlN1YnNjcmliZU5ld3NsZXR0ZXJJbnB1dCFcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJjb25jcmV0ZVR5cGVcIjogXCJTdWJzY3JpYmVOZXdzbGV0dGVyUGF5bG9hZFwiLFxuICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwiY2xpZW50TXV0YXRpb25JZFwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH1cbl07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcIm11dGF0aW9uXCIsXG4gIFwibmFtZVwiOiBcInN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbihcXG4gICRpbnB1dDogU3Vic2NyaWJlTmV3c2xldHRlcklucHV0IVxcbikge1xcbiAgc3Vic2NyaWJlTmV3c2xldHRlcihpbnB1dDogJGlucHV0KSB7XFxuICAgIGNsaWVudE11dGF0aW9uSWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwic3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uXCIsXG4gICAgXCJ0eXBlXCI6IFwiTXV0YXRpb25cIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MVxuICB9LFxuICBcIm9wZXJhdGlvblwiOiB7XG4gICAgXCJraW5kXCI6IFwiT3BlcmF0aW9uXCIsXG4gICAgXCJuYW1lXCI6IFwic3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uXCIsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IHYwLFxuICAgIFwic2VsZWN0aW9uc1wiOiB2MVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzRjOTgyM2JmNWMxNjZlOGI2NTVjMGYyMjhlNjI5MTU0Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZW1haWwvX19nZW5lcmF0ZWRfXy9zdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24uZ3JhcGhxbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAnaXNvbW9ycGhpYy1mZXRjaCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcbmltcG9ydCB7IENvb2tpZXNQcm92aWRlciB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0aW5nL3JvdXRlcic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS9zdG9yZSc7XG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudC9lbnZpcm9ubWVudCc7XG5cbmNvbnN0IHJlc29sdmVyID0gbmV3IFJlc29sdmVyKGVudmlyb25tZW50KTtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Q29va2llc1Byb3ZpZGVyPlxuICAgICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICAgIDwvQ29va2llc1Byb3ZpZGVyPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZUNvbm5lY3RlZFJvdXRlcic7XG5pbXBvcnQgY3JlYXRlUmVuZGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVSZW5kZXInO1xuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7IGVycm9yLCByb3V0ZXIgfSkgPT4ge1xuICByb3V0ZXIucmVwbGFjZSh7XG4gICAgcGF0aG5hbWU6IGAvZXJyb3IvJHtlcnJvci5zdGF0dXN9YCxcbiAgICBzdGF0ZToge1xuICAgICAgZXJyb3I6IGVycm9yLmRhdGEsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5SZW5kZXJFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogUmVuZGVyRXJyb3IsXG4gIH0pLFxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGZvdW5kIGZyb20gJ2ZvdW5kL2xpYi9mb3VuZFJlZHVjZXInO1xuaW1wb3J0IEZhcmNlQWN0aW9ucyBmcm9tICdmYXJjZS9saWIvQWN0aW9ucyc7XG5pbXBvcnQgQnJvd3NlclByb3RvY29sIGZyb20gJ2ZhcmNlL2xpYi9Ccm93c2VyUHJvdG9jb2wnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnlFbmhhbmNlciBmcm9tICdmYXJjZS9saWIvY3JlYXRlSGlzdG9yeUVuaGFuY2VyJztcbmltcG9ydCBxdWVyeU1pZGRsZXdhcmUgZnJvbSAnZmFyY2UvbGliL3F1ZXJ5TWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlTWF0Y2hFbmhhbmNlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlTWF0Y2hFbmhhbmNlcic7XG5pbXBvcnQgTWF0Y2hlciBmcm9tICdmb3VuZC9saWIvTWF0Y2hlcic7XG5cbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuLi9yb3V0aW5nL3JvdXRlQ29uZmlnJztcbmltcG9ydCBwb3B1cCBmcm9tICcuLi8uLi9zaGFyZWQvcG9wdXAvcmVkdWNlcic7XG5pbXBvcnQgdXNlciBmcm9tICcuLi8uLi91c2VyL3JlZHVjZXInO1xuaW1wb3J0IG1vZGFsIGZyb20gJy4uLy4uL3NoYXJlZC9tb2RhbC9yZWR1Y2VyJztcblxuY29uc3QgaGlzdG9yeUVuaGFuY2VyID0gY3JlYXRlSGlzdG9yeUVuaGFuY2VyKHtcbiAgcHJvdG9jb2w6IG5ldyBCcm93c2VyUHJvdG9jb2woKSxcbiAgbWlkZGxld2FyZXM6IFtxdWVyeU1pZGRsZXdhcmVdLFxufSk7XG5cbmNvbnN0IG1hdGNoZXJFbmhhbmNlciA9IGNyZWF0ZU1hdGNoRW5oYW5jZXIoXG4gIG5ldyBNYXRjaGVyKHJvdXRlQ29uZmlnKSxcbik7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2U7XG5cbmNvbnN0IG1pZGRsZVdhcmUgPSBjb21wb3NlRW5oYW5jZXJzKFxuICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxuICBoaXN0b3J5RW5oYW5jZXIsXG4gIG1hdGNoZXJFbmhhbmNlcixcbik7XG5cbmNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgZm91bmQsXG4gIGZvcm0sXG4gIHBvcHVwLFxuICBtb2RhbCxcbiAgdXNlcixcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCB7fSwgbWlkZGxlV2FyZSk7XG5cbnN0b3JlLmRpc3BhdGNoKEZhcmNlQWN0aW9ucy5pbml0KCkpO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYWtlUm91dGVDb25maWcgZnJvbSAnZm91bmQvbGliL21ha2VSb3V0ZUNvbmZpZyc7XG5pbXBvcnQgUm91dGUgZnJvbSAnZm91bmQvbGliL1JvdXRlJztcblxuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZml0bmVzc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZml0bmVzcy9maXRuZXNzQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9mb290ZXIvaW1wcmludENvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBlcnJvclBhZ2VSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpbWFyeUxheW91dFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBtYWtlUm91dGVDb25maWcoXG4gIDxSb3V0ZSBwYXRoPVwiL1wiIHsuLi5wcmltYXJ5TGF5b3V0Um91dGVDb25maWd9PlxuICAgIDxSb3V0ZSB7Li4uZml0bmVzc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiZXJyb3IvOnN0YXR1c1wiIHsuLi5lcnJvclBhZ2VSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInRlcm1zQW5kQ29uZGl0aW9uc1wiIHsuLi50ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cInByaXZhY3lQb2xpY3lcIiB7Li4ucHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwiaW1wcmludFwiIHsuLi5pbXByaW50Um91dGVDb25maWd9IC8+XG4gIDwvUm91dGU+LFxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHdpdGhQcm9wcywgbGlmZWN5Y2xlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHJlZmV0Y2hDb250YWluZXIgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IHdpdGhDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcbmltcG9ydCB7IHNob3dNb2RhbCB9IGZyb20gJy4uL3NoYXJlZC9tb2RhbC9hY3Rpb25zJztcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgZml0bmVzc0NvbnRhaW5lciBvbiBRdWVyeSB7XG4gICAgcXVlc3Rpb25CeUluZGV4IChcbiAgICAgIGluZGV4OiAkcXVlc3Rpb25JbmRleFxuICAgICkge1xuICAgICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cbiAgICB9XG4gICAgLi4uZml0bmVzc1BsYW5zQ29udGFpbmVyXG4gIH1cbmA7XG5cbmNvbnN0IHJlZmV0Y2hRdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IGZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkoXG4gICAgJHF1ZXN0aW9uSW5kZXg6IEludFxuICApIHtcbiAgICAuLi5maXRuZXNzQ29udGFpbmVyXG4gIH1cbmA7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5KFxuICAgICRxdWVzdGlvbkluZGV4OiBJbnRcbiAgKSB7XG4gICAgLi4uZml0bmVzc0NvbnRhaW5lclxuICAgIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxuICB9XG5gO1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgZ2V0TmV4dFF1ZXN0aW9uOiAoeyByZWxheSB9KSA9PiBxdWVzdGlvbkluZGV4ID0+IHJlbGF5LnJlZmV0Y2goeyBxdWVzdGlvbkluZGV4IH0pLFxufTtcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IGNvbXBvc2UoXG4gIGNvbm5lY3QoKSxcbiAgd2l0aENvb2tpZXMsXG4gIHJlZmV0Y2hDb250YWluZXIoZnJhZ21lbnRzLCByZWZldGNoUXVlcnkpLFxuICB3aXRoUHJvcHMocHJvcHMgPT4gKHtcbiAgICBoYXNRdWVzdGlvbjogcHJvcHMuZGF0YS5xdWVzdGlvbkJ5SW5kZXggIT09IG51bGwsXG4gIH0pKSxcbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKG5leHRQcm9wcy5oYXNRdWVzdGlvbiAhPT0gdGhpcy5wcm9wcy5oYXNRdWVzdGlvbiAmJlxuICAgICAgICAgICFuZXh0UHJvcHMuaGFzUXVlc3Rpb24pIHtcbiAgICAgICAgY29uc3QgbmV3c2xldHRlclBvcHVwU2hvd24gPSB0aGlzLnByb3BzLmNvb2tpZXMuZ2V0KCduZXdzbGV0dGVyUG9wdXBTaG93bicpO1xuXG4gICAgICAgIGlmICghbmV3c2xldHRlclBvcHVwU2hvd24pIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNob3dNb2RhbCgnZml0bmVzc1BsYW5zJykpO1xuICAgICAgICAgIGNvbnN0IGV4cGlyZXMgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgZXhwaXJlcy5zZXREYXRlKGV4cGlyZXMuZ2V0RGF0ZSgpICsgMTUpO1xuXG4gICAgICAgICAgdGhpcy5wcm9wcy5jb29raWVzLnNldCgnbmV3c2xldHRlclBvcHVwU2hvd24nLCB0cnVlLCB7XG4gICAgICAgICAgICBleHBpcmVzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKEZpdG5lc3MpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogRml0bmVzc0NvbnRhaW5lcixcbiAgcXVlcnksXG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgPEZpdG5lc3NDb250YWluZXIgZGF0YT17cHJvcHN9IC8+LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBRQW5kQSBmcm9tICcuLi9xQW5kQS9xQW5kQUNvbnRhaW5lcic7XG5pbXBvcnQgRml0bmVzc1BsYW5zIGZyb20gJy4vZml0bmVzc1BsYW5zQ29udGFpbmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuaW1wb3J0IEZpdG5lc3NQbGFuc1JhbmtlZCBmcm9tICcuLi9maXRuZXNzL2ZpdG5lc3NQbGFuc1JhbmtlZENvbnRhaW5lcic7XG5cbmNvbnN0IEZpdG5lc3MgPSBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZml0bmVzc30+XG4gICAgPGRpdj5cbiAgICAgIHtwcm9wcy5oYXNRdWVzdGlvbiA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIDxkaXY+bGV0JmFwb3M7cyBzdWdnZXN0IGEgZml0bmVzcyBwbGFuIGZvciB5b3UuPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnNpbXBseSBhbnN3ZXIgYSBmZXcgcXVlc3Rpb25zLi4uPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFFBbmRBIHF1ZXN0aW9uPXtwcm9wcy5kYXRhLnF1ZXN0aW9uQnlJbmRleH0gZ2V0TmV4dFF1ZXN0aW9uPXtwcm9wcy5nZXROZXh0UXVlc3Rpb259IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+b3Igc2VlIGFsbCBjZXJ0aWZpZWQgZml0bmVzcyBwbGFuczwvZGl2PlxuICAgICAgICAgIDxGaXRuZXNzUGxhbnMgZGF0YT17cHJvcHMuZGF0YX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgPGRpdj5Zb3VyIHN1Z2dlc3RlZCBmaXRuZXNzIHBsYW5zLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGaXRuZXNzUGxhbnNSYW5rZWQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkZpdG5lc3MucHJvcFR5cGVzID0ge1xuICBoYXNRdWVzdGlvbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZ2V0TmV4dFF1ZXN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHF1ZXN0aW9uQnlJbmRleDogUHJvcFR5cGVzLm9iamVjdCxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMsIHNldFByb3BUeXBlcywgZmxhdHRlblByb3AgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5pbXBvcnQgcUFuZEEgZnJvbSAnLi9xQW5kQSc7XG5pbXBvcnQgc3VibWl0QW5zd2VyTXV0YXRpb24gZnJvbSAnLi9zdWJtaXRBbnN3ZXJNdXRhdGlvbic7XG5cbmxldCBxdWVzdGlvbkluZGV4ID0gMDtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIGFuc3dlck9uQ2xpY2s6ICh7IGRpc3BhdGNoLCBnZXROZXh0UXVlc3Rpb24gfSkgPT4gKGlkKSA9PiB7XG4gICAgcXVlc3Rpb25JbmRleCArPSAxO1xuICAgIHN1Ym1pdEFuc3dlck11dGF0aW9uKGlkLCBkaXNwYXRjaCk7XG4gICAgZ2V0TmV4dFF1ZXN0aW9uKHF1ZXN0aW9uSW5kZXgpO1xuICB9LFxufTtcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xuICAgIHF1ZXN0aW9uVGV4dFxuICAgIGFuc3dlcnMge1xuICAgICAgYW5zd2VySWRcbiAgICAgIGFuc3dlclRleHRcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgZ2V0TmV4dFF1ZXN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgc2V0UHJvcFR5cGVzKHByb3BUeXBlcyksXG4gIGNvbm5lY3QoKSxcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbiAgZmxhdHRlblByb3AoJ3F1ZXN0aW9uJyksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4pKHFBbmRBKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEFDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3FBbmRBLmxlc3MnO1xuXG5jb25zdCBRQW5kQSA9ICh7IHF1ZXN0aW9uVGV4dCwgYW5zd2VycywgYW5zd2VyT25DbGljayB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucUFuZEF9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXVlc3Rpb259PntxdWVzdGlvblRleHR9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YW5zd2VyLmFuc3dlcklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJDb250YWluZXJ9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlck9uQ2xpY2soYW5zd2VyLmFuc3dlcklkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YW5zd2VyLmFuc3dlclRleHR9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUUFuZEEucHJvcFR5cGVzID0ge1xuICBxdWVzdGlvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFuc3dlcklkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZi5pc1JlcXVpcmVkLFxuICAgICAgYW5zd2VyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbiAgYW5zd2VyT25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFFBbmRBO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInFBbmRBXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xQW5kQS0tM0xaa25cIixcInF1ZXN0aW9uXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19xdWVzdGlvbi0tMjNVVGZcIixcImFuc3dlckNvbnRhaW5lclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyQ29udGFpbmVyLS0xQlhrU1wiLFwiYW5zd2Vyc1wiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2Vycy0tMTlXTWNcIixcImFuc3dlclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyLS0ycjFRSFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzc1xuLy8gbW9kdWxlIGlkID0gNzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5pbXBvcnQgeyBjcmVhdGVNdXRhdGlvbiB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5pbXBvcnQgeyByYW5rRml0bmVzc1BsYW5zIH0gZnJvbSAnLi4vdXNlci9hY3Rpb25zJztcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcbiAgICAkaW5wdXQ6IFN1Ym1pdEFuc3dlcklucHV0IVxuICApIHtcbiAgICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgYW5zd2VyIHtcbiAgICAgICAgcG9pbnRzXG4gICAgICAgIHF1ZXN0aW9uIHtcbiAgICAgICAgICBmaXRuZXNzUGxhbkFuc3dlclBvaW50cyB7XG4gICAgICAgICAgICBwb2ludHNcbiAgICAgICAgICAgIGZpdG5lc3NQbGFuIHtcbiAgICAgICAgICAgICAgZml0bmVzc1BsYW5JZFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIGRheXNQZXJXZWVrXG4gICAgICAgICAgICAgIHRpbWVUb1dvcmtvdXQge1xuICAgICAgICAgICAgICAgIGhvdXJzXG4gICAgICAgICAgICAgICAgbWludXRlc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC4uLnZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCAoaWQsIGRpc3BhdGNoKSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgaWQsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApLnRoZW4oKHsgc3VibWl0QW5zd2VyIH0pID0+IHtcbiAgICBjb25zdCB7IHF1ZXN0aW9uLCBwb2ludHMgfSA9IHN1Ym1pdEFuc3dlci5hbnN3ZXI7XG4gICAgY29uc3QgZml0bmVzc1BsYW5zUG9pbnRzID0gcXVlc3Rpb24uZml0bmVzc1BsYW5BbnN3ZXJQb2ludHNcbiAgICAgIC5maWx0ZXIoeCA9PiB4LmZpdG5lc3NQbGFuLm5hbWUpXG4gICAgICAubWFwKHggPT4gKHtcbiAgICAgICAgcG9pbnRzOiB4LnBvaW50cyxcbiAgICAgICAgLi4ueC5maXRuZXNzUGxhbixcbiAgICAgIH0pKTtcblxuICAgIGRpc3BhdGNoKHJhbmtGaXRuZXNzUGxhbnMoZml0bmVzc1BsYW5zUG9pbnRzLCBwb2ludHMpKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9xQW5kQS9zdWJtaXRBbnN3ZXJNdXRhdGlvbi5qcyIsImV4cG9ydCBjb25zdCByYW5rRml0bmVzc1BsYW5zID0gKGZpdG5lc3NQbGFuc1BvaW50cywgYW5zd2VyUG9pbnRzKSA9PiAoe1xuICB0eXBlOiAnUkFOS19GSVRORVNTX1BMQU5TJyxcbiAgZml0bmVzc1BsYW5zUG9pbnRzLFxuICBhbnN3ZXJQb2ludHMsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvdXNlci9hY3Rpb25zLmpzIiwiaW1wb3J0IHsgY29tcG9zZSwgZmxhdHRlblByb3AgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcbmltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5cbmltcG9ydCBGaXRuZXNzUGxhbnMgZnJvbSAnLi9maXRuZXNzUGxhbnMnO1xuXG5jb25zdCBmcmFnbWVudHMgPSBncmFwaHFsYFxuICBmcmFnbWVudCBmaXRuZXNzUGxhbnNDb250YWluZXIgb24gUXVlcnkge1xuICAgIGZpdG5lc3NQbGFucyB7XG4gICAgICBmaXRuZXNzUGxhbklkXG4gICAgICBuYW1lXG4gICAgICBkZXNjcmlwdGlvblxuICAgICAgZGF5c1BlcldlZWtcbiAgICAgIHRpbWVUb1dvcmtvdXQge1xuICAgICAgICBob3Vyc1xuICAgICAgICBtaW51dGVzXG4gICAgICB9XG4gICAgICAuLi52YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbiAgZmxhdHRlblByb3AoJ2RhdGEnKSxcbikoRml0bmVzc1BsYW5zKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpdG5lc3NQbGFucy5sZXNzJztcbmltcG9ydCBjb252ZXJ0VGltZVRvV29ya291dCBmcm9tICcuLi9zaGFyZWQvdXRpbGl0aWVzL2NvbnZlcnRUaW1lVG9Xb3Jrb3V0JztcbmltcG9ydCBWYXJpYXRpb25QbGFucyBmcm9tICcuL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyJztcblxuY29uc3QgRml0bmVzc1BsYW5zID0gKHsgZml0bmVzc1BsYW5zIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXRuZXNzUGxhbnN9PlxuICAgIDx1bD5cbiAgICAgIHtmaXRuZXNzUGxhbnMubWFwKGZpdG5lc3NQbGFuID0+IChcbiAgICAgICAgPGxpIGtleT17Zml0bmVzc1BsYW4uZml0bmVzc1BsYW5JZH0gY2xhc3NOYW1lPXtzdHlsZXMuZml0bmVzc1BsYW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2ZpdG5lc3NQbGFuLm5hbWV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheXNQZXJXZWVrfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAgICAgIFdvcmtvdXRzIHBlciB3ZWVrOlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+XG4gICAgICAgICAgICAgICAge2ZpdG5lc3NQbGFuLmRheXNQZXJXZWVrfSBkYXlzXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgey8qIDxWYXJpYXRpb25QbGFucyBmaXRuZXNzUGxhbj17Zml0bmVzc1BsYW59IC8+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVQZXJXb3Jrb3V0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAgICAgIFRpbWUgcGVyIHdvcmtvdXQ6XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cbiAgICAgICAgICAgICAgICB7Y29udmVydFRpbWVUb1dvcmtvdXQoZml0bmVzc1BsYW4udGltZVRvV29ya291dCl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntmaXRuZXNzUGxhbi5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICkpfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxuKTtcblxuRml0bmVzc1BsYW5zLnByb3BUeXBlcyA9IHtcbiAgZml0bmVzc1BsYW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZml0bmVzc1BsYW5JZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRheXNQZXJXZWVrOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB0aW1lVG9Xb3Jrb3V0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBob3VyczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBtaW51dGVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICB9KSxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzUGxhbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzUGxhbnMubGVzcyc7XG5cbmNvbnN0IFZhcmlhdGlvblBsYW5zID0gKHsgdmFyaWF0aW9uUGxhbnMgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5c1BlcldlZWt9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICBBbHRlcm5hdGl2ZSB3b3Jrb3V0cyBwZXIgd2VlazpcbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcnN9PlxuICAgICAgICB7dmFyaWF0aW9uUGxhbnMubWFwKCh2YXJpYXRpb25QbGFuLCBpKSA9PiAoXG4gICAgICAgICAgPHNwYW4ga2V5PXt2YXJpYXRpb25QbGFuLmZpdG5lc3NQbGFuSWR9IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+XG4gICAgICAgICAgICB7dmFyaWF0aW9uUGxhbi5kYXlzUGVyV2Vla317aSA8ICh2YXJpYXRpb25QbGFucy5sZW5ndGggLSAxKSA/ICcvJyA6IG51bGx9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIGRheXNcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5WYXJpYXRpb25QbGFucy5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhdGlvblBsYW5zOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgZGF5c1BlcldlZWs6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWYXJpYXRpb25QbGFucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy92YXJpYXRpb25QbGFucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZpdG5lc3NcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzX19maXRuZXNzLS1SaTc3ZFwiLFwidGl0bGVcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzX190aXRsZS0tMmFOS0lcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgZml0bmVzc1BsYW5zUmFua2VkIGZyb20gJy4vZml0bmVzc1BsYW5zUmFrZWQnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyB1c2VyIH0pID0+ICh7XG4gIHJhbmtlZEZpdG5lc3NQbGFuczogdXNlci5yYW5rZWRGaXRuZXNzUGxhbnMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpLFxuKShmaXRuZXNzUGxhbnNSYW5rZWQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1JhbmtlZENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZml0bmVzc1BsYW5zLmxlc3MnO1xuaW1wb3J0IGNvbnZlcnRUaW1lVG9Xb3Jrb3V0IGZyb20gJy4uL3NoYXJlZC91dGlsaXRpZXMvY29udmVydFRpbWVUb1dvcmtvdXQnO1xuaW1wb3J0IFZhcmlhdGlvblBsYW5zIGZyb20gJy4vdmFyaWF0aW9uUGxhbnNDb250YWluZXInO1xuXG5jb25zdCBGaXRuZXNzUGxhbnNSYW5rZWQgPSAoeyByYW5rZWRGaXRuZXNzUGxhbnMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3NQbGFuc30+XG4gICAgPG9sPlxuICAgICAge3JhbmtlZEZpdG5lc3NQbGFucy5tYXAoZml0bmVzc1BsYW4gPT4gKFxuICAgICAgICA8bGkga2V5PXtmaXRuZXNzUGxhbi5maXRuZXNzUGxhbklkfSBjbGFzc05hbWU9e3N0eWxlcy5maXRuZXNzUGxhblJhbmtlZH0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2ZpdG5lc3NQbGFuLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlzUGVyV2Vla30+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgV29ya291dHMgcGVyIHdlZWs6XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+XG4gICAgICAgICAgICAgICAgICB7Zml0bmVzc1BsYW4uZGF5c1BlcldlZWt9IGRheXNcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgey8qIDxWYXJpYXRpb25QbGFucyBmaXRuZXNzUGxhbj17Zml0bmVzc1BsYW59IC8+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lUGVyV29ya291dH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PlxuICAgICAgICAgICAgICAgICAgVGltZSBwZXIgd29ya291dDpcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cbiAgICAgICAgICAgICAgICAgIHtjb252ZXJ0VGltZVRvV29ya291dChmaXRuZXNzUGxhbi50aW1lVG9Xb3Jrb3V0KX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57Zml0bmVzc1BsYW4uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L29sPlxuICA8L2Rpdj5cbik7XG5cbkZpdG5lc3NQbGFuc1JhbmtlZC5wcm9wVHlwZXMgPSB7XG4gIHJhbmtlZEZpdG5lc3NQbGFuczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGZpdG5lc3NQbGFuSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBkYXlzUGVyV2VlazogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGltZVRvV29ya291dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaG91cnM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbWludXRlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc1BsYW5zUmFua2VkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFuc1Jha2VkLmpzIiwibGV0IGRvY3VtZW50U2Nyb2xsVG9wID0gMDtcbmxldCBib2R5U2Nyb2xsVG9wID0gMDtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVCb2R5U2Nyb2xsID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICAvLyBmb2xsb3dpbmcgaXMgbmVjY2Vzc2FyeSBvbiBpT1MuIHBvc2l0aW9uIGZpeGVkIHdpbGwgcmVzZXQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgZG9jdW1lbnRTY3JvbGxUb3AgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBib2R5U2Nyb2xsVG9wID0gd2luZG93LmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucmlnaHQgPSAwO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubGVmdCA9IDA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZXNldEJvZHlTY3JvbGwgPSAoKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJpZ2h0ID0gJ2luaXRpYWwnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubGVmdCA9ICdpbml0aWFsJztcblxuICAgIC8vIHJlc2V0IHBvc2l0aW9uIGFuZCBzY3JvbGwgcG9zaXRpb25cbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdHJ5IHsgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudFNjcm9sbFRvcDsgfSBjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKGUpOyB9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHRyeSB7IHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IGJvZHlTY3JvbGxUb3A7IH0gY2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcihlKTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3V0aWxpdGllcy9zY3JvbGxMb2NrLmpzIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnMgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gcmVnZ2VzdC5cbiAgICAgICZxdW90O0NvbnRlbnQmcXVvdDsgbWVhbnMgdGV4dCwgaW1hZ2VzLCBwaG90b3MsIGF1ZGlvLCB2aWRlbywgbG9jYXRpb24gZGF0YSxcbiAgICAgIGFuZCBhbGwgb3RoZXIgZm9ybXMgb2YgZGF0YSBvciBjb21tdW5pY2F0aW9uLlxuICAgICAgJnF1b3Q7WW91ciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLCBvciBpblxuICAgICAgY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLCBzdWNoIGFzIHJhdGluZ3MsIHJldmlld3MsIGNvbXBsaW1lbnRzLCBpbnZpdGF0aW9ucyxcbiAgICAgIGNoZWNrLWlucywgbWVzc2FnZXMsIGFuZCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwdWJsaWNseSBkaXNwbGF5IG9yIGRpc3BsYXllZCBpblxuICAgICAgeW91ciBhY2NvdW50IHByb2ZpbGUuXG4gICAgICAmcXVvdDtVc2VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHVzZXJzIHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCxcbiAgICAgIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS4gJnF1b3Q7cmVnZ2VzdCBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdFxuICAgICAgd2UgY3JlYXRlIGFuZCBtYWtlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtUaGlyZCBQYXJ0eSBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCBvcmlnaW5hdGVzIGZyb20gcGFydGllcyBvdGhlclxuICAgICAgdGhhbiByZWdnZXN0IG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCByZWdnZXN0IENvbnRlbnQuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRlcm1zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgYWNjZXNzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieSB0aGVzZSB3ZWJzaXRlIFRlcm1zXG4gICAgICAgICAgYW5kIENvbmRpdGlvbnMgb2YgVXNlLCBhbGwgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucywgYW5kIGFncmVlIHRoYXQgeW91XG4gICAgICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBjb21wbGlhbmNlIHdpdGggYW55IGFwcGxpY2FibGUgbG9jYWwgbGF3cy5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggYW55IG9mIHRoZXNlIHRlcm1zLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyBvclxuICAgICAgICAgIGFjY2Vzc2luZyB0aGlzIHNpdGUuIFRoZSBtYXRlcmlhbHMgY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBhcmUgcHJvdGVjdGVkXG4gICAgICAgICAgYnkgYXBwbGljYWJsZSBjb3B5cmlnaHQgYW5kIHRyYWRlIG1hcmsgbGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgb24gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBhcmUgcHJvdmlkZWQgJnF1b3Q7YXMgc2hvd24mcXVvdDsuXG4gICAgICAgICAgcmVnZ2VzdCBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICBsaWtlbHkgcmVzdWx0cywgb3IgcmVsaWFiaWxpdHkgb2YgdGhlIHVzZSBvZiB0aGUgbWF0ZXJpYWxzIG9uIGl0cyBpbnRlcm5ldFxuICAgICAgICAgIHdlYnNpdGUgb3Igb3RoZXJ3aXNlIHJlbGF0aW5nIHRvIHN1Y2ggbWF0ZXJpYWxzIG9yIG9uIGFueSBzaXRlcyBsaW5rZWQgdG8gdGhpcyBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGltaXRhdGlvbnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiBubyBldmVudCBzaGFsbCByZWdnZXN0IG9yIGl0cyBzdXBwbGllcnMgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyAoaW5jbHVkaW5nLCB3aXRob3V0XG4gICAgICAgICAgbGltaXRhdGlvbiwgZGFtYWdlcyBmb3IgbG9zcyBvZiBkYXRhIG9yIHByb2ZpdCwgb3IgZHVlIHRvIGJ1c2luZXNzIGludGVycnVwdGlvbilcbiAgICAgICAgICBhcmlzaW5nIG91dCBvZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlIG1hdGVyaWFscyBvbiBvdXIgaW50ZXJuZXQgc2l0ZSBvclxuICAgICAgICAgIG9mZmVyZWQgc2VydmljZXMsIGV2ZW4gaWYgd2Ugb3IgYW4gYXV0aG9yaXplZCByZXByZXNlbnRhdGl2ZSBoYXMgYmVlbiBub3RpZmllZFxuICAgICAgICAgIG9yYWxseSBvciBpbiB3cml0aW5nIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZS4gQmVjYXVzZSBzb21lIGp1cmlzZGljdGlvbnNcbiAgICAgICAgICBkbyBub3QgYWxsb3cgbGltaXRhdGlvbnMgb24gaW1wbGllZCB3YXJyYW50aWVzLCBvciBsaW1pdGF0aW9ucyBvZiBsaWFiaWxpdHkgZm9yXG4gICAgICAgICAgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIHRoZXNlIGxpbWl0YXRpb25zIG1heSBub3QgYXBwbHkgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+UmV2aXNpb25zIGFuZCBFcnJvcnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIGFwcGVhcmluZyBvbiBvdXIgd2Vic2l0ZSBjb3VsZCBpbmNsdWRlIHRlY2huaWNhbCwgdHlwb2dyYXBoaWNhbCxcbiAgICAgICAgICBvciBwaG90b2dyYXBoaWMgZXJyb3JzLiByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgcmVnZ2VzdCBoYXMgbm90IHJldmlld2VkIGFsbCBvZiB0aGUgc2l0ZXMgbGlua2VkIHRvIGl0cyBpbnRlcm5ldCB3ZWJzaXRlXG4gICAgICAgICAgYW5kIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRzIG9mIGFueSBzdWNoIGxpbmtlZCBzaXRlLlxuICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgYW55IGxpbmsgZG9lcyBub3QgaW1wbHkgZW5kb3JzZW1lbnQgYnkgdXMgb2YgdGhlIHNpdGUuXG4gICAgICAgICAgVXNlIG9mIGFueSBzdWNoIGxpbmtlZCB3ZWJzaXRlIGlzIGF0IHRoZSB1c2VyJnF1b3Q7cyBvd24gcmlzay5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvdmVybmluZyBMYXc8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbnkgY2xhaW0gcmVsYXRpbmcgdG8gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3c1xuICAgICAgICAgIG9mIHRoZSBjb3VudHJ5IG9mIG5vdGUgd2l0aG91dCByZWdhcmQgdG8gaXRzIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RW5nbGlzaCBMYW5ndWFnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGJldHdlZW4gdGhlc2UgVGVybXMgYW5kIGEgZm9yZWlnbiBsYW5ndWFnZSB2ZXJzaW9uXG4gICAgICAgICAgb2Ygb3VyIFRlcm1zIG9mIFVzZSwgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyBnb3Zlcm5zLlxuICAgICAgICAgIEFsbCBkaXNwdXRlcywgY2xhaW1zIGFuZCBjYXVzZXMgb2YgYWN0aW9uIChhbmQgcmVsYXRlZCBwcm9jZWVkaW5ncykgd2lsbCBiZVxuICAgICAgICAgIGNvbW11bmljYXRlZCBpbiBFbmdsaXNoLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q29weXJpZ2h0IHBvbGljeSwgbm90aWNlIGFuZCBjbGFpbSBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsbCBtYXRlcmlhbHMgb24gdGhpcyBzaXRlLCB3aGV0aGVyIHNlcGFyYXRlIG9yIGNvbXBpbGVkLCBpbmNsdWRpbmcsXG4gICAgICAgICAgYnV0IG5vdCBsaW1pdGVkIHRvLCB0ZXh0LCBncmFwaGljcywgYXVkaW8gY2xpcHMsIGxvZ29zLCBidXR0b25zLCBpbWFnZXMsXG4gICAgICAgICAgZGlnaXRhbCBkb3dubG9hZHMsIGRhdGEgY29tcGlsYXRpb25zLCBzb2Z0d2FyZSwgaWNvbnMsIGh0bWwgY29kZSBhbmQgeG1sIGNvZGUsXG4gICAgICAgICAgYXMgd2VsbCBhcyBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgZHJlc3MsIGFuZCBvdGhlciByaWdodHNcbiAgICAgICAgICB0aGVyZWluLCBhcmUgb3duZWQgb3IgbGljZW5zZWQgYnkgcmVnZ2VzdCBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlQ29udGVudFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcGFnZUNvbnRlbnRfX3BhZ2VDb250ZW50LS13cHV0V1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDczOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJpbXBvcnQgSW1wcmludCBmcm9tICcuL2ltcHJpbnQnO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltcHJpbnQubGVzcyc7XG5cbmNvbnN0IEltcHJpbnQgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltcHJpbnRDb250ZW50fT5cbiAgICAgIDxoMT5JbXByaW50PC9oMT5cbiAgICAgIDxkaXY+Q29tcGFueSBOYW1lOiBWQVNUIE5FVFdPUksgTFREPC9kaXY+XG4gICAgICA8ZGl2Pk1hbmFnaW5nIERpcmVjdG9yOiBNYXJ0aW4gRGF3c29uPC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3M6IDI2IENhbGRlclZpZXcsIFJhc3RyaWNrLCBCcmlnaG91c2UsIEhENjNEUSBVbml0ZWQgS2luZ2RvbTwvZGl2PlxuICAgICAgPGRpdj5UZWxlcGhvbmU6ICsoNDQpNzQ3MzU5MTA5NzwvZGl2PlxuICAgICAgPGRpdj5FbWFpbCBhZGRyZXNzOiBpbmZvQHJlZ2dlc3QuY29tPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWZvb3Rlci1pbXByaW50X19pbXByaW50Q29udGVudC0tMTVyTE1cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzLCBmbGF0dGVuUHJvcCB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9lcnJvclBhZ2UnO1xuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4ge1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzKGNyZWF0ZVByb3BzKSxcbik7XG5cbmNvbnN0IEVycm9yUGFnZUNvbnRhaW5lciA9IGVuaGFuY2UoRXJyb3JQYWdlKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIChcbiAgICA8RXJyb3JQYWdlQ29udGFpbmVyXG4gICAgICBzdGF0dXM9e3BhcnNlSW50KHByb3BzLnBhcmFtcy5zdGF0dXMsIDEwKX1cbiAgICAgIGVycm9yPXtwcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2UubGVzcyc7XG5cbmNvbnN0IEVycm9yUGFnZSA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0+XG4gICAgPGgxPkVycm9yIHtzdGF0dXN9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICAgV2UgaGF2ZSBiZWVuIG5vdGlmaWVkIG9mIHRoZSBlcnJvciDCr1xcXyjjg4QpXy/Cry4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQuJyxcbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcXVvdGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclBhZ2VcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JQYWdlLS0xYVMtelwiLFwiZXJyb3JcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3ItLTYyS1pDXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpbWFyeUxheW91dCBmcm9tICcuL3ByaW1hcnlMYXlvdXQnO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJpbWFyeUxheW91dC5sZXNzJztcbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi4vLi4vZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lcic7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRGlzcGxheVR5cGUgZnJvbSAnLi4vLi4vc2hhcmVkL2Rpc3BsYXlUeXBlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgUG9wdXBzIGZyb20gJy4uLy4uL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXInO1xuaW1wb3J0IE5ld3NsZXR0ZXJNb2RhbCBmcm9tICcuLi8uLi9lbWFpbC9uZXdzbGV0dGVyTW9kYWxDb250YWluZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxEaXNwbGF5VHlwZT5cbiAgICB7KGRpc3BsYXlUeXBlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5VHlwZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzTW9iaWxlICYmICdtb2JpbGUnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc1RhYmxldCAmJiAndGFibGV0JyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNEZXNrdG9wICYmICdkZXNrdG9wJyxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhkaXNwbGF5VHlwZUNsYXNzTmFtZSwgc3R5bGVzLnByaW1hcnlMYXlvdXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVnZ2VzdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCIgY2xhc3NOYW1lPXtzdHlsZXMucmVnZ2VzdH0+XG4gICAgICAgICAgICAgICAgICByZWdnZXN0XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJldGFMYWJlbH0+YmV0YTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vdG99PmZpdG5lc3MgcGxhbiBzdWdnZXN0ZXI8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8UG9wdXBzIC8+XG4gICAgICAgICAgPE5ld3NsZXR0ZXJNb2RhbCAvPlxuICAgICAgICAgIDxDb29raWVOb3RpY2UgLz5cbiAgICAgICAgPC9QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeT5cbiAgICAgICk7XG4gICAgfX1cbiAgPC9EaXNwbGF5VHlwZT5cbik7XG5cblByaW1hcnlMYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cblByaW1hcnlMYXlvdXQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInByaW1hcnlMYXlvdXRcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3ByaW1hcnlMYXlvdXQtLTNGVmpiXCIsXCJ3cmFwXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X193cmFwLS0zT3YzOFwiLFwibWFpblwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fbWFpbi0tMUc2YTFcIixcInJlZ2dlc3RDb250YWluZXJcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3JlZ2dlc3RDb250YWluZXItLTI0RzVHXCIsXCJyZWdnZXN0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19yZWdnZXN0LS1SSUhTQ1wiLFwiYmV0YUxhYmVsXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19iZXRhTGFiZWwtLU4wYWdHXCIsXCJtb3RvXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19tb3RvLS0zOFF6a1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbXBvc2UsIHdpdGhTdGF0ZUhhbmRsZXJzLCBsaWZlY3ljbGUsIGJyYW5jaCwgcmVuZGVyTm90aGluZyB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi9jb29raWVOb3RpY2UnO1xuXG5jb25zdCBzdGF0ZUhhbmRsZXJzID0ge1xuICBzaG93Q29va2llTm90aWNlOiAoKSA9PiAoKSA9PiAoe1xuICAgIHNob3dpbmdDb29raWVOb3RpY2U6IHRydWUsXG4gIH0pLFxuICBoaWRlQ29va2llTm90aWNlOiAoKSA9PiAoKSA9PiAoe1xuICAgIHNob3dpbmdDb29raWVOb3RpY2U6IGZhbHNlLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhTdGF0ZUhhbmRsZXJzKG51bGwsIHN0YXRlSGFuZGxlcnMpLFxuICBsaWZlY3ljbGUoe1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgY29uc3QgY29va2llTm90aWNlU2hvd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nKTtcblxuICAgICAgaWYgKCFjb29raWVOb3RpY2VTaG93bikge1xuICAgICAgICB0aGlzLnByb3BzLnNob3dDb29raWVOb3RpY2UodHJ1ZSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiAhcHJvcHMuc2hvd2luZ0Nvb2tpZU5vdGljZSxcbiAgICByZW5kZXJOb3RoaW5nLFxuICApLFxuKShDb29raWVOb3RpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb29raWVOb3RpY2UubGVzcyc7XG5cbmNvbnN0IENvb2tpZU5vdGljZSA9ICh7IGhpZGVDb29raWVOb3RpY2UgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvb2tpZU5vdGljZX0+XG4gICAgVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UsXG4gICAgYnkgY29udGludWluZyB0byB1c2UgdGhlIHNpdGUgeW91IGFyZSBhZ3JlZWluZyB0byBvdXIgdXNlIG9mIGNvb2tpZXMuXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoaWRlQ29va2llTm90aWNlfT5DbG9zZTwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbkNvb2tpZU5vdGljZS5wcm9wVHlwZXMgPSB7XG4gIGhpZGVDb29raWVOb3RpY2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWVOb3RpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJjb29raWVOb3RpY2VcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWNvb2tpZU5vdGljZV9fY29va2llTm90aWNlLS0zd1ZndVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdmb3VuZCc7XG5cbmNsYXNzIFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgLy8gdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Vycm9yLzUwMCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuXG5jbGFzcyBEaXNwbGF5VHlwZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXlUeXBlOiAnZGVza3RvcCcsXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheVR5cGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgfVxuXG4gIGdldERpc3BsYXlUeXBlID0gKHdpbmRvd1dpZHRoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludE1vYmlsZS52YWx1ZSkge1xuICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRUYWJsZXQudmFsdWUpIHtcbiAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2Rlc2t0b3AnO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVR5cGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gdGhpcy5nZXREaXNwbGF5VHlwZSh3aW5kb3dXaWR0aCk7XG5cbiAgICBpZiAoZGlzcGxheVR5cGUgIT09IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5VHlwZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB7XG4gICAgICBpc01vYmlsZTogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ21vYmlsZScsXG4gICAgICBpc1RhYmxldDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ3RhYmxldCcsXG4gICAgICBpc0Rlc2t0b3A6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdkZXNrdG9wJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oZGlzcGxheVR5cGUpO1xuICB9XG59XG5cbkRpc3BsYXlUeXBlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Rpc3BsYXlUeXBlLmpzIiwiY29uc3Qgc2l6ZXMgPSB7XG4gIGJyZWFrcG9pbnRNb2JpbGU6IHsgdmFsdWU6IDc2OCwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50VGFibGV0OiB7IHZhbHVlOiA5OTIsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludERlc2t0b3A6IHsgdmFsdWU6IDEyMDAsIHVuaXQ6ICdweCcgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpemVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5sZXNzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgPExpbmsgdG89XCIvdGVybXNBbmRDb25kaXRpb25zXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L0xpbms+XG4gICAgPExpbmsgdG89XCIvcHJpdmFjeVBvbGljeVwiPnByaXZhY3kgcG9saWN5PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2ltcHJpbnRcIj5pbXByaW50PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvb3RlclwiOlwiQ29tcG9uZW50cy1mb290ZXItZm9vdGVyX19mb290ZXItLTNTMW40XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgUG9wdXBzIGZyb20gJy4vcG9wdXBzJztcbmltcG9ydCB7IGhpZGVQb3B1cCB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHBvcHVwIH0pID0+ICh7XG4gIHBvcHVwczogcG9wdXAucG9wdXBzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gIGhpZGVQb3B1cCxcbn0pKFBvcHVwcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvcHVwIGZyb20gJy4vcG9wdXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwcy5sZXNzJztcblxuY29uc3QgUG9wdXBzID0gKHsgcG9wdXBzLCBoaWRlUG9wdXAgfSkgPT4gKFxuICBwb3B1cHMubGVuZ3RoID4gMCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVwc30+XG4gICAgICB7cG9wdXBzLm1hcCgocG9wdXAsIGluZGV4KSA9PiAoXG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIGtleT17cG9wdXAuaWR9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHRleHQ9e3BvcHVwLnRleHR9XG4gICAgICAgICAgaGlkZVBvcHVwPXtoaWRlUG9wdXB9XG4gICAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93PXtwb3B1cC5taWxsaXNlY29uZHNUb1Nob3d9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj4pXG4gICAgOiBudWxsXG4pO1xuXG5Qb3B1cHMucHJvcFR5cGVzID0ge1xuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBvcHVwczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBtaWxsaXNlY29uZHNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BvcHVwLmxlc3MnO1xuXG5jbGFzcyBQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChOdW1iZXIuaXNGaW5pdGUodGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucHJvcHMuaGlkZVBvcHVwKHRoaXMucHJvcHMuaW5kZXgpLCB0aGlzLnByb3BzLm1pbGxpc2Vjb25kc1RvU2hvdyk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5oaWRlUG9wdXAodGhpcy5wcm9wcy5pbmRleCl9PkNsb3NlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cF9fcG9wdXAtLTI0T1lNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwc1wiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBzX19wb3B1cHMtLTFtMUtFXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUaGUgdGV4dCB0byBzaG93IGluIHRoZSBwb3B1cFxuICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZHNUb1Nob3ddIC0gT3B0aW9uYWw6IFRoZSBhbW91bnQgb2YgdGltZVxuICogaW4gbWlsbGlzZWNvbmRzIHRvIHNob3cgdGhlIHBvcHVwXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93UG9wdXAgPSAodGV4dCwgbWlsbGlzZWNvbmRzVG9TaG93KSA9PiAoe1xuICB0eXBlOiAnU0hPV19QT1BVUCcsXG4gIHRleHQsXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gIG1pbGxpc2Vjb25kc1RvU2hvdyxcbn0pO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHBvcHVwIHRvIGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVQb3B1cCA9IGluZGV4ID0+ICh7XG4gIHR5cGU6ICdISURFX1BPUFVQJyxcbiAgaW5kZXgsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNob3dHZW5lcmljRXJyb3JQb3B1cCA9IChlcnJvcikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gc2hvd1BvcHVwKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSB0cnkgcmVmcmVzaGluZyB0aGUgcGFnZS4nKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwiaW1wb3J0IHsgcmVkdXhGb3JtLCBTdWJtaXNzaW9uRXJyb3IgfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhIYW5kbGVycyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTmV3c2xldHRlck1vZGFsIGZyb20gJy4vbmV3c2xldHRlck1vZGFsJztcbmltcG9ydCBuZXdzbGV0dGVyVmFsaWRhdGlvbiBmcm9tICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0IHN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbiBmcm9tICcuL3N1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbic7XG5pbXBvcnQgeyBoaWRlTW9kYWwgfSBmcm9tICcuLi9zaGFyZWQvbW9kYWwvYWN0aW9ucyc7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBoaWRlTW9kYWw6ICh7IGRpc3BhdGNoIH0pID0+ICgpID0+IGRpc3BhdGNoKGhpZGVNb2RhbCgpKSxcbiAgb25TdWJtaXQ6ICh7IGRpc3BhdGNoIH0pID0+IGlucHV0ID0+XG4gICAgc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uKGlucHV0LCBkaXNwYXRjaClcbiAgICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGhpZGVNb2RhbCgpKSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgdGhyb3cgbmV3IFN1Ym1pc3Npb25FcnJvcihlcnJvcik7XG4gICAgICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QoKSxcbiAgd2l0aEhhbmRsZXJzKGhhbmRsZXJzKSxcbiAgcmVkdXhGb3JtKHtcbiAgICBmb3JtOiAnbmV3c2xldHRlcicsXG4gICAgdmFsaWRhdGU6IG5ld3NsZXR0ZXJWYWxpZGF0aW9uLFxuICB9KSxcbikoTmV3c2xldHRlck1vZGFsKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbmV3c2xldHRlck1vZGFsLmxlc3MnO1xuaW1wb3J0IElucHV0VGV4dEZpZWxkIGZyb20gJy4uL3NoYXJlZC9pbnB1dEZpZWxkL2lucHV0VGV4dEZpZWxkJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9zaGFyZWQvbW9kYWwvbW9kYWxDb250YWluZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9zaGFyZWQvYnV0dG9uL2J1dHRvbic7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9ycyBmcm9tICcuLi9zaGFyZWQvdmFsaWRhdGlvbkZpZWxkL3ZhbGlkYXRpb25FcnJvcnMnO1xuaW1wb3J0IFJlY2FwdGNoYSBmcm9tICcuLi9lbWFpbC9yZWNhcHRjaGEnO1xuXG5jb25zdCBOZXdzbGV0dGVyTW9kYWwgPSAoeyBoYW5kbGVTdWJtaXQsIGVycm9yLCBoaWRlTW9kYWwgfSkgPT4gKFxuICA8TW9kYWwgdGl0bGU9XCJTdWJzY3JpYmUuXCIgaWQ9XCJmaXRuZXNzUGxhbnNcIiBhbGxvd092ZXJsYXlIaWRlTW9kYWw9e2ZhbHNlfT5cbiAgICA8VmFsaWRhdGlvbkVycm9ycyBlcnJvcnM9e2Vycm9yfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Vic2NyaWJlVGV4dH0+XG4gICAgICA8ZGl2PlN1YnNjcmliZSB0byBnZXQgeW91ciBmaXRuZXNzIHBsYW5zIGVtYWlsZWQgdG8geW91LjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGFjdGlvbj1cIlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maWVsZHN9PlxuICAgICAgICA8RmllbGQgbmFtZT1cImVtYWlsXCIgY29tcG9uZW50PXtJbnB1dFRleHRGaWVsZH0gcGxhY2Vob2xkZXI9XCJlbWFpbCAocmVxdWlyZWQpXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8RmllbGQgbmFtZT1cInJlY2FwdGNoYVwiIGNvbXBvbmVudD17UmVjYXB0Y2hhfSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxuICAgICAgICA8QnV0dG9uIHN0eWxlTmFtZT1cInByaW1hcnlcIiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbEJ1dHRvbn0+XG4gICAgICAgICAgU3Vic2NyaWJlIG1lXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHN0eWxlTmFtZT1cInByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMubm9UaGFua3NCdXR0b259IG9uQ2xpY2s9e2hpZGVNb2RhbH0+XG4gICAgICAgICAgTm8gdGhhbmtzXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L01vZGFsPlxuKTtcblxuTmV3c2xldHRlck1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IFtdLFxufTtcblxuTmV3c2xldHRlck1vZGFsLnByb3BUeXBlcyA9IHtcbiAgaGFuZGxlU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICApLFxuICBoaWRlTW9kYWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyTW9kYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2VtYWlsL25ld3NsZXR0ZXJNb2RhbC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vZGFsXCI6XCJDb21wb25lbnRzLWVtYWlsLW5ld3NsZXR0ZXJNb2RhbF9fbW9kYWwtLTJZbGxEXCIsXCJjbG9zZVwiOlwiQ29tcG9uZW50cy1lbWFpbC1uZXdzbGV0dGVyTW9kYWxfX2Nsb3NlLS0zbFNoVFwiLFwidGl0bGVcIjpcIkNvbXBvbmVudHMtZW1haWwtbmV3c2xldHRlck1vZGFsX190aXRsZS0tM1dqQXVcIixcImZpZWxkc1wiOlwiQ29tcG9uZW50cy1lbWFpbC1uZXdzbGV0dGVyTW9kYWxfX2ZpZWxkcy0tMlo3dk1cIixcInN1YnNjcmliZVRleHRcIjpcIkNvbXBvbmVudHMtZW1haWwtbmV3c2xldHRlck1vZGFsX19zdWJzY3JpYmVUZXh0LS0yM1A4eFwiLFwiYnV0dG9uc1wiOlwiQ29tcG9uZW50cy1lbWFpbC1uZXdzbGV0dGVyTW9kYWxfX2J1dHRvbnMtLTNlX1JoXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lbWFpbC9uZXdzbGV0dGVyTW9kYWwubGVzc1xuLy8gbW9kdWxlIGlkID0gNzgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVmFsaWRhdGlvbkZpZWxkIGZyb20gJy4uL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRmllbGQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lucHV0VGV4dEZpZWxkLmxlc3MnO1xuXG5jb25zdCBJbnB1dFRleHRGaWVsZCA9ICh7XG4gIGlucHV0LFxuICBtZXRhOiB7IHRvdWNoZWQsIGVycm9yID0gW10gfSxcbiAgLi4ucHJvcHNcbn0pID0+IChcbiAgPFZhbGlkYXRpb25GaWVsZCB0b3VjaGVkPXt0b3VjaGVkfSBlcnJvcj17ZXJyb3J9PlxuICAgIDxpbnB1dFxuICAgICAgey4uLmlucHV0fVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgPC9WYWxpZGF0aW9uRmllbGQ+XG4pO1xuXG5JbnB1dFRleHRGaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGlucHV0OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBdKSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUZXh0RmllbGQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dEZpZWxkL2lucHV0VGV4dEZpZWxkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92YWxpZGF0aW9uRXJyb3IubGVzcyc7XG5cbmNvbnN0IEVycm9yID0gKHsgZXJyb3IgfSkgPT4gKFxuICBlcnJvciAmJiAoXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAge2Vycm9yfVxuICAgIDwvc3Bhbj5cbiAgKVxuKTtcblxuRXJyb3IuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogbnVsbCxcbn07XG5cbkVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3IuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclwiOlwiQ29tcG9uZW50cy1zaGFyZWQtdmFsaWRhdGlvbkZpZWxkLXZhbGlkYXRpb25FcnJvcl9fZXJyb3ItLTFQYTluXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbkZpZWxkL3ZhbGlkYXRpb25FcnJvci5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3ODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW5wdXRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLWlucHV0RmllbGQtaW5wdXRUZXh0RmllbGRfX2lucHV0LS0yaE5sTFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2lucHV0RmllbGQvaW5wdXRUZXh0RmllbGQubGVzc1xuLy8gbW9kdWxlIGlkID0gNzg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlLCBzZXRQcm9wVHlwZXMsIGJyYW5jaCwgcmVuZGVyTm90aGluZyB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgeyBoaWRlTW9kYWwsIHNob3dNb2RhbCB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsIH0sIHsgaWQgfSkgPT4gKHtcbiAgaXNDdXJyZW50TW9kYWw6IG1vZGFsLmN1cnJlbnRNb2RhbCA9PT0gaWQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgc2V0UHJvcFR5cGVzKHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSxcbiAgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgICBoaWRlTW9kYWwsXG4gICAgc2hvd01vZGFsLFxuICB9KSxcbiAgYnJhbmNoKFxuICAgIHByb3BzID0+ICFwcm9wcy5pc0N1cnJlbnRNb2RhbCxcbiAgICByZW5kZXJOb3RoaW5nLFxuICApLFxuKShNb2RhbCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9tb2RhbC9tb2RhbENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9tb2RhbC5sZXNzJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgQ3Jvc3NJY29uIGZyb20gJy4uLy4uL2ljb25zL2Nyb3NzJztcblxuY29uc3QgTW9kYWwgPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUsXG4gIGhpZGVNb2RhbCxcbiAgY2xhc3NOYW1lLFxuICBhbGxvd092ZXJsYXlIaWRlTW9kYWwsXG59KSA9PiAoXG4gIDxPdmVybGF5IG9uQ2xpY2s9e2FsbG93T3ZlcmxheUhpZGVNb2RhbCA/IGhpZGVNb2RhbCA6IG51bGx9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHN0eWxlcy5tb2RhbCwgY2xhc3NOYW1lKX0+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hpZGVNb2RhbH0gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2V9PlxuICAgICAgICA8Q3Jvc3NJY29uIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgPC9PdmVybGF5PlxuKTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG4gIGFsbG93T3ZlcmxheUhpZGVNb2RhbDogdHJ1ZSxcbn07XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhbGxvd092ZXJsYXlIaWRlTW9kYWw6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9tb2RhbC9tb2RhbC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1vZGFsXCI6XCJDb21wb25lbnRzLXNoYXJlZC1tb2RhbC1tb2RhbF9fbW9kYWwtLTJEMHBwXCIsXCJjbG9zZVwiOlwiQ29tcG9uZW50cy1zaGFyZWQtbW9kYWwtbW9kYWxfX2Nsb3NlLS0xdFZKNFwiLFwidGl0bGVcIjpcIkNvbXBvbmVudHMtc2hhcmVkLW1vZGFsLW1vZGFsX190aXRsZS0teW5CMzhcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9tb2RhbC9tb2RhbC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3ODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9vdmVybGF5Lmxlc3MnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9jbGljay1ldmVudHMtaGF2ZS1rZXktZXZlbnRzICovXG4vLyBObyBLZXkgZXZlbnQgYXMgaXQgc2hvdWxkIGJlIGhhbmRsZWQgYnkgb3RoZXIgb2JqZWN0cyBzdWNoIGFzIGEgbW9kYWwgY2xvc2UgaWNvblxuY29uc3QgT3ZlcmxheSA9ICh7IG9uQ2xpY2ssIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT5cbiAgICB7Y2hpbGRyZW59XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGlja2FibGVPdmVybGF5fSB0YWJJbmRleD17LTF9IHJvbGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICA8L2Rpdj5cbik7XG5cbk92ZXJsYXkuZGVmYXVsdFByb3BzID0ge1xuICBvbkNsaWNrOiBGdW5jdGlvbi5wcm90b3R5cGUsXG59O1xuXG5PdmVybGF5LnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL292ZXJsYXkvb3ZlcmxheS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm92ZXJsYXlcIjpcIkNvbXBvbmVudHMtc2hhcmVkLW92ZXJsYXktb3ZlcmxheV9fb3ZlcmxheS0tVjZFblhcIixcImNsaWNrYWJsZU92ZXJsYXlcIjpcIkNvbXBvbmVudHMtc2hhcmVkLW92ZXJsYXktb3ZlcmxheV9fY2xpY2thYmxlT3ZlcmxheS0taHh5eldcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9vdmVybGF5L292ZXJsYXkubGVzc1xuLy8gbW9kdWxlIGlkID0gNzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBDcm9zc0ljb24gPSAoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gey4uLnByb3BzfSB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxuICAgIDx0aXRsZT5DbG9zZTwvdGl0bGU+XG4gICAgPHBhdGggZD1cIk0xMy45NTcgMy40NTdsLTEuNDE0LTEuNDE0TDggNi41ODYgMy40NTcgMi4wNDMgMi4wNDMgMy40NTcgNi41ODYgOGwtNC41NDMgNC41NDMgMS40MTQgMS40MTRMOCA5LjQxNGw0LjU0MyA0LjU0MyAxLjQxNC0xLjQxNEw5LjQxNCA4elwiIC8+XG4gIDwvc3ZnPlxuKTtcblxuQ3Jvc3NJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuQ3Jvc3NJY29uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Jvc3NJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9pY29ucy9jcm9zcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubGVzcyc7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBzdHlsZU5hbWUsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgey4uLnByb3BzfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMuYnV0dG9uLCBzdHlsZU5hbWUgJiYgc3R5bGVzW3N0eWxlTmFtZV0sIGNsYXNzTmFtZSl9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3R5bGVOYW1lOiBudWxsLFxuICBjbGFzc05hbWU6IG51bGwsXG59O1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZU5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiYnV0dG9uXCI6XCJDb21wb25lbnRzLXNoYXJlZC1idXR0b24tYnV0dG9uX19idXR0b24tLW1CYm9VXCIsXCJwcmltYXJ5XCI6XCJDb21wb25lbnRzLXNoYXJlZC1idXR0b24tYnV0dG9uX19wcmltYXJ5LS0xeDc4RFwiLFwic2Vjb25kYXJ5XCI6XCJDb21wb25lbnRzLXNoYXJlZC1idXR0b24tYnV0dG9uX19zZWNvbmRhcnktLVI0ZllVXCIsXCJ0ZXJ0aWFyeVwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLWJ1dHRvbl9fdGVydGlhcnktLVFWQXYzXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3OTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVjYXB0Y2hhIGZyb20gJ3JlYWN0LXJlY2FwdGNoYSc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRmllbGQgZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRmllbGQnO1xuXG5jb25zdCBDYXB0Y2hhID0gKHtcbiAgaW5wdXQsXG4gIG1ldGE6IHsgdG91Y2hlZCwgZXJyb3IgPSBbXSB9LFxufSkgPT4gKFxuICA8VmFsaWRhdGlvbkZpZWxkIHRvdWNoZWQ9e3RvdWNoZWR9IGVycm9yPXtlcnJvcn0+XG4gICAgPFJlY2FwdGNoYVxuICAgICAgdmVyaWZ5Q2FsbGJhY2s9e3Jlc3BvbnNlID0+IGlucHV0Lm9uQ2hhbmdlKHJlc3BvbnNlKX1cbiAgICAgIHNpdGVrZXk9e3Byb2Nlc3MuZW52LlJFQ0FQVENIQV9TSVRFX0tFWX1cbiAgICAvPlxuICA8L1ZhbGlkYXRpb25GaWVsZD5cbik7XG5cbkNhcHRjaGEucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbWV0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBdKSxcbiAgfSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcHRjaGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2VtYWlsL3JlY2FwdGNoYS5qcyIsImltcG9ydCBub1doaXRlU3BhY2UgZnJvbSAnLi4vc2hhcmVkL25vV2hpdGVTcGFjZSc7XG5cbmNvbnN0IHZhbGlkYXRpb24gPSAodmFsdWVzKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuXG4gIGlmICghdmFsdWVzLnJlY2FwdGNoYSkge1xuICAgIGVycm9ycy5yZWNhcHRjaGEgPSAncmVDQVBUQ0hBIGlzIHJlcXVpcmVkJztcbiAgfVxuXG4gIGlmICghdmFsdWVzLmVtYWlsIHx8ICFub1doaXRlU3BhY2UodmFsdWVzLmVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdFbWFpbCBpcyByZXF1aXJlZCc7XG4gIH0gZWxzZSBpZiAoIS9eLitALiskL2kudGVzdCh2YWx1ZXMuZW1haWwpKSB7XG4gICAgZXJyb3JzLmVtYWlsID0gJ011c3QgYmUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJztcbiAgfVxuXG4gIHJldHVybiBlcnJvcnM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lbWFpbC92YWxpZGF0aW9uLmpzIiwiZXhwb3J0IGRlZmF1bHQgdmFsdWUgPT4gdmFsdWUucmVwbGFjZSgvXlxccyskLywgJycpLmxlbmd0aCA+IDA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9ub1doaXRlU3BhY2UuanMiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgbXV0YXRpb24gPSBncmFwaHFsYFxuICBtdXRhdGlvbiBzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24oXG4gICAgJGlucHV0OiBTdWJzY3JpYmVOZXdzbGV0dGVySW5wdXQhXG4gICkge1xuICAgIHN1YnNjcmliZU5ld3NsZXR0ZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgICAgY2xpZW50TXV0YXRpb25JZFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKHsgZW1haWwsIHJlY2FwdGNoYSB9KSA9PiB7XG4gIGNvbnN0IHZhcmlhYmxlcyA9IHtcbiAgICBpbnB1dDoge1xuICAgICAgZW1haWwsXG4gICAgICByZWNhcHRjaGEsXG4gICAgfSxcbiAgfTtcblxuICByZXR1cm4gY3JlYXRlTXV0YXRpb24oXG4gICAgbXV0YXRpb24sXG4gICAgdmFyaWFibGVzLFxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZW1haWwvc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uLmpzIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBwb3B1cHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gWy4uLnN0YXRlLnBvcHVwcywge1xuICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93OiBhY3Rpb24ubWlsbGlzZWNvbmRzVG9TaG93LFxuICAgICAgfV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdISURFX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gc3RhdGUucG9wdXBzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuY29uc3QgZml0bmVzc1BsYW5zRGVmYXVsdCA9IHt9O1xuXG53aW5kb3cuX0NvbnN0YW50cy5maXRuZXNzUGxhbnMuZm9yRWFjaCgoeCkgPT4ge1xuICBmaXRuZXNzUGxhbnNEZWZhdWx0W3guTmFtZV0gPSB7XG4gICAgcG9pbnRzOiAwLFxuICB9O1xufSk7XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgZml0bmVzc1BsYW5zOiBmaXRuZXNzUGxhbnNEZWZhdWx0LFxuICByYW5rZWRGaXRuZXNzUGxhbnM6IFtdLFxufTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1JBTktfRklUTkVTU19QTEFOUyc6IHtcbiAgICAgIGNvbnN0IGZpdG5lc3NQbGFucyA9IHt9O1xuXG4gICAgICBhY3Rpb24uZml0bmVzc1BsYW5zUG9pbnRzLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgY29uc3QgbWF4TnVtYmVyID0gTWF0aC5tYXgoYWN0aW9uLmFuc3dlclBvaW50cywgeC5wb2ludHMpO1xuICAgICAgICBjb25zdCBtaW5OdW1iZXIgPSBNYXRoLm1pbihhY3Rpb24uYW5zd2VyUG9pbnRzLCB4LnBvaW50cyk7XG4gICAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBtYXhOdW1iZXIgLSBtaW5OdW1iZXI7XG4gICAgICAgIGNvbnN0IG5ld1BvaW50cyA9IHN0YXRlLmZpdG5lc3NQbGFuc1t4Lm5hbWVdLnBvaW50cyArIGRpZmZlcmVuY2U7XG5cbiAgICAgICAgZml0bmVzc1BsYW5zW3gubmFtZV0gPSB7XG4gICAgICAgICAgLi4uc3RhdGUuZml0bmVzc1BsYW5zW3gubmFtZV0sXG4gICAgICAgICAgLi4ueCxcbiAgICAgICAgICBwb2ludHM6IG5ld1BvaW50cyxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByYW5rZWRGaXRuZXNzUGxhbnMgPSBPYmplY3Qua2V5cyhmaXRuZXNzUGxhbnMpLm1hcChrZXkgPT4gZml0bmVzc1BsYW5zW2tleV0pO1xuXG4gICAgICByYW5rZWRGaXRuZXNzUGxhbnMuc29ydCgoYSwgYikgPT4gYS5wb2ludHMgLSBiLnBvaW50cyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICByYW5rZWRGaXRuZXNzUGxhbnMsXG4gICAgICAgIGZpdG5lc3NQbGFucyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvdXNlci9yZWR1Y2VyLmpzIiwiZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0hPV19NT0RBTCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnZhcmlhYmxlcyxcbiAgICAgICAgY3VycmVudE1vZGFsOiBhY3Rpb24uaWQsXG4gICAgICB9O1xuICAgIGNhc2UgJ0hJREVfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRNb2RhbDogbnVsbCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvcmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
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
      sitekey: "6Ley01QUAAAAAHFUtLNjjoZzJAOEqr1iyztvEECM"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvY29udmVydFRpbWVUb1dvcmtvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc1BsYW5zQ29udGFpbmVyLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lci5ncmFwaHFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyUXVlcnkuZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkZpZWxkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3JzLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvX19nZW5lcmF0ZWRfXy9zdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3N1Ym1pdEFuc3dlck11dGF0aW9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvdXNlci9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvdmFyaWF0aW9uUGxhbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zUmFua2VkQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYWtlZC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvc2Nyb2xsTG9jay5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cHMubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRGaWVsZC9pbnB1dFRleHRGaWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkVycm9yLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3IubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dEZpZWxkL2lucHV0VGV4dEZpZWxkLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWxDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9vdmVybGF5L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvb3ZlcmxheS9vdmVybGF5Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9pY29ucy9jcm9zcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9idXR0b24ubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2VtYWlsL3JlY2FwdGNoYS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2VtYWlsL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbm9XaGl0ZVNwYWNlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZW1haWwvc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy91c2VyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAubGVzcyJdLCJuYW1lcyI6WyJzaG93TW9kYWwiLCJpZCIsInZhcmlhYmxlcyIsInR5cGUiLCJoaWRlTW9kYWwiLCJQYWdlQ29udGVudCIsImNoaWxkcmVuIiwicGFnZUNvbnRlbnQiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInYwIiwidjEiLCJ2MiIsInYzIiwidjQiLCJ2NSIsInY2IiwidjciLCJ2OCIsImhhc2giLCJtb2R1bGUiLCJleHBvcnRzIiwidGltZSIsIm5ld1RpbWUiLCJob3VycyIsIm1pbnV0ZXMiLCJmcmFnbWVudHMiLCJwcm9wcyIsInZhcmlhdGlvblBsYW5zIiwibGVuZ3RoIiwiVmFsaWRhdGlvbkZpZWxkIiwiZXJyb3IiLCJ0b3VjaGVkIiwiY2xhc3NOYW1lIiwiZXJyb3JzIiwiQXJyYXkiLCJpc0FycmF5IiwiZGVmYXVsdFByb3BzIiwiYm9vbCIsIm9uZU9mVHlwZSIsInN0cmluZyIsImFycmF5T2YiLCJFcnJvcnMiLCJtYXAiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwicm91dGVyIiwicmVwbGFjZSIsInBhdGhuYW1lIiwic3RhdHVzIiwic3RhdGUiLCJkYXRhIiwic2hhcGUiLCJudW1iZXIiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIiwibWlkZGxlV2FyZSIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJtb2RhbCIsInVzZXIiLCJkaXNwYXRjaCIsImluaXQiLCJyZWZldGNoUXVlcnkiLCJxdWVyeSIsImhhbmRsZXJzIiwiZ2V0TmV4dFF1ZXN0aW9uIiwicmVsYXkiLCJyZWZldGNoIiwicXVlc3Rpb25JbmRleCIsIkZpdG5lc3NDb250YWluZXIiLCJoYXNRdWVzdGlvbiIsInF1ZXN0aW9uQnlJbmRleCIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJuZXdzbGV0dGVyUG9wdXBTaG93biIsImNvb2tpZXMiLCJnZXQiLCJleHBpcmVzIiwiRGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwic2V0Iiwicm91dGVDb25maWciLCJDb21wb25lbnQiLCJGaXRuZXNzIiwiZml0bmVzcyIsInRpdGxlIiwiZnVuYyIsImFuc3dlck9uQ2xpY2siLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsInF1ZXN0aW9uIiwiYW5zd2VyIiwiYW5zd2VySWQiLCJhbnN3ZXJDb250YWluZXIiLCJhbnN3ZXJUZXh0IiwiaW5zdGFuY2VPZiIsIm11dGF0aW9uIiwiaW5wdXQiLCJ0aGVuIiwic3VibWl0QW5zd2VyIiwicG9pbnRzIiwiZml0bmVzc1BsYW5zUG9pbnRzIiwiZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMiLCJmaWx0ZXIiLCJ4IiwiZml0bmVzc1BsYW4iLCJuYW1lIiwicmFua0ZpdG5lc3NQbGFucyIsImFuc3dlclBvaW50cyIsIkZpdG5lc3NQbGFucyIsImZpdG5lc3NQbGFucyIsImZpdG5lc3NQbGFuSWQiLCJzdGF0cyIsImRheXNQZXJXZWVrIiwibGFiZWwiLCJ0aW1lUGVyV29ya291dCIsInRpbWVUb1dvcmtvdXQiLCJkZXNjcmlwdGlvbiIsIlZhcmlhdGlvblBsYW5zIiwidmFyaWF0aW9uUGxhbiIsImkiLCJtYXBTdGF0ZVRvUHJvcHMiLCJyYW5rZWRGaXRuZXNzUGxhbnMiLCJGaXRuZXNzUGxhbnNSYW5rZWQiLCJmaXRuZXNzUGxhblJhbmtlZCIsImRvY3VtZW50U2Nyb2xsVG9wIiwiYm9keVNjcm9sbFRvcCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiYm9keSIsInN0eWxlIiwib3ZlcmZsb3ciLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJwb3NpdGlvbiIsInJpZ2h0IiwibGVmdCIsInJlc2V0Qm9keVNjcm9sbCIsImUiLCJjb25zb2xlIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJyZWdnZXN0Q29udGFpbmVyIiwicmVnZ2VzdCIsImJldGFMYWJlbCIsIm1vdG8iLCJzdGF0ZUhhbmRsZXJzIiwic2hvd0Nvb2tpZU5vdGljZSIsInNob3dpbmdDb29raWVOb3RpY2UiLCJoaWRlQ29va2llTm90aWNlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb29raWVOb3RpY2VTaG93biIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiQ29va2llTm90aWNlIiwiY29va2llTm90aWNlIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJEaXNwbGF5VHlwZSIsImdldERpc3BsYXlUeXBlIiwid2luZG93V2lkdGgiLCJicmVha3BvaW50TW9iaWxlIiwidmFsdWUiLCJicmVha3BvaW50VGFibGV0IiwidXBkYXRlRGlzcGxheVR5cGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsInNldFN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaXplcyIsInVuaXQiLCJicmVha3BvaW50RGVza3RvcCIsIkZvb3RlciIsImZvb3RlciIsInBvcHVwcyIsImhpZGVQb3B1cCIsIlBvcHVwcyIsImluZGV4IiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsIlBvcHVwIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJzZXRUaW1lb3V0Iiwic2hvd1BvcHVwIiwiZ2VuZXJhdGUiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJvblN1Ym1pdCIsImNhdGNoIiwidmFsaWRhdGUiLCJOZXdzbGV0dGVyTW9kYWwiLCJoYW5kbGVTdWJtaXQiLCJzdWJzY3JpYmVUZXh0IiwiZmllbGRzIiwiYnV0dG9ucyIsImVtYWlsQnV0dG9uIiwibm9UaGFua3NCdXR0b24iLCJJbnB1dFRleHRGaWVsZCIsIm1ldGEiLCJFcnJvciIsImlzQ3VycmVudE1vZGFsIiwiY3VycmVudE1vZGFsIiwiTW9kYWwiLCJhbGxvd092ZXJsYXlIaWRlTW9kYWwiLCJjbG9zZSIsIk92ZXJsYXkiLCJvbkNsaWNrIiwib3ZlcmxheSIsImNsaWNrYWJsZU92ZXJsYXkiLCJGdW5jdGlvbiIsInByb3RvdHlwZSIsIkNyb3NzSWNvbiIsIkJ1dHRvbiIsInN0eWxlTmFtZSIsImJ1dHRvbiIsIkNhcHRjaGEiLCJvbkNoYW5nZSIsInJlc3BvbnNlIiwiUkVDQVBUQ0hBX1NJVEVfS0VZIiwidmFsaWRhdGlvbiIsInZhbHVlcyIsInJlY2FwdGNoYSIsImVtYWlsIiwidGVzdCIsImRlZmF1bHRTdGF0ZSIsInJlZHVjZXIiLCJhY3Rpb24iLCJfIiwiZml0bmVzc1BsYW5zRGVmYXVsdCIsIl9Db25zdGFudHMiLCJmb3JFYWNoIiwiTmFtZSIsIm1heE51bWJlciIsIk1hdGgiLCJtYXgiLCJtaW5OdW1iZXIiLCJtaW4iLCJkaWZmZXJlbmNlIiwibmV3UG9pbnRzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsInNvcnQiLCJhIiwiYiIsImZldGNoUXVlcnkiLCJvcGVyYXRpb24iLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxrQkFBa0IsK29COzs7Ozs7Ozs7Ozs7Ozs7QUNEbEI7O0FBRU8sSUFBTUEsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxFQUFELEVBQUtDLFNBQUwsRUFBbUI7QUFDMUM7O0FBRUEsU0FBTztBQUNMQyxVQUFNLFlBREQ7QUFFTEYsVUFGSztBQUdMQztBQUhLLEdBQVA7QUFLRCxDQVJNOztBQVVBLElBQU1FLGdDQUFZLFNBQVpBLFNBQVksR0FBTTtBQUM3Qjs7QUFFQSxTQUFPO0FBQ0xELFVBQU07QUFERCxHQUFQO0FBR0QsQ0FOTSxDOzs7Ozs7Ozs7Ozs7OztBQ1pQOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUUsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFV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Q0t1RCxLQURMO0FBRUU0TCxzQkFBYztBQUZoQjtBQUlGO0FBQVMsYUFBTzVMLEtBQVA7QUFaWDtBQWNELEM7Ozs7Ozs7Ozs7Ozs7O0FDZkQ7O0FBTUE7O0FBRUEsSUFBTXdPLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQVkvUixTQUFaO0FBQUEsU0FDakJnUyxNQUFNLFVBQU4sRUFBa0I7QUFDaEJDLFlBQVEsTUFEUTtBQUVoQkMsaUJBQWEsYUFGRztBQUdoQkMsYUFBUztBQUNQQyxjQUFRLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FITztBQU9oQm5KLFVBQU1vSixLQUFLQyxTQUFMLENBQWU7QUFDbkJ6TixhQUFPa04sVUFBVXBFLElBREU7QUFFbkIzTjtBQUZtQixLQUFmO0FBUFUsR0FBbEIsRUFXR21ILElBWEgsQ0FXUTtBQUFBLFdBQVkrSSxTQUFTcUMsSUFBVCxFQUFaO0FBQUEsR0FYUixFQVlHcEwsSUFaSCxDQVlRLFVBQUNvTCxJQUFELEVBQVU7QUFDZDtBQUNBLFFBQUlBLEtBQUt0USxNQUFULEVBQWlCO0FBQ2YsYUFBT3VRLFFBQVFDLE1BQVIsQ0FBZUYsS0FBS3RRLE1BQXBCLENBQVA7QUFDRDs7QUFFRCxXQUFPdVEsUUFBUUUsT0FBUixDQUFnQkgsSUFBaEIsQ0FBUDtBQUNELEdBbkJILENBRGlCO0FBQUEsQ0FBbkI7O0FBc0JBLElBQU1JLFVBQVUsc0JBQVFDLE1BQVIsQ0FBZWQsVUFBZixDQUFoQjtBQUNBLElBQU1lLFNBQVMsZ0NBQWY7QUFDQSxJQUFNN1AsUUFBUSx3QkFBVTZQLE1BQVYsQ0FBZDtBQUNBLElBQU1DLGNBQWMsOEJBQWdCO0FBQ2xDSCxrQkFEa0M7QUFFbEMzUDtBQUZrQyxDQUFoQixDQUFwQjs7QUFLQSxpQ0FBYzhQLFdBQWQ7O2tCQUVlQSxXOzs7Ozs7O0FDeENmLHlDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmaXRuZXNzUGxhbnNcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX2ZpdG5lc3NQbGFucy0tM2RNR2lcIixcImZpdG5lc3NQbGFuXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19maXRuZXNzUGxhbi0tM1EzTU9cIixcImZpdG5lc3NQbGFuUmFua2VkXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19maXRuZXNzUGxhblJhbmtlZC0tMlZNcGZcIixcInN0YXRzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19zdGF0cy0tNFdmeHRcIixcIm5hbWVcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzUGxhbnNfX25hbWUtLTFGbFBjXCIsXCJkZXNjcmlwdGlvblwiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fZGVzY3JpcHRpb24tLTEwMzlnXCIsXCJkYXlzUGVyV2Vla1wiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fZGF5c1BlcldlZWstLTJBdXVWXCIsXCJ0aW1lUGVyV29ya291dFwiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fdGltZVBlcldvcmtvdXQtLTN4ek52XCIsXCJsYWJlbFwiOlwiQ29tcG9uZW50cy1maXRuZXNzLWZpdG5lc3NQbGFuc19fbGFiZWwtLTNhZGdkXCIsXCJhbnN3ZXJzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc1BsYW5zX19hbnN3ZXJzLS1lejhza1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnMubGVzc1xuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHJlc2V0Qm9keVNjcm9sbCwgZGlzYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsaXRpZXMvc2Nyb2xsTG9jayc7XG5cbmV4cG9ydCBjb25zdCBzaG93TW9kYWwgPSAoaWQsIHZhcmlhYmxlcykgPT4ge1xuICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1NIT1dfTU9EQUwnLFxuICAgIGlkLFxuICAgIHZhcmlhYmxlcyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiB7XG4gIHJlc2V0Qm9keVNjcm9sbCgpO1xuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0hJREVfTU9EQUwnLFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL21vZGFsL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2VDb250ZW50Lmxlc3MnO1xuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGVudH0+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cblBhZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LmpzIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCA0MDdmOTRkYTcyOGZhMWI1ODgxZjg5NzJkNjA2ZThiZFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgc3VibWl0QW5zd2VyTXV0YXRpb25WYXJpYWJsZXMgPSB7fFxuICBpbnB1dDoge1xuICAgIGNsaWVudE11dGF0aW9uSWQ/OiA/c3RyaW5nLFxuICAgIGlkOiBudW1iZXIsXG4gIH0sXG58fTtcbmV4cG9ydCB0eXBlIHN1Ym1pdEFuc3dlck11dGF0aW9uUmVzcG9uc2UgPSB7fFxuICArc3VibWl0QW5zd2VyOiA/e3xcbiAgICArYW5zd2VyOiB7fFxuICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgK3F1ZXN0aW9uOiA/e3xcbiAgICAgICAgK2ZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgICAgICAgK3BvaW50czogbnVtYmVyLFxuICAgICAgICAgICtmaXRuZXNzUGxhbjogP3t8XG4gICAgICAgICAgICArZml0bmVzc1BsYW5JZDogbnVtYmVyLFxuICAgICAgICAgICAgK25hbWU6ID9zdHJpbmcsXG4gICAgICAgICAgICArZGVzY3JpcHRpb246ID9zdHJpbmcsXG4gICAgICAgICAgICArZGF5c1BlcldlZWs6IG51bWJlcixcbiAgICAgICAgICAgICt0aW1lVG9Xb3Jrb3V0OiA/e3xcbiAgICAgICAgICAgICAgK2hvdXJzOiA/bnVtYmVyLFxuICAgICAgICAgICAgICArbWludXRlczogP251bWJlcixcbiAgICAgICAgICAgIHx9LFxuICAgICAgICAgICAgKyRmcmFnbWVudFJlZnM6IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuJHJlZixcbiAgICAgICAgICB8fSxcbiAgICAgICAgfH0+LFxuICAgICAgfH0sXG4gICAgfH0sXG4gIHx9LFxufH07XG4qL1xuXG5cbi8qXG5tdXRhdGlvbiBzdWJtaXRBbnN3ZXJNdXRhdGlvbihcbiAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbikge1xuICBzdWJtaXRBbnN3ZXIoaW5wdXQ6ICRpbnB1dCkge1xuICAgIGFuc3dlciB7XG4gICAgICBwb2ludHNcbiAgICAgIHF1ZXN0aW9uIHtcbiAgICAgICAgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMge1xuICAgICAgICAgIHBvaW50c1xuICAgICAgICAgIGZpdG5lc3NQbGFuIHtcbiAgICAgICAgICAgIGZpdG5lc3NQbGFuSWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBkYXlzUGVyV2Vla1xuICAgICAgICAgICAgdGltZVRvV29ya291dCB7XG4gICAgICAgICAgICAgIGhvdXJzXG4gICAgICAgICAgICAgIG1pbnV0ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4uLnZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH1cbiAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgICAgIGlkXG4gICAgICB9XG4gICAgICBpZFxuICAgIH1cbiAgfVxufVxuXG5mcmFnbWVudCB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiBvbiBGaXRuZXNzUGxhbiB7XG4gIHZhcmlhdGlvblBsYW5zIHtcbiAgICBmaXRuZXNzUGxhbklkXG4gICAgZGF5c1BlcldlZWtcbiAgICBpZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJtaXRBbnN3ZXJJbnB1dCFcIixcbiAgICBcImRlZmF1bHRWYWx1ZVwiOiBudWxsXG4gIH1cbl0sXG52MSA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIlZhcmlhYmxlXCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInZhcmlhYmxlTmFtZVwiOiBcImlucHV0XCIsXG4gICAgXCJ0eXBlXCI6IFwiU3VibWl0QW5zd2VySW5wdXQhXCJcbiAgfVxuXSxcbnYyID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcInBvaW50c1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbklkXCIsXG4gIFwiYXJnc1wiOiBudWxsLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbFxufSxcbnY0ID0ge1xuICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICBcImFsaWFzXCI6IG51bGwsXG4gIFwibmFtZVwiOiBcIm5hbWVcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjUgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiZGVzY3JpcHRpb25cIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjYgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiZGF5c1BlcldlZWtcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjcgPSB7XG4gIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwidGltZVRvV29ya291dFwiLFxuICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwiY29uY3JldGVUeXBlXCI6IFwiVGltZVRvV29ya291dFwiLFxuICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwiaG91cnNcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJtaW51dGVzXCIsXG4gICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgfVxuICBdXG59LFxudjggPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59O1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcIm11dGF0aW9uIHN1Ym1pdEFuc3dlck11dGF0aW9uKFxcbiAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcXG4pIHtcXG4gIHN1Ym1pdEFuc3dlcihpbnB1dDogJGlucHV0KSB7XFxuICAgIGFuc3dlciB7XFxuICAgICAgcG9pbnRzXFxuICAgICAgcXVlc3Rpb24ge1xcbiAgICAgICAgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMge1xcbiAgICAgICAgICBwb2ludHNcXG4gICAgICAgICAgZml0bmVzc1BsYW4ge1xcbiAgICAgICAgICAgIGZpdG5lc3NQbGFuSWRcXG4gICAgICAgICAgICBuYW1lXFxuICAgICAgICAgICAgZGVzY3JpcHRpb25cXG4gICAgICAgICAgICBkYXlzUGVyV2Vla1xcbiAgICAgICAgICAgIHRpbWVUb1dvcmtvdXQge1xcbiAgICAgICAgICAgICAgaG91cnNcXG4gICAgICAgICAgICAgIG1pbnV0ZXNcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cXG4gICAgICAgICAgICBpZFxcbiAgICAgICAgICB9XFxuICAgICAgICAgIGlkXFxuICAgICAgICB9XFxuICAgICAgICBpZFxcbiAgICAgIH1cXG4gICAgICBpZFxcbiAgICB9XFxuICB9XFxufVxcblxcbmZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcXG4gIHZhcmlhdGlvblBsYW5zIHtcXG4gICAgZml0bmVzc1BsYW5JZFxcbiAgICBkYXlzUGVyV2Vla1xcbiAgICBpZFxcbiAgfVxcbn1cXG5cIixcbiAgXCJtZXRhZGF0YVwiOiB7fSxcbiAgXCJmcmFnbWVudFwiOiB7XG4gICAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJzdWJtaXRBbnN3ZXJNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcInN1Ym1pdEFuc3dlclwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IHYxLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlN1Ym1pdEFuc3dlclBheWxvYWRcIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlclwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiQW5zd2VyXCIsXG4gICAgICAgICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbkFuc3dlclBvaW50c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5BbnN3ZXJQb2ludFwiLFxuICAgICAgICAgICAgICAgICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgIHYyLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdjYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidmFyaWF0aW9uUGxhbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2NixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHY4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2OFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdjhcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHY4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB2OFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdjZmRhMDRjNWRiZGUzNTdiY2ZiMGZkNGM2ZDVmMTg1ZCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vc3VibWl0QW5zd2VyTXV0YXRpb24uZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBGcmFnbWVudFJlZmVyZW5jZSB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZGVjbGFyZSBleHBvcnQgb3BhcXVlIHR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uID0ge3xcbiAgK3F1ZXN0aW9uVGV4dDogc3RyaW5nLFxuICArYW5zd2VyczogPyRSZWFkT25seUFycmF5PD97fFxuICAgICthbnN3ZXJJZDogbnVtYmVyLFxuICAgICthbnN3ZXJUZXh0OiBzdHJpbmcsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXCIsXG4gIFwidHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICdjMDhmZGMzMDVkODczMTkzODY0N2YyMjZlZDBiMDEwNSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsImltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJztcblxuZXhwb3J0IGRlZmF1bHQgKHRpbWUpID0+IHtcbiAgbGV0IG5ld1RpbWUgPSAnJztcblxuICBpZiAodGltZS5ob3Vycykge1xuICAgIG5ld1RpbWUgKz0gcGx1cmFsaXplKCdob3VyJywgdGltZS5ob3VycywgdHJ1ZSk7XG5cbiAgICBpZiAodGltZS5taW51dGVzKSB7XG4gICAgICBuZXdUaW1lICs9ICcgJztcbiAgICB9XG4gIH1cblxuICBpZiAodGltZS5taW51dGVzKSB7XG4gICAgbmV3VGltZSArPSBwbHVyYWxpemUoJ21pbnV0ZScsIHRpbWUubWludXRlcywgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3VGltZTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvY29udmVydFRpbWVUb1dvcmtvdXQuanMiLCJpbXBvcnQgeyBjb21wb3NlLCBmbGF0dGVuUHJvcCwgYnJhbmNoLCByZW5kZXJOb3RoaW5nIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuXG5pbXBvcnQgVmFyaWF0aW9uUGxhbnMgZnJvbSAnLi92YXJpYXRpb25QbGFucyc7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcbiAgICB2YXJpYXRpb25QbGFucyB7XG4gICAgICBmaXRuZXNzUGxhbklkXG4gICAgICBkYXlzUGVyV2Vla1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgZnJhZ21lbnQoZnJhZ21lbnRzKSxcbiAgZmxhdHRlblByb3AoJ2ZpdG5lc3NQbGFuJyksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiBwcm9wcy52YXJpYXRpb25QbGFucy5sZW5ndGggPT09IDAsXG4gICAgcmVuZGVyTm90aGluZyxcbiAgKSxcbikoVmFyaWF0aW9uUGxhbnMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiRyZWY6IEZyYWdtZW50UmVmZXJlbmNlO1xuZXhwb3J0IHR5cGUgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gPSB7fFxuICArdmFyaWF0aW9uUGxhbnM6ID8kUmVhZE9ubHlBcnJheTw/e3xcbiAgICArZml0bmVzc1BsYW5JZDogbnVtYmVyLFxuICAgICtkYXlzUGVyV2VlazogbnVtYmVyLFxuICB8fT4sXG4gICskcmVmVHlwZTogdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4kcmVmLFxufH07XG4qL1xuXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVGcmFnbWVudCovID0ge1xuICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblwiLFxuICBcInR5cGVcIjogXCJGaXRuZXNzUGxhblwiLFxuICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiBbXSxcbiAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICB7XG4gICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgXCJuYW1lXCI6IFwidmFyaWF0aW9uUGxhbnNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuSWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiZGF5c1BlcldlZWtcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59O1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnNDliZGQ4OGIwNzM4OThmNGZiZTFjMTQyNmYxOWM0NGYnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4uZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVGcmFnbWVudCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiRyZWYgPSBhbnk7XG5pbXBvcnQgdHlwZSB7IEZyYWdtZW50UmVmZXJlbmNlIH0gZnJvbSAncmVsYXktcnVudGltZSc7XG5kZWNsYXJlIGV4cG9ydCBvcGFxdWUgdHlwZSBmaXRuZXNzUGxhbnNDb250YWluZXIkcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NQbGFuc0NvbnRhaW5lciA9IHt8XG4gICtmaXRuZXNzUGxhbnM6ID8kUmVhZE9ubHlBcnJheTw/e3xcbiAgICArZml0bmVzc1BsYW5JZDogbnVtYmVyLFxuICAgICtuYW1lOiA/c3RyaW5nLFxuICAgICtkZXNjcmlwdGlvbjogP3N0cmluZyxcbiAgICArZGF5c1BlcldlZWs6IG51bWJlcixcbiAgICArdGltZVRvV29ya291dDogP3t8XG4gICAgICAraG91cnM6ID9udW1iZXIsXG4gICAgICArbWludXRlczogP251bWJlcixcbiAgICB8fSxcbiAgICArJGZyYWdtZW50UmVmczogdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4kcmVmLFxuICB8fT4sXG4gICskcmVmVHlwZTogZml0bmVzc1BsYW5zQ29udGFpbmVyJHJlZixcbnx9O1xuKi9cblxuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlRnJhZ21lbnQqLyA9IHtcbiAgXCJraW5kXCI6IFwiRnJhZ21lbnRcIixcbiAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5zQ29udGFpbmVyXCIsXG4gIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbnNcIixcbiAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkZpdG5lc3NQbGFuXCIsXG4gICAgICBcInBsdXJhbFwiOiB0cnVlLFxuICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuSWRcIixcbiAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJkYXlzUGVyV2Vla1wiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICBcIm5hbWVcIjogXCJ0aW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJUaW1lVG9Xb3Jrb3V0XCIsXG4gICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgICBcIm5hbWVcIjogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWludXRlc1wiLFxuICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcInZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzdlMjYxYTk4OGNmNjgwY2I3MTdiN2UxNzAwYzhiMDVlJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NQbGFuc0NvbnRhaW5lci5ncmFwaHFsLmpzIiwiLyoqXG4gKiBAZmxvd1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZUZyYWdtZW50IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIGZpdG5lc3NQbGFuc0NvbnRhaW5lciRyZWYgPSBhbnk7XG50eXBlIHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZiA9IGFueTtcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIGZpdG5lc3NDb250YWluZXIkcmVmOiBGcmFnbWVudFJlZmVyZW5jZTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXIgPSB7fFxuICArcXVlc3Rpb25CeUluZGV4OiA/e3xcbiAgICArJGZyYWdtZW50UmVmczogcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmLFxuICB8fSxcbiAgKyRmcmFnbWVudFJlZnM6IGZpdG5lc3NQbGFuc0NvbnRhaW5lciRyZWYsXG4gICskcmVmVHlwZTogZml0bmVzc0NvbnRhaW5lciRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJcIixcbiAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlJvb3RBcmd1bWVudFwiLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgXCJ0eXBlXCI6IFwiSW50XCJcbiAgICB9XG4gIF0sXG4gIFwic2VsZWN0aW9uc1wiOiBbXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uQnlJbmRleFwiLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICBcImFyZ3NcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICBcIm5hbWVcIjogXCJpbmRleFwiLFxuICAgICAgICAgIFwidmFyaWFibGVOYW1lXCI6IFwicXVlc3Rpb25JbmRleFwiLFxuICAgICAgICAgIFwidHlwZVwiOiBcIkludFwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICAgIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXCIsXG4gICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuc0NvbnRhaW5lclwiLFxuICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICB9XG4gIF1cbn07XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICcwOGUzYjI1NDAyMDE1OWY2M2Y5MTg4NTEzNDdkOGVmYSc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvX19nZW5lcmF0ZWRfXy9maXRuZXNzQ29udGFpbmVyLmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIGMwOTQ5YTQ0OWZhZjM2YzRjNzM0NjRjNzJlNjY2Y2U2XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xudHlwZSBmaXRuZXNzQ29udGFpbmVyJHJlZiA9IGFueTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnlWYXJpYWJsZXMgPSB7fFxuICBxdWVzdGlvbkluZGV4PzogP251bWJlcixcbnx9O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclJlZmV0Y2hRdWVyeVJlc3BvbnNlID0ge3xcbiAgKyRmcmFnbWVudFJlZnM6IGZpdG5lc3NDb250YWluZXIkcmVmLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBmaXRuZXNzQ29udGFpbmVyUmVmZXRjaFF1ZXJ5KFxuICAkcXVlc3Rpb25JbmRleDogSW50XG4pIHtcbiAgLi4uZml0bmVzc0NvbnRhaW5lclxufVxuXG5mcmFnbWVudCBmaXRuZXNzQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxuICAuLi5maXRuZXNzUGxhbnNDb250YWluZXJcbn1cblxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xuICBxdWVzdGlvblRleHRcbiAgYW5zd2VycyB7XG4gICAgYW5zd2VySWRcbiAgICBhbnN3ZXJUZXh0XG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCBmaXRuZXNzUGxhbnNDb250YWluZXIgb24gUXVlcnkge1xuICBmaXRuZXNzUGxhbnMge1xuICAgIGZpdG5lc3NQbGFuSWRcbiAgICBuYW1lXG4gICAgZGVzY3JpcHRpb25cbiAgICBkYXlzUGVyV2Vla1xuICAgIHRpbWVUb1dvcmtvdXQge1xuICAgICAgaG91cnNcbiAgICAgIG1pbnV0ZXNcbiAgICB9XG4gICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcbiAgdmFyaWF0aW9uUGxhbnMge1xuICAgIGZpdG5lc3NQbGFuSWRcbiAgICBkYXlzUGVyV2Vla1xuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgXCJ0eXBlXCI6IFwiSW50XCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5JZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJkYXlzUGVyV2Vla1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJxdWVyeSBmaXRuZXNzQ29udGFpbmVyUmVmZXRjaFF1ZXJ5KFxcbiAgJHF1ZXN0aW9uSW5kZXg6IEludFxcbikge1xcbiAgLi4uZml0bmVzc0NvbnRhaW5lclxcbn1cXG5cXG5mcmFnbWVudCBmaXRuZXNzQ29udGFpbmVyIG9uIFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uQnlJbmRleChpbmRleDogJHF1ZXN0aW9uSW5kZXgpIHtcXG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cXG4gICAgaWRcXG4gIH1cXG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxcbn1cXG5cXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XFxuICBxdWVzdGlvblRleHRcXG4gIGFuc3dlcnMge1xcbiAgICBhbnN3ZXJJZFxcbiAgICBhbnN3ZXJUZXh0XFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IGZpdG5lc3NQbGFuc0NvbnRhaW5lciBvbiBRdWVyeSB7XFxuICBmaXRuZXNzUGxhbnMge1xcbiAgICBmaXRuZXNzUGxhbklkXFxuICAgIG5hbWVcXG4gICAgZGVzY3JpcHRpb25cXG4gICAgZGF5c1BlcldlZWtcXG4gICAgdGltZVRvV29ya291dCB7XFxuICAgICAgaG91cnNcXG4gICAgICBtaW51dGVzXFxuICAgIH1cXG4gICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cXG4gICAgaWRcXG4gIH1cXG59XFxuXFxuZnJhZ21lbnQgdmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW4gb24gRml0bmVzc1BsYW4ge1xcbiAgdmFyaWF0aW9uUGxhbnMge1xcbiAgICBmaXRuZXNzUGxhbklkXFxuICAgIGRheXNQZXJXZWVrXFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcInR5cGVcIjogXCJRdWVyeVwiLFxuICAgIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiRnJhZ21lbnRTcHJlYWRcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclwiLFxuICAgICAgICBcImFyZ3NcIjogbnVsbFxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkJ5SW5kZXhcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkludFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYxXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuc1wiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB2MixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGltZVRvV29ya291dFwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiVGltZVRvV29ya291dFwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWludXRlc1wiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc1wiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHYxXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJzFhYTViZTc2MGZiNzRjMGVlZDQ4ZjI1N2QzZmU2MDY3Jztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJSZWZldGNoUXVlcnkuZ3JhcGhxbC5qcyIsIi8qKlxuICogQGZsb3dcbiAqIEByZWxheUhhc2ggOTYxZjUzNGQwODUzNTA5MDJkMWNhMWViYTQ4N2RiMzBcbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qOjpcbmltcG9ydCB0eXBlIHsgQ29uY3JldGVSZXF1ZXN0IH0gZnJvbSAncmVsYXktcnVudGltZSc7XG50eXBlIGZpdG5lc3NDb250YWluZXIkcmVmID0gYW55O1xudHlwZSBmaXRuZXNzUGxhbnNDb250YWluZXIkcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3xcbiAgcXVlc3Rpb25JbmRleD86ID9udW1iZXIsXG58fTtcbmV4cG9ydCB0eXBlIGZpdG5lc3NDb250YWluZXJRdWVyeVJlc3BvbnNlID0ge3xcbiAgKyRmcmFnbWVudFJlZnM6IChmaXRuZXNzQ29udGFpbmVyJHJlZiAmIGZpdG5lc3NQbGFuc0NvbnRhaW5lciRyZWYpLFxufH07XG4qL1xuXG5cbi8qXG5xdWVyeSBmaXRuZXNzQ29udGFpbmVyUXVlcnkoXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcbikge1xuICAuLi5maXRuZXNzQ29udGFpbmVyXG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxufVxuXG5mcmFnbWVudCBmaXRuZXNzQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgcXVlc3Rpb25CeUluZGV4KGluZGV4OiAkcXVlc3Rpb25JbmRleCkge1xuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgaWRcbiAgfVxuICAuLi5maXRuZXNzUGxhbnNDb250YWluZXJcbn1cblxuZnJhZ21lbnQgZml0bmVzc1BsYW5zQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgZml0bmVzc1BsYW5zIHtcbiAgICBmaXRuZXNzUGxhbklkXG4gICAgbmFtZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgZGF5c1BlcldlZWtcbiAgICB0aW1lVG9Xb3Jrb3V0IHtcbiAgICAgIGhvdXJzXG4gICAgICBtaW51dGVzXG4gICAgfVxuICAgIC4uLnZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXG4gICAgaWRcbiAgfVxufVxuXG5mcmFnbWVudCB2YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhbiBvbiBGaXRuZXNzUGxhbiB7XG4gIHZhcmlhdGlvblBsYW5zIHtcbiAgICBmaXRuZXNzUGxhbklkXG4gICAgZGF5c1BlcldlZWtcbiAgICBpZFxuICB9XG59XG5cbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcbiAgcXVlc3Rpb25UZXh0XG4gIGFuc3dlcnMge1xuICAgIGFuc3dlcklkXG4gICAgYW5zd2VyVGV4dFxuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IFtcbiAge1xuICAgIFwia2luZFwiOiBcIkxvY2FsQXJndW1lbnRcIixcbiAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkluZGV4XCIsXG4gICAgXCJ0eXBlXCI6IFwiSW50XCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiaWRcIixcbiAgXCJhcmdzXCI6IG51bGwsXG4gIFwic3RvcmFnZUtleVwiOiBudWxsXG59LFxudjIgPSB7XG4gIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gIFwiYWxpYXNcIjogbnVsbCxcbiAgXCJuYW1lXCI6IFwiZml0bmVzc1BsYW5JZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn0sXG52MyA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJkYXlzUGVyV2Vla1wiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeShcXG4gICRxdWVzdGlvbkluZGV4OiBJbnRcXG4pIHtcXG4gIC4uLmZpdG5lc3NDb250YWluZXJcXG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxcbn1cXG5cXG5mcmFnbWVudCBmaXRuZXNzQ29udGFpbmVyIG9uIFF1ZXJ5IHtcXG4gIHF1ZXN0aW9uQnlJbmRleChpbmRleDogJHF1ZXN0aW9uSW5kZXgpIHtcXG4gICAgLi4ucUFuZEFDb250YWluZXJfcXVlc3Rpb25cXG4gICAgaWRcXG4gIH1cXG4gIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxcbn1cXG5cXG5mcmFnbWVudCBmaXRuZXNzUGxhbnNDb250YWluZXIgb24gUXVlcnkge1xcbiAgZml0bmVzc1BsYW5zIHtcXG4gICAgZml0bmVzc1BsYW5JZFxcbiAgICBuYW1lXFxuICAgIGRlc2NyaXB0aW9uXFxuICAgIGRheXNQZXJXZWVrXFxuICAgIHRpbWVUb1dvcmtvdXQge1xcbiAgICAgIGhvdXJzXFxuICAgICAgbWludXRlc1xcbiAgICB9XFxuICAgIC4uLnZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuXFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHZhcmlhdGlvblBsYW5zQ29udGFpbmVyX2ZpdG5lc3NQbGFuIG9uIEZpdG5lc3NQbGFuIHtcXG4gIHZhcmlhdGlvblBsYW5zIHtcXG4gICAgZml0bmVzc1BsYW5JZFxcbiAgICBkYXlzUGVyV2Vla1xcbiAgICBpZFxcbiAgfVxcbn1cXG5cXG5mcmFnbWVudCBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiBvbiBRdWVzdGlvbiB7XFxuICBxdWVzdGlvblRleHRcXG4gIGFuc3dlcnMge1xcbiAgICBhbnN3ZXJJZFxcbiAgICBhbnN3ZXJUZXh0XFxuICAgIGlkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICAgIFwidHlwZVwiOiBcIlF1ZXJ5XCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyXCIsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJGcmFnbWVudFNwcmVhZFwiLFxuICAgICAgICBcIm5hbWVcIjogXCJmaXRuZXNzUGxhbnNDb250YWluZXJcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogdjAsXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvbkJ5SW5kZXhcIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImluZGV4XCIsXG4gICAgICAgICAgICBcInZhcmlhYmxlTmFtZVwiOiBcInF1ZXN0aW9uSW5kZXhcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkludFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VySWRcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHYxXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImZpdG5lc3NQbGFuc1wiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgICAgICB2MixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgICAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidGltZVRvV29ya291dFwiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiVGltZVRvV29ya291dFwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiaG91cnNcIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibWludXRlc1wiLFxuICAgICAgICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ2YXJpYXRpb25QbGFuc1wiLFxuICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgICAgICBcImFyZ3NcIjogbnVsbCxcbiAgICAgICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiRml0bmVzc1BsYW5cIixcbiAgICAgICAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgICAgICB2MixcbiAgICAgICAgICAgICAgdjMsXG4gICAgICAgICAgICAgIHYxXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59O1xufSkoKTtcbihub2RlLyo6IGFueSovKS5oYXNoID0gJ2U1NjRmM2I1ODY2NGZjYzJhMjc3MGMzYzExMWI0YjRmJztcbm1vZHVsZS5leHBvcnRzID0gbm9kZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9fX2dlbmVyYXRlZF9fL2ZpdG5lc3NDb250YWluZXJRdWVyeS5ncmFwaHFsLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JzIGZyb20gJy4vdmFsaWRhdGlvbkVycm9ycyc7XG5cbmNvbnN0IFZhbGlkYXRpb25GaWVsZCA9ICh7XG4gIGNoaWxkcmVuLFxuICBlcnJvcixcbiAgdG91Y2hlZCxcbiAgY2xhc3NOYW1lLFxufSkgPT4ge1xuICBsZXQgZXJyb3JzID0gZXJyb3I7XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGVycm9yKSkge1xuICAgIGVycm9ycyA9IFtlcnJvcl07XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3RvdWNoZWQgPyA8VmFsaWRhdGlvbkVycm9ycyBlcnJvcnM9e2Vycm9yc30gLz4gOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVmFsaWRhdGlvbkZpZWxkLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IG51bGwsXG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cblZhbGlkYXRpb25GaWVsZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0b3VjaGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRpb25GaWVsZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRmllbGQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFZhbGlkYXRpb25FcnJvciBmcm9tICcuL3ZhbGlkYXRpb25FcnJvcic7XG5cbmNvbnN0IEVycm9ycyA9ICh7IGVycm9ycyB9KSA9PiAoXG4gIGVycm9ycy5sZW5ndGggPyAoXG4gICAgPGRpdj5cbiAgICAgIHtlcnJvcnMubWFwKGVycm9yID0+IDxWYWxpZGF0aW9uRXJyb3Iga2V5PXtlcnJvcn0gZXJyb3I9e2Vycm9yfSAvPil9XG4gICAgPC9kaXY+XG4gICkgOiBudWxsXG4pO1xuXG5FcnJvcnMucHJvcFR5cGVzID0ge1xuICBlcnJvcnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbkZpZWxkL3ZhbGlkYXRpb25FcnJvcnMuanMiLCIvKipcbiAqIEBmbG93XG4gKiBAcmVsYXlIYXNoIDc4ODNkMmQwMmQxN2QxMGU4NWY5ODc3ZGE2OGVmNDdlXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlUmVxdWVzdCB9IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuZXhwb3J0IHR5cGUgc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uVmFyaWFibGVzID0ge3xcbiAgaW5wdXQ6IHtcbiAgICBjbGllbnRNdXRhdGlvbklkPzogP3N0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHJlY2FwdGNoYTogc3RyaW5nLFxuICB9LFxufH07XG5leHBvcnQgdHlwZSBzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb25SZXNwb25zZSA9IHt8XG4gICtzdWJzY3JpYmVOZXdzbGV0dGVyOiA/e3xcbiAgICArY2xpZW50TXV0YXRpb25JZDogP3N0cmluZyxcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbm11dGF0aW9uIHN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbihcbiAgJGlucHV0OiBTdWJzY3JpYmVOZXdzbGV0dGVySW5wdXQhXG4pIHtcbiAgc3Vic2NyaWJlTmV3c2xldHRlcihpbnB1dDogJGlucHV0KSB7XG4gICAgY2xpZW50TXV0YXRpb25JZFxuICB9XG59XG4qL1xuXG5jb25zdCBub2RlLyo6IENvbmNyZXRlUmVxdWVzdCovID0gKGZ1bmN0aW9uKCl7XG52YXIgdjAgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMb2NhbEFyZ3VtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICBcInR5cGVcIjogXCJTdWJzY3JpYmVOZXdzbGV0dGVySW5wdXQhXCIsXG4gICAgXCJkZWZhdWx0VmFsdWVcIjogbnVsbFxuICB9XG5dLFxudjEgPSBbXG4gIHtcbiAgICBcImtpbmRcIjogXCJMaW5rZWRGaWVsZFwiLFxuICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICBcIm5hbWVcIjogXCJzdWJzY3JpYmVOZXdzbGV0dGVyXCIsXG4gICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgXCJhcmdzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiVmFyaWFibGVcIixcbiAgICAgICAgXCJuYW1lXCI6IFwiaW5wdXRcIixcbiAgICAgICAgXCJ2YXJpYWJsZU5hbWVcIjogXCJpbnB1dFwiLFxuICAgICAgICBcInR5cGVcIjogXCJTdWJzY3JpYmVOZXdzbGV0dGVySW5wdXQhXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiY29uY3JldGVUeXBlXCI6IFwiU3Vic2NyaWJlTmV3c2xldHRlclBheWxvYWRcIixcbiAgICBcInBsdXJhbFwiOiBmYWxzZSxcbiAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAge1xuICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgIFwibmFtZVwiOiBcImNsaWVudE11dGF0aW9uSWRcIixcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICB9XG4gICAgXVxuICB9XG5dO1xucmV0dXJuIHtcbiAgXCJraW5kXCI6IFwiUmVxdWVzdFwiLFxuICBcIm9wZXJhdGlvbktpbmRcIjogXCJtdXRhdGlvblwiLFxuICBcIm5hbWVcIjogXCJzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb25cIixcbiAgXCJpZFwiOiBudWxsLFxuICBcInRleHRcIjogXCJtdXRhdGlvbiBzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24oXFxuICAkaW5wdXQ6IFN1YnNjcmliZU5ld3NsZXR0ZXJJbnB1dCFcXG4pIHtcXG4gIHN1YnNjcmliZU5ld3NsZXR0ZXIoaW5wdXQ6ICRpbnB1dCkge1xcbiAgICBjbGllbnRNdXRhdGlvbklkXFxuICB9XFxufVxcblwiLFxuICBcIm1ldGFkYXRhXCI6IHt9LFxuICBcImZyYWdtZW50XCI6IHtcbiAgICBcImtpbmRcIjogXCJGcmFnbWVudFwiLFxuICAgIFwibmFtZVwiOiBcInN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvblwiLFxuICAgIFwidHlwZVwiOiBcIk11dGF0aW9uXCIsXG4gICAgXCJtZXRhZGF0YVwiOiBudWxsLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfSxcbiAgXCJvcGVyYXRpb25cIjoge1xuICAgIFwia2luZFwiOiBcIk9wZXJhdGlvblwiLFxuICAgIFwibmFtZVwiOiBcInN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvblwiLFxuICAgIFwiYXJndW1lbnREZWZpbml0aW9uc1wiOiB2MCxcbiAgICBcInNlbGVjdGlvbnNcIjogdjFcbiAgfVxufTtcbn0pKCk7XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICc0Yzk4MjNiZjVjMTY2ZThiNjU1YzBmMjI4ZTYyOTE1NCc7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2VtYWlsL19fZ2VuZXJhdGVkX18vc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uLmdyYXBocWwuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcbmltcG9ydCAnLi9hcHAubGVzcyc7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUmVzb2x2ZXIgfSBmcm9tICdmb3VuZC1yZWxheSc7XG5pbXBvcnQgeyBDb29raWVzUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1jb29raWUnO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGluZy9yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPENvb2tpZXNQcm92aWRlcj5cbiAgICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgICA8L0Nvb2tpZXNQcm92aWRlcj5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vdXNlci9yZWR1Y2VyJztcbmltcG9ydCBtb2RhbCBmcm9tICcuLi8uLi9zaGFyZWQvbW9kYWwvcmVkdWNlcic7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIHByb3RvY29sOiBuZXcgQnJvd3NlclByb3RvY29sKCksXG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyRW5oYW5jZXIgPSBjcmVhdGVNYXRjaEVuaGFuY2VyKFxuICBuZXcgTWF0Y2hlcihyb3V0ZUNvbmZpZyksXG4pO1xuXG5jb25zdCBjb21wb3NlRW5oYW5jZXJzID0gd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyB8fCBjb21wb3NlO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxuICBmb3JtLFxuICBwb3B1cCxcbiAgbW9kYWwsXG4gIHVzZXIsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgaW1wcmludFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzLCB3aXRoUHJvcHMsIGxpZmVjeWNsZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyByZWZldGNoQ29udGFpbmVyIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoQ29va2llcyB9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XG5cbmltcG9ydCBGaXRuZXNzIGZyb20gJy4vZml0bmVzcyc7XG5pbXBvcnQgeyBzaG93TW9kYWwgfSBmcm9tICcuLi9zaGFyZWQvbW9kYWwvYWN0aW9ucyc7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IGZpdG5lc3NDb250YWluZXIgb24gUXVlcnkge1xuICAgIHF1ZXN0aW9uQnlJbmRleCAoXG4gICAgICBpbmRleDogJHF1ZXN0aW9uSW5kZXhcbiAgICApIHtcbiAgICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXG4gICAgfVxuICAgIC4uLmZpdG5lc3NQbGFuc0NvbnRhaW5lclxuICB9XG5gO1xuXG5jb25zdCByZWZldGNoUXVlcnkgPSBncmFwaHFsYFxuICBxdWVyeSBmaXRuZXNzQ29udGFpbmVyUmVmZXRjaFF1ZXJ5KFxuICAgICRxdWVzdGlvbkluZGV4OiBJbnRcbiAgKSB7XG4gICAgLi4uZml0bmVzc0NvbnRhaW5lclxuICB9XG5gO1xuXG5jb25zdCBxdWVyeSA9IGdyYXBocWxgXG4gIHF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeShcbiAgICAkcXVlc3Rpb25JbmRleDogSW50XG4gICkge1xuICAgIC4uLmZpdG5lc3NDb250YWluZXJcbiAgICAuLi5maXRuZXNzUGxhbnNDb250YWluZXJcbiAgfVxuYDtcblxuY29uc3QgaGFuZGxlcnMgPSB7XG4gIGdldE5leHRRdWVzdGlvbjogKHsgcmVsYXkgfSkgPT4gcXVlc3Rpb25JbmRleCA9PiByZWxheS5yZWZldGNoKHsgcXVlc3Rpb25JbmRleCB9KSxcbn07XG5cbmNvbnN0IEZpdG5lc3NDb250YWluZXIgPSBjb21wb3NlKFxuICBjb25uZWN0KCksXG4gIHdpdGhDb29raWVzLFxuICByZWZldGNoQ29udGFpbmVyKGZyYWdtZW50cywgcmVmZXRjaFF1ZXJ5KSxcbiAgd2l0aFByb3BzKHByb3BzID0+ICh7XG4gICAgaGFzUXVlc3Rpb246IHByb3BzLmRhdGEucXVlc3Rpb25CeUluZGV4ICE9PSBudWxsLFxuICB9KSksXG4gIGxpZmVjeWNsZSh7XG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChuZXh0UHJvcHMuaGFzUXVlc3Rpb24gIT09IHRoaXMucHJvcHMuaGFzUXVlc3Rpb24gJiZcbiAgICAgICAgICAhbmV4dFByb3BzLmhhc1F1ZXN0aW9uKSB7XG4gICAgICAgIGNvbnN0IG5ld3NsZXR0ZXJQb3B1cFNob3duID0gdGhpcy5wcm9wcy5jb29raWVzLmdldCgnbmV3c2xldHRlclBvcHVwU2hvd24nKTtcblxuICAgICAgICBpZiAoIW5ld3NsZXR0ZXJQb3B1cFNob3duKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzaG93TW9kYWwoJ2ZpdG5lc3NQbGFucycpKTtcbiAgICAgICAgICBjb25zdCBleHBpcmVzID0gbmV3IERhdGUoKTtcblxuICAgICAgICAgIGV4cGlyZXMuc2V0RGF0ZShleHBpcmVzLmdldERhdGUoKSArIDE1KTtcblxuICAgICAgICAgIHRoaXMucHJvcHMuY29va2llcy5zZXQoJ25ld3NsZXR0ZXJQb3B1cFNob3duJywgdHJ1ZSwge1xuICAgICAgICAgICAgZXhwaXJlcyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH0pLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuKShGaXRuZXNzKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEZpdG5lc3NDb250YWluZXIsXG4gIHF1ZXJ5LFxuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIDxGaXRuZXNzQ29udGFpbmVyIGRhdGE9e3Byb3BzfSAvPixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3NDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUUFuZEEgZnJvbSAnLi4vcUFuZEEvcUFuZEFDb250YWluZXInO1xuaW1wb3J0IEZpdG5lc3NQbGFucyBmcm9tICcuL2ZpdG5lc3NQbGFuc0NvbnRhaW5lcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZml0bmVzcy5sZXNzJztcbmltcG9ydCBGaXRuZXNzUGxhbnNSYW5rZWQgZnJvbSAnLi4vZml0bmVzcy9maXRuZXNzUGxhbnNSYW5rZWRDb250YWluZXInO1xuXG5jb25zdCBGaXRuZXNzID0gcHJvcHMgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICB7cHJvcHMuaGFzUXVlc3Rpb24gPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICA8ZGl2PmxldCZhcG9zO3Mgc3VnZ2VzdCBhIGZpdG5lc3MgcGxhbiBmb3IgeW91LjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5zaW1wbHkgYW5zd2VyIGEgZmV3IHF1ZXN0aW9ucy4uLjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxRQW5kQSBxdWVzdGlvbj17cHJvcHMuZGF0YS5xdWVzdGlvbkJ5SW5kZXh9IGdldE5leHRRdWVzdGlvbj17cHJvcHMuZ2V0TmV4dFF1ZXN0aW9ufSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pm9yIHNlZSBhbGwgY2VydGlmaWVkIGZpdG5lc3MgcGxhbnM8L2Rpdj5cbiAgICAgICAgICA8Rml0bmVzc1BsYW5zIGRhdGE9e3Byb3BzLmRhdGF9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgIDxkaXY+WW91ciBzdWdnZXN0ZWQgZml0bmVzcyBwbGFucy48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rml0bmVzc1BsYW5zUmFua2VkIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5GaXRuZXNzLnByb3BUeXBlcyA9IHtcbiAgaGFzUXVlc3Rpb246IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGdldE5leHRRdWVzdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBxdWVzdGlvbkJ5SW5kZXg6IFByb3BUeXBlcy5vYmplY3QsXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaXRuZXNzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aEhhbmRsZXJzLCBzZXRQcm9wVHlwZXMsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZnJhZ21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuaW1wb3J0IHFBbmRBIGZyb20gJy4vcUFuZEEnO1xuaW1wb3J0IHN1Ym1pdEFuc3dlck11dGF0aW9uIGZyb20gJy4vc3VibWl0QW5zd2VyTXV0YXRpb24nO1xuXG5sZXQgcXVlc3Rpb25JbmRleCA9IDA7XG5cbmNvbnN0IGhhbmRsZXJzID0ge1xuICBhbnN3ZXJPbkNsaWNrOiAoeyBkaXNwYXRjaCwgZ2V0TmV4dFF1ZXN0aW9uIH0pID0+IChpZCkgPT4ge1xuICAgIHF1ZXN0aW9uSW5kZXggKz0gMTtcbiAgICBzdWJtaXRBbnN3ZXJNdXRhdGlvbihpZCwgZGlzcGF0Y2gpO1xuICAgIGdldE5leHRRdWVzdGlvbihxdWVzdGlvbkluZGV4KTtcbiAgfSxcbn07XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcbiAgICBxdWVzdGlvblRleHRcbiAgICBhbnN3ZXJzIHtcbiAgICAgIGFuc3dlcklkXG4gICAgICBhbnN3ZXJUZXh0XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIGdldE5leHRRdWVzdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHNldFByb3BUeXBlcyhwcm9wVHlwZXMpLFxuICBjb25uZWN0KCksXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIGZsYXR0ZW5Qcm9wKCdxdWVzdGlvbicpLFxuICB3aXRoSGFuZGxlcnMoaGFuZGxlcnMpLFxuKShxQW5kQSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9xQW5kQS5sZXNzJztcblxuY29uc3QgUUFuZEEgPSAoeyBxdWVzdGlvblRleHQsIGFuc3dlcnMsIGFuc3dlck9uQ2xpY2sgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnFBbmRBfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ufT57cXVlc3Rpb25UZXh0fTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2Vyc30+XG4gICAgICB7YW5zd2Vycy5tYXAoYW5zd2VyID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2Fuc3dlci5hbnN3ZXJJZH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbnN3ZXJPbkNsaWNrKGFuc3dlci5hbnN3ZXJJZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Fuc3dlci5hbnN3ZXJUZXh0fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cblFBbmRBLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFuc3dlcnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbnN3ZXJJZDogUHJvcFR5cGVzLmluc3RhbmNlT2YuaXNSZXF1aXJlZCxcbiAgICAgIGFuc3dlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG4gIGFuc3dlck9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBRQW5kQTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJxQW5kQVwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fcUFuZEEtLTNMWmtuXCIsXCJxdWVzdGlvblwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fcXVlc3Rpb24tLTIzVVRmXCIsXCJhbnN3ZXJDb250YWluZXJcIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX2Fuc3dlckNvbnRhaW5lci0tMUJYa1NcIixcImFuc3dlcnNcIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX2Fuc3dlcnMtLTE5V01jXCIsXCJhbnN3ZXJcIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX2Fuc3dlci0tMnIxUUhcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuaW1wb3J0IHsgY3JlYXRlTXV0YXRpb24gfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuaW1wb3J0IHsgcmFua0ZpdG5lc3NQbGFucyB9IGZyb20gJy4uL3VzZXIvYWN0aW9ucyc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3VibWl0QW5zd2VyTXV0YXRpb24oXG4gICAgJGlucHV0OiBTdWJtaXRBbnN3ZXJJbnB1dCFcbiAgKSB7XG4gICAgc3VibWl0QW5zd2VyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGFuc3dlciB7XG4gICAgICAgIHBvaW50c1xuICAgICAgICBxdWVzdGlvbiB7XG4gICAgICAgICAgZml0bmVzc1BsYW5BbnN3ZXJQb2ludHMge1xuICAgICAgICAgICAgcG9pbnRzXG4gICAgICAgICAgICBmaXRuZXNzUGxhbiB7XG4gICAgICAgICAgICAgIGZpdG5lc3NQbGFuSWRcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICBkYXlzUGVyV2Vla1xuICAgICAgICAgICAgICB0aW1lVG9Xb3Jrb3V0IHtcbiAgICAgICAgICAgICAgICBob3Vyc1xuICAgICAgICAgICAgICAgIG1pbnV0ZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuLi52YXJpYXRpb25QbGFuc0NvbnRhaW5lcl9maXRuZXNzUGxhblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgKGlkLCBkaXNwYXRjaCkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGlkLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKS50aGVuKCh7IHN1Ym1pdEFuc3dlciB9KSA9PiB7XG4gICAgY29uc3QgeyBxdWVzdGlvbiwgcG9pbnRzIH0gPSBzdWJtaXRBbnN3ZXIuYW5zd2VyO1xuICAgIGNvbnN0IGZpdG5lc3NQbGFuc1BvaW50cyA9IHF1ZXN0aW9uLmZpdG5lc3NQbGFuQW5zd2VyUG9pbnRzXG4gICAgICAuZmlsdGVyKHggPT4geC5maXRuZXNzUGxhbi5uYW1lKVxuICAgICAgLm1hcCh4ID0+ICh7XG4gICAgICAgIHBvaW50czogeC5wb2ludHMsXG4gICAgICAgIC4uLnguZml0bmVzc1BsYW4sXG4gICAgICB9KSk7XG5cbiAgICBkaXNwYXRjaChyYW5rRml0bmVzc1BsYW5zKGZpdG5lc3NQbGFuc1BvaW50cywgcG9pbnRzKSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvc3VibWl0QW5zd2VyTXV0YXRpb24uanMiLCJleHBvcnQgY29uc3QgcmFua0ZpdG5lc3NQbGFucyA9IChmaXRuZXNzUGxhbnNQb2ludHMsIGFuc3dlclBvaW50cykgPT4gKHtcbiAgdHlwZTogJ1JBTktfRklUTkVTU19QTEFOUycsXG4gIGZpdG5lc3NQbGFuc1BvaW50cyxcbiAgYW5zd2VyUG9pbnRzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvYWN0aW9ucy5qcyIsImltcG9ydCB7IGNvbXBvc2UsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IGZyYWdtZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAncmVhY3QtcmVsYXknO1xuXG5pbXBvcnQgRml0bmVzc1BsYW5zIGZyb20gJy4vZml0bmVzc1BsYW5zJztcblxuY29uc3QgZnJhZ21lbnRzID0gZ3JhcGhxbGBcbiAgZnJhZ21lbnQgZml0bmVzc1BsYW5zQ29udGFpbmVyIG9uIFF1ZXJ5IHtcbiAgICBmaXRuZXNzUGxhbnMge1xuICAgICAgZml0bmVzc1BsYW5JZFxuICAgICAgbmFtZVxuICAgICAgZGVzY3JpcHRpb25cbiAgICAgIGRheXNQZXJXZWVrXG4gICAgICB0aW1lVG9Xb3Jrb3V0IHtcbiAgICAgICAgaG91cnNcbiAgICAgICAgbWludXRlc1xuICAgICAgfVxuICAgICAgLi4udmFyaWF0aW9uUGxhbnNDb250YWluZXJfZml0bmVzc1BsYW5cbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIGZsYXR0ZW5Qcm9wKCdkYXRhJyksXG4pKEZpdG5lc3NQbGFucyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc1BsYW5zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzUGxhbnMubGVzcyc7XG5pbXBvcnQgY29udmVydFRpbWVUb1dvcmtvdXQgZnJvbSAnLi4vc2hhcmVkL3V0aWxpdGllcy9jb252ZXJ0VGltZVRvV29ya291dCc7XG5pbXBvcnQgVmFyaWF0aW9uUGxhbnMgZnJvbSAnLi92YXJpYXRpb25QbGFuc0NvbnRhaW5lcic7XG5cbmNvbnN0IEZpdG5lc3NQbGFucyA9ICh7IGZpdG5lc3NQbGFucyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZml0bmVzc1BsYW5zfT5cbiAgICA8dWw+XG4gICAgICB7Zml0bmVzc1BsYW5zLm1hcChmaXRuZXNzUGxhbiA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2ZpdG5lc3NQbGFuLmZpdG5lc3NQbGFuSWR9IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3NQbGFufT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntmaXRuZXNzUGxhbi5uYW1lfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdHN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXlzUGVyV2Vla30+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgICAgICBXb3Jrb3V0cyBwZXIgd2VlazpcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9PlxuICAgICAgICAgICAgICAgIHtmaXRuZXNzUGxhbi5kYXlzUGVyV2Vla30gZGF5c1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHsvKiA8VmFyaWF0aW9uUGxhbnMgZml0bmVzc1BsYW49e2ZpdG5lc3NQbGFufSAvPiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lUGVyV29ya291dH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgICAgICBUaW1lIHBlciB3b3Jrb3V0OlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+XG4gICAgICAgICAgICAgICAge2NvbnZlcnRUaW1lVG9Xb3Jrb3V0KGZpdG5lc3NQbGFuLnRpbWVUb1dvcmtvdXQpfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57Zml0bmVzc1BsYW4uZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbik7XG5cbkZpdG5lc3NQbGFucy5wcm9wVHlwZXMgPSB7XG4gIGZpdG5lc3NQbGFuczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGZpdG5lc3NQbGFuSWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBkYXlzUGVyV2VlazogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgdGltZVRvV29ya291dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgaG91cnM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgbWludXRlczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgfSksXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc1BsYW5zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NQbGFucy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZml0bmVzc1BsYW5zLmxlc3MnO1xuXG5jb25zdCBWYXJpYXRpb25QbGFucyA9ICh7IHZhcmlhdGlvblBsYW5zIH0pID0+IChcbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheXNQZXJXZWVrfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgQWx0ZXJuYXRpdmUgd29ya291dHMgcGVyIHdlZWs6XG4gICAgICA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgICAge3ZhcmlhdGlvblBsYW5zLm1hcCgodmFyaWF0aW9uUGxhbiwgaSkgPT4gKFxuICAgICAgICAgIDxzcGFuIGtleT17dmFyaWF0aW9uUGxhbi5maXRuZXNzUGxhbklkfSBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9PlxuICAgICAgICAgICAge3ZhcmlhdGlvblBsYW4uZGF5c1BlcldlZWt9e2kgPCAodmFyaWF0aW9uUGxhbnMubGVuZ3RoIC0gMSkgPyAnLycgOiBudWxsfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NwYW4+XG4gICAgICBkYXlzXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuVmFyaWF0aW9uUGxhbnMucHJvcFR5cGVzID0ge1xuICB2YXJpYXRpb25QbGFuczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGRheXNQZXJXZWVrOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmFyaWF0aW9uUGxhbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvdmFyaWF0aW9uUGxhbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmaXRuZXNzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc19fZml0bmVzcy0tUmk3N2RcIixcInRpdGxlXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc19fdGl0bGUtLTJhTktJXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzc1xuLy8gbW9kdWxlIGlkID0gNzMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IGZpdG5lc3NQbGFuc1JhbmtlZCBmcm9tICcuL2ZpdG5lc3NQbGFuc1Jha2VkJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgdXNlciB9KSA9PiAoe1xuICByYW5rZWRGaXRuZXNzUGxhbnM6IHVzZXIucmFua2VkRml0bmVzc1BsYW5zLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKSxcbikoZml0bmVzc1BsYW5zUmFua2VkKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYW5rZWRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpdG5lc3NQbGFucy5sZXNzJztcbmltcG9ydCBjb252ZXJ0VGltZVRvV29ya291dCBmcm9tICcuLi9zaGFyZWQvdXRpbGl0aWVzL2NvbnZlcnRUaW1lVG9Xb3Jrb3V0JztcbmltcG9ydCBWYXJpYXRpb25QbGFucyBmcm9tICcuL3ZhcmlhdGlvblBsYW5zQ29udGFpbmVyJztcblxuY29uc3QgRml0bmVzc1BsYW5zUmFua2VkID0gKHsgcmFua2VkRml0bmVzc1BsYW5zIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXRuZXNzUGxhbnN9PlxuICAgIDxvbD5cbiAgICAgIHtyYW5rZWRGaXRuZXNzUGxhbnMubWFwKGZpdG5lc3NQbGFuID0+IChcbiAgICAgICAgPGxpIGtleT17Zml0bmVzc1BsYW4uZml0bmVzc1BsYW5JZH0gY2xhc3NOYW1lPXtzdHlsZXMuZml0bmVzc1BsYW5SYW5rZWR9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntmaXRuZXNzUGxhbi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0c30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5c1BlcldlZWt9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgIFdvcmtvdXRzIHBlciB3ZWVrOlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJ9PlxuICAgICAgICAgICAgICAgICAge2ZpdG5lc3NQbGFuLmRheXNQZXJXZWVrfSBkYXlzXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHsvKiA8VmFyaWF0aW9uUGxhbnMgZml0bmVzc1BsYW49e2ZpdG5lc3NQbGFufSAvPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZVBlcldvcmtvdXR9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgIFRpbWUgcGVyIHdvcmtvdXQ6XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+XG4gICAgICAgICAgICAgICAgICB7Y29udmVydFRpbWVUb1dvcmtvdXQoZml0bmVzc1BsYW4udGltZVRvV29ya291dCl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2ZpdG5lc3NQbGFuLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC9vbD5cbiAgPC9kaXY+XG4pO1xuXG5GaXRuZXNzUGxhbnNSYW5rZWQucHJvcFR5cGVzID0ge1xuICByYW5rZWRGaXRuZXNzUGxhbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBmaXRuZXNzUGxhbklkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgZGF5c1BlcldlZWs6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIHRpbWVUb1dvcmtvdXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGhvdXJzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIG1pbnV0ZXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgIH0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3NQbGFuc1JhbmtlZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzUGxhbnNSYWtlZC5qcyIsImxldCBkb2N1bWVudFNjcm9sbFRvcCA9IDA7XG5sZXQgYm9keVNjcm9sbFRvcCA9IDA7XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlQm9keVNjcm9sbCA9ICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gICAgLy8gZm9sbG93aW5nIGlzIG5lY2Nlc3Nhcnkgb24gaU9TLiBwb3NpdGlvbiBmaXhlZCB3aWxsIHJlc2V0IHNjcm9sbCBwb3NpdGlvblxuICAgIGRvY3VtZW50U2Nyb2xsVG9wID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG4gICAgYm9keVNjcm9sbFRvcCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnJpZ2h0ID0gMDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQgPSAwO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRCb2R5U2Nyb2xsID0gKCkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5yaWdodCA9ICdpbml0aWFsJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmxlZnQgPSAnaW5pdGlhbCc7XG5cbiAgICAvLyByZXNldCBwb3NpdGlvbiBhbmQgc2Nyb2xsIHBvc2l0aW9uXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHRyeSB7IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnRTY3JvbGxUb3A7IH0gY2F0Y2ggKGUpIHsgY29uc29sZS5lcnJvcihlKTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB0cnkgeyB3aW5kb3cuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBib2R5U2Nyb2xsVG9wOyB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoZSk7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC91dGlsaXRpZXMvc2Nyb2xsTG9jay5qcyIsImltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSAnLi90ZXJtc0FuZENvbmRpdGlvbnMnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIgPSBUZXJtc0FuZENvbmRpdGlvbnM7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgJnF1b3Q7WW91JnF1b3Q7IGFuZCAmcXVvdDt5b3VyJnF1b3Q7IHJlZmVyIHRvIHlvdSwgYXMgYSB1c2VyIG9mIHRoZSBTaXRlLlxuICAgICAgQSAmcXVvdDt1c2VyJnF1b3Q7IGlzIHNvbWVvbmUgd2hvIGFjY2Vzc2VzLGJyb3dzZXMsIGNyYXdscywgc2NyYXBlcywgb3IgaW4gYW55XG4gICAgICB3YXkgdXNlcyB0aGUgU2l0ZS4gJnF1b3Q7V2UsJnF1b3Q7ICZxdW90O3VzLCZxdW90OyBhbmQgJnF1b3Q7b3VyJnF1b3Q7IHJlZmVyIHRvIHJlZ2dlc3QuXG4gICAgICAmcXVvdDtDb250ZW50JnF1b3Q7IG1lYW5zIHRleHQsIGltYWdlcywgcGhvdG9zLCBhdWRpbywgdmlkZW8sIGxvY2F0aW9uIGRhdGEsXG4gICAgICBhbmQgYWxsIG90aGVyIGZvcm1zIG9mIGRhdGEgb3IgY29tbXVuaWNhdGlvbi5cbiAgICAgICZxdW90O1lvdXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgeW91IHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCwgb3IgaW5cbiAgICAgIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZSwgc3VjaCBhcyByYXRpbmdzLCByZXZpZXdzLCBjb21wbGltZW50cywgaW52aXRhdGlvbnMsXG4gICAgICBjaGVjay1pbnMsIG1lc3NhZ2VzLCBhbmQgaW5mb3JtYXRpb24gdGhhdCB5b3UgcHVibGljbHkgZGlzcGxheSBvciBkaXNwbGF5ZWQgaW5cbiAgICAgIHlvdXIgYWNjb3VudCBwcm9maWxlLlxuICAgICAgJnF1b3Q7VXNlciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB1c2VycyBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsXG4gICAgICBvciBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuICZxdW90O3JlZ2dlc3QgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXRcbiAgICAgIHdlIGNyZWF0ZSBhbmQgbWFrZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7VGhpcmQgUGFydHkgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgb3JpZ2luYXRlcyBmcm9tIHBhcnRpZXMgb3RoZXJcbiAgICAgIHRoYW4gcmVnZ2VzdCBvciBpdHMgdXNlcnMsIHdoaWNoIGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1NpdGUgQ29udGVudCZxdW90OyBtZWFucyBhbGwgb2YgdGhlIENvbnRlbnQgdGhhdCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uXG4gICAgICB3aXRoIHRoZSBTaXRlLCBpbmNsdWRpbmcgWW91ciBDb250ZW50LCBVc2VyIENvbnRlbnQsIFRoaXJkIFBhcnR5IENvbnRlbnQsXG4gICAgICBhbmQgcmVnZ2VzdCBDb250ZW50LlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UZXJtczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJ5IGFjY2Vzc2luZyB0aGlzIHdlYnNpdGUsIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnkgdGhlc2Ugd2Vic2l0ZSBUZXJtc1xuICAgICAgICAgIGFuZCBDb25kaXRpb25zIG9mIFVzZSwgYWxsIGFwcGxpY2FibGUgbGF3cyBhbmQgcmVndWxhdGlvbnMsIGFuZCBhZ3JlZSB0aGF0IHlvdVxuICAgICAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgY29tcGxpYW5jZSB3aXRoIGFueSBhcHBsaWNhYmxlIGxvY2FsIGxhd3MuXG4gICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB3aXRoIGFueSBvZiB0aGVzZSB0ZXJtcywgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gdXNpbmcgb3JcbiAgICAgICAgICBhY2Nlc3NpbmcgdGhpcyBzaXRlLiBUaGUgbWF0ZXJpYWxzIGNvbnRhaW5lZCBpbiB0aGlzIHdlYnNpdGUgYXJlIHByb3RlY3RlZFxuICAgICAgICAgIGJ5IGFwcGxpY2FibGUgY29weXJpZ2h0IGFuZCB0cmFkZSBtYXJrIGxhdy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRpc2NsYWltZXI8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIG9uIHRoZSByZWdnZXN0IHdlYnNpdGUgYXJlIHByb3ZpZGVkICZxdW90O2FzIHNob3duJnF1b3Q7LlxuICAgICAgICAgIHJlZ2dlc3QgbWFrZXMgbm8gd2FycmFudGllcywgZXhwcmVzc2VkIG9yIGltcGxpZWQsIGFuZCBoZXJlYnkgZGlzY2xhaW1zXG4gICAgICAgICAgYW5kIG5lZ2F0ZXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIGltcGxpZWRcbiAgICAgICAgICB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXJcbiAgICAgICAgICBwdXJwb3NlLCBvciBub24taW5mcmluZ2VtZW50IG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciBvdGhlciB2aW9sYXRpb24gb2YgcmlnaHRzLlxuICAgICAgICAgIEZ1cnRoZXIsIHJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMgY29uY2VybmluZyB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgbGlrZWx5IHJlc3VsdHMsIG9yIHJlbGlhYmlsaXR5IG9mIHRoZSB1c2Ugb2YgdGhlIG1hdGVyaWFscyBvbiBpdHMgaW50ZXJuZXRcbiAgICAgICAgICB3ZWJzaXRlIG9yIG90aGVyd2lzZSByZWxhdGluZyB0byBzdWNoIG1hdGVyaWFscyBvciBvbiBhbnkgc2l0ZXMgbGlua2VkIHRvIHRoaXMgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbWl0YXRpb25zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gbm8gZXZlbnQgc2hhbGwgcmVnZ2VzdCBvciBpdHMgc3VwcGxpZXJzIGJlIGxpYWJsZSBmb3IgYW55IGRhbWFnZXMgKGluY2x1ZGluZywgd2l0aG91dFxuICAgICAgICAgIGxpbWl0YXRpb24sIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZGF0YSBvciBwcm9maXQsIG9yIGR1ZSB0byBidXNpbmVzcyBpbnRlcnJ1cHRpb24pXG4gICAgICAgICAgYXJpc2luZyBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZSBtYXRlcmlhbHMgb24gb3VyIGludGVybmV0IHNpdGUgb3JcbiAgICAgICAgICBvZmZlcmVkIHNlcnZpY2VzLCBldmVuIGlmIHdlIG9yIGFuIGF1dGhvcml6ZWQgcmVwcmVzZW50YXRpdmUgaGFzIGJlZW4gbm90aWZpZWRcbiAgICAgICAgICBvcmFsbHkgb3IgaW4gd3JpdGluZyBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2UuIEJlY2F1c2Ugc29tZSBqdXJpc2RpY3Rpb25zXG4gICAgICAgICAgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGltcGxpZWQgd2FycmFudGllcywgb3IgbGltaXRhdGlvbnMgb2YgbGlhYmlsaXR5IGZvclxuICAgICAgICAgIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCB0aGVzZSBsaW1pdGF0aW9ucyBtYXkgbm90IGFwcGx5IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlJldmlzaW9ucyBhbmQgRXJyb3JzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBhcHBlYXJpbmcgb24gb3VyIHdlYnNpdGUgY291bGQgaW5jbHVkZSB0ZWNobmljYWwsIHR5cG9ncmFwaGljYWwsXG4gICAgICAgICAgb3IgcGhvdG9ncmFwaGljIGVycm9ycy4gcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IHRoYXQgYW55IG9mIHRoZSBtYXRlcmlhbHMgb25cbiAgICAgICAgICBpdHMgd2Vic2l0ZSBhcmUgYWNjdXJhdGUsIGNvbXBsZXRlLCBvciBjdXJyZW50LiBXZSBtYXkgbWFrZSBjaGFuZ2VzIHRvIHRoZVxuICAgICAgICAgIG1hdGVyaWFscyBjb250YWluZWQgb24gaXRzIHdlYnNpdGUgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHJlZ2dlc3QgaGFzIG5vdCByZXZpZXdlZCBhbGwgb2YgdGhlIHNpdGVzIGxpbmtlZCB0byBpdHMgaW50ZXJuZXQgd2Vic2l0ZVxuICAgICAgICAgIGFuZCBpcyBub3QgcmVzcG9uc2libGUgZm9yIHRoZSBjb250ZW50cyBvZiBhbnkgc3VjaCBsaW5rZWQgc2l0ZS5cbiAgICAgICAgICBUaGUgaW5jbHVzaW9uIG9mIGFueSBsaW5rIGRvZXMgbm90IGltcGx5IGVuZG9yc2VtZW50IGJ5IHVzIG9mIHRoZSBzaXRlLlxuICAgICAgICAgIFVzZSBvZiBhbnkgc3VjaCBsaW5rZWQgd2Vic2l0ZSBpcyBhdCB0aGUgdXNlciZxdW90O3Mgb3duIHJpc2suXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb3Zlcm5pbmcgTGF3PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW55IGNsYWltIHJlbGF0aW5nIHRvIHRoZSByZWdnZXN0IHdlYnNpdGUgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3NcbiAgICAgICAgICBvZiB0aGUgY291bnRyeSBvZiBub3RlIHdpdGhvdXQgcmVnYXJkIHRvIGl0cyBjb25mbGljdCBvZiBsYXcgcHJvdmlzaW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkVuZ2xpc2ggTGFuZ3VhZ2U8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiB0aGUgZXZlbnQgb2YgYSBjb25mbGljdCBiZXR3ZWVuIHRoZXNlIFRlcm1zIGFuZCBhIGZvcmVpZ24gbGFuZ3VhZ2UgdmVyc2lvblxuICAgICAgICAgIG9mIG91ciBUZXJtcyBvZiBVc2UsIHRoZSBFbmdsaXNoIGxhbmd1YWdlIHZlcnNpb24gb2YgdGhlc2UgVGVybXMgZ292ZXJucy5cbiAgICAgICAgICBBbGwgZGlzcHV0ZXMsIGNsYWltcyBhbmQgY2F1c2VzIG9mIGFjdGlvbiAoYW5kIHJlbGF0ZWQgcHJvY2VlZGluZ3MpIHdpbGwgYmVcbiAgICAgICAgICBjb21tdW5pY2F0ZWQgaW4gRW5nbGlzaC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBwb2xpY3ksIG5vdGljZSBhbmQgY2xhaW0gaW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGwgbWF0ZXJpYWxzIG9uIHRoaXMgc2l0ZSwgd2hldGhlciBzZXBhcmF0ZSBvciBjb21waWxlZCwgaW5jbHVkaW5nLFxuICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0bywgdGV4dCwgZ3JhcGhpY3MsIGF1ZGlvIGNsaXBzLCBsb2dvcywgYnV0dG9ucywgaW1hZ2VzLFxuICAgICAgICAgIGRpZ2l0YWwgZG93bmxvYWRzLCBkYXRhIGNvbXBpbGF0aW9ucywgc29mdHdhcmUsIGljb25zLCBodG1sIGNvZGUgYW5kIHhtbCBjb2RlLFxuICAgICAgICAgIGFzIHdlbGwgYXMgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIHRyYWRlIGRyZXNzLCBhbmQgb3RoZXIgcmlnaHRzXG4gICAgICAgICAgdGhlcmVpbiwgYXJlIG93bmVkIG9yIGxpY2Vuc2VkIGJ5IHJlZ2dlc3QgYW5kIGl0cyB0aGlyZC1wYXJ0eSBpbmZvcm1hdGlvbiBwcm92aWRlcnMsXG4gICAgICAgICAgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgaW50ZXJuYXRpb25hbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgbGF3cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUNvbnRlbnRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBhZ2VDb250ZW50X19wYWdlQ29udGVudC0td3B1dFdcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaXZhY3lQb2xpY3kgZnJvbSAnLi9wcml2YWN5UG9saWN5JztcblxuY29uc3QgUHJpdmFjeVBvbGljeUNvbnRhaW5lciA9IFByaXZhY3lQb2xpY3k7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcml2YWN5UG9saWN5Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcblxuY29uc3QgUHJpdmFjeVBvbGljeSA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5Qcml2YWN5IFBvbGljeTwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGJlZW4gY29tcGlsZWQgdG8gYmV0dGVyIHNlcnZlIHRob3NlIHdobyBhcmUgY29uY2VybmVkIHdpdGggaG93IHRoZWlyXG4gICAgICAmYXBvcztQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiZhcG9zOyAoUElJKSBpcyBiZWluZyB1c2VkIG9ubGluZS5cbiAgICAgIFBJSSwgYXMgZGVzY3JpYmVkIGluIFVTIHByaXZhY3kgbGF3IGFuZCBpbmZvcm1hdGlvbiBzZWN1cml0eSwgaXMgaW5mb3JtYXRpb24gdGhhdCBjYW4gYmUgdXNlZFxuICAgICAgb24gaXRzIG93biBvciB3aXRoIG90aGVyIGluZm9ybWF0aW9uIHRvIGlkZW50aWZ5LCBjb250YWN0LCBvciBsb2NhdGUgYSBzaW5nbGUgcGVyc29uLCBvciB0b1xuICAgICAgaWRlbnRpZnkgYW4gaW5kaXZpZHVhbCBpbiBjb250ZXh0LiBQbGVhc2UgcmVhZCBvdXIgcHJpdmFjeSBwb2xpY3kgY2FyZWZ1bGx5IHRvIGdldCBhIGNsZWFyXG4gICAgICB1bmRlcnN0YW5kaW5nIG9mIGhvdyB3ZSBjb2xsZWN0LCB1c2UsIHByb3RlY3Qgb3Igb3RoZXJ3aXNlIGhhbmRsZVxuICAgICAgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBpbiBhY2NvcmRhbmNlIHdpdGggb3VyIHdlYnNpdGUuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoYXQgcGVyc29uYWwgaW5mb3JtYXRpb24gZG8gd2UgY29sbGVjdD88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIHJlZ2lzdGVyaW5nIGZvciBvdXIgbmV3c2xldHRlciwgeW91IHdpbGwgYmUgYXNrZWQgdG8gZW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgIFRoaXMgaXMgdG8gaGVscCB1cyBpbmRlbnRpZnkgeW91IGFuZCBrZWVwIHlvdSB1cGRhdGVkLiBXZSB3aWxsIG5vdCBzZW5kIHlvdSBhbnkgZW1haWxzIHRoYXQgeW91XG4gICAgICAgICAgZG8gbm90IHJlcXVlc3QuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGVuIGRvIHdlIGNvbGxlY3QgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgY29sbGVjdCBjZXJ0YWluIGluZm9ybWF0aW9uIGZyb20geW91IHdoZW4geW91IHJlZ2lzdGVyIGZvciBvdXIgbmV3c2xldHRlci5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkhvdyBkbyB3ZSBwcm90ZWN0IHlvdXIgaW5mb3JtYXRpb24/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHVzZSB2dWxuZXJhYmlsaXR5IHNjYW5uaW5nIGFuZC9vciBzY2FubmluZyB0byBQQ0kgc3RhbmRhcmRzLlxuICAgICAgICAgIFdlIG5ldmVyIGFzayBmb3IgY3JlZGl0IGNhcmQgbnVtYmVycy4gV2UgdXNlIHJlZ3VsYXIgTWFsd2FyZSBTY2FubmluZy5cbiAgICAgICAgICBZb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGNvbnRhaW5lZCBiZWhpbmQgc2VjdXJlZCBuZXR3b3JrcyBhbmQgaXMgb25seSBhY2Nlc3NpYmxlXG4gICAgICAgICAgYnkgYSBsaW1pdGVkIG51bWJlciBvZiBwZXJzb25zIHdobyBoYXZlIHNwZWNpYWwgYWNjZXNzIHJpZ2h0cyB0byBzdWNoIHN5c3RlbXMsIGFuZCBhcmVcbiAgICAgICAgICByZXF1aXJlZCB0byBrZWVwIHRoZSBpbmZvcm1hdGlvbiBjb25maWRlbnRpYWwuIEluIGFkZGl0aW9uLCBhbGwgc2Vuc2l0aXZlIGluZm9ybWF0aW9uXG4gICAgICAgICAgeW91IHN1cHBseSBpcyBlbmNyeXB0ZWQgdmlhIFNlY3VyZSBTb2NrZXQgTGF5ZXIgKFNTTCkgdGVjaG5vbG9neS5cbiAgICAgICAgICBXZSBpbXBsZW1lbnQgYSB2YXJpZXR5IG9mIHNlY3VyaXR5IG1lYXN1cmVzIHdoZW4gYSB1c2VyIGVudGVycywgc3VibWl0cywgb3IgYWNjZXNzZXMgdGhlaXJcbiAgICAgICAgICBpbmZvcm1hdGlvbiB0byBtYWludGFpbiB0aGUgc2FmZXR5IG9mIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EbyB3ZSB1c2UgJmFwb3M7Y29va2llcyZhcG9zOz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBZZXMuIENvb2tpZXMgYXJlIHNtYWxsIGZpbGVzIHRoYXQgYSBzaXRlIG9yIGl0cyBzZXJ2aWNlIHByb3ZpZGVyIHRyYW5zZmVycyB0byB5b3VyXG4gICAgICAgICAgY29tcHV0ZXImYXBvcztzIGhhcmQgZHJpdmUgdGhyb3VnaCB5b3VyIFdlYiBicm93c2VyIHRoYXQgZW5hYmxlcyB0aGVcbiAgICAgICAgICBzaXRlJmFwb3M7cyBvciBzZXJ2aWNlIHByb3ZpZGVyJmFwb3M7cyBzeXN0ZW1zIHRvIHJlY29nbml6ZSB5b3VyIGJyb3dzZXIgYW5kIGNhcHR1cmVcbiAgICAgICAgICBhbmQgcmVtZW1iZXIgY2VydGFpbiBpbmZvcm1hdGlvbi4gVGhleSBhcmUgdXNlZCB0byBoZWxwIHVzIHVuZGVyc3RhbmQgeW91ciBwcmVmZXJlbmNlc1xuICAgICAgICAgIGJhc2VkIG9uIHByZXZpb3VzIG9yIGN1cnJlbnQgc2l0ZSBhY3Rpdml0eSwgd2hpY2ggZW5hYmxlcyB1cyB0byBwcm92aWRlXG4gICAgICAgICAgeW91IHdpdGggaW1wcm92ZWQgc2VydmljZXMuIFdlIGFsc28gdXNlIGNvb2tpZXMgdG8gaGVscCB1cyBjb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0XG4gICAgICAgICAgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uIHNvIHRoYXQgd2UgY2FuIG9mZmVyIGJldHRlciBzaXRlXG4gICAgICAgICAgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XZSB1c2UgY29va2llcyB0bzo8L2gyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlVuZGVyc3RhbmQgYW5kIHNhdmUgdXNlciZhcG9zO3MgcHJlZmVyZW5jZXMgZm9yIGZ1dHVyZSB2aXNpdHMuPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICBDb21waWxlIGFnZ3JlZ2F0ZSBkYXRhIGFib3V0IHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbnNcbiAgICAgICAgICAgIGluIG9yZGVyIHRvIG9mZmVyIGJldHRlciBzaXRlIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgV2UgbWF5IGFsc28gdXNlIHRydXN0ZWQgdGhpcmQtcGFydHkgc2VydmljZXMgdGhhdCB0cmFjayB0aGlzXG4gICAgICAgICAgICBpbmZvcm1hdGlvbiBvbiBvdXIgYmVoYWxmXG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ29va2llcyBhcmUgYW4gaW1wb3J0YW50IHBhcnQgb2Ygb3VyIHdlYnNpdGUgYW5kIHRoZSB3ZWJzaXRlIHdpbGwgbm90IHdvcmtcbiAgICAgICAgICB3aXRob3V0IGhhdmluZyB0aGVtIGVuYWJsZWQuIEJ5IHVzaW5nIG91ciBzaXRlIHlvdSBhbGxvdyB1cyB0byB1c2UgY29va2llcy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGRpc2Nsb3N1cmU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3Qgc2VsbCwgdHJhZGUsIG9yIG90aGVyd2lzZSB0cmFuc2ZlciB0byBvdXRzaWRlXG4gICAgICAgICAgcGFydGllcyB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgbGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBtYXkgYmUgdGhpcmQtcGFydHkgbGlua3MgdG8gcmFkaW8gc3RhdGlvbiB3ZWJzaXRlcyB0aHJvdWdob3V0IG91clxuICAgICAgICAgIHdlYnNpdGUuIFRoZXNlIHRoaXJkLXBhcnR5IHNpdGVzIGhhdmUgc2VwYXJhdGUgYW5kIGluZGVwZW5kZW50IHByaXZhY3kgcG9saWNpZXMuXG4gICAgICAgICAgV2UgdGhlcmVmb3JlIGhhdmUgbm8gcmVzcG9uc2liaWxpdHkgb3IgbGlhYmlsaXR5IGZvciB0aGUgY29udGVudCBhbmRcbiAgICAgICAgICBhY3Rpdml0aWVzIG9mIHRoZXNlIGxpbmtlZCBzaXRlcy4gTm9uZXRoZWxlc3MsIHdlIHNlZWsgdG8gcHJvdGVjdFxuICAgICAgICAgIHRoZSBpbnRlZ3JpdHkgb2Ygb3VyIHNpdGUgYW5kIHdlbGNvbWUgYW55IGZlZWRiYWNrIGFib3V0IHRoZXNlIHNpdGVzLlxuICAgICAgICAgIEFueSBsaW5rIG9uIG91ciBzaXRlIHRvIGEgdGhpcmQgcGFydCB3ZWJzaXRlIHRoYXQgaXMgbm90IHJlbGV2YW50XG4gICAgICAgICAgb3IgaWYgd2UgZGVlbSBpdCBpbmFwcHJvcHJpYXRlLCBtYXkgYmUgcmVtb3ZlZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvb2dsZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgYWR2ZXJ0aXNpbmcgcmVxdWlyZW1lbnRzIGNhbiBiZSBzdW1tZWQgdXAgYnlcbiAgICAgICAgICBHb29nbGUmYXBvcztzIEFkdmVydGlzaW5nIFByaW5jaXBsZXMuIFRoZXkgYXJlIHB1dCBpbiBwbGFjZSB0b1xuICAgICAgICAgIHByb3ZpZGUgYSBwb3NpdGl2ZSBleHBlcmllbmNlIGZvciB1c2Vycy4gaHR0cHM6Ly9zdXBwb3J0Lmdvb2dsZS5jb20vYWR3b3Jkc3BvbGljeS9hbnN3ZXIvMTMxNjU0OD9obD1lblxuXG4gICAgICAgICAgV2UgaGF2ZSBub3QgZW5hYmxlZCBHb29nbGUgQWRTZW5zZSBvbiBvdXIgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNhbGlmb3JuaWEgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3Q8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDYWxPUFBBIGlzIHRoZSBmaXJzdCBzdGF0ZSBsYXcgaW4gdGhlIG5hdGlvbiB0byByZXF1aXJlIGNvbW1lcmNpYWxcbiAgICAgICAgICB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIHRvIHBvc3QgYSBwcml2YWN5IHBvbGljeS5cbiAgICAgICAgICBUaGUgbGF3JmFwb3M7cyByZWFjaCBzdHJldGNoZXMgd2VsbCBiZXlvbmQgQ2FsaWZvcm5pYSB0byByZXF1aXJlIGFueSBwZXJzb24gb3IgY29tcGFueVxuICAgICAgICAgIGluIHRoZSBVbml0ZWQgU3RhdGVzIChhbmQgY29uY2VpdmFibHkgdGhlIHdvcmxkKSB0aGF0IG9wZXJhdGVzIHdlYnNpdGVzIGNvbGxlY3RpbmdcbiAgICAgICAgICBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiBmcm9tIENhbGlmb3JuaWEgY29uc3VtZXJzIHRvIHBvc3QgYSBjb25zcGljdW91c1xuICAgICAgICAgIHByaXZhY3kgcG9saWN5IG9uIGl0cyB3ZWJzaXRlIHN0YXRpbmcgZXhhY3RseSB0aGUgaW5mb3JtYXRpb24gYmVpbmcgY29sbGVjdGVkIGFuZFxuICAgICAgICAgIHRob3NlIGluZGl2aWR1YWxzIG9yIGNvbXBhbmllcyB3aXRoIHdob20gaXQgaXMgYmVpbmcgc2hhcmVkLiAtIFNlZSBtb3JlIGF0OlxuICAgICAgICAgIGh0dHA6Ly9jb25zdW1lcmNhbC5vcmcvY2FsaWZvcm5pYS1vbmxpbmUtcHJpdmFjeS1wcm90ZWN0aW9uLWFjdC1jYWxvcHBhLyNzdGhhc2guMEZkUmJUNTEuZHB1ZlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+QWNjb3JkaW5nIHRvIENhbE9QUEEsIHdlIGFncmVlIHRvIHRoZSBmb2xsb3dpbmc6PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVXNlcnMgY2FuIHZpc2l0IG91ciBzaXRlIGFub255bW91c2x5LlxuICAgICAgICAgIFRoaXMgcHJpdmFjeSBwb2xpY3kgaGFzIGEgbGluayB0byBpdCBmcm9tIG91ciBob21lIHBhZ2UgaW4gdGhlIGhlYWRlci5cbiAgICAgICAgICBPdXIgUHJpdmFjeSBQb2xpY3kgbGluayBpbmNsdWRlcyB0aGUgd29yZCAmYXBvcztQcml2YWN5JmFwb3M7IGFuZCBjYW4gZWFzaWx5XG4gICAgICAgICAgYmUgZm91bmQgb24gdGhlIHBhZ2Ugc3BlY2lmaWVkIGFib3ZlLlxuXG4gICAgICAgICAgWW91IHdpbGwgYmUgbm90aWZpZWQgb2YgYW55IFByaXZhY3kgUG9saWN5IGNoYW5nZXM6XG4gICAgICAgICAgICAgICAg4oCiIE9uIG91ciBQcml2YWN5IFBvbGljeSBQYWdlXG4gICAgICAgICAgQ2FuIGNoYW5nZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uOlxuICAgICAgICAgICAgICAgIOKAoiBUaHJvdWdoIG91ciB3ZWJzaXRlXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Eb2VzIG91ciBzaXRlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmc/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSXQmYXBvcztzIGltcG9ydGFudCB0byBub3RlIHRoYXQgd2UgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZ1xuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q09QUEEgKENoaWxkcmVuIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0KTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gaXQgY29tZXMgdG8gdGhlIGNvbGxlY3Rpb24gb2YgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBjaGlsZHJlblxuICAgICAgICAgIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLCB0aGUgQ2hpbGRyZW4mYXBvcztzIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb25cbiAgICAgICAgICBBY3QgKENPUFBBKSBwdXRzIHBhcmVudHMgaW4gY29udHJvbC4gVGhlIEZlZGVyYWwgVHJhZGUgQ29tbWlzc2lvbiwgVW5pdGVkIFN0YXRlcyZhcG9zO1xuICAgICAgICAgIGNvbnN1bWVyIHByb3RlY3Rpb24gYWdlbmN5LCBlbmZvcmNlcyB0aGUgQ09QUEEgUnVsZSwgd2hpY2ggc3BlbGxzIG91dCB3aGF0XG4gICAgICAgICAgb3BlcmF0b3JzIG9mIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgbXVzdCBkbyB0byBwcm90ZWN0IGNoaWxkcmVuJmFwb3M7c1xuICAgICAgICAgIHByaXZhY3kgYW5kIHNhZmV0eSBvbmxpbmUuXG5cbiAgICAgICAgICBXZSBkbyBub3Qgc3BlY2lmaWNhbGx5IG1hcmtldCB0byBjaGlsZHJlbiB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIFByaW5jaXBsZXMgZm9ybSB0aGUgYmFja2JvbmUgb2YgcHJpdmFjeVxuICAgICAgICAgIGxhdyBpbiB0aGUgVW5pdGVkIFN0YXRlcyBhbmQgdGhlIGNvbmNlcHRzIHRoZXkgaW5jbHVkZSBoYXZlIHBsYXllZCBhIHNpZ25pZmljYW50XG4gICAgICAgICAgcm9sZSBpbiB0aGUgZGV2ZWxvcG1lbnQgb2YgZGF0YSBwcm90ZWN0aW9uIGxhd3MgYXJvdW5kIHRoZSBnbG9iZS4gVW5kZXJzdGFuZGluZ1xuICAgICAgICAgIHRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlIFByaW5jaXBsZXMgYW5kIGhvdyB0aGV5IHNob3VsZCBiZSBpbXBsZW1lbnRlZCBpc1xuICAgICAgICAgIGNyaXRpY2FsIHRvIGNvbXBseSB3aXRoIHRoZSB2YXJpb3VzIHByaXZhY3kgbGF3cyB0aGF0IHByb3RlY3QgcGVyc29uYWwgaW5mb3JtYXRpb24uXG5cbiAgICAgICAgICBJbiBvcmRlciB0byBiZSBpbiBsaW5lIHdpdGggRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgd2Ugd2lsbCB0YWtlIHRoZVxuICAgICAgICAgIGZvbGxvd2luZyByZXNwb25zaXZlIGFjdGlvbiwgc2hvdWxkIGEgZGF0YSBicmVhY2ggb2NjdXI6XG5cbiAgICAgICAgICBXZSB3aWxsIG5vdGlmeSB5b3UgdmlhIGVtYWlsIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuIFdlIHdpbGwgYWxzb1xuICAgICAgICAgIG5vdGlmeSB1c2VycyB2aWEgYW4gaW4tc2l0ZSBub3RpZmljYXRpb24gb24gdGhlIGhvbWUgcGFnZSB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLlxuXG4gICAgICAgICAgV2UgYWxzbyBhZ3JlZSB0byB0aGUgSW5kaXZpZHVhbCBSZWRyZXNzIFByaW5jaXBsZSB3aGljaCByZXF1aXJlcyB0aGF0IGluZGl2aWR1YWxzXG4gICAgICAgICAgaGF2ZSB0aGUgcmlnaHQgdG8gbGVnYWxseSBwdXJzdWUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSBjb2xsZWN0b3JzXG4gICAgICAgICAgYW5kIHByb2Nlc3NvcnMgd2hvIGZhaWwgdG8gYWRoZXJlIHRvIHRoZSBsYXcuIFRoaXMgcHJpbmNpcGxlIHJlcXVpcmVzIG5vdCBvbmx5XG4gICAgICAgICAgdGhhdCBpbmRpdmlkdWFscyBoYXZlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgdXNlcnMsIGJ1dCBhbHNvIHRoYXRcbiAgICAgICAgICBpbmRpdmlkdWFscyBoYXZlIHJlY291cnNlIHRvIGNvdXJ0cyBvciBnb3Zlcm5tZW50IGFnZW5jaWVzIHRvIGludmVzdGlnYXRlXG4gICAgICAgICAgYW5kL29yIHByb3NlY3V0ZSBub24tY29tcGxpYW5jZSBieSBkYXRhIHByb2Nlc3NvcnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwiaW1wb3J0IEltcHJpbnQgZnJvbSAnLi9pbXByaW50JztcblxuY29uc3QgSW1wcmludENvbnRhaW5lciA9IEltcHJpbnQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBJbXByaW50Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbXByaW50Lmxlc3MnO1xuXG5jb25zdCBJbXByaW50ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbXByaW50Q29udGVudH0+XG4gICAgICA8aDE+SW1wcmludDwvaDE+XG4gICAgICA8ZGl2PkNvbXBhbnkgTmFtZTogVkFTVCBORVRXT1JLIExURDwvZGl2PlxuICAgICAgPGRpdj5NYW5hZ2luZyBEaXJlY3RvcjogTWFydGluIERhd3NvbjwvZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzOiAyNiBDYWxkZXJWaWV3LCBSYXN0cmljaywgQnJpZ2hvdXNlLCBIRDYzRFEgVW5pdGVkIEtpbmdkb208L2Rpdj5cbiAgICAgIDxkaXY+VGVsZXBob25lOiArKDQ0KTc0NzM1OTEwOTc8L2Rpdj5cbiAgICAgIDxkaXY+RW1haWwgYWRkcmVzczogaW5mb0ByZWdnZXN0LmNvbTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbXByaW50Q29udGVudFwiOlwiQ29tcG9uZW50cy1mb290ZXItaW1wcmludF9faW1wcmludENvbnRlbnQtLTE1ckxNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgZmxhdHRlblByb3AgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vZXJyb3JQYWdlJztcblxuY29uc3QgY3JlYXRlUHJvcHMgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIDQwNDpcbiAgICAgIHJldHVybiB7IGVycm9yOiAnVGhlIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLicgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyhjcmVhdGVQcm9wcyksXG4pO1xuXG5jb25zdCBFcnJvclBhZ2VDb250YWluZXIgPSBlbmhhbmNlKEVycm9yUGFnZSk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcmVuZGVyOiAoeyBwcm9wcyB9KSA9PiBwcm9wcyAmJiAoXG4gICAgPEVycm9yUGFnZUNvbnRhaW5lclxuICAgICAgc3RhdHVzPXtwYXJzZUludChwcm9wcy5wYXJhbXMuc3RhdHVzLCAxMCl9XG4gICAgICBlcnJvcj17cHJvcHMubG9jYXRpb24uc3RhdGUuZXJyb3J9XG4gICAgLz5cbiAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3JQYWdlLmxlc3MnO1xuXG5jb25zdCBFcnJvclBhZ2UgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9PlxuICAgIDxoMT5FcnJvciB7c3RhdHVzfTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L2Rpdj5cbiAgICAgIFdlIGhhdmUgYmVlbiBub3RpZmllZCBvZiB0aGUgZXJyb3Igwq9cXF8o44OEKV8vwq8uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRXJyb3JQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkLicsXG59O1xuXG5FcnJvclBhZ2UucHJvcFR5cGVzID0ge1xuICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHF1b3RhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JQYWdlXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yUGFnZS0tMWFTLXpcIixcImVycm9yXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yLS02MktaQ1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaW1hcnlMYXlvdXQgZnJvbSAnLi9wcmltYXJ5TGF5b3V0JztcblxuY29uc3QgUHJpbWFyeUxheW91dENvbnRhaW5lciA9IFByaW1hcnlMYXlvdXQ7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcmltYXJ5TGF5b3V0Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ByaW1hcnlMYXlvdXQubGVzcyc7XG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4uLy4uL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXInO1xuaW1wb3J0IFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGZyb20gJy4vcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnknO1xuaW1wb3J0IERpc3BsYXlUeXBlIGZyb20gJy4uLy4uL3NoYXJlZC9kaXNwbGF5VHlwZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXInO1xuaW1wb3J0IFBvcHVwcyBmcm9tICcuLi8uLi9zaGFyZWQvcG9wdXAvcG9wdXBzQ29udGFpbmVyJztcbmltcG9ydCBOZXdzbGV0dGVyTW9kYWwgZnJvbSAnLi4vLi4vZW1haWwvbmV3c2xldHRlck1vZGFsQ29udGFpbmVyJztcblxuY29uc3QgUHJpbWFyeUxheW91dCA9ICh7XG4gIGNoaWxkcmVuLFxufSkgPT4gKFxuICA8RGlzcGxheVR5cGU+XG4gICAgeyhkaXNwbGF5VHlwZSkgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheVR5cGVDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxuICAgICAgICBkaXNwbGF5VHlwZS5pc01vYmlsZSAmJiAnbW9iaWxlJyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNUYWJsZXQgJiYgJ3RhYmxldCcsXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzRGVza3RvcCAmJiAnZGVza3RvcCcsXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UHJpbWFyeUxheW91dEVycm9yQm91bmRhcnlcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoZGlzcGxheVR5cGVDbGFzc05hbWUsIHN0eWxlcy5wcmltYXJ5TGF5b3V0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlZ2dlc3RDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2dlc3R9PlxuICAgICAgICAgICAgICAgICAgcmVnZ2VzdFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZXRhTGFiZWx9PmJldGE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb3RvfT5maXRuZXNzIHBsYW4gc3VnZ2VzdGVyPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPFBvcHVwcyAvPlxuICAgICAgICAgIDxOZXdzbGV0dGVyTW9kYWwgLz5cbiAgICAgICAgICA8Q29va2llTm90aWNlIC8+XG4gICAgICAgIDwvUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgICApO1xuICAgIH19XG4gIDwvRGlzcGxheVR5cGU+XG4pO1xuXG5QcmltYXJ5TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5QcmltYXJ5TGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpbWFyeUxheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwcmltYXJ5TGF5b3V0XCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19wcmltYXJ5TGF5b3V0LS0zRlZqYlwiLFwid3JhcFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fd3JhcC0tM092MzhcIixcIm1haW5cIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX21haW4tLTFHNmExXCIsXCJyZWdnZXN0Q29udGFpbmVyXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19yZWdnZXN0Q29udGFpbmVyLS0yNEc1R1wiLFwicmVnZ2VzdFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcmVnZ2VzdC0tUklIU0NcIixcImJldGFMYWJlbFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fYmV0YUxhYmVsLS1OMGFnR1wiLFwibW90b1wiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fbW90by0tMzhRemtcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb21wb3NlLCB3aXRoU3RhdGVIYW5kbGVycywgbGlmZWN5Y2xlLCBicmFuY2gsIHJlbmRlck5vdGhpbmcgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4vY29va2llTm90aWNlJztcblxuY29uc3Qgc3RhdGVIYW5kbGVycyA9IHtcbiAgc2hvd0Nvb2tpZU5vdGljZTogKCkgPT4gKCkgPT4gKHtcbiAgICBzaG93aW5nQ29va2llTm90aWNlOiB0cnVlLFxuICB9KSxcbiAgaGlkZUNvb2tpZU5vdGljZTogKCkgPT4gKCkgPT4gKHtcbiAgICBzaG93aW5nQ29va2llTm90aWNlOiBmYWxzZSxcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoU3RhdGVIYW5kbGVycyhudWxsLCBzdGF0ZUhhbmRsZXJzKSxcbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IGNvb2tpZU5vdGljZVNob3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJyk7XG5cbiAgICAgIGlmICghY29va2llTm90aWNlU2hvd24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaG93Q29va2llTm90aWNlKHRydWUpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb29raWVOb3RpY2VTaG93bicsIHRydWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH0pLFxuICBicmFuY2goXG4gICAgcHJvcHMgPT4gIXByb3BzLnNob3dpbmdDb29raWVOb3RpY2UsXG4gICAgcmVuZGVyTm90aGluZyxcbiAgKSxcbikoQ29va2llTm90aWNlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY29va2llTm90aWNlLmxlc3MnO1xuXG5jb25zdCBDb29raWVOb3RpY2UgPSAoeyBoaWRlQ29va2llTm90aWNlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb29raWVOb3RpY2V9PlxuICAgIFRoaXMgd2Vic2l0ZSB1c2VzIGNvb2tpZXMgdG8gZ2l2ZSB5b3UgdGhlIGJlc3QgdXNlciBleHBlcmllbmNlLFxuICAgIGJ5IGNvbnRpbnVpbmcgdG8gdXNlIHRoZSBzaXRlIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3VyIHVzZSBvZiBjb29raWVzLlxuICAgIDxidXR0b24gb25DbGljaz17aGlkZUNvb2tpZU5vdGljZX0+Q2xvc2U8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5Db29raWVOb3RpY2UucHJvcFR5cGVzID0ge1xuICBoaWRlQ29va2llTm90aWNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29va2llTm90aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiY29va2llTm90aWNlXCI6XCJDb21wb25lbnRzLWZvb3Rlci1jb29raWVOb3RpY2VfX2Nvb2tpZU5vdGljZS0tM3dWZ3VcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnZm91bmQnO1xuXG5jbGFzcyBQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZENhdGNoKCkge1xuICAgIC8vIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9lcnJvci81MDAnKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkucHJvcFR5cGVzID0ge1xuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHdpdGhSb3V0ZXIsXG4pKFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzaXplcyBmcm9tICcuL3NpemVzJztcblxuY2xhc3MgRGlzcGxheVR5cGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBkaXNwbGF5VHlwZTogJ2Rlc2t0b3AnLFxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgICB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSk7XG4gIH1cblxuICBnZXREaXNwbGF5VHlwZSA9ICh3aW5kb3dXaWR0aCkgPT4ge1xuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRNb2JpbGUudmFsdWUpIHtcbiAgICAgIHJldHVybiAnbW9iaWxlJztcbiAgICB9XG5cbiAgICBpZiAod2luZG93V2lkdGggPCBzaXplcy5icmVha3BvaW50VGFibGV0LnZhbHVlKSB7XG4gICAgICByZXR1cm4gJ3RhYmxldCc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdkZXNrdG9wJztcbiAgfVxuXG4gIHVwZGF0ZURpc3BsYXlUeXBlID0gKCkgPT4ge1xuICAgIGNvbnN0IHdpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBkaXNwbGF5VHlwZSA9IHRoaXMuZ2V0RGlzcGxheVR5cGUod2luZG93V2lkdGgpO1xuXG4gICAgaWYgKGRpc3BsYXlUeXBlICE9PSB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzcGxheVR5cGUgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0ge1xuICAgICAgaXNNb2JpbGU6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdtb2JpbGUnLFxuICAgICAgaXNUYWJsZXQ6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICd0YWJsZXQnLFxuICAgICAgaXNEZXNrdG9wOiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAnZGVza3RvcCcsXG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKGRpc3BsYXlUeXBlKTtcbiAgfVxufVxuXG5EaXNwbGF5VHlwZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheVR5cGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9kaXNwbGF5VHlwZS5qcyIsImNvbnN0IHNpemVzID0ge1xuICBicmVha3BvaW50TW9iaWxlOiB7IHZhbHVlOiA3NjgsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludFRhYmxldDogeyB2YWx1ZTogOTkyLCB1bml0OiAncHgnIH0sXG4gIGJyZWFrcG9pbnREZXNrdG9wOiB7IHZhbHVlOiAxMjAwLCB1bml0OiAncHgnIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3NpemVzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdmb3VuZCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubGVzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgIDxMaW5rIHRvPVwiL3Rlcm1zQW5kQ29uZGl0aW9uc1wiPnRlcm1zIGFuZCBjb25kaXRpb25zPC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL3ByaXZhY3lQb2xpY3lcIj5wcml2YWN5IHBvbGljeTwvTGluaz5cbiAgICA8TGluayB0bz1cIi9pbXByaW50XCI+aW1wcmludDwvTGluaz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmb290ZXJcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWZvb3Rlcl9fZm9vdGVyLS0zUzFuNFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFBvcHVwcyBmcm9tICcuL3BvcHVwcyc7XG5pbXBvcnQgeyBoaWRlUG9wdXAgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBwb3B1cCB9KSA9PiAoe1xuICBwb3B1cHM6IHBvcHVwLnBvcHVwcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge1xuICBoaWRlUG9wdXAsXG59KShQb3B1cHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3B1cCBmcm9tICcuL3BvcHVwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3B1cHMubGVzcyc7XG5cbmNvbnN0IFBvcHVwcyA9ICh7IHBvcHVwcywgaGlkZVBvcHVwIH0pID0+IChcbiAgcG9wdXBzLmxlbmd0aCA+IDAgPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cHN9PlxuICAgICAge3BvcHVwcy5tYXAoKHBvcHVwLCBpbmRleCkgPT4gKFxuICAgICAgICA8UG9wdXBcbiAgICAgICAgICBrZXk9e3BvcHVwLmlkfVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB0ZXh0PXtwb3B1cC50ZXh0fVxuICAgICAgICAgIGhpZGVQb3B1cD17aGlkZVBvcHVwfVxuICAgICAgICAgIG1pbGxpc2Vjb25kc1RvU2hvdz17cG9wdXAubWlsbGlzZWNvbmRzVG9TaG93fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+KVxuICAgIDogbnVsbFxuKTtcblxuUG9wdXBzLnByb3BUeXBlcyA9IHtcbiAgaGlkZVBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwb3B1cHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWlsbGlzZWNvbmRzVG9TaG93OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3B1cC5sZXNzJztcblxuY2xhc3MgUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHRoaXMucHJvcHMubWlsbGlzZWNvbmRzVG9TaG93KSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmhpZGVQb3B1cCh0aGlzLnByb3BzLmluZGV4KSwgdGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXB9PlxuICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGlkZVBvcHVwKHRoaXMucHJvcHMuaW5kZXgpfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Qb3B1cC5wcm9wVHlwZXMgPSB7XG4gIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaGlkZVBvcHVwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBtaWxsaXNlY29uZHNUb1Nob3c6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwb3B1cFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBfX3BvcHVwLS0yNE9ZTVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwb3B1cHNcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBvcHVwLXBvcHVwc19fcG9wdXBzLS0xbTFLRVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgcG9wdXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzVG9TaG93XSAtIE9wdGlvbmFsOiBUaGUgYW1vdW50IG9mIHRpbWVcbiAqIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSBwb3B1cFxuICovXG5leHBvcnQgY29uc3Qgc2hvd1BvcHVwID0gKHRleHQsIG1pbGxpc2Vjb25kc1RvU2hvdykgPT4gKHtcbiAgdHlwZTogJ1NIT1dfUE9QVVAnLFxuICB0ZXh0LFxuICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxuICBtaWxsaXNlY29uZHNUb1Nob3csXG59KTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGluZGV4IG9mIHRoZSBwb3B1cCB0byBoaWRlXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlUG9wdXAgPSBpbmRleCA9PiAoe1xuICB0eXBlOiAnSElERV9QT1BVUCcsXG4gIGluZGV4LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzaG93R2VuZXJpY0Vycm9yUG9wdXAgPSAoZXJyb3IpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG5cbiAgcmV0dXJuIHNob3dQb3B1cCgnQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBQbGVhc2UgdHJ5IHJlZnJlc2hpbmcgdGhlIHBhZ2UuJyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvYWN0aW9ucy5qcyIsImltcG9ydCB7IHJlZHV4Rm9ybSwgU3VibWlzc2lvbkVycm9yIH0gZnJvbSAncmVkdXgtZm9ybSc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoSGFuZGxlcnMgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IE5ld3NsZXR0ZXJNb2RhbCBmcm9tICcuL25ld3NsZXR0ZXJNb2RhbCc7XG5pbXBvcnQgbmV3c2xldHRlclZhbGlkYXRpb24gZnJvbSAnLi92YWxpZGF0aW9uJztcbmltcG9ydCBzdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24gZnJvbSAnLi9zdWJzY3JpYmVOZXdzbGV0dGVyTXV0YXRpb24nO1xuaW1wb3J0IHsgaGlkZU1vZGFsIH0gZnJvbSAnLi4vc2hhcmVkL21vZGFsL2FjdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVycyA9IHtcbiAgaGlkZU1vZGFsOiAoeyBkaXNwYXRjaCB9KSA9PiAoKSA9PiBkaXNwYXRjaChoaWRlTW9kYWwoKSksXG4gIG9uU3VibWl0OiAoeyBkaXNwYXRjaCB9KSA9PiBpbnB1dCA9PlxuICAgIHN1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbihpbnB1dCwgZGlzcGF0Y2gpXG4gICAgICAudGhlbigoKSA9PiBkaXNwYXRjaChoaWRlTW9kYWwoKSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHRocm93IG5ldyBTdWJtaXNzaW9uRXJyb3IoZXJyb3IpO1xuICAgICAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICBjb25uZWN0KCksXG4gIHdpdGhIYW5kbGVycyhoYW5kbGVycyksXG4gIHJlZHV4Rm9ybSh7XG4gICAgZm9ybTogJ25ld3NsZXR0ZXInLFxuICAgIHZhbGlkYXRlOiBuZXdzbGV0dGVyVmFsaWRhdGlvbixcbiAgfSksXG4pKE5ld3NsZXR0ZXJNb2RhbCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2VtYWlsL25ld3NsZXR0ZXJNb2RhbENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL25ld3NsZXR0ZXJNb2RhbC5sZXNzJztcbmltcG9ydCBJbnB1dFRleHRGaWVsZCBmcm9tICcuLi9zaGFyZWQvaW5wdXRGaWVsZC9pbnB1dFRleHRGaWVsZCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vc2hhcmVkL21vZGFsL21vZGFsQ29udGFpbmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vc2hhcmVkL2J1dHRvbi9idXR0b24nO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvcnMgZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3JzJztcbmltcG9ydCBSZWNhcHRjaGEgZnJvbSAnLi4vZW1haWwvcmVjYXB0Y2hhJztcblxuY29uc3QgTmV3c2xldHRlck1vZGFsID0gKHsgaGFuZGxlU3VibWl0LCBlcnJvciwgaGlkZU1vZGFsIH0pID0+IChcbiAgPE1vZGFsIHRpdGxlPVwiU3Vic2NyaWJlLlwiIGlkPVwiZml0bmVzc1BsYW5zXCIgYWxsb3dPdmVybGF5SGlkZU1vZGFsPXtmYWxzZX0+XG4gICAgPFZhbGlkYXRpb25FcnJvcnMgZXJyb3JzPXtlcnJvcn0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZVRleHR9PlxuICAgICAgPGRpdj5TdWJzY3JpYmUgdG8gZ2V0IHlvdXIgZml0bmVzcyBwbGFucyBlbWFpbGVkIHRvIHlvdS48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBhY3Rpb249XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmllbGRzfT5cbiAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGNvbXBvbmVudD17SW5wdXRUZXh0RmllbGR9IHBsYWNlaG9sZGVyPVwiZW1haWwgKHJlcXVpcmVkKVwiIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEZpZWxkIG5hbWU9XCJyZWNhcHRjaGFcIiBjb21wb25lbnQ9e1JlY2FwdGNoYX0gLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZU5hbWU9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxCdXR0b259PlxuICAgICAgICAgIFN1YnNjcmliZSBtZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBzdHlsZU5hbWU9XCJwcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLm5vVGhhbmtzQnV0dG9ufSBvbkNsaWNrPXtoaWRlTW9kYWx9PlxuICAgICAgICAgIE5vIHRoYW5rc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9Nb2RhbD5cbik7XG5cbk5ld3NsZXR0ZXJNb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiBbXSxcbn07XG5cbk5ld3NsZXR0ZXJNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgKSxcbiAgaGlkZU1vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlck1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lbWFpbC9uZXdzbGV0dGVyTW9kYWwuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtb2RhbFwiOlwiQ29tcG9uZW50cy1lbWFpbC1uZXdzbGV0dGVyTW9kYWxfX21vZGFsLS0yWWxsRFwiLFwiY2xvc2VcIjpcIkNvbXBvbmVudHMtZW1haWwtbmV3c2xldHRlck1vZGFsX19jbG9zZS0tM2xTaFRcIixcInRpdGxlXCI6XCJDb21wb25lbnRzLWVtYWlsLW5ld3NsZXR0ZXJNb2RhbF9fdGl0bGUtLTNXakF1XCIsXCJmaWVsZHNcIjpcIkNvbXBvbmVudHMtZW1haWwtbmV3c2xldHRlck1vZGFsX19maWVsZHMtLTJaN3ZNXCIsXCJzdWJzY3JpYmVUZXh0XCI6XCJDb21wb25lbnRzLWVtYWlsLW5ld3NsZXR0ZXJNb2RhbF9fc3Vic2NyaWJlVGV4dC0tMjNQOHhcIixcImJ1dHRvbnNcIjpcIkNvbXBvbmVudHMtZW1haWwtbmV3c2xldHRlck1vZGFsX19idXR0b25zLS0zZV9SaFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZW1haWwvbmV3c2xldHRlck1vZGFsLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFZhbGlkYXRpb25GaWVsZCBmcm9tICcuLi92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkZpZWxkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbnB1dFRleHRGaWVsZC5sZXNzJztcblxuY29uc3QgSW5wdXRUZXh0RmllbGQgPSAoe1xuICBpbnB1dCxcbiAgbWV0YTogeyB0b3VjaGVkLCBlcnJvciA9IFtdIH0sXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxWYWxpZGF0aW9uRmllbGQgdG91Y2hlZD17dG91Y2hlZH0gZXJyb3I9e2Vycm9yfT5cbiAgICA8aW5wdXRcbiAgICAgIHsuLi5pbnB1dH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIDwvVmFsaWRhdGlvbkZpZWxkPlxuKTtcblxuSW5wdXRUZXh0RmllbGQucHJvcFR5cGVzID0ge1xuICBpbnB1dDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG91Y2hlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgXSksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IElucHV0VGV4dEZpZWxkO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvaW5wdXRGaWVsZC9pbnB1dFRleHRGaWVsZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmFsaWRhdGlvbkVycm9yLmxlc3MnO1xuXG5jb25zdCBFcnJvciA9ICh7IGVycm9yIH0pID0+IChcbiAgZXJyb3IgJiYgKFxuICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIHtlcnJvcn1cbiAgICA8L3NwYW4+XG4gIClcbik7XG5cbkVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5FcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkVycm9yLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXZhbGlkYXRpb25GaWVsZC12YWxpZGF0aW9uRXJyb3JfX2Vycm9yLS0xUGE5blwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3ZhbGlkYXRpb25GaWVsZC92YWxpZGF0aW9uRXJyb3IubGVzc1xuLy8gbW9kdWxlIGlkID0gNzg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImlucHV0XCI6XCJDb21wb25lbnRzLXNoYXJlZC1pbnB1dEZpZWxkLWlucHV0VGV4dEZpZWxkX19pbnB1dC0tMmhObExcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9pbnB1dEZpZWxkL2lucHV0VGV4dEZpZWxkLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZSwgc2V0UHJvcFR5cGVzLCBicmFuY2gsIHJlbmRlck5vdGhpbmcgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHsgaGlkZU1vZGFsLCBzaG93TW9kYWwgfSBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBtb2RhbCB9LCB7IGlkIH0pID0+ICh7XG4gIGlzQ3VycmVudE1vZGFsOiBtb2RhbC5jdXJyZW50TW9kYWwgPT09IGlkLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHNldFByb3BUeXBlcyh7XG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSksXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7XG4gICAgaGlkZU1vZGFsLFxuICAgIHNob3dNb2RhbCxcbiAgfSksXG4gIGJyYW5jaChcbiAgICBwcm9wcyA9PiAhcHJvcHMuaXNDdXJyZW50TW9kYWwsXG4gICAgcmVuZGVyTm90aGluZyxcbiAgKSxcbikoTW9kYWwpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWxDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwubGVzcyc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xuaW1wb3J0IENyb3NzSWNvbiBmcm9tICcuLi8uLi9pY29ucy9jcm9zcyc7XG5cbmNvbnN0IE1vZGFsID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlLFxuICBoaWRlTW9kYWwsXG4gIGNsYXNzTmFtZSxcbiAgYWxsb3dPdmVybGF5SGlkZU1vZGFsLFxufSkgPT4gKFxuICA8T3ZlcmxheSBvbkNsaWNrPXthbGxvd092ZXJsYXlIaWRlTW9kYWwgPyBoaWRlTW9kYWwgOiBudWxsfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhzdHlsZXMubW9kYWwsIGNsYXNzTmFtZSl9PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoaWRlTW9kYWx9IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlfT5cbiAgICAgICAgPENyb3NzSWNvbiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIDwvT3ZlcmxheT5cbik7XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxuICBhbGxvd092ZXJsYXlIaWRlTW9kYWw6IHRydWUsXG59O1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhpZGVNb2RhbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYWxsb3dPdmVybGF5SGlkZU1vZGFsOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJtb2RhbFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtbW9kYWwtbW9kYWxfX21vZGFsLS0yRDBwcFwiLFwiY2xvc2VcIjpcIkNvbXBvbmVudHMtc2hhcmVkLW1vZGFsLW1vZGFsX19jbG9zZS0tMXRWSjRcIixcInRpdGxlXCI6XCJDb21wb25lbnRzLXNoYXJlZC1tb2RhbC1tb2RhbF9fdGl0bGUtLXluQjM4XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbW9kYWwvbW9kYWwubGVzc1xuLy8gbW9kdWxlIGlkID0gNzg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vb3ZlcmxheS5sZXNzJztcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cyAqL1xuLy8gTm8gS2V5IGV2ZW50IGFzIGl0IHNob3VsZCBiZSBoYW5kbGVkIGJ5IG90aGVyIG9iamVjdHMgc3VjaCBhcyBhIG1vZGFsIGNsb3NlIGljb25cbmNvbnN0IE92ZXJsYXkgPSAoeyBvbkNsaWNrLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+XG4gICAge2NoaWxkcmVufVxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpY2thYmxlT3ZlcmxheX0gdGFiSW5kZXg9ey0xfSByb2xlPVwiYnV0dG9uXCIgb25DbGljaz17b25DbGlja30gLz5cbiAgPC9kaXY+XG4pO1xuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DbGljazogRnVuY3Rpb24ucHJvdG90eXBlLFxufTtcblxuT3ZlcmxheS5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE92ZXJsYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9vdmVybGF5L292ZXJsYXkuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJvdmVybGF5XCI6XCJDb21wb25lbnRzLXNoYXJlZC1vdmVybGF5LW92ZXJsYXlfX292ZXJsYXktLVY2RW5YXCIsXCJjbGlja2FibGVPdmVybGF5XCI6XCJDb21wb25lbnRzLXNoYXJlZC1vdmVybGF5LW92ZXJsYXlfX2NsaWNrYWJsZU92ZXJsYXktLWh4eXpXXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvb3ZlcmxheS9vdmVybGF5Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQ3Jvc3NJY29uID0gKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi5wcm9wc30geG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cbiAgICA8dGl0bGU+Q2xvc2U8L3RpdGxlPlxuICAgIDxwYXRoIGQ9XCJNMTMuOTU3IDMuNDU3bC0xLjQxNC0xLjQxNEw4IDYuNTg2IDMuNDU3IDIuMDQzIDIuMDQzIDMuNDU3IDYuNTg2IDhsLTQuNTQzIDQuNTQzIDEuNDE0IDEuNDE0TDggOS40MTRsNC41NDMgNC41NDMgMS40MTQtMS40MTRMOS40MTQgOHpcIiAvPlxuICA8L3N2Zz5cbik7XG5cbkNyb3NzSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cbkNyb3NzSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENyb3NzSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvaWNvbnMvY3Jvc3MuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLmxlc3MnO1xuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgc3R5bGVOYW1lLCBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPGJ1dHRvblxuICAgIHsuLi5wcm9wc31cbiAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoc3R5bGVzLmJ1dHRvbiwgc3R5bGVOYW1lICYmIHN0eWxlc1tzdHlsZU5hbWVdLCBjbGFzc05hbWUpfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHN0eWxlTmFtZTogbnVsbCxcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGVOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL2J1dHRvbi5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImJ1dHRvblwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLWJ1dHRvbl9fYnV0dG9uLS1tQmJvVVwiLFwicHJpbWFyeVwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLWJ1dHRvbl9fcHJpbWFyeS0tMXg3OERcIixcInNlY29uZGFyeVwiOlwiQ29tcG9uZW50cy1zaGFyZWQtYnV0dG9uLWJ1dHRvbl9fc2Vjb25kYXJ5LS1SNGZZVVwiLFwidGVydGlhcnlcIjpcIkNvbXBvbmVudHMtc2hhcmVkLWJ1dHRvbi1idXR0b25fX3RlcnRpYXJ5LS1RVkF2M1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2J1dHRvbi9idXR0b24ubGVzc1xuLy8gbW9kdWxlIGlkID0gNzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlY2FwdGNoYSBmcm9tICdyZWFjdC1yZWNhcHRjaGEnO1xuXG5pbXBvcnQgVmFsaWRhdGlvbkZpZWxkIGZyb20gJy4uL3NoYXJlZC92YWxpZGF0aW9uRmllbGQvdmFsaWRhdGlvbkZpZWxkJztcblxuY29uc3QgQ2FwdGNoYSA9ICh7XG4gIGlucHV0LFxuICBtZXRhOiB7IHRvdWNoZWQsIGVycm9yID0gW10gfSxcbn0pID0+IChcbiAgPFZhbGlkYXRpb25GaWVsZCB0b3VjaGVkPXt0b3VjaGVkfSBlcnJvcj17ZXJyb3J9PlxuICAgIDxSZWNhcHRjaGFcbiAgICAgIHZlcmlmeUNhbGxiYWNrPXtyZXNwb25zZSA9PiBpbnB1dC5vbkNoYW5nZShyZXNwb25zZSl9XG4gICAgICBzaXRla2V5PXtwcm9jZXNzLmVudi5SRUNBUFRDSEFfU0lURV9LRVl9XG4gICAgLz5cbiAgPC9WYWxpZGF0aW9uRmllbGQ+XG4pO1xuXG5DYXB0Y2hhLnByb3BUeXBlcyA9IHtcbiAgaW5wdXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG1ldGE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG91Y2hlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgXSksXG4gIH0pLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXB0Y2hhO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lbWFpbC9yZWNhcHRjaGEuanMiLCJpbXBvcnQgbm9XaGl0ZVNwYWNlIGZyb20gJy4uL3NoYXJlZC9ub1doaXRlU3BhY2UnO1xuXG5jb25zdCB2YWxpZGF0aW9uID0gKHZhbHVlcykgPT4ge1xuICBjb25zdCBlcnJvcnMgPSB7fTtcblxuICBpZiAoIXZhbHVlcy5yZWNhcHRjaGEpIHtcbiAgICBlcnJvcnMucmVjYXB0Y2hhID0gJ3JlQ0FQVENIQSBpcyByZXF1aXJlZCc7XG4gIH1cblxuICBpZiAoIXZhbHVlcy5lbWFpbCB8fCAhbm9XaGl0ZVNwYWNlKHZhbHVlcy5lbWFpbCkpIHtcbiAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgcmVxdWlyZWQnO1xuICB9IGVsc2UgaWYgKCEvXi4rQC4rJC9pLnRlc3QodmFsdWVzLmVtYWlsKSkge1xuICAgIGVycm9ycy5lbWFpbCA9ICdNdXN0IGJlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyc7XG4gIH1cblxuICByZXR1cm4gZXJyb3JzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZW1haWwvdmFsaWRhdGlvbi5qcyIsImV4cG9ydCBkZWZhdWx0IHZhbHVlID0+IHZhbHVlLnJlcGxhY2UoL15cXHMrJC8sICcnKS5sZW5ndGggPiAwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvbm9XaGl0ZVNwYWNlLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcbmltcG9ydCB7IGNyZWF0ZU11dGF0aW9uIH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IG11dGF0aW9uID0gZ3JhcGhxbGBcbiAgbXV0YXRpb24gc3Vic2NyaWJlTmV3c2xldHRlck11dGF0aW9uKFxuICAgICRpbnB1dDogU3Vic2NyaWJlTmV3c2xldHRlcklucHV0IVxuICApIHtcbiAgICBzdWJzY3JpYmVOZXdzbGV0dGVyKGlucHV0OiAkaW5wdXQpIHtcbiAgICAgIGNsaWVudE11dGF0aW9uSWRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGVtYWlsLCByZWNhcHRjaGEgfSkgPT4ge1xuICBjb25zdCB2YXJpYWJsZXMgPSB7XG4gICAgaW5wdXQ6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgcmVjYXB0Y2hhLFxuICAgIH0sXG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZU11dGF0aW9uKFxuICAgIG11dGF0aW9uLFxuICAgIHZhcmlhYmxlcyxcbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2VtYWlsL3N1YnNjcmliZU5ld3NsZXR0ZXJNdXRhdGlvbi5qcyIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgcG9wdXBzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0hPV19QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IFsuLi5zdGF0ZS5wb3B1cHMsIHtcbiAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogYWN0aW9uLm1pbGxpc2Vjb25kc1RvU2hvdyxcbiAgICAgIH1dO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnSElERV9QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IHN0YXRlLnBvcHVwcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5pbmRleCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmNvbnN0IGZpdG5lc3NQbGFuc0RlZmF1bHQgPSB7fTtcblxud2luZG93Ll9Db25zdGFudHMuZml0bmVzc1BsYW5zLmZvckVhY2goKHgpID0+IHtcbiAgZml0bmVzc1BsYW5zRGVmYXVsdFt4Lk5hbWVdID0ge1xuICAgIHBvaW50czogMCxcbiAgfTtcbn0pO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIGZpdG5lc3NQbGFuczogZml0bmVzc1BsYW5zRGVmYXVsdCxcbiAgcmFua2VkRml0bmVzc1BsYW5zOiBbXSxcbn07XG5cbi8qIGVzbGludC1lbmFibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdSQU5LX0ZJVE5FU1NfUExBTlMnOiB7XG4gICAgICBjb25zdCBmaXRuZXNzUGxhbnMgPSB7fTtcblxuICAgICAgYWN0aW9uLmZpdG5lc3NQbGFuc1BvaW50cy5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICAgIGNvbnN0IG1heE51bWJlciA9IE1hdGgubWF4KGFjdGlvbi5hbnN3ZXJQb2ludHMsIHgucG9pbnRzKTtcbiAgICAgICAgY29uc3QgbWluTnVtYmVyID0gTWF0aC5taW4oYWN0aW9uLmFuc3dlclBvaW50cywgeC5wb2ludHMpO1xuICAgICAgICBjb25zdCBkaWZmZXJlbmNlID0gbWF4TnVtYmVyIC0gbWluTnVtYmVyO1xuICAgICAgICBjb25zdCBuZXdQb2ludHMgPSBzdGF0ZS5maXRuZXNzUGxhbnNbeC5uYW1lXS5wb2ludHMgKyBkaWZmZXJlbmNlO1xuXG4gICAgICAgIGZpdG5lc3NQbGFuc1t4Lm5hbWVdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpdG5lc3NQbGFuc1t4Lm5hbWVdLFxuICAgICAgICAgIC4uLngsXG4gICAgICAgICAgcG9pbnRzOiBuZXdQb2ludHMsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcmFua2VkRml0bmVzc1BsYW5zID0gT2JqZWN0LmtleXMoZml0bmVzc1BsYW5zKS5tYXAoa2V5ID0+IGZpdG5lc3NQbGFuc1trZXldKTtcblxuICAgICAgcmFua2VkRml0bmVzc1BsYW5zLnNvcnQoKGEsIGIpID0+IGEucG9pbnRzIC0gYi5wb2ludHMpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmFua2VkRml0bmVzc1BsYW5zLFxuICAgICAgICBmaXRuZXNzUGxhbnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3VzZXIvcmVkdWNlci5qcyIsImV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfTU9EQUwnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi52YXJpYWJsZXMsXG4gICAgICAgIGN1cnJlbnRNb2RhbDogYWN0aW9uLmlkLFxuICAgICAgfTtcbiAgICBjYXNlICdISURFX01PREFMJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyZW50TW9kYWw6IG51bGwsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL21vZGFsL3JlZHVjZXIuanMiLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uLCB2YXJpYWJsZXMpID0+XG4gIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2FwcC9hcHAubGVzc1xuLy8gbW9kdWxlIGlkID0gODA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
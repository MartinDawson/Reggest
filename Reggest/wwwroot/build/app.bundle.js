webpackJsonp([0],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(652);

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

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(300);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(313);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(742);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(23);

var _foundRelay = __webpack_require__(329);

var _router = __webpack_require__(447);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(460);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(690);

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

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(138);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(143);

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

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(461);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(462);

var _foundReducer = __webpack_require__(156);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(66);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(157);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(272);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(273);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(158);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(159);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(640);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(689);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyEnhancer = (0, _createHistoryEnhancer2.default)({
  protocol: new _BrowserProtocol2.default(),
  middlewares: [_queryMiddleware2.default]
});

var matcherEnhancer = (0, _createMatchEnhancer2.default)(new _Matcher2.default(_routeConfig2.default));

var middleWare = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), historyEnhancer, matcherEnhancer);

var reducers = (0, _redux.combineReducers)({
  found: _foundReducer2.default,
  form: _reduxForm.reducer,
  popup: _reducer2.default
});

var store = (0, _redux.createStore)(reducers, {}, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(274);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(275);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(644);

var _termsAndConditionsContainer = __webpack_require__(650);

var _privacyPolicyContainer = __webpack_require__(653);

var _imprintContainer = __webpack_require__(655);

var _errorPageContainer = __webpack_require__(658);

var _primaryLayoutContainer = __webpack_require__(662);

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

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _fitness = __webpack_require__(645);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer
};

exports.default = FitnessContainer;

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _qAndA = __webpack_require__(646);

var _qAndA2 = _interopRequireDefault(_qAndA);

var _fitness = __webpack_require__(649);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var questionsAndAnswers = [{
  question: 'Are you looking for aesthetics or strength?',
  answers: ['aesthetics', 'strength', 'both']
}, {
  question: 'Are you okay with using barbells?',
  answers: ['yes', 'no']
}];

var Fitness = function Fitness() {
  return _react2.default.createElement(
    'div',
    { className: _fitness2.default.fitness },
    _react2.default.createElement(
      'div',
      null,
      questionsAndAnswers.map(function (questionAndAnswers) {
        return _react2.default.createElement(_qAndA2.default, _extends({ key: questionAndAnswers.question }, questionAndAnswers));
      })
    )
  );
};

exports.default = Fitness;

/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(647);

var _qAndA2 = _interopRequireDefault(_qAndA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QAndA = function QAndA(_ref) {
  var question = _ref.question,
      answers = _ref.answers;
  return _react2.default.createElement(
    'div',
    { className: _qAndA2.default.qAndA },
    _react2.default.createElement(
      'div',
      { className: _qAndA2.default.question },
      question
    ),
    _react2.default.createElement(
      'div',
      { className: _qAndA2.default.answers },
      answers.map(function (answer) {
        return _react2.default.createElement(
          'div',
          { className: _qAndA2.default.answerContainer },
          _react2.default.createElement(
            'button',
            { key: answer, className: _qAndA2.default.answer },
            answer
          )
        );
      })
    )
  );
};

QAndA.propTypes = {
  question: _propTypes2.default.string.isRequired,
  answers: _propTypes2.default.arrayOf(_propTypes2.default.string.isRequired).isRequired
};

exports.default = QAndA;

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d"};

/***/ }),

/***/ 650:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(651);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(160);

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
      '"You" and "your" refer to you, as a user of the Site. A "user" is someone who accesses,browses, crawls, scrapes, or in any way uses the Site. "We," "us," and "our" refer to Reggest. "Content" means text, images, photos, audio, video, location data, and all other forms of data or communication. "Your Content" means Content that you submit or transmit to, through, or in connection with the Site, such as ratings, reviews, compliments, invitations, check-ins, messages, and information that you publicly display or displayed in your account profile. "User Content" means Content that users submit or transmit to, through, or in connection with the Site. "Reggest Content" means Content that we create and make available in connection with the Site. "Third Party Content" means Content that originates from parties other than Reggest or its users, which is made available in connection with the Site. "Site Content" means all of the Content that is made available in connection with the Site, including Your Content, User Content, Third Party Content, and Reggest Content.'
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
          'The materials on the Reggest website are provided "as shown". Reggest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Reggest does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its internet website or otherwise relating to such materials or on any sites linked to this site.'
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
          'In no event shall Reggest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our internet site or offered services, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.'
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
          'The materials appearing on our website could include technical, typographical, or photographic errors. Reggest does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.'
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
          'Reggest has not reviewed all of the sites linked to its internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user"s own risk.'
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
          'Any claim relating to the Reggest website shall be governed by the laws of the country of note without regard to its conflict of law provisions.'
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
          'All materials on this site, whether separate or compiled, including, but not limited to, text, graphics, audio clips, logos, buttons, images, digital downloads, data compilations, software, icons, html code and xml code, as well as all copyright, patent, trademark, trade dress, and other rights therein, are owned or licensed by Reggest and its third-party information providers, and are protected by international intellectual property laws.'
        )
      )
    )
  );
};

exports.default = TermsAndConditions;

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(654);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(160);

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

/***/ 655:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(656);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 656:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(160);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(657);

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

/***/ 657:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(276);

var _errorPage = __webpack_require__(660);

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

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(661);

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

/***/ 661:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(663);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(664);

var _classnames2 = _interopRequireDefault(_classnames);

var _primaryLayout = __webpack_require__(665);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(666);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(677);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(685);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(687);

var _footer2 = _interopRequireDefault(_footer);

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
            children
          )
        ),
        _react2.default.createElement(_footer2.default, null),
        _react2.default.createElement(_cookieNoticeContainer2.default, null)
      );
    }
  );
};

PrimaryLayout.defaultProps = {
  children: null
};

PrimaryLayout.propTypes = {
  children: _propTypes2.default.node,
  loginProviders: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = PrimaryLayout;

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1"};

/***/ }),

/***/ 666:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(23);

var _cookieNotice = __webpack_require__(667);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

var _actions = __webpack_require__(668);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(null, { showPopup: _actions.showPopup })(_cookieNotice2.default);

/***/ }),

/***/ 667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

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

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(669);

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

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(276);

var _found = __webpack_require__(278);

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

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sizes = __webpack_require__(686);

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

/***/ 686:
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

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(278);

var _footer = __webpack_require__(688);

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

/***/ 688:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 689:
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

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(732);

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

/***/ 742:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[298]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9kaXNwbGF5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9zaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAubGVzcyJdLCJuYW1lcyI6WyJQYWdlQ29udGVudCIsImNoaWxkcmVuIiwicGFnZUNvbnRlbnQiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZXNvbHZlciIsIkFwcCIsInN0b3JlIiwiUmVuZGVyRXJyb3IiLCJlcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwibWlkZGxlV2FyZSIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJkaXNwYXRjaCIsImluaXQiLCJGaXRuZXNzQ29udGFpbmVyIiwicm91dGVDb25maWciLCJDb21wb25lbnQiLCJxdWVzdGlvbnNBbmRBbnN3ZXJzIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiRml0bmVzcyIsImZpdG5lc3MiLCJtYXAiLCJxdWVzdGlvbkFuZEFuc3dlcnMiLCJRQW5kQSIsInFBbmRBIiwiYW5zd2VyQ29udGFpbmVyIiwiYW5zd2VyIiwic3RyaW5nIiwiYXJyYXlPZiIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsIlRlcm1zQW5kQ29uZGl0aW9ucyIsIlByaXZhY3lQb2xpY3lDb250YWluZXIiLCJQcml2YWN5UG9saWN5IiwiSW1wcmludENvbnRhaW5lciIsIkltcHJpbnQiLCJpbXByaW50Q29udGVudCIsImNyZWF0ZVByb3BzIiwiZW5oYW5jZSIsIkVycm9yUGFnZUNvbnRhaW5lciIsInByb3BzIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInF1b3RhdGlvbiIsIlByaW1hcnlMYXlvdXRDb250YWluZXIiLCJQcmltYXJ5TGF5b3V0IiwiZGlzcGxheVR5cGUiLCJkaXNwbGF5VHlwZUNsYXNzTmFtZSIsImlzTW9iaWxlIiwiaXNUYWJsZXQiLCJpc0Rlc2t0b3AiLCJwcmltYXJ5TGF5b3V0Iiwid3JhcCIsIm1haW4iLCJsb2dpblByb3ZpZGVycyIsInNob3dQb3B1cCIsIkNvb2tpZU5vdGljZSIsImNvb2tpZU5vdGljZVNob3duIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJmdW5jIiwidGV4dCIsIm1pbGxpc2Vjb25kc1RvU2hvdyIsInR5cGUiLCJpZCIsImdlbmVyYXRlIiwiaGlkZVBvcHVwIiwiaW5kZXgiLCJzaG93R2VuZXJpY0Vycm9yUG9wdXAiLCJjb25zb2xlIiwiUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkiLCJjbGFzc05hbWUiLCJEaXNwbGF5VHlwZSIsImdldERpc3BsYXlUeXBlIiwid2luZG93V2lkdGgiLCJicmVha3BvaW50TW9iaWxlIiwidmFsdWUiLCJicmVha3BvaW50VGFibGV0IiwidXBkYXRlRGlzcGxheVR5cGUiLCJib2R5IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2l6ZXMiLCJ1bml0IiwiYnJlYWtwb2ludERlc2t0b3AiLCJGb290ZXIiLCJmb290ZXIiLCJkZWZhdWx0U3RhdGUiLCJwb3B1cHMiLCJyZWR1Y2VyIiwiYWN0aW9uIiwiZmlsdGVyIiwiXyIsImkiLCJmZXRjaFF1ZXJ5Iiwib3BlcmF0aW9uIiwidmFyaWFibGVzIiwiZmV0Y2giLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQSxtQkFBU00sTUFBVCxDQUFnQixrREFBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsV0FBVywrQ0FBakI7O0FBRUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBVSxzQkFBVjtBQUNFLHNEQUFRLGNBQWMsRUFBRUMsc0JBQUYsRUFBdEIsRUFBaUMsVUFBVUYsUUFBM0M7QUFERixHQURVO0FBQUEsQ0FBWjs7a0JBTWVDLEc7Ozs7Ozs7Ozs7Ozs7O0FDaEJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUUsY0FBYyxTQUFkQSxXQUFjLE9BQXVCO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFDekNBLFNBQU9DLE9BQVAsQ0FBZTtBQUNiQywwQkFBb0JILE1BQU1JLE1BRGI7QUFFYkMsV0FBTztBQUNMTCxhQUFPQSxNQUFNTTtBQURSO0FBRk0sR0FBZjtBQU1ELENBUEQ7O0FBU0FQLFlBQVlULFNB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c0JBLElBQU1LLFVBQVUsc0JBQVFDLE1BQVIsQ0FBZW5CLFVBQWYsQ0FBaEI7QUFDQSxJQUFNb0IsU0FBUyxnQ0FBZjtBQUNBLElBQU1ySSxRQUFRLHdCQUFVcUksTUFBVixDQUFkO0FBQ0EsSUFBTUMsY0FBYyw4QkFBZ0I7QUFDbENILGtCQURrQztBQUVsQ25JO0FBRmtDLENBQWhCLENBQXBCOztBQUtBLGlDQUFjc0ksV0FBZDs7a0JBRWVBLFc7Ozs7Ozs7QUN4Q2YseUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcGFnZUNvbnRlbnQubGVzcyc7XG5cbmNvbnN0IFBhZ2VDb250ZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VDb250ZW50fT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuUGFnZUNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBwcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG59KTtcblxuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihcbiAgbmV3IE1hdGNoZXIocm91dGVDb25maWcpLFxuKTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbiAgcG9wdXAsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgaW1wcmludFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IEZpdG5lc3M7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBGaXRuZXNzQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFFBbmRBIGZyb20gJy4uL3FBbmRBL3FBbmRBJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9maXRuZXNzLmxlc3MnO1xuXG5jb25zdCBxdWVzdGlvbnNBbmRBbnN3ZXJzID0gW1xuICB7XG4gICAgcXVlc3Rpb246ICdBcmUgeW91IGxvb2tpbmcgZm9yIGFlc3RoZXRpY3Mgb3Igc3RyZW5ndGg/JyxcbiAgICBhbnN3ZXJzOiBbXG4gICAgICAnYWVzdGhldGljcycsXG4gICAgICAnc3RyZW5ndGgnLFxuICAgICAgJ2JvdGgnLFxuICAgIF0sXG4gIH0sIHtcbiAgICBxdWVzdGlvbjogJ0FyZSB5b3Ugb2theSB3aXRoIHVzaW5nIGJhcmJlbGxzPycsXG4gICAgYW5zd2VyczogW1xuICAgICAgJ3llcycsXG4gICAgICAnbm8nLFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBGaXRuZXNzID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpdG5lc3N9PlxuICAgIDxkaXY+XG4gICAgICB7cXVlc3Rpb25zQW5kQW5zd2Vycy5tYXAocXVlc3Rpb25BbmRBbnN3ZXJzID0+XG4gICAgICAgIDxRQW5kQSBrZXk9e3F1ZXN0aW9uQW5kQW5zd2Vycy5xdWVzdGlvbn0gey4uLnF1ZXN0aW9uQW5kQW5zd2Vyc30gLz4pfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcUFuZEEubGVzcyc7XG5cbmNvbnN0IFFBbmRBID0gKHsgcXVlc3Rpb24sIGFuc3dlcnMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnFBbmRBfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnF1ZXN0aW9ufT57cXVlc3Rpb259PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hbnN3ZXJzfT5cbiAgICAgIHthbnN3ZXJzLm1hcChhbnN3ZXIgPT4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlckNvbnRhaW5lcn0+XG4gICAgICAgICAgPGJ1dHRvbiBrZXk9e2Fuc3dlcn0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT57YW5zd2VyfTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cblFBbmRBLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYW5zd2VyczogUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICApLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBRQW5kQTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJxdWVzdGlvblwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fcXVlc3Rpb24tLTIzVVRmXCIsXCJhbnN3ZXJDb250YWluZXJcIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX2Fuc3dlckNvbnRhaW5lci0tMUJYa1NcIixcImFuc3dlclwiOlwiQ29tcG9uZW50cy1xQW5kQS1xQW5kQV9fYW5zd2VyLS0ycjFRSFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzc1xuLy8gbW9kdWxlIGlkID0gNjQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZpdG5lc3NcIjpcIkNvbXBvbmVudHMtZml0bmVzcy1maXRuZXNzX19maXRuZXNzLS1SaTc3ZFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDY0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVGVybXNBbmRDb25kaXRpb25zIGZyb20gJy4vdGVybXNBbmRDb25kaXRpb25zJztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyID0gVGVybXNBbmRDb25kaXRpb25zO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9ucyA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgICZxdW90O1lvdSZxdW90OyBhbmQgJnF1b3Q7eW91ciZxdW90OyByZWZlciB0byB5b3UsIGFzIGEgdXNlciBvZiB0aGUgU2l0ZS5cbiAgICAgIEEgJnF1b3Q7dXNlciZxdW90OyBpcyBzb21lb25lIHdobyBhY2Nlc3Nlcyxicm93c2VzLCBjcmF3bHMsIHNjcmFwZXMsIG9yIGluIGFueVxuICAgICAgd2F5IHVzZXMgdGhlIFNpdGUuICZxdW90O1dlLCZxdW90OyAmcXVvdDt1cywmcXVvdDsgYW5kICZxdW90O291ciZxdW90OyByZWZlciB0byBSZWdnZXN0LlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtSZWdnZXN0IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0XG4gICAgICB3ZSBjcmVhdGUgYW5kIG1ha2UgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1RoaXJkIFBhcnR5IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBwYXJ0aWVzIG90aGVyXG4gICAgICB0aGFuIFJlZ2dlc3Qgb3IgaXRzIHVzZXJzLCB3aGljaCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtTaXRlIENvbnRlbnQmcXVvdDsgbWVhbnMgYWxsIG9mIHRoZSBDb250ZW50IHRoYXQgaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvblxuICAgICAgd2l0aCB0aGUgU2l0ZSwgaW5jbHVkaW5nIFlvdXIgQ29udGVudCwgVXNlciBDb250ZW50LCBUaGlyZCBQYXJ0eSBDb250ZW50LFxuICAgICAgYW5kIFJlZ2dlc3QgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgUmVnZ2VzdCB3ZWJzaXRlIGFyZSBwcm92aWRlZCAmcXVvdDthcyBzaG93biZxdW90Oy5cbiAgICAgICAgICBSZWdnZXN0IG1ha2VzIG5vIHdhcnJhbnRpZXMsIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBhbmQgaGVyZWJ5IGRpc2NsYWltc1xuICAgICAgICAgIGFuZCBuZWdhdGVzIGFsbCBvdGhlciB3YXJyYW50aWVzLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbXBsaWVkXG4gICAgICAgICAgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICAgICAgcHVycG9zZSwgb3Igbm9uLWluZnJpbmdlbWVudCBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3Igb3RoZXIgdmlvbGF0aW9uIG9mIHJpZ2h0cy5cbiAgICAgICAgICBGdXJ0aGVyLCBSZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIFJlZ2dlc3Qgb3IgaXRzIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIChpbmNsdWRpbmcsIHdpdGhvdXRcbiAgICAgICAgICBsaW1pdGF0aW9uLCBkYW1hZ2VzIGZvciBsb3NzIG9mIGRhdGEgb3IgcHJvZml0LCBvciBkdWUgdG8gYnVzaW5lc3MgaW50ZXJydXB0aW9uKVxuICAgICAgICAgIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciBpbnRlcm5ldCBzaXRlIG9yXG4gICAgICAgICAgb2ZmZXJlZCBzZXJ2aWNlcywgZXZlbiBpZiB3ZSBvciBhbiBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIGhhcyBiZWVuIG5vdGlmaWVkXG4gICAgICAgICAgb3JhbGx5IG9yIGluIHdyaXRpbmcgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlLiBCZWNhdXNlIHNvbWUganVyaXNkaWN0aW9uc1xuICAgICAgICAgIGRvIG5vdCBhbGxvdyBsaW1pdGF0aW9ucyBvbiBpbXBsaWVkIHdhcnJhbnRpZXMsIG9yIGxpbWl0YXRpb25zIG9mIGxpYWJpbGl0eSBmb3JcbiAgICAgICAgICBjb25zZXF1ZW50aWFsIG9yIGluY2lkZW50YWwgZGFtYWdlcywgdGhlc2UgbGltaXRhdGlvbnMgbWF5IG5vdCBhcHBseSB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5SZXZpc2lvbnMgYW5kIEVycm9yczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgYXBwZWFyaW5nIG9uIG91ciB3ZWJzaXRlIGNvdWxkIGluY2x1ZGUgdGVjaG5pY2FsLCB0eXBvZ3JhcGhpY2FsLFxuICAgICAgICAgIG9yIHBob3RvZ3JhcGhpYyBlcnJvcnMuIFJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCB0aGF0IGFueSBvZiB0aGUgbWF0ZXJpYWxzIG9uXG4gICAgICAgICAgaXRzIHdlYnNpdGUgYXJlIGFjY3VyYXRlLCBjb21wbGV0ZSwgb3IgY3VycmVudC4gV2UgbWF5IG1ha2UgY2hhbmdlcyB0byB0aGVcbiAgICAgICAgICBtYXRlcmlhbHMgY29udGFpbmVkIG9uIGl0cyB3ZWJzaXRlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSZWdnZXN0IGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgUmVnZ2VzdCB3ZWJzaXRlIHNoYWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzXG4gICAgICAgICAgb2YgdGhlIGNvdW50cnkgb2Ygbm90ZSB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5FbmdsaXNoIExhbmd1YWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gdGhlIGV2ZW50IG9mIGEgY29uZmxpY3QgYmV0d2VlbiB0aGVzZSBUZXJtcyBhbmQgYSBmb3JlaWduIGxhbmd1YWdlIHZlcnNpb25cbiAgICAgICAgICBvZiBvdXIgVGVybXMgb2YgVXNlLCB0aGUgRW5nbGlzaCBsYW5ndWFnZSB2ZXJzaW9uIG9mIHRoZXNlIFRlcm1zIGdvdmVybnMuXG4gICAgICAgICAgQWxsIGRpc3B1dGVzLCBjbGFpbXMgYW5kIGNhdXNlcyBvZiBhY3Rpb24gKGFuZCByZWxhdGVkIHByb2NlZWRpbmdzKSB3aWxsIGJlXG4gICAgICAgICAgY29tbXVuaWNhdGVkIGluIEVuZ2xpc2guXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Db3B5cmlnaHQgcG9saWN5LCBub3RpY2UgYW5kIGNsYWltIGluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIG1hdGVyaWFscyBvbiB0aGlzIHNpdGUsIHdoZXRoZXIgc2VwYXJhdGUgb3IgY29tcGlsZWQsIGluY2x1ZGluZyxcbiAgICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8sIHRleHQsIGdyYXBoaWNzLCBhdWRpbyBjbGlwcywgbG9nb3MsIGJ1dHRvbnMsIGltYWdlcyxcbiAgICAgICAgICBkaWdpdGFsIGRvd25sb2FkcywgZGF0YSBjb21waWxhdGlvbnMsIHNvZnR3YXJlLCBpY29ucywgaHRtbCBjb2RlIGFuZCB4bWwgY29kZSxcbiAgICAgICAgICBhcyB3ZWxsIGFzIGFsbCBjb3B5cmlnaHQsIHBhdGVudCwgdHJhZGVtYXJrLCB0cmFkZSBkcmVzcywgYW5kIG90aGVyIHJpZ2h0c1xuICAgICAgICAgIHRoZXJlaW4sIGFyZSBvd25lZCBvciBsaWNlbnNlZCBieSBSZWdnZXN0IGFuZCBpdHMgdGhpcmQtcGFydHkgaW5mb3JtYXRpb24gcHJvdmlkZXJzLFxuICAgICAgICAgIGFuZCBhcmUgcHJvdGVjdGVkIGJ5IGludGVybmF0aW9uYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IGxhd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBhZ2VDb250ZW50XCI6XCJDb21wb25lbnRzLXNoYXJlZC1wYWdlQ29udGVudF9fcGFnZUNvbnRlbnQtLXdwdXRXXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcml2YWN5UG9saWN5IGZyb20gJy4vcHJpdmFjeVBvbGljeSc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3lDb250YWluZXIgPSBQcml2YWN5UG9saWN5O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpdmFjeVBvbGljeUNvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaXZhY3lQb2xpY3lDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFByaXZhY3lQb2xpY3kgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+UHJpdmFjeSBQb2xpY3k8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBiZWVuIGNvbXBpbGVkIHRvIGJldHRlciBzZXJ2ZSB0aG9zZSB3aG8gYXJlIGNvbmNlcm5lZCB3aXRoIGhvdyB0aGVpclxuICAgICAgJmFwb3M7UGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24mYXBvczsgKFBJSSkgaXMgYmVpbmcgdXNlZCBvbmxpbmUuXG4gICAgICBQSUksIGFzIGRlc2NyaWJlZCBpbiBVUyBwcml2YWN5IGxhdyBhbmQgaW5mb3JtYXRpb24gc2VjdXJpdHksIGlzIGluZm9ybWF0aW9uIHRoYXQgY2FuIGJlIHVzZWRcbiAgICAgIG9uIGl0cyBvd24gb3Igd2l0aCBvdGhlciBpbmZvcm1hdGlvbiB0byBpZGVudGlmeSwgY29udGFjdCwgb3IgbG9jYXRlIGEgc2luZ2xlIHBlcnNvbiwgb3IgdG9cbiAgICAgIGlkZW50aWZ5IGFuIGluZGl2aWR1YWwgaW4gY29udGV4dC4gUGxlYXNlIHJlYWQgb3VyIHByaXZhY3kgcG9saWN5IGNhcmVmdWxseSB0byBnZXQgYSBjbGVhclxuICAgICAgdW5kZXJzdGFuZGluZyBvZiBob3cgd2UgY29sbGVjdCwgdXNlLCBwcm90ZWN0IG9yIG90aGVyd2lzZSBoYW5kbGVcbiAgICAgIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gaW4gYWNjb3JkYW5jZSB3aXRoIG91ciB3ZWJzaXRlLlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5XaGF0IHBlcnNvbmFsIGluZm9ybWF0aW9uIGRvIHdlIGNvbGxlY3Q/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiByZWdpc3RlcmluZyBmb3Igb3VyIG5ld3NsZXR0ZXIsIHlvdSB3aWxsIGJlIGFza2VkIHRvIGVudGVyIHlvdXIgZW1haWwgYWRkcmVzcy5cbiAgICAgICAgICBUaGlzIGlzIHRvIGhlbHAgdXMgaW5kZW50aWZ5IHlvdSBhbmQga2VlcCB5b3UgdXBkYXRlZC4gV2Ugd2lsbCBub3Qgc2VuZCB5b3UgYW55IGVtYWlscyB0aGF0IHlvdVxuICAgICAgICAgIGRvIG5vdCByZXF1ZXN0LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hlbiBkbyB3ZSBjb2xsZWN0IGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGNvbGxlY3QgY2VydGFpbiBpbmZvcm1hdGlvbiBmcm9tIHlvdSB3aGVuIHlvdSByZWdpc3RlciBmb3Igb3VyIG5ld3NsZXR0ZXIuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Ib3cgZG8gd2UgcHJvdGVjdCB5b3VyIGluZm9ybWF0aW9uPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCB1c2UgdnVsbmVyYWJpbGl0eSBzY2FubmluZyBhbmQvb3Igc2Nhbm5pbmcgdG8gUENJIHN0YW5kYXJkcy5cbiAgICAgICAgICBXZSBuZXZlciBhc2sgZm9yIGNyZWRpdCBjYXJkIG51bWJlcnMuIFdlIHVzZSByZWd1bGFyIE1hbHdhcmUgU2Nhbm5pbmcuXG4gICAgICAgICAgWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBjb250YWluZWQgYmVoaW5kIHNlY3VyZWQgbmV0d29ya3MgYW5kIGlzIG9ubHkgYWNjZXNzaWJsZVxuICAgICAgICAgIGJ5IGEgbGltaXRlZCBudW1iZXIgb2YgcGVyc29ucyB3aG8gaGF2ZSBzcGVjaWFsIGFjY2VzcyByaWdodHMgdG8gc3VjaCBzeXN0ZW1zLCBhbmQgYXJlXG4gICAgICAgICAgcmVxdWlyZWQgdG8ga2VlcCB0aGUgaW5mb3JtYXRpb24gY29uZmlkZW50aWFsLiBJbiBhZGRpdGlvbiwgYWxsIHNlbnNpdGl2ZSBpbmZvcm1hdGlvblxuICAgICAgICAgIHlvdSBzdXBwbHkgaXMgZW5jcnlwdGVkIHZpYSBTZWN1cmUgU29ja2V0IExheWVyIChTU0wpIHRlY2hub2xvZ3kuXG4gICAgICAgICAgV2UgaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBzZWN1cml0eSBtZWFzdXJlcyB3aGVuIGEgdXNlciBlbnRlcnMsIHN1Ym1pdHMsIG9yIGFjY2Vzc2VzIHRoZWlyXG4gICAgICAgICAgaW5mb3JtYXRpb24gdG8gbWFpbnRhaW4gdGhlIHNhZmV0eSBvZiB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG8gd2UgdXNlICZhcG9zO2Nvb2tpZXMmYXBvczs/PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgWWVzLiBDb29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGEgc2l0ZSBvciBpdHMgc2VydmljZSBwcm92aWRlciB0cmFuc2ZlcnMgdG8geW91clxuICAgICAgICAgIGNvbXB1dGVyJmFwb3M7cyBoYXJkIGRyaXZlIHRocm91Z2ggeW91ciBXZWIgYnJvd3NlciB0aGF0IGVuYWJsZXMgdGhlXG4gICAgICAgICAgc2l0ZSZhcG9zO3Mgb3Igc2VydmljZSBwcm92aWRlciZhcG9zO3Mgc3lzdGVtcyB0byByZWNvZ25pemUgeW91ciBicm93c2VyIGFuZCBjYXB0dXJlXG4gICAgICAgICAgYW5kIHJlbWVtYmVyIGNlcnRhaW4gaW5mb3JtYXRpb24uIFRoZXkgYXJlIHVzZWQgdG8gaGVscCB1cyB1bmRlcnN0YW5kIHlvdXIgcHJlZmVyZW5jZXNcbiAgICAgICAgICBiYXNlZCBvbiBwcmV2aW91cyBvciBjdXJyZW50IHNpdGUgYWN0aXZpdHksIHdoaWNoIGVuYWJsZXMgdXMgdG8gcHJvdmlkZVxuICAgICAgICAgIHlvdSB3aXRoIGltcHJvdmVkIHNlcnZpY2VzLiBXZSBhbHNvIHVzZSBjb29raWVzIHRvIGhlbHAgdXMgY29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dFxuICAgICAgICAgIHNpdGUgdHJhZmZpYyBhbmQgc2l0ZSBpbnRlcmFjdGlvbiBzbyB0aGF0IHdlIGNhbiBvZmZlciBiZXR0ZXIgc2l0ZVxuICAgICAgICAgIGV4cGVyaWVuY2VzIGFuZCB0b29scyBpbiB0aGUgZnV0dXJlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2UgdXNlIGNvb2tpZXMgdG86PC9oMj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5VbmRlcnN0YW5kIGFuZCBzYXZlIHVzZXImYXBvcztzIHByZWZlcmVuY2VzIGZvciBmdXR1cmUgdmlzaXRzLjwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgQ29tcGlsZSBhZ2dyZWdhdGUgZGF0YSBhYm91dCBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb25zXG4gICAgICAgICAgICBpbiBvcmRlciB0byBvZmZlciBiZXR0ZXIgc2l0ZSBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIFdlIG1heSBhbHNvIHVzZSB0cnVzdGVkIHRoaXJkLXBhcnR5IHNlcnZpY2VzIHRoYXQgdHJhY2sgdGhpc1xuICAgICAgICAgICAgaW5mb3JtYXRpb24gb24gb3VyIGJlaGFsZlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENvb2tpZXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIG91ciB3ZWJzaXRlIGFuZCB0aGUgd2Vic2l0ZSB3aWxsIG5vdCB3b3JrXG4gICAgICAgICAgd2l0aG91dCBoYXZpbmcgdGhlbSBlbmFibGVkLiBCeSB1c2luZyBvdXIgc2l0ZSB5b3UgYWxsb3cgdXMgdG8gdXNlIGNvb2tpZXMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBkaXNjbG9zdXJlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2UgZG8gbm90IHNlbGwsIHRyYWRlLCBvciBvdGhlcndpc2UgdHJhbnNmZXIgdG8gb3V0c2lkZVxuICAgICAgICAgIHBhcnRpZXMgeW91ciBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRoaXJkLXBhcnR5IGxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlcmUgbWF5IGJlIHRoaXJkLXBhcnR5IGxpbmtzIHRvIHJhZGlvIHN0YXRpb24gd2Vic2l0ZXMgdGhyb3VnaG91dCBvdXJcbiAgICAgICAgICB3ZWJzaXRlLiBUaGVzZSB0aGlyZC1wYXJ0eSBzaXRlcyBoYXZlIHNlcGFyYXRlIGFuZCBpbmRlcGVuZGVudCBwcml2YWN5IHBvbGljaWVzLlxuICAgICAgICAgIFdlIHRoZXJlZm9yZSBoYXZlIG5vIHJlc3BvbnNpYmlsaXR5IG9yIGxpYWJpbGl0eSBmb3IgdGhlIGNvbnRlbnQgYW5kXG4gICAgICAgICAgYWN0aXZpdGllcyBvZiB0aGVzZSBsaW5rZWQgc2l0ZXMuIE5vbmV0aGVsZXNzLCB3ZSBzZWVrIHRvIHByb3RlY3RcbiAgICAgICAgICB0aGUgaW50ZWdyaXR5IG9mIG91ciBzaXRlIGFuZCB3ZWxjb21lIGFueSBmZWVkYmFjayBhYm91dCB0aGVzZSBzaXRlcy5cbiAgICAgICAgICBBbnkgbGluayBvbiBvdXIgc2l0ZSB0byBhIHRoaXJkIHBhcnQgd2Vic2l0ZSB0aGF0IGlzIG5vdCByZWxldmFudFxuICAgICAgICAgIG9yIGlmIHdlIGRlZW0gaXQgaW5hcHByb3ByaWF0ZSwgbWF5IGJlIHJlbW92ZWQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb29nbGU8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBHb29nbGUmYXBvcztzIGFkdmVydGlzaW5nIHJlcXVpcmVtZW50cyBjYW4gYmUgc3VtbWVkIHVwIGJ5XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBBZHZlcnRpc2luZyBQcmluY2lwbGVzLiBUaGV5IGFyZSBwdXQgaW4gcGxhY2UgdG9cbiAgICAgICAgICBwcm92aWRlIGEgcG9zaXRpdmUgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIGh0dHBzOi8vc3VwcG9ydC5nb29nbGUuY29tL2Fkd29yZHNwb2xpY3kvYW5zd2VyLzEzMTY1NDg/aGw9ZW5cblxuICAgICAgICAgIFdlIGhhdmUgbm90IGVuYWJsZWQgR29vZ2xlIEFkU2Vuc2Ugb24gb3VyIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DYWxpZm9ybmlhIE9ubGluZSBQcml2YWN5IFByb3RlY3Rpb24gQWN0PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQ2FsT1BQQSBpcyB0aGUgZmlyc3Qgc3RhdGUgbGF3IGluIHRoZSBuYXRpb24gdG8gcmVxdWlyZSBjb21tZXJjaWFsXG4gICAgICAgICAgd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyB0byBwb3N0IGEgcHJpdmFjeSBwb2xpY3kuXG4gICAgICAgICAgVGhlIGxhdyZhcG9zO3MgcmVhY2ggc3RyZXRjaGVzIHdlbGwgYmV5b25kIENhbGlmb3JuaWEgdG8gcmVxdWlyZSBhbnkgcGVyc29uIG9yIGNvbXBhbnlcbiAgICAgICAgICBpbiB0aGUgVW5pdGVkIFN0YXRlcyAoYW5kIGNvbmNlaXZhYmx5IHRoZSB3b3JsZCkgdGhhdCBvcGVyYXRlcyB3ZWJzaXRlcyBjb2xsZWN0aW5nXG4gICAgICAgICAgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24gZnJvbSBDYWxpZm9ybmlhIGNvbnN1bWVycyB0byBwb3N0IGEgY29uc3BpY3VvdXNcbiAgICAgICAgICBwcml2YWN5IHBvbGljeSBvbiBpdHMgd2Vic2l0ZSBzdGF0aW5nIGV4YWN0bHkgdGhlIGluZm9ybWF0aW9uIGJlaW5nIGNvbGxlY3RlZCBhbmRcbiAgICAgICAgICB0aG9zZSBpbmRpdmlkdWFscyBvciBjb21wYW5pZXMgd2l0aCB3aG9tIGl0IGlzIGJlaW5nIHNoYXJlZC4gLSBTZWUgbW9yZSBhdDpcbiAgICAgICAgICBodHRwOi8vY29uc3VtZXJjYWwub3JnL2NhbGlmb3JuaWEtb25saW5lLXByaXZhY3ktcHJvdGVjdGlvbi1hY3QtY2Fsb3BwYS8jc3RoYXNoLjBGZFJiVDUxLmRwdWZcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkFjY29yZGluZyB0byBDYWxPUFBBLCB3ZSBhZ3JlZSB0byB0aGUgZm9sbG93aW5nOjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFVzZXJzIGNhbiB2aXNpdCBvdXIgc2l0ZSBhbm9ueW1vdXNseS5cbiAgICAgICAgICBUaGlzIHByaXZhY3kgcG9saWN5IGhhcyBhIGxpbmsgdG8gaXQgZnJvbSBvdXIgaG9tZSBwYWdlIGluIHRoZSBoZWFkZXIuXG4gICAgICAgICAgT3VyIFByaXZhY3kgUG9saWN5IGxpbmsgaW5jbHVkZXMgdGhlIHdvcmQgJmFwb3M7UHJpdmFjeSZhcG9zOyBhbmQgY2FuIGVhc2lseVxuICAgICAgICAgIGJlIGZvdW5kIG9uIHRoZSBwYWdlIHNwZWNpZmllZCBhYm92ZS5cblxuICAgICAgICAgIFlvdSB3aWxsIGJlIG5vdGlmaWVkIG9mIGFueSBQcml2YWN5IFBvbGljeSBjaGFuZ2VzOlxuICAgICAgICAgICAgICAgIOKAoiBPbiBvdXIgUHJpdmFjeSBQb2xpY3kgUGFnZVxuICAgICAgICAgIENhbiBjaGFuZ2UgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbjpcbiAgICAgICAgICAgICAgICDigKIgVGhyb3VnaCBvdXIgd2Vic2l0ZVxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RG9lcyBvdXIgc2l0ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nPzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEl0JmFwb3M7cyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdlIGFsbG93IHRoaXJkLXBhcnR5IGJlaGF2aW9yYWwgdHJhY2tpbmdcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNPUFBBIChDaGlsZHJlbiBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdCk8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXaGVuIGl0IGNvbWVzIHRvIHRoZSBjb2xsZWN0aW9uIG9mIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gY2hpbGRyZW5cbiAgICAgICAgICB1bmRlciB0aGUgYWdlIG9mIDEzIHllYXJzIG9sZCwgdGhlIENoaWxkcmVuJmFwb3M7cyBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uXG4gICAgICAgICAgQWN0IChDT1BQQSkgcHV0cyBwYXJlbnRzIGluIGNvbnRyb2wuIFRoZSBGZWRlcmFsIFRyYWRlIENvbW1pc3Npb24sIFVuaXRlZCBTdGF0ZXMmYXBvcztcbiAgICAgICAgICBjb25zdW1lciBwcm90ZWN0aW9uIGFnZW5jeSwgZW5mb3JjZXMgdGhlIENPUFBBIFJ1bGUsIHdoaWNoIHNwZWxscyBvdXQgd2hhdFxuICAgICAgICAgIG9wZXJhdG9ycyBvZiB3ZWJzaXRlcyBhbmQgb25saW5lIHNlcnZpY2VzIG11c3QgZG8gdG8gcHJvdGVjdCBjaGlsZHJlbiZhcG9zO3NcbiAgICAgICAgICBwcml2YWN5IGFuZCBzYWZldHkgb25saW5lLlxuXG4gICAgICAgICAgV2UgZG8gbm90IHNwZWNpZmljYWxseSBtYXJrZXQgdG8gY2hpbGRyZW4gdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5GYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyBQcmluY2lwbGVzIGZvcm0gdGhlIGJhY2tib25lIG9mIHByaXZhY3lcbiAgICAgICAgICBsYXcgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgYW5kIHRoZSBjb25jZXB0cyB0aGV5IGluY2x1ZGUgaGF2ZSBwbGF5ZWQgYSBzaWduaWZpY2FudFxuICAgICAgICAgIHJvbGUgaW4gdGhlIGRldmVsb3BtZW50IG9mIGRhdGEgcHJvdGVjdGlvbiBsYXdzIGFyb3VuZCB0aGUgZ2xvYmUuIFVuZGVyc3RhbmRpbmdcbiAgICAgICAgICB0aGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZSBQcmluY2lwbGVzIGFuZCBob3cgdGhleSBzaG91bGQgYmUgaW1wbGVtZW50ZWQgaXNcbiAgICAgICAgICBjcml0aWNhbCB0byBjb21wbHkgd2l0aCB0aGUgdmFyaW91cyBwcml2YWN5IGxhd3MgdGhhdCBwcm90ZWN0IHBlcnNvbmFsIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgSW4gb3JkZXIgdG8gYmUgaW4gbGluZSB3aXRoIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2VzIHdlIHdpbGwgdGFrZSB0aGVcbiAgICAgICAgICBmb2xsb3dpbmcgcmVzcG9uc2l2ZSBhY3Rpb24sIHNob3VsZCBhIGRhdGEgYnJlYWNoIG9jY3VyOlxuXG4gICAgICAgICAgV2Ugd2lsbCBub3RpZnkgeW91IHZpYSBlbWFpbCB3aXRoaW4gNyBidXNpbmVzcyBkYXlzLiBXZSB3aWxsIGFsc29cbiAgICAgICAgICBub3RpZnkgdXNlcnMgdmlhIGFuIGluLXNpdGUgbm90aWZpY2F0aW9uIG9uIHRoZSBob21lIHBhZ2Ugd2l0aGluIDcgYnVzaW5lc3MgZGF5cy5cblxuICAgICAgICAgIFdlIGFsc28gYWdyZWUgdG8gdGhlIEluZGl2aWR1YWwgUmVkcmVzcyBQcmluY2lwbGUgd2hpY2ggcmVxdWlyZXMgdGhhdCBpbmRpdmlkdWFsc1xuICAgICAgICAgIGhhdmUgdGhlIHJpZ2h0IHRvIGxlZ2FsbHkgcHVyc3VlIGVuZm9yY2VhYmxlIHJpZ2h0cyBhZ2FpbnN0IGRhdGEgY29sbGVjdG9yc1xuICAgICAgICAgIGFuZCBwcm9jZXNzb3JzIHdobyBmYWlsIHRvIGFkaGVyZSB0byB0aGUgbGF3LiBUaGlzIHByaW5jaXBsZSByZXF1aXJlcyBub3Qgb25seVxuICAgICAgICAgIHRoYXQgaW5kaXZpZHVhbHMgaGF2ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIHVzZXJzLCBidXQgYWxzbyB0aGF0XG4gICAgICAgICAgaW5kaXZpZHVhbHMgaGF2ZSByZWNvdXJzZSB0byBjb3VydHMgb3IgZ292ZXJubWVudCBhZ2VuY2llcyB0byBpbnZlc3RpZ2F0ZVxuICAgICAgICAgIGFuZC9vciBwcm9zZWN1dGUgbm9uLWNvbXBsaWFuY2UgYnkgZGF0YSBwcm9jZXNzb3JzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1wcmludC5sZXNzJztcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wcmludENvbnRlbnR9PlxuICAgICAgPGgxPkltcHJpbnQ8L2gxPlxuICAgICAgPGRpdj5Db21wYW55IE5hbWU6IFZBU1QgTkVUV09SSyBMVEQ8L2Rpdj5cbiAgICAgIDxkaXY+TWFuYWdpbmcgRGlyZWN0b3I6IE1hcnRpbiBEYXdzb248L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzczogMjYgQ2FsZGVyVmlldywgUmFzdHJpY2ssIEJyaWdob3VzZSwgSEQ2M0RRIFVuaXRlZCBLaW5nZG9tPC9kaXY+XG4gICAgICA8ZGl2PlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsIGFkZHJlc3M6IGluZm9AcmVnZ2VzdC5jb208L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiaW1wcmludENvbnRlbnRcIjpcIkNvbXBvbmVudHMtZm9vdGVyLWltcHJpbnRfX2ltcHJpbnRDb250ZW50LS0xNXJMTVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Vycm9yUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb3BzID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogJ1RoZSBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC4nIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoY3JlYXRlUHJvcHMpLFxuKTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gZW5oYW5jZShFcnJvclBhZ2UpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocHJvcHMucGFyYW1zLnN0YXR1cywgMTApfVxuICAgICAgZXJyb3I9e3Byb3BzLmxvY2F0aW9uLnN0YXRlLmVycm9yfVxuICAgIC8+XG4gICksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yUGFnZS5sZXNzJztcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfT5cbiAgICA8aDE+RXJyb3Ige3N0YXR1c308L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkVycm9yUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC4nLFxufTtcblxuRXJyb3JQYWdlLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBxdW90YXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yUGFnZVwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclBhZ2UtLTFhUy16XCIsXCJlcnJvclwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvci0tNjJLWkNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcmltYXJ5TGF5b3V0IGZyb20gJy4vcHJpbWFyeUxheW91dCc7XG5cbmNvbnN0IFByaW1hcnlMYXlvdXRDb250YWluZXIgPSBQcmltYXJ5TGF5b3V0O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogUHJpbWFyeUxheW91dENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ByaW1hcnlMYXlvdXQubGVzcyc7XG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4uLy4uL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXInO1xuaW1wb3J0IFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGZyb20gJy4vcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnknO1xuaW1wb3J0IERpc3BsYXlUeXBlIGZyb20gJy4uLy4uL3NoYXJlZC9kaXNwbGF5VHlwZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2Zvb3Rlci9mb290ZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxEaXNwbGF5VHlwZT5cbiAgICB7KGRpc3BsYXlUeXBlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5VHlwZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzTW9iaWxlICYmICdtb2JpbGUnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc1RhYmxldCAmJiAndGFibGV0JyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNEZXNrdG9wICYmICdkZXNrdG9wJyxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhkaXNwbGF5VHlwZUNsYXNzTmFtZSwgc3R5bGVzLnByaW1hcnlMYXlvdXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8Q29va2llTm90aWNlIC8+XG4gICAgICAgIDwvUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnk+XG4gICAgICApO1xuICAgIH19XG4gIDwvRGlzcGxheVR5cGU+XG4pO1xuXG5QcmltYXJ5TGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG59O1xuXG5QcmltYXJ5TGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsb2dpblByb3ZpZGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dC0tM0ZWamJcIixcIndyYXBcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3dyYXAtLTNPdjM4XCIsXCJtYWluXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19tYWluLS0xRzZhMVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXQubGVzc1xuLy8gbW9kdWxlIGlkID0gNjY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi9jb29raWVOb3RpY2UnO1xuaW1wb3J0IHsgc2hvd1BvcHVwIH0gZnJvbSAnLi4vc2hhcmVkL3BvcHVwL2FjdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgc2hvd1BvcHVwIH0pKENvb2tpZU5vdGljZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgQ29va2llTm90aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY29va2llTm90aWNlU2hvd24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nKTtcblxuICAgIGlmICghY29va2llTm90aWNlU2hvd24pIHtcbiAgICAgIHRoaXMucHJvcHMuc2hvd1BvcHVwKCdUaGlzIHdlYnNpdGUgdXNlcyBjb29raWVzIHRvIGdpdmUgeW91IHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZSwgYnkgY29udGludWluZyB0byB1c2UgdGhlIHNpdGUgeW91IGFyZSBhZ3JlZWluZyB0byBvdXIgdXNlIG9mIGNvb2tpZXMuJywgMTUwMDApO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29va2llTm90aWNlU2hvd24nLCB0cnVlKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkNvb2tpZU5vdGljZS5wcm9wVHlwZXMgPSB7XG4gIHNob3dQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvb2tpZU5vdGljZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5qcyIsImltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFRoZSB0ZXh0IHRvIHNob3cgaW4gdGhlIHBvcHVwXG4gKiBAcGFyYW0ge251bWJlcn0gW21pbGxpc2Vjb25kc1RvU2hvdz02MDAwXSAtIFRoZSBhbW91bnQgb2YgdGltZSBpbiBtaWxsaXNlY29uZHMgdG8gc2hvdyB0aGUgcG9wdXBcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dQb3B1cCA9ICh0ZXh0LCBtaWxsaXNlY29uZHNUb1Nob3cgPSA2MDAwKSA9PiAoe1xuICB0eXBlOiAnU0hPV19QT1BVUCcsXG4gIHRleHQsXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXG4gIG1pbGxpc2Vjb25kc1RvU2hvdyxcbn0pO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaW5kZXggb2YgdGhlIHBvcHVwIHRvIGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IGhpZGVQb3B1cCA9IGluZGV4ID0+ICh7XG4gIHR5cGU6ICdISURFX1BPUFVQJyxcbiAgaW5kZXgsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNob3dHZW5lcmljRXJyb3JQb3B1cCA9IChlcnJvcikgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gc2hvd1BvcHVwKCdBbiBlcnJvciBoYXMgb2NjdXJyZWQuIFBsZWFzZSB0cnkgcmVmcmVzaGluZyB0aGUgcGFnZS4nKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVjb21wb3NlJztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdmb3VuZCc7XG5cbmNsYXNzIFByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgLy8gdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Vycm9yLzUwMCcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBudWxsLFxufVxuXG5QcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5wcm9wVHlwZXMgPSB7XG4gIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcbiAgd2l0aFJvdXRlcixcbikoUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHNpemVzIGZyb20gJy4vc2l6ZXMnO1xuXG5jbGFzcyBEaXNwbGF5VHlwZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGRpc3BsYXlUeXBlOiAnZGVza3RvcCcsXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICAgIHRoaXMudXBkYXRlRGlzcGxheVR5cGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZURpc3BsYXlUeXBlKTtcbiAgfVxuXG4gIGdldERpc3BsYXlUeXBlID0gKHdpbmRvd1dpZHRoKSA9PiB7XG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludE1vYmlsZS52YWx1ZSkge1xuICAgICAgcmV0dXJuICdtb2JpbGUnO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3dXaWR0aCA8IHNpemVzLmJyZWFrcG9pbnRUYWJsZXQudmFsdWUpIHtcbiAgICAgIHJldHVybiAndGFibGV0JztcbiAgICB9XG5cbiAgICByZXR1cm4gJ2Rlc2t0b3AnO1xuICB9XG5cbiAgdXBkYXRlRGlzcGxheVR5cGUgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGRpc3BsYXlUeXBlID0gdGhpcy5nZXREaXNwbGF5VHlwZSh3aW5kb3dXaWR0aCk7XG5cbiAgICBpZiAoZGlzcGxheVR5cGUgIT09IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5VHlwZSB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB7XG4gICAgICBpc01vYmlsZTogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ21vYmlsZScsXG4gICAgICBpc1RhYmxldDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ3RhYmxldCcsXG4gICAgICBpc0Rlc2t0b3A6IHRoaXMuc3RhdGUuZGlzcGxheVR5cGUgPT09ICdkZXNrdG9wJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oZGlzcGxheVR5cGUpO1xuICB9XG59XG5cbkRpc3BsYXlUeXBlLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5VHlwZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL2Rpc3BsYXlUeXBlLmpzIiwiY29uc3Qgc2l6ZXMgPSB7XG4gIGJyZWFrcG9pbnRNb2JpbGU6IHsgdmFsdWU6IDc2OCwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50VGFibGV0OiB7IHZhbHVlOiA5OTIsIHVuaXQ6ICdweCcgfSxcbiAgYnJlYWtwb2ludERlc2t0b3A6IHsgdmFsdWU6IDEyMDAsIHVuaXQ6ICdweCcgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpemVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvc2l6ZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2ZvdW5kJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5sZXNzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgPExpbmsgdG89XCIvdGVybXNBbmRDb25kaXRpb25zXCI+dGVybXMgYW5kIGNvbmRpdGlvbnM8L0xpbms+XG4gICAgPExpbmsgdG89XCIvcHJpdmFjeVBvbGljeVwiPnByaXZhY3kgcG9saWN5PC9MaW5rPlxuICAgIDxMaW5rIHRvPVwiL2ltcHJpbnRcIj5pbXByaW50PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImZvb3RlclwiOlwiQ29tcG9uZW50cy1mb290ZXItZm9vdGVyX19mb290ZXItLTNTMW40XCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDY4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHBvcHVwczogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBbLi4uc3RhdGUucG9wdXBzLCB7XG4gICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c6IGFjdGlvbi5taWxsaXNlY29uZHNUb1Nob3csXG4gICAgICB9XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ0hJREVfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBzdGF0ZS5wb3B1cHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBhY3Rpb24uaW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
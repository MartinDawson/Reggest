webpackJsonp([0],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(703);

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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showGenericErrorPopup = exports.hidePopup = exports.showPopup = undefined;

var _shortid = __webpack_require__(726);

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

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(302);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(315);

var _app2 = _interopRequireDefault(_app);

__webpack_require__(747);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _foundRelay = __webpack_require__(331);

var _router = __webpack_require__(449);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(462);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(745);

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

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(3);

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

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(463);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(464);

var _foundReducer = __webpack_require__(156);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(66);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(157);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(273);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(274);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(158);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(159);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(642);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(744);

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

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(275);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(276);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(646);

var _termsAndConditionsContainer = __webpack_require__(701);

var _privacyPolicyContainer = __webpack_require__(704);

var _imprintContainer = __webpack_require__(706);

var _errorPageContainer = __webpack_require__(709);

var _primaryLayoutContainer = __webpack_require__(713);

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

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _reactRelay = __webpack_require__(277);

var _fitness = __webpack_require__(696);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var query = function query() {
  var node = __webpack_require__(760);

  if (node.hash && node.hash !== '35493b6b4248c5ffebe51c6d14b034ba') {
    console.error('The definition of \'fitnessContainerQuery\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
  }

  return __webpack_require__(760);
};

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer,
  query: query
};

exports.default = FitnessContainer;

/***/ }),

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndAContainer = __webpack_require__(762);

var _qAndAContainer2 = _interopRequireDefault(_qAndAContainer);

var _fitness = __webpack_require__(700);

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

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _qAndA = __webpack_require__(698);

var _qAndA2 = _interopRequireDefault(_qAndA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QAndA = function QAndA(_ref) {
  var questionText = _ref.questionText,
      answers = _ref.answers;
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
          { key: answer.answerText, className: _qAndA2.default.answerContainer },
          _react2.default.createElement(
            'button',
            { className: _qAndA2.default.answer },
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
    answerText: _propTypes2.default.string.isRequired
  }).isRequired).isRequired
};

exports.default = QAndA;

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"question":"Components-qAndA-qAndA__question--23UTf","answerContainer":"Components-qAndA-qAndA__answerContainer--1BXkS","answer":"Components-qAndA-qAndA__answer--2r1QH"};

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"fitness":"Components-fitness-fitness__fitness--Ri77d"};

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(702);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(172);

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

/***/ 703:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(705);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(172);

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

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(707);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(172);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(708);

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

/***/ 708:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-footer-imprint__imprintContent--15rLM"};

/***/ }),

/***/ 709:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(289);

var _errorPage = __webpack_require__(711);

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

/***/ 711:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(712);

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

/***/ 712:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _primaryLayout = __webpack_require__(714);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryLayoutContainer = _primaryLayout2.default;

var routeConfig = exports.routeConfig = {
  Component: PrimaryLayoutContainer
};

exports.default = PrimaryLayoutContainer;

/***/ }),

/***/ 714:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(715);

var _classnames2 = _interopRequireDefault(_classnames);

var _found = __webpack_require__(173);

var _primaryLayout = __webpack_require__(723);

var _primaryLayout2 = _interopRequireDefault(_primaryLayout);

var _cookieNoticeContainer = __webpack_require__(724);

var _cookieNoticeContainer2 = _interopRequireDefault(_cookieNoticeContainer);

var _primaryLayoutErrorBoundary = __webpack_require__(734);

var _primaryLayoutErrorBoundary2 = _interopRequireDefault(_primaryLayoutErrorBoundary);

var _displayType = __webpack_require__(735);

var _displayType2 = _interopRequireDefault(_displayType);

var _footer = __webpack_require__(737);

var _footer2 = _interopRequireDefault(_footer);

var _popupsContainer = __webpack_require__(739);

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

/***/ 723:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"primaryLayout":"Components-layouts-primaryLayout-primaryLayout__primaryLayout--3FVjb","wrap":"Components-layouts-primaryLayout-primaryLayout__wrap--3Ov38","main":"Components-layouts-primaryLayout-primaryLayout__main--1G6a1","reggest":"Components-layouts-primaryLayout-primaryLayout__reggest--RIHSC"};

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(18);

var _cookieNotice = __webpack_require__(725);

var _cookieNotice2 = _interopRequireDefault(_cookieNotice);

var _actions = __webpack_require__(298);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(null, { showPopup: _actions.showPopup })(_cookieNotice2.default);

/***/ }),

/***/ 725:
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

/***/ 734:
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

var _recompose = __webpack_require__(289);

var _found = __webpack_require__(173);

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

/***/ 735:
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

var _sizes = __webpack_require__(736);

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

/***/ 736:
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

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _found = __webpack_require__(173);

var _footer = __webpack_require__(738);

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

/***/ 738:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"Components-footer-footer__footer--3S1n4"};

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(18);

var _popups = __webpack_require__(740);

var _popups2 = _interopRequireDefault(_popups);

var _actions = __webpack_require__(298);

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

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popup = __webpack_require__(741);

var _popup2 = _interopRequireDefault(_popup);

var _popups = __webpack_require__(743);

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

/***/ 741:
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

var _popup = __webpack_require__(742);

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

/***/ 742:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popup":"Components-shared-popup-popup__popup--24OYM"};

/***/ }),

/***/ 743:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"popups":"Components-shared-popup-popups__popups--1m1KE"};

/***/ }),

/***/ 744:
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

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(746);

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

/***/ 747:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 1dc68fcf679e4e19cbb84e1ce6f9c55a
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
    "text": "query fitnessContainerQuery {\n  question {\n    ...qAndAContainer_question\n    id\n  }\n}\n\nfragment qAndAContainer_question on Question {\n  questionText\n  answers {\n    answerText\n    id\n  }\n}\n",
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

/***/ 761:
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
      "name": "answerText",
      "args": null,
      "storageKey": null
    }]
  }]
};
node /*: any*/.hash = '39c89e4da91f162670c4aa66d28ebddf';
module.exports = node;

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRelay = __webpack_require__(277);

var _recompose = __webpack_require__(289);

var _relayCompose = __webpack_require__(746);

var _qAndA = __webpack_require__(697);

var _qAndA2 = _interopRequireDefault(_qAndA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragments = {
  question: function question() {
    var node = __webpack_require__(761);

    if (node.hash && node.hash !== '39c89e4da91f162670c4aa66d28ebddf') {
      console.error('The definition of \'qAndAContainer_question\' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.');
    }

    return __webpack_require__(761);
  }
};

exports.default = (0, _recompose.compose)((0, _relayCompose.fragment)(fragments), (0, _recompose.flattenProp)('question'))(_qAndA2.default);

/***/ })

},[300]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvcUFuZEEvcUFuZEEubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcGFnZUNvbnRlbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2ltcHJpbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGF5b3V0cy9wcmltYXJ5TGF5b3V0L3ByaW1hcnlMYXlvdXRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZm9vdGVyL2Nvb2tpZU5vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9kaXNwbGF5VHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9zaXplcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9fX2dlbmVyYXRlZF9fL3FBbmRBQ29udGFpbmVyX3F1ZXN0aW9uLmdyYXBocWwuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9xQW5kQS9xQW5kQUNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJQYWdlQ29udGVudCIsImNoaWxkcmVuIiwicGFnZUNvbnRlbnQiLCJwcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCIsInNob3dQb3B1cCIsInRleHQiLCJtaWxsaXNlY29uZHNUb1Nob3ciLCJ0eXBlIiwiaWQiLCJnZW5lcmF0ZSIsImhpZGVQb3B1cCIsImluZGV4Iiwic2hvd0dlbmVyaWNFcnJvclBvcHVwIiwiZXJyb3IiLCJjb25zb2xlIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc29sdmVyIiwiQXBwIiwic3RvcmUiLCJSZW5kZXJFcnJvciIsInJvdXRlciIsInJlcGxhY2UiLCJwYXRobmFtZSIsInN0YXR1cyIsInN0YXRlIiwiZGF0YSIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0IiwicmVuZGVyRXJyb3IiLCJoaXN0b3J5RW5oYW5jZXIiLCJwcm90b2NvbCIsIm1pZGRsZXdhcmVzIiwibWF0Y2hlckVuaGFuY2VyIiwibWlkZGxlV2FyZSIsInJlZHVjZXJzIiwiZm91bmQiLCJmb3JtIiwicG9wdXAiLCJkaXNwYXRjaCIsImluaXQiLCJGaXRuZXNzQ29udGFpbmVyIiwicXVlcnkiLCJyb3V0ZUNvbmZpZyIsIkNvbXBvbmVudCIsIkZpdG5lc3MiLCJxdWVzdGlvbiIsImZpdG5lc3MiLCJRQW5kQSIsInF1ZXN0aW9uVGV4dCIsImFuc3dlcnMiLCJxQW5kQSIsIm1hcCIsImFuc3dlciIsImFuc3dlclRleHQiLCJhbnN3ZXJDb250YWluZXIiLCJzdHJpbmciLCJhcnJheU9mIiwiVGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyIiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJwYXJzZUludCIsInBhcmFtcyIsImxvY2F0aW9uIiwiRXJyb3JQYWdlIiwiZXJyb3JQYWdlIiwiZGVmYXVsdFByb3BzIiwicXVvdGF0aW9uIiwiUHJpbWFyeUxheW91dENvbnRhaW5lciIsIlByaW1hcnlMYXlvdXQiLCJkaXNwbGF5VHlwZSIsImRpc3BsYXlUeXBlQ2xhc3NOYW1lIiwiaXNNb2JpbGUiLCJpc1RhYmxldCIsImlzRGVza3RvcCIsInByaW1hcnlMYXlvdXQiLCJ3cmFwIiwibWFpbiIsInJlZ2dlc3QiLCJDb29raWVOb3RpY2UiLCJjb29raWVOb3RpY2VTaG93biIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiZnVuYyIsIlByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiRGlzcGxheVR5cGUiLCJnZXREaXNwbGF5VHlwZSIsIndpbmRvd1dpZHRoIiwiYnJlYWtwb2ludE1vYmlsZSIsInZhbHVlIiwiYnJlYWtwb2ludFRhYmxldCIsInVwZGF0ZURpc3BsYXlUeXBlIiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNpemVzIiwidW5pdCIsImJyZWFrcG9pbnREZXNrdG9wIiwiRm9vdGVyIiwiZm9vdGVyIiwibWFwU3RhdGVUb1Byb3BzIiwicG9wdXBzIiwiUG9wdXBzIiwibGVuZ3RoIiwiUG9wdXAiLCJzZXRUaW1lb3V0IiwiZGVmYXVsdFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsImZpbHRlciIsIl8iLCJpIiwiZmV0Y2hRdWVyeSIsIm9wZXJhdGlvbiIsInZhcmlhYmxlcyIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvcnMiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzb3VyY2UiLCJlbnZpcm9ubWVudCIsInYwIiwiaGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJmcmFnbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7Ozs7O0FBRUE7Ozs7O0FB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SSxzQkFBSixHQUE2QjtBQUNqQyxVQUFRLFVBRHlCO0FBRWpDLFVBQVEseUJBRnlCO0FBR2pDLFVBQVEsVUFIeUI7QUFJakMsY0FBWSxJQUpxQjtBQUtqQyx5QkFBdUIsRUFMVTtBQU1qQyxnQkFBYyxDQUNaO0FBQ0UsWUFBUSxhQURWO0FBRUUsYUFBUyxJQUZYO0FBR0UsWUFBUSxjQUhWO0FBSUUsWUFBUSxJQUpWO0FBS0Usa0JBQWM7QUFMaEIsR0FEWSxFQVFaO0FBQ0UsWUFBUSxhQURWO0FBRUUsYUFBUyxJQUZYO0FBR0UsWUFBUSxTQUhWO0FBSUUsa0JBQWMsSUFKaEI7QUFLRSxZQUFRLElBTFY7QUFNRSxvQkFBZ0IsUUFObEI7QUFPRSxjQUFVLElBUFo7QUFRRSxrQkFBYyxDQUNaO0FBQ0UsY0FBUSxhQURWO0FBRUUsZUFBUyxJQUZYO0FBR0UsY0FBUSxZQUhWO0FBSUUsY0FBUSxJQUpWO0FBS0Usb0JBQWM7QUFMaEIsS0FEWTtBQVJoQixHQVJZO0FBTm1CLENBQW5DO0FBa0NDQSxJQUFELENBQUssU0FBTCxDQUFnQm9KLElBQWhCLEdBQXVCLGtDQUF2QjtBQUNBQyxPQUFPQyxPQUFQLEdBQWlCdEosSUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7QUN6REE7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU11SjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxDQUFOOztrQkFTZSx3QkFDYiw0QkFBU0EsU0FBVCxDQURhLEVBRWIsNEJBQVksVUFBWixDQUZhLGtCIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2VDb250ZW50Lmxlc3MnO1xuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGVudH0+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cblBhZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LmpzIiwiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gVGhlIHRleHQgdG8gc2hvdyBpbiB0aGUgcG9wdXBcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmRzVG9TaG93PTYwMDBdIC0gVGhlIGFtb3VudCBvZiB0aW1lIGluIG1pbGxpc2Vjb25kcyB0byBzaG93IHRoZSBwb3B1cFxuICovXG5leHBvcnQgY29uc3Qgc2hvd1BvcHVwID0gKHRleHQsIG1pbGxpc2Vjb25kc1RvU2hvdyA9IDYwMDApID0+ICh7XG4gIHR5cGU6ICdTSE9XX1BPUFVQJyxcbiAgdGV4dCxcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcbiAgbWlsbGlzZWNvbmRzVG9TaG93LFxufSk7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCAtIFRoZSBpbmRleCBvZiB0aGUgcG9wdXAgdG8gaGlkZVxuICovXG5leHBvcnQgY29uc3QgaGlkZVBvcHVwID0gaW5kZXggPT4gKHtcbiAgdHlwZTogJ0hJREVfUE9QVVAnLFxuICBpbmRleCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd0dlbmVyaWNFcnJvclBvcHVwID0gKGVycm9yKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG4gIHJldHVybiBzaG93UG9wdXAoJ0FuIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHRyeSByZWZyZXNoaW5nIHRoZSBwYWdlLicpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL2FjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0ICcuL2FwcC5sZXNzJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBwcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG59KTtcblxuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihcbiAgbmV3IE1hdGNoZXIocm91dGVDb25maWcpLFxuKTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbiAgcG9wdXAsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL3ByaXZhY3lQb2xpY3lDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgaW1wcmludFJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZm9vdGVyL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIHByaW1hcnlMYXlvdXRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Q29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4ucHJpbWFyeUxheW91dFJvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IHsgZ3JhcGhxbCB9IGZyb20gJ3JlYWN0LXJlbGF5JztcblxuaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IEZpdG5lc3M7XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JhcGhxbGBcbiAgcXVlcnkgZml0bmVzc0NvbnRhaW5lclF1ZXJ5IHtcbiAgICBxdWVzdGlvbiB7XG4gICAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEZpdG5lc3NDb250YWluZXIsXG4gIHF1ZXJ5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBRQW5kQSBmcm9tICcuLi9xQW5kQS9xQW5kQUNvbnRhaW5lcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZml0bmVzcy5sZXNzJztcblxuY29uc3QgRml0bmVzcyA9ICh7IHF1ZXN0aW9uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5maXRuZXNzfT5cbiAgICA8ZGl2PlxuICAgICAgPFFBbmRBIHF1ZXN0aW9uPXtxdWVzdGlvbn0gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5GaXRuZXNzLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcUFuZEEubGVzcyc7XG5cbmNvbnN0IFFBbmRBID0gKHsgcXVlc3Rpb25UZXh0LCBhbnN3ZXJzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xQW5kQX0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5xdWVzdGlvbn0+e3F1ZXN0aW9uVGV4dH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcnN9PlxuICAgICAge2Fuc3dlcnMubWFwKGFuc3dlciA9PiAoXG4gICAgICAgIDxkaXYga2V5PXthbnN3ZXIuYW5zd2VyVGV4dH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyQ29udGFpbmVyfT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFuc3dlcn0+e2Fuc3dlci5hbnN3ZXJUZXh0fTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cblFBbmRBLnByb3BUeXBlcyA9IHtcbiAgcXVlc3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFuc3dlcnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbnN3ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUUFuZEE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicXVlc3Rpb25cIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX3F1ZXN0aW9uLS0yM1VUZlwiLFwiYW5zd2VyQ29udGFpbmVyXCI6XCJDb21wb25lbnRzLXFBbmRBLXFBbmRBX19hbnN3ZXJDb250YWluZXItLTFCWGtTXCIsXCJhbnN3ZXJcIjpcIkNvbXBvbmVudHMtcUFuZEEtcUFuZEFfX2Fuc3dlci0tMnIxUUhcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDY5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJmaXRuZXNzXCI6XCJDb21wb25lbnRzLWZpdG5lc3MtZml0bmVzc19fZml0bmVzcy0tUmk3N2RcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3MDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnMgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8aDE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2gxPlxuICAgIDxoMj5MYXN0IFVwZGF0ZWQ6IEFwcmlsIDE0dGggMjAxODwvaDI+XG4gICAgPHA+XG4gICAgICAmcXVvdDtZb3UmcXVvdDsgYW5kICZxdW90O3lvdXImcXVvdDsgcmVmZXIgdG8geW91LCBhcyBhIHVzZXIgb2YgdGhlIFNpdGUuXG4gICAgICBBICZxdW90O3VzZXImcXVvdDsgaXMgc29tZW9uZSB3aG8gYWNjZXNzZXMsYnJvd3NlcywgY3Jhd2xzLCBzY3JhcGVzLCBvciBpbiBhbnlcbiAgICAgIHdheSB1c2VzIHRoZSBTaXRlLiAmcXVvdDtXZSwmcXVvdDsgJnF1b3Q7dXMsJnF1b3Q7IGFuZCAmcXVvdDtvdXImcXVvdDsgcmVmZXIgdG8gcmVnZ2VzdC5cbiAgICAgICZxdW90O0NvbnRlbnQmcXVvdDsgbWVhbnMgdGV4dCwgaW1hZ2VzLCBwaG90b3MsIGF1ZGlvLCB2aWRlbywgbG9jYXRpb24gZGF0YSxcbiAgICAgIGFuZCBhbGwgb3RoZXIgZm9ybXMgb2YgZGF0YSBvciBjb21tdW5pY2F0aW9uLlxuICAgICAgJnF1b3Q7WW91ciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB5b3Ugc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLCBvciBpblxuICAgICAgY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLCBzdWNoIGFzIHJhdGluZ3MsIHJldmlld3MsIGNvbXBsaW1lbnRzLCBpbnZpdGF0aW9ucyxcbiAgICAgIGNoZWNrLWlucywgbWVzc2FnZXMsIGFuZCBpbmZvcm1hdGlvbiB0aGF0IHlvdSBwdWJsaWNseSBkaXNwbGF5IG9yIGRpc3BsYXllZCBpblxuICAgICAgeW91ciBhY2NvdW50IHByb2ZpbGUuXG4gICAgICAmcXVvdDtVc2VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHVzZXJzIHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCxcbiAgICAgIG9yIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS4gJnF1b3Q7cmVnZ2VzdCBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdFxuICAgICAgd2UgY3JlYXRlIGFuZCBtYWtlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtUaGlyZCBQYXJ0eSBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCBvcmlnaW5hdGVzIGZyb20gcGFydGllcyBvdGhlclxuICAgICAgdGhhbiByZWdnZXN0IG9yIGl0cyB1c2Vycywgd2hpY2ggaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7U2l0ZSBDb250ZW50JnF1b3Q7IG1lYW5zIGFsbCBvZiB0aGUgQ29udGVudCB0aGF0IGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb25cbiAgICAgIHdpdGggdGhlIFNpdGUsIGluY2x1ZGluZyBZb3VyIENvbnRlbnQsIFVzZXIgQ29udGVudCwgVGhpcmQgUGFydHkgQ29udGVudCxcbiAgICAgIGFuZCByZWdnZXN0IENvbnRlbnQuXG4gICAgPC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlRlcm1zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQnkgYWNjZXNzaW5nIHRoaXMgd2Vic2l0ZSwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieSB0aGVzZSB3ZWJzaXRlIFRlcm1zXG4gICAgICAgICAgYW5kIENvbmRpdGlvbnMgb2YgVXNlLCBhbGwgYXBwbGljYWJsZSBsYXdzIGFuZCByZWd1bGF0aW9ucywgYW5kIGFncmVlIHRoYXQgeW91XG4gICAgICAgICAgYXJlIHJlc3BvbnNpYmxlIGZvciBjb21wbGlhbmNlIHdpdGggYW55IGFwcGxpY2FibGUgbG9jYWwgbGF3cy5cbiAgICAgICAgICBJZiB5b3UgZG8gbm90IGFncmVlIHdpdGggYW55IG9mIHRoZXNlIHRlcm1zLCB5b3UgYXJlIHByb2hpYml0ZWQgZnJvbSB1c2luZyBvclxuICAgICAgICAgIGFjY2Vzc2luZyB0aGlzIHNpdGUuIFRoZSBtYXRlcmlhbHMgY29udGFpbmVkIGluIHRoaXMgd2Vic2l0ZSBhcmUgcHJvdGVjdGVkXG4gICAgICAgICAgYnkgYXBwbGljYWJsZSBjb3B5cmlnaHQgYW5kIHRyYWRlIG1hcmsgbGF3LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RGlzY2xhaW1lcjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgb24gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBhcmUgcHJvdmlkZWQgJnF1b3Q7YXMgc2hvd24mcXVvdDsuXG4gICAgICAgICAgcmVnZ2VzdCBtYWtlcyBubyB3YXJyYW50aWVzLCBleHByZXNzZWQgb3IgaW1wbGllZCwgYW5kIGhlcmVieSBkaXNjbGFpbXNcbiAgICAgICAgICBhbmQgbmVnYXRlcyBhbGwgb3RoZXIgd2FycmFudGllcywgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiwgaW1wbGllZFxuICAgICAgICAgIHdhcnJhbnRpZXMgb3IgY29uZGl0aW9ucyBvZiBtZXJjaGFudGFiaWxpdHksIGZpdG5lc3MgZm9yIGEgcGFydGljdWxhclxuICAgICAgICAgIHB1cnBvc2UsIG9yIG5vbi1pbmZyaW5nZW1lbnQgb2YgaW50ZWxsZWN0dWFsIHByb3BlcnR5IG9yIG90aGVyIHZpb2xhdGlvbiBvZiByaWdodHMuXG4gICAgICAgICAgRnVydGhlciwgcmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IG9yIG1ha2UgYW55IHJlcHJlc2VudGF0aW9ucyBjb25jZXJuaW5nIHRoZSBhY2N1cmFjeSxcbiAgICAgICAgICBsaWtlbHkgcmVzdWx0cywgb3IgcmVsaWFiaWxpdHkgb2YgdGhlIHVzZSBvZiB0aGUgbWF0ZXJpYWxzIG9uIGl0cyBpbnRlcm5ldFxuICAgICAgICAgIHdlYnNpdGUgb3Igb3RoZXJ3aXNlIHJlbGF0aW5nIHRvIHN1Y2ggbWF0ZXJpYWxzIG9yIG9uIGFueSBzaXRlcyBsaW5rZWQgdG8gdGhpcyBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGltaXRhdGlvbnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiBubyBldmVudCBzaGFsbCByZWdnZXN0IG9yIGl0cyBzdXBwbGllcnMgYmUgbGlhYmxlIGZvciBhbnkgZGFtYWdlcyAoaW5jbHVkaW5nLCB3aXRob3V0XG4gICAgICAgICAgbGltaXRhdGlvbiwgZGFtYWdlcyBmb3IgbG9zcyBvZiBkYXRhIG9yIHByb2ZpdCwgb3IgZHVlIHRvIGJ1c2luZXNzIGludGVycnVwdGlvbilcbiAgICAgICAgICBhcmlzaW5nIG91dCBvZiB0aGUgdXNlIG9yIGluYWJpbGl0eSB0byB1c2UgdGhlIG1hdGVyaWFscyBvbiBvdXIgaW50ZXJuZXQgc2l0ZSBvclxuICAgICAgICAgIG9mZmVyZWQgc2VydmljZXMsIGV2ZW4gaWYgd2Ugb3IgYW4gYXV0aG9yaXplZCByZXByZXNlbnRhdGl2ZSBoYXMgYmVlbiBub3RpZmllZFxuICAgICAgICAgIG9yYWxseSBvciBpbiB3cml0aW5nIG9mIHRoZSBwb3NzaWJpbGl0eSBvZiBzdWNoIGRhbWFnZS4gQmVjYXVzZSBzb21lIGp1cmlzZGljdGlvbnNcbiAgICAgICAgICBkbyBub3QgYWxsb3cgbGltaXRhdGlvbnMgb24gaW1wbGllZCB3YXJyYW50aWVzLCBvciBsaW1pdGF0aW9ucyBvZiBsaWFiaWxpdHkgZm9yXG4gICAgICAgICAgY29uc2VxdWVudGlhbCBvciBpbmNpZGVudGFsIGRhbWFnZXMsIHRoZXNlIGxpbWl0YXRpb25zIG1heSBub3QgYXBwbHkgdG8geW91LlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+UmV2aXNpb25zIGFuZCBFcnJvcnM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIGFwcGVhcmluZyBvbiBvdXIgd2Vic2l0ZSBjb3VsZCBpbmNsdWRlIHRlY2huaWNhbCwgdHlwb2dyYXBoaWNhbCxcbiAgICAgICAgICBvciBwaG90b2dyYXBoaWMgZXJyb3JzLiByZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgdGhhdCBhbnkgb2YgdGhlIG1hdGVyaWFscyBvblxuICAgICAgICAgIGl0cyB3ZWJzaXRlIGFyZSBhY2N1cmF0ZSwgY29tcGxldGUsIG9yIGN1cnJlbnQuIFdlIG1heSBtYWtlIGNoYW5nZXMgdG8gdGhlXG4gICAgICAgICAgbWF0ZXJpYWxzIGNvbnRhaW5lZCBvbiBpdHMgd2Vic2l0ZSBhdCBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbmtzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgcmVnZ2VzdCBoYXMgbm90IHJldmlld2VkIGFsbCBvZiB0aGUgc2l0ZXMgbGlua2VkIHRvIGl0cyBpbnRlcm5ldCB3ZWJzaXRlXG4gICAgICAgICAgYW5kIGlzIG5vdCByZXNwb25zaWJsZSBmb3IgdGhlIGNvbnRlbnRzIG9mIGFueSBzdWNoIGxpbmtlZCBzaXRlLlxuICAgICAgICAgIFRoZSBpbmNsdXNpb24gb2YgYW55IGxpbmsgZG9lcyBub3QgaW1wbHkgZW5kb3JzZW1lbnQgYnkgdXMgb2YgdGhlIHNpdGUuXG4gICAgICAgICAgVXNlIG9mIGFueSBzdWNoIGxpbmtlZCB3ZWJzaXRlIGlzIGF0IHRoZSB1c2VyJnF1b3Q7cyBvd24gcmlzay5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkdvdmVybmluZyBMYXc8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbnkgY2xhaW0gcmVsYXRpbmcgdG8gdGhlIHJlZ2dlc3Qgd2Vic2l0ZSBzaGFsbCBiZSBnb3Zlcm5lZCBieSB0aGUgbGF3c1xuICAgICAgICAgIG9mIHRoZSBjb3VudHJ5IG9mIG5vdGUgd2l0aG91dCByZWdhcmQgdG8gaXRzIGNvbmZsaWN0IG9mIGxhdyBwcm92aXNpb25zLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RW5nbGlzaCBMYW5ndWFnZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIHRoZSBldmVudCBvZiBhIGNvbmZsaWN0IGJldHdlZW4gdGhlc2UgVGVybXMgYW5kIGEgZm9yZWlnbiBsYW5ndWFnZSB2ZXJzaW9uXG4gICAgICAgICAgb2Ygb3VyIFRlcm1zIG9mIFVzZSwgdGhlIEVuZ2xpc2ggbGFuZ3VhZ2UgdmVyc2lvbiBvZiB0aGVzZSBUZXJtcyBnb3Zlcm5zLlxuICAgICAgICAgIEFsbCBkaXNwdXRlcywgY2xhaW1zIGFuZCBjYXVzZXMgb2YgYWN0aW9uIChhbmQgcmVsYXRlZCBwcm9jZWVkaW5ncykgd2lsbCBiZVxuICAgICAgICAgIGNvbW11bmljYXRlZCBpbiBFbmdsaXNoLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q29weXJpZ2h0IHBvbGljeSwgbm90aWNlIGFuZCBjbGFpbSBpbmZvcm1hdGlvbjwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFsbCBtYXRlcmlhbHMgb24gdGhpcyBzaXRlLCB3aGV0aGVyIHNlcGFyYXRlIG9yIGNvbXBpbGVkLCBpbmNsdWRpbmcsXG4gICAgICAgICAgYnV0IG5vdCBsaW1pdGVkIHRvLCB0ZXh0LCBncmFwaGljcywgYXVkaW8gY2xpcHMsIGxvZ29zLCBidXR0b25zLCBpbWFnZXMsXG4gICAgICAgICAgZGlnaXRhbCBkb3dubG9hZHMsIGRhdGEgY29tcGlsYXRpb25zLCBzb2Z0d2FyZSwgaWNvbnMsIGh0bWwgY29kZSBhbmQgeG1sIGNvZGUsXG4gICAgICAgICAgYXMgd2VsbCBhcyBhbGwgY29weXJpZ2h0LCBwYXRlbnQsIHRyYWRlbWFyaywgdHJhZGUgZHJlc3MsIGFuZCBvdGhlciByaWdodHNcbiAgICAgICAgICB0aGVyZWluLCBhcmUgb3duZWQgb3IgbGljZW5zZWQgYnkgcmVnZ2VzdCBhbmQgaXRzIHRoaXJkLXBhcnR5IGluZm9ybWF0aW9uIHByb3ZpZGVycyxcbiAgICAgICAgICBhbmQgYXJlIHByb3RlY3RlZCBieSBpbnRlcm5hdGlvbmFsIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBsYXdzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgIDwvb2w+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJwYWdlQ29udGVudFwiOlwiQ29tcG9uZW50cy1zaGFyZWQtcGFnZUNvbnRlbnRfX3BhZ2VDb250ZW50LS13cHV0V1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZm9vdGVyL3ByaXZhY3lQb2xpY3kuanMiLCJpbXBvcnQgSW1wcmludCBmcm9tICcuL2ltcHJpbnQnO1xuXG5jb25zdCBJbXByaW50Q29udGFpbmVyID0gSW1wcmludDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IEltcHJpbnRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltcHJpbnQubGVzcyc7XG5cbmNvbnN0IEltcHJpbnQgPSAoKSA9PiAoXG4gIDxQYWdlQ29udGVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltcHJpbnRDb250ZW50fT5cbiAgICAgIDxoMT5JbXByaW50PC9oMT5cbiAgICAgIDxkaXY+Q29tcGFueSBOYW1lOiBWQVNUIE5FVFdPUksgTFREPC9kaXY+XG4gICAgICA8ZGl2Pk1hbmFnaW5nIERpcmVjdG9yOiBNYXJ0aW4gRGF3c29uPC9kaXY+XG4gICAgICA8ZGl2PkFkZHJlc3M6IDI2IENhbGRlclZpZXcsIFJhc3RyaWNrLCBCcmlnaG91c2UsIEhENjNEUSBVbml0ZWQgS2luZ2RvbTwvZGl2PlxuICAgICAgPGRpdj5UZWxlcGhvbmU6ICsoNDQpNzQ3MzU5MTA5NzwvZGl2PlxuICAgICAgPGRpdj5FbWFpbCBhZGRyZXNzOiBpbmZvQHJlZ2dlc3QuY29tPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvUGFnZUNvbnRlbnQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJbXByaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWZvb3Rlci1pbXByaW50X19pbXByaW50Q29udGVudC0tMTVyTE1cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9pbXByaW50Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29tcG9zZSwgd2l0aFByb3BzLCBmbGF0dGVuUHJvcCB9IGZyb20gJ3JlY29tcG9zZSc7XG5cbmltcG9ydCBFcnJvclBhZ2UgZnJvbSAnLi9lcnJvclBhZ2UnO1xuXG5jb25zdCBjcmVhdGVQcm9wcyA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4ge1xuICBzd2l0Y2ggKHN0YXR1cykge1xuICAgIGNhc2UgNDA0OlxuICAgICAgcmV0dXJuIHsgZXJyb3I6ICdUaGUgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuJyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyBlcnJvciB9O1xuICB9XG59O1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFByb3BzKGNyZWF0ZVByb3BzKSxcbik7XG5cbmNvbnN0IEVycm9yUGFnZUNvbnRhaW5lciA9IGVuaGFuY2UoRXJyb3JQYWdlKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICByZW5kZXI6ICh7IHByb3BzIH0pID0+IHByb3BzICYmIChcbiAgICA8RXJyb3JQYWdlQ29udGFpbmVyXG4gICAgICBzdGF0dXM9e3BhcnNlSW50KHByb3BzLnBhcmFtcy5zdGF0dXMsIDEwKX1cbiAgICAgIGVycm9yPXtwcm9wcy5sb2NhdGlvbi5zdGF0ZS5lcnJvcn1cbiAgICAvPlxuICApLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9lcnJvclBhZ2UubGVzcyc7XG5cbmNvbnN0IEVycm9yUGFnZSA9ICh7IHN0YXR1cywgZXJyb3IgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yUGFnZX0+XG4gICAgPGgxPkVycm9yIHtzdGF0dXN9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvZGl2PlxuICAgICAgV2UgaGF2ZSBiZWVuIG5vdGlmaWVkIG9mIHRoZSBlcnJvciDCr1xcXyjjg4QpXy/Cry4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvcjogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VyZWQuJyxcbn07XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcXVvdGF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJlcnJvclBhZ2VcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3JQYWdlLS0xYVMtelwiLFwiZXJyb3JcIjpcIkNvbXBvbmVudHMtZXJyb3JQYWdlLWVycm9yUGFnZV9fZXJyb3ItLTYyS1pDXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUHJpbWFyeUxheW91dCBmcm9tICcuL3ByaW1hcnlMYXlvdXQnO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyID0gUHJpbWFyeUxheW91dDtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaW1hcnlMYXlvdXRDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmltYXJ5TGF5b3V0Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sYXlvdXRzL3ByaW1hcnlMYXlvdXQvcHJpbWFyeUxheW91dENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcHJpbWFyeUxheW91dC5sZXNzJztcbmltcG9ydCBDb29raWVOb3RpY2UgZnJvbSAnLi4vLi4vZm9vdGVyL2Nvb2tpZU5vdGljZUNvbnRhaW5lcic7XG5pbXBvcnQgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZnJvbSAnLi9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSc7XG5pbXBvcnQgRGlzcGxheVR5cGUgZnJvbSAnLi4vLi4vc2hhcmVkL2Rpc3BsYXlUeXBlJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vZm9vdGVyL2Zvb3Rlcic7XG5pbXBvcnQgUG9wdXBzIGZyb20gJy4uLy4uL3NoYXJlZC9wb3B1cC9wb3B1cHNDb250YWluZXInO1xuXG5jb25zdCBQcmltYXJ5TGF5b3V0ID0gKHtcbiAgY2hpbGRyZW4sXG59KSA9PiAoXG4gIDxEaXNwbGF5VHlwZT5cbiAgICB7KGRpc3BsYXlUeXBlKSA9PiB7XG4gICAgICBjb25zdCBkaXNwbGF5VHlwZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXG4gICAgICAgIGRpc3BsYXlUeXBlLmlzTW9iaWxlICYmICdtb2JpbGUnLFxuICAgICAgICBkaXNwbGF5VHlwZS5pc1RhYmxldCAmJiAndGFibGV0JyxcbiAgICAgICAgZGlzcGxheVR5cGUuaXNEZXNrdG9wICYmICdkZXNrdG9wJyxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhkaXNwbGF5VHlwZUNsYXNzTmFtZSwgc3R5bGVzLnByaW1hcnlMYXlvdXQpfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT17c3R5bGVzLnJlZ2dlc3R9PnJlZ2dlc3Q8L0xpbms+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8UG9wdXBzIC8+XG4gICAgICAgICAgPENvb2tpZU5vdGljZSAvPlxuICAgICAgICA8L1ByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5PlxuICAgICAgKTtcbiAgICB9fVxuICA8L0Rpc3BsYXlUeXBlPlxuKTtcblxuUHJpbWFyeUxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxufTtcblxuUHJpbWFyeUxheW91dC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicHJpbWFyeUxheW91dFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcHJpbWFyeUxheW91dC0tM0ZWamJcIixcIndyYXBcIjpcIkNvbXBvbmVudHMtbGF5b3V0cy1wcmltYXJ5TGF5b3V0LXByaW1hcnlMYXlvdXRfX3dyYXAtLTNPdjM4XCIsXCJtYWluXCI6XCJDb21wb25lbnRzLWxheW91dHMtcHJpbWFyeUxheW91dC1wcmltYXJ5TGF5b3V0X19tYWluLS0xRzZhMVwiLFwicmVnZ2VzdFwiOlwiQ29tcG9uZW50cy1sYXlvdXRzLXByaW1hcnlMYXlvdXQtcHJpbWFyeUxheW91dF9fcmVnZ2VzdC0tUklIU0NcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0Lmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDcyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQ29va2llTm90aWNlIGZyb20gJy4vY29va2llTm90aWNlJztcbmltcG9ydCB7IHNob3dQb3B1cCB9IGZyb20gJy4uL3NoYXJlZC9wb3B1cC9hY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7IHNob3dQb3B1cCB9KShDb29raWVOb3RpY2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvY29va2llTm90aWNlQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIENvb2tpZU5vdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNvb2tpZU5vdGljZVNob3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJyk7XG5cbiAgICBpZiAoIWNvb2tpZU5vdGljZVNob3duKSB7XG4gICAgICB0aGlzLnByb3BzLnNob3dQb3B1cCgnVGhpcyB3ZWJzaXRlIHVzZXMgY29va2llcyB0byBnaXZlIHlvdSB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UsIGJ5IGNvbnRpbnVpbmcgdG8gdXNlIHRoZSBzaXRlIHlvdSBhcmUgYWdyZWVpbmcgdG8gb3VyIHVzZSBvZiBjb29raWVzLicsIDE1MDAwKTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZU5vdGljZVNob3duJywgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5Db29raWVOb3RpY2UucHJvcFR5cGVzID0ge1xuICBzaG93UG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29raWVOb3RpY2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9jb29raWVOb3RpY2UuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tICdyZWNvbXBvc2UnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ2ZvdW5kJztcblxuY2xhc3MgUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgICAvLyB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvZXJyb3IvNTAwJyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUHJpbWFyeUxheW91dEVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IG51bGwsXG59XG5cblByaW1hcnlMYXlvdXRFcnJvckJvdW5kYXJ5LnByb3BUeXBlcyA9IHtcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICB3aXRoUm91dGVyLFxuKShQcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xheW91dHMvcHJpbWFyeUxheW91dC9wcmltYXJ5TGF5b3V0RXJyb3JCb3VuZGFyeS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc2l6ZXMgZnJvbSAnLi9zaXplcyc7XG5cbmNsYXNzIERpc3BsYXlUeXBlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgZGlzcGxheVR5cGU6ICdkZXNrdG9wJyxcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSk7XG4gICAgdGhpcy51cGRhdGVEaXNwbGF5VHlwZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlRGlzcGxheVR5cGUpO1xuICB9XG5cbiAgZ2V0RGlzcGxheVR5cGUgPSAod2luZG93V2lkdGgpID0+IHtcbiAgICBpZiAod2luZG93V2lkdGggPCBzaXplcy5icmVha3BvaW50TW9iaWxlLnZhbHVlKSB7XG4gICAgICByZXR1cm4gJ21vYmlsZSc7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvd1dpZHRoIDwgc2l6ZXMuYnJlYWtwb2ludFRhYmxldC52YWx1ZSkge1xuICAgICAgcmV0dXJuICd0YWJsZXQnO1xuICAgIH1cblxuICAgIHJldHVybiAnZGVza3RvcCc7XG4gIH1cblxuICB1cGRhdGVEaXNwbGF5VHlwZSA9ICgpID0+IHtcbiAgICBjb25zdCB3aW5kb3dXaWR0aCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZGlzcGxheVR5cGUgPSB0aGlzLmdldERpc3BsYXlUeXBlKHdpbmRvd1dpZHRoKTtcblxuICAgIGlmIChkaXNwbGF5VHlwZSAhPT0gdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXlUeXBlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkaXNwbGF5VHlwZSA9IHtcbiAgICAgIGlzTW9iaWxlOiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAnbW9iaWxlJyxcbiAgICAgIGlzVGFibGV0OiB0aGlzLnN0YXRlLmRpc3BsYXlUeXBlID09PSAndGFibGV0JyxcbiAgICAgIGlzRGVza3RvcDogdGhpcy5zdGF0ZS5kaXNwbGF5VHlwZSA9PT0gJ2Rlc2t0b3AnLFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbihkaXNwbGF5VHlwZSk7XG4gIH1cbn1cblxuRGlzcGxheVR5cGUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUeXBlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvZGlzcGxheVR5cGUuanMiLCJjb25zdCBzaXplcyA9IHtcbiAgYnJlYWtwb2ludE1vYmlsZTogeyB2YWx1ZTogNzY4LCB1bml0OiAncHgnIH0sXG4gIGJyZWFrcG9pbnRUYWJsZXQ6IHsgdmFsdWU6IDk5MiwgdW5pdDogJ3B4JyB9LFxuICBicmVha3BvaW50RGVza3RvcDogeyB2YWx1ZTogMTIwMCwgdW5pdDogJ3B4JyB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2l6ZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9zaXplcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnZm91bmQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLmxlc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICA8TGluayB0bz1cIi90ZXJtc0FuZENvbmRpdGlvbnNcIj50ZXJtcyBhbmQgY29uZGl0aW9uczwvTGluaz5cbiAgICA8TGluayB0bz1cIi9wcml2YWN5UG9saWN5XCI+cHJpdmFjeSBwb2xpY3k8L0xpbms+XG4gICAgPExpbmsgdG89XCIvaW1wcmludFwiPmltcHJpbnQ8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZm9vdGVyXCI6XCJDb21wb25lbnRzLWZvb3Rlci1mb290ZXJfX2Zvb3Rlci0tM1MxbjRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Zvb3Rlci9mb290ZXIubGVzc1xuLy8gbW9kdWxlIGlkID0gNzM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBQb3B1cHMgZnJvbSAnLi9wb3B1cHMnO1xuaW1wb3J0IHsgaGlkZVBvcHVwIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgcG9wdXAgfSkgPT4gKHtcbiAgcG9wdXBzOiBwb3B1cC5wb3B1cHMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHtcbiAgaGlkZVBvcHVwLFxufSkoUG9wdXBzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9wb3B1cCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXBzLmxlc3MnO1xuXG5jb25zdCBQb3B1cHMgPSAoeyBwb3B1cHMsIGhpZGVQb3B1cCB9KSA9PiAoXG4gIHBvcHVwcy5sZW5ndGggPiAwID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdXBzfT5cbiAgICAgIHtwb3B1cHMubWFwKChwb3B1cCwgaW5kZXgpID0+IChcbiAgICAgICAgPFBvcHVwXG4gICAgICAgICAga2V5PXtwb3B1cC5pZH1cbiAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgdGV4dD17cG9wdXAudGV4dH1cbiAgICAgICAgICBoaWRlUG9wdXA9e2hpZGVQb3B1cH1cbiAgICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c9e3BvcHVwLm1pbGxpc2Vjb25kc1RvU2hvd31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PilcbiAgICA6IG51bGxcbik7XG5cblBvcHVwcy5wcm9wVHlwZXMgPSB7XG4gIGhpZGVQb3B1cDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcG9wdXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3BvcHVwcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9wdXAubGVzcyc7XG5cbmNsYXNzIFBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmhpZGVQb3B1cCh0aGlzLnByb3BzLmluZGV4KSwgdGhpcy5wcm9wcy5taWxsaXNlY29uZHNUb1Nob3cpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1cH0+XG4gICAgICAgIHt0aGlzLnByb3BzLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblBvcHVwLnByb3BUeXBlcyA9IHtcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoaWRlUG9wdXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG1pbGxpc2Vjb25kc1RvU2hvdzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9wb3B1cC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwXCI6XCJDb21wb25lbnRzLXNoYXJlZC1wb3B1cC1wb3B1cF9fcG9wdXAtLTI0T1lNXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXAubGVzc1xuLy8gbW9kdWxlIGlkID0gNzQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcInBvcHVwc1wiOlwiQ29tcG9uZW50cy1zaGFyZWQtcG9wdXAtcG9wdXBzX19wb3B1cHMtLTFtMUtFXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcG9wdXBzLmxlc3Ncbi8vIG1vZHVsZSBpZCA9IDc0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHBvcHVwczogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NIT1dfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBbLi4uc3RhdGUucG9wdXBzLCB7XG4gICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0LFxuICAgICAgICBtaWxsaXNlY29uZHNUb1Nob3c6IGFjdGlvbi5taWxsaXNlY29uZHNUb1Nob3csXG4gICAgICB9XTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNhc2UgJ0hJREVfUE9QVVAnOiB7XG4gICAgICBjb25zdCBwb3B1cHMgPSBzdGF0ZS5wb3B1cHMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBhY3Rpb24uaW5kZXgpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsImltcG9ydCB7XG4gIEVudmlyb25tZW50LFxuICBOZXR3b3JrLFxuICBSZWNvcmRTb3VyY2UsXG4gIFN0b3JlLFxufSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB7IHNldEVudmlyb21lbnQgfSBmcm9tICdyZWxheS1jb21wb3NlJztcblxuY29uc3QgZmV0Y2hRdWVyeSA9IChvcGVyYXRpb24sIHZhcmlhYmxlcykgPT5cbiAgZmV0Y2goJy9ncmFwaHFsJywge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHF1ZXJ5OiBvcGVyYXRpb24udGV4dCxcbiAgICAgIHZhcmlhYmxlcyxcbiAgICB9KSxcbiAgfSkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWxheS9pc3N1ZXMvMTgxNlxuICAgICAgaWYgKGpzb24uZXJyb3JzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChqc29uLmVycm9ycyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgfSk7XG5cbmNvbnN0IG5ldHdvcmsgPSBOZXR3b3JrLmNyZWF0ZShmZXRjaFF1ZXJ5KTtcbmNvbnN0IHNvdXJjZSA9IG5ldyBSZWNvcmRTb3VyY2UoKTtcbmNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHNvdXJjZSk7XG5jb25zdCBlbnZpcm9ubWVudCA9IG5ldyBFbnZpcm9ubWVudCh7XG4gIG5ldHdvcmssXG4gIHN0b3JlLFxufSk7XG5cbnNldEVudmlyb21lbnQoZW52aXJvbm1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBlbnZpcm9ubWVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2Vudmlyb25tZW50L2Vudmlyb25tZW50LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA3NDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAZmxvd1xuICogQHJlbGF5SGFzaCAxZGM2OGZjZjY3OWU0ZTE5Y2JiODRlMWNlNmY5YzU1YVxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyo6OlxuaW1wb3J0IHR5cGUgeyBDb25jcmV0ZVJlcXVlc3QgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbnR5cGUgcUFuZEFDb250YWluZXJfcXVlc3Rpb24kcmVmID0gYW55O1xuZXhwb3J0IHR5cGUgZml0bmVzc0NvbnRhaW5lclF1ZXJ5VmFyaWFibGVzID0ge3wgfH07XG5leHBvcnQgdHlwZSBmaXRuZXNzQ29udGFpbmVyUXVlcnlSZXNwb25zZSA9IHt8XG4gICtxdWVzdGlvbjogP3t8XG4gICAgKyRmcmFnbWVudFJlZnM6IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZixcbiAgfH0sXG58fTtcbiovXG5cblxuLypcbnF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeSB7XG4gIHF1ZXN0aW9uIHtcbiAgICAuLi5xQW5kQUNvbnRhaW5lcl9xdWVzdGlvblxuICAgIGlkXG4gIH1cbn1cblxuZnJhZ21lbnQgcUFuZEFDb250YWluZXJfcXVlc3Rpb24gb24gUXVlc3Rpb24ge1xuICBxdWVzdGlvblRleHRcbiAgYW5zd2VycyB7XG4gICAgYW5zd2VyVGV4dFxuICAgIGlkXG4gIH1cbn1cbiovXG5cbmNvbnN0IG5vZGUvKjogQ29uY3JldGVSZXF1ZXN0Ki8gPSAoZnVuY3Rpb24oKXtcbnZhciB2MCA9IHtcbiAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgXCJhbGlhc1wiOiBudWxsLFxuICBcIm5hbWVcIjogXCJpZFwiLFxuICBcImFyZ3NcIjogbnVsbCxcbiAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbn07XG5yZXR1cm4ge1xuICBcImtpbmRcIjogXCJSZXF1ZXN0XCIsXG4gIFwib3BlcmF0aW9uS2luZFwiOiBcInF1ZXJ5XCIsXG4gIFwibmFtZVwiOiBcImZpdG5lc3NDb250YWluZXJRdWVyeVwiLFxuICBcImlkXCI6IG51bGwsXG4gIFwidGV4dFwiOiBcInF1ZXJ5IGZpdG5lc3NDb250YWluZXJRdWVyeSB7XFxuICBxdWVzdGlvbiB7XFxuICAgIC4uLnFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXFxuICAgIGlkXFxuICB9XFxufVxcblxcbmZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcXG4gIHF1ZXN0aW9uVGV4dFxcbiAgYW5zd2VycyB7XFxuICAgIGFuc3dlclRleHRcXG4gICAgaWRcXG4gIH1cXG59XFxuXCIsXG4gIFwibWV0YWRhdGFcIjoge30sXG4gIFwiZnJhZ21lbnRcIjoge1xuICAgIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gICAgXCJuYW1lXCI6IFwiZml0bmVzc0NvbnRhaW5lclF1ZXJ5XCIsXG4gICAgXCJ0eXBlXCI6IFwiUXVlcnlcIixcbiAgICBcIm1ldGFkYXRhXCI6IG51bGwsXG4gICAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGwsXG4gICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gICAgICAgIFwicGx1cmFsXCI6IGZhbHNlLFxuICAgICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwia2luZFwiOiBcIkZyYWdtZW50U3ByZWFkXCIsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJxQW5kQUNvbnRhaW5lcl9xdWVzdGlvblwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwib3BlcmF0aW9uXCI6IHtcbiAgICBcImtpbmRcIjogXCJPcGVyYXRpb25cIixcbiAgICBcIm5hbWVcIjogXCJmaXRuZXNzQ29udGFpbmVyUXVlcnlcIixcbiAgICBcImFyZ3VtZW50RGVmaW5pdGlvbnNcIjogW10sXG4gICAgXCJzZWxlY3Rpb25zXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgXCJhbGlhc1wiOiBudWxsLFxuICAgICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiLFxuICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgIFwiY29uY3JldGVUeXBlXCI6IFwiUXVlc3Rpb25cIixcbiAgICAgICAgXCJwbHVyYWxcIjogZmFsc2UsXG4gICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uVGV4dFwiLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJraW5kXCI6IFwiTGlua2VkRmllbGRcIixcbiAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImFuc3dlcnNcIixcbiAgICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsLFxuICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICBcImNvbmNyZXRlVHlwZVwiOiBcIkFuc3dlclwiLFxuICAgICAgICAgICAgXCJwbHVyYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwic2VsZWN0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImtpbmRcIjogXCJTY2FsYXJGaWVsZFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpYXNcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJhbnN3ZXJUZXh0XCIsXG4gICAgICAgICAgICAgICAgXCJhcmdzXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgdjBcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07XG59KSgpO1xuKG5vZGUvKjogYW55Ki8pLmhhc2ggPSAnMzU0OTNiNmI0MjQ4YzVmZmViZTUxYzZkMTRiMDM0YmEnO1xubW9kdWxlLmV4cG9ydHMgPSBub2RlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9maXRuZXNzL19fZ2VuZXJhdGVkX18vZml0bmVzc0NvbnRhaW5lclF1ZXJ5LmdyYXBocWwuanMiLCIvKipcbiAqIEBmbG93XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKjo6XG5pbXBvcnQgdHlwZSB7IENvbmNyZXRlRnJhZ21lbnQgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgRnJhZ21lbnRSZWZlcmVuY2UgfSBmcm9tICdyZWxheS1ydW50aW1lJztcbmRlY2xhcmUgZXhwb3J0IG9wYXF1ZSB0eXBlIHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uJHJlZjogRnJhZ21lbnRSZWZlcmVuY2U7XG5leHBvcnQgdHlwZSBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiA9IHt8XG4gICtxdWVzdGlvblRleHQ6ID9zdHJpbmcsXG4gICthbnN3ZXJzOiA/JFJlYWRPbmx5QXJyYXk8P3t8XG4gICAgK2Fuc3dlclRleHQ6ID9zdHJpbmcsXG4gIHx9PixcbiAgKyRyZWZUeXBlOiBxQW5kQUNvbnRhaW5lcl9xdWVzdGlvbiRyZWYsXG58fTtcbiovXG5cblxuY29uc3Qgbm9kZS8qOiBDb25jcmV0ZUZyYWdtZW50Ki8gPSB7XG4gIFwia2luZFwiOiBcIkZyYWdtZW50XCIsXG4gIFwibmFtZVwiOiBcInFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uXCIsXG4gIFwidHlwZVwiOiBcIlF1ZXN0aW9uXCIsXG4gIFwibWV0YWRhdGFcIjogbnVsbCxcbiAgXCJhcmd1bWVudERlZmluaXRpb25zXCI6IFtdLFxuICBcInNlbGVjdGlvbnNcIjogW1xuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIlNjYWxhckZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblRleHRcIixcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJzdG9yYWdlS2V5XCI6IG51bGxcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2luZFwiOiBcIkxpbmtlZEZpZWxkXCIsXG4gICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICBcIm5hbWVcIjogXCJhbnN3ZXJzXCIsXG4gICAgICBcInN0b3JhZ2VLZXlcIjogbnVsbCxcbiAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgXCJjb25jcmV0ZVR5cGVcIjogXCJBbnN3ZXJcIixcbiAgICAgIFwicGx1cmFsXCI6IHRydWUsXG4gICAgICBcInNlbGVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJraW5kXCI6IFwiU2NhbGFyRmllbGRcIixcbiAgICAgICAgICBcImFsaWFzXCI6IG51bGwsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiYW5zd2VyVGV4dFwiLFxuICAgICAgICAgIFwiYXJnc1wiOiBudWxsLFxuICAgICAgICAgIFwic3RvcmFnZUtleVwiOiBudWxsXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn07XG4obm9kZS8qOiBhbnkqLykuaGFzaCA9ICczOWM4OWU0ZGE5MWYxNjI2NzBjNGFhNjZkMjhlYmRkZic7XG5tb2R1bGUuZXhwb3J0cyA9IG5vZGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL19fZ2VuZXJhdGVkX18vcUFuZEFDb250YWluZXJfcXVlc3Rpb24uZ3JhcGhxbC5qcyIsImltcG9ydCB7IGdyYXBocWwgfSBmcm9tICdyZWFjdC1yZWxheSc7XG5pbXBvcnQgeyBjb21wb3NlLCBmbGF0dGVuUHJvcCB9IGZyb20gJ3JlY29tcG9zZSc7XG5pbXBvcnQgeyBmcmFnbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5pbXBvcnQgcUFuZEEgZnJvbSAnLi9xQW5kQSc7XG5cbmNvbnN0IGZyYWdtZW50cyA9IGdyYXBocWxgXG4gIGZyYWdtZW50IHFBbmRBQ29udGFpbmVyX3F1ZXN0aW9uIG9uIFF1ZXN0aW9uIHtcbiAgICBxdWVzdGlvblRleHRcbiAgICBhbnN3ZXJzIHtcbiAgICAgIGFuc3dlclRleHRcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGZyYWdtZW50KGZyYWdtZW50cyksXG4gIGZsYXR0ZW5Qcm9wKCdxdWVzdGlvbicpLFxuKShxQW5kQSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3FBbmRBL3FBbmRBQ29udGFpbmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
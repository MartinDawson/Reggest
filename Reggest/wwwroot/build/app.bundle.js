webpackJsonp([0],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pageContent = __webpack_require__(635);

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

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(264);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(277);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(31);

var _foundRelay = __webpack_require__(293);

var _router = __webpack_require__(413);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(437);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(647);

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

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(414);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(435);

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

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(22);

var _reduxThunk = __webpack_require__(438);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(439);

var _foundReducer = __webpack_require__(605);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(133);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(606);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(608);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(613);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(619);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(620);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(623);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(646);

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

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(624);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(628);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(629);

var _termsAndConditionsContainer = __webpack_require__(633);

var _privacyPolicyContainer = __webpack_require__(636);

var _imprintContainer = __webpack_require__(638);

var _errorPageContainer = __webpack_require__(641);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _makeRouteConfig2.default)(_react2.default.createElement(
  _Route2.default,
  _extends({ path: '/' }, _fitnessContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _fitnessContainer.routeConfig),
  _react2.default.createElement(_Route2.default, _extends({ path: 'error/:status' }, _errorPageContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'termsAndConditions' }, _termsAndConditionsContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'privacyPolicy' }, _privacyPolicyContainer.routeConfig)),
  _react2.default.createElement(_Route2.default, _extends({ path: 'imprint' }, _imprintContainer.routeConfig))
));

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _fitness = __webpack_require__(630);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitnessContainer = _fitness2.default;

var routeConfig = exports.routeConfig = {
  Component: FitnessContainer
};

exports.default = FitnessContainer;

/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _fitness = __webpack_require__(631);

var _fitness2 = _interopRequireDefault(_fitness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fitness = function Fitness() {
  return _react2.default.createElement(
    'div',
    null,
    'Fitness'
  );
};

exports.default = Fitness;

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(634);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(146);

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

/***/ 635:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pageContent":"Components-shared-pageContent__pageContent--wputW"};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(637);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(146);

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

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(639);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(146);

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(640);

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

/***/ 640:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-legal-imprint__imprintContent--2TNeO"};

/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(642);

var _errorPage = __webpack_require__(644);

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

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(645);

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

/***/ 645:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 646:
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

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(689);

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

/***/ })

},[262]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3NDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9maXRuZXNzL2ZpdG5lc3MubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xlZ2FsL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xlZ2FsL3Rlcm1zQW5kQ29uZGl0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGVnYWwvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xlZ2FsL3ByaXZhY3lQb2xpY3kuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sZWdhbC9pbXByaW50Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGVnYWwvaW1wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnQubGVzcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiXSwibmFtZXMiOlsiUGFnZUNvbnRlbnQiLCJjaGlsZHJlbiIsInBhZ2VDb250ZW50IiwicHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwiZXJyb3IiLCJyb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJzdGF0dXMiLCJzdGF0ZSIsImRhdGEiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInJlbmRlckVycm9yIiwiaGlzdG9yeUVuaGFuY2VyIiwicHJvdG9jb2wiLCJtaWRkbGV3YXJlcyIsIm1hdGNoZXJFbmhhbmNlciIsIm1pZGRsZVdhcmUiLCJyZWR1Y2VycyIsImZvdW5kIiwiZm9ybSIsInBvcHVwIiwiZGlzcGF0Y2giLCJpbml0IiwiRml0bmVzc0NvbnRhaW5lciIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiRml0bmVzcyIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsIlRlcm1zQW5kQ29uZGl0aW9ucyIsIlByaXZhY3lQb2xpY3lDb250YWluZXIiLCJQcml2YWN5UG9saWN5IiwiSW1wcmludENvbnRhaW5lciIsIkltcHJpbnQiLCJpbXByaW50Q29udGVudCIsImNyZWF0ZVByb3BzIiwiZW5oYW5jZSIsIkVycm9yUGFnZUNvbnRhaW5lciIsInByb3BzIiwicGFyc2VJbnQiLCJwYXJhbXMiLCJsb2NhdGlvbiIsIkVycm9yUGFnZSIsImVycm9yUGFnZSIsImRlZmF1bHRQcm9wcyIsInN0cmluZyIsInF1b3RhdGlvbiIsImRlZmF1bHRTdGF0ZSIsInBvcHVwcyIsInJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJ0ZXh0IiwibWlsbGlzZWNvbmRzVG9TaG93IiwiZmlsdGVyIiwiXyIsImkiLCJpbmRleCIsImZldGNoUXVlcnkiLCJvcGVyYXRpb24iLCJ2YXJpYWJsZXMiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZXJyb3JzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJuZXR3b3JrIiwiY3JlYXRlIiwic291cmNlIiwiZW52aXJvbm1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVyxzQkFBT0MsV0FBdkI7QUFDR0Q7QUFESCxHQURrQjtBQUFBLENBQXBCOztBQU1BRCxZQUFZRyxTQUFaLEdBQXdCO0FBQ3RCRixZQUFVLG9CQUFVRyxJQUFWLENBQWVDO0FBREgsQ0FBeEI7O2tCQUllTCxXOzs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxtQkFBU00sTUFBVCxDQUFnQixrREFBaEIsRUFBeUJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7OztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsV0FBVywrQ0FBakI7O0FBRUEsSUFBTUMsTUFBTSxTQUFOQSxHQUFNO0FBQUEsU0FDVjtBQUFBO0FBQUEsTUFBVSxzQkFBVjtBQUNFLHNEQUFRLGNBQWMsRUFBRUMs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O0FBQUE7QUFBQSxLQUhGO0FBWUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BREY7QUFTRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0FURjtBQWVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQWZGO0FBNEJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQTVCRjtBQXlDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsU0FGRjtBQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRixPQXpDRjtBQXlERTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0F6REY7QUFnRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BaEVGO0FBNEVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQTVFRjtBQXNGRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0F0RkY7QUFtR0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGLE9BbkdGO0FBaUhFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRixPQWpIRjtBQXVIRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkYsT0F2SEY7QUFvSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBcElGO0FBWkYsR0FEb0I7QUFBQSxDQUF0Qjs7a0JBNEtlQSxhOzs7Ozs7Ozs7Ozs7Ozs7QUNoTGY7Ozs7OztBQUVBLElBQU1DLG9DQUFOOztBQUVPLElBQU1QLG9DQUFjO0FBQ3pCQyxhQUFXTTtBQURjLENBQXBCOztrQkFJUUEsZ0I7Ozs7Ozs7Ozs7Ozs7O0FDUmY7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVU7QUFBQSxTQUNkO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVcsa0JBQU9DLGNBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUpGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBREYsR0FEYztBQUFBLENBQWhCOztrQkFhZUQsTzs7Ozs7OztBQ2xCZjtBQUNBLGtCQUFrQixvRTs7Ozs7Ozs7Ozs7Ozs7O0FDRGxCOzs7O0FBQ0E7O0FBRUE7Ozs7OztBQUVBLElBQU1FLGNBQWMsU0FBZEEsV0FBYyxPQUF1QjtBQUFBLE1BQXBCN0IsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkosS0FBWSxRQUFaQSxLQUFZOztBQUN6QyxVQUFRSSxNQUFSO0FBQ0UsU0FBSyxHQUFMO0FBQ0UsYUFBTyxFQUFFSixPQUFPLDhCQUFULEVBQVA7QUFDRjtBQUNFLGFBQU8sRUFBRUEsWUFBRixFQUFQO0FBSko7QUFNRCxDQVBEOztBQVNBLElBQU1rQyxVQUFVLHdCQUNkLDBCQUFVRCxXQUFWLENBRGMsQ0FBaEI7O0FBSUEsSUFBTUUscUJBQXFCRCw0QkFBM0I7O0FBRU8sSUFBTVgsb0NBQWM7QUFDekI5QixVQUFRO0FBQUEsUUFBRzJDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWVBLFNBQ3JCLDhCQUFDLGtCQUFEO0FBQ0UsY0FBUUMsU0FBU0QsTUFBTUUsTUFBTixDQUFhbEMsTUFBdEIsRUFBOEIsRUFBOUIsQ0FEVjtBQUVFLGFBQU9nQyxNQUFNRyxRQUFOLENBQWVsQyxLQUFmLENBQXFCTDtBQUY5QixNQURNO0FBQUE7QUFEaUIsQ0FBcEI7O2tCQVNRbUMsa0I7Ozs7Ozs7Ozs7Ozs7O0FDN0JmOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTUssWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR3BDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdKLEtBQVgsUUFBV0EsS0FBWDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVcsb0JBQU95QyxTQUF2QjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQVdyQztBQUFYLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFXLG9CQUFPSixLQUF2QjtBQUNFO0FBQUE7QUFBQTtBQUNHQTtBQURILE9BREY7QUFBQTtBQUFBO0FBRkYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQXdDLFVBQVVFLFlBQVYsR0FBeUI7QUFDdkIxQyxTQUFPO0FBRGdCLENBQXpCOztBQUlBd0MsVUFBVWxELFNBQVYsR0FBc0I7QUFDcEJjLFVBQVEsb0JBQVVJLE1BQVYsQ0FBaUJoQixVQURMO0FBRXBCUSxTQUFPLG9CQUFVMkMsTUFGRztBQUdwQkMsYUFBVyxvQkFBVUQsTUFBVixDQUFpQm5EO0FBSFIsQ0FBdEI7O2tCQU1lZ0QsUzs7Ozs7OztBQzNCZjtBQUNBLGtCQUFrQix1SDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGxCLElBQU1LLGVBQWU7QUFDbkJDLFVBQVE7QUFEVyxDQUFyQjs7QUFJQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQzFDLEtBQWlDLHVFQUF6QndDLFlBQXlCO0FBQUEsTUFBWEcsTUFBVzs7QUFDaEQsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssWUFBTDtBQUFtQjtBQUNqQixZQUFNSCxzQ0FBYXpDLE1BQU15QyxNQUFuQixJQUEyQjtBQUMvQkksY0FBSUYsT0FBT0UsRUFEb0I7QUFFL0JDLGdCQUFNSCxPQUFPRyxJQUZrQjtBQUcvQkMsOEJBQW9CSixPQUFPSTtBQUhJLFNBQTNCLEVBQU47O0FBTUEsNEJBQ0svQyxLQURMO0FBRUV5QztBQUZGO0FBSUQ7QUFDRCxTQUFLLFlBQUw7QUFBbUI7QUFDakIsWUFBTUEsVUFBU3pDLE1BQU15QyxNQUFOLENBQWFPLE1BQWIsQ0FBb0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsaUJBQVVBLE1BQU1QLE9BQU9RLEtBQXZCO0FBQUEsU0FBcEIsQ0FBZjs7QUFFQSw0QkFDS25ELEtBREw7QUFFRXlDO0FBRkY7QUFJRDtBQUNEO0FBQVMsYUFBT3pDLEtBQVA7QUFyQlg7QUF1QkQsQ0F4QkQ7O2tCQTBCZTBDLE87Ozs7Ozs7Ozs7Ozs7O0FDOUJmOztBQU1BOztBQUVBLElBQU1VLGFBQWEsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQVlDLFNBQVo7QUFBQSxTQUNqQkMsTUFBTSxVQUFOLEVBQWtCO0FBQ2hCQyxZQUFRLE1BRFE7QUFFaEJDLGlCQUFhLGFBRkc7QUFHaEJDLGFBQVM7QUFDUEMsY0FBUSxrQkFERDtBQUVQLHNCQUFnQjtBQUZULEtBSE87QUFPaEJDLFVBQU1DLEtBQUtDLFNBQUwsQ0FBZTtBQUNuQkMsYUFBT1YsVUFBVVAsSUFERTtBQUVuQlE7QUFGbUIsS0FBZjtBQVBVLEdBQWxCLEVBV0dVLElBWEgsQ0FXUTtBQUFBLFdBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEdBWFIsRUFZR0YsSUFaSCxDQVlRLFVBQUNFLElBQUQsRUFBVTtBQUNkO0FBQ0EsUUFBSUEsS0FBS0MsTUFBVCxFQUFpQjtBQUNmLGFBQU9DLFFBQVFDLE1BQVIsQ0FBZUgsS0FBS0MsTUFBcEIsQ0FBUDtBQUNEOztBQUVELFdBQU9DLFFBQVFFLE9BQVIsQ0FBZ0JKLElBQWhCLENBQVA7QUFDRCxHQW5CSCxDQURpQjtBQUFBLENBQW5COztBQXNCQSxJQUFNSyxVQUFVLHNCQUFRQyxNQUFSLENBQWVwQixVQUFmLENBQWhCO0FBQ0EsSUFBTXFCLFNBQVMsZ0NBQWY7QUFDQSxJQUFNaEYsUUFBUSx3QkFBVWdGLE1BQVYsQ0FBZDtBQUNBLElBQU1DLGNBQWMsOEJBQWdCO0FBQ2xDSCxrQkFEa0M7QUFFbEM5RTtBQUZrQyxDQUFoQixDQUFwQjs7QUFLQSxpQ0FBY2lGLFdBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2VDb250ZW50Lmxlc3MnO1xuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlQ29udGVudH0+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cblBhZ2VDb250ZW50LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BhZ2VDb250ZW50LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vYXBwJztcblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJ2ZvdW5kLXJlbGF5JztcblxuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRpbmcvcm91dGVyJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50L2Vudmlyb25tZW50JztcblxuY29uc3QgcmVzb2x2ZXIgPSBuZXcgUmVzb2x2ZXIoZW52aXJvbm1lbnQpO1xuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgbWF0Y2hDb250ZXh0PXt7IHN0b3JlIH19IHJlc29sdmVyPXtyZXNvbHZlcn0gLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcC5qcyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVDb25uZWN0ZWRSb3V0ZXInO1xuaW1wb3J0IGNyZWF0ZVJlbmRlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlUmVuZGVyJztcblxuY29uc3QgUmVuZGVyRXJyb3IgPSAoeyBlcnJvciwgcm91dGVyIH0pID0+IHtcbiAgcm91dGVyLnJlcGxhY2Uoe1xuICAgIHBhdGhuYW1lOiBgL2Vycm9yLyR7ZXJyb3Iuc3RhdHVzfWAsXG4gICAgc3RhdGU6IHtcbiAgICAgIGVycm9yOiBlcnJvci5kYXRhLFxuICAgIH0sXG4gIH0pO1xufTtcblxuUmVuZGVyRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJvcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgcm91dGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoe1xuICByZW5kZXI6IGNyZWF0ZVJlbmRlcih7XG4gICAgcmVuZGVyRXJyb3I6IFJlbmRlckVycm9yLFxuICB9KSxcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlci5qcyIsImltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgeyByZWR1Y2VyIGFzIGZvcm0gfSBmcm9tICdyZWR1eC1mb3JtJztcbmltcG9ydCBmb3VuZCBmcm9tICdmb3VuZC9saWIvZm91bmRSZWR1Y2VyJztcbmltcG9ydCBGYXJjZUFjdGlvbnMgZnJvbSAnZmFyY2UvbGliL0FjdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJQcm90b2NvbCBmcm9tICdmYXJjZS9saWIvQnJvd3NlclByb3RvY29sJztcbmltcG9ydCBjcmVhdGVIaXN0b3J5RW5oYW5jZXIgZnJvbSAnZmFyY2UvbGliL2NyZWF0ZUhpc3RvcnlFbmhhbmNlcic7XG5pbXBvcnQgcXVlcnlNaWRkbGV3YXJlIGZyb20gJ2ZhcmNlL2xpYi9xdWVyeU1pZGRsZXdhcmUnO1xuaW1wb3J0IGNyZWF0ZU1hdGNoRW5oYW5jZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZU1hdGNoRW5oYW5jZXInO1xuaW1wb3J0IE1hdGNoZXIgZnJvbSAnZm91bmQvbGliL01hdGNoZXInO1xuXG5pbXBvcnQgcm91dGVDb25maWcgZnJvbSAnLi4vcm91dGluZy9yb3V0ZUNvbmZpZyc7XG5pbXBvcnQgcG9wdXAgZnJvbSAnLi4vLi4vc2hhcmVkL3BvcHVwL3JlZHVjZXInO1xuXG5jb25zdCBoaXN0b3J5RW5oYW5jZXIgPSBjcmVhdGVIaXN0b3J5RW5oYW5jZXIoe1xuICBwcm90b2NvbDogbmV3IEJyb3dzZXJQcm90b2NvbCgpLFxuICBtaWRkbGV3YXJlczogW3F1ZXJ5TWlkZGxld2FyZV0sXG59KTtcblxuY29uc3QgbWF0Y2hlckVuaGFuY2VyID0gY3JlYXRlTWF0Y2hFbmhhbmNlcihcbiAgbmV3IE1hdGNoZXIocm91dGVDb25maWcpLFxuKTtcblxuY29uc3QgbWlkZGxlV2FyZSA9IGNvbXBvc2UoXG4gIGFwcGx5TWlkZGxld2FyZSh0aHVuayksXG4gIGhpc3RvcnlFbmhhbmNlcixcbiAgbWF0Y2hlckVuaGFuY2VyLFxuKTtcblxuY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBmb3VuZCxcbiAgZm9ybSxcbiAgcG9wdXAsXG59KTtcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywge30sIG1pZGRsZVdhcmUpO1xuXG5zdG9yZS5kaXNwYXRjaChGYXJjZUFjdGlvbnMuaW5pdCgpKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9zdG9yZS9zdG9yZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbWFrZVJvdXRlQ29uZmlnIGZyb20gJ2ZvdW5kL2xpYi9tYWtlUm91dGVDb25maWcnO1xuaW1wb3J0IFJvdXRlIGZyb20gJ2ZvdW5kL2xpYi9Sb3V0ZSc7XG5cbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGZpdG5lc3NSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2ZpdG5lc3MvZml0bmVzc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyB0ZXJtc0FuZENvbmRpdGlvbnNSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xlZ2FsL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBwcml2YWN5UG9saWN5Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9sZWdhbC9wcml2YWN5UG9saWN5Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGltcHJpbnRSb3V0ZUNvbmZpZyB9IGZyb20gJy4uLy4uL2xlZ2FsL2ltcHJpbnRDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgZXJyb3JQYWdlUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9lcnJvclBhZ2UvZXJyb3JQYWdlQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgbWFrZVJvdXRlQ29uZmlnKFxuICA8Um91dGUgcGF0aD1cIi9cIiB7Li4uZml0bmVzc1JvdXRlQ29uZmlnfT5cbiAgICA8Um91dGUgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImVycm9yLzpzdGF0dXNcIiB7Li4uZXJyb3JQYWdlUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJ0ZXJtc0FuZENvbmRpdGlvbnNcIiB7Li4udGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJwcml2YWN5UG9saWN5XCIgey4uLnByaXZhY3lQb2xpY3lSb3V0ZUNvbmZpZ30gLz5cbiAgICA8Um91dGUgcGF0aD1cImltcHJpbnRcIiB7Li4uaW1wcmludFJvdXRlQ29uZmlnfSAvPlxuICA8L1JvdXRlPixcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9yb3V0aW5nL3JvdXRlQ29uZmlnLmpzIiwiaW1wb3J0IEZpdG5lc3MgZnJvbSAnLi9maXRuZXNzJztcblxuY29uc3QgRml0bmVzc0NvbnRhaW5lciA9IEZpdG5lc3M7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBGaXRuZXNzQ29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZml0bmVzcy9maXRuZXNzQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ZpdG5lc3MubGVzcyc7XG5cbmNvbnN0IEZpdG5lc3MgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgRml0bmVzc1xuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2ZpdG5lc3MvZml0bmVzcy5sZXNzXG4vLyBtb2R1bGUgaWQgPSA2MzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICcuL3Rlcm1zQW5kQ29uZGl0aW9ucyc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciA9IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvdGVybXNBbmRDb25kaXRpb25zQ29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL3NoYXJlZC9wYWdlQ29udGVudCc7XG5cbmNvbnN0IFRlcm1zQW5kQ29uZGl0aW9ucyA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxoMT5UZXJtcyBhbmQgQ29uZGl0aW9uczwvaDE+XG4gICAgPGgyPkxhc3QgVXBkYXRlZDogQXByaWwgMTR0aCAyMDE4PC9oMj5cbiAgICA8cD5cbiAgICAgICZxdW90O1lvdSZxdW90OyBhbmQgJnF1b3Q7eW91ciZxdW90OyByZWZlciB0byB5b3UsIGFzIGEgdXNlciBvZiB0aGUgU2l0ZS5cbiAgICAgIEEgJnF1b3Q7dXNlciZxdW90OyBpcyBzb21lb25lIHdobyBhY2Nlc3Nlcyxicm93c2VzLCBjcmF3bHMsIHNjcmFwZXMsIG9yIGluIGFueVxuICAgICAgd2F5IHVzZXMgdGhlIFNpdGUuICZxdW90O1dlLCZxdW90OyAmcXVvdDt1cywmcXVvdDsgYW5kICZxdW90O291ciZxdW90OyByZWZlciB0byBSZWdnZXN0LlxuICAgICAgJnF1b3Q7Q29udGVudCZxdW90OyBtZWFucyB0ZXh0LCBpbWFnZXMsIHBob3RvcywgYXVkaW8sIHZpZGVvLCBsb2NhdGlvbiBkYXRhLFxuICAgICAgYW5kIGFsbCBvdGhlciBmb3JtcyBvZiBkYXRhIG9yIGNvbW11bmljYXRpb24uXG4gICAgICAmcXVvdDtZb3VyIENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IHlvdSBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsIG9yIGluXG4gICAgICBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUsIHN1Y2ggYXMgcmF0aW5ncywgcmV2aWV3cywgY29tcGxpbWVudHMsIGludml0YXRpb25zLFxuICAgICAgY2hlY2staW5zLCBtZXNzYWdlcywgYW5kIGluZm9ybWF0aW9uIHRoYXQgeW91IHB1YmxpY2x5IGRpc3BsYXkgb3IgZGlzcGxheWVkIGluXG4gICAgICB5b3VyIGFjY291bnQgcHJvZmlsZS5cbiAgICAgICZxdW90O1VzZXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgdXNlcnMgc3VibWl0IG9yIHRyYW5zbWl0IHRvLCB0aHJvdWdoLFxuICAgICAgb3IgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLiAmcXVvdDtSZWdnZXN0IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0XG4gICAgICB3ZSBjcmVhdGUgYW5kIG1ha2UgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1RoaXJkIFBhcnR5IENvbnRlbnQmcXVvdDsgbWVhbnMgQ29udGVudCB0aGF0IG9yaWdpbmF0ZXMgZnJvbSBwYXJ0aWVzIG90aGVyXG4gICAgICB0aGFuIFJlZ2dlc3Qgb3IgaXRzIHVzZXJzLCB3aGljaCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuXG4gICAgICAmcXVvdDtTaXRlIENvbnRlbnQmcXVvdDsgbWVhbnMgYWxsIG9mIHRoZSBDb250ZW50IHRoYXQgaXMgbWFkZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvblxuICAgICAgd2l0aCB0aGUgU2l0ZSwgaW5jbHVkaW5nIFlvdXIgQ29udGVudCwgVXNlciBDb250ZW50LCBUaGlyZCBQYXJ0eSBDb250ZW50LFxuICAgICAgYW5kIFJlZ2dlc3QgQ29udGVudC5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGVybXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCeSBhY2Nlc3NpbmcgdGhpcyB3ZWJzaXRlLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5IHRoZXNlIHdlYnNpdGUgVGVybXNcbiAgICAgICAgICBhbmQgQ29uZGl0aW9ucyBvZiBVc2UsIGFsbCBhcHBsaWNhYmxlIGxhd3MgYW5kIHJlZ3VsYXRpb25zLCBhbmQgYWdyZWUgdGhhdCB5b3VcbiAgICAgICAgICBhcmUgcmVzcG9uc2libGUgZm9yIGNvbXBsaWFuY2Ugd2l0aCBhbnkgYXBwbGljYWJsZSBsb2NhbCBsYXdzLlxuICAgICAgICAgIElmIHlvdSBkbyBub3QgYWdyZWUgd2l0aCBhbnkgb2YgdGhlc2UgdGVybXMsIHlvdSBhcmUgcHJvaGliaXRlZCBmcm9tIHVzaW5nIG9yXG4gICAgICAgICAgYWNjZXNzaW5nIHRoaXMgc2l0ZS4gVGhlIG1hdGVyaWFscyBjb250YWluZWQgaW4gdGhpcyB3ZWJzaXRlIGFyZSBwcm90ZWN0ZWRcbiAgICAgICAgICBieSBhcHBsaWNhYmxlIGNvcHlyaWdodCBhbmQgdHJhZGUgbWFyayBsYXcuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5EaXNjbGFpbWVyPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBvbiB0aGUgUmVnZ2VzdCB3ZWJzaXRlIGFyZSBwcm92aWRlZCAmcXVvdDthcyBzaG93biZxdW90Oy5cbiAgICAgICAgICBSZWdnZXN0IG1ha2VzIG5vIHdhcnJhbnRpZXMsIGV4cHJlc3NlZCBvciBpbXBsaWVkLCBhbmQgaGVyZWJ5IGRpc2NsYWltc1xuICAgICAgICAgIGFuZCBuZWdhdGVzIGFsbCBvdGhlciB3YXJyYW50aWVzLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uLCBpbXBsaWVkXG4gICAgICAgICAgd2FycmFudGllcyBvciBjb25kaXRpb25zIG9mIG1lcmNoYW50YWJpbGl0eSwgZml0bmVzcyBmb3IgYSBwYXJ0aWN1bGFyXG4gICAgICAgICAgcHVycG9zZSwgb3Igbm9uLWluZnJpbmdlbWVudCBvZiBpbnRlbGxlY3R1YWwgcHJvcGVydHkgb3Igb3RoZXIgdmlvbGF0aW9uIG9mIHJpZ2h0cy5cbiAgICAgICAgICBGdXJ0aGVyLCBSZWdnZXN0IGRvZXMgbm90IHdhcnJhbnQgb3IgbWFrZSBhbnkgcmVwcmVzZW50YXRpb25zIGNvbmNlcm5pbmcgdGhlIGFjY3VyYWN5LFxuICAgICAgICAgIGxpa2VseSByZXN1bHRzLCBvciByZWxpYWJpbGl0eSBvZiB0aGUgdXNlIG9mIHRoZSBtYXRlcmlhbHMgb24gaXRzIGludGVybmV0XG4gICAgICAgICAgd2Vic2l0ZSBvciBvdGhlcndpc2UgcmVsYXRpbmcgdG8gc3VjaCBtYXRlcmlhbHMgb3Igb24gYW55IHNpdGVzIGxpbmtlZCB0byB0aGlzIHNpdGUuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW1pdGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEluIG5vIGV2ZW50IHNoYWxsIFJlZ2dlc3Qgb3IgaXRzIHN1cHBsaWVycyBiZSBsaWFibGUgZm9yIGFueSBkYW1hZ2VzIChpbmNsdWRpbmcsIHdpdGhvdXRcbiAgICAgICAgICBsaW1pdGF0aW9uLCBkYW1hZ2VzIGZvciBsb3NzIG9mIGRhdGEgb3IgcHJvZml0LCBvciBkdWUgdG8gYnVzaW5lc3MgaW50ZXJydXB0aW9uKVxuICAgICAgICAgIGFyaXNpbmcgb3V0IG9mIHRoZSB1c2Ugb3IgaW5hYmlsaXR5IHRvIHVzZSB0aGUgbWF0ZXJpYWxzIG9uIG91ciBpbnRlcm5ldCBzaXRlIG9yXG4gICAgICAgICAgb2ZmZXJlZCBzZXJ2aWNlcywgZXZlbiBpZiB3ZSBvciBhbiBhdXRob3JpemVkIHJlcHJlc2VudGF0aXZlIGhhcyBiZWVuIG5vdGlmaWVkXG4gICAgICAgICAgb3JhbGx5IG9yIGluIHdyaXRpbmcgb2YgdGhlIHBvc3NpYmlsaXR5IG9mIHN1Y2ggZGFtYWdlLiBCZWNhdXNlIHNvbWUganVyaXNkaWN0aW9uc1xuICAgICAgICAgIGRvIG5vdCBhbGxvdyBsaW1pdGF0aW9ucyBvbiBpbXBsaWVkIHdhcnJhbnRpZXMsIG9yIGxpbWl0YXRpb25zIG9mIGxpYWJpbGl0eSBmb3JcbiAgICAgICAgICBjb25zZXF1ZW50aWFsIG9yIGluY2lkZW50YWwgZGFtYWdlcywgdGhlc2UgbGltaXRhdGlvbnMgbWF5IG5vdCBhcHBseSB0byB5b3UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5SZXZpc2lvbnMgYW5kIEVycm9yczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZSBtYXRlcmlhbHMgYXBwZWFyaW5nIG9uIG91ciB3ZWJzaXRlIGNvdWxkIGluY2x1ZGUgdGVjaG5pY2FsLCB0eXBvZ3JhcGhpY2FsLFxuICAgICAgICAgIG9yIHBob3RvZ3JhcGhpYyBlcnJvcnMuIFJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCB0aGF0IGFueSBvZiB0aGUgbWF0ZXJpYWxzIG9uXG4gICAgICAgICAgaXRzIHdlYnNpdGUgYXJlIGFjY3VyYXRlLCBjb21wbGV0ZSwgb3IgY3VycmVudC4gV2UgbWF5IG1ha2UgY2hhbmdlcyB0byB0aGVcbiAgICAgICAgICBtYXRlcmlhbHMgY29udGFpbmVkIG9uIGl0cyB3ZWJzaXRlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+TGlua3M8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBSZWdnZXN0IGhhcyBub3QgcmV2aWV3ZWQgYWxsIG9mIHRoZSBzaXRlcyBsaW5rZWQgdG8gaXRzIGludGVybmV0IHdlYnNpdGVcbiAgICAgICAgICBhbmQgaXMgbm90IHJlc3BvbnNpYmxlIGZvciB0aGUgY29udGVudHMgb2YgYW55IHN1Y2ggbGlua2VkIHNpdGUuXG4gICAgICAgICAgVGhlIGluY2x1c2lvbiBvZiBhbnkgbGluayBkb2VzIG5vdCBpbXBseSBlbmRvcnNlbWVudCBieSB1cyBvZiB0aGUgc2l0ZS5cbiAgICAgICAgICBVc2Ugb2YgYW55IHN1Y2ggbGlua2VkIHdlYnNpdGUgaXMgYXQgdGhlIHVzZXImcXVvdDtzIG93biByaXNrLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R292ZXJuaW5nIExhdzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEFueSBjbGFpbSByZWxhdGluZyB0byB0aGUgUmVnZ2VzdCB3ZWJzaXRlIHNoYWxsIGJlIGdvdmVybmVkIGJ5IHRoZSBsYXdzXG4gICAgICAgICAgb2YgdGhlIGNvdW50cnkgb2Ygbm90ZSB3aXRob3V0IHJlZ2FyZCB0byBpdHMgY29uZmxpY3Qgb2YgbGF3IHByb3Zpc2lvbnMuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5FbmdsaXNoIExhbmd1YWdlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gdGhlIGV2ZW50IG9mIGEgY29uZmxpY3QgYmV0d2VlbiB0aGVzZSBUZXJtcyBhbmQgYSBmb3JlaWduIGxhbmd1YWdlIHZlcnNpb25cbiAgICAgICAgICBvZiBvdXIgVGVybXMgb2YgVXNlLCB0aGUgRW5nbGlzaCBsYW5ndWFnZSB2ZXJzaW9uIG9mIHRoZXNlIFRlcm1zIGdvdmVybnMuXG4gICAgICAgICAgQWxsIGRpc3B1dGVzLCBjbGFpbXMgYW5kIGNhdXNlcyBvZiBhY3Rpb24gKGFuZCByZWxhdGVkIHByb2NlZWRpbmdzKSB3aWxsIGJlXG4gICAgICAgICAgY29tbXVuaWNhdGVkIGluIEVuZ2xpc2guXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Db3B5cmlnaHQgcG9saWN5LCBub3RpY2UgYW5kIGNsYWltIGluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQWxsIG1hdGVyaWFscyBvbiB0aGlzIHNpdGUsIHdoZXRoZXIgc2VwYXJhdGUgb3IgY29tcGlsZWQsIGluY2x1ZGluZyxcbiAgICAgICAgICBidXQgbm90IGxpbWl0ZWQgdG8sIHRleHQsIGdyYXBoaWNzLCBhdWRpbyBjbGlwcywgbG9nb3MsIGJ1dHRvbnMsIGltYWdlcyxcbiAgICAgICAgICBkaWdpdGFsIGRvd25sb2FkcywgZGF0YSBjb21waWxhdGlvbnMsIHNvZnR3YXJlLCBpY29ucywgaHRtbCBjb2RlIGFuZCB4bWwgY29kZSxcbiAgICAgICAgICBhcyB3ZWxsIGFzIGFsbCBjb3B5cmlnaHQsIHBhdGVudCwgdHJhZGVtYXJrLCB0cmFkZSBkcmVzcywgYW5kIG90aGVyIHJpZ2h0c1xuICAgICAgICAgIHRoZXJlaW4sIGFyZSBvd25lZCBvciBsaWNlbnNlZCBieSBSZWdnZXN0IGFuZCBpdHMgdGhpcmQtcGFydHkgaW5mb3JtYXRpb24gcHJvdmlkZXJzLFxuICAgICAgICAgIGFuZCBhcmUgcHJvdGVjdGVkIGJ5IGludGVybmF0aW9uYWwgaW50ZWxsZWN0dWFsIHByb3BlcnR5IGxhd3MuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgPC9vbD5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFRlcm1zQW5kQ29uZGl0aW9ucztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvdGVybXNBbmRDb25kaXRpb25zLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicGFnZUNvbnRlbnRcIjpcIkNvbXBvbmVudHMtc2hhcmVkLXBhZ2VDb250ZW50X19wYWdlQ29udGVudC0td3B1dFdcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wYWdlQ29udGVudC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA2MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFByaXZhY3lQb2xpY3kgZnJvbSAnLi9wcml2YWN5UG9saWN5JztcblxuY29uc3QgUHJpdmFjeVBvbGljeUNvbnRhaW5lciA9IFByaXZhY3lQb2xpY3k7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBQcml2YWN5UG9saWN5Q29udGFpbmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvcHJpdmFjeVBvbGljeUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9zaGFyZWQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vc2hhcmVkL3BhZ2VDb250ZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbXByaW50Lmxlc3MnO1xuXG5jb25zdCBJbXByaW50ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbXByaW50Q29udGVudH0+XG4gICAgICA8aDE+SW1wcmludDwvaDE+XG4gICAgICA8ZGl2PkNvbXBhbnkgTmFtZTogVkFTVCBORVRXT1JLIExURDwvZGl2PlxuICAgICAgPGRpdj5NYW5hZ2luZyBEaXJlY3RvcjogTWFydGluIERhd3NvbjwvZGl2PlxuICAgICAgPGRpdj5BZGRyZXNzOiAyNiBDYWxkZXJWaWV3LCBSYXN0cmljaywgQnJpZ2hvdXNlLCBIRDYzRFEgVW5pdGVkIEtpbmdkb208L2Rpdj5cbiAgICAgIDxkaXY+VGVsZXBob25lOiArKDQ0KTc0NzM1OTEwOTc8L2Rpdj5cbiAgICAgIDxkaXY+RW1haWwgYWRkcmVzczogaW5mb0ByZWdnZXN0LmNvbTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW1wcmludDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvaW1wcmludC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImltcHJpbnRDb250ZW50XCI6XCJDb21wb25lbnRzLWxlZ2FsLWltcHJpbnRfX2ltcHJpbnRDb250ZW50LS0yVE5lT1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvaW1wcmludC5sZXNzXG4vLyBtb2R1bGUgaWQgPSA2NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbXBvc2UsIHdpdGhQcm9wcywgZmxhdHRlblByb3AgfSBmcm9tICdyZWNvbXBvc2UnO1xuXG5pbXBvcnQgRXJyb3JQYWdlIGZyb20gJy4vZXJyb3JQYWdlJztcblxuY29uc3QgY3JlYXRlUHJvcHMgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IHtcbiAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICBjYXNlIDQwNDpcbiAgICAgIHJldHVybiB7IGVycm9yOiAnVGhlIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLicgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgZXJyb3IgfTtcbiAgfVxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcyhjcmVhdGVQcm9wcyksXG4pO1xuXG5jb25zdCBFcnJvclBhZ2VDb250YWluZXIgPSBlbmhhbmNlKEVycm9yUGFnZSk7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgcmVuZGVyOiAoeyBwcm9wcyB9KSA9PiBwcm9wcyAmJiAoXG4gICAgPEVycm9yUGFnZUNvbnRhaW5lclxuICAgICAgc3RhdHVzPXtwYXJzZUludChwcm9wcy5wYXJhbXMuc3RhdHVzLCAxMCl9XG4gICAgICBlcnJvcj17cHJvcHMubG9jYXRpb24uc3RhdGUuZXJyb3J9XG4gICAgLz5cbiAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXJyb3JQYWdlLmxlc3MnO1xuXG5jb25zdCBFcnJvclBhZ2UgPSAoeyBzdGF0dXMsIGVycm9yIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvclBhZ2V9PlxuICAgIDxoMT5FcnJvciB7c3RhdHVzfTwvaDE+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZXJyb3J9XG4gICAgICA8L2Rpdj5cbiAgICAgIFdlIGhhdmUgYmVlbiBub3RpZmllZCBvZiB0aGUgZXJyb3Igwq9cXF8o44OEKV8vwq8uIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRXJyb3JQYWdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cmVkLicsXG59O1xuXG5FcnJvclBhZ2UucHJvcFR5cGVzID0ge1xuICBzdGF0dXM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHF1b3RhdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiZXJyb3JQYWdlXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yUGFnZS0tMWFTLXpcIixcImVycm9yXCI6XCJDb21wb25lbnRzLWVycm9yUGFnZS1lcnJvclBhZ2VfX2Vycm9yLS02MktaQ1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5sZXNzXG4vLyBtb2R1bGUgaWQgPSA2NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBwb3B1cHM6IFtdLFxufTtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdTSE9XX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gWy4uLnN0YXRlLnBvcHVwcywge1xuICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICB0ZXh0OiBhY3Rpb24udGV4dCxcbiAgICAgICAgbWlsbGlzZWNvbmRzVG9TaG93OiBhY3Rpb24ubWlsbGlzZWNvbmRzVG9TaG93LFxuICAgICAgfV07XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlICdISURFX1BPUFVQJzoge1xuICAgICAgY29uc3QgcG9wdXBzID0gc3RhdGUucG9wdXBzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gYWN0aW9uLmluZGV4KTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHBvcHVwcyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvc2hhcmVkL3BvcHVwL3JlZHVjZXIuanMiLCJpbXBvcnQge1xuICBFbnZpcm9ubWVudCxcbiAgTmV0d29yayxcbiAgUmVjb3JkU291cmNlLFxuICBTdG9yZSxcbn0gZnJvbSAncmVsYXktcnVudGltZSc7XG5pbXBvcnQgeyBzZXRFbnZpcm9tZW50IH0gZnJvbSAncmVsYXktY29tcG9zZSc7XG5cbmNvbnN0IGZldGNoUXVlcnkgPSAob3BlcmF0aW9uLCB2YXJpYWJsZXMpID0+XG4gIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogb3BlcmF0aW9uLnRleHQsXG4gICAgICB2YXJpYWJsZXMsXG4gICAgfSksXG4gIH0pLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVsYXkvaXNzdWVzLzE4MTZcbiAgICAgIGlmIChqc29uLmVycm9ycykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoanNvbi5lcnJvcnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgIH0pO1xuXG5jb25zdCBuZXR3b3JrID0gTmV0d29yay5jcmVhdGUoZmV0Y2hRdWVyeSk7XG5jb25zdCBzb3VyY2UgPSBuZXcgUmVjb3JkU291cmNlKCk7XG5jb25zdCBzdG9yZSA9IG5ldyBTdG9yZShzb3VyY2UpO1xuY29uc3QgZW52aXJvbm1lbnQgPSBuZXcgRW52aXJvbm1lbnQoe1xuICBuZXR3b3JrLFxuICBzdG9yZSxcbn0pO1xuXG5zZXRFbnZpcm9tZW50KGVudmlyb25tZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgZW52aXJvbm1lbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
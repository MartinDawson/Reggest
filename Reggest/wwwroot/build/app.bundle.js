webpackJsonp([0],{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(263);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = __webpack_require__(276);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('app'));

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(31);

var _foundRelay = __webpack_require__(292);

var _router = __webpack_require__(412);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(436);

var _store2 = _interopRequireDefault(_store);

var _environment = __webpack_require__(642);

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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createConnectedRouter = __webpack_require__(413);

var _createConnectedRouter2 = _interopRequireDefault(_createConnectedRouter);

var _createRender = __webpack_require__(434);

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

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(22);

var _reduxThunk = __webpack_require__(437);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxForm = __webpack_require__(438);

var _foundReducer = __webpack_require__(604);

var _foundReducer2 = _interopRequireDefault(_foundReducer);

var _Actions = __webpack_require__(133);

var _Actions2 = _interopRequireDefault(_Actions);

var _BrowserProtocol = __webpack_require__(605);

var _BrowserProtocol2 = _interopRequireDefault(_BrowserProtocol);

var _createHistoryEnhancer = __webpack_require__(607);

var _createHistoryEnhancer2 = _interopRequireDefault(_createHistoryEnhancer);

var _queryMiddleware = __webpack_require__(612);

var _queryMiddleware2 = _interopRequireDefault(_queryMiddleware);

var _createMatchEnhancer = __webpack_require__(618);

var _createMatchEnhancer2 = _interopRequireDefault(_createMatchEnhancer);

var _Matcher = __webpack_require__(619);

var _Matcher2 = _interopRequireDefault(_Matcher);

var _routeConfig = __webpack_require__(622);

var _routeConfig2 = _interopRequireDefault(_routeConfig);

var _reducer = __webpack_require__(641);

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

var store = (0, _redux.createStore)(reducers, null, middleWare);

store.dispatch(_Actions2.default.init());

exports.default = store;

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _makeRouteConfig = __webpack_require__(623);

var _makeRouteConfig2 = _interopRequireDefault(_makeRouteConfig);

var _Route = __webpack_require__(627);

var _Route2 = _interopRequireDefault(_Route);

var _fitnessContainer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../fitness/fitnessContainer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _termsAndConditionsContainer = __webpack_require__(628);

var _privacyPolicyContainer = __webpack_require__(630);

var _imprintContainer = __webpack_require__(632);

var _errorPageContainer = __webpack_require__(636);

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

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _termsAndConditions = __webpack_require__(629);

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TermsAndConditionsContainer = _termsAndConditions2.default;

var routeConfig = exports.routeConfig = {
  Component: TermsAndConditionsContainer
};

exports.default = TermsAndConditionsContainer;

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../content/pageContent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _privacyPolicy = __webpack_require__(631);

var _privacyPolicy2 = _interopRequireDefault(_privacyPolicy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivacyPolicyContainer = _privacyPolicy2.default;

var routeConfig = exports.routeConfig = {
  Component: PrivacyPolicyContainer
};

exports.default = PrivacyPolicyContainer;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../content/pageContent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _imprint = __webpack_require__(633);

var _imprint2 = _interopRequireDefault(_imprint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImprintContainer = _imprint2.default;

var routeConfig = exports.routeConfig = {
  Component: ImprintContainer
};

exports.default = ImprintContainer;

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _pageContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../content/pageContent\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _pageContent2 = _interopRequireDefault(_pageContent);

var _imprint = __webpack_require__(634);

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

/***/ 634:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"imprintContent":"Components-legal-imprint__imprintContent--2TNeO"};

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routeConfig = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _recompose = __webpack_require__(637);

var _errorPage = __webpack_require__(639);

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

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _errorPage = __webpack_require__(640);

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

/***/ 640:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"errorPage":"Components-errorPage-errorPage__errorPage--1aS-z","error":"Components-errorPage-errorPage__error--62KZC"};

/***/ }),

/***/ 641:
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

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _relayRuntime = __webpack_require__(14);

var _relayCompose = __webpack_require__(684);

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

},[261]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9hcHBDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sZWdhbC90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sZWdhbC90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sZWdhbC9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGVnYWwvcHJpdmFjeVBvbGljeS5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9sZWdhbC9pbXByaW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvbGVnYWwvaW1wcmludC5sZXNzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9lcnJvclBhZ2UvZXJyb3JQYWdlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9zaGFyZWQvcG9wdXAvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL2FwcC9lbnZpcm9ubWVudC9lbnZpcm9ubWVudC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzb2x2ZXIiLCJBcHAiLCJzdG9yZSIsIlJlbmRlckVycm9yIiwiZXJyb3IiLCJyb3V0ZXIiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJzdGF0dXMiLCJzdGF0ZSIsImRhdGEiLCJwcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJyZW5kZXJFcnJvciIsImhpc3RvcnlFbmhhbmNlciIsInByb3RvY29sIiwibWlkZGxld2FyZXMiLCJtYXRjaGVyRW5oYW5jZXIiLCJtaWRkbGVXYXJlIiwicmVkdWNlcnMiLCJmb3VuZCIsImZvcm0iLCJwb3B1cCIsImRpc3BhdGNoIiwiaW5pdCIsIlRlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lciIsInJvdXRlQ29uZmlnIiwiQ29tcG9uZW50IiwiVGVybXNBbmRDb25kaXRpb25zIiwiUHJpdmFjeVBvbGljeUNvbnRhaW5lciIsIlByaXZhY3lQb2xpY3kiLCJJbXByaW50Q29udGFpbmVyIiwiSW1wcmludCIsImltcHJpbnRDb250ZW50IiwiY3JlYXRlUHJvcHMiLCJlbmhhbmNlIiwiRXJyb3JQYWdlQ29udGFpbmVyIiwicHJvcHMiLCJwYXJzZUludCIsInBhcmFtcyIsImxvY2F0aW9uIiwiRXJyb3JQYWdlIiwiZXJyb3JQYWdlIiwiZGVmYXVsdFByb3BzIiwic3RyaW5nIiwicXVvdGF0aW9uIiwiZGVmYXVsdFN0YXRlIiwicG9wdXBzIiwicmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJpZCIsInRleHQiLCJtaWxsaXNlY29uZHNUb1Nob3ciLCJmaWx0ZXIiLCJfIiwiaSIsImluZGV4IiwiZmV0Y2hRdWVyeSIsIm9wZXJhdGlvbiIsInZhcmlhYmxlcyIsImZldGNoIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJlcnJvcnMiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsIm5ldHdvcmsiLCJjcmVhdGUiLCJzb3VyY2UiLCJlbnZpcm9ubWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLG1CQUFTQSxNQUFULENBQWdCLGtEQUFoQixFQUF5QkMsU0FBU0MsY0FBVCxDQUF3QixLQUF4QixDQUF6QixFOzs7Ozs7Ozs7Ozs7OztBQ0xBOzs7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQyxXQUFXLCtDQUFqQjs7QUFFQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU07QUFBQSxTQUNWO0FBQUE7QUFBQSxNQUFVLHNCQUFWO0FBQ0Usc0RBQVEsY0FBYyxFQUFFQyxzQkFBRixFQUF0QixFQUFpQyxVQUFVRixRQUEzQztBQURGLEdBRFU7QUFBQSxDQUFaOztrQkFNZUMsRzs7Ozs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRSxjQUFjLFNBQWRBLFdBQWMsT0FBdUI7QUFBQSxNQUFwQkMsS0FBb0IsUUFBcEJBLEtBQW9CO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUN6Q0EsU0FBT0MsT0FBUCxDQUFlO0FBQ2JDLDBCQUFvQkgsTUFBTUksTUFEYjtBQUViQyxXQUFPO0FBQ0xMLGFBQU9BLE1BQU1NO0FBRFI7QUFGTSxHQUFmO0FBTUQsQ0FQRDs7QUFTQVAsWUFBWVEsU0FBWixHQUF3QjtBQUN0QlAsU0FBTyxvQkFBVVEsS0FBVixDQUFnQjtBQUNyQkosWUFBUSxvQkFBVUssTUFBVixDQUFpQkM7QUFESixHQUFoQixFQUVKQSxVQUhtQjtBQUl0QlQsVUFBUSxvQkFBVVUsTUFBVixDQUFpQkQ7QUFKSCxDQUF4Qjs7a0JBT2UscUNBQXNCO0FBQ25DakIsVUFBUSw0QkFBYTtBQUNuQm1CLGlCQUFhYjtBQURNLEdBQWI7QUFEMkIsQ0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7QUNwQmY7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztB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LFNBQUwsQ0FBZTtBQUNuQkMsYUFBT1YsVUFBVVAsSUFERTtBQUVuQlE7QUFGbUIsS0FBZjtBQVBVLEdBQWxCLEVBV0dVLElBWEgsQ0FXUTtBQUFBLFdBQVlDLFNBQVNDLElBQVQsRUFBWjtBQUFBLEdBWFIsRUFZR0YsSUFaSCxDQVlRLFVBQUNFLElBQUQsRUFBVTtBQUNkO0FBQ0EsUUFBSUEsS0FBS0MsTUFBVCxFQUFpQjtBQUNmLGFBQU9DLFFBQVFDLE1BQVIsQ0FBZUgsS0FBS0MsTUFBcEIsQ0FBUDtBQUNEOztBQUVELFdBQU9DLFFBQVFFLE9BQVIsQ0FBZ0JKLElBQWhCLENBQVA7QUFDRCxHQW5CSCxDQURpQjtBQUFBLENBQW5COztBQXNCQSxJQUFNSyxVQUFVLHNCQUFRQyxNQUFSLENBQWVwQixVQUFmLENBQWhCO0FBQ0EsSUFBTXFCLFNBQVMsZ0NBQWY7QUFDQSxJQUFNaEYsUUFBUSx3QkFBVWdGLE1BQVYsQ0FBZDtBQUNBLElBQU1DLGNBQWMsOEJBQWdCO0FBQ2xDSCxrQkFEa0M7QUFFbEM5RTtBQUZrQyxDQUFoQixDQUFwQjs7QUFLQSxpQ0FBY2lGLFdBQWQ7O2tCQUVlQSxXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAnO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL2FwcENvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnZm91bmQtcmVsYXknO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGluZy9yb3V0ZXInO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQvZW52aXJvbm1lbnQnO1xuXG5jb25zdCByZXNvbHZlciA9IG5ldyBSZXNvbHZlcihlbnZpcm9ubWVudCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBtYXRjaENvbnRleHQ9e3sgc3RvcmUgfX0gcmVzb2x2ZXI9e3Jlc29sdmVyfSAvPlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvYXBwLmpzIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIgZnJvbSAnZm91bmQvbGliL2NyZWF0ZUNvbm5lY3RlZFJvdXRlcic7XG5pbXBvcnQgY3JlYXRlUmVuZGVyIGZyb20gJ2ZvdW5kL2xpYi9jcmVhdGVSZW5kZXInO1xuXG5jb25zdCBSZW5kZXJFcnJvciA9ICh7IGVycm9yLCByb3V0ZXIgfSkgPT4ge1xuICByb3V0ZXIucmVwbGFjZSh7XG4gICAgcGF0aG5hbWU6IGAvZXJyb3IvJHtlcnJvci5zdGF0dXN9YCxcbiAgICBzdGF0ZToge1xuICAgICAgZXJyb3I6IGVycm9yLmRhdGEsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5SZW5kZXJFcnJvci5wcm9wVHlwZXMgPSB7XG4gIGVycm9yOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHN0YXR1czogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB9KS5pc1JlcXVpcmVkLFxuICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbm5lY3RlZFJvdXRlcih7XG4gIHJlbmRlcjogY3JlYXRlUmVuZGVyKHtcbiAgICByZW5kZXJFcnJvcjogUmVuZGVyRXJyb3IsXG4gIH0pLFxufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvYXBwL3JvdXRpbmcvcm91dGVyLmpzIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHJlZHVjZXIgYXMgZm9ybSB9IGZyb20gJ3JlZHV4LWZvcm0nO1xuaW1wb3J0IGZvdW5kIGZyb20gJ2ZvdW5kL2xpYi9mb3VuZFJlZHVjZXInO1xuaW1wb3J0IEZhcmNlQWN0aW9ucyBmcm9tICdmYXJjZS9saWIvQWN0aW9ucyc7XG5pbXBvcnQgQnJvd3NlclByb3RvY29sIGZyb20gJ2ZhcmNlL2xpYi9Ccm93c2VyUHJvdG9jb2wnO1xuaW1wb3J0IGNyZWF0ZUhpc3RvcnlFbmhhbmNlciBmcm9tICdmYXJjZS9saWIvY3JlYXRlSGlzdG9yeUVuaGFuY2VyJztcbmltcG9ydCBxdWVyeU1pZGRsZXdhcmUgZnJvbSAnZmFyY2UvbGliL3F1ZXJ5TWlkZGxld2FyZSc7XG5pbXBvcnQgY3JlYXRlTWF0Y2hFbmhhbmNlciBmcm9tICdmb3VuZC9saWIvY3JlYXRlTWF0Y2hFbmhhbmNlcic7XG5pbXBvcnQgTWF0Y2hlciBmcm9tICdmb3VuZC9saWIvTWF0Y2hlcic7XG5cbmltcG9ydCByb3V0ZUNvbmZpZyBmcm9tICcuLi9yb3V0aW5nL3JvdXRlQ29uZmlnJztcbmltcG9ydCBwb3B1cCBmcm9tICcuLi8uLi9zaGFyZWQvcG9wdXAvcmVkdWNlcic7XG5cbmNvbnN0IGhpc3RvcnlFbmhhbmNlciA9IGNyZWF0ZUhpc3RvcnlFbmhhbmNlcih7XG4gIHByb3RvY29sOiBuZXcgQnJvd3NlclByb3RvY29sKCksXG4gIG1pZGRsZXdhcmVzOiBbcXVlcnlNaWRkbGV3YXJlXSxcbn0pO1xuXG5jb25zdCBtYXRjaGVyRW5oYW5jZXIgPSBjcmVhdGVNYXRjaEVuaGFuY2VyKFxuICBuZXcgTWF0Y2hlcihyb3V0ZUNvbmZpZyksXG4pO1xuXG5jb25zdCBtaWRkbGVXYXJlID0gY29tcG9zZShcbiAgYXBwbHlNaWRkbGV3YXJlKHRodW5rKSxcbiAgaGlzdG9yeUVuaGFuY2VyLFxuICBtYXRjaGVyRW5oYW5jZXIsXG4pO1xuXG5jb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZvdW5kLFxuICBmb3JtLFxuICBwb3B1cCxcbn0pO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBudWxsLCBtaWRkbGVXYXJlKTtcblxuc3RvcmUuZGlzcGF0Y2goRmFyY2VBY3Rpb25zLmluaXQoKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvc3RvcmUvc3RvcmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IG1ha2VSb3V0ZUNvbmZpZyBmcm9tICdmb3VuZC9saWIvbWFrZVJvdXRlQ29uZmlnJztcbmltcG9ydCBSb3V0ZSBmcm9tICdmb3VuZC9saWIvUm91dGUnO1xuXG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBmaXRuZXNzUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9maXRuZXNzL2ZpdG5lc3NDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgdGVybXNBbmRDb25kaXRpb25zUm91dGVDb25maWcgfSBmcm9tICcuLi8uLi9sZWdhbC90ZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXInO1xuaW1wb3J0IHsgcm91dGVDb25maWcgYXMgcHJpdmFjeVBvbGljeVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vbGVnYWwvcHJpdmFjeVBvbGljeUNvbnRhaW5lcic7XG5pbXBvcnQgeyByb3V0ZUNvbmZpZyBhcyBpbXByaW50Um91dGVDb25maWcgfSBmcm9tICcuLi8uLi9sZWdhbC9pbXByaW50Q29udGFpbmVyJztcbmltcG9ydCB7IHJvdXRlQ29uZmlnIGFzIGVycm9yUGFnZVJvdXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vZXJyb3JQYWdlL2Vycm9yUGFnZUNvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VSb3V0ZUNvbmZpZyhcbiAgPFJvdXRlIHBhdGg9XCIvXCIgey4uLmZpdG5lc3NSb3V0ZUNvbmZpZ30+XG4gICAgPFJvdXRlIHsuLi5maXRuZXNzUm91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJlcnJvci86c3RhdHVzXCIgey4uLmVycm9yUGFnZVJvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwidGVybXNBbmRDb25kaXRpb25zXCIgey4uLnRlcm1zQW5kQ29uZGl0aW9uc1JvdXRlQ29uZmlnfSAvPlxuICAgIDxSb3V0ZSBwYXRoPVwicHJpdmFjeVBvbGljeVwiIHsuLi5wcml2YWN5UG9saWN5Um91dGVDb25maWd9IC8+XG4gICAgPFJvdXRlIHBhdGg9XCJpbXByaW50XCIgey4uLmltcHJpbnRSb3V0ZUNvbmZpZ30gLz5cbiAgPC9Sb3V0ZT4sXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvcm91dGluZy9yb3V0ZUNvbmZpZy5qcyIsImltcG9ydCBUZXJtc0FuZENvbmRpdGlvbnMgZnJvbSAnLi90ZXJtc0FuZENvbmRpdGlvbnMnO1xuXG5jb25zdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIgPSBUZXJtc0FuZENvbmRpdGlvbnM7XG5cbmV4cG9ydCBjb25zdCByb3V0ZUNvbmZpZyA9IHtcbiAgQ29tcG9uZW50OiBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXJtc0FuZENvbmRpdGlvbnNDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xlZ2FsL3Rlcm1zQW5kQ29uZGl0aW9uc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdlQ29udGVudCBmcm9tICcuLi9jb250ZW50L3BhZ2VDb250ZW50JztcblxuY29uc3QgVGVybXNBbmRDb25kaXRpb25zID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgJnF1b3Q7WW91JnF1b3Q7IGFuZCAmcXVvdDt5b3VyJnF1b3Q7IHJlZmVyIHRvIHlvdSwgYXMgYSB1c2VyIG9mIHRoZSBTaXRlLlxuICAgICAgQSAmcXVvdDt1c2VyJnF1b3Q7IGlzIHNvbWVvbmUgd2hvIGFjY2Vzc2VzLGJyb3dzZXMsIGNyYXdscywgc2NyYXBlcywgb3IgaW4gYW55XG4gICAgICB3YXkgdXNlcyB0aGUgU2l0ZS4gJnF1b3Q7V2UsJnF1b3Q7ICZxdW90O3VzLCZxdW90OyBhbmQgJnF1b3Q7b3VyJnF1b3Q7IHJlZmVyIHRvIFJlZ2dlc3QuXG4gICAgICAmcXVvdDtDb250ZW50JnF1b3Q7IG1lYW5zIHRleHQsIGltYWdlcywgcGhvdG9zLCBhdWRpbywgdmlkZW8sIGxvY2F0aW9uIGRhdGEsXG4gICAgICBhbmQgYWxsIG90aGVyIGZvcm1zIG9mIGRhdGEgb3IgY29tbXVuaWNhdGlvbi5cbiAgICAgICZxdW90O1lvdXIgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgeW91IHN1Ym1pdCBvciB0cmFuc21pdCB0bywgdGhyb3VnaCwgb3IgaW5cbiAgICAgIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZSwgc3VjaCBhcyByYXRpbmdzLCByZXZpZXdzLCBjb21wbGltZW50cywgaW52aXRhdGlvbnMsXG4gICAgICBjaGVjay1pbnMsIG1lc3NhZ2VzLCBhbmQgaW5mb3JtYXRpb24gdGhhdCB5b3UgcHVibGljbHkgZGlzcGxheSBvciBkaXNwbGF5ZWQgaW5cbiAgICAgIHlvdXIgYWNjb3VudCBwcm9maWxlLlxuICAgICAgJnF1b3Q7VXNlciBDb250ZW50JnF1b3Q7IG1lYW5zIENvbnRlbnQgdGhhdCB1c2VycyBzdWJtaXQgb3IgdHJhbnNtaXQgdG8sIHRocm91Z2gsXG4gICAgICBvciBpbiBjb25uZWN0aW9uIHdpdGggdGhlIFNpdGUuICZxdW90O1JlZ2dlc3QgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXRcbiAgICAgIHdlIGNyZWF0ZSBhbmQgbWFrZSBhdmFpbGFibGUgaW4gY29ubmVjdGlvbiB3aXRoIHRoZSBTaXRlLlxuICAgICAgJnF1b3Q7VGhpcmQgUGFydHkgQ29udGVudCZxdW90OyBtZWFucyBDb250ZW50IHRoYXQgb3JpZ2luYXRlcyBmcm9tIHBhcnRpZXMgb3RoZXJcbiAgICAgIHRoYW4gUmVnZ2VzdCBvciBpdHMgdXNlcnMsIHdoaWNoIGlzIG1hZGUgYXZhaWxhYmxlIGluIGNvbm5lY3Rpb24gd2l0aCB0aGUgU2l0ZS5cbiAgICAgICZxdW90O1NpdGUgQ29udGVudCZxdW90OyBtZWFucyBhbGwgb2YgdGhlIENvbnRlbnQgdGhhdCBpcyBtYWRlIGF2YWlsYWJsZSBpbiBjb25uZWN0aW9uXG4gICAgICB3aXRoIHRoZSBTaXRlLCBpbmNsdWRpbmcgWW91ciBDb250ZW50LCBVc2VyIENvbnRlbnQsIFRoaXJkIFBhcnR5IENvbnRlbnQsXG4gICAgICBhbmQgUmVnZ2VzdCBDb250ZW50LlxuICAgIDwvcD5cbiAgICA8b2w+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UZXJtczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJ5IGFjY2Vzc2luZyB0aGlzIHdlYnNpdGUsIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnkgdGhlc2Ugd2Vic2l0ZSBUZXJtc1xuICAgICAgICAgIGFuZCBDb25kaXRpb25zIG9mIFVzZSwgYWxsIGFwcGxpY2FibGUgbGF3cyBhbmQgcmVndWxhdGlvbnMsIGFuZCBhZ3JlZSB0aGF0IHlvdVxuICAgICAgICAgIGFyZSByZXNwb25zaWJsZSBmb3IgY29tcGxpYW5jZSB3aXRoIGFueSBhcHBsaWNhYmxlIGxvY2FsIGxhd3MuXG4gICAgICAgICAgSWYgeW91IGRvIG5vdCBhZ3JlZSB3aXRoIGFueSBvZiB0aGVzZSB0ZXJtcywgeW91IGFyZSBwcm9oaWJpdGVkIGZyb20gdXNpbmcgb3JcbiAgICAgICAgICBhY2Nlc3NpbmcgdGhpcyBzaXRlLiBUaGUgbWF0ZXJpYWxzIGNvbnRhaW5lZCBpbiB0aGlzIHdlYnNpdGUgYXJlIHByb3RlY3RlZFxuICAgICAgICAgIGJ5IGFwcGxpY2FibGUgY29weXJpZ2h0IGFuZCB0cmFkZSBtYXJrIGxhdy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRpc2NsYWltZXI8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgbWF0ZXJpYWxzIG9uIHRoZSBSZWdnZXN0IHdlYnNpdGUgYXJlIHByb3ZpZGVkICZxdW90O2FzIHNob3duJnF1b3Q7LlxuICAgICAgICAgIFJlZ2dlc3QgbWFrZXMgbm8gd2FycmFudGllcywgZXhwcmVzc2VkIG9yIGltcGxpZWQsIGFuZCBoZXJlYnkgZGlzY2xhaW1zXG4gICAgICAgICAgYW5kIG5lZ2F0ZXMgYWxsIG90aGVyIHdhcnJhbnRpZXMsIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24sIGltcGxpZWRcbiAgICAgICAgICB3YXJyYW50aWVzIG9yIGNvbmRpdGlvbnMgb2YgbWVyY2hhbnRhYmlsaXR5LCBmaXRuZXNzIGZvciBhIHBhcnRpY3VsYXJcbiAgICAgICAgICBwdXJwb3NlLCBvciBub24taW5mcmluZ2VtZW50IG9mIGludGVsbGVjdHVhbCBwcm9wZXJ0eSBvciBvdGhlciB2aW9sYXRpb24gb2YgcmlnaHRzLlxuICAgICAgICAgIEZ1cnRoZXIsIFJlZ2dlc3QgZG9lcyBub3Qgd2FycmFudCBvciBtYWtlIGFueSByZXByZXNlbnRhdGlvbnMgY29uY2VybmluZyB0aGUgYWNjdXJhY3ksXG4gICAgICAgICAgbGlrZWx5IHJlc3VsdHMsIG9yIHJlbGlhYmlsaXR5IG9mIHRoZSB1c2Ugb2YgdGhlIG1hdGVyaWFscyBvbiBpdHMgaW50ZXJuZXRcbiAgICAgICAgICB3ZWJzaXRlIG9yIG90aGVyd2lzZSByZWxhdGluZyB0byBzdWNoIG1hdGVyaWFscyBvciBvbiBhbnkgc2l0ZXMgbGlua2VkIHRvIHRoaXMgc2l0ZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkxpbWl0YXRpb25zPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgSW4gbm8gZXZlbnQgc2hhbGwgUmVnZ2VzdCBvciBpdHMgc3VwcGxpZXJzIGJlIGxpYWJsZSBmb3IgYW55IGRhbWFnZXMgKGluY2x1ZGluZywgd2l0aG91dFxuICAgICAgICAgIGxpbWl0YXRpb24sIGRhbWFnZXMgZm9yIGxvc3Mgb2YgZGF0YSBvciBwcm9maXQsIG9yIGR1ZSB0byBidXNpbmVzcyBpbnRlcnJ1cHRpb24pXG4gICAgICAgICAgYXJpc2luZyBvdXQgb2YgdGhlIHVzZSBvciBpbmFiaWxpdHkgdG8gdXNlIHRoZSBtYXRlcmlhbHMgb24gb3VyIGludGVybmV0IHNpdGUgb3JcbiAgICAgICAgICBvZmZlcmVkIHNlcnZpY2VzLCBldmVuIGlmIHdlIG9yIGFuIGF1dGhvcml6ZWQgcmVwcmVzZW50YXRpdmUgaGFzIGJlZW4gbm90aWZpZWRcbiAgICAgICAgICBvcmFsbHkgb3IgaW4gd3JpdGluZyBvZiB0aGUgcG9zc2liaWxpdHkgb2Ygc3VjaCBkYW1hZ2UuIEJlY2F1c2Ugc29tZSBqdXJpc2RpY3Rpb25zXG4gICAgICAgICAgZG8gbm90IGFsbG93IGxpbWl0YXRpb25zIG9uIGltcGxpZWQgd2FycmFudGllcywgb3IgbGltaXRhdGlvbnMgb2YgbGlhYmlsaXR5IGZvclxuICAgICAgICAgIGNvbnNlcXVlbnRpYWwgb3IgaW5jaWRlbnRhbCBkYW1hZ2VzLCB0aGVzZSBsaW1pdGF0aW9ucyBtYXkgbm90IGFwcGx5IHRvIHlvdS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPlJldmlzaW9ucyBhbmQgRXJyb3JzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhlIG1hdGVyaWFscyBhcHBlYXJpbmcgb24gb3VyIHdlYnNpdGUgY291bGQgaW5jbHVkZSB0ZWNobmljYWwsIHR5cG9ncmFwaGljYWwsXG4gICAgICAgICAgb3IgcGhvdG9ncmFwaGljIGVycm9ycy4gUmVnZ2VzdCBkb2VzIG5vdCB3YXJyYW50IHRoYXQgYW55IG9mIHRoZSBtYXRlcmlhbHMgb25cbiAgICAgICAgICBpdHMgd2Vic2l0ZSBhcmUgYWNjdXJhdGUsIGNvbXBsZXRlLCBvciBjdXJyZW50LiBXZSBtYXkgbWFrZSBjaGFuZ2VzIHRvIHRoZVxuICAgICAgICAgIG1hdGVyaWFscyBjb250YWluZWQgb24gaXRzIHdlYnNpdGUgYXQgYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5MaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFJlZ2dlc3QgaGFzIG5vdCByZXZpZXdlZCBhbGwgb2YgdGhlIHNpdGVzIGxpbmtlZCB0byBpdHMgaW50ZXJuZXQgd2Vic2l0ZVxuICAgICAgICAgIGFuZCBpcyBub3QgcmVzcG9uc2libGUgZm9yIHRoZSBjb250ZW50cyBvZiBhbnkgc3VjaCBsaW5rZWQgc2l0ZS5cbiAgICAgICAgICBUaGUgaW5jbHVzaW9uIG9mIGFueSBsaW5rIGRvZXMgbm90IGltcGx5IGVuZG9yc2VtZW50IGJ5IHVzIG9mIHRoZSBzaXRlLlxuICAgICAgICAgIFVzZSBvZiBhbnkgc3VjaCBsaW5rZWQgd2Vic2l0ZSBpcyBhdCB0aGUgdXNlciZxdW90O3Mgb3duIHJpc2suXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5Hb3Zlcm5pbmcgTGF3PC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW55IGNsYWltIHJlbGF0aW5nIHRvIHRoZSBSZWdnZXN0IHdlYnNpdGUgc2hhbGwgYmUgZ292ZXJuZWQgYnkgdGhlIGxhd3NcbiAgICAgICAgICBvZiB0aGUgY291bnRyeSBvZiBub3RlIHdpdGhvdXQgcmVnYXJkIHRvIGl0cyBjb25mbGljdCBvZiBsYXcgcHJvdmlzaW9ucy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkVuZ2xpc2ggTGFuZ3VhZ2U8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJbiB0aGUgZXZlbnQgb2YgYSBjb25mbGljdCBiZXR3ZWVuIHRoZXNlIFRlcm1zIGFuZCBhIGZvcmVpZ24gbGFuZ3VhZ2UgdmVyc2lvblxuICAgICAgICAgIG9mIG91ciBUZXJtcyBvZiBVc2UsIHRoZSBFbmdsaXNoIGxhbmd1YWdlIHZlcnNpb24gb2YgdGhlc2UgVGVybXMgZ292ZXJucy5cbiAgICAgICAgICBBbGwgZGlzcHV0ZXMsIGNsYWltcyBhbmQgY2F1c2VzIG9mIGFjdGlvbiAoYW5kIHJlbGF0ZWQgcHJvY2VlZGluZ3MpIHdpbGwgYmVcbiAgICAgICAgICBjb21tdW5pY2F0ZWQgaW4gRW5nbGlzaC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkNvcHlyaWdodCBwb2xpY3ksIG5vdGljZSBhbmQgY2xhaW0gaW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBBbGwgbWF0ZXJpYWxzIG9uIHRoaXMgc2l0ZSwgd2hldGhlciBzZXBhcmF0ZSBvciBjb21waWxlZCwgaW5jbHVkaW5nLFxuICAgICAgICAgIGJ1dCBub3QgbGltaXRlZCB0bywgdGV4dCwgZ3JhcGhpY3MsIGF1ZGlvIGNsaXBzLCBsb2dvcywgYnV0dG9ucywgaW1hZ2VzLFxuICAgICAgICAgIGRpZ2l0YWwgZG93bmxvYWRzLCBkYXRhIGNvbXBpbGF0aW9ucywgc29mdHdhcmUsIGljb25zLCBodG1sIGNvZGUgYW5kIHhtbCBjb2RlLFxuICAgICAgICAgIGFzIHdlbGwgYXMgYWxsIGNvcHlyaWdodCwgcGF0ZW50LCB0cmFkZW1hcmssIHRyYWRlIGRyZXNzLCBhbmQgb3RoZXIgcmlnaHRzXG4gICAgICAgICAgdGhlcmVpbiwgYXJlIG93bmVkIG9yIGxpY2Vuc2VkIGJ5IFJlZ2dlc3QgYW5kIGl0cyB0aGlyZC1wYXJ0eSBpbmZvcm1hdGlvbiBwcm92aWRlcnMsXG4gICAgICAgICAgYW5kIGFyZSBwcm90ZWN0ZWQgYnkgaW50ZXJuYXRpb25hbCBpbnRlbGxlY3R1YWwgcHJvcGVydHkgbGF3cy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgVGVybXNBbmRDb25kaXRpb25zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sZWdhbC90ZXJtc0FuZENvbmRpdGlvbnMuanMiLCJpbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICcuL3ByaXZhY3lQb2xpY3knO1xuXG5jb25zdCBQcml2YWN5UG9saWN5Q29udGFpbmVyID0gUHJpdmFjeVBvbGljeTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlQ29uZmlnID0ge1xuICBDb21wb25lbnQ6IFByaXZhY3lQb2xpY3lDb250YWluZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcml2YWN5UG9saWN5Q29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9sZWdhbC9wcml2YWN5UG9saWN5Q29udGFpbmVyLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4uL2NvbnRlbnQvcGFnZUNvbnRlbnQnO1xuXG5jb25zdCBQcml2YWN5UG9saWN5ID0gKCkgPT4gKFxuICA8UGFnZUNvbnRlbnQ+XG4gICAgPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cbiAgICA8aDI+TGFzdCBVcGRhdGVkOiBBcHJpbCAxNHRoIDIwMTg8L2gyPlxuICAgIDxwPlxuICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYmVlbiBjb21waWxlZCB0byBiZXR0ZXIgc2VydmUgdGhvc2Ugd2hvIGFyZSBjb25jZXJuZWQgd2l0aCBob3cgdGhlaXJcbiAgICAgICZhcG9zO1BlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uJmFwb3M7IChQSUkpIGlzIGJlaW5nIHVzZWQgb25saW5lLlxuICAgICAgUElJLCBhcyBkZXNjcmliZWQgaW4gVVMgcHJpdmFjeSBsYXcgYW5kIGluZm9ybWF0aW9uIHNlY3VyaXR5LCBpcyBpbmZvcm1hdGlvbiB0aGF0IGNhbiBiZSB1c2VkXG4gICAgICBvbiBpdHMgb3duIG9yIHdpdGggb3RoZXIgaW5mb3JtYXRpb24gdG8gaWRlbnRpZnksIGNvbnRhY3QsIG9yIGxvY2F0ZSBhIHNpbmdsZSBwZXJzb24sIG9yIHRvXG4gICAgICBpZGVudGlmeSBhbiBpbmRpdmlkdWFsIGluIGNvbnRleHQuIFBsZWFzZSByZWFkIG91ciBwcml2YWN5IHBvbGljeSBjYXJlZnVsbHkgdG8gZ2V0IGEgY2xlYXJcbiAgICAgIHVuZGVyc3RhbmRpbmcgb2YgaG93IHdlIGNvbGxlY3QsIHVzZSwgcHJvdGVjdCBvciBvdGhlcndpc2UgaGFuZGxlXG4gICAgICB5b3VyIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGluIGFjY29yZGFuY2Ugd2l0aCBvdXIgd2Vic2l0ZS5cbiAgICA8L3A+XG4gICAgPG9sPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+V2hhdCBwZXJzb25hbCBpbmZvcm1hdGlvbiBkbyB3ZSBjb2xsZWN0PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdoZW4gcmVnaXN0ZXJpbmcgZm9yIG91ciBuZXdzbGV0dGVyLCB5b3Ugd2lsbCBiZSBhc2tlZCB0byBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MuXG4gICAgICAgICAgVGhpcyBpcyB0byBoZWxwIHVzIGluZGVudGlmeSB5b3UgYW5kIGtlZXAgeW91IHVwZGF0ZWQuIFdlIHdpbGwgbm90IHNlbmQgeW91IGFueSBlbWFpbHMgdGhhdCB5b3VcbiAgICAgICAgICBkbyBub3QgcmVxdWVzdC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldoZW4gZG8gd2UgY29sbGVjdCBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBjb2xsZWN0IGNlcnRhaW4gaW5mb3JtYXRpb24gZnJvbSB5b3Ugd2hlbiB5b3UgcmVnaXN0ZXIgZm9yIG91ciBuZXdzbGV0dGVyLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+SG93IGRvIHdlIHByb3RlY3QgeW91ciBpbmZvcm1hdGlvbj88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBXZSBkbyBub3QgdXNlIHZ1bG5lcmFiaWxpdHkgc2Nhbm5pbmcgYW5kL29yIHNjYW5uaW5nIHRvIFBDSSBzdGFuZGFyZHMuXG4gICAgICAgICAgV2UgbmV2ZXIgYXNrIGZvciBjcmVkaXQgY2FyZCBudW1iZXJzLiBXZSB1c2UgcmVndWxhciBNYWx3YXJlIFNjYW5uaW5nLlxuICAgICAgICAgIFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgY29udGFpbmVkIGJlaGluZCBzZWN1cmVkIG5ldHdvcmtzIGFuZCBpcyBvbmx5IGFjY2Vzc2libGVcbiAgICAgICAgICBieSBhIGxpbWl0ZWQgbnVtYmVyIG9mIHBlcnNvbnMgd2hvIGhhdmUgc3BlY2lhbCBhY2Nlc3MgcmlnaHRzIHRvIHN1Y2ggc3lzdGVtcywgYW5kIGFyZVxuICAgICAgICAgIHJlcXVpcmVkIHRvIGtlZXAgdGhlIGluZm9ybWF0aW9uIGNvbmZpZGVudGlhbC4gSW4gYWRkaXRpb24sIGFsbCBzZW5zaXRpdmUgaW5mb3JtYXRpb25cbiAgICAgICAgICB5b3Ugc3VwcGx5IGlzIGVuY3J5cHRlZCB2aWEgU2VjdXJlIFNvY2tldCBMYXllciAoU1NMKSB0ZWNobm9sb2d5LlxuICAgICAgICAgIFdlIGltcGxlbWVudCBhIHZhcmlldHkgb2Ygc2VjdXJpdHkgbWVhc3VyZXMgd2hlbiBhIHVzZXIgZW50ZXJzLCBzdWJtaXRzLCBvciBhY2Nlc3NlcyB0aGVpclxuICAgICAgICAgIGluZm9ybWF0aW9uIHRvIG1haW50YWluIHRoZSBzYWZldHkgb2YgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvIHdlIHVzZSAmYXBvcztjb29raWVzJmFwb3M7PzwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFllcy4gQ29va2llcyBhcmUgc21hbGwgZmlsZXMgdGhhdCBhIHNpdGUgb3IgaXRzIHNlcnZpY2UgcHJvdmlkZXIgdHJhbnNmZXJzIHRvIHlvdXJcbiAgICAgICAgICBjb21wdXRlciZhcG9zO3MgaGFyZCBkcml2ZSB0aHJvdWdoIHlvdXIgV2ViIGJyb3dzZXIgdGhhdCBlbmFibGVzIHRoZVxuICAgICAgICAgIHNpdGUmYXBvcztzIG9yIHNlcnZpY2UgcHJvdmlkZXImYXBvcztzIHN5c3RlbXMgdG8gcmVjb2duaXplIHlvdXIgYnJvd3NlciBhbmQgY2FwdHVyZVxuICAgICAgICAgIGFuZCByZW1lbWJlciBjZXJ0YWluIGluZm9ybWF0aW9uLiBUaGV5IGFyZSB1c2VkIHRvIGhlbHAgdXMgdW5kZXJzdGFuZCB5b3VyIHByZWZlcmVuY2VzXG4gICAgICAgICAgYmFzZWQgb24gcHJldmlvdXMgb3IgY3VycmVudCBzaXRlIGFjdGl2aXR5LCB3aGljaCBlbmFibGVzIHVzIHRvIHByb3ZpZGVcbiAgICAgICAgICB5b3Ugd2l0aCBpbXByb3ZlZCBzZXJ2aWNlcy4gV2UgYWxzbyB1c2UgY29va2llcyB0byBoZWxwIHVzIGNvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXRcbiAgICAgICAgICBzaXRlIHRyYWZmaWMgYW5kIHNpdGUgaW50ZXJhY3Rpb24gc28gdGhhdCB3ZSBjYW4gb2ZmZXIgYmV0dGVyIHNpdGVcbiAgICAgICAgICBleHBlcmllbmNlcyBhbmQgdG9vbHMgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPldlIHVzZSBjb29raWVzIHRvOjwvaDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+VW5kZXJzdGFuZCBhbmQgc2F2ZSB1c2VyJmFwb3M7cyBwcmVmZXJlbmNlcyBmb3IgZnV0dXJlIHZpc2l0cy48L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIENvbXBpbGUgYWdncmVnYXRlIGRhdGEgYWJvdXQgc2l0ZSB0cmFmZmljIGFuZCBzaXRlIGludGVyYWN0aW9uc1xuICAgICAgICAgICAgaW4gb3JkZXIgdG8gb2ZmZXIgYmV0dGVyIHNpdGUgZXhwZXJpZW5jZXMgYW5kIHRvb2xzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICBXZSBtYXkgYWxzbyB1c2UgdHJ1c3RlZCB0aGlyZC1wYXJ0eSBzZXJ2aWNlcyB0aGF0IHRyYWNrIHRoaXNcbiAgICAgICAgICAgIGluZm9ybWF0aW9uIG9uIG91ciBiZWhhbGZcbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8cD5cbiAgICAgICAgICBDb29raWVzIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiBvdXIgd2Vic2l0ZSBhbmQgdGhlIHdlYnNpdGUgd2lsbCBub3Qgd29ya1xuICAgICAgICAgIHdpdGhvdXQgaGF2aW5nIHRoZW0gZW5hYmxlZC4gQnkgdXNpbmcgb3VyIHNpdGUgeW91IGFsbG93IHVzIHRvIHVzZSBjb29raWVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+VGhpcmQtcGFydHkgZGlzY2xvc3VyZTwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFdlIGRvIG5vdCBzZWxsLCB0cmFkZSwgb3Igb3RoZXJ3aXNlIHRyYW5zZmVyIHRvIG91dHNpZGVcbiAgICAgICAgICBwYXJ0aWVzIHlvdXIgUGVyc29uYWxseSBJZGVudGlmaWFibGUgSW5mb3JtYXRpb24uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5UaGlyZC1wYXJ0eSBsaW5rczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoZXJlIG1heSBiZSB0aGlyZC1wYXJ0eSBsaW5rcyB0byByYWRpbyBzdGF0aW9uIHdlYnNpdGVzIHRocm91Z2hvdXQgb3VyXG4gICAgICAgICAgd2Vic2l0ZS4gVGhlc2UgdGhpcmQtcGFydHkgc2l0ZXMgaGF2ZSBzZXBhcmF0ZSBhbmQgaW5kZXBlbmRlbnQgcHJpdmFjeSBwb2xpY2llcy5cbiAgICAgICAgICBXZSB0aGVyZWZvcmUgaGF2ZSBubyByZXNwb25zaWJpbGl0eSBvciBsaWFiaWxpdHkgZm9yIHRoZSBjb250ZW50IGFuZFxuICAgICAgICAgIGFjdGl2aXRpZXMgb2YgdGhlc2UgbGlua2VkIHNpdGVzLiBOb25ldGhlbGVzcywgd2Ugc2VlayB0byBwcm90ZWN0XG4gICAgICAgICAgdGhlIGludGVncml0eSBvZiBvdXIgc2l0ZSBhbmQgd2VsY29tZSBhbnkgZmVlZGJhY2sgYWJvdXQgdGhlc2Ugc2l0ZXMuXG4gICAgICAgICAgQW55IGxpbmsgb24gb3VyIHNpdGUgdG8gYSB0aGlyZCBwYXJ0IHdlYnNpdGUgdGhhdCBpcyBub3QgcmVsZXZhbnRcbiAgICAgICAgICBvciBpZiB3ZSBkZWVtIGl0IGluYXBwcm9wcmlhdGUsIG1heSBiZSByZW1vdmVkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+R29vZ2xlPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgR29vZ2xlJmFwb3M7cyBhZHZlcnRpc2luZyByZXF1aXJlbWVudHMgY2FuIGJlIHN1bW1lZCB1cCBieVxuICAgICAgICAgIEdvb2dsZSZhcG9zO3MgQWR2ZXJ0aXNpbmcgUHJpbmNpcGxlcy4gVGhleSBhcmUgcHV0IGluIHBsYWNlIHRvXG4gICAgICAgICAgcHJvdmlkZSBhIHBvc2l0aXZlIGV4cGVyaWVuY2UgZm9yIHVzZXJzLiBodHRwczovL3N1cHBvcnQuZ29vZ2xlLmNvbS9hZHdvcmRzcG9saWN5L2Fuc3dlci8xMzE2NTQ4P2hsPWVuXG5cbiAgICAgICAgICBXZSBoYXZlIG5vdCBlbmFibGVkIEdvb2dsZSBBZFNlbnNlIG9uIG91ciBzaXRlLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+Q2FsaWZvcm5pYSBPbmxpbmUgUHJpdmFjeSBQcm90ZWN0aW9uIEFjdDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIENhbE9QUEEgaXMgdGhlIGZpcnN0IHN0YXRlIGxhdyBpbiB0aGUgbmF0aW9uIHRvIHJlcXVpcmUgY29tbWVyY2lhbFxuICAgICAgICAgIHdlYnNpdGVzIGFuZCBvbmxpbmUgc2VydmljZXMgdG8gcG9zdCBhIHByaXZhY3kgcG9saWN5LlxuICAgICAgICAgIFRoZSBsYXcmYXBvcztzIHJlYWNoIHN0cmV0Y2hlcyB3ZWxsIGJleW9uZCBDYWxpZm9ybmlhIHRvIHJlcXVpcmUgYW55IHBlcnNvbiBvciBjb21wYW55XG4gICAgICAgICAgaW4gdGhlIFVuaXRlZCBTdGF0ZXMgKGFuZCBjb25jZWl2YWJseSB0aGUgd29ybGQpIHRoYXQgb3BlcmF0ZXMgd2Vic2l0ZXMgY29sbGVjdGluZ1xuICAgICAgICAgIFBlcnNvbmFsbHkgSWRlbnRpZmlhYmxlIEluZm9ybWF0aW9uIGZyb20gQ2FsaWZvcm5pYSBjb25zdW1lcnMgdG8gcG9zdCBhIGNvbnNwaWN1b3VzXG4gICAgICAgICAgcHJpdmFjeSBwb2xpY3kgb24gaXRzIHdlYnNpdGUgc3RhdGluZyBleGFjdGx5IHRoZSBpbmZvcm1hdGlvbiBiZWluZyBjb2xsZWN0ZWQgYW5kXG4gICAgICAgICAgdGhvc2UgaW5kaXZpZHVhbHMgb3IgY29tcGFuaWVzIHdpdGggd2hvbSBpdCBpcyBiZWluZyBzaGFyZWQuIC0gU2VlIG1vcmUgYXQ6XG4gICAgICAgICAgaHR0cDovL2NvbnN1bWVyY2FsLm9yZy9jYWxpZm9ybmlhLW9ubGluZS1wcml2YWN5LXByb3RlY3Rpb24tYWN0LWNhbG9wcGEvI3N0aGFzaC4wRmRSYlQ1MS5kcHVmXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5BY2NvcmRpbmcgdG8gQ2FsT1BQQSwgd2UgYWdyZWUgdG8gdGhlIGZvbGxvd2luZzo8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBVc2VycyBjYW4gdmlzaXQgb3VyIHNpdGUgYW5vbnltb3VzbHkuXG4gICAgICAgICAgVGhpcyBwcml2YWN5IHBvbGljeSBoYXMgYSBsaW5rIHRvIGl0IGZyb20gb3VyIGhvbWUgcGFnZSBpbiB0aGUgaGVhZGVyLlxuICAgICAgICAgIE91ciBQcml2YWN5IFBvbGljeSBsaW5rIGluY2x1ZGVzIHRoZSB3b3JkICZhcG9zO1ByaXZhY3kmYXBvczsgYW5kIGNhbiBlYXNpbHlcbiAgICAgICAgICBiZSBmb3VuZCBvbiB0aGUgcGFnZSBzcGVjaWZpZWQgYWJvdmUuXG5cbiAgICAgICAgICBZb3Ugd2lsbCBiZSBub3RpZmllZCBvZiBhbnkgUHJpdmFjeSBQb2xpY3kgY2hhbmdlczpcbiAgICAgICAgICAgICAgICDigKIgT24gb3VyIFByaXZhY3kgUG9saWN5IFBhZ2VcbiAgICAgICAgICBDYW4gY2hhbmdlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb246XG4gICAgICAgICAgICAgICAg4oCiIFRocm91Z2ggb3VyIHdlYnNpdGVcbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGgyPkRvZXMgb3VyIHNpdGUgYWxsb3cgdGhpcmQtcGFydHkgYmVoYXZpb3JhbCB0cmFja2luZz88L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBJdCZhcG9zO3MgaW1wb3J0YW50IHRvIG5vdGUgdGhhdCB3ZSBhbGxvdyB0aGlyZC1wYXJ0eSBiZWhhdmlvcmFsIHRyYWNraW5nXG4gICAgICAgIDwvcD5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxoMj5DT1BQQSAoQ2hpbGRyZW4gT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgV2hlbiBpdCBjb21lcyB0byB0aGUgY29sbGVjdGlvbiBvZiBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIGNoaWxkcmVuXG4gICAgICAgICAgdW5kZXIgdGhlIGFnZSBvZiAxMyB5ZWFycyBvbGQsIHRoZSBDaGlsZHJlbiZhcG9zO3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvblxuICAgICAgICAgIEFjdCAoQ09QUEEpIHB1dHMgcGFyZW50cyBpbiBjb250cm9sLiBUaGUgRmVkZXJhbCBUcmFkZSBDb21taXNzaW9uLCBVbml0ZWQgU3RhdGVzJmFwb3M7XG4gICAgICAgICAgY29uc3VtZXIgcHJvdGVjdGlvbiBhZ2VuY3ksIGVuZm9yY2VzIHRoZSBDT1BQQSBSdWxlLCB3aGljaCBzcGVsbHMgb3V0IHdoYXRcbiAgICAgICAgICBvcGVyYXRvcnMgb2Ygd2Vic2l0ZXMgYW5kIG9ubGluZSBzZXJ2aWNlcyBtdXN0IGRvIHRvIHByb3RlY3QgY2hpbGRyZW4mYXBvcztzXG4gICAgICAgICAgcHJpdmFjeSBhbmQgc2FmZXR5IG9ubGluZS5cblxuICAgICAgICAgIFdlIGRvIG5vdCBzcGVjaWZpY2FsbHkgbWFya2V0IHRvIGNoaWxkcmVuIHVuZGVyIHRoZSBhZ2Ugb2YgMTMgeWVhcnMgb2xkLlxuICAgICAgICA8L3A+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8aDI+RmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgRmFpciBJbmZvcm1hdGlvbiBQcmFjdGljZXMgUHJpbmNpcGxlcyBmb3JtIHRoZSBiYWNrYm9uZSBvZiBwcml2YWN5XG4gICAgICAgICAgbGF3IGluIHRoZSBVbml0ZWQgU3RhdGVzIGFuZCB0aGUgY29uY2VwdHMgdGhleSBpbmNsdWRlIGhhdmUgcGxheWVkIGEgc2lnbmlmaWNhbnRcbiAgICAgICAgICByb2xlIGluIHRoZSBkZXZlbG9wbWVudCBvZiBkYXRhIHByb3RlY3Rpb24gbGF3cyBhcm91bmQgdGhlIGdsb2JlLiBVbmRlcnN0YW5kaW5nXG4gICAgICAgICAgdGhlIEZhaXIgSW5mb3JtYXRpb24gUHJhY3RpY2UgUHJpbmNpcGxlcyBhbmQgaG93IHRoZXkgc2hvdWxkIGJlIGltcGxlbWVudGVkIGlzXG4gICAgICAgICAgY3JpdGljYWwgdG8gY29tcGx5IHdpdGggdGhlIHZhcmlvdXMgcHJpdmFjeSBsYXdzIHRoYXQgcHJvdGVjdCBwZXJzb25hbCBpbmZvcm1hdGlvbi5cblxuICAgICAgICAgIEluIG9yZGVyIHRvIGJlIGluIGxpbmUgd2l0aCBGYWlyIEluZm9ybWF0aW9uIFByYWN0aWNlcyB3ZSB3aWxsIHRha2UgdGhlXG4gICAgICAgICAgZm9sbG93aW5nIHJlc3BvbnNpdmUgYWN0aW9uLCBzaG91bGQgYSBkYXRhIGJyZWFjaCBvY2N1cjpcblxuICAgICAgICAgIFdlIHdpbGwgbm90aWZ5IHlvdSB2aWEgZW1haWwgd2l0aGluIDcgYnVzaW5lc3MgZGF5cy4gV2Ugd2lsbCBhbHNvXG4gICAgICAgICAgbm90aWZ5IHVzZXJzIHZpYSBhbiBpbi1zaXRlIG5vdGlmaWNhdGlvbiBvbiB0aGUgaG9tZSBwYWdlIHdpdGhpbiA3IGJ1c2luZXNzIGRheXMuXG5cbiAgICAgICAgICBXZSBhbHNvIGFncmVlIHRvIHRoZSBJbmRpdmlkdWFsIFJlZHJlc3MgUHJpbmNpcGxlIHdoaWNoIHJlcXVpcmVzIHRoYXQgaW5kaXZpZHVhbHNcbiAgICAgICAgICBoYXZlIHRoZSByaWdodCB0byBsZWdhbGx5IHB1cnN1ZSBlbmZvcmNlYWJsZSByaWdodHMgYWdhaW5zdCBkYXRhIGNvbGxlY3RvcnNcbiAgICAgICAgICBhbmQgcHJvY2Vzc29ycyB3aG8gZmFpbCB0byBhZGhlcmUgdG8gdGhlIGxhdy4gVGhpcyBwcmluY2lwbGUgcmVxdWlyZXMgbm90IG9ubHlcbiAgICAgICAgICB0aGF0IGluZGl2aWR1YWxzIGhhdmUgZW5mb3JjZWFibGUgcmlnaHRzIGFnYWluc3QgZGF0YSB1c2VycywgYnV0IGFsc28gdGhhdFxuICAgICAgICAgIGluZGl2aWR1YWxzIGhhdmUgcmVjb3Vyc2UgdG8gY291cnRzIG9yIGdvdmVybm1lbnQgYWdlbmNpZXMgdG8gaW52ZXN0aWdhdGVcbiAgICAgICAgICBhbmQvb3IgcHJvc2VjdXRlIG5vbi1jb21wbGlhbmNlIGJ5IGRhdGEgcHJvY2Vzc29ycy5cbiAgICAgICAgPC9wPlxuICAgICAgPC9saT5cbiAgICA8L29sPlxuICA8L1BhZ2VDb250ZW50PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpdmFjeVBvbGljeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvbGVnYWwvcHJpdmFjeVBvbGljeS5qcyIsImltcG9ydCBJbXByaW50IGZyb20gJy4vaW1wcmludCc7XG5cbmNvbnN0IEltcHJpbnRDb250YWluZXIgPSBJbXByaW50O1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIENvbXBvbmVudDogSW1wcmludENvbnRhaW5lcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnZUNvbnRlbnQgZnJvbSAnLi4vY29udGVudC9wYWdlQ29udGVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW1wcmludC5sZXNzJztcblxuY29uc3QgSW1wcmludCA9ICgpID0+IChcbiAgPFBhZ2VDb250ZW50PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1wcmludENvbnRlbnR9PlxuICAgICAgPGgxPkltcHJpbnQ8L2gxPlxuICAgICAgPGRpdj5Db21wYW55IE5hbWU6IFZBU1QgTkVUV09SSyBMVEQ8L2Rpdj5cbiAgICAgIDxkaXY+TWFuYWdpbmcgRGlyZWN0b3I6IE1hcnRpbiBEYXdzb248L2Rpdj5cbiAgICAgIDxkaXY+QWRkcmVzczogMjYgQ2FsZGVyVmlldywgUmFzdHJpY2ssIEJyaWdob3VzZSwgSEQ2M0RRIFVuaXRlZCBLaW5nZG9tPC9kaXY+XG4gICAgICA8ZGl2PlRlbGVwaG9uZTogKyg0NCk3NDczNTkxMDk3PC9kaXY+XG4gICAgICA8ZGl2PkVtYWlsIGFkZHJlc3M6IGluZm9AcmVnZ2VzdC5jb208L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9QYWdlQ29udGVudD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEltcHJpbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJpbXByaW50Q29udGVudFwiOlwiQ29tcG9uZW50cy1sZWdhbC1pbXByaW50X19pbXByaW50Q29udGVudC0tMlROZU9cIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2xlZ2FsL2ltcHJpbnQubGVzc1xuLy8gbW9kdWxlIGlkID0gNjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb21wb3NlLCB3aXRoUHJvcHMsIGZsYXR0ZW5Qcm9wIH0gZnJvbSAncmVjb21wb3NlJztcblxuaW1wb3J0IEVycm9yUGFnZSBmcm9tICcuL2Vycm9yUGFnZSc7XG5cbmNvbnN0IGNyZWF0ZVByb3BzID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiB7XG4gIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6XG4gICAgICByZXR1cm4geyBlcnJvcjogJ1RoZSBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC4nIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB7IGVycm9yIH07XG4gIH1cbn07XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoY3JlYXRlUHJvcHMpLFxuKTtcblxuY29uc3QgRXJyb3JQYWdlQ29udGFpbmVyID0gZW5oYW5jZShFcnJvclBhZ2UpO1xuXG5leHBvcnQgY29uc3Qgcm91dGVDb25maWcgPSB7XG4gIHJlbmRlcjogKHsgcHJvcHMgfSkgPT4gcHJvcHMgJiYgKFxuICAgIDxFcnJvclBhZ2VDb250YWluZXJcbiAgICAgIHN0YXR1cz17cGFyc2VJbnQocHJvcHMucGFyYW1zLnN0YXR1cywgMTApfVxuICAgICAgZXJyb3I9e3Byb3BzLmxvY2F0aW9uLnN0YXRlLmVycm9yfVxuICAgIC8+XG4gICksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2VDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2VDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Vycm9yUGFnZS5sZXNzJztcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzLCBlcnJvciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JQYWdlfT5cbiAgICA8aDE+RXJyb3Ige3N0YXR1c308L2gxPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3J9PlxuICAgICAgPGRpdj5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9kaXY+XG4gICAgICBXZSBoYXZlIGJlZW4gbm90aWZpZWQgb2YgdGhlIGVycm9yIMKvXFxfKOODhClfL8KvLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkVycm9yUGFnZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGVycm9yOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJlZC4nLFxufTtcblxuRXJyb3JQYWdlLnByb3BUeXBlcyA9IHtcbiAgc3RhdHVzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBxdW90YXRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NvbXBvbmVudHMvZXJyb3JQYWdlL2Vycm9yUGFnZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImVycm9yUGFnZVwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvclBhZ2UtLTFhUy16XCIsXCJlcnJvclwiOlwiQ29tcG9uZW50cy1lcnJvclBhZ2UtZXJyb3JQYWdlX19lcnJvci0tNjJLWkNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9Db21wb25lbnRzL2Vycm9yUGFnZS9lcnJvclBhZ2UubGVzc1xuLy8gbW9kdWxlIGlkID0gNjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgcG9wdXBzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBkZWZhdWx0U3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnU0hPV19QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IFsuLi5zdGF0ZS5wb3B1cHMsIHtcbiAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgdGV4dDogYWN0aW9uLnRleHQsXG4gICAgICAgIG1pbGxpc2Vjb25kc1RvU2hvdzogYWN0aW9uLm1pbGxpc2Vjb25kc1RvU2hvdyxcbiAgICAgIH1dO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcG9wdXBzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSAnSElERV9QT1BVUCc6IHtcbiAgICAgIGNvbnN0IHBvcHVwcyA9IHN0YXRlLnBvcHVwcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGFjdGlvbi5pbmRleCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBwb3B1cHMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9Db21wb25lbnRzL3NoYXJlZC9wb3B1cC9yZWR1Y2VyLmpzIiwiaW1wb3J0IHtcbiAgRW52aXJvbm1lbnQsXG4gIE5ldHdvcmssXG4gIFJlY29yZFNvdXJjZSxcbiAgU3RvcmUsXG59IGZyb20gJ3JlbGF5LXJ1bnRpbWUnO1xuaW1wb3J0IHsgc2V0RW52aXJvbWVudCB9IGZyb20gJ3JlbGF5LWNvbXBvc2UnO1xuXG5jb25zdCBmZXRjaFF1ZXJ5ID0gKG9wZXJhdGlvbiwgdmFyaWFibGVzKSA9PlxuICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgaGVhZGVyczoge1xuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IG9wZXJhdGlvbi50ZXh0LFxuICAgICAgdmFyaWFibGVzLFxuICAgIH0pLFxuICB9KS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlbGF5L2lzc3Vlcy8xODE2XG4gICAgICBpZiAoanNvbi5lcnJvcnMpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGpzb24uZXJyb3JzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICB9KTtcblxuY29uc3QgbmV0d29yayA9IE5ldHdvcmsuY3JlYXRlKGZldGNoUXVlcnkpO1xuY29uc3Qgc291cmNlID0gbmV3IFJlY29yZFNvdXJjZSgpO1xuY29uc3Qgc3RvcmUgPSBuZXcgU3RvcmUoc291cmNlKTtcbmNvbnN0IGVudmlyb25tZW50ID0gbmV3IEVudmlyb25tZW50KHtcbiAgbmV0d29yayxcbiAgc3RvcmUsXG59KTtcblxuc2V0RW52aXJvbWVudChlbnZpcm9ubWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGVudmlyb25tZW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ29tcG9uZW50cy9hcHAvZW52aXJvbm1lbnQvZW52aXJvbm1lbnQuanMiXSwic291cmNlUm9vdCI6IiJ9
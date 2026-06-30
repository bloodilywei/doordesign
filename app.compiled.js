function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useMemo = _React.useMemo,
  useCallback = _React.useCallback;
var CanvasBox = React.memo(function () {
  return /*#__PURE__*/React.createElement("div", {
    id: "canvas-container-wrapper",
    className: "absolute inset-0 w-full h-full"
  }, /*#__PURE__*/React.createElement("canvas", {
    id: "main-canvas"
  }));
}, function () {
  return true;
});
var MY_FIREBASE_CONFIG = {
  apiKey: "AIzaSyD-I3XsPn77h4Vp6SYgZ5vhOZsovJBkhJk",
  authDomain: "artifacts-732a0.firebaseapp.com",
  projectId: "artifacts-732a0",
  storageBucket: "artifacts-732a0.firebasestorage.app",
  messagingSenderId: "235490784097",
  appId: "1:235490784097:web:d12b0ab9745da6c8510b20"
};
var CONFIG = {
  series: {
    "1": "梧桐木紋",
    "2": "鋸痕木紋",
    "3": "節眼木紋",
    "5": "石紋系列",
    "6": "潮流木紋"
  },
  colors: {
    "1": {
      name: "白梣木",
      hex: "#F2F0E6"
    },
    "2": {
      name: "秋香",
      hex: "#A9A9A9"
    },
    "3": {
      name: "柚木",
      hex: "#966F33"
    },
    "5": {
      name: "深胡桃",
      hex: "#3E2723"
    },
    "6": {
      name: "淺黃梧桐",
      hex: "#F5DEB3"
    },
    "7": {
      name: "黃梧桐",
      hex: "#E2B37B"
    },
    "8": {
      name: "摩卡",
      hex: "#4B3621"
    },
    "9": {
      name: "灰橡",
      hex: "#8E8E8E"
    }
  },
  lineColors: {
    "G": {
      name: "灰線",
      hex: "#9ca3af"
    },
    "B": {
      name: "黑線",
      hex: "#000000"
    },
    "W": {
      name: "白線",
      hex: "#ffffff"
    }
  },
  // 本機預設配件清單 (雲端有資料時會被自動解析引擎覆蓋)
  glassFrames: [{
    id: "GLS_G-01_467×725",
    name: "玻璃框 G-01"
  }, {
    id: "GLS_T_08_200×605",
    name: "玻璃框 T-08"
  }, {
    id: "GLS_T_09_370×605",
    name: "玻璃框 T-09"
  }, {
    id: "GLS_T_16_200×200",
    name: "玻璃框 T-16"
  }, {
    id: "GLS_T_17_250×950",
    name: "玻璃框 T-17"
  }],
  louvers: [{
    id: "LOU_A-03_420×378",
    name: "百頁 A-03"
  }, {
    id: "LOU_A-04_200×650",
    name: "百頁 A-04"
  }, {
    id: "LOU_A-05_400×650",
    name: "百頁 A-05"
  }, {
    id: "LOU_A-13_250×297",
    name: "百頁 A-13"
  }],
  accColors: [{
    id: "白",
    name: "白色",
    hex: "#FFFFFF"
  }, {
    id: "柚木",
    name: "柚木色",
    hex: "#966F33"
  }, {
    id: "胡桃",
    name: "胡桃色",
    hex: "#5D4037"
  }],
  potentialDesigns: Array.from({
    length: 999
  }, function (_, i) {
    return (i + 1).toString().padStart(2, '0');
  })
};
var STANDARD_DOOR_WIDTH = 900;
var STANDARD_DOOR_HEIGHT = 2100;
var extractAccessorySize = function extractAccessorySize(baseId) {
  var matches = String(baseId || '').match(/\d+/g);
  if (!matches || matches.length < 2) return null;
  var width = Number(matches[matches.length - 2]);
  var height = Number(matches[matches.length - 1]);
  if (!width || !height) return null;
  return {
    width: width,
    height: height
  };
};
var getAccessoryScale = function getAccessoryScale(img, door, baseId) {
  var size = extractAccessorySize(baseId);
  if (!img || !door || !door.width || !door.height || !size) {
    return {
      scaleX: (door === null || door === void 0 ? void 0 : door.scaleX) || 1,
      scaleY: (door === null || door === void 0 ? void 0 : door.scaleY) || 1,
      ratioWidth: null,
      ratioHeight: null
    };
  }
  var sourceWidth = size.width;
  var sourceHeight = size.height;
  var imageRatio = img.width / img.height;
  var directRatio = sourceWidth / sourceHeight;
  var swappedRatio = sourceHeight / sourceWidth;
  if (Math.abs(swappedRatio - imageRatio) < Math.abs(directRatio - imageRatio)) {
    sourceWidth = size.height;
    sourceHeight = size.width;
  }
  var doorDisplayWidth = door.getScaledWidth();
  var doorDisplayHeight = door.getScaledHeight();
  return {
    scaleX: doorDisplayWidth * (sourceWidth / STANDARD_DOOR_WIDTH) / img.width,
    scaleY: doorDisplayHeight * (sourceHeight / STANDARD_DOOR_HEIGHT) / img.height,
    ratioWidth: sourceWidth / STANDARD_DOOR_WIDTH,
    ratioHeight: sourceHeight / STANDARD_DOOR_HEIGHT
  };
};
var DesignCard = function DesignCard(_ref) {
  var id = _ref.id,
    cloudFiles = _ref.cloudFiles,
    isCloudFiltered = _ref.isCloudFiltered,
    onSelect = _ref.onSelect,
    localDoorFiles = _ref.localDoorFiles,
    localThumbMap = _ref.localThumbMap;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFailed = _useState2[0],
    setIsFailed = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isLoaded = _useState4[0],
    setIsLoaded = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    thumbIndex = _useState6[0],
    setThumbIndex = _useState6[1];
  var thumbCandidates = useMemo(function () {
    var preferredNames = ["".concat(id, "-11.jpg"), "".concat(id, "11.jpg"), "".concat(id, "-12.jpg"), "".concat(id, "12.jpg")];
    if (!isCloudFiltered && localThumbMap && localThumbMap[id] && localThumbMap[id].length > 0) {
      return localThumbMap[id].flatMap(function (file) {
        return ["thumbs/".concat(file), "doors/".concat(file)];
      });
    }
    var sourceFiles = isCloudFiltered ? cloudFiles.doors : localDoorFiles || [];
    if (sourceFiles.length > 0) {
      var dLower = id.toLowerCase();
      var matchingFiles = sourceFiles.filter(function (f) {
        var lower = f.toLowerCase();
        return lower.startsWith(dLower + '-') || lower.startsWith(dLower + '_') || lower.startsWith(dLower) && Object.keys(CONFIG.series).includes(lower.substring(dLower.length).charAt(0));
      });
      var orderedMatches = preferredNames.filter(function (name) {
        return matchingFiles.some(function (file) {
          return file.toLowerCase() === name.toLowerCase();
        });
      }).concat(matchingFiles.filter(function (file) {
        return !preferredNames.some(function (name) {
          return name.toLowerCase() === file.toLowerCase();
        });
      }));
      return orderedMatches.flatMap(function (file) {
        return ["thumbs/".concat(file), "doors/".concat(file)];
      });
    }
    return preferredNames.flatMap(function (name) {
      return ["thumbs/".concat(name), "doors/".concat(name)];
    });
  }, [id, cloudFiles.doors, isCloudFiltered, localDoorFiles, localThumbMap]);
  var thumbSrc = thumbCandidates[thumbIndex] || null;
  useEffect(function () {
    setThumbIndex(0);
    setIsFailed(false);
    setIsLoaded(false);
  }, [thumbCandidates]);
  if (!thumbSrc) return null;
  if (isFailed) return null;
  var handleImageError = function handleImageError() {
    setIsLoaded(false);
    if (thumbIndex < thumbCandidates.length - 1) {
      setThumbIndex(function (prev) {
        return prev + 1;
      });
    } else {
      setIsFailed(true);
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSelect(id);
    },
    className: "group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col focus:outline-none focus:ring-4 focus:ring-blue-200 animate-in fade-in zoom-in-95"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full aspect-[1/2.1] bg-slate-50 relative flex items-center justify-center p-3 md:p-5 border-b border-slate-100"
  }, !isLoaded && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-6 h-6 border-2 border-slate-300 border-t-blue-500 rounded-full animate-spin"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] text-slate-400 font-bold tracking-widest"
  }, "\u8F09\u5165\u4E2D")), /*#__PURE__*/React.createElement("img", {
    src: thumbSrc,
    alt: "\u9020\u578B ".concat(id),
    loading: "lazy",
    onLoad: function onLoad() {
      return setIsLoaded(true);
    },
    onError: handleImageError,
    className: "w-full h-full object-contain drop-shadow-lg group-hover:scale-[1.05] transition-all duration-500 ".concat(isLoaded ? 'opacity-100' : 'opacity-0')
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 md:p-4 w-full text-center bg-white shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] md:text-sm font-black text-slate-700 tracking-widest"
  }, "\u9020\u578B ", id)));
};
var App = function App() {
  var isLocalEnv = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  var _useState7 = useState(isLocalEnv),
    _useState8 = _slicedToArray(_useState7, 2),
    isAuthorized = _useState8[0],
    setIsAuthorized = _useState8[1];
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    authKey = _useState0[0],
    setAuthKey = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    authError = _useState10[0],
    setAuthError = _useState10[1];
  var _useState11 = useState('gallery'),
    _useState12 = _slicedToArray(_useState11, 2),
    appView = _useState12[0],
    setAppView = _useState12[1];
  var _useState13 = useState('colors'),
    _useState14 = _slicedToArray(_useState13, 2),
    activeMenu = _useState14[0],
    setActiveMenu = _useState14[1];
  var _useState15 = useState({
      design: '01',
      file: '',
      lineColor: ''
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    selection = _useState16[0],
    setSelection = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    fabricCanvas = _useState18[0],
    setFabricCanvas = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedAcc = _useState20[0],
    setSelectedAcc = _useState20[1];
  var _useState21 = useState(1),
    _useState22 = _slicedToArray(_useState21, 2),
    doorScale = _useState22[0],
    setDoorScale = _useState22[1];

  // ★ 新增 accs 陣列來存放雲端配件
  var _useState23 = useState({
      doors: [],
      lines: [],
      accs: []
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    cloudFiles = _useState24[0],
    setCloudFiles = _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    isCloudFiltered = _useState26[0],
    setIsCloudFiltered = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isScanning = _useState28[0],
    setIsScanning = _useState28[1];
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    toastMsg = _useState30[0],
    setToastMsg = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    canvasError = _useState32[0],
    setCanvasError = _useState32[1];
  var _useState33 = useState({
      doors: new Set(),
      lines: new Set()
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    localValidFiles = _useState34[0],
    setLocalValidFiles = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isLocalScanning = _useState36[0],
    setIsLocalScanning = _useState36[1];
  var _useState37 = useState([]),
    _useState38 = _slicedToArray(_useState37, 2),
    localAccessoryFiles = _useState38[0],
    setLocalAccessoryFiles = _useState38[1];
  var _useState39 = useState([]),
    _useState40 = _slicedToArray(_useState39, 2),
    localThumbFiles = _useState40[0],
    setLocalThumbFiles = _useState40[1];
  var _useState41 = useState({}),
    _useState42 = _slicedToArray(_useState41, 2),
    localThumbMap = _useState42[0],
    setLocalThumbMap = _useState42[1];
  var _useState43 = useState('glass'),
    _useState44 = _slicedToArray(_useState43, 2),
    accTab = _useState44[0],
    setAccTab = _useState44[1];
  var _useState45 = useState(24),
    _useState46 = _slicedToArray(_useState45, 2),
    visibleDesignCount = _useState46[0],
    setVisibleDesignCount = _useState46[1];
  var canvasContainerRef = useRef(null);
  var validDesigns = useMemo(function () {
    var allDesigns = _toConsumableArray(CONFIG.potentialDesigns).sort(function (a, b) {
      return a.localeCompare(b, undefined, {
        numeric: true
      });
    });
    var sourceFiles = isCloudFiltered ? cloudFiles.doors : localThumbFiles;
    if (!sourceFiles || sourceFiles.length === 0) return allDesigns;
    var validSet = new Set();
    var seriesKeys = Object.keys(CONFIG.series);
    var allDesignsByLength = _toConsumableArray(allDesigns).sort(function (a, b) {
      return b.length - a.length;
    });
    sourceFiles.forEach(function (file) {
      var lowerFile = file.toLowerCase();
      var match = lowerFile.match(/^([a-z0-9]+)[-_]/);
      if (match) {
        var designPart = match[1];
        var foundDesign = allDesigns.find(function (d) {
          return d.toLowerCase() === designPart;
        });
        if (foundDesign) {
          validSet.add(foundDesign);
          return;
        }
      }
      var _iterator = _createForOfIteratorHelper(allDesignsByLength),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var d = _step.value;
          var dLower = d.toLowerCase();
          if (lowerFile.startsWith(dLower)) {
            var remainder = lowerFile.substring(dLower.length);
            var nextChar = remainder.charAt(0);
            if (seriesKeys.includes(nextChar) || nextChar === '-' || nextChar === '.' || /^[a-c]$/i.test(nextChar)) {
              validSet.add(d);
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
    return allDesigns.filter(function (d) {
      return validSet.has(d);
    });
  }, [isCloudFiltered, cloudFiles, localThumbFiles]);
  var filesForCurrentDesign = useMemo(function () {
    if (!selection.design) return [];
    var sourceFiles = isCloudFiltered ? cloudFiles.doors : Array.from(localValidFiles.doors);
    var dLower = selection.design.toLowerCase();
    return sourceFiles.filter(function (f) {
      var lowerFile = f.toLowerCase();
      if (lowerFile.startsWith(dLower + '-') || lowerFile.startsWith(dLower + '_')) return true;
      if (lowerFile.startsWith(dLower)) {
        var remainder = lowerFile.substring(dLower.length);
        var nextChar = remainder.charAt(0);
        if (Object.keys(CONFIG.series).includes(nextChar)) return true;
      }
      return false;
    });
  }, [isCloudFiltered, cloudFiles.doors, localValidFiles.doors, selection.design]);
  var specialOptions = useMemo(function () {
    return filesForCurrentDesign.filter(function (f) {
      var noExt = f.toLowerCase().replace(/\.(jpg|png)$/, '');
      var isStandard = false;
      for (var _i = 0, _Object$keys = Object.keys(CONFIG.series); _i < _Object$keys.length; _i++) {
        var tId = _Object$keys[_i];
        for (var _i2 = 0, _Object$keys2 = Object.keys(CONFIG.colors); _i2 < _Object$keys2.length; _i2++) {
          var cId = _Object$keys2[_i2];
          var baseOld = "".concat(selection.design).concat(tId).concat(cId).toLowerCase();
          var baseNew = "".concat(selection.design, "-").concat(tId).concat(cId).toLowerCase();
          if (noExt === baseOld || noExt === baseNew) {
            isStandard = true;
            break;
          }
        }
        if (isStandard) break;
      }
      return !isStandard;
    });
  }, [filesForCurrentDesign, selection.design]);

  // =========================================================
  // ★ 核心升級：自動動態解析配件清單
  // =========================================================
  var dynamicAccessories = useMemo(function () {
    var sourceAccessoryFiles = isCloudFiltered ? cloudFiles.accs : localAccessoryFiles;
    // 如果沒有可解析的配件資料，退回預設清單
    if (!sourceAccessoryFiles || sourceAccessoryFiles.length === 0) {
      return {
        glass: CONFIG.glassFrames,
        louver: CONFIG.louvers
      };
    }
    var glass = [];
    var louver = [];
    var addedIds = new Set();
    var validColors = CONFIG.accColors.map(function (c) {
      return c.id;
    });
    sourceAccessoryFiles.forEach(function (file) {
      // 解析檔名，例如: GLS_G-01_467x725_白.png 擷取前半段 ID 與 顏色
      var match = file.match(/^(.+?)_([^_.]+)\.(png|jpg)$/i);
      if (match) {
        var baseId = match[1];
        var colorId = match[2];

        // 確認結尾的顏色是系統支援的 (防呆)
        if (validColors.includes(colorId) && !addedIds.has(baseId)) {
          addedIds.add(baseId);
          var name = baseId;
          // 自動化命名與分類：根據前綴判斷
          if (baseId.toUpperCase().startsWith('GLS_')) {
            name = baseId.substring(4).replace(/_/g, ' ');
            glass.push({
              id: baseId,
              name: "\u73BB\u7483\u6846 ".concat(name)
            });
          } else if (baseId.toUpperCase().startsWith('LOU_')) {
            name = baseId.substring(4).replace(/_/g, ' ');
            louver.push({
              id: baseId,
              name: "\u767E\u9801 ".concat(name)
            });
          } else {
            // 沒照規則命名的，預設丟到玻璃框，名字直接用原檔名
            glass.push({
              id: baseId,
              name: baseId
            });
          }
        }
      }
    });

    // 防呆：如果雲端資料夾解析失敗，退回預設清單
    if (glass.length === 0 && louver.length === 0) {
      return {
        glass: CONFIG.glassFrames,
        louver: CONFIG.louvers
      };
    }

    // 照字母排序，讓選單整齊劃一
    glass.sort(function (a, b) {
      return a.name.localeCompare(b.name, 'zh-Hant');
    });
    louver.sort(function (a, b) {
      return a.name.localeCompare(b.name, 'zh-Hant');
    });
    return {
      glass: glass,
      louver: louver
    };
  }, [isCloudFiltered, cloudFiles.accs, localAccessoryFiles]);
  var handleCheckKey = /*#__PURE__*/function () {
    var _handleCheckKey = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var app, db, snapshot, matched, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (authKey) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            setAuthError('驗證中...');
            _context.p = 2;
            app = FB.getApps().length === 0 ? FB.initializeApp(MY_FIREBASE_CONFIG) : FB.getApp();
            db = FB.getFirestore(app);
            _context.n = 3;
            return FB.signInAnonymously(FB.getAuth(app));
          case 3:
            _context.n = 4;
            return FB.getDocs(FB.collection(db, 'artifacts', 'default-app-id', 'public', 'data', 'access_keys'));
          case 4:
            snapshot = _context.v;
            matched = snapshot.docs.map(function (d) {
              return d.data();
            }).find(function (k) {
              return k.key === authKey.toUpperCase();
            });
            if (matched && new Date(matched.expiresAt) > new Date()) {
              setIsAuthorized(true);
            } else setAuthError("密碼錯誤或已過期");
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            setAuthError("連線失敗，請檢查網路");
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 5]]);
    }));
    function handleCheckKey() {
      return _handleCheckKey.apply(this, arguments);
    }
    return handleCheckKey;
  }();
  var fetchRepoTree = /*#__PURE__*/function () {
    var _fetchRepoTree = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var forceRefresh,
        cacheKey,
        cacheTimeKey,
        cached,
        cachedTime,
        owner,
        repo,
        pathParts,
        res,
        data,
        doors,
        lines,
        accs,
        filesObj,
        _cached,
        _args2 = arguments,
        _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            forceRefresh = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
            setIsScanning(true);
            cacheKey = 'github_repo_tree_v24';
            cacheTimeKey = 'github_repo_tree_time_v24';
            _context2.p = 1;
            if (!isLocalEnv) {
              _context2.n = 2;
              break;
            }
            setIsCloudFiltered(false);
            setIsScanning(false);
            return _context2.a(2);
          case 2:
            cached = localStorage.getItem(cacheKey);
            cachedTime = localStorage.getItem(cacheTimeKey);
            if (!(!forceRefresh && cached && cachedTime && Date.now() - parseInt(cachedTime) < 86400000)) {
              _context2.n = 3;
              break;
            }
            setCloudFiles(JSON.parse(cached));
            setIsCloudFiltered(true);
            setIsScanning(false);
            return _context2.a(2);
          case 3:
            owner = 'bloodilywei';
            repo = 'bloodilywei.github.io';
            if (window.location.hostname.includes('.github.io')) {
              owner = window.location.hostname.split('.')[0];
              pathParts = window.location.pathname.split('/').filter(Boolean);
              repo = pathParts.length > 0 ? pathParts[0] : window.location.hostname;
            }
            _context2.n = 4;
            return fetch("https://api.github.com/repos/".concat(owner, "/").concat(repo, "/git/trees/main?recursive=1"));
          case 4:
            res = _context2.v;
            if (!res.ok) {
              _context2.n = 6;
              break;
            }
            _context2.n = 5;
            return res.json();
          case 5:
            data = _context2.v;
            doors = [];
            lines = [];
            accs = []; // ★ 新增配件收集陣列
            data.tree.forEach(function (item) {
              var lowerPath = item.path.toLowerCase();
              var fileName = item.path.split('/')[1];
              if (lowerPath.startsWith('doors/')) {
                if (!/^[0-9a-z]+[-_][gbw]\.(png|jpg)$/i.test(fileName)) {
                  doors.push(fileName);
                }
              }
              if (lowerPath.startsWith('lines/')) {
                lines.push(fileName);
              }
              // ★ 把雲端的配件全部抓進來
              if (lowerPath.startsWith('accessories/')) {
                accs.push(fileName);
              }
            });
            filesObj = {
              doors: doors,
              lines: lines,
              accs: accs
            };
            setCloudFiles(filesObj);
            setIsCloudFiltered(true);
            localStorage.setItem(cacheKey, JSON.stringify(filesObj));
            localStorage.setItem(cacheTimeKey, Date.now().toString());
            if (forceRefresh) {
              setToastMsg('圖庫目錄已成功更新！');
              setTimeout(function () {
                return setToastMsg('');
              }, 3000);
            }
            _context2.n = 7;
            break;
          case 6:
            if (cached) {
              setCloudFiles(JSON.parse(cached));
              setIsCloudFiltered(true);
              setToastMsg('API 連線受限，已恢復使用暫存目錄');
              setTimeout(function () {
                return setToastMsg('');
              }, 4000);
            } else setIsCloudFiltered(false);
          case 7:
            _context2.n = 9;
            break;
          case 8:
            _context2.p = 8;
            _t2 = _context2.v;
            _cached = localStorage.getItem(cacheKey);
            if (_cached) {
              setCloudFiles(JSON.parse(_cached));
              setIsCloudFiltered(true);
            } else setIsCloudFiltered(false);
          case 9:
            _context2.p = 9;
            setIsScanning(false);
            return _context2.f(9);
          case 10:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 8, 9, 10]]);
    }));
    function fetchRepoTree() {
      return _fetchRepoTree.apply(this, arguments);
    }
    return fetchRepoTree;
  }();
  useEffect(function () {
    if (!isAuthorized) return;
    fetchRepoTree();
  }, [isAuthorized]);
  useEffect(function () {
    if (!isAuthorized || isCloudFiltered) return;
    var cancelled = false;
    var loadLocalAccessories = /*#__PURE__*/function () {
      var _loadLocalAccessories = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var res, html, matches, files;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return fetch("accessories/?t=".concat(Date.now()));
            case 1:
              res = _context3.v;
              if (!res.ok) {
                _context3.n = 4;
                break;
              }
              _context3.n = 2;
              return res.text();
            case 2:
              html = _context3.v;
              matches = Array.from(html.matchAll(/href=\"([^\"]+)\"/gi));
              files = matches.map(function (match) {
                return match[1];
              }).filter(function (href) {
                return href && !href.startsWith('?') && href !== '../';
              }).map(function (href) {
                return decodeURIComponent(href.split('?')[0]).replace(/\/$/, '');
              }).filter(function (name) {
                return /\.(png|jpg)$/i.test(name);
              });
              if (!cancelled) {
                setLocalAccessoryFiles(Array.from(new Set(files)).sort(function (a, b) {
                  return a.localeCompare(b, 'zh-Hant');
                }));
              }
              _context3.n = 5;
              break;
            case 3:
              _context3.p = 3;
              _context3.v;
              if (!cancelled) setLocalAccessoryFiles([]);
            case 4:
              return _context3.a(2);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 3]]);
      }));
      function loadLocalAccessories() {
        return _loadLocalAccessories.apply(this, arguments);
      }
      return loadLocalAccessories;
    }();
    loadLocalAccessories();
    return function () {
      cancelled = true;
    };
  }, [isAuthorized, isCloudFiltered]);
  useEffect(function () {
    if (!isAuthorized || isCloudFiltered) return;
    var cancelled = false;
    var loadLocalThumbs = /*#__PURE__*/function () {
      var _loadLocalThumbs = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var res, data, designs, files, map;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return fetch("doors.index.json?t=".concat(Date.now()));
            case 1:
              res = _context4.v;
              if (!res.ok) {
                _context4.n = 4;
                break;
              }
              _context4.n = 2;
              return res.json();
            case 2:
              data = _context4.v;
              designs = Array.isArray(data.designs) ? data.designs : [];
              files = designs.flatMap(function (item) {
                return Array.isArray(item.thumbs) ? item.thumbs : [];
              });
              map = designs.reduce(function (acc, item) {
                if (item && item.id && Array.isArray(item.thumbs)) {
                  acc[item.id] = item.thumbs;
                }
                return acc;
              }, {});
              if (!cancelled) {
                setLocalThumbFiles(Array.from(new Set(files)).sort(function (a, b) {
                  return a.localeCompare(b, 'zh-Hant');
                }));
                setLocalThumbMap(map);
              }
              _context4.n = 5;
              break;
            case 3:
              _context4.p = 3;
              _context4.v;
              if (!cancelled) {
                setLocalThumbFiles([]);
                setLocalThumbMap({});
              }
            case 4:
              return _context4.a(2);
            case 5:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 3]]);
      }));
      function loadLocalThumbs() {
        return _loadLocalThumbs.apply(this, arguments);
      }
      return loadLocalThumbs;
    }();
    loadLocalThumbs();
    return function () {
      cancelled = true;
    };
  }, [isAuthorized, isCloudFiltered]);
  var handleRefreshCache = function handleRefreshCache() {
    fetchRepoTree(true);
  };
  useEffect(function () {
    setVisibleDesignCount(24);
  }, [isCloudFiltered, validDesigns.length]);
  useEffect(function () {
    if (appView !== 'gallery') return;
    var onScroll = function onScroll() {
      if (window.innerHeight + window.scrollY < document.body.offsetHeight - 1200) return;
      setVisibleDesignCount(function (prev) {
        return Math.min(prev + 24, validDesigns.length);
      });
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [appView, validDesigns.length]);
  useEffect(function () {
    if (!isAuthorized || isCloudFiltered || appView === 'gallery' || !selection.design) return;
    var scanLocalFallback = /*#__PURE__*/function () {
      var _scanLocalFallback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var foundDoors, foundLines, check, tasks, CHUNK_SIZE, i, chunk;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              setIsLocalScanning(true);
              foundDoors = new Set();
              foundLines = new Set();
              check = /*#__PURE__*/function () {
                var _check = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(folder, file) {
                  var res, contentType, ext, upper, r2, ct2, _t3;
                  return _regenerator().w(function (_context3) {
                    while (1) switch (_context3.p = _context3.n) {
                      case 0:
                        _context3.p = 0;
                        _context3.n = 1;
                        return fetch("".concat(folder, "/").concat(file, "?t=").concat(Date.now()), {
                          method: 'HEAD'
                        });
                      case 1:
                        res = _context3.v;
                        contentType = res.headers.get('content-type') || '';
                        if (!(res.ok && contentType.includes('image'))) {
                          _context3.n = 2;
                          break;
                        }
                        if (folder === 'doors' && !/^[0-9a-z]+[-_][gbw]\.(png|jpg)$/i.test(file)) {
                          foundDoors.add(file);
                        } else if (folder === 'lines') {
                          foundLines.add(file);
                        }
                        _context3.n = 4;
                        break;
                      case 2:
                        ext = file.split('.').pop();
                        if (!(ext === 'jpg' || ext === 'png')) {
                          _context3.n = 4;
                          break;
                        }
                        upper = file.slice(0, -ext.length) + ext.toUpperCase();
                        _context3.n = 3;
                        return fetch("".concat(folder, "/").concat(upper, "?t=").concat(Date.now()), {
                          method: 'HEAD'
                        });
                      case 3:
                        r2 = _context3.v;
                        ct2 = r2.headers.get('content-type') || '';
                        if (r2.ok && ct2.includes('image')) {
                          if (folder === 'doors' && !/^[0-9a-z]+[-_][gbw]\.(png|jpg)$/i.test(upper)) {
                            foundDoors.add(upper);
                          } else if (folder === 'lines') {
                            foundLines.add(upper);
                          }
                        }
                      case 4:
                        _context3.n = 6;
                        break;
                      case 5:
                        _context3.p = 5;
                        _t3 = _context3.v;
                      case 6:
                        return _context3.a(2);
                    }
                  }, _callee3, null, [[0, 5]]);
                }));
                function check(_x, _x2) {
                  return _check.apply(this, arguments);
                }
                return check;
              }();
              tasks = [];
              Object.keys(CONFIG.series).forEach(function (tId) {
                Object.keys(CONFIG.colors).forEach(function (cId) {
                  tasks.push(function () {
                    return check('doors', "".concat(selection.design, "-").concat(tId).concat(cId, ".jpg"));
                  });
                  tasks.push(function () {
                    return check('doors', "".concat(selection.design, "-").concat(tId).concat(cId, ".png"));
                  });
                  tasks.push(function () {
                    return check('doors', "".concat(selection.design).concat(tId).concat(cId, ".jpg"));
                  });
                  tasks.push(function () {
                    return check('doors', "".concat(selection.design).concat(tId).concat(cId, ".png"));
                  });
                  ["-01", "-02", "-03", "-04", "-05", "A", "B", "C", "-A", "-B", "-C"].forEach(function (s) {
                    var sWithDash = s.startsWith('-') ? s : "-".concat(s);
                    tasks.push(function () {
                      return check('doors', "".concat(selection.design, "-").concat(tId).concat(cId).concat(sWithDash, ".jpg"));
                    });
                    tasks.push(function () {
                      return check('doors', "".concat(selection.design, "-").concat(tId).concat(cId).concat(sWithDash, ".png"));
                    });
                    tasks.push(function () {
                      return check('doors', "".concat(selection.design).concat(tId).concat(cId).concat(s, ".jpg"));
                    });
                  });
                });
              });
              Object.keys(CONFIG.lineColors).forEach(function (lc) {
                tasks.push(function () {
                  return check('lines', "".concat(selection.design, "_").concat(lc, ".png"));
                });
                tasks.push(function () {
                  return check('lines', "".concat(selection.design, "-").concat(lc, ".png"));
                });
              });
              CHUNK_SIZE = 15;
              i = 0;
            case 1:
              if (!(i < tasks.length)) {
                _context4.n = 4;
                break;
              }
              chunk = tasks.slice(i, i + CHUNK_SIZE);
              _context4.n = 2;
              return Promise.all(chunk.map(function (t) {
                return t();
              }));
            case 2:
              _context4.n = 3;
              return new Promise(function (r) {
                return setTimeout(r, 30);
              });
            case 3:
              i += CHUNK_SIZE;
              _context4.n = 1;
              break;
            case 4:
              setLocalValidFiles(function (prev) {
                return {
                  doors: new Set([].concat(_toConsumableArray(prev.doors), _toConsumableArray(foundDoors))),
                  lines: new Set([].concat(_toConsumableArray(prev.lines), _toConsumableArray(foundLines)))
                };
              });
              setIsLocalScanning(false);
            case 5:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      function scanLocalFallback() {
        return _scanLocalFallback.apply(this, arguments);
      }
      return scanLocalFallback;
    }();
    scanLocalFallback();
  }, [selection.design, isCloudFiltered, isAuthorized, appView]);
  var hasLineFile = function hasLineFile(filename) {
    var lower = filename.toLowerCase();
    if (isCloudFiltered) return cloudFiles.lines.some(function (f) {
      return f.toLowerCase() === lower;
    });
    return Array.from(localValidFiles.lines).some(function (f) {
      return f.toLowerCase() === lower;
    });
  };
  useEffect(function () {
    if (appView === 'editor' && filesForCurrentDesign.length > 0) {
      var currentLower = (selection.file || '').toLowerCase();
      var isCurrentValid = filesForCurrentDesign.some(function (f) {
        return f.toLowerCase() === currentLower;
      });
      if (!isCurrentValid) {
        setSelection(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            file: filesForCurrentDesign[0]
          });
        });
      }
    }
  }, [filesForCurrentDesign, selection.file, appView]);
  var loadImageSafe = function loadImageSafe(url) {
    return new Promise(function (resolve, reject) {
      var img = new window.Image();
      var onLoad = function onLoad() {
        return resolve(img);
      };
      var onError = function onError() {
        if (img.crossOrigin) {
          var imgRetry = new window.Image();
          imgRetry.onload = function () {
            return resolve(imgRetry);
          };
          imgRetry.onerror = function () {
            return reject(new Error("\u7121\u6CD5\u8F09\u5165\u5716\u7247: ".concat(url)));
          };
          imgRetry.src = url;
        } else {
          reject(new Error("\u7121\u6CD5\u8F09\u5165\u5716\u7247: ".concat(url)));
        }
      };
      if (!isLocalEnv) img.crossOrigin = 'anonymous';
      img.onload = onLoad;
      img.onerror = onError;
      img.src = url;
    });
  };

  // 畫布初始化
  useEffect(function () {
    if (!isAuthorized || appView !== 'editor' || !canvasContainerRef.current) return;
    var canvas = new fabric.Canvas('main-canvas', {
      width: canvasContainerRef.current.clientWidth || window.innerWidth * 0.6,
      height: canvasContainerRef.current.clientHeight || window.innerHeight,
      backgroundColor: 'transparent',
      preserveObjectStacking: true
    });
    canvas.on('selection:created', function (e) {
      var _e$selected$0$id;
      if (e.selected && e.selected[0] && (_e$selected$0$id = e.selected[0].id) !== null && _e$selected$0$id !== void 0 && _e$selected$0$id.startsWith('acc')) {
        setSelectedAcc(e.selected[0]);
        setActiveMenu('acc');
      }
    });
    canvas.on('selection:updated', function (e) {
      var _e$selected$0$id2;
      if (e.selected && e.selected[0] && (_e$selected$0$id2 = e.selected[0].id) !== null && _e$selected$0$id2 !== void 0 && _e$selected$0$id2.startsWith('acc')) {
        setSelectedAcc(e.selected[0]);
        setActiveMenu('acc');
      }
    });
    canvas.on('selection:cleared', function () {
      return setSelectedAcc(null);
    });
    setFabricCanvas(canvas);
    var handleResize = function handleResize() {
      var container = document.getElementById('canvas-container-wrapper');
      if (canvas && container) {
        var cw = container.clientWidth || 800;
        var ch = container.clientHeight || 600;
        canvas.setWidth(cw);
        canvas.setHeight(ch);
        var door = canvas.getObjects().find(function (o) {
          return o.id === 'door';
        });
        if (door && door.width) {
          var newScale = Math.min(cw * 0.95 / door.width, ch * 0.95 / door.height);
          setDoorScale(newScale);
          door.set({
            scaleX: newScale,
            scaleY: newScale,
            left: cw / 2,
            top: ch / 2
          });
          var line = canvas.getObjects().find(function (o) {
            return o.id === 'lineLayer';
          });
          if (line && line.width) line.set({
            scaleX: door.width * newScale / line.width,
            scaleY: door.height * newScale / line.height,
            left: cw / 2,
            top: ch / 2
          });
          canvas.getObjects().forEach(function (obj) {
            var _obj$id;
            if ((_obj$id = obj.id) !== null && _obj$id !== void 0 && _obj$id.startsWith('acc')) {
              var ratioWidth = obj.doorRatioWidth;
              var ratioHeight = obj.doorRatioHeight;
              obj.set({
                scaleX: ratioWidth ? door.getScaledWidth() * ratioWidth / obj.width : newScale,
                scaleY: ratioHeight ? door.getScaledHeight() * ratioHeight / obj.height : newScale
              });
              obj.setCoords();
            }
          });
          canvas.requestRenderAll();
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
      canvas.dispose();
      setFabricCanvas(null);
      setSelectedAcc(null);
    };
  }, [isAuthorized, appView]);

  // 繪圖引擎
  useEffect(function () {
    if (appView !== 'editor' || !fabricCanvas || !selection.file) return;
    var isCancelled = false;
    var container = document.getElementById('canvas-container-wrapper');
    var cw = (container === null || container === void 0 ? void 0 : container.clientWidth) || 800;
    var ch = (container === null || container === void 0 ? void 0 : container.clientHeight) || 600;
    fabricCanvas.setWidth(cw);
    fabricCanvas.setHeight(ch);
    var actualDoorFile = selection.file.replace('doors/', '');
    var drawCanvas = /*#__PURE__*/function () {
      var _drawCanvas = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var doorHtmlImg, doorImg, newScale, targetOld, targetNew, targetLineFile, sourceLines, exactLineMatch, lineHtmlImg, lineImg, _t4, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              setCanvasError(null);
              fabricCanvas.getObjects().forEach(function (obj) {
                if (['door', 'lineLayer'].includes(obj.id)) fabricCanvas.remove(obj);
              });
              fabricCanvas.requestRenderAll();
              _context5.n = 1;
              return loadImageSafe("doors/".concat(actualDoorFile));
            case 1:
              doorHtmlImg = _context5.v;
              if (!isCancelled) {
                _context5.n = 2;
                break;
              }
              return _context5.a(2);
            case 2:
              fabricCanvas.getObjects().forEach(function (obj) {
                if (['door', 'lineLayer'].includes(obj.id)) fabricCanvas.remove(obj);
              });
              doorImg = new fabric.Image(doorHtmlImg);
              newScale = Math.min(cw * 0.95 / doorImg.width, ch * 0.95 / doorImg.height);
              setDoorScale(newScale);
              doorImg.set({
                scaleX: newScale,
                scaleY: newScale,
                selectable: false,
                id: 'door',
                evented: false,
                originX: 'center',
                originY: 'center',
                left: cw / 2,
                top: ch / 2
              });
              fabricCanvas.add(doorImg).sendToBack(doorImg);
              if (!selection.lineColor) {
                _context5.n = 7;
                break;
              }
              targetOld = "".concat(selection.design, "_").concat(selection.lineColor, ".png").toLowerCase();
              targetNew = "".concat(selection.design, "-").concat(selection.lineColor, ".png").toLowerCase();
              targetLineFile = "".concat(selection.design, "_").concat(selection.lineColor, ".png");
              sourceLines = isCloudFiltered ? cloudFiles.lines : Array.from(localValidFiles.lines);
              exactLineMatch = sourceLines.find(function (f) {
                var lower = f.toLowerCase();
                return lower === targetOld || lower === targetNew;
              });
              if (exactLineMatch) targetLineFile = exactLineMatch;
              _context5.p = 3;
              _context5.n = 4;
              return loadImageSafe("lines/".concat(targetLineFile));
            case 4:
              lineHtmlImg = _context5.v;
              if (!isCancelled) {
                _context5.n = 5;
                break;
              }
              return _context5.a(2);
            case 5:
              lineImg = new fabric.Image(lineHtmlImg);
              lineImg.set({
                scaleX: doorImg.width * newScale / lineImg.width,
                scaleY: doorImg.height * newScale / lineImg.height,
                selectable: false,
                id: 'lineLayer',
                evented: false,
                originX: 'center',
                originY: 'center',
                left: cw / 2,
                top: ch / 2
              });
              fabricCanvas.add(lineImg);
              lineImg.moveTo(1);
              _context5.n = 7;
              break;
            case 6:
              _context5.p = 6;
              _t4 = _context5.v;
            case 7:
              fabricCanvas.requestRenderAll();
              _context5.n = 10;
              break;
            case 8:
              _context5.p = 8;
              _t5 = _context5.v;
              if (!isCancelled) {
                _context5.n = 9;
                break;
              }
              return _context5.a(2);
            case 9:
              setCanvasError(actualDoorFile);
              fabricCanvas.requestRenderAll();
            case 10:
              return _context5.a(2);
          }
        }, _callee5, null, [[3, 6], [0, 8]]);
      }));
      function drawCanvas() {
        return _drawCanvas.apply(this, arguments);
      }
      return drawCanvas;
    }();
    drawCanvas();
    return function () {
      isCancelled = true;
    };
  }, [selection, fabricCanvas, isCloudFiltered, cloudFiles, localValidFiles, appView]);
  var handleDownload = function handleDownload() {
    if (!fabricCanvas) return;
    var link = document.createElement('a');
    var fileName = "CY_".concat(selection.design, "_").concat(selection.file.split('.')[0], "_").concat(selection.lineColor || '原色', ".png");
    link.download = fileName;
    link.href = fabricCanvas.toDataURL({
      format: 'png',
      multiplier: 2
    });
    link.click();
  };
  var handleClearAccessories = function handleClearAccessories() {
    if (!fabricCanvas) return;
    var accs = fabricCanvas.getObjects().filter(function (obj) {
      var _obj$id2;
      return (_obj$id2 = obj.id) === null || _obj$id2 === void 0 ? void 0 : _obj$id2.startsWith('acc');
    });
    if (accs.length === 0) return;
    accs.forEach(function (acc) {
      return fabricCanvas.remove(acc);
    });
    fabricCanvas.requestRenderAll();
    setSelectedAcc(null);
    setToastMsg('已清除所有配件');
    setTimeout(function () {
      return setToastMsg('');
    }, 2000);
  };
  var openEditor = function openEditor(designId) {
    setSelection(_objectSpread(_objectSpread({}, selection), {}, {
      design: designId
    }));
    setActiveMenu('colors');
    setAppView('editor');
  };
  if (!isAuthorized) {
    return /*#__PURE__*/React.createElement("div", {
      className: "h-[100dvh] flex flex-col items-center justify-center bg-slate-900 px-8 text-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-20 h-20 bg-blue-600 rounded-3xl mb-6 flex items-center justify-center text-white text-4xl font-black italic shadow-2xl"
    }, "CY"), /*#__PURE__*/React.createElement("h2", {
      className: "text-white text-xl font-bold mb-8 tracking-widest uppercase"
    }, "\u7CFB\u7D71\u6388\u6B0A\u8A2A\u554F"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      value: authKey,
      onChange: function onChange(e) {
        return setAuthKey(e.target.value);
      },
      onKeyDown: function onKeyDown(e) {
        return e.key === 'Enter' && handleCheckKey();
      },
      placeholder: "\u8F38\u5165\u6388\u6B0A\u91D1\u9470",
      className: "w-full max-w-sm p-4 bg-slate-800 border border-slate-700 rounded-xl text-center text-white mb-3 outline-none focus:border-blue-500 uppercase tracking-widest font-bold"
    }), authError && /*#__PURE__*/React.createElement("p", {
      className: "text-rose-500 text-xs font-bold mb-4"
    }, authError), /*#__PURE__*/React.createElement("button", {
      onClick: handleCheckKey,
      className: "w-full max-w-sm py-4 bg-blue-600 text-white rounded-xl font-black shadow-xl active:scale-95 transition-all uppercase tracking-widest"
    }, "\u767B\u5165\u7CFB\u7D71"));
  }

  // =========================================================================
  // 視圖 1：全螢幕型錄總覽 (Gallery View)
  // =========================================================================
  if (appView === 'gallery') {
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-[100dvh] bg-slate-50 flex flex-col font-sans"
    }, toastMsg && /*#__PURE__*/React.createElement("div", {
      className: "fixed top-6 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-3 rounded-full text-xs font-black shadow-2xl z-[60] toast-enter flex items-center gap-2 border-2 border-rose-400"
    }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), " ", toastMsg), /*#__PURE__*/React.createElement("header", {
      className: "h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black italic"
    }, "CY"), /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-black text-slate-800 tracking-widest hidden sm:block"
    }, "\u9580\u7247\u578B\u9304\u7E3D\u89BD"), /*#__PURE__*/React.createElement("h1", {
      className: "text-lg font-black text-slate-800 tracking-widest sm:hidden"
    }, "\u578B\u9304\u7E3D\u89BD")), /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, isScanning && /*#__PURE__*/React.createElement("div", {
      className: "w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: handleRefreshCache,
      className: "bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-black shadow-sm hover:bg-slate-200 active:scale-95 transition-all flex items-center gap-1"
    }, "\uD83D\uDD04 ", /*#__PURE__*/React.createElement("span", {
      className: "hidden sm:inline"
    }, "\u5237\u65B0\u76EE\u9304")))), /*#__PURE__*/React.createElement("main", {
      className: "flex-1 p-4 md:p-10 max-w-[1600px] mx-auto w-full"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mb-6 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-sm font-black text-slate-500 uppercase tracking-widest border-l-4 border-blue-500 pl-3"
    }, "\u8ACB\u9078\u64C7\u60A8\u8981\u7DE8\u8F2F\u7684\u9020\u578B"), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-400 bg-slate-200 px-3 py-1 rounded-full"
    }, validDesigns.length, " \u6B3E\u5F0F")), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
    }, validDesigns.slice(0, visibleDesignCount).map(function (id) {
      return /*#__PURE__*/React.createElement(DesignCard, {
        key: id,
        id: id,
        cloudFiles: cloudFiles,
        isCloudFiltered: isCloudFiltered,
        localDoorFiles: localThumbFiles.length > 0 ? localThumbFiles : Array.from(localValidFiles.doors),
        localThumbMap: localThumbMap,
        onSelect: openEditor
      });
    }), visibleDesignCount < validDesigns.length && /*#__PURE__*/React.createElement("div", {
      className: "col-span-full flex justify-center pt-4"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setVisibleDesignCount(function (prev) {
          return Math.min(prev + 24, validDesigns.length);
        });
      },
      className: "px-5 py-3 bg-white border border-slate-200 rounded-xl text-sm font-black text-slate-600 shadow-sm hover:bg-slate-50 active:scale-95 transition-all"
    }, "\u8F09\u5165\u66F4\u591A")))));
  }

  // =========================================================================
  // 視圖 2：編輯器工作室 (Editor View)
  // =========================================================================
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col md:flex-row h-[100dvh] w-screen bg-slate-50 font-sans overflow-hidden relative animate-in fade-in duration-300"
  }, toastMsg && /*#__PURE__*/React.createElement("div", {
    className: "absolute top-16 left-1/2 -translate-x-1/2 bg-rose-600 text-white px-6 py-3 rounded-full text-xs font-black shadow-2xl z-[60] toast-enter flex items-center gap-2 border-2 border-rose-400"
  }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), " ", toastMsg), /*#__PURE__*/React.createElement("div", {
    className: "\n                        absolute md:relative top-0 left-0 h-[calc(100dvh-70px)] md:h-full \n                        w-[50%] md:w-80 bg-white border-r border-slate-200 z-40 shadow-2xl md:shadow-none \n                        transition-all duration-300 flex flex-col shrink-0\n                        ".concat(activeMenu ? 'ml-0' : '-ml-[50%] md:ml-0', "\n                    ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "hidden md:flex h-14 bg-slate-50 border-b border-slate-200 shrink-0"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveMenu('colors');
    },
    className: "flex-1 flex flex-col items-center justify-center transition-colors ".concat(activeMenu === 'colors' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:bg-slate-100')
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-black"
  }, "\u677F\u6750\u8207\u7DDA\u689D")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveMenu('acc');
    },
    className: "flex-1 flex flex-col items-center justify-center transition-colors ".concat(activeMenu === 'acc' ? 'bg-white text-blue-600 border-b-2 border-blue-600' : 'text-slate-400 hover:bg-slate-100')
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-black"
  }, "\u914D\u4EF6\u8207\u628A\u624B"))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden flex h-12 bg-blue-50 border-b border-blue-100 items-center justify-between px-4 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-black text-blue-600 uppercase"
  }, activeMenu === 'colors' ? '板材/線條' : '配件飾面'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveMenu(null);
    },
    className: "text-blue-400 font-bold text-lg leading-none"
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 overflow-y-auto p-3 custom-scrollbar bg-slate-50/30 tab-content relative"
  }, activeMenu === 'colors' && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-6 pb-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl shadow-sm border border-slate-100"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-black text-slate-400 mb-2 border-l-2 border-blue-400 pl-1 uppercase"
  }, "\u7DDA\u689D\u984F\u8272"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSelection(_objectSpread(_objectSpread({}, selection), {}, {
        lineColor: ''
      }));
    },
    className: "p-2 border-2 rounded-lg flex flex-col items-center gap-1 ".concat(selection.lineColor === '' ? 'border-blue-500 bg-blue-50' : 'border-slate-100')
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full h-1.5 bg-slate-200 rounded-full"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-bold text-slate-600"
  }, "\u539F\u6A23")), Object.entries(CONFIG.lineColors).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      lc = _ref3[0],
      d = _ref3[1];
    if (!hasLineFile("".concat(selection.design, "_").concat(lc, ".png")) && !hasLineFile("".concat(selection.design, "-").concat(lc, ".png"))) return null;
    return /*#__PURE__*/React.createElement("button", {
      key: lc,
      onClick: function onClick() {
        return setSelection(_objectSpread(_objectSpread({}, selection), {}, {
          lineColor: lc
        }));
      },
      className: "p-2 border-2 rounded-lg flex flex-col items-center gap-1 ".concat(selection.lineColor === lc ? 'border-blue-500 bg-blue-50' : 'border-slate-100')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full h-1.5 rounded-full border border-slate-200",
      style: {
        backgroundColor: d.hex
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-bold text-slate-600"
    }, d.name));
  }))), Object.entries(CONFIG.series).map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      tId = _ref5[0],
      tName = _ref5[1];
    var seriesColors = Object.entries(CONFIG.colors).filter(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
        cId = _ref7[0];
      var baseOld = "".concat(selection.design).concat(tId).concat(cId).toLowerCase();
      var baseNew = "".concat(selection.design, "-").concat(tId).concat(cId).toLowerCase();
      return filesForCurrentDesign.some(function (f) {
        var lower = f.toLowerCase();
        return lower.startsWith(baseOld) || lower.startsWith(baseNew);
      });
    });
    if (seriesColors.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: tId
    }, /*#__PURE__*/React.createElement("p", {
      className: "text-[10px] font-black text-slate-500 mb-2 border-l-2 border-slate-300 pl-1 uppercase"
    }, tName), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-2 gap-2"
    }, seriesColors.map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        cId = _ref9[0],
        c = _ref9[1];
      var baseOld = "".concat(selection.design).concat(tId).concat(cId).toLowerCase();
      var baseNew = "".concat(selection.design, "-").concat(tId).concat(cId).toLowerCase();
      var exactFile = filesForCurrentDesign.find(function (f) {
        var noExt = f.toLowerCase().replace(/\.(jpg|png)$/, '');
        return noExt === baseOld || noExt === baseNew;
      });
      if (!exactFile) {
        exactFile = filesForCurrentDesign.find(function (f) {
          var lower = f.toLowerCase();
          return lower.startsWith(baseOld) || lower.startsWith(baseNew);
        });
      }
      if (!exactFile) exactFile = "".concat(selection.design, "-").concat(tId).concat(cId, ".jpg");
      var displayName = tId === '5' ? '大理石' : c.name;
      return /*#__PURE__*/React.createElement("button", {
        key: cId,
        onClick: function onClick() {
          return setSelection(_objectSpread(_objectSpread({}, selection), {}, {
            file: exactFile
          }));
        },
        className: "p-2 border-2 rounded-xl flex flex-col items-center gap-1 transition-all bg-white ".concat(selection.file === exactFile ? 'border-rose-500 shadow-md ring-2 ring-rose-50' : 'border-slate-100 hover:border-slate-300')
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-full aspect-square rounded-lg shadow-inner border border-slate-100",
        style: {
          backgroundColor: c.hex
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-[9px] font-black text-slate-600 truncate w-full text-center leading-none mt-1"
      }, displayName));
    })));
  }), specialOptions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "border-t border-slate-200 pt-4 mt-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-black text-amber-600 mb-2 border-l-2 border-amber-400 pl-1 uppercase"
  }, "\u7279\u6B8A\u6B3E\u5F0F\u8207\u8B8A\u5316\u6B3E"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2"
  }, specialOptions.map(function (f) {
    return /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: function onClick() {
        return setSelection(_objectSpread(_objectSpread({}, selection), {}, {
          file: f
        }));
      },
      className: "p-3 border-2 rounded-xl text-[10px] font-black transition-all bg-white ".concat(selection.file === f ? 'border-amber-500 bg-amber-50 text-amber-700 shadow-sm' : 'border-slate-200 text-slate-600 hover:border-amber-200')
    }, f.split('.')[0]);
  })))), activeMenu === 'acc' && /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-4 pb-6"
  }, !selectedAcc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: handleClearAccessories,
    className: "w-full py-2 bg-rose-50 text-rose-500 rounded-lg border border-rose-200 text-[10px] font-black hover:bg-rose-100 active:scale-95 transition-all flex items-center justify-center gap-1 shadow-sm"
  }, "\uD83D\uDDD1\uFE0F \u4E00\u9375\u6E05\u9664\u6240\u6709\u914D\u4EF6"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 mb-2 mt-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAccTab('glass');
    },
    className: "flex-1 py-2 text-[10px] font-black rounded-lg border-2 transition-all ".concat(accTab === 'glass' ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50')
  }, "\u73BB\u7483\u6846"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAccTab('louver');
    },
    className: "flex-1 py-2 text-[10px] font-black rounded-lg border-2 transition-all ".concat(accTab === 'louver' ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-sm' : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50')
  }, "\u767E\u9801")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, (accTab === 'glass' ? dynamicAccessories.glass : dynamicAccessories.louver).map(function (acc) {
    return /*#__PURE__*/React.createElement("button", {
      key: acc.id,
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var accHtmlImg, img, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return loadImageSafe("accessories/".concat(acc.id, "_\u767D.png"));
            case 1:
              accHtmlImg = _context6.v;
              img = new fabric.Image(accHtmlImg);
              var doorObj = fabricCanvas.getObjects().find(function (obj) {
                return obj.id === 'door';
              });
              var accScale = getAccessoryScale(img, doorObj, acc.id);
              img.set({
                left: fabricCanvas.getWidth() / 2,
                top: fabricCanvas.getHeight() / 2,
                originX: 'center',
                originY: 'center',
                id: "acc-".concat(Date.now()),
                baseId: acc.id,
                currentColor: "白",
                scaleX: accScale.scaleX,
                scaleY: accScale.scaleY,
                doorRatioWidth: accScale.ratioWidth,
                doorRatioHeight: accScale.ratioHeight,
                hasControls: true,
                lockScalingX: true,
                lockScalingY: true,
                lockRotation: false,
                hasBorders: true,
                cornerColor: '#3b82f6',
                transparentCorners: false
              });
              img.setControlsVisibility({
                mt: false,
                mb: false,
                ml: false,
                mr: false,
                tl: false,
                tr: false,
                bl: false,
                br: false,
                mtr: true
              });
              fabricCanvas.add(img).setActiveObject(img).requestRenderAll();
              setActiveMenu('acc');
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              setToastMsg("\u627E\u4E0D\u5230\u914D\u4EF6\u9810\u8A2D\u8272\uFF1A".concat(acc.id, "_\u767D.png"));
              setTimeout(function () {
                return setToastMsg('');
              }, 3000);
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      })),
      className: "p-2 border-2 border-slate-100 bg-white rounded-xl flex flex-col items-center gap-2 active:scale-95 transition-all hover:border-blue-300 shadow-sm group"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-full h-20 bg-slate-50 rounded-lg p-2 flex items-center justify-center border border-slate-100 overflow-hidden relative"
    }, /*#__PURE__*/React.createElement("img", {
      src: "accessories/".concat(acc.id, "_\u767D.png"),
      alt: acc.name,
      loading: "lazy",
      className: "max-w-full max-h-full object-contain drop-shadow-sm group-hover:scale-105 transition-transform",
      onError: function onError(e) {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'block';
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden text-slate-300 text-[10px] font-bold"
    }, "\u7121\u9810\u89BD")), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-black text-slate-700 text-center leading-tight truncate w-full"
    }, acc.name));
  }), (accTab === 'glass' ? dynamicAccessories.glass : dynamicAccessories.louver).length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "col-span-2 text-center py-4 text-[10px] text-slate-400 font-bold border border-dashed border-slate-200 rounded-lg"
  }, "\u8A72\u5206\u985E\u4E0B\u5C1A\u672A\u4E0A\u50B3\u914D\u4EF6\u5716\u6A94"))) : /*#__PURE__*/React.createElement("div", {
    className: "bg-white p-3 rounded-xl border-2 border-blue-200 shadow-sm animate-in fade-in slide-in-from-top-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col overflow-hidden pr-2"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-[9px] text-blue-500 font-black mb-1 uppercase tracking-widest"
  }, "\u6B63\u5728\u7DE8\u8F2F\u914D\u4EF6"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-black text-slate-800 truncate"
  }, selectedAcc.baseId)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      // 取消畫布上的選取狀態
      fabricCanvas.discardActiveObject();
      fabricCanvas.requestRenderAll();
      // 切換回配件清單視圖
      setSelectedAcc(null);
    },
    className: "shrink-0 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-[10px] font-black transition-all border border-slate-200 flex items-center gap-1 active:scale-95 shadow-sm"
  }, "\u2B05 \u8FD4\u56DE")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      fabricCanvas.remove(selectedAcc);
      fabricCanvas.requestRenderAll();
      setSelectedAcc(null);
    },
    className: "w-full py-3 bg-rose-500 text-white rounded-lg font-black text-[11px] shadow-md active:bg-rose-600 active:scale-95 transition-all mb-5 flex items-center justify-center gap-2"
  }, "\uD83D\uDDD1\uFE0F \u522A\u9664\u6B64\u914D\u4EF6"), /*#__PURE__*/React.createElement("p", {
    className: "text-[10px] font-black text-slate-400 mb-2 border-l-2 border-slate-200 pl-1 uppercase"
  }, "\u98FE\u9762\u984F\u8272\u66F4\u63DB"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-2"
  }, CONFIG.accColors.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var newHtmlImg, newImg, _t7;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return loadImageSafe("accessories/".concat(selectedAcc.baseId, "_").concat(c.id, ".png"));
            case 1:
              newHtmlImg = _context7.v;
              newImg = new fabric.Image(newHtmlImg);
              newImg.set({
                left: selectedAcc.left,
                top: selectedAcc.top,
                scaleX: selectedAcc.scaleX,
                scaleY: selectedAcc.scaleY,
                id: selectedAcc.id,
                baseId: selectedAcc.baseId,
                currentColor: c.id,
                doorRatioWidth: selectedAcc.doorRatioWidth || null,
                doorRatioHeight: selectedAcc.doorRatioHeight || null,
                hasControls: true,
                lockScalingX: true,
                lockScalingY: true,
                lockRotation: false,
                hasBorders: true,
                cornerColor: '#3b82f6',
                transparentCorners: false
              });
              newImg.setControlsVisibility({
                mt: false,
                mb: false,
                ml: false,
                mr: false,
                tl: false,
                tr: false,
                bl: false,
                br: false,
                mtr: true
              });
              fabricCanvas.remove(selectedAcc).add(newImg).setActiveObject(newImg).requestRenderAll();
              setSelectedAcc(newImg);
              _context7.n = 3;
              break;
            case 2:
              _context7.p = 2;
              _t7 = _context7.v;
              setToastMsg("\u627E\u4E0D\u5230\u914D\u4EF6\u984F\u8272\uFF1A".concat(selectedAcc.baseId, "_").concat(c.id, ".png"));
              setTimeout(function () {
                return setToastMsg('');
              }, 3000);
            case 3:
              return _context7.a(2);
          }
        }, _callee7, null, [[0, 2]]);
      })),
      className: "p-2 border-2 rounded-lg flex flex-col items-center gap-1 ".concat(selectedAcc.currentColor === c.id ? 'border-blue-500 bg-blue-50' : 'border-slate-100 hover:bg-slate-50')
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-6 h-6 rounded-full border shadow-inner",
      style: {
        backgroundColor: c.hex
      }
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-black text-slate-600"
    }, c.name));
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col relative h-[calc(100dvh-70px)] md:h-full min-w-0 pb-[70px] md:pb-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "h-14 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 z-10 shrink-0 shadow-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAppView('gallery');
    },
    className: "bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-[11px] font-black shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-sm"
  }, "\u2B05"), " \u8FD4\u56DE\u578B\u9304"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col hidden sm:flex"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[9px] font-black text-slate-400 tracking-widest uppercase"
  }, "\u7DE8\u8F2F\u6A21\u5F0F"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-black text-slate-800"
  }, "\u9020\u578B ", selection.design, " ", selection.lineColor ? "(".concat(CONFIG.lineColors[selection.lineColor].name, ")") : ''))), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleDownload,
    className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-[12px] font-black tracking-widest shadow-[0_4px_15px_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.6)] hover:-translate-y-0.5 active:scale-95 transition-all uppercase hidden md:flex items-center gap-2 border border-blue-400"
  }, "\uD83D\uDCE5 \u5132\u5B58\u5716\u6A94"))), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 canvas-bg relative w-full h-full min-h-[300px]",
    ref: canvasContainerRef
  }, /*#__PURE__*/React.createElement(CanvasBox, null), canvasError && /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-30 transition-all ".concat(activeMenu ? 'pl-[50%] md:pl-0' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white/95 border-2 border-rose-500 rounded-2xl p-5 md:p-8 text-center shadow-2xl backdrop-blur-sm mx-4 animate-in zoom-in duration-300"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-rose-500 font-black text-lg md:text-xl mb-2 flex items-center justify-center gap-2"
  }, /*#__PURE__*/React.createElement("span", null, "\u26A0\uFE0F"), " \u5C1A\u672A\u4E0A\u50B3\u5716\u6A94"), /*#__PURE__*/React.createElement("p", {
    className: "text-rose-600 font-bold text-sm md:text-base break-all bg-rose-50 px-3 py-1 rounded-md"
  }, canvasError))))), /*#__PURE__*/React.createElement("div", {
    className: "md:hidden fixed bottom-0 left-0 w-full h-[70px] bg-white border-t flex items-center justify-around z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom)]"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveMenu(activeMenu === 'colors' ? null : 'colors');
    },
    className: "nav-btn flex flex-col items-center justify-center flex-1 h-full gap-1 ".concat(activeMenu === 'colors' ? 'text-blue-600' : 'text-slate-400')
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl"
  }, "\uD83C\uDFA8"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black uppercase tracking-widest"
  }, "\u677F\u6750\u8272")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveMenu(activeMenu === 'acc' ? null : 'acc');
    },
    className: "nav-btn flex flex-col items-center justify-center flex-1 h-full gap-1 ".concat(activeMenu === 'acc' ? 'text-blue-600' : 'text-slate-400')
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl"
  }, "\u2699\uFE0F"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black uppercase tracking-widest"
  }, "\u52A0\u914D\u4EF6")), /*#__PURE__*/React.createElement("button", {
    onClick: handleDownload,
    className: "nav-btn flex flex-col items-center justify-center flex-1 h-full gap-1 text-indigo-500 hover:text-indigo-700 active:scale-95 transition-transform"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl"
  }, "\uD83D\uDCE5"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-black uppercase tracking-widest"
  }, "\u5132\u5B58\u5716\u6A94"))));
};
var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    _classCallCheck(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false,
      errMsg: ''
    };
    return _this;
  }
  _inherits(ErrorBoundary, _React$Component);
  return _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.hasError) return /*#__PURE__*/React.createElement("div", {
        className: "p-8 text-rose-600 font-bold bg-rose-50 h-screen w-screen"
      }, "\u7CFB\u7D71\u5D29\u6F70\u4FDD\u8B77\uFF1A", /*#__PURE__*/React.createElement("br", null), this.state.errMsg);
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true,
        errMsg: error.message
      };
    }
  }]);
}(React.Component);
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(App, null)));

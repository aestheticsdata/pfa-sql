"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StyledCharts_1 = __importDefault(require("@components/spendings/spendingDashboard/charts/StyledCharts"));
var StyledCategoryBar_1 = __importDefault(require("./StyledCategoryBar"));
var react_1 = require("react");
var requestHelper_1 = require("@helpers/requestHelper");
var react_redux_1 = require("react-redux");
var Tooltip_1 = __importDefault(require("@components/spendings/spendingDashboard/charts/Tooltip"));
var react_transition_group_1 = require("react-transition-group");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var WidgetHeader_1 = __importDefault(require("@components/spendings/spendingDashboard/common/WidgetHeader"));
var getMaxValue = function (data) { return Math.max.apply(Math, data.map(function (category) { return +category.value; })); };
var getTotal = function (data) { return data.reduce(function (acc, curr) { return acc + curr.value; }, 0); };
var widthOfContainer = 240; // 300 - (border width * 2)
var Charts = function (_a) {
    var url = _a.url, currency = _a.currency, title = _a.title, periodType = _a.periodType;
    var _b = react_1.useState(0), maxv = _b[0], setMaxv = _b[1];
    var _c = react_1.useState(0), total = _c[0], setTotal = _c[1];
    var _d = react_1.useState(false), isTooltipVisible = _d[0], setIsTooltipVisible = _d[1];
    var _e = react_1.useState({ x: 0, y: 0 }), tooltipPos = _e[0], setTooltipPos = _e[1];
    var _f = react_1.useState(null), categoryInfos = _f[0], setCategoryInfos = _f[1];
    var _g = react_1.useState([]), weeklyCharts = _g[0], setWeeklyCharts = _g[1];
    var spendingsIsLoading = react_redux_1.useSelector(function (state) { return state.spendingsReducer.isLoading; });
    var getCharts = function () { return __awaiter(void 0, void 0, void 0, function () {
        var charts, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, requestHelper_1.privateRequest(url)];
                case 1:
                    charts = _a.sent();
                    setWeeklyCharts(charts.data);
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log(e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        if (spendingsIsLoading === false) {
            setMaxv(0);
            getCharts();
        }
    }, [spendingsIsLoading]);
    react_1.useEffect(function () {
        setMaxv(getMaxValue(weeklyCharts));
        setTotal(getTotal(weeklyCharts));
    }, [weeklyCharts]);
    var getWidth = function (value) {
        var width;
        if (maxv !== 0) {
            width = (value * widthOfContainer) / maxv;
        }
        return width;
    };
    return (<StyledCharts_1.default>
      <WidgetHeader_1.default title={title} periodType={periodType}/>
      <div className="stats-container">
        {weeklyCharts.length === 0 && (<div className="charts-icon">
              <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faChartBar}/>
            </div>)}
        <react_transition_group_1.TransitionGroup>
        {maxv !== 0 &&
            weeklyCharts.map(function (category) {
                return (<react_transition_group_1.CSSTransition key={category.label + '-csstransition'} timeout={300} classNames="transition-bar">
                  <div className="bar-container" key={category.label}>
                    <StyledCategoryBar_1.default bgcolor={category.bgcolor}>
                      <div className="bar" style={{
                        width: getWidth(category.value)
                    }} onMouseEnter={function () { return setIsTooltipVisible(true); }} onMouseLeave={function () { return setIsTooltipVisible(false); }} onMouseMove={function (e) {
                        setTooltipPos({ x: e.clientX, y: e.clientY });
                        setCategoryInfos(category);
                    }}/>
                    </StyledCategoryBar_1.default>
                    <div className="percent-value">
                      {Number((category.value / total) * 100).toFixed(1)}%
                    </div>
                  </div>
                </react_transition_group_1.CSSTransition>);
            })}
        </react_transition_group_1.TransitionGroup>
        {isTooltipVisible && categoryInfos && (<Tooltip_1.default tooltipPos={tooltipPos} categoryInfos={categoryInfos} currency={currency}/>)}
      </div>
    </StyledCharts_1.default>);
};
exports.default = Charts;

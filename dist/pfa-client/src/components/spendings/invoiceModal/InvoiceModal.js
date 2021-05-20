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
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var use_onclickoutside_1 = __importDefault(require("use-onclickoutside"));
var StyledInvoiceModal_1 = __importDefault(require("./StyledInvoiceModal"));
var react_intl_1 = require("react-intl");
var messages_1 = __importDefault(require("../messages"));
var requestHelper_1 = require("@helpers/requestHelper");
var InvoiceImageModal_1 = __importDefault(require("./invoiceImageModal/InvoiceImageModal"));
var Category_1 = __importDefault(require("@components/common/Category"));
var Wedges_3s_200px_svg_1 = require("@src/assets/Wedges-3s-200px.svg");
var actions_1 = require("@components/spendings/actions");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var InvoiceModal = function (_a) {
    var handleClickOutside = _a.handleClickOutside, spending = _a.spending;
    var fileSizeLimit = 32097152;
    var _b = react_1.useState(''), invoicefile = _b[0], setInvoicefile = _b[1];
    var _c = react_1.useState(null), invoiceImage = _c[0], setInvoiceImage = _c[1];
    var _d = react_1.useState(false), isFileTooBig = _d[0], setIsFileTooBig = _d[1];
    var _e = react_1.useState(true), isLoading = _e[0], setIsLoading = _e[1];
    var _f = react_1.useState(false), isClickOnThumbnail = _f[0], setIsClickOnThumbnail = _f[1];
    var _g = react_1.useState(0), progressValue = _g[0], setProgressValue = _g[1];
    var _h = react_1.useState(false), isProgress = _h[0], setIsProgress = _h[1];
    var ref = react_1.useRef(null);
    var dispatch = react_redux_1.useDispatch();
    var onChange = function (e) { setInvoicefile(e.target.files[0]); };
    var userID = react_redux_1.useSelector(function (state) { return state.loginReducer.user.id; });
    var handleClickOutsideCheckFullImage = function () {
        !isClickOnThumbnail && handleClickOutside();
    };
    use_onclickoutside_1.default(ref, handleClickOutsideCheckFullImage);
    var deleteImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var res, e_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    setIsLoading(true);
                    return [4 /*yield*/, requestHelper_1.privateRequest('/spendings/upload', {
                            method: 'PUT',
                            data: spending,
                        })];
                case 1:
                    res = _b.sent();
                    if (((_a = res === null || res === void 0 ? void 0 : res.data) === null || _a === void 0 ? void 0 : _a.msg) === 'INVOICE_IMAGE_DELETED') {
                        setInvoiceImage(null);
                        setInvoicefile('');
                        dispatch(actions_1.updateInvoicefileReducerStatus(spending, 'delete'));
                        setIsLoading(false);
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _b.sent();
                    console.log('error deleting image : ', e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var uploadInvoiceImage = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
        var config, uploadedImage, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    config = {
                        onUploadProgress: function (progressEvent) {
                            var progressValue = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            setProgressValue(progressValue);
                            if (progressValue === 100) {
                                setIsProgress(false);
                                setProgressValue(0);
                            }
                        }
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setIsProgress(true);
                    setIsLoading(true);
                    return [4 /*yield*/, requestHelper_1.privateRequest('/spendings/upload', {
                            method: 'POST',
                            data: payload,
                        }, config)];
                case 2:
                    uploadedImage = _a.sent();
                    setInvoiceImage(uploadedImage.data);
                    dispatch(actions_1.updateInvoicefileReducerStatus(spending, 'create'));
                    setIsLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    console.log('error uploading image : ', e_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getInvoiceImage = function (spending) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    return [4 /*yield*/, requestHelper_1.privateRequest("/spendings/upload/" + spending.ID + "?userID=" + userID + "&itemType=" + spending.itemType)];
                case 1:
                    res = _a.sent();
                    setInvoiceImage(res.data);
                    setIsLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        getInvoiceImage(spending);
        // prevent scrolling on body when modal is open
        document.body.style.overflowY = 'hidden';
        return function () {
            document.body.style.overflowY = 'auto';
        };
    }, []);
    var onSubmit = function () {
        setIsFileTooBig(false);
        var formData = new FormData();
        // beware, userID must be append before file
        // see : https://stackoverflow.com/questions/39589022/node-js-multer-and-req-body-empty
        formData.append('userID', userID);
        switch (spending.itemType) {
            case 'recurring':
                formData.append('itemType', 'recurring');
                formData.append('dateFrom', spending.dateFrom);
                break;
            case 'spending':
                formData.append('itemType', 'spending');
                formData.append('date', spending.date);
                break;
            default:
                break;
        }
        formData.append('label', spending.label);
        formData.append('spendingID', spending.ID);
        formData.append('invoiceImageUpload', invoicefile);
        if (invoicefile.size > fileSizeLimit) {
            setIsFileTooBig(true);
        }
        else {
            uploadInvoiceImage(formData);
        }
    };
    return (<StyledInvoiceModal_1.default>
      <div ref={ref} className="modal-content">
        {isClickOnThumbnail ?
            <InvoiceImageModal_1.default image={invoiceImage} closeImage={function () { return setIsClickOnThumbnail(!isClickOnThumbnail); }}/>
            :
                null}
        <div className="header">
          <span className="label" title={spending.label}>
            {spending.label}
          </span>
          {(spending === null || spending === void 0 ? void 0 : spending.category) && Category_1.default(spending)}
          <span className="amount">
            <react_intl_1.FormattedNumber value={spending.amount} style="currency" currency={spending.currency}/>
          </span>
        </div>
        <div className="image-container">
          {isLoading ?
            <div className="spinner">
                <Wedges_3s_200px_svg_1.ReactComponent width="60px" height="60px"/>
              </div>
            :
                invoiceImage ?
                    <img src={invoiceImage} className="invoice-image" width="30%" alt="invoice" onClick={function () { setIsClickOnThumbnail(!isClickOnThumbnail); }}/>
                    :
                        <div className="no-invoice">
                  <div className="no-invoice-label">
                    <react_intl_1.FormattedMessage {...messages_1.default.noInvoice}/>
                  </div>
                </div>}
        </div>
        <div className="inputfile-container">
          {isFileTooBig && (<div className="file-too-big">
                <react_intl_1.FormattedMessage {...messages_1.default.fileIsTooBig}/>
              </div>)}
          {isLoading ?
            isProgress ?
                <progress id="progressBar" value={progressValue} max="100" style={{ width: '300px' }}/>
                :
                    <div className="spinner">
                  <Wedges_3s_200px_svg_1.ReactComponent width="60px" height="60px"/>
                </div>
            :
                invoiceImage ?
                    <button className="delete-btn" onClick={deleteImage}>
                  <react_intl_1.FormattedMessage {...messages_1.default.deleteImage}/>
                </button>
                    :
                        <>
                  <input type="file" className="invoice-inputfile" id="invoicefileinputid" name="invoicefile" accept="image/jpeg" onChange={onChange}/>
                  <div className="label-wrapper">
                    <label htmlFor="invoicefileinputid">
                      {invoicefile !== '' ?
                                <div className="input-filename">
                            {invoicefile.name}
                          </div>
                                :
                                    <div className="choose-file">
                            <div className="upload-icon">
                              <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faFileUpload}/>
                            </div>
                            <div className="upload-choosefile-label">
                              <react_intl_1.FormattedMessage {...messages_1.default.chooseFile}/>
                            </div>
                            <div className="onlyformat">
                              (<react_intl_1.FormattedMessage {...messages_1.default.onlyThisFormat}/>)
                            </div>
                          </div>}
                    </label>
                    {invoicefile && (<button className="upload-submit-btn" onClick={onSubmit} disabled={invoicefile === ''}>
                          <react_intl_1.FormattedMessage {...messages_1.default.sendImageLabel}/>
                        </button>)}
                  </div>
                </>}
        </div>
      </div>
    </StyledInvoiceModal_1.default>);
};
exports.default = InvoiceModal;

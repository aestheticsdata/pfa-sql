"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var formik_1 = require("formik");
var validationHelper_1 = require("./helpers/validationHelper");
var currency_symbol_map_1 = __importDefault(require("currency-symbol-map"));
var StyledSharedLoginForm_1 = __importDefault(require("./StyledSharedLoginForm"));
var currency_codes_json_1 = __importDefault(require("@src/currency-codes.json"));
var SharedLoginForm = function (_a) {
    var onSubmit = _a.onSubmit, buttonTitle = _a.buttonTitle, displayEmailField = _a.displayEmailField, displayPasswordField = _a.displayPasswordField, displayCurrencyField = _a.displayCurrencyField;
    var _b = react_1.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = validationHelper_1.validationHelper(), validateEmail = _c.validateEmail, validatePassword = _c.validatePassword;
    var getCurrenciesList = function () {
        return (currency_codes_json_1.default.map(function (currency) {
            return <option key={currency.code} value={currency.code}>
          {currency.name} : {currency_symbol_map_1.default(currency.code)}
        </option>;
        }));
    };
    return (<StyledSharedLoginForm_1.default>
      <div className="container">
        <div className="title">Personal Finance Assistant</div>
        <formik_1.Formik initialValues={{ email: '', password: '', currency: 'EUR' }} onSubmit={onSubmit}>
          {function (_a) {
            var isSubmitting = _a.isSubmitting, errors = _a.errors;
            return (<formik_1.Form>
              {displayEmailField ?
                    <>
                    <formik_1.Field type="email" name="email" placeholder="email" validate={validateEmail}/>
                    {errors.email && <div>{errors.email}</div>}
                  </>
                    :
                        null}
              {displayPasswordField ?
                    <div className="password-container">
                    <formik_1.Field type={showPassword ? 'text' : 'password'} name="password" placeholder="password" validate={validatePassword}/>
                    {errors.password && <div>{errors.password}</div>}
                    <span className="show-password" onClick={function () { return setShowPassword(!showPassword); }}>
                      {showPassword ?
                            <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faEyeSlash}/>
                            :
                                <react_fontawesome_1.FontAwesomeIcon icon={free_solid_svg_icons_1.faEye}/>}
                    </span>
                  </div>
                    :
                        null}
              {displayCurrencyField ?
                    <>
                    <formik_1.Field component="select" name="currency">
                      {getCurrenciesList()}
                    </formik_1.Field>
                  </>
                    :
                        null}
              <button type="submit" disabled={isSubmitting || errors.email || errors.password} className="shared-login-submit-btn">
                {buttonTitle}
              </button>
            </formik_1.Form>);
        }}
        </formik_1.Formik>
      </div>
    </StyledSharedLoginForm_1.default>);
};
exports.default = SharedLoginForm;

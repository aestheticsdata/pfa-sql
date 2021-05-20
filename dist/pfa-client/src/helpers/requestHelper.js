"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRequest = exports.request = void 0;
var axios_1 = __importDefault(require("axios"));
var lodash_1 = __importDefault(require("lodash"));
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var history_1 = require("../history");
var index_1 = require("../index");
var messages_1 = __importDefault(require("./messages"));
var privateRequest = function (url, options, config) {
    var tokenBearer = {
        headers: {
            'Authorization': "Bearer " + localStorage.getItem('pfa-token'),
        },
    };
    var axiosInstance = axios_1.default.create(__assign({ headers: tokenBearer.headers }, config));
    axiosInstance.interceptors.response.use(function (response) { return response; }, function (err) {
        if (err.response.status && err.response.status === 401) {
            sweetalert2_1.default.fire({
                title: index_1.intl.formatMessage(__assign({}, messages_1.default.expiredToken)),
                text: index_1.intl.formatMessage(__assign({}, messages_1.default.text)),
                type: 'info',
                grow: 'fullscreen',
                showConfirmButton: false,
                timer: 3000,
                onClose: function () {
                    history_1.history.push('/logout');
                }
            });
        }
        // see https://stackoverflow.com/questions/56954527/handling-a-promise-reject-in-axios-interceptor
        // see https://stackoverflow.com/questions/49886315/axios-interceptors-response-undefined
        // see https://github.com/axios/axios#interceptors
        return Promise.reject(err);
        // throw err;
    });
    return axiosInstance(url, lodash_1.default.merge(options, tokenBearer));
};
exports.privateRequest = privateRequest;
var request = function (url, options) {
    return axios_1.default(url, options);
};
exports.request = request;

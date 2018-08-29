/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require("../ApiClient");

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _modelCertLicenseStatsResponse = require('../model/CertLicenseStatsResponse');

var _modelCertLicenseStatsResponse2 = _interopRequireDefault(_modelCertLicenseStatsResponse);

/**
* LicenseService service.
* @module api/LicenseServiceApi
* @version 1.0
*/

var LicenseServiceApi = (function () {

  /**
  * Constructs a new LicenseServiceApi. 
  * @alias module:api/LicenseServiceApi
  * @class
  * @param {module:ApiClient} apiClient Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */

  function LicenseServiceApi(apiClient) {
    _classCallCheck(this, LicenseServiceApi);

    this.apiClient = apiClient || _ApiClient2['default'].instance;
  }

  /**
   * [Enterprise Only] Display statistics about licenses usage
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.forceRefresh 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CertLicenseStatsResponse} and HTTP response
   */

  LicenseServiceApi.prototype.licenseStatsWithHttpInfo = function licenseStatsWithHttpInfo(opts) {
    opts = opts || {};
    var postBody = null;

    var pathParams = {};
    var queryParams = {
      'ForceRefresh': opts['forceRefresh']
    };
    var headerParams = {};
    var formParams = {};

    var authNames = [];
    var contentTypes = ['application/json'];
    var accepts = ['application/json'];
    var returnType = _modelCertLicenseStatsResponse2['default'];

    return this.apiClient.callApi('/license/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
  };

  /**
   * [Enterprise Only] Display statistics about licenses usage
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.forceRefresh 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CertLicenseStatsResponse}
   */

  LicenseServiceApi.prototype.licenseStats = function licenseStats(opts) {
    return this.licenseStatsWithHttpInfo(opts).then(function (response_and_data) {
      return response_and_data.data;
    });
  };

  return LicenseServiceApi;
})();

exports['default'] = LicenseServiceApi;
module.exports = exports['default'];
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

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _EncryptionKey = require('./EncryptionKey');

var _EncryptionKey2 = _interopRequireDefault(_EncryptionKey);

/**
* The EncryptionAdminExportKeyResponse model module.
* @module model/EncryptionAdminExportKeyResponse
* @version 1.0
*/

var EncryptionAdminExportKeyResponse = (function () {
    /**
    * Constructs a new <code>EncryptionAdminExportKeyResponse</code>.
    * @alias module:model/EncryptionAdminExportKeyResponse
    * @class
    */

    function EncryptionAdminExportKeyResponse() {
        _classCallCheck(this, EncryptionAdminExportKeyResponse);

        this.Key = undefined;
    }

    /**
    * Constructs a <code>EncryptionAdminExportKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EncryptionAdminExportKeyResponse} obj Optional instance to populate.
    * @return {module:model/EncryptionAdminExportKeyResponse} The populated <code>EncryptionAdminExportKeyResponse</code> instance.
    */

    EncryptionAdminExportKeyResponse.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionAdminExportKeyResponse();

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = _EncryptionKey2['default'].constructFromObject(data['Key']);
            }
        }
        return obj;
    };

    /**
    * @member {module:model/EncryptionKey} Key
    */
    return EncryptionAdminExportKeyResponse;
})();

exports['default'] = EncryptionAdminExportKeyResponse;
module.exports = exports['default'];
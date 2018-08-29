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


import ApiClient from '../ApiClient';
import EncryptionKey from './EncryptionKey';





/**
* The EncryptionAdminImportKeyRequest model module.
* @module model/EncryptionAdminImportKeyRequest
* @version 1.0
*/
export default class EncryptionAdminImportKeyRequest {
    /**
    * Constructs a new <code>EncryptionAdminImportKeyRequest</code>.
    * @alias module:model/EncryptionAdminImportKeyRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>EncryptionAdminImportKeyRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/EncryptionAdminImportKeyRequest} obj Optional instance to populate.
    * @return {module:model/EncryptionAdminImportKeyRequest} The populated <code>EncryptionAdminImportKeyRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EncryptionAdminImportKeyRequest();

            
            
            

            if (data.hasOwnProperty('Key')) {
                obj['Key'] = EncryptionKey.constructFromObject(data['Key']);
            }
            if (data.hasOwnProperty('StrPassword')) {
                obj['StrPassword'] = ApiClient.convertToType(data['StrPassword'], 'String');
            }
            if (data.hasOwnProperty('Override')) {
                obj['Override'] = ApiClient.convertToType(data['Override'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/EncryptionKey} Key
    */
    Key = undefined;
    /**
    * @member {String} StrPassword
    */
    StrPassword = undefined;
    /**
    * @member {Boolean} Override
    */
    Override = undefined;








}


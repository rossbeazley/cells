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

var _ActivityObjectType = require('./ActivityObjectType');

var _ActivityObjectType2 = _interopRequireDefault(_ActivityObjectType);

/**
* The ActivityObject model module.
* @module model/ActivityObject
* @version 1.0
*/

var ActivityObject = (function () {
    /**
    * Constructs a new <code>ActivityObject</code>.
    * @alias module:model/ActivityObject
    * @class
    */

    function ActivityObject() {
        _classCallCheck(this, ActivityObject);

        this.jsonLdContext = undefined;
        this.type = undefined;
        this.id = undefined;
        this.name = undefined;
        this.summary = undefined;
        this.context = undefined;
        this.attachment = undefined;
        this.attributedTo = undefined;
        this.audience = undefined;
        this.content = undefined;
        this.startTime = undefined;
        this.endTime = undefined;
        this.published = undefined;
        this.updated = undefined;
        this.duration = undefined;
        this.url = undefined;
        this.mediaType = undefined;
        this.icon = undefined;
        this.image = undefined;
        this.preview = undefined;
        this.location = undefined;
        this.inReplyTo = undefined;
        this.replies = undefined;
        this.tag = undefined;
        this.generator = undefined;
        this.to = undefined;
        this.bto = undefined;
        this.cc = undefined;
        this.bcc = undefined;
        this.actor = undefined;
        this.object = undefined;
        this.target = undefined;
        this.result = undefined;
        this.origin = undefined;
        this.instrument = undefined;
        this.href = undefined;
        this.rel = undefined;
        this.hreflang = undefined;
        this.height = undefined;
        this.width = undefined;
        this.oneOf = undefined;
        this.anyOf = undefined;
        this.closed = undefined;
        this.subject = undefined;
        this.relationship = undefined;
        this.formerType = undefined;
        this.deleted = undefined;
        this.accuracy = undefined;
        this.altitude = undefined;
        this.latitude = undefined;
        this.longitude = undefined;
        this.radius = undefined;
        this.units = undefined;
        this.items = undefined;
        this.totalItems = undefined;
        this.current = undefined;
        this.first = undefined;
        this.last = undefined;
        this.partOf = undefined;
        this.next = undefined;
        this.prev = undefined;
    }

    /**
    * Constructs a <code>ActivityObject</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ActivityObject} obj Optional instance to populate.
    * @return {module:model/ActivityObject} The populated <code>ActivityObject</code> instance.
    */

    ActivityObject.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivityObject();

            if (data.hasOwnProperty('jsonLdContext')) {
                obj['jsonLdContext'] = _ApiClient2['default'].convertToType(data['jsonLdContext'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = _ActivityObjectType2['default'].constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = _ApiClient2['default'].convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = _ApiClient2['default'].convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('summary')) {
                obj['summary'] = _ApiClient2['default'].convertToType(data['summary'], 'String');
            }
            if (data.hasOwnProperty('context')) {
                obj['context'] = ActivityObject.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ActivityObject.constructFromObject(data['attachment']);
            }
            if (data.hasOwnProperty('attributedTo')) {
                obj['attributedTo'] = ActivityObject.constructFromObject(data['attributedTo']);
            }
            if (data.hasOwnProperty('audience')) {
                obj['audience'] = ActivityObject.constructFromObject(data['audience']);
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ActivityObject.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = _ApiClient2['default'].convertToType(data['startTime'], 'Date');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = _ApiClient2['default'].convertToType(data['endTime'], 'Date');
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = _ApiClient2['default'].convertToType(data['published'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = _ApiClient2['default'].convertToType(data['updated'], 'Date');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = _ApiClient2['default'].convertToType(data['duration'], 'Date');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ActivityObject.constructFromObject(data['url']);
            }
            if (data.hasOwnProperty('mediaType')) {
                obj['mediaType'] = _ApiClient2['default'].convertToType(data['mediaType'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ActivityObject.constructFromObject(data['icon']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ActivityObject.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('preview')) {
                obj['preview'] = ActivityObject.constructFromObject(data['preview']);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ActivityObject.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('inReplyTo')) {
                obj['inReplyTo'] = ActivityObject.constructFromObject(data['inReplyTo']);
            }
            if (data.hasOwnProperty('replies')) {
                obj['replies'] = ActivityObject.constructFromObject(data['replies']);
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ActivityObject.constructFromObject(data['tag']);
            }
            if (data.hasOwnProperty('generator')) {
                obj['generator'] = ActivityObject.constructFromObject(data['generator']);
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ActivityObject.constructFromObject(data['to']);
            }
            if (data.hasOwnProperty('bto')) {
                obj['bto'] = ActivityObject.constructFromObject(data['bto']);
            }
            if (data.hasOwnProperty('cc')) {
                obj['cc'] = ActivityObject.constructFromObject(data['cc']);
            }
            if (data.hasOwnProperty('bcc')) {
                obj['bcc'] = ActivityObject.constructFromObject(data['bcc']);
            }
            if (data.hasOwnProperty('actor')) {
                obj['actor'] = ActivityObject.constructFromObject(data['actor']);
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ActivityObject.constructFromObject(data['object']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ActivityObject.constructFromObject(data['target']);
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ActivityObject.constructFromObject(data['result']);
            }
            if (data.hasOwnProperty('origin')) {
                obj['origin'] = ActivityObject.constructFromObject(data['origin']);
            }
            if (data.hasOwnProperty('instrument')) {
                obj['instrument'] = ActivityObject.constructFromObject(data['instrument']);
            }
            if (data.hasOwnProperty('href')) {
                obj['href'] = _ApiClient2['default'].convertToType(data['href'], 'String');
            }
            if (data.hasOwnProperty('rel')) {
                obj['rel'] = _ApiClient2['default'].convertToType(data['rel'], 'String');
            }
            if (data.hasOwnProperty('hreflang')) {
                obj['hreflang'] = _ApiClient2['default'].convertToType(data['hreflang'], 'String');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = _ApiClient2['default'].convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = _ApiClient2['default'].convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('oneOf')) {
                obj['oneOf'] = ActivityObject.constructFromObject(data['oneOf']);
            }
            if (data.hasOwnProperty('anyOf')) {
                obj['anyOf'] = ActivityObject.constructFromObject(data['anyOf']);
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = _ApiClient2['default'].convertToType(data['closed'], 'Date');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ActivityObject.constructFromObject(data['subject']);
            }
            if (data.hasOwnProperty('relationship')) {
                obj['relationship'] = ActivityObject.constructFromObject(data['relationship']);
            }
            if (data.hasOwnProperty('formerType')) {
                obj['formerType'] = _ActivityObjectType2['default'].constructFromObject(data['formerType']);
            }
            if (data.hasOwnProperty('deleted')) {
                obj['deleted'] = _ApiClient2['default'].convertToType(data['deleted'], 'Date');
            }
            if (data.hasOwnProperty('accuracy')) {
                obj['accuracy'] = _ApiClient2['default'].convertToType(data['accuracy'], 'Number');
            }
            if (data.hasOwnProperty('altitude')) {
                obj['altitude'] = _ApiClient2['default'].convertToType(data['altitude'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = _ApiClient2['default'].convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = _ApiClient2['default'].convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('radius')) {
                obj['radius'] = _ApiClient2['default'].convertToType(data['radius'], 'Number');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = _ApiClient2['default'].convertToType(data['units'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = _ApiClient2['default'].convertToType(data['items'], [ActivityObject]);
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = _ApiClient2['default'].convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('current')) {
                obj['current'] = ActivityObject.constructFromObject(data['current']);
            }
            if (data.hasOwnProperty('first')) {
                obj['first'] = ActivityObject.constructFromObject(data['first']);
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ActivityObject.constructFromObject(data['last']);
            }
            if (data.hasOwnProperty('partOf')) {
                obj['partOf'] = ActivityObject.constructFromObject(data['partOf']);
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ActivityObject.constructFromObject(data['next']);
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ActivityObject.constructFromObject(data['prev']);
            }
        }
        return obj;
    };

    /**
    * @member {String} jsonLdContext
    */
    return ActivityObject;
})();

exports['default'] = ActivityObject;
module.exports = exports['default'];

/**
* @member {module:model/ActivityObjectType} type
*/

/**
* @member {String} id
*/

/**
* @member {String} name
*/

/**
* @member {String} summary
*/

/**
* @member {module:model/ActivityObject} context
*/

/**
* @member {module:model/ActivityObject} attachment
*/

/**
* @member {module:model/ActivityObject} attributedTo
*/

/**
* @member {module:model/ActivityObject} audience
*/

/**
* @member {module:model/ActivityObject} content
*/

/**
* @member {Date} startTime
*/

/**
* @member {Date} endTime
*/

/**
* @member {Date} published
*/

/**
* @member {Date} updated
*/

/**
* @member {Date} duration
*/

/**
* @member {module:model/ActivityObject} url
*/

/**
* @member {String} mediaType
*/

/**
* @member {module:model/ActivityObject} icon
*/

/**
* @member {module:model/ActivityObject} image
*/

/**
* @member {module:model/ActivityObject} preview
*/

/**
* @member {module:model/ActivityObject} location
*/

/**
* @member {module:model/ActivityObject} inReplyTo
*/

/**
* @member {module:model/ActivityObject} replies
*/

/**
* @member {module:model/ActivityObject} tag
*/

/**
* @member {module:model/ActivityObject} generator
*/

/**
* @member {module:model/ActivityObject} to
*/

/**
* @member {module:model/ActivityObject} bto
*/

/**
* @member {module:model/ActivityObject} cc
*/

/**
* @member {module:model/ActivityObject} bcc
*/

/**
* @member {module:model/ActivityObject} actor
*/

/**
* @member {module:model/ActivityObject} object
*/

/**
* @member {module:model/ActivityObject} target
*/

/**
* @member {module:model/ActivityObject} result
*/

/**
* @member {module:model/ActivityObject} origin
*/

/**
* @member {module:model/ActivityObject} instrument
*/

/**
* @member {String} href
*/

/**
* @member {String} rel
*/

/**
* @member {String} hreflang
*/

/**
* @member {Number} height
*/

/**
* @member {Number} width
*/

/**
* @member {module:model/ActivityObject} oneOf
*/

/**
* @member {module:model/ActivityObject} anyOf
*/

/**
* @member {Date} closed
*/

/**
* @member {module:model/ActivityObject} subject
*/

/**
* @member {module:model/ActivityObject} relationship
*/

/**
* @member {module:model/ActivityObjectType} formerType
*/

/**
* @member {Date} deleted
*/

/**
* @member {Number} accuracy
*/

/**
* @member {Number} altitude
*/

/**
* @member {Number} latitude
*/

/**
* @member {Number} longitude
*/

/**
* @member {Number} radius
*/

/**
* @member {String} units
*/

/**
* @member {Array.<module:model/ActivityObject>} items
*/

/**
* @member {Number} totalItems
*/

/**
* @member {module:model/ActivityObject} current
*/

/**
* @member {module:model/ActivityObject} first
*/

/**
* @member {module:model/ActivityObject} last
*/

/**
* @member {module:model/ActivityObject} partOf
*/

/**
* @member {module:model/ActivityObject} next
*/

/**
* @member {module:model/ActivityObject} prev
*/
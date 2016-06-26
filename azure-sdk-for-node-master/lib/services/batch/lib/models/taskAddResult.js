/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the TaskAddResult class.
 * @constructor
 * Result for a single task added as part of an add task collection operation.
 * @member {string} status The status of the add task request. Possible values
 * include: 'success', 'clienterror', 'servererror', 'unmapped'
 * 
 * @member {string} taskId The id of the task for which this is the result.
 * 
 * @member {string} [eTag] The ETag of the task, if the task was successfully
 * added.
 * 
 * @member {date} [lastModified] The last modified time of the task.
 * 
 * @member {string} [location] The URL of the task, if the task was
 * successfully added.
 * 
 * @member {object} [error] The error encountered while attempting to add the
 * task.
 * 
 * @member {string} [error.code] An identifier for the error. Codes are
 * invariant and are intended to be consumed programmatically.
 * 
 * @member {object} [error.message] A message describing the error, intended
 * to be suitable for display in a user interface.
 * 
 * @member {string} [error.message.lang] The language code of the error message
 * 
 * @member {string} [error.message.value] The text of the message.
 * 
 * @member {array} [error.values] A collection of key-value pairs containing
 * additional details about the error.
 * 
 */
function TaskAddResult() {
}

/**
 * Defines the metadata of TaskAddResult
 *
 * @returns {object} metadata of TaskAddResult
 *
 */
TaskAddResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TaskAddResult',
    type: {
      name: 'Composite',
      className: 'TaskAddResult',
      modelProperties: {
        status: {
          required: true,
          serializedName: 'status',
          type: {
            name: 'Enum',
            allowedValues: [ 'success', 'clienterror', 'servererror', 'unmapped' ]
          }
        },
        taskId: {
          required: true,
          serializedName: 'taskId',
          type: {
            name: 'String'
          }
        },
        eTag: {
          required: false,
          serializedName: 'eTag',
          type: {
            name: 'String'
          }
        },
        lastModified: {
          required: false,
          serializedName: 'lastModified',
          type: {
            name: 'DateTime'
          }
        },
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        error: {
          required: false,
          serializedName: 'error',
          type: {
            name: 'Composite',
            className: 'BatchError'
          }
        }
      }
    }
  };
};

module.exports = TaskAddResult;

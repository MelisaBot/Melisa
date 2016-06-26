/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ResourceType class.
 * @constructor
 * Resource Type
 * @member {string} [name] Gets or sets the resource type name
 * 
 * @member {string} [displayName] Gets or sets the resource type display name
 * 
 * @member {array} [operations] Gets or sets the resource type operations
 * 
 */
function ResourceType() {
}

/**
 * Defines the metadata of ResourceType
 *
 * @returns {object} metadata of ResourceType
 *
 */
ResourceType.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ResourceType',
    type: {
      name: 'Composite',
      className: 'ResourceType',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        displayName: {
          required: false,
          serializedName: 'displayName',
          type: {
            name: 'String'
          }
        },
        operations: {
          required: false,
          serializedName: 'operations',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ProviderOperationElementType',
                type: {
                  name: 'Composite',
                  className: 'ProviderOperation'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = ResourceType;

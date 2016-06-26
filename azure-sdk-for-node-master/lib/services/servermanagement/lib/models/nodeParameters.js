/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the NodeParameters class.
 * @constructor
 * @member {string} [location] location of the resource?
 * 
 * @member {object} [tags] resource tags
 * 
 * @member {string} [gatewayId] Gateway id which will manage this node
 * 
 * @member {string} [connectionName] myhost.domain.com
 * 
 * @member {string} [userName] User name to be used to connect to node
 * 
 * @member {string} [password] Password associated with user name
 * 
 */
function NodeParameters() {
}

/**
 * Defines the metadata of NodeParameters
 *
 * @returns {object} metadata of NodeParameters
 *
 */
NodeParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NodeParameters',
    type: {
      name: 'Composite',
      className: 'NodeParameters',
      modelProperties: {
        location: {
          required: false,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Object'
          }
        },
        gatewayId: {
          required: false,
          serializedName: 'properties.gatewayId',
          type: {
            name: 'String'
          }
        },
        connectionName: {
          required: false,
          serializedName: 'properties.connectionName',
          type: {
            name: 'String'
          }
        },
        userName: {
          required: false,
          serializedName: 'properties.userName',
          type: {
            name: 'String'
          }
        },
        password: {
          required: false,
          serializedName: 'properties.password',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = NodeParameters;

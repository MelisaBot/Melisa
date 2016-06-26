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

var util = require('util');

/**
 * @class
 * Initializes a new instance of the DeploymentOperationsListResult class.
 * @constructor
 * List of deployment operations.
 * @member {array} [value] Gets or sets the list of deployments.
 * 
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * results.
 * 
 */
function DeploymentOperationsListResult() {
}

util.inherits(DeploymentOperationsListResult, Array);

/**
 * Defines the metadata of DeploymentOperationsListResult
 *
 * @returns {object} metadata of DeploymentOperationsListResult
 *
 */
DeploymentOperationsListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'DeploymentOperationsListResult',
    type: {
      name: 'Composite',
      className: 'DeploymentOperationsListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: '',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DeploymentOperationElementType',
                type: {
                  name: 'Composite',
                  className: 'DeploymentOperation'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = DeploymentOperationsListResult;

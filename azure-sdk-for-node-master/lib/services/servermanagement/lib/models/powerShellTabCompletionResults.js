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
 * Initializes a new instance of the PowerShellTabCompletionResults class.
 * @constructor
 * an array of strings representing the different values that can be tabbed
 * thru
 * @member {array} [results]
 * 
 */
function PowerShellTabCompletionResults() {
}

/**
 * Defines the metadata of PowerShellTabCompletionResults
 *
 * @returns {object} metadata of PowerShellTabCompletionResults
 *
 */
PowerShellTabCompletionResults.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PowerShellTabCompletionResults',
    type: {
      name: 'Composite',
      className: 'PowerShellTabCompletionResults',
      modelProperties: {
        results: {
          required: false,
          serializedName: 'results',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = PowerShellTabCompletionResults;

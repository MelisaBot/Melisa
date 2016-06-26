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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitsRoutesTableSummaryListResult class.
 * @constructor
 * Response for ListRoutesTable associated with the Express Route Circuits Api
 * @member {array} [value] Gets List of RoutesTable
 * 
 * @member {string} [nextLink] Gets the URL to get the next set of results.
 * 
 */
function ExpressRouteCircuitsRoutesTableSummaryListResult() {
}

/**
 * Defines the metadata of ExpressRouteCircuitsRoutesTableSummaryListResult
 *
 * @returns {object} metadata of ExpressRouteCircuitsRoutesTableSummaryListResult
 *
 */
ExpressRouteCircuitsRoutesTableSummaryListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitsRoutesTableSummaryListResult',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitsRoutesTableSummaryListResult',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ExpressRouteCircuitRoutesTableSummaryElementType',
                type: {
                  name: 'Composite',
                  className: 'ExpressRouteCircuitRoutesTableSummary'
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

module.exports = ExpressRouteCircuitsRoutesTableSummaryListResult;

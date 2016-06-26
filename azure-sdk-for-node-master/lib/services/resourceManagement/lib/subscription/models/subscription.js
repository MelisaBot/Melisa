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

/**
 * @class
 * Initializes a new instance of the Subscription class.
 * @constructor
 * Subscription information.
 * @member {string} [id] Gets or sets the ID of the resource
 * (/subscriptions/SubscriptionId).
 * 
 * @member {string} [subscriptionId] Gets or sets the subscription Id.
 * 
 * @member {string} [displayName] Gets or sets the subscription display name
 * 
 * @member {string} [state] Gets or sets the subscription state
 * 
 * @member {object} [subscriptionPolicies] Gets or sets the subscription
 * policies.
 * 
 * @member {string} [subscriptionPolicies.locationPlacementId] Gets or sets
 * the subscription location placement Id.
 * 
 * @member {string} [subscriptionPolicies.quotaId] Gets or sets the
 * subscription quota Id.
 * 
 */
function Subscription() {
}

/**
 * Defines the metadata of Subscription
 *
 * @returns {object} metadata of Subscription
 *
 */
Subscription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Subscription',
    type: {
      name: 'Composite',
      className: 'Subscription',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        subscriptionId: {
          required: false,
          serializedName: 'subscriptionId',
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
        state: {
          required: false,
          serializedName: 'state',
          type: {
            name: 'String'
          }
        },
        subscriptionPolicies: {
          required: false,
          serializedName: 'subscriptionPolicies',
          type: {
            name: 'Composite',
            className: 'SubscriptionPolicies'
          }
        }
      }
    }
  };
};

module.exports = Subscription;

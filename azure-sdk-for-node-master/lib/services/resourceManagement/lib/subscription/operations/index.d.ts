/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * Subscriptions
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SubscriptionClient.
 */
export interface Subscriptions {

    /**
     * Gets a list of the subscription locations.
     *
     * @param {string} subscriptionId Id of the subscription
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listLocations(subscriptionId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationListResult>): void;
    listLocations(subscriptionId: string, callback: ServiceCallback<models.LocationListResult>): void;

    /**
     * Gets details about particular subscription.
     *
     * @param {string} subscriptionId Id of the subscription.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(subscriptionId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.Subscription>): void;
    get(subscriptionId: string, callback: ServiceCallback<models.Subscription>): void;

    /**
     * Gets a list of the subscriptionIds.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionListResult>): void;
    list(callback: ServiceCallback<models.SubscriptionListResult>): void;

    /**
     * Gets a list of the subscription locations.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listLocationsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.LocationListResult>): void;
    listLocationsNext(nextPageLink: string, callback: ServiceCallback<models.LocationListResult>): void;

    /**
     * Gets a list of the subscriptionIds.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SubscriptionListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.SubscriptionListResult>): void;
}

/**
 * @class
 * Tenants
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the SubscriptionClient.
 */
export interface Tenants {

    /**
     * Gets a list of the tenantIds.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TenantListResult>): void;
    list(callback: ServiceCallback<models.TenantListResult>): void;

    /**
     * Gets a list of the tenantIds.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TenantListResult>): void;
    listNext(nextPageLink: string, callback: ServiceCallback<models.TenantListResult>): void;
}

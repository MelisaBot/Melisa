// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'southcentralus';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3d1cd7a8-b035-4563-9288-dbe706cd672e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031/regenerateKey?api-version=2016-01-29', '*')
  .reply(200, "{\"key1\":\"NV+biAuiDdlWDf6jaN8Tnf9aY89qX+/CVObTnYKMLGJ+A8RJGzpr07l89ITjycjObOoMVERFA6GYAdT9IFZAZg==\",\"key2\":\"eEFI6kIMzy0bf/wlcMiXsStzo+W/Hf9IFqU571y3ljJMMVFUJP4HL8NX61qSeoNwROT4iuc9aT0HRwvjVs+9Ww==\"}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: 'e83f4c4e-14a1-45fe-bff9-e973cbc46229',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  'x-ms-correlation-request-id': 'a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  'x-ms-routing-request-id': 'WESTUS:20160519T164720Z:a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  date: 'Thu, 19 May 2016 16:47:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/3d1cd7a8-b035-4563-9288-dbe706cd672e/resourceGroups/azureSdkNodeTestResourceGroup2919/providers/Microsoft.PowerBI/workspaceCollections/azureNodeSdkTestWorkspaceCollection8031/regenerateKey?api-version=2016-01-29', '*')
  .reply(200, "{\"key1\":\"NV+biAuiDdlWDf6jaN8Tnf9aY89qX+/CVObTnYKMLGJ+A8RJGzpr07l89ITjycjObOoMVERFA6GYAdT9IFZAZg==\",\"key2\":\"eEFI6kIMzy0bf/wlcMiXsStzo+W/Hf9IFqU571y3ljJMMVFUJP4HL8NX61qSeoNwROT4iuc9aT0HRwvjVs+9Ww==\"}", { 'cache-control': 'no-store, must-revalidate, no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-frame-options': 'deny',
  'x-content-type-options': 'nosniff',
  requestid: 'e83f4c4e-14a1-45fe-bff9-e973cbc46229',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': 'a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  'x-ms-correlation-request-id': 'a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  'x-ms-routing-request-id': 'WESTUS:20160519T164720Z:a4426acc-e34f-4a6e-bdee-e2dcba69ed0c',
  date: 'Thu, 19 May 2016 16:47:20 GMT',
  connection: 'close' });
 return result; }]];
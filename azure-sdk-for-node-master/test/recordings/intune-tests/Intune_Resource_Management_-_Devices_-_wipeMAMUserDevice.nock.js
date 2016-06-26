// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'dummy';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/providers/Microsoft.Intune/locations/fef.msua06/users/d8aeb100-6e17-4cf7-bbda-169000d03c1e/devices/38BBFA62-371F-4AA8-BFDB-846EBD47A86A/wipe?api-version=2015-01-14-preview')
  .reply(200, "{\"name\":\"38BBFA62-371F-4AA8-BFDB-846EBD47A86A\",\"type\":\"Microsoft.Intune/locations/users/devices\",\"properties\":{\"value\":\"/operationResults/38BBFA62-371F-4AA8-BFDB-846EBD47A86A?$filter=category eq '38BBFA62-371F-4AA8-BFDB-846EBD47A86A'\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '236',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'elapsed-time-milliseconds': '8447',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'b8fd308f-566d-4faa-b0d7-0bbd9b0342af',
  'unique-request-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'x-ms-request-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'related-activity-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '7ea2634b-bb5e-47d3-9a56-c91291bab808',
  'x-ms-routing-request-id': 'WESTUS:20151204T223624Z:7ea2634b-bb5e-47d3-9a56-c91291bab808',
  date: 'Fri, 04 Dec 2015 22:36:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/providers/Microsoft.Intune/locations/fef.msua06/users/d8aeb100-6e17-4cf7-bbda-169000d03c1e/devices/38BBFA62-371F-4AA8-BFDB-846EBD47A86A/wipe?api-version=2015-01-14-preview')
  .reply(200, "{\"name\":\"38BBFA62-371F-4AA8-BFDB-846EBD47A86A\",\"type\":\"Microsoft.Intune/locations/users/devices\",\"properties\":{\"value\":\"/operationResults/38BBFA62-371F-4AA8-BFDB-846EBD47A86A?$filter=category eq '38BBFA62-371F-4AA8-BFDB-846EBD47A86A'\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '236',
  'content-type': 'application/json;odata=minimalmetadata;streaming=true;charset=utf-8,application/json;odata=minimalmetadata;streaming=true;charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-tenant-writes': '1199',
  'elapsed-time-milliseconds': '8447',
  'service-name': 'AdminExperienceService',
  'client-request-id': 'b8fd308f-566d-4faa-b0d7-0bbd9b0342af',
  'unique-request-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'x-ms-request-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'related-activity-id': '8bb0d70c-2110-4bb4-8ff9-f9b58384fc25',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0;',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '7ea2634b-bb5e-47d3-9a56-c91291bab808',
  'x-ms-routing-request-id': 'WESTUS:20151204T223624Z:7ea2634b-bb5e-47d3-9a56-c91291bab808',
  date: 'Fri, 04 Dec 2015 22:36:24 GMT',
  connection: 'close' });
 return result; }]];
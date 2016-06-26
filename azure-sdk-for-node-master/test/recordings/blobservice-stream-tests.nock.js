// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .put('/cont1?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 02 Nov 2013 13:54:50 GMT',
  etag: '"0x8D0A5EA3C031B83"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7320d70b-e751-4284-8884-f085c6d123f2',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:50 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/cont1/blob1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'sQqNsWTgdUEFt6mb5y4/5Q==',
  'last-modified': 'Sat, 02 Nov 2013 13:54:51 GMT',
  etag: '"0x8D0A5EA3CBD8DAE"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '4199cd52-973b-4110-aac0-ead3cc822277',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:51 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/cont1/blob1')
  .reply(200, "Hello World", { 'content-length': '11',
  'content-type': 'text/plain;charset="utf-8"',
  'content-md5': 'sQqNsWTgdUEFt6mb5y4/5Q==',
  'last-modified': 'Sat, 02 Nov 2013 13:54:51 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D0A5EA3CBD8DAE"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3d46ae27-b8a5-46c7-8051-a5821d690657',
  'x-ms-version': '2012-02-12',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Sat, 02 Nov 2013 13:54:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"https://ciserversdk.blob.core.windows.net/\"><Containers><Container><Name>cont1</Name><Url>https://ciserversdk.blob.core.windows.net/cont1</Url><Properties><Last-Modified>Sat, 02 Nov 2013 13:54:50 GMT</Last-Modified><Etag>\"0x8D0A5EA3C031B83\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c6cb1aa-6307-4446-846b-01d85c0f559d',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .delete('/cont1?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '9bfe0611-57bf-48c1-ae1a-3c2c6c1f4fc0',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:55 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/cont2/blob2')
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ContainerNotFound</Code><Message>The specified container does not exist.\nRequestId:7bd2a060-8ffb-4b21-b1d0-186919f851b6\nTime:2013-11-02T13:54:56.0083672Z</Message></Error>", { 'content-length': '225',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7bd2a060-8ffb-4b21-b1d0-186919f851b6',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:55 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"https://ciserversdk.blob.core.windows.net/\"><Containers /><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6eaca6a2-6b6c-4f06-81b1-1cc19b577124',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:56 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .put('/cont3?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 02 Nov 2013 13:54:59 GMT',
  etag: '"0x8D0A5EA41019846"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6e0a138d-b132-4584-82b6-63144f0ca8c0',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/cont3/blob3?comp=block&blockid=YmxvY2stMDAwMDAw', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'sQqNsWTgdUEFt6mb5y4/5Q==',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b75261e3-64bb-436f-be37-0b1737ed6634',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/cont3/blob3?comp=blocklist', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'content-md5': 'g3Lrqs+oVzjQTewU2f7+PA==',
  'last-modified': 'Sat, 02 Nov 2013 13:55:00 GMT',
  etag: '"0x8D0A5EA419DD8E2"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b8218d8a-54f1-4f49-82a3-f07c16f810c9',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:54:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .put('/cont3/blob3?comp=properties')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Sat, 02 Nov 2013 13:55:01 GMT',
  etag: '"0x8D0A5EA4235D706"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ed9ff958-6156-4022-a4e7-842c1fd396db',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:55:00 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/cont3/blob3')
  .reply(200, "Hello World", { 'content-length': '11',
  'content-md5': 'sQqNsWTgdUEFt6mb5y4/5Q==',
  'last-modified': 'Sat, 02 Nov 2013 13:55:01 GMT',
  'accept-ranges': 'bytes',
  etag: '"0x8D0A5EA4235D706"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '745acd9c-ba9f-476a-ab94-e98086fd5ecc',
  'x-ms-version': '2012-02-12',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  'x-ms-blob-type': 'BlockBlob',
  date: 'Sat, 02 Nov 2013 13:55:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .get('/?comp=list')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults AccountName=\"https://ciserversdk.blob.core.windows.net/\"><Containers><Container><Name>cont3</Name><Url>https://ciserversdk.blob.core.windows.net/cont3</Url><Properties><Last-Modified>Sat, 02 Nov 2013 13:54:59 GMT</Last-Modified><Etag>\"0x8D0A5EA41019846\"</Etag><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties></Container></Containers><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5ea33db7-24ba-4682-adfd-c29dbc317193',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:55:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.blob.core.windows.net:443')
  .delete('/cont3?restype=container')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '575137f1-36fd-4e78-8112-561fc7984a3e',
  'x-ms-version': '2012-02-12',
  date: 'Sat, 02 Nov 2013 13:55:04 GMT' });
 return result; }]];
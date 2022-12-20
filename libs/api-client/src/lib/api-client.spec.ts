import { apiClient } from './api-client';

describe('apiClient', () => {
  it('should work', async () => {
    expect(await apiClient()).toMatchInlineSnapshot(`
      Object {
        "config": Object {
          "adapter": Array [
            "xhr",
            "http",
          ],
          "data": undefined,
          "env": Object {
            "Blob": [Function],
            "FormData": [Function],
          },
          "headers": Object {
            "Accept": "application/json, text/plain, */*",
          },
          "maxBodyLength": -1,
          "maxContentLength": -1,
          "method": "get",
          "timeout": 0,
          "transformRequest": Array [
            [Function],
          ],
          "transformResponse": Array [
            [Function],
          ],
          "transitional": Object {
            "clarifyTimeoutError": false,
            "forcedJSONParsing": true,
            "silentJSONParsing": true,
          },
          "url": "https://api.spotify.com/v1/me",
          "validateStatus": [Function],
          "xsrfCookieName": "XSRF-TOKEN",
          "xsrfHeaderName": "X-XSRF-TOKEN",
        },
        "data": Object {
          "username": "admin",
        },
        "headers": Object {
          "content-type": "application/json",
          "x-powered-by": "msw",
        },
        "request": XMLHttpRequestOverride {
          "DONE": 4,
          "HEADERS_RECEIVED": 2,
          "LOADING": 3,
          "OPENED": 1,
          "UNSENT": 0,
          "_events": Array [],
          "_requestHeaders": HeadersPolyfill {
            Symbol(normalizedHeaders): Object {
              "accept": "application/json, text/plain, */*",
            },
            Symbol(rawHeaderNames): Map {
              "accept" => "Accept",
            },
          },
          "_responseHeaders": HeadersPolyfill {
            Symbol(normalizedHeaders): Object {
              "content-type": "application/json",
              "x-powered-by": "msw",
            },
            Symbol(rawHeaderNames): Map {
              "x-powered-by" => "x-powered-by",
              "content-type" => "content-type",
            },
          },
          "async": true,
          "log": [Function],
          "method": "GET",
          "onabort": [Function],
          "onerror": [Function],
          "onload": null,
          "onloadend": [Function],
          "onloadstart": null,
          "onprogress": null,
          "onreadystatechange": null,
          "ontimeout": [Function],
          "password": undefined,
          "readyState": 4,
          "response": "{\\"username\\":\\"admin\\"}",
          "responseText": "{\\"username\\":\\"admin\\"}",
          "responseType": "text",
          "responseURL": "https://api.spotify.com/v1/me",
          "responseXML": null,
          "status": 200,
          "statusText": "OK",
          "timeout": 0,
          "upload": Object {},
          "url": "https://api.spotify.com/v1/me",
          "user": undefined,
          "withCredentials": false,
        },
        "status": 200,
        "statusText": "OK",
      }
    `);
  });
});

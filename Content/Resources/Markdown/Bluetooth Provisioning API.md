Introduction
------------

This page describes the Bluetooth Provisioning API used during provisioning of the Industrial Gateway.

Provisioning API Details
------------------------

### General

The provisioning API is performed over a custom BLE GATT service, after the mobile device has been paired with the Gateway. The service provides bi-directional communication of JSON data between the mobile application (BLE GATT client) and Industrial Gaetway (BLE GATT server).

### Bluetooth Advertising

The Laird Industrial Gateway shall implement Bluetooth LE advertising, appearing using "General" discovery LE packets. The IG will only advertise if it is not provisioned.

The Laird Industrial Gateway shall advertise the GATT Virtual Serial Port Service as the primary service UUID in the LE advertising data.

### Bluetooth Connection

The Laird Industrial Gateway shall support a connection from a central Bluetooth LE device using Secure Simple Pairing / LE Legacy Pairing.

### GATT Virtual Serial Port Service

The Laird Industrial Gateway implements a GATT service that emulates a serial port interface. The service provides two GATT characteristics which enable data to be received by the server ("RX") and sent from the server ("TX"). The provisioning application connects to the Laird Industrial Gateway as a GATT client, and sends requests to the server by sending UTF8-encoded JSON chunks via the RX characteristic.

The provisioning application (GATT client) shall perform one or more confirmed GATT writes to the RX characteristic to send data to the Laird Industrial Gateway, using the attribute operation Write Request and expecting a Write Response, before sending the next chunk of data.

The provisioning application (GATT client) shall subscribe to server-indicated changes on the TX characteristic (via writes to the TX characteristic descriptor).

The Laird Industrial Gateway (GATT server) shall perform one or more GATT indications to the TX characteristic to send data to the provisioning application (GATT client), using the attribute operation Handle Value Indication, and expecting a Handle Value Confirmation, before sending the next chunk of data.

Both the Laird Industrial Gateway (server) and the provisioning application (client) shall send a maximum of 16 bytes in a chunk.

In both cases of TX and RX, the receiver shall determine the message boundary by parsing the completely received data thus far for an unnamed, enclosing JSON object (e.g., delimited by `{` and `}`). A timeout of 1 second shall be applied between chunks; if the timeout occurs and a complete JSON object has not been parsed, the receiver shall discard all data and ignore the partial message.

#### Service Characteristics

UUID: be98076e-8e8d-11e8-9eb6-529269fb1459

<table bgcolor="#ffffff" width="75%" border="border-collapse: collapse;">
<tr bgcolor="#cccccc">
<th>
Overview

</th>
<th>
Properties

</th>
<th>
Security

</th>
<th>
Descriptors

</th>
<th>
Value Fields

</th>
</tr>
<tr>
<td width="30%">
<table>
<tr>
<td>
<B>Name:</B>

</td>
</tr>
<tr>
<td>
RX

</td>
</tr>
<tr>
<td>
<B>Description:</B>

</td>
</tr>
<tr>
<td>
This characteristic is used to send JSON data from the client to the server.

</td>
</tr>
<tr>
<td>
<B>Type:</B>

</td>
</tr>
<tr>
<td>
com.lairdtech.igateway.characteristic.rx

</td>
</tr>
<tr>
<td>
<B>Requirement:</B>

</td>
</tr>
<tr>
<td>
Optional

</td>
</tr>
<tr>
<td>
UUID: be980b1a-8e8d-11e8-9eb6-529269fb1459

</td>
</tr>
</table>
</td>
<td>
<b>

<table>
</table>
</b>

<table bgcolor="#ffffff" width="100%" border="0">
<tr bgcolor="#cccccc">
<th>
Property

</th>
<th>
Requirement

</th>
</tr>
<tr>
<td>
Read

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Write

</td>
<td>
Mandatory

</td>
</tr>
<tr>
<td>
WriteWithoutResponse

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
SignedWrite

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Notify

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Indicate

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
WritableAuxiliaries

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Broadcast

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
ExtendedProperties

</td>
<td>
</td>
</tr>
</table>
</td>
<td>
None

</td>
<td>
None

</td>
<td style="vertical-align:top" width="25%">
<table border="0">
<tr bgcolor="#cccccc">
<th>
Name

</th>
<th>
Format

</th>
<th>
Information

</th>
</tr>
<tr>
<td>
<B>RX data</B>

</td>
<td>
utf8s

</td>
<td>
RX data

</td>
</tr>
</table>
</td>
</tr>
<tr>
<td width="30%">
<table>
<tr>
<td>
<B>Name:</B>

</td>
</tr>
<tr>
<td>
TX

</td>
</tr>
<tr>
<td>
<B>Description:</B>

</td>
</tr>
<tr>
<td>
This characteristic is used to indicate response data from the server to the client.

</td>
</tr>
<tr>
<td>
<B>Type:</B>

</td>
</tr>
<tr>
<td>
com.lairdtech.igateway.characteristic.tx

</td>
</tr>
<tr>
<td>
<B>Requirement:</B>

</td>
</tr>
<tr>
<td>
Optional

</td>
</tr>
<tr>
<td>
UUID: be980d72-8e8d-11e8-9eb6-529269fb1459

</td>
</tr>
</table>
</td>
<td>
<b>

<table>
</table>
</b>

<table bgcolor="#ffffff" width="100%" border="0">
<tr bgcolor="#cccccc">
<th>
Property

</th>
<th>
Requirement

</th>
</tr>
<tr>
<td>
Read

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Write

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
WriteWithoutResponse

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
SignedWrite

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Notify

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Indicate

</td>
<td>
Mandatory

</td>
</tr>
<tr>
<td>
WritableAuxiliaries

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
Broadcast

</td>
<td>
Excluded

</td>
</tr>
<tr>
<td>
ExtendedProperties

</td>
<td>
</td>
</tr>
</table>
</td>
<td>
None

</td>
<td>
None

</td>
<td style="vertical-align:top" width="25%">
<table border="0">
<tr bgcolor="#cccccc">
<th>
Name

</th>
<th>
Format

</th>
<th>
Information

</th>
</tr>
<tr>
<td>
<B>TX data</B>

</td>
<td>
utf8s

</td>
<td>
TX data

</td>
</tr>
</table>
</td>
</tr>
</table>
### API Format

The API format is a single JSON object, consisting of multiple elements, which can be scalar values or embedded objects. The following details apply to the API JSON object:

-   The outer-most pair of braces, `{` `}`, is used to "frame" the message
-   The JSON object can contain multiple elements, including embedded objects
-   The order of the elements within the object is not defined, so the object must be parsed in its entirety
-   Whitespace (spaces, tabs, newlines, and carriage returns) are ignored, except within string values

### Message Types

There are two types of API messages that are exchanged: **Request** and **Response**. A **Request** is always sent by the client, and a **Response** is always sent by the server. There must be at least one **Response** per **Request**, but there can be more than one (for example, to provide status during a single operation).

All messages **must** contain a `"version"` element (in the top-level object), which is a numeric element used to identify the protocol version. The initial protocol version is 1.

All messages **must** contain an `"id"` element; the meaning of this element is defined per each message type (below).

All messages **must** contain a `"type"` element (in the top-level object), which is a string element used to identify the message type.

All **Response** messages must contain a "status" element, which is a number indicating the current status of the referenced **Request** (see below).

Messages can optionally contain a `"data"` element; if defined, this is an object which contains one or more elements that represent data used in the **Request** or **Response** message.

#### Request

A **Request** API message can be initiated by the provisioning application. The `"id"` element must be a unique integer per the request. There should only be one pending **Request** message in flight (awaiting a final response) at a time.

#### Response

A **Response** API message is sent by the Gateway, in response to a **Request** message. The `"id"` element must match the `"id"` of the **Request** message.

#### Status Codes

All **Response** messages contain a `"status"` element, which is a number that indicates the status of the corresponding **Request**.

A single **Request** can generate multiple **Response** messages (for example, during a long-running operation). The `"status"` code is used to determine if the **Response** is *final*. Any code less than or equal to 0 (zero) is a *final* response; otherwise, the **Response** is an intermediate message and the operation related to the **Request** continues.

|           |                       |                                                                                                    |
|-----------|-----------------------|----------------------------------------------------------------------------------------------------|
| **Value** | **Status**            | **Description**                                                                                    |
| 1         | STATUS\_INTERMEDIATE  | Intermediate progress (additional information may be provided in `"data"`)                         |
| 0         | STATUS\_SUCCESS       | Success - The requested operation has completed successfully                                       |
| -1        | STATUS\_ERR\_INVALID  | Invalid - The request format or parameters were invalid                                            |
| -2        | STATUS\_ERR\_TIMEOUT  | Timeout - The request failed due to a timeout                                                      |
| -3        | STATUS\_ERR\_AUTH     | Authentication failure - The request failed due to failed authentication (e.g., HTTP 403 response) |
| -4        | STATUS\_ERR\_NOTFOUND | Not Found - The requested object was not found (e.g., HTTP 404 response)                           |
| -5        | STATUS\_ERR\_NOCONN   | No connection - No connection (e.g., internet) is available                                        |

### API Versioning

The provisioning application and the Industrial Gateway (and future devices) negotiate the API version with the `"version"` message (see below).

The provisioning application must send a `"version"` message as the beginning of the provisioning session, to determine the version supported by the Industrial Gateway. The Industrial Gateway will *ignore* the `"version"` element of the `"version"` message sent by the provisioning application, but it will respond with the highest supported API version that is supported. The provisioning application maintains backwards compatibility by using only the version supported by the Industrial Gateway.

### Timeouts and Retries

The following timeout behavior should be applied to messages between the provisioning client and the Industrial Gateway:

-   Both the client and the Industrial Gateway should apply a 1-second timeout to receive the next chunk of a message in-progress. If a remaining chunk is not received within 1 second of the previous chunk, the entire message should be discarded and ignored (as if no message was received).
    -   If the timeout is a **Request** being received by the Industrial Gateway, it should disregard the partial request
    -   If the timeout is a **Response** being received by the client, it should disregard the partial request, then apply the retry behavior

The following retry behavior applies to response messages received by the client:

-   If the client has sent a request and has not received a complete response within 10 seconds, the client should retry the request
-   If the client has not received a complete response within 10 seconds since any previous intermediate response, the client should retry the request

NOTE: This means that the Industrial Gateway should send intermediate messages approximately every 5 seconds during long-running operations.

Provisioning API Message Types
------------------------------

The following message types are defined:

### version

**`version`** is a **Request** and **Response** message used to negotiate the API version between the provisioning application and the Industrial Gateway. There is no data in either the **Request** or **Response** message; the `"version"` element of the message contains the version information.

**Request**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "version"`
`}`

**Response**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "version",`
`   "status" : 0`
`}`

### getDeviceId

**`getDeviceId`** is a **Request** and **Response** message used by the provisioning application to obtain the unique identifier of the Industrial Gateway. The **Request** message has no data; the **Response** message has a data element containing a single element, `"deviceId"`, which is a string identifying the Gateway (typically, the WiFi MAC address).

**Request**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getDeviceId"`
`}`

**Response**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getDeviceId",`
`   "status" : 0,`
`   "data" :`
`       {`
`          "deviceId" : "c0:ee:40:01:02:03"`
`       }`
`}`

### getAccessPoints

**getAccessPoints** is a **Request** and a **Response** message used by the client to obtain the list of available access points. The **Request** message has no data; the **Response** message `"data"` is an array of available access points. To maintain a responsive user interface, the Industrial Gateway may return multiple intermediate responses with a partial list of access points. Note that the list is not sorted, and an access point may be repeated; the provisioning application should sort and create a unique list of SSIDs when displaying the list.

**Request**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getAccessPoints"`
`}`

**Response** (in progress, no results):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getAccessPoints",`
`   "status" : 1`
`}`

**Response** (in progress, partial results):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getAccessPoints",`
`   "status" : 1,`
`   "data" : [`
`           { "ssid" : "AnOpenAP", "strength" : 88, "wep" : false, "psk" : false, "eap" : false},`
`           { "ssid" : "NeedPassphrase", "strength" : 76, "wep" : false, "psk" : true, "eap" : false},`
`           { "ssid" : "Supports8021X", "strength" : 89, "wep" : false, "psk" : false, "eap" : true}`
`       ]`
`   }`
`}`

**Response** (final):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "getAccessPoints",`
`   "status" : 0,`
`   "data" : [`
`           { "ssid" : "OneLastAP", "strength" : 46, "wep" : false, "psk" : true, "eap" : false}`
`       ]`
`   }`
`}`

The `"data"` element of the **Response** contains an array of objects containing the following elements:

ssid : A string containing the SSID of the access point
strength : A number representing the strength (1-100)
wep : A boolean indicating if the access point supports WEP encryption
psk : A boolean indicating if the access point supports using a pre-shared key for encryption
eap : A boolean indicating if the access point supports EAP authentication via 802.1X  

### connectAP

**connectAP** is a **Request** and a **Response** message used by the client to connect to an available access point. The **Request** message contains data that defines which AP to connect to, and optional security data.

**Request** (open AP):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "connectAP",`
`   "data" : {`
`       "ssid" : "AnOpenAP"`
`   }`
`}`

**Request** (Using WEP):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "connectAP",`
`   "data" : {`
`       "ssid" : "NeverUseWEP",`
`       "wep-key" : "AABBCCDDEEFF01020304050607",`
`       "wep-index" : 1`
`   }`
`}`

**Request** (Using pre-shared key encryption):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "connectAP",`
`   "data" : {`
`       "ssid" : "NeedPassphrase",`
`       "psk" : "my_secret_passphrase"`
`   }`
`}`

**Request** (Using EAP):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "connectAP",`
`   "data" : {`
`       "ssid" : "Supports8021X",`
`       "eap" : "eap",`
`       "phase2-auth" : "gtc"`
`       "identity" : "username",`
`       "password" : "password"`
`   }`
`}`

**Response**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "connectAP",`
`   "status" : 0`
`}`

The `"data"` element of the **Request** contains one or more elements describing the connection:

ssid : A string containing the SSID of the access point to connect (required)
noipv6 : A boolean indicating that IPv6 should be disabled on the connection (optional)
wep-key : A string containing the WEP key (indicates WEP); can be either 5 or 13 hexadecimal bytes (10 or 26 hex chars), or an ASCII string of 5 or 13 characters
wep-key-idex : A number representing the WEP key index
psk : A string representing the pre-shared encryption key
eap : A string representing the EAP type, one of "leap", "peap", "tls", or "ttls"
phase2-auth : The phase 2 authentication used with EAP, one of "mschapv2" or "gtc"
identity : A string representing the identity (e.g., user name) for EAP
password : A string representing the password used for EAP  

Note that only one of `"wep-key"`, `"eap"`, or `"psk"` can be specified. `"phase2-auth"`, `"identity"`, and `"password"` can only be used if `"eap"` is specified.

### provisionURL

**provisionURL** is a **Request** and a **Response** message used by the client to request provisioning of the device via a URL. The **Request** message contains data describing the provisioning location and authentication. The **Response** message contains data describing the progress of the provisioning.

**Request**:

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "provisionURL",`
`   "data" : {`
`       "url" : "http://www.myprovision.net/my_device.json",`
`       "username" : "my_user_name",`
`       "password" : "my_secret_password"`
`   }`
`}`

**Response** (progress):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "provisionURL",`
`   "status" : 1,`
`   "data" : {`
`       "operation" : "download"`
`   }`
`}`

**Response** (success):

`{`
`   "version" : 1,`
`   "id" : 1,`
`   "type" : "provisionURL",`
`   "status" : 0`
`}`

The `"data"` element of the **Request** contains the following required elements:

url : A string containing the URL to be used for provisioning
username : A string containing the username used for authentication to the server
password : A string containing the password used for authentication to the server  

The `"data"` element of the **Response** contains an element `"operation"` for non-final status response messages; this can be one of `"connect"`, `"download"`, or `"apply"`, to indicate the progress during the provisioning process. Note that not all operations may be indicated, and a final response (success or an error) can occur at any time.

[Category: Industrial\_Gateway](Category:_Industrial_Gateway "wikilink")

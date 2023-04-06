# Control questions

## Why is REST called this way?

REST stands for Representational State Transfer. It is called this way because
it is an architectural style for building web services that represent and transfer
the state of resources between client and server over HTTP. The term "representational"
refers to the fact that resources are represented as a set of URIs, and "state transfer"
refers to the transfer of resource state from server to client in response to client requests.

## Describe the concept of idempotency in the REST API.

Idempotency is a key concept in REST APIs that means that making the same API request
multiple times should have the same result as making the request only once. In other words,
if a request is idempotent, the server's response will be the same every time, regardless of
how many times the request is made.

This is important for ensuring the reliability and consistency of APIs, as it allows clients to
safely retry requests without risking unintended side effects, such as duplicate actions or data
corruption. To ensure idempotency, API designers should use HTTP methods and status codes
appropriately, and design their resources and operations to be consistent and predictable.

## Describe the features (parameters, caching, body cache) of each of the HTTP methods used in the lab.

## Describe the difference between the PUT and POST methods in the REST API.

The main difference between the PUT and POST methods in the REST API is in how they are used to
modify resources on the server.

PUT is used to update an existing resource on the server. The client sends a request that
contains the updated representation of the resource, and the server replaces the existing
resource with the new one. If the resource does not exist, the server may create it.
The request URL typically identifies the specific resource being updated.

POST, on the other hand, is used to submit new data to the server to create a new resource or
trigger some action. The client sends a request that contains the data to be processed, and the
server creates a new resource based on that data. The request URL typically identifies the type
of resource being created, rather than a specific existing resource.

## What actions are appropriate to use caching for.

caching is most effective when used for responses that are:

Static or semi-static: Responses that do not change frequently, such as images, CSS, or
JavaScript files.

Publicly cacheable: Responses that can be safely shared among multiple clients, such as
publicly available data or resources that do not contain sensitive or private information.

Safe to cache: Responses that are safe to cache without risking unintended side effects,
such as duplicate actions or data corruption.

Read-heavy: Responses that are frequently requested by clients and can benefit from being
cached to reduce server load and improve response times.

## Describe how the REST API looks like the address to search for in the list of objects of one of the entities. For example, all subjects studied by a student.

In a REST API, the address to search for a list of objects related to a specific entity
typically follows the convention of using a plural noun that represents the collection of
objects, followed by a query parameter that specifies the filter criteria.

https://api.example.com/students/{student_id}/subjects

In this address, "students" represents the collection of student objects, "subjects" represents
the collection of subject objects, and "{student_id}" is a placeholder for the specific student
we are interested in. We might use a query parameter to filter the list of subjects based on
specific criteria, such as the semester or year of study:

https://api.example.com/students/{student_id}/subjects?semester=fall&year=2022

## Describe the role of HTTP(2XX, 3XX, 4XX) statuses in the REST API.

The 2XX status codes (e.g. 200 OK, 201 Created) indicate that the request was successful and
the server was able to process it. These codes are typically used to indicate successful
responses, such as when a client requests a resource or creates a new resource on the server.

The 3XX status codes (e.g. 301 Moved Permanently, 302 Found) indicate that the requested
resource has moved or is located elsewhere. These codes are typically used to indicate that
the client should redirect to a different URL to access the requested resource.

The 4XX status codes (e.g. 400 Bad Request, 404 Not Found) indicate that there was an error
with the client's request, and that the server was unable to process it. These codes are
typically used to indicate client-side errors, such as invalid or malformed requests or
attempting to access a resource that does not exist.

## Describe the HATEOAS approach.  

HATEOAS stands for "Hypermedia as the Engine of Application State." It is a principle of RESTful
web services that emphasizes the use of hypermedia links to enable clients to navigate the
API dynamically.

In the HATEOAS approach, a REST API includes hypermedia links in the responses it sends to
clients. These links provide information about the available resources and actions that a
client can take, and allow clients to discover and navigate the API without requiring prior
knowledge of its structure or endpoints.

## Describe other approaches to API implementation.

SOAP (Simple Object Access Protocol): This is a protocol that defines how to exchange structured
and typed data between distributed applications over the internet. SOAP uses XML to define its
messages and can use different transport protocols, such as HTTP or SMTP.

RPC (Remote Procedure Call): This is a protocol that enables a client to call a procedure or
method on a remote server and receive the result as if it were a local call. RPC typically
uses a binary format to encode the messages exchanged between client and server.

GraphQL: This is a query language and runtime for APIs that allows clients to define the shape
and structure of the data they need, and receive only that data in response. GraphQL provides
a single endpoint for all queries and mutations, and supports advanced features like real-time
subscriptions and schema introspection.

Falcor: This is a JavaScript library for building efficient and flexible APIs that enables
clients to retrieve and manipulate data as a single, cohesive JSON graph. Falcor uses a
virtual JSON graph to represent the data model and supports features like caching, batching,
and streaming.





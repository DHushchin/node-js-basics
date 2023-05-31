# Control questions

## Describe the difference between relational and document-oriented databases.

Relational databases: Relational databases store data in tables with predefined schemas. They follow a structured approach, where data is organized into rows and columns. Relationships between tables are established using keys (primary and foreign keys). Relational databases provide strong data consistency, enforce referential integrity, and support complex queries using SQL (Structured Query Language). They are well-suited for applications with structured and predictable data, where relationships between entities are well-defined.

Document-oriented databases: Document-oriented databases store data in flexible, semi-structured documents, typically in formats like JSON or XML. They do not require a predefined schema, allowing for dynamic and evolving data structures. Documents are self-contained and can vary in structure within the same collection. Document-oriented databases provide high scalability and flexibility, making them suitable for applications with rapidly changing and unstructured data. They typically offer rich querying capabilities using document-based query languages or JSON-like query syntax.

##  Describe the concept of transactions. Do they exist in relational and document-oriented databases?

Transactions represent a unit of work performed on a database. They ensure that a set of database operations either succeeds as a whole or fails entirely, maintaining the database's integrity and consistency.

Relational databases: Relational databases support transactions and provide ACID (Atomicity, Consistency, Isolation, Durability) properties. ACID guarantees that transactions are executed reliably and securely. Transactions allow for multiple operations to be grouped together and treated as a single logical unit. If any part of the transaction fails, the entire transaction can be rolled back, undoing any changes made.

Document-oriented databases: Not all document-oriented databases have built-in support for transactions, as they often prioritize scalability and performance over strict transactional guarantees. However, some document-oriented databases provide eventual consistency models, where changes propagate asynchronously across the system. Some databases offer multi-document atomicity, where operations involving multiple documents can be executed atomically.

## What are the ways to implement ManyToMany relationships in databases?

There are a few ways to implement ManyToMany relationships in databases:

Junction Table: Create a separate table to establish the relationship between the two entities. The junction table contains foreign keys referencing the primary keys of both entities, effectively mapping the relationship.

Embedded Arrays or Lists: In document-oriented databases, you can use arrays or lists to store references to related documents within a single document. Each document can contain an array or list field that holds the references to related documents.

Array of Keys: In some databases, you can have an array field in one entity that stores the primary keys of related entities. This approach establishes the relationship between entities by referencing their primary keys.

Denormalization: In denormalized databases, you can duplicate data across multiple documents to establish relationships. This allows for faster retrieval of related data but may introduce data redundancy.

The choice of implementation depends on the specific requirements of the application and the capabilities of the database being used.

## Describe the features of the Redis database. Why is it fast? Where is it better to use it?

Redis is an open-source, in-memory data store that offers several features that make it a popular choice for various use cases:

1. In-Memory Storage: Redis primarily stores data in memory, which enables extremely fast read and write operations. Since data is not persisted to disk by default, Redis can achieve high throughput and low latency.

2. Data Structures: Redis supports a wide range of data structures, including strings, lists, sets, sorted sets, hashes, bitmaps, and hyperloglogs. These data structures provide flexibility in how data is stored and manipulated, allowing for efficient operations on complex data types.

3. Caching: Redis is frequently used as a caching layer in applications. By caching frequently accessed data in memory, Redis reduces the need to retrieve the data from slower data sources, such as databases or APIs. This improves application performance and reduces the load on backend systems.

4. Pub/Sub Messaging: Redis provides a publish/subscribe messaging system. It allows different components of an application or different applications to communicate in a real-time, event-driven manner. This feature enables building scalable and responsive systems.

5. Persistence Options: Redis offers various persistence options to ensure data durability. It can periodically save data to disk or append changes to a log file, providing options for both snapshot-based persistence and write-ahead logging. This allows Redis to recover data in case of restarts or failures.

6. High Availability: Redis supports master-slave replication, allowing for data replication across multiple nodes. This provides high availability and fault tolerance, ensuring that Redis remains operational even if a master node fails.

Redis is particularly well-suited for use cases that require:

- Caching frequently accessed data to improve application performance.
- Real-time analytics and leaderboard functionality.
- Pub/Sub messaging for building real-time communication systems.
- High-speed data ingestion and processing.
- Session storage and management.
- Rate limiting and throttling.
- Job and queue management.






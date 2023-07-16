import React from "react";

const Blog = () => {
  return (
    <div className="w-3/5 mx-auto my-20">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that is used to authenticate and
            authorize a client to access protected resources, such as APIs or
            services. It is typically a string of characters that represents the
            identity and permissions of the client. Access tokens are
            short-lived and have an expiration time. <br />
            A refresh token is a credential that is used to obtain a new access
            token when the current one expires. It is used to refresh the
            client's access without requiring the user to re-enter their
            credentials. Refresh tokens have a longer expiration time compared
            to access tokens.
            <br />
            When a client wants to access a protected resource, it includes the
            access token in its requests. The server verifies the access token
            to ensure the client has the necessary permissions to access the
            requested resource. If the access token expires, the client can use
            the refresh token to request a new access token from the server.
            <br />
            On the client-side, both access tokens and refresh tokens should be
            stored securely to prevent unauthorized access. They should not be
            exposed to potential attackers. Common storage options for
            client-side tokens include secure HTTP-only cookies or local
            storage, depending on the security requirements of your application.
            It's important to follow best practices and security guidelines when
            handling and storing tokens on the client-side.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus my-5 border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL (Structured Query Language) databases are relational databases
            that store data in structured tables with predefined schemas. They
            use a fixed schema to define the structure of data and enforce data
            integrity through relationships, constraints, and transactions. SQL
            databases are suitable for complex data relationships and highly
            structured data. They provide strong consistency and support for
            ACID (Atomicity, Consistency, Isolation, Durability) properties.
            Examples of SQL databases include MySQL, PostgreSQL, and Oracle.{" "}
            <br />
            NoSQL (Not Only SQL) databases, on the other hand, are
            non-relational databases that provide flexible schema designs. They
            are designed to handle large volumes of unstructured or
            semi-structured data. NoSQL databases offer horizontal scalability,
            high availability, and fault tolerance. They are suitable for
            handling rapidly changing data and high write loads. NoSQL databases
            use various data models like key-value, document, columnar, or
            graph. Examples of NoSQL databases include MongoDB, Cassandra, and
            Redis. <br />
            In summary, SQL databases are best suited for structured data with
            complex relationships, ensuring data integrity and supporting ACID
            transactions. NoSQL databases are more suitable for handling
            unstructured or semi-structured data, providing scalability,
            flexibility, and high availability at the cost of sacrificing some
            of the strict consistency guarantees of SQL databases. The choice
            between SQL and NoSQL depends on the specific requirements and
            characteristics of the application and the data being stored.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a popular web application framework for Node.js. It
            provides a minimalistic and flexible set of features to build web
            applications and APIs. Express.js allows developers to handle
            routes, HTTP requests, middleware, and views efficiently. It is
            known for its simplicity and ease of use, making it a popular choice
            for building lightweight and fast web applications. <br />
            Nest.js is a progressive, TypeScript-based framework for building
            scalable and efficient server-side applications. It is built on top
            of Express.js and incorporates ideas from other frameworks like
            Angular. Nest.js provides a modular and structured approach to
            developing applications using decorators, dependency injection, and
            other design patterns. It is well-suited for building complex and
            enterprise-grade applications with support for features like
            routing, validation, authentication, and more. Nest.js promotes code
            reusability, testability, and maintainability.
          </p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus my-5 border border-base-300 bg-base-200"
      >
        <div className="collapse-title text-xl font-medium">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            In MongoDB, the aggregate operation is used to perform advanced data
            processing and analysis on collections of documents. It allows you
            to perform complex queries, transformations, and aggregations on
            your data. <br />
            The aggregate operation in MongoDB works by processing a set of
            documents through a pipeline of stages. Each stage performs a
            specific operation on the input documents and passes the result to
            the next stage. The pipeline stages can include operations such as
            filtering, grouping, sorting, projecting, and computing aggregate
            values. <br />
            Here's a high-level overview of how the aggregate operation works:
            1. Define a pipeline: Construct an array of stages that specify the
            operations to be performed on the data. <br /> 2. Execute the
            pipeline: Pass the pipeline to the `aggregate` method in MongoDB,
            which processes the documents through each stage of the pipeline.{" "}
            <br /> 3. Data transformation: Each stage in the pipeline modifies
            or transforms the data based on the specified operation. For
            example, you can filter documents, group them by a specific field,
            calculate aggregate values like counts or sums, and reshape the
            output. <br /> 4. Output result: The final stage of the pipeline
            returns the result of the aggregation operation, which can be a
            single document or a cursor with multiple documents. <br />
            The aggregate operation allows you to perform complex data
            manipulations and aggregations in a single query, making it a
            powerful tool for data analysis and reporting in MongoDB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

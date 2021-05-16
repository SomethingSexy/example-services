# Services Template
Example/template for setting up a REST based services project.

## Architecture
Based off clean architecture or onion architecture.

### frameworks
All "external" interfaces to the application go here, in this example we are using fastify for handling REST services.  If we wanted to add support for GraphQL that would sit along side the web-services folder within frameworks.

### gateways
Interface adapters to internal data or external data.

### use-cases
Core functions that contain the main application level business rules and the access to the system.  Frameworks should use these directly.  Depending on the requirements of the use case, gateways can be passed into these functions as interfaces, think dependency injection.
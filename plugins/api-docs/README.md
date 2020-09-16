# API Documentation

WORK IN PROGRESS

This is an extension for the catalog plugin that provides components to discover and display API entities.
APIs define the interface between components, see the [system model](https://backstage.io/docs/features/software-catalog/system-model) for details.
They are defined in machine readable formats and provide a human readable documentation.

The plugin provides a standalone list of APIs, as well as an integration into the API tab of a catalog entity.

![Standalone API list](./docs/api_list.png)
![OpenAPI Definition](./docs/openapi_definition.png)
![Integration into components](./docs/entity_tab_api.png)

Right now, the following API formats are supported:

- [OpenAPI](https://swagger.io/specification/) 2 & 3,
- [AsyncAPI](https://www.asyncapi.com/docs/specifications/latest/),

Other formats are displayed as plain text, but this can easily be extented.

To fill the catalog with APIs, [provide entities of kind API](https://backstage.io/docs/features/software-catalog/descriptor-format#kind-api).
To link that an component implements an API, see [`implementsApis` property on components](https://backstage.io/docs/features/software-catalog/descriptor-format#specimplementsapis-optional).

## Links

- [The Backstage homepage](https://backstage.io)

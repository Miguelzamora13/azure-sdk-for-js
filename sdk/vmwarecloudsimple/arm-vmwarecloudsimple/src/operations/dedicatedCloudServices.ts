/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DedicatedCloudServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { VMwareCloudSimple } from "../vMwareCloudSimple";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DedicatedCloudService,
  DedicatedCloudServicesListBySubscriptionNextOptionalParams,
  DedicatedCloudServicesListBySubscriptionOptionalParams,
  DedicatedCloudServicesListByResourceGroupNextOptionalParams,
  DedicatedCloudServicesListByResourceGroupOptionalParams,
  DedicatedCloudServicesListBySubscriptionResponse,
  DedicatedCloudServicesListByResourceGroupResponse,
  DedicatedCloudServicesGetOptionalParams,
  DedicatedCloudServicesGetResponse,
  DedicatedCloudServicesCreateOrUpdateOptionalParams,
  DedicatedCloudServicesCreateOrUpdateResponse,
  DedicatedCloudServicesDeleteOptionalParams,
  PatchPayload,
  DedicatedCloudServicesUpdateOptionalParams,
  DedicatedCloudServicesUpdateResponse,
  DedicatedCloudServicesListBySubscriptionNextResponse,
  DedicatedCloudServicesListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DedicatedCloudServices operations. */
export class DedicatedCloudServicesImpl implements DedicatedCloudServices {
  private readonly client: VMwareCloudSimple;

  /**
   * Initialize a new instance of the class DedicatedCloudServices class.
   * @param client Reference to the service client
   */
  constructor(client: VMwareCloudSimple) {
    this.client = client;
  }

  /**
   * Returns list of dedicated cloud services within a subscription
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DedicatedCloudServicesListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCloudService> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DedicatedCloudServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedCloudService[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DedicatedCloudServicesListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DedicatedCloudService> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Returns list of dedicated cloud services within a resource group
   * @param resourceGroupName The name of the resource group
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedCloudServicesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DedicatedCloudService> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DedicatedCloudServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedCloudService[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DedicatedCloudServicesListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DedicatedCloudService> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns list of dedicated cloud services within a subscription
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DedicatedCloudServicesListBySubscriptionOptionalParams
  ): Promise<DedicatedCloudServicesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Returns list of dedicated cloud services within a resource group
   * @param resourceGroupName The name of the resource group
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DedicatedCloudServicesListByResourceGroupOptionalParams
  ): Promise<DedicatedCloudServicesListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Returns Dedicate Cloud Service
   * @param resourceGroupName The name of the resource group
   * @param dedicatedCloudServiceName dedicated cloud Service name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    dedicatedCloudServiceName: string,
    options?: DedicatedCloudServicesGetOptionalParams
  ): Promise<DedicatedCloudServicesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, dedicatedCloudServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Create dedicate cloud service
   * @param resourceGroupName The name of the resource group
   * @param dedicatedCloudServiceName dedicated cloud Service name
   * @param dedicatedCloudServiceRequest Create Dedicated Cloud Service request
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    dedicatedCloudServiceName: string,
    dedicatedCloudServiceRequest: DedicatedCloudService,
    options?: DedicatedCloudServicesCreateOrUpdateOptionalParams
  ): Promise<DedicatedCloudServicesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dedicatedCloudServiceName,
        dedicatedCloudServiceRequest,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Delete dedicate cloud service
   * @param resourceGroupName The name of the resource group
   * @param dedicatedCloudServiceName dedicated cloud service name
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    dedicatedCloudServiceName: string,
    options?: DedicatedCloudServicesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, dedicatedCloudServiceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Delete dedicate cloud service
   * @param resourceGroupName The name of the resource group
   * @param dedicatedCloudServiceName dedicated cloud service name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    dedicatedCloudServiceName: string,
    options?: DedicatedCloudServicesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      dedicatedCloudServiceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch dedicated cloud service's properties
   * @param resourceGroupName The name of the resource group
   * @param dedicatedCloudServiceName dedicated cloud service name
   * @param dedicatedCloudServiceRequest Patch Dedicated Cloud Service request
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    dedicatedCloudServiceName: string,
    dedicatedCloudServiceRequest: PatchPayload,
    options?: DedicatedCloudServicesUpdateOptionalParams
  ): Promise<DedicatedCloudServicesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        dedicatedCloudServiceName,
        dedicatedCloudServiceRequest,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DedicatedCloudServicesListBySubscriptionNextOptionalParams
  ): Promise<DedicatedCloudServicesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DedicatedCloudServicesListByResourceGroupNextOptionalParams
  ): Promise<DedicatedCloudServicesListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudService
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dedicatedCloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudService
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  requestBody: Parameters.dedicatedCloudServiceRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dedicatedCloudServiceName1
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CsrpError,
      headersMapper: Mappers.DedicatedCloudServicesDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dedicatedCloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/dedicatedCloudServices/{dedicatedCloudServiceName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudService
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  requestBody: Parameters.dedicatedCloudServiceRequest1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.dedicatedCloudServiceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DedicatedCloudServiceListResponse
    },
    default: {
      bodyMapper: Mappers.CsrpError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skipToken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};

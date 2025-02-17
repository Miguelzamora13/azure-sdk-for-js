/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { KqlScriptOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  KqlScriptResource,
  KqlScriptCreateOrUpdateOptionalParams,
  KqlScriptCreateOrUpdateResponse,
  KqlScriptGetByNameOptionalParams,
  KqlScriptGetByNameResponse,
  KqlScriptDeleteByNameOptionalParams,
  ArtifactRenameRequest,
  KqlScriptRenameOptionalParams
} from "../models";

/** Class containing KqlScriptOperations operations. */
export class KqlScriptOperationsImpl implements KqlScriptOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class KqlScriptOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Creates or updates a KQL Script
   * @param kqlScriptName KQL script name
   * @param kqlScript KQL script
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    kqlScriptName: string,
    kqlScript: KqlScriptResource,
    options?: KqlScriptCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<KqlScriptCreateOrUpdateResponse>,
      KqlScriptCreateOrUpdateResponse
    >
  > {
    const { span } = createSpan(
      "ArtifactsClient-beginCreateOrUpdate",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<KqlScriptCreateOrUpdateResponse> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as KqlScriptCreateOrUpdateResponse;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { kqlScriptName, kqlScript, options },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a KQL Script
   * @param kqlScriptName KQL script name
   * @param kqlScript KQL script
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    kqlScriptName: string,
    kqlScript: KqlScriptResource,
    options?: KqlScriptCreateOrUpdateOptionalParams
  ): Promise<KqlScriptCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      kqlScriptName,
      kqlScript,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get KQL script by name
   * @param kqlScriptName KQL script name
   * @param options The options parameters.
   */
  async getByName(
    kqlScriptName: string,
    options?: KqlScriptGetByNameOptionalParams
  ): Promise<KqlScriptGetByNameResponse> {
    const { span } = createSpan("ArtifactsClient-getByName", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { kqlScriptName, options },
        getByNameOperationSpec
      );
      return result as KqlScriptGetByNameResponse;
    } catch (error) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete KQL script by name
   * @param kqlScriptName KQL script name
   * @param options The options parameters.
   */
  async beginDeleteByName(
    kqlScriptName: string,
    options?: KqlScriptDeleteByNameOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan(
      "ArtifactsClient-beginDeleteByName",
      options || {}
    );
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { kqlScriptName, options },
      deleteByNameOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete KQL script by name
   * @param kqlScriptName KQL script name
   * @param options The options parameters.
   */
  async beginDeleteByNameAndWait(
    kqlScriptName: string,
    options?: KqlScriptDeleteByNameOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteByName(kqlScriptName, options);
    return poller.pollUntilDone();
  }

  /**
   * Rename KQL script
   * @param kqlScriptName KQL script name
   * @param renameRequest Rename request
   * @param options The options parameters.
   */
  async beginRename(
    kqlScriptName: string,
    renameRequest: ArtifactRenameRequest,
    options?: KqlScriptRenameOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const { span } = createSpan("ArtifactsClient-beginRename", options || {});
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      try {
        const result = await this.client.sendOperationRequest(args, spec);
        return result as void;
      } catch (error) {
        span.setStatus({
          code: coreTracing.SpanStatusCode.UNSET,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
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
      { kqlScriptName, renameRequest, options },
      renameOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Rename KQL script
   * @param kqlScriptName KQL script name
   * @param renameRequest Rename request
   * @param options The options parameters.
   */
  async beginRenameAndWait(
    kqlScriptName: string,
    renameRequest: ArtifactRenameRequest,
    options?: KqlScriptRenameOptionalParams
  ): Promise<void> {
    const poller = await this.beginRename(
      kqlScriptName,
      renameRequest,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/kqlScripts/{kqlScriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KqlScriptResource
    },
    201: {
      bodyMapper: Mappers.KqlScriptResource
    },
    202: {
      bodyMapper: Mappers.KqlScriptResource
    },
    204: {
      bodyMapper: Mappers.KqlScriptResource
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  requestBody: Parameters.kqlScript,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.endpoint, Parameters.kqlScriptName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByNameOperationSpec: coreClient.OperationSpec = {
  path: "/kqlScripts/{kqlScriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KqlScriptResource
    },
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.endpoint, Parameters.kqlScriptName],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByNameOperationSpec: coreClient.OperationSpec = {
  path: "/kqlScripts/{kqlScriptName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.endpoint, Parameters.kqlScriptName],
  headerParameters: [Parameters.accept],
  serializer
};
const renameOperationSpec: coreClient.OperationSpec = {
  path: "/kqlScripts/{kqlScriptName}/rename",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorContract
    }
  },
  requestBody: Parameters.renameRequest,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [Parameters.endpoint, Parameters.kqlScriptName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};

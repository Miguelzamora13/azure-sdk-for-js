/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SiteInfo, AzureBotService } from "@azure/arm-botservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource
 *
 * @summary Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/DirectlineRegenerateKeys.json
 */
async function regenerateKeysForDirectLineChannelSite() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "DirectLineChannel";
  const parameters: SiteInfo = { key: "key1", siteName: "testSiteName" };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.directLine.regenerateKeys(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

regenerateKeysForDirectLineChannelSite().catch(console.error);

/**
 * This sample demonstrates how to Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource
 *
 * @summary Regenerates secret keys and returns them for the DirectLine Channel of a particular BotService resource
 * x-ms-original-file: specification/botservice/resource-manager/Microsoft.BotService/preview/2021-05-01-preview/examples/WebChatRegenerateKeys.json
 */
async function regenerateKeysForWebChatChannelSite() {
  const subscriptionId = "subscription-id";
  const resourceGroupName = "OneResourceGroupName";
  const resourceName = "samplebotname";
  const channelName = "WebChatChannel";
  const parameters: SiteInfo = { key: "key1", siteName: "testSiteName" };
  const credential = new DefaultAzureCredential();
  const client = new AzureBotService(credential, subscriptionId);
  const result = await client.directLine.regenerateKeys(
    resourceGroupName,
    resourceName,
    channelName,
    parameters
  );
  console.log(result);
}

regenerateKeysForWebChatChannelSite().catch(console.error);

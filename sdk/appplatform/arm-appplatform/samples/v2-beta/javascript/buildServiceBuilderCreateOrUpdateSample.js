/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AppPlatformManagementClient } = require("@azure/arm-appplatform");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update a KPack builder.
 *
 * @summary Create or update a KPack builder.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/preview/2022-03-01-preview/examples/BuildServiceBuilder_CreateOrUpdate.json
 */
async function buildServiceBuilderCreateOrUpdate() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "myResourceGroup";
  const serviceName = "myservice";
  const buildServiceName = "default";
  const builderName = "mybuilder";
  const builderResource = {
    properties: {
      buildpackGroups: [{ name: "mix", buildpacks: [{ id: "tanzu-buildpacks/java-azure" }] }],
      stack: { id: "io.buildpacks.stacks.bionic", version: "base" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.buildServiceBuilder.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    buildServiceName,
    builderName,
    builderResource
  );
  console.log(result);
}

buildServiceBuilderCreateOrUpdate().catch(console.error);

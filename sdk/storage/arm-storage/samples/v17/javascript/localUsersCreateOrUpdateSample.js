/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StorageManagementClient } = require("@azure/arm-storage");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Create or update the properties of a local user associated with the storage account
 *
 * @summary Create or update the properties of a local user associated with the storage account
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-09-01/examples/LocalUserCreate.json
 */
async function createLocalUser() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res6977";
  const accountName = "sto2527";
  const username = "user1";
  const properties = {
    hasSshPassword: true,
    homeDirectory: "homedirectory",
    permissionScopes: [
      { permissions: "rwd", resourceName: "share1", service: "file" },
      { permissions: "rw", resourceName: "share2", service: "file" },
    ],
    sshAuthorizedKeys: [{ description: "key name", key: "ssh-rsa keykeykeykeykey=" }],
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.localUsersOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    username,
    properties
  );
  console.log(result);
}

createLocalUser().catch(console.error);

/**
 * This sample demonstrates how to Create or update the properties of a local user associated with the storage account
 *
 * @summary Create or update the properties of a local user associated with the storage account
 * x-ms-original-file: specification/storage/resource-manager/Microsoft.Storage/stable/2021-09-01/examples/LocalUserUpdate.json
 */
async function updateLocalUser() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "res6977";
  const accountName = "sto2527";
  const username = "user1";
  const properties = {
    hasSharedKey: false,
    hasSshKey: false,
    hasSshPassword: false,
    homeDirectory: "homedirectory2",
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageManagementClient(credential, subscriptionId);
  const result = await client.localUsersOperations.createOrUpdate(
    resourceGroupName,
    accountName,
    username,
    properties
  );
  console.log(result);
}

updateLocalUser().catch(console.error);

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to get embedding vectors for a piece of text using Azure OpenAI.
 *
 * @summary generates embedding vectors from a prompt using Azure OpenAI Get Embeddings.
 */

const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");

// Load the .env file if it exists
const dotenv = require("dotenv");
const { parseOpenAIError } = require("./parseOpenAIError.js");
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const azureApiKey = process.env["AZURE_API_KEY"] || "<api key>";

// The prompt to generate the embeddings vector
const prompt = ["This is the sample text to be embedded"];

// The name of the model deployment
const deploymentName = "text-embedding-ada-002";

async function main() {
  console.log("== Get embeddings sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const embeddings = await client.getEmbeddings(deploymentName, prompt);

  for (const embeddingData of embeddings.data) {
    console.log(`The embedding values are ${embeddingData.embedding}`);
  }
}

main().catch((err) => {
  parseOpenAIError(err);
});

module.exports = { main };

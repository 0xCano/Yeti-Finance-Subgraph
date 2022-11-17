# Yeti Finance Subgraph

Subgrah for Yeti Finance. Converts events on Avalanche to Graph Nodes that can be fetched through the Graph API. Read [Creating a Subgraph](https://thegraph.com/docs/en/developing/creating-a-subgraph/) for detailed information about subgraphs.

## Adding events

1. Create a corresponding type in `schema.graphql`.
2. Add the contract abi (proxy) to the `abis` folder.
3. Run `yarn codegen`. 
4. Create a mapping file such as `BorrowerOperationMapping.ts`.
5. Create a eventHandler function in the mapping file such as `handleTroveUpdated`.
6. Add the information about the contract and event handling to `subgraph.yaml`.

## Event Handlers

1. handleTroveUpdated
2. handleLiquidation
3. handleRedemption
4. handleReinvested
5. handleAddLiquidity



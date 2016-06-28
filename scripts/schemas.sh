#!/usr/bin/env bash

ts_json="node_modules/typescript-json-schema/bin/typescript-json-schema --required"
root="src/mappings"

$ts_json ${root}/draft-4/CommandLineTool.ts CommandLineTool > src/parser/schemas/draft-4/CLT-schema.json
$ts_json ${root}/draft-3/CommandLineTool.ts CommandLineTool > src/parser/schemas/draft-3/CLT-schema.json

$ts_json ${root}/draft-4/Workflow.ts Workflow > src/parser/schemas/draft-4/WF-schema.json
$ts_json ${root}/draft-3/Workflow.ts Workflow > src/parser/schemas/draft-3/WF-schema.json

$ts_json ${root}/draft-4/ExpressionTool.ts ExpressionTool > src/parser/schemas/draft-4/ET-schema.json
$ts_json ${root}/draft-3/ExpressionTool.ts ExpressionTool > src/parser/schemas/draft-3/ET-schema.json

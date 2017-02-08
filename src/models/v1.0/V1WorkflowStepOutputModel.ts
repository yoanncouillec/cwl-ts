import {WorkflowStepOutputModel} from "../generic/WorkflowStepOutputModel";
import {WorkflowStepOutput} from "../../mappings/v1.0/WorkflowStepOutput";
import {Serializable} from "../interfaces/Serializable";
import {V1StepModel} from "./V1StepModel";

export class V1WorkflowStepOutputModel extends WorkflowStepOutputModel implements Serializable<WorkflowStepOutput>{
    constructor(output?, step?: V1StepModel, loc?: string) {
        super(loc);
        this.parentStep = step;
        if (output) this.deserialize(output);
    }

    customProps: any;

    serialize(): WorkflowStepOutput {
        return {
            id: this.id
        }
    }

    deserialize(output: WorkflowStepOutput): void {
        this.id = output.id;
        this.type = output["type"];
        this.fileTypes = output["fileTypes"];
    }
}
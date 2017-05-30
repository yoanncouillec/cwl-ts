import {Serializable} from "../interfaces/Serializable";
import {ValidationBase} from "../helpers/validation/ValidationBase";
import {UnimplementedMethodException} from "../helpers/UnimplementedMethodException";
import {ExpressionModel} from "./ExpressionModel";
import {Expression as SBDraft2Expression} from "../../mappings/d2sb/Expression";
import {Expression as V1Expression} from "../../mappings/v1.0/Expression";

export abstract class CommandLineBindingModel extends ValidationBase implements Serializable<any> {
    public customProps = {};

    public loadContents: boolean;
    public position: number;
    public prefix: string;
    public itemSeparator: string;
    public separate: boolean;
    public valueFrom: ExpressionModel;

    public hasSecondaryFiles: boolean;
    public hasShellQuote: boolean;

    public secondaryFiles?: ExpressionModel[];

    protected context: any;

    public validate(context: any): Promise<any> {
        new UnimplementedMethodException("validate", "CommandLineBindingModel");
        return new Promise((res, rej) => res(this.issues));
    }

    setValueFrom(val: string | SBDraft2Expression | V1Expression) {
        new UnimplementedMethodException("setValueFrom", "CommandLineBindingModel");
    }

    serialize(): any {
        new UnimplementedMethodException("serialize", "CommandLineBindingModel");
        return null;
    }

    deserialize(attr: any): void {
        new UnimplementedMethodException("deserialize", "CommandLineBindingModel");
    }

    cleanValidity() {
        super.cleanValidity();
    }

    cloneStatus(clone: CommandLineBindingModel) {
        this.updateValidity({...clone.issues});
        this.deserialize(clone.serialize());
    };
}
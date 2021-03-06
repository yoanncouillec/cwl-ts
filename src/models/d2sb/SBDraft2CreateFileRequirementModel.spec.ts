import {expect} from "chai";
import {SBDraft2CreateFileRequirementModel} from "./SBDraft2CreateFileRequirementModel";
import {CreateFileRequirementClass} from "../../mappings/d2sb/CreateFileRequirement";
import {ExpressionClass} from "../../mappings/d2sb/Expression";

describe("CreateFileRequirementModel", () => {
    describe("serialize", () => {
        it("should serialize requirement with fileDefs with expressions", () => {
            const data = {
                "class": <CreateFileRequirementClass> "CreateFileRequirement",
                "fileDef": [
                    {
                        "fileContent": {
                            "engine": "#cwl-js-engine",
                            "class": <ExpressionClass> "Expression",
                            "script": "{\n  de_results = [].concat($job.inputs.de_results).sort()\n  return de_results[0]\n}"
                        },
                        "filename": {
                            "engine": "#cwl-js-engine",
                            "class": <ExpressionClass> "Expression",
                            "script": "{\n  de_results = [].concat($job.inputs.de_results).sort()\n  return de_results[0].path.split('/').pop()\n}"
                        }
                    }
                ]
            };

            const req = new SBDraft2CreateFileRequirementModel(data);
            expect(req.serialize()).to.deep.equal(data);
        });

        it("should serialize requirement with only string fileDefs", () => {
            const data = {
                "class": <CreateFileRequirementClass> "CreateFileRequirement",
                "fileDef": [
                    {
                        "fileContent": "content",
                        "filename": "name"
                    }
                ]
            };

            const req = new SBDraft2CreateFileRequirementModel(data);
            expect(req.serialize()).to.deep.equal(data);
        });

        it("should serialize mixed string and expression fileDefs", () => {
            const data = {
                "class": <CreateFileRequirementClass> "CreateFileRequirement",
                "fileDef": [
                    {
                        "fileContent": "content",
                        "filename": {
                            "engine": "#cwl-js-engine",
                            "class": <ExpressionClass> "Expression",
                            "script": "{\n  de_results = [].concat($job.inputs.de_results).sort()\n  return de_results[0].path.split('/').pop()\n}"
                        }
                    }
                ]
            };

            const req = new SBDraft2CreateFileRequirementModel(data);
            expect(req.serialize()).to.deep.equal(data);
        });
    });

    describe("add new fileDef", () => {
        it("should set new list of fileDef", () => {
            const data = {
                "class": <CreateFileRequirementClass> "CreateFileRequirement",
                "fileDef": [
                    {
                        "fileContent": "content",
                        "filename": {
                            "engine": "#cwl-js-engine",
                            "class": <ExpressionClass> "Expression",
                            "script": "{\n  de_results = [].concat($job.inputs.de_results).sort()\n  return de_results[0].path.split('/').pop()\n}"
                        }
                    }
                ]
            };

            const req = new SBDraft2CreateFileRequirementModel(data);

            req.addDirent({
                filename: "foo",
                fileContent: "bar"
            });

            expect(req.listing[1].entryName.serialize()).to.equal("foo");
            expect(req.listing[1].entry.serialize()).to.equal("bar");
        })
    })
});
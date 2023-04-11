// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/* eslint-disable valid-jsdoc */
/* eslint-disable guard-for-in */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */

import { TypeChecker } from "./internal";
import { EnumInfo } from "./internal";
import { EnumKinds } from "./internal";
import { EntityKinds } from "./internal";
import { LanguageStringType } from "./internal";
import { EnumValueInfoImpl } from "./internal";
import { EnumValueInfo } from "./internal";
import { PrimitiveSchemaInfoImpl } from "./internal";
import { PrimitiveSchemaInfo } from "./internal";
import { EntityInfoImpl } from "./internal";
import { SupplementalTypeInfo } from "./internal";
import { SupplementalTypeInfoImpl } from "./internal";
import { IdValidator } from "./internal";
import { ParsingError, createParsingError } from "./internal";
import { AggregateContext } from "./internal";
import { InDTMI } from "./internal";
import { Reference, referenceInit } from "../common/reference";
import { Model } from "./internal";
import { ParsedObjectPropertyInfo } from "./internal";
import { ElementPropertyConstraint, ValueParser, ValueConstraint } from "./internal";
import { ModelParserImpl } from "./internal";
import { MaterialTypeNameCollection } from "./internal";
import { ExtensionKind } from "./internal";
import { EntityInfo } from "./internal";
import { TraversalStatus } from "./internal";
export class EnumInfoImpl implements EnumInfo, TypeChecker {
  public dtdlVersion: number;
  public id: string;
  public childOf: string | undefined;
  public definedIn: string | undefined;
  public entityKind: EnumKinds;
  public comment?: string;
  public description?: LanguageStringType;
  public displayName?: LanguageStringType;
  public enumValues?: EnumValueInfo[];
  private _enumValuesValueConstraints: ValueConstraint[] = [];
  private _enumValuesInstanceProperties: string[] = [];
  private _enumValuesAllowedVersionsV2: Set<number> = new Set<number>().add(2);
  private _enumValuesAllowedVersionsV3: Set<number> = new Set<number>().add(3);
  public languageVersion?: number;
  public valueSchema?: PrimitiveSchemaInfo;
  private _valueSchemaValueConstraints: ValueConstraint[] = [];
  private _valueSchemaInstanceProperties: string[] = [];
  private _valueSchemaAllowedVersionsV2: Set<number> = new Set<number>().add(2);
  private _valueSchemaAllowedVersionsV3: Set<number> = new Set<number>().add(3);
  public supplementalTypeIds: string[];
  public supplementalProperties: { [x: string]: any };
  public supplementalTypes: SupplementalTypeInfo[];
  public undefinedTypes: string[];
  public undefinedProperties: { [name: string]: any };
  public sourceObject: any;
  public isPartition: boolean;
  protected static _versionlessTypes: Set<string>;
  protected static _concreteKinds: { [x: number]: EnumKinds[] };
  protected static _badTypeActionFormat: { [x: number]: string };
  protected static _badTypeCauseFormat: { [x: number]: string };
  protected _checkedForDescendantSchemaOrContentsComponentNarrow: boolean;
  protected _idOfDescendantSchemaOrContentsComponentNarrow: InDTMI | undefined;
  protected _checkedDescendantEnumValueDatatype: string | undefined;
  protected _checkedForDescendantSchemaArray: boolean;
  protected _idOfDescendantSchemaArray: InDTMI | undefined;
  protected _countOfExtendsNarrowStatus: TraversalStatus;
  protected _countOfExtendsNarrowValue: number;
  protected _countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus: TraversalStatus;
  protected _countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowValue: number;

  constructor(
    dtdlVersion: number,
    id: string,
    childOf: string | undefined,
    definedIn: string | undefined,
    entityKind: EnumKinds
  ) {
    this.dtdlVersion = dtdlVersion;
    this.id = id;
    this.childOf = childOf;
    this.definedIn = definedIn;
    this.entityKind = entityKind;
    this.description = {};
    this.displayName = {};
    this.enumValues = [];
    this.supplementalTypeIds = [];
    this.supplementalProperties = {};
    this.supplementalTypes = [];
    this.isPartition = false;
    this.undefinedTypes = [];
    this.undefinedProperties = {};
    this._checkedForDescendantSchemaOrContentsComponentNarrow = false;
    this._idOfDescendantSchemaOrContentsComponentNarrow = undefined;
    this._checkedDescendantEnumValueDatatype = undefined;
    this._checkedForDescendantSchemaArray = false;
    this._idOfDescendantSchemaArray = undefined;
    this._countOfExtendsNarrowStatus = TraversalStatus.NotStarted;
    this._countOfExtendsNarrowValue = 0;
    this._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus =
      TraversalStatus.NotStarted;
    this._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowValue = 0;
  }

  static initialize() {
    this._versionlessTypes = new Set<string>()
      .add("dtmi:dtdl:class:ComplexSchema")
      .add("dtmi:dtdl:class:Entity")
      .add("dtmi:dtdl:class:Enum")
      .add("dtmi:dtdl:class:Schema");
    this._concreteKinds = {};
    this._concreteKinds[2] = [];
    this._concreteKinds[2].push("enum");
    this._concreteKinds[3] = [];
    this._concreteKinds[3].push("enum");
    this._badTypeActionFormat = {};
    this._badTypeCauseFormat = {};
    this._badTypeActionFormat[2] = `Provide a value for property '{property}' with @type Enum.`;
    this._badTypeActionFormat[3] = `Provide a value for property '{property}' with @type Enum.`;
    this._badTypeCauseFormat[2] = `{primaryId:p} property '{property}' has value{secondaryId:e} that does not have @type of Enum.`;
    this._badTypeCauseFormat[3] = `{primaryId:p} property '{property}' has value{secondaryId:e} that does not have @type of Enum.`;
  }

  addType(dtmi: string, supplementalType: SupplementalTypeInfo | undefined): void {
    this.supplementalTypeIds.push(dtmi);
    if (supplementalType !== undefined) {
      this.supplementalTypes.push(supplementalType);
    }

    (supplementalType as SupplementalTypeInfoImpl).attachConstraints(this);
    (supplementalType as SupplementalTypeInfoImpl).bindInstanceProperties(this);
  }

  tryParseSupplementalProperty(
    model: Model,
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    propName: string,
    propToken: any
  ): boolean {
    const propDtmi = aggregateContext.createDtmi(propName);
    if (propDtmi === undefined) {
      return false;
    }

    for (const supplementalType of this.supplementalTypes) {
      if (
        (supplementalType as SupplementalTypeInfoImpl).tryParseProperty(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          aggregateContext,
          parsingErrors,
          this.id,
          propDtmi.value,
          propToken,
          this.supplementalProperties
        )
      ) {
        return true;
      }
    }

    return false;
  }

  doesHaveType(typeId: string): boolean {
    return (
      EnumInfoImpl._versionlessTypes.has(new InDTMI(typeId).versionless) ||
      this.supplementalTypes.some((st) => (st as SupplementalTypeInfoImpl).doesHaveType(typeId))
    );
  }

  addConstraint(propertyName: string, valueConstraint: ValueConstraint): void {
    switch (propertyName) {
      case "enumValues":
        if (this._enumValuesValueConstraints === undefined) {
          this._enumValuesValueConstraints = <ValueConstraint[]>[];
        }

        this._enumValuesValueConstraints.push(valueConstraint);
        break;
      case "valueSchema":
        if (this._valueSchemaValueConstraints === undefined) {
          this._valueSchemaValueConstraints = <ValueConstraint[]>[];
        }

        this._valueSchemaValueConstraints.push(valueConstraint);
        break;
    }
  }

  addInstanceProperty(propertyName: string, instancePropertyName: string): void {
    switch (propertyName) {
      case "enumValues":
        if (this._enumValuesInstanceProperties === undefined) {
          this._enumValuesInstanceProperties = <string[]>[];
        }

        this._enumValuesInstanceProperties.push(instancePropertyName);
        break;
      case "valueSchema":
        if (this._valueSchemaInstanceProperties === undefined) {
          this._valueSchemaInstanceProperties = <string[]>[];
        }

        this._valueSchemaInstanceProperties.push(instancePropertyName);
        break;
    }
  }

  static parseObject(
    model: Model,
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    valueConstraints: ValueConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    object: { [index: string]: any },
    parentId: string | undefined,
    definedIn: string | undefined,
    propName: string | undefined,
    dtmiSeg: string | undefined,
    keyProp: string | undefined,
    idRequired: boolean,
    typeRequired: boolean,
    allowIdReferenceSyntax: boolean,
    allowedVersions: Set<number>
  ): any {
    // This is a method to parse the object read from DTDL into a type of EnumInfo
    const childAggregateContext = aggregateContext.getChildContext(object, parsingErrors);
    if (
      Object.keys(object).length === 1 &&
      Object.prototype.hasOwnProperty.call(object, "@id") &&
      typeof object["@id"] === "string"
    ) {
      if (allowIdReferenceSyntax && parentId !== undefined) {
        this.parseIdString(
          objectPropertyInfoList,
          elementPropertyConstraints,
          valueConstraints,
          childAggregateContext,
          parsingErrors,
          object["@id"],
          parentId,
          propName,
          keyProp,
          allowedVersions
        );
        return;
      } else {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:idReference", {
            cause: `{primaryId:p} property '{property}' has an inline definition containing nothing but an '@id' property.`,
            action: `Replace the inline definition with a string value of '{secondaryId}', or provide a complete inline definition for property '{property}'.`,
            primaryId: parentId,
            property: propName,
            secondaryId: object["@id"]
          })
        );
        return;
      }
    }

    if (
      allowedVersions !== undefined &&
      allowedVersions.size !== 0 &&
      !allowedVersions.has(childAggregateContext.dtdlVersion)
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:disallowedVersionDefinition", {
          cause: `{primaryId:p} property '{property}' has a value that specifies DTDL context version ${childAggregateContext.dtdlVersion}, which is not allowed for this property.`,
          action: `Change the DTDL context version of property '{property}' to one of the following: ${Array.from(
            allowedVersions.values()
          ).join(" ,")}.`,
          primaryId: parentId,
          property: propName
        })
      );
    }

    const typeToken = object["@type"];
    let typeTokenArr: any[] = [];
    const elementId = IdValidator.parseIdProperty(
      object,
      parentId !== undefined ? parentId : "",
      propName,
      dtmiSeg,
      idRequired,
      parsingErrors,
      childAggregateContext.dtdlVersion
    );
    if (elementId === undefined || elementId === null) {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(model.dict, elementId)) {
      const elementDtmi = InDTMI.createDtmi(elementId);
      if (!elementDtmi?.isReserved) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:duplicateDefinition", {
            cause: `{primaryId:p} has more than one definition.`,
            action: `Remove all but one JSON object containing '@id' property with value {primaryId}, or change the '@id' values so there are no duplicates.`,
            primaryId: elementId
          })
        );
      } else if (dtmiSeg !== undefined) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:nonUniquePropertyValue", {
            cause: `{primaryId:p} property ${propName} contains more than one element whose property '{dtmiSeg}' has value ${dtmiSeg}`,
            action: `Change the value of property ${dtmiSeg} to a string value that is unique across all values of ${propName}.`,
            primaryId: parentId,
            property: propName,
            value: dtmiSeg
          })
        );
      }

      return;
    }

    if (typeRequired && typeToken === undefined) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[childAggregateContext.dtdlVersion],
          action: this._badTypeActionFormat[childAggregateContext.dtdlVersion],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId
        })
      );
      return;
    }

    if (typeToken === undefined) {
      typeTokenArr = ["Enum"];
    } else if (!Array.isArray(typeToken)) {
      typeTokenArr = [typeToken];
    } else {
      typeTokenArr = typeToken;
    }

    const elementInfo = this.parseTypeArray(
      typeTokenArr,
      elementId,
      parentId,
      definedIn,
      propName,
      childAggregateContext,
      parsingErrors
    );
    if (elementInfo === undefined) {
      return;
    }

    (elementInfo as EnumInfoImpl).sourceObject = object;
    switch (childAggregateContext.dtdlVersion) {
      case 2: {
        (elementInfo as EnumInfoImpl)?.parsePropertiesV2(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          childAggregateContext,
          parsingErrors,
          object,
          definedIn,
          allowIdReferenceSyntax
        );
        break;
      }

      case 3: {
        (elementInfo as EnumInfoImpl)?.parsePropertiesV3(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          childAggregateContext,
          parsingErrors,
          object,
          definedIn,
          allowIdReferenceSyntax
        );
        break;
      }
    }

    model.dict[elementId] = elementInfo;
    if (parentId !== undefined) {
      const objectPropertyInfo: ParsedObjectPropertyInfo = {
        elementId: parentId,
        propertyName: propName || "",
        referencedElementId: elementId,
        keyProperty: keyProp,
        expectedKinds: [],
        allowedVersions: new Set<number>(),
        badTypeCauseFormat: undefined,
        badTypeActionFormat: undefined
      };
      objectPropertyInfoList.push(objectPropertyInfo);
      if (valueConstraints !== undefined && elementPropertyConstraints !== undefined) {
        for (const vc of valueConstraints) {
          const elementPropertyConstraint = {
            parentId: parentId,
            propertyName: propName,
            elementId: elementId,
            valueConstraint: vc
          };
          elementPropertyConstraints.push(elementPropertyConstraint);
        }
      }
    }
  }

  static parseTypeArray(
    tokenArr: any[],
    elementId: string,
    parentId: string | undefined,
    definedIn: string | undefined,
    propName: string | undefined,
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[]
  ): EnumInfo | undefined {
    const materialKinds: EntityKinds[] = [];
    const elementInfo: Reference<EnumInfo> = referenceInit();
    let anyFailures = false;
    const supplementalTypeIds: string[] = [];
    const undefinedTypes: string[] = [];
    for (const element of tokenArr) {
      if (typeof element !== "string") {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:badType", {
            cause: this._badTypeCauseFormat[aggregateContext.dtdlVersion],
            action: this._badTypeActionFormat[aggregateContext.dtdlVersion],
            primaryId: parentId,
            property: propName,
            secondaryId: elementId,
            value: element
          })
        );
        return undefined;
      }

      switch (aggregateContext.dtdlVersion) {
        case 2: {
          if (
            !this.tryParseTypeStringV2(
              element.toString(),
              elementId,
              parentId,
              definedIn,
              propName,
              materialKinds,
              supplementalTypeIds,
              elementInfo,
              undefinedTypes,
              aggregateContext,
              parsingErrors
            )
          ) {
            anyFailures = true;
          }

          break;
        }

        case 3: {
          if (
            !this.tryParseTypeStringV3(
              element.toString(),
              elementId,
              parentId,
              definedIn,
              propName,
              materialKinds,
              supplementalTypeIds,
              elementInfo,
              undefinedTypes,
              aggregateContext,
              parsingErrors
            )
          ) {
            anyFailures = true;
          }

          break;
        }
      }
    }

    if (anyFailures) {
      return undefined;
    }

    if (elementInfo.ref === undefined) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[aggregateContext.dtdlVersion],
          action: this._badTypeActionFormat[aggregateContext.dtdlVersion],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId
        })
      );
      return undefined;
    }

    if (materialKinds.length > 1) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:multipleMaterialTypes", {
          cause: `{primaryId:p} has @type that specifies multiple material types: ${materialKinds.join(
            " ,"
          )}`,
          action: `Remove excess @type values so that only one material type remains.`,
          primaryId: elementId
        })
      );
      return undefined;
    }

    elementInfo.ref.undefinedTypes = undefinedTypes;
    for (const supplementalTypeId of supplementalTypeIds) {
      const supplementalTypeInfo = ModelParserImpl.retrieveSupplementalTypeCollection().supplementalTypes.get(
        supplementalTypeId
      );
      if (elementInfo.ref !== undefined && elementInfo.ref.entityKind !== undefined) {
        if (
          !(supplementalTypeInfo as SupplementalTypeInfoImpl)?.allowedCotypeKinds.includes(
            elementInfo.ref.entityKind
          )
        ) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:invalidCotype", {
              cause: `{primaryId:p} has @type {value} that can only be applied to elements of @type ${(supplementalTypeInfo as SupplementalTypeInfoImpl)?.allowedCotypeKinds.join(
                " or "
              )} + '.'`,
              action: `Remove @type '{value}' from element.`,
              primaryId: elementId,
              value: AggregateContext.getTermOrUri(supplementalTypeId)
            })
          );
        } else if (
          !(supplementalTypeInfo as SupplementalTypeInfoImpl)?.allowedCotypeVersions.includes(
            elementInfo.ref.dtdlVersion
          )
        ) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:invalidCotypeVersion", {
              cause: `{primaryId:p} has @type {value} that can only be applied to elements defined in DTDL version ${(supplementalTypeInfo as SupplementalTypeInfoImpl)?.allowedCotypeVersions.join(
                " or "
              )} + '.'`,
              action: `Remove @type '{value}' from element.`,
              primaryId: elementId,
              value: AggregateContext.getTermOrUri(supplementalTypeId)
            })
          );
        } else {
          (elementInfo.ref as EnumInfoImpl).addType(supplementalTypeId, supplementalTypeInfo);
        }
      }
    }

    return elementInfo.ref;
    // this ends the method.
  }

  doesPropertyDictContainKey(propertyName: string, key: string | undefined): boolean {
    switch (propertyName) {
      default:
        return false;
    }
  }

  static tryParseTypeStringV2(
    typestring: string,
    elementId: string,
    parentId: string | undefined,
    definedIn: string | undefined,
    propName: string | undefined,
    materialKinds: EntityKinds[],
    supplementalTypeIds: string[],
    elementInfo: Reference<EnumInfo>,
    undefinedTypes: string[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[]
  ): boolean {
    switch (typestring) {
      case "Enum":
      case "dtmi:dtdl:class:Enum;2":
        elementInfo.ref = new EnumInfoImpl(2, elementId, parentId, definedIn, "enum");
        materialKinds.push("enum");
        return true;
    }
    if (MaterialTypeNameCollection.isMaterialType(typestring)) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[2],
          action: this._badTypeActionFormat[2],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId,
          value: typestring
        })
      );
    }

    const supplementalTypeId = aggregateContext.createDtmi(typestring);
    if (supplementalTypeId === undefined) {
      if (undefinedTypes === undefined) {
        undefinedTypes = [];
      }

      undefinedTypes.push(typestring);
      return true;
    }

    const mapOfInDTMIToSupplementalTypeInfo = ModelParserImpl.retrieveSupplementalTypeCollection()
      .supplementalTypes;
    if (
      supplementalTypeId !== undefined &&
      !mapOfInDTMIToSupplementalTypeInfo.has(supplementalTypeId.value)
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[2],
          action: this._badTypeActionFormat[2],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId,
          value: typestring
        })
      );
      return false;
    }

    if (supplementalTypeId !== undefined) {
      const supplementalTypeInfo = mapOfInDTMIToSupplementalTypeInfo.get(supplementalTypeId.value);
      if (supplementalTypeInfo?.isAbstract) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:abstractSupplementalType", {
            cause: `{primaryId:p} has @type that specifies supplemental type {value} that is abstract.`,
            action: `Remove @type {value} or replace with a concrete subtype of {value}.`,
            primaryId: elementId,
            property: "@type",
            value: AggregateContext.getTermOrUri(supplementalTypeId.value)
          })
        );
      }

      switch ((supplementalTypeInfo as SupplementalTypeInfoImpl)?.extensionKind) {
        case ExtensionKind.UNIT:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[2],
              action: this._badTypeActionFormat[2],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
        case ExtensionKind.UNITATTRIBUTE:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[2],
              action: this._badTypeActionFormat[2],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
      }

      supplementalTypeIds.push(supplementalTypeId.value);
      return true;
    }

    return true;
  }

  parsePropertiesV2(
    model: Model,
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    object: { [index: string]: any },
    definedIn: string | undefined,
    allowIdReferenceSyntax: boolean
  ): void {
    this.languageVersion = 2;

    let valueSchemaPropertyMissing = true;
    for (const propKey in object) {
      let valueCount: number;
      const propValue = object[propKey];
      if (propValue === undefined || propValue === null) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:propertyValueNull", {
            cause: `{primaryId:p} property '{property}' has value null, which is not allowed in DTDL models.`,
            action: `Change the value of '{property}' to a value that is legal for this property.`,
            primaryId: this.id,
            property: propKey
          })
        );
        continue;
      }

      if (propKey[0] === "@") {
        continue;
      }

      switch (propKey) {
        case "comment":
        case "dtmi:dtdl:property:comment;2":
          this.comment = ValueParser.parseSingularStringToken(
            this.id,
            "comment",
            propValue,
            512,
            undefined,
            parsingErrors
          );
          continue;
        case "description":
        case "dtmi:dtdl:property:description;2":
          this.description = ValueParser.parseLangStringToken(
            this.id,
            "description",
            propValue,
            "en",
            512,
            undefined,
            parsingErrors
          );
          continue;
        case "displayName":
        case "dtmi:dtdl:property:displayName;2":
          this.displayName = ValueParser.parseLangStringToken(
            this.id,
            "displayName",
            propValue,
            "en",
            64,
            undefined,
            parsingErrors
          );
          continue;
        case "enumValues":
        case "dtmi:dtdl:property:enumValues;2":
          valueCount = EnumValueInfoImpl.parseToken(
            model,
            objectPropertyInfoList,
            elementPropertyConstraints,
            this._enumValuesValueConstraints,
            aggregateContext,
            parsingErrors,
            propValue,
            this.id,
            definedIn ?? this.id,
            "enumValues",
            "name",
            undefined,
            false,
            false,
            allowIdReferenceSyntax,
            this._enumValuesAllowedVersionsV2
          );
          if (valueCount < 1) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountBelowMin", {
                cause: `{primaryId:p} property 'enumValues' has value valueCount values, but the required minimum count is 1`,
                action: `Add one or more 'enumValues' to the object until the minimum count is satisfied.`,
                primaryId: this.id,
                property: "enumValues"
              })
            );
          }

          if (valueCount > 100) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountAboveMax", {
                cause: `{primaryId:p} property 'enumValues' has value valueCount values, but the allowed maximum count is 100`,
                action: `Remove one or more 'enumValues' to the object until the maximum count is satisfied.`,
                primaryId: this.id,
                property: "enumValues"
              })
            );
          }

          continue;
        case "valueSchema":
        case "dtmi:dtdl:property:valueSchema;2":
          valueSchemaPropertyMissing = false;
          valueCount = PrimitiveSchemaInfoImpl.parseToken(
            model,
            objectPropertyInfoList,
            elementPropertyConstraints,
            this._valueSchemaValueConstraints,
            aggregateContext,
            parsingErrors,
            propValue,
            this.id,
            definedIn ?? this.id,
            "valueSchema",
            undefined,
            undefined,
            true,
            true,
            allowIdReferenceSyntax,
            this._valueSchemaAllowedVersionsV2
          );
          if (valueCount < 1) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountBelowMin", {
                cause: `{primaryId:p} property 'valueSchema' has value valueCount values, but the required minimum count is 1`,
                action: `Add one or more 'valueSchema' to the object until the minimum count is satisfied.`,
                primaryId: this.id,
                property: "valueSchema"
              })
            );
          }

          if (valueCount > 1) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountAboveMax", {
                cause: `{primaryId:p} property 'valueSchema' has value valueCount values, but the allowed maximum count is 1`,
                action: `Remove one or more 'valueSchema' to the object until the maximum count is satisfied.`,
                primaryId: this.id,
                property: "valueSchema"
              })
            );
          }

          continue;
      }

      if (
        this.tryParseSupplementalProperty(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          aggregateContext,
          parsingErrors,
          propKey,
          propValue
        )
      ) {
        continue;
      }

      if (this.undefinedTypes !== undefined && this.undefinedTypes.length > 0) {
        this.undefinedProperties[propKey] = propValue;
      } else {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:noTypeThatAllows", {
            cause: `{primaryId:p} does not have a @type that allows property ${propKey}.`,
            action: `Remove property ${propKey} or correct if misspelled.`,
            primaryId: this.id,
            property: propKey
          })
        );
      }
    }

    if (valueSchemaPropertyMissing) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:missingRequiredProperty", {
          cause: "{primaryId:p} property valueSchema is required but missing.",
          action: "Add a valueSchema property to the object.",
          primaryId: this.id,
          property: "valueSchema"
        })
      );
    }

    for (const supplementalType of this.supplementalTypes) {
      (supplementalType as SupplementalTypeInfoImpl).checkForRequiredProperties(
        parsingErrors,
        this.id,
        this.supplementalProperties
      );
    }
  }

  static tryParseTypeStringV3(
    typestring: string,
    elementId: string,
    parentId: string | undefined,
    definedIn: string | undefined,
    propName: string | undefined,
    materialKinds: EntityKinds[],
    supplementalTypeIds: string[],
    elementInfo: Reference<EnumInfo>,
    undefinedTypes: string[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[]
  ): boolean {
    switch (typestring) {
      case "Enum":
      case "dtmi:dtdl:class:Enum;3":
        elementInfo.ref = new EnumInfoImpl(3, elementId, parentId, definedIn, "enum");
        materialKinds.push("enum");
        return true;
    }
    if (MaterialTypeNameCollection.isMaterialType(typestring)) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[3],
          action: this._badTypeActionFormat[3],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId,
          value: typestring
        })
      );
    }

    const supplementalTypeId = aggregateContext.createDtmi(typestring);
    if (supplementalTypeId === undefined) {
      if (undefinedTypes === undefined) {
        undefinedTypes = [];
      }

      undefinedTypes.push(typestring);
      return true;
    }

    const mapOfInDTMIToSupplementalTypeInfo = ModelParserImpl.retrieveSupplementalTypeCollection()
      .supplementalTypes;
    if (
      supplementalTypeId !== undefined &&
      !mapOfInDTMIToSupplementalTypeInfo.has(supplementalTypeId.value)
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badType", {
          cause: this._badTypeCauseFormat[3],
          action: this._badTypeActionFormat[3],
          primaryId: parentId,
          property: propName,
          secondaryId: elementId,
          value: typestring
        })
      );
      return false;
    }

    if (supplementalTypeId !== undefined) {
      const supplementalTypeInfo = mapOfInDTMIToSupplementalTypeInfo.get(supplementalTypeId.value);
      if (supplementalTypeInfo?.isAbstract) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:abstractSupplementalType", {
            cause: `{primaryId:p} has @type that specifies supplemental type {value} that is abstract.`,
            action: `Remove @type {value} or replace with a concrete subtype of {value}.`,
            primaryId: elementId,
            property: "@type",
            value: AggregateContext.getTermOrUri(supplementalTypeId.value)
          })
        );
      }

      switch ((supplementalTypeInfo as SupplementalTypeInfoImpl)?.extensionKind) {
        case ExtensionKind.LATENTTYPE:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[3],
              action: this._badTypeActionFormat[3],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
        case ExtensionKind.NAMEDLATENTTYPE:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[3],
              action: this._badTypeActionFormat[3],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
        case ExtensionKind.UNIT:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[3],
              action: this._badTypeActionFormat[3],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
        case ExtensionKind.UNITATTRIBUTE:
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:badType", {
              cause: this._badTypeCauseFormat[3],
              action: this._badTypeActionFormat[3],
              primaryId: parentId,
              property: propName,
              secondaryId: elementId,
              value: typestring
            })
          );
          break;
      }

      supplementalTypeIds.push(supplementalTypeId.value);
      return true;
    }

    return true;
  }

  parsePropertiesV3(
    model: Model,
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    object: { [index: string]: any },
    definedIn: string | undefined,
    allowIdReferenceSyntax: boolean
  ): void {
    this.languageVersion = 3;

    let valueSchemaPropertyMissing = true;
    for (const propKey in object) {
      let valueCount: number;
      const propValue = object[propKey];
      if (propValue === undefined || propValue === null) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:propertyValueNull", {
            cause: `{primaryId:p} property '{property}' has value null, which is not allowed in DTDL models.`,
            action: `Change the value of '{property}' to a value that is legal for this property.`,
            primaryId: this.id,
            property: propKey
          })
        );
        continue;
      }

      if (propKey[0] === "@") {
        continue;
      }

      switch (propKey) {
        case "comment":
        case "dtmi:dtdl:property:comment;3":
          this.comment = ValueParser.parseSingularStringToken(
            this.id,
            "comment",
            propValue,
            512,
            undefined,
            parsingErrors
          );
          continue;
        case "description":
        case "dtmi:dtdl:property:description;3":
          this.description = ValueParser.parseLangStringToken(
            this.id,
            "description",
            propValue,
            "en",
            512,
            undefined,
            parsingErrors
          );
          continue;
        case "displayName":
        case "dtmi:dtdl:property:displayName;3":
          this.displayName = ValueParser.parseLangStringToken(
            this.id,
            "displayName",
            propValue,
            "en",
            64,
            undefined,
            parsingErrors
          );
          continue;
        case "enumValues":
        case "dtmi:dtdl:property:enumValues;3":
          EnumValueInfoImpl.parseToken(
            model,
            objectPropertyInfoList,
            elementPropertyConstraints,
            this._enumValuesValueConstraints,
            aggregateContext,
            parsingErrors,
            propValue,
            this.id,
            definedIn ?? this.id,
            "enumValues",
            "name",
            undefined,
            false,
            false,
            allowIdReferenceSyntax,
            this._enumValuesAllowedVersionsV3
          );
          continue;
        case "valueSchema":
        case "dtmi:dtdl:property:valueSchema;3":
          valueSchemaPropertyMissing = false;
          valueCount = PrimitiveSchemaInfoImpl.parseToken(
            model,
            objectPropertyInfoList,
            elementPropertyConstraints,
            this._valueSchemaValueConstraints,
            aggregateContext,
            parsingErrors,
            propValue,
            this.id,
            definedIn ?? this.id,
            "valueSchema",
            undefined,
            undefined,
            true,
            true,
            allowIdReferenceSyntax,
            this._valueSchemaAllowedVersionsV3
          );
          if (valueCount < 1) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountBelowMin", {
                cause: `{primaryId:p} property 'valueSchema' has value valueCount values, but the required minimum count is 1`,
                action: `Add one or more 'valueSchema' to the object until the minimum count is satisfied.`,
                primaryId: this.id,
                property: "valueSchema"
              })
            );
          }

          if (valueCount > 1) {
            parsingErrors.push(
              createParsingError("dtmi:dtdl:parsingError:propertyCountAboveMax", {
                cause: `{primaryId:p} property 'valueSchema' has value valueCount values, but the allowed maximum count is 1`,
                action: `Remove one or more 'valueSchema' to the object until the maximum count is satisfied.`,
                primaryId: this.id,
                property: "valueSchema"
              })
            );
          }

          continue;
      }

      if (
        this.tryParseSupplementalProperty(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          aggregateContext,
          parsingErrors,
          propKey,
          propValue
        )
      ) {
        continue;
      }

      if (this.undefinedTypes !== undefined && this.undefinedTypes.length > 0) {
        this.undefinedProperties[propKey] = propValue;
      } else {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:noTypeThatAllows", {
            cause: `{primaryId:p} does not have a @type that allows property ${propKey}.`,
            action: `Remove property ${propKey} or correct if misspelled.`,
            primaryId: this.id,
            property: propKey
          })
        );
      }
    }

    if (valueSchemaPropertyMissing) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:missingRequiredProperty", {
          cause: "{primaryId:p} property valueSchema is required but missing.",
          action: "Add a valueSchema property to the object.",
          primaryId: this.id,
          property: "valueSchema"
        })
      );
    }

    for (const supplementalType of this.supplementalTypes) {
      (supplementalType as SupplementalTypeInfoImpl).checkForRequiredProperties(
        parsingErrors,
        this.id,
        this.supplementalProperties
      );
    }
  }

  static parseToken(
    model: Model,
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    valueConstraints: ValueConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    token: any,
    parentId: string | undefined,
    definedIn: string | undefined,
    propName: string | undefined,
    dtmiSeg: string | undefined,
    keyProp: string | undefined,
    idRequired: boolean,
    typeRequired: boolean,
    allowIdReferenceSyntax: boolean,
    allowedVersions: Set<number>
  ): number {
    let valueCount = 0;
    if (typeof token === "string") {
      if (parentId !== undefined) {
        this.parseIdString(
          objectPropertyInfoList,
          elementPropertyConstraints,
          valueConstraints,
          aggregateContext,
          parsingErrors,
          token.toString(),
          parentId,
          propName,
          keyProp,
          allowedVersions
        );
        valueCount++;
      }
    } else if (Array.isArray(token)) {
      for (const elementToken of token) {
        valueCount += this.parseToken(
          model,
          objectPropertyInfoList,
          elementPropertyConstraints,
          valueConstraints,
          aggregateContext,
          parsingErrors,
          elementToken,
          parentId,
          definedIn,
          propName,
          dtmiSeg,
          keyProp,
          idRequired,
          typeRequired,
          allowIdReferenceSyntax,
          allowedVersions
        );
      }
    } else if (typeof token === "object") {
      this.parseObject(
        model,
        objectPropertyInfoList,
        elementPropertyConstraints,
        valueConstraints,
        aggregateContext,
        parsingErrors,
        token,
        parentId,
        definedIn,
        propName,
        dtmiSeg,
        keyProp,
        idRequired,
        typeRequired,
        allowIdReferenceSyntax,
        allowedVersions
      );
      valueCount++;
    } else {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badDtmiOrTerm", {
          cause: `{primaryId:p} property '{property}' has value '{value}' that is not a DTMI or a DTDL term.`,
          action: `Replace the value of property '{property}, with a valid DTMI or a term defined by DTDL -- see https://github.com/Azure/opendigitaltwins-dtdl/tree/master/DTDL.`,
          primaryId: parentId,
          property: propName,
          value: token.toString()
        })
      );
    }

    return valueCount;
  }

  static parseIdString(
    objectPropertyInfoList: ParsedObjectPropertyInfo[],
    elementPropertyConstraints: ElementPropertyConstraint[],
    valueConstraints: ValueConstraint[],
    aggregateContext: AggregateContext,
    parsingErrors: ParsingError[],
    idString: string,
    parentId: string,
    propName: string | undefined,
    keyProp: string | undefined,
    allowedVersions: Set<number>
  ): void {
    const elementId = aggregateContext.createDtmi(idString);
    if (elementId !== undefined) {
      const objectPropertyInfo = {
        elementId: parentId,
        propertyName: propName ?? "",
        referencedElementId: elementId.value,
        keyProperty: keyProp,
        expectedKinds: this._concreteKinds[aggregateContext.dtdlVersion],
        allowedVersions: allowedVersions,
        badTypeCauseFormat: this._badTypeCauseFormat[aggregateContext.dtdlVersion],
        badTypeActionFormat: this._badTypeActionFormat[aggregateContext.dtdlVersion]
      };
      objectPropertyInfoList.push(objectPropertyInfo);
      if (valueConstraints !== null && elementPropertyConstraints !== null) {
        for (const vc of valueConstraints) {
          const elementPropertyConstraint = {
            parentId: parentId,
            propertyName: propName ?? "",
            elementId: elementId.value,
            valueConstraint: vc
          };
          elementPropertyConstraints.push(elementPropertyConstraint);
        }
      }
    } else {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:badDtmiOrTerm", {
          cause: `{primaryId:p} property '{property}' has value '{value}' that is not a DTMI or a DTDL term.`,
          action: `Replace the value of property '{property}, with a valid DTMI or a term defined by DTDL -- see https://github.com/Azure/opendigitaltwins-dtdl/tree/master/DTDL.`,
          primaryId: parentId,
          property: propName,
          value: idString
        })
      );
    }
  }

  validateInstance(instanceText: string): boolean {
    const instanceElt = JSON.parse(instanceText);
    return this.validateInstanceElement(instanceElt);
  }

  validateInstanceElement(instanceElt: any): boolean {
    return this.validateInstanceInternal(instanceElt, undefined);
  }

  validateInstanceInternal(instanceElt: any, instanceName: string | undefined): boolean {
    switch (this.dtdlVersion) {
      case 2: {
        return this.validateInstanceV2(instanceElt, instanceName);
      }

      case 3: {
        return this.validateInstanceV3(instanceElt, instanceName);
      }
    }

    return false;
  }

  validateInstanceV2(instanceElt: any, instanceName: string | undefined): boolean {
    if (
      !(this.valueSchema as PrimitiveSchemaInfoImpl)?.validateInstanceInternal(
        instanceElt,
        instanceName
      )
    ) {
      return false;
    }

    if (
      !this.enumValues?.some((val) =>
        (val as EnumValueInfoImpl).validateInstanceInternal(instanceElt, instanceName)
      )
    ) {
      return false;
    }

    return true;
  }

  validateInstanceV3(instanceElt: any, instanceName: string | undefined): boolean {
    if (
      !(this.valueSchema as PrimitiveSchemaInfoImpl)?.validateInstanceInternal(
        instanceElt,
        instanceName
      )
    ) {
      return false;
    }

    if (
      !this.enumValues?.some((val) =>
        (val as EnumValueInfoImpl).validateInstanceInternal(instanceElt, instanceName)
      )
    ) {
      return false;
    }

    return true;
  }

  /**
   * Set partition information.
   **/
  setPartitionInfo(partitionJsonText: string): void {
    throw new Error(`attempt to set partition info on non-partition type EnumInfoInfo`);
  }

  applyTransformations(model: Model, parsingErrors: ParsingError[]): void {
    if (this.dtdlVersion === 2) {
      this.applyTransformationsV2(model, parsingErrors);
    }

    if (this.dtdlVersion === 3) {
      this.applyTransformationsV3(model, parsingErrors);
    }
  }

  applyTransformationsV2(model: Model, parsingErrors: ParsingError[]) {}

  applyTransformationsV3(model: Model, parsingErrors: ParsingError[]) {}

  checkRestrictions(parsingErrors: ParsingError[]): void {
    if (this.dtdlVersion === 2) {
      this.checkRestrictionsV2(parsingErrors);
    }

    if (this.dtdlVersion === 3) {
      this.checkRestrictionsV3(parsingErrors);
    }
  }

  checkRestrictionsV2(parsingErrors: ParsingError[]) {
    const enumValuesNameSet = new Set<any>();
    if (this.enumValues !== undefined) {
      for (const item of this.enumValues || []) {
        if (enumValuesNameSet.has(item.name)) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonUniquePropertyValue", {
              cause:
                "{{primaryId:n}} property 'enumValues' contains more than one element whose property 'name' has value '{item.name}'.",
              action:
                "Change the value of property  'name' to a string value that is unique across all values of 'enumValues'.",
              primaryId: this.id,
              property: "enumValues",
              value: "name"
            })
          );
        }

        enumValuesNameSet.add(item.name);
      }
    }

    const enumValuesEnumValueSet = new Set<any>();
    if (this.enumValues !== undefined) {
      for (const item of this.enumValues || []) {
        if (enumValuesEnumValueSet.has(item.enumValue)) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonUniquePropertyValue", {
              cause:
                "{{primaryId:n}} property 'enumValues' contains more than one element whose property 'enumValue' has value '{item.enumValue}'.",
              action:
                "Change the value of property  'enumValue' to a string value that is unique across all values of 'enumValues'.",
              primaryId: this.id,
              property: "enumValues",
              value: "enumValue"
            })
          );
        }

        enumValuesEnumValueSet.add(item.enumValue);
      }
    }

    if (this.valueSchema !== undefined) {
      if (
        this.valueSchema.id !== "dtmi:dtdl:instance:Schema:integer;2" &&
        this.valueSchema.id !== "dtmi:dtdl:instance:Schema:string;2"
      ) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:incorrectPropertyValue", {
            cause:
              "{{primaryId:n}} property 'valueSchema' has value {value} , but the value must be 'integer or string'.",
            action: "Change the value of property  'valueSchema' to 'integer or string'.",
            primaryId: this.id,
            property: "valueSchema",
            value: AggregateContext.getTermOrUri(this.valueSchema.id)
          })
        );
      }
    }

    if (this._valueSchemaInstanceProperties !== undefined) {
      for (const instanceProp of this._valueSchemaInstanceProperties) {
        if (
          !(this.valueSchema as PrimitiveSchemaInfoImpl)?.validateInstanceElement(
            this.supplementalProperties[instanceProp]
          )
        ) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonConformantPropertyValue", {
              cause:
                "{{primaryId:n}} property '{{property}}' does not conform to the type specified by property 'valueSchema' ",
              action:
                "Change the value of property '{{property}}' so that it conforms to property  'valueSchema'",
              primaryId: this.id,
              property: instanceProp
            })
          );
        }
      }
    }

    const tooDeepElementSchemaOrSchemaElementId: Reference<InDTMI> = { ref: undefined };
    if (
      !this.checkDepthOfElementSchemaOrSchema(
        0,
        5,
        tooDeepElementSchemaOrSchemaElementId,
        parsingErrors
      ) &&
      tooDeepElementSchemaOrSchemaElementId !== undefined
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:excessiveDepth", {
          cause: `{primaryId:n} is at the root of a hierarchy that exceeds 5 levels -- {secondaryId:n} is at level 6.`,
          action: `Change the value of one or more 'elementSchema' or 'schema' properties in the hierarchy to reduce the nesting depth.`,
          primaryId: this.id,
          secondaryId: tooDeepElementSchemaOrSchemaElementId.ref?.value
        })
      );
    }

    const myUri: string = this.valueSchema?.id || "";
    if (myUri === "dtmi:dtdl:instance:Schema:integer;2") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "number", parsingErrors);
    }

    if (myUri === "dtmi:dtdl:instance:Schema:string;2") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "string", parsingErrors);
    }

    if (myUri === "dtmi:dtdl:instance:Schema:boolean;2") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "boolean", parsingErrors);
    }
  }

  checkRestrictionsV3(parsingErrors: ParsingError[]) {
    const enumValuesNameSet = new Set<any>();
    if (this.enumValues !== undefined) {
      for (const item of this.enumValues || []) {
        if (enumValuesNameSet.has(item.name)) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonUniquePropertyValue", {
              cause:
                "{{primaryId:n}} property 'enumValues' contains more than one element whose property 'name' has value '{item.name}'.",
              action:
                "Change the value of property  'name' to a string value that is unique across all values of 'enumValues'.",
              primaryId: this.id,
              property: "enumValues",
              value: "name"
            })
          );
        }

        enumValuesNameSet.add(item.name);
      }
    }

    const enumValuesEnumValueSet = new Set<any>();
    if (this.enumValues !== undefined) {
      for (const item of this.enumValues || []) {
        if (enumValuesEnumValueSet.has(item.enumValue)) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonUniquePropertyValue", {
              cause:
                "{{primaryId:n}} property 'enumValues' contains more than one element whose property 'enumValue' has value '{item.enumValue}'.",
              action:
                "Change the value of property  'enumValue' to a string value that is unique across all values of 'enumValues'.",
              primaryId: this.id,
              property: "enumValues",
              value: "enumValue"
            })
          );
        }

        enumValuesEnumValueSet.add(item.enumValue);
      }
    }

    if (this.valueSchema !== undefined) {
      if (
        this.valueSchema.id !== "dtmi:dtdl:instance:Schema:integer;3" &&
        this.valueSchema.id !== "dtmi:dtdl:instance:Schema:string;3"
      ) {
        parsingErrors.push(
          createParsingError("dtmi:dtdl:parsingError:incorrectPropertyValue", {
            cause:
              "{{primaryId:n}} property 'valueSchema' has value {value} , but the value must be 'integer or string'.",
            action: "Change the value of property  'valueSchema' to 'integer or string'.",
            primaryId: this.id,
            property: "valueSchema",
            value: AggregateContext.getTermOrUri(this.valueSchema.id)
          })
        );
      }
    }

    if (this._valueSchemaInstanceProperties !== undefined) {
      for (const instanceProp of this._valueSchemaInstanceProperties) {
        if (
          !(this.valueSchema as PrimitiveSchemaInfoImpl)?.validateInstanceElement(
            this.supplementalProperties[instanceProp]
          )
        ) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:nonConformantPropertyValue", {
              cause:
                "{{primaryId:n}} property '{{property}}' does not conform to the type specified by property 'valueSchema' ",
              action:
                "Change the value of property '{{property}}' so that it conforms to property  'valueSchema'",
              primaryId: this.id,
              property: instanceProp
            })
          );
        }
      }
    }

    const tooDeepElementSchemaOrSchemaElementId: Reference<InDTMI> = { ref: undefined };
    if (
      !this.checkDepthOfElementSchemaOrSchema(
        0,
        5,
        tooDeepElementSchemaOrSchemaElementId,
        parsingErrors
      ) &&
      tooDeepElementSchemaOrSchemaElementId !== undefined
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:excessiveDepth", {
          cause: `{primaryId:n} is at the root of a hierarchy that exceeds 5 levels -- {secondaryId:n} is at level 6.`,
          action: `Change the value of one or more 'elementSchema' or 'schema' properties in the hierarchy to reduce the nesting depth.`,
          primaryId: this.id,
          secondaryId: tooDeepElementSchemaOrSchemaElementId.ref?.value
        })
      );
    }

    const myUri: string = this.valueSchema?.id || "";
    if (myUri === "dtmi:dtdl:instance:Schema:integer;3") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "number", parsingErrors);
    }

    if (myUri === "dtmi:dtdl:instance:Schema:string;3") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "string", parsingErrors);
    }

    if (myUri === "dtmi:dtdl:instance:Schema:boolean;3") {
      this.checkDescendantEnumValueDataType(new InDTMI(this.id), "boolean", parsingErrors);
    }
  }

  trySetObjectProperty(propertyName: string, value: any, key: string | undefined): boolean {
    switch (propertyName) {
      case "enumValues":
      case "dtmi:dtdl:property:enumValues;2":
      case "dtmi:dtdl:property:enumValues;3":
        if (this.enumValues !== undefined) {
          this.enumValues.push(value as EnumValueInfoImpl);
          return true;
        }

        break;
      case "valueSchema":
      case "dtmi:dtdl:property:valueSchema;2":
      case "dtmi:dtdl:property:valueSchema;3":
        this.valueSchema = value as PrimitiveSchemaInfoImpl;
        return true;
      default:
        break;
    }
    for (const supplementalType of this.supplementalTypes) {
      if (
        (supplementalType as SupplementalTypeInfoImpl).trySetObjectProperty(
          propertyName,
          value,
          key,
          this.supplementalProperties
        )
      ) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check the nesting depth of all descendant elementSchema or schema properties.
   **/
  checkDepthOfElementSchemaOrSchema(
    depth: number,
    depthLimit: number,
    tooDeepElementId: Reference<InDTMI>,
    parsingErrors: ParsingError[]
  ): boolean {
    for (const item of this.enumValues || []) {
      if (
        !(item as EnumValueInfoImpl).checkDepthOfElementSchemaOrSchema(
          depth,
          depthLimit,
          tooDeepElementId,
          parsingErrors
        )
      ) {
        if (tooDeepElementId.ref?.value === this.id) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:recursiveStructure", {
              cause: `{primaryId:n} is at the root of a hierarchy that includes itself.`,
              action: `Change the value of one or more 'elementSchema' or 'schema' properties in the hierarchy to remeve the recursion.`,
              primaryId: this.id
            })
          );
          tooDeepElementId.ref = undefined;
        }

        return false;
      }
    }

    if (this.valueSchema !== undefined) {
      if (
        !(this.valueSchema as EntityInfoImpl).checkDepthOfElementSchemaOrSchema(
          depth,
          depthLimit,
          tooDeepElementId,
          parsingErrors
        )
      ) {
        if (tooDeepElementId.ref?.value === this.id) {
          parsingErrors.push(
            createParsingError("dtmi:dtdl:parsingError:recursiveStructure", {
              cause: `{primaryId:n} is at the root of a hierarchy that includes itself.`,
              action: `Change the value of one or more 'elementSchema' or 'schema' properties in the hierarchy to remeve the recursion.`,
              primaryId: this.id
            })
          );
          tooDeepElementId.ref = undefined;
        }

        return false;
      }
    }

    tooDeepElementId.ref = undefined;
    return true;
  }

  tryGetDescendantSchemaOrContentsComponentNarrow(elementId: Reference<InDTMI>): boolean {
    if (this._checkedForDescendantSchemaOrContentsComponentNarrow) {
      elementId.ref = this._idOfDescendantSchemaOrContentsComponentNarrow;
      return this._idOfDescendantSchemaOrContentsComponentNarrow !== undefined;
    }

    this._checkedForDescendantSchemaOrContentsComponentNarrow = true;

    elementId.ref = undefined;
    return false;
  }

  checkDescendantEnumValueDataType(
    ancestorId: InDTMI,
    datatype: string,
    parsingErrors: ParsingError[]
  ): void {
    if (this._checkedDescendantEnumValueDatatype !== datatype) {
      this._checkedDescendantEnumValueDatatype = datatype;
    }

    for (const item of this.enumValues || []) {
      (item as EnumValueInfoImpl).checkDescendantEnumValueDataType(
        ancestorId,
        datatype,
        parsingErrors
      );
    }

    if (this.valueSchema !== undefined) {
      (this.valueSchema as EntityInfoImpl).checkDescendantEnumValueDataType(
        ancestorId,
        datatype,
        parsingErrors
      );
    }
  }

  getTransitiveExtendsNarrow(
    depth: number,
    depthLimit: number,
    tooDeepElementId: Reference<InDTMI>,
    parsingErrors: ParsingError[]
  ): Set<string> | undefined {
    const closure: Set<string> = new Set<string>();

    tooDeepElementId.ref = undefined;
    return closure;
  }

  tryGetDescendantSchemaArray(elementId: Reference<InDTMI>): boolean {
    if (this._checkedForDescendantSchemaArray) {
      elementId.ref = this._idOfDescendantSchemaArray;
      return this._idOfDescendantSchemaArray !== undefined;
    }

    this._checkedForDescendantSchemaArray = true;

    for (const item of this.enumValues || []) {
      if ((item as EnumValueInfoImpl).tryGetDescendantSchemaArray(elementId)) {
        this._idOfDescendantSchemaArray = elementId.ref;
        return true;
      }
    }

    if (this.valueSchema !== undefined) {
      if ((this.valueSchema as EntityInfoImpl).tryGetDescendantSchemaArray(elementId)) {
        this._idOfDescendantSchemaArray = elementId.ref;
        return true;
      }
    }

    elementId.ref = undefined;
    return false;
  }

  getCountOfExtendsNarrow(parsingErrors: ParsingError[]): number {
    if (this._countOfExtendsNarrowStatus === TraversalStatus.Complete) {
      return this._countOfExtendsNarrowValue;
    }

    if (this._countOfExtendsNarrowStatus === TraversalStatus.InProgress) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:recursiveStructure", {
          cause: `{primaryId:n} is at the root of a hierarchy that includes itself.`,
          action: `Change the value of one or more 'extends' properties in the hierarchy to remeve the recursion.`,
          primaryId: this.id
        })
      );
      return 0;
    }

    this._countOfExtendsNarrowStatus = TraversalStatus.InProgress;
    this._countOfExtendsNarrowStatus = TraversalStatus.Complete;
    return this._countOfExtendsNarrowValue;
  }

  getCountOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrow(
    parsingErrors: ParsingError[]
  ): number {
    if (
      this
        ._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus ===
      TraversalStatus.Complete
    ) {
      return this
        ._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowValue;
    }

    if (
      this
        ._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus ===
      TraversalStatus.InProgress
    ) {
      parsingErrors.push(
        createParsingError("dtmi:dtdl:parsingError:recursiveStructure", {
          cause: `{primaryId:n} is at the root of a hierarchy that includes itself.`,
          action: `Change the value of one or more 'contents' or 'fields' or 'enumValues' or 'request' or 'response' or 'properties' or 'schema' or 'elementSchema' or 'mapValue' properties in the hierarchy to remeve the recursion.`,
          primaryId: this.id
        })
      );
      return 0;
    }

    this._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus =
      TraversalStatus.InProgress;
    for (const item of this.enumValues || []) {
      this._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowValue +=
        (item as EnumValueInfoImpl).getCountOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrow(
          parsingErrors
        ) + 1;
    }

    this._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowStatus =
      TraversalStatus.Complete;
    return this
      ._countOfContentsOrFieldsOrEnumValuesOrRequestOrResponseOrPropertiesOrSchemaOrElementSchemaOrMapValueNarrowValue;
  }
}

EnumInfoImpl.initialize();
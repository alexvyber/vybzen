/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const documents = {
  "\n  query Home {\n    home {\n      data {\n        attributes {\n          title\n          subtitle\n          techs {\n            name\n          }\n        }\n      }\n    }\n  }\n":
    types.HomeDocument,
};

export function graphql(
  source: "\n  query Home {\n    home {\n      data {\n        attributes {\n          title\n          subtitle\n          techs {\n            name\n          }\n        }\n      }\n    }\n  }\n"
): typeof documents["\n  query Home {\n    home {\n      data {\n        attributes {\n          title\n          subtitle\n          techs {\n            name\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

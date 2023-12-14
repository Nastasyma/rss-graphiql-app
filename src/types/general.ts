export interface IWelcomeProps {
  name: string;
  description: string;
  uniqueKey: number;
}

export interface IFieldType {
  kind: string;
  ofType?: IFieldType;
  name: string;
}

export interface ISchemaType {
  name: string;
  fields: IField[];
}

export interface IField {
  name: string;
  type: IFieldType;
}
export interface ISchemaObject extends ISchemaType {
  mutations?: ISchemaType;
  subscriptions?: ISchemaType;
  queries?: ISchemaType;
}

export interface IRequest {
  url: string;
  query: string;
  variables?: string;
  headers?: string;
}

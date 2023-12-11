export interface IWelcomeProps {
  name: string;
  description: string;
  uniqueKey: number;
}

export interface Field {
  name: string;
  type: {
    kind: string;
    ofType: {
      name: string;
    };
    name: string;
  };
}

export interface SchemaObject {
  fields: Field[];
}

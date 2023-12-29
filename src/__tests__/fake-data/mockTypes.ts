import { ISchemaType, IType } from "@/types/general";

const mockTypes: ISchemaType[] = [
  {
    kind: 'OBJECT',
    name: 'Query',
    fields: [
      { name: 'field1', type: { kind: 'SCALAR', name: 'String' } as IType },
      { name: 'field2', type: { kind: 'SCALAR', name: 'Int' } as IType },
    ],
    args: [],
    inputFields: [],
    enumValues: [],
    description: null,
  },
];

export default mockTypes;
export class CreateInventoryBatchDto {
  constructor(
    reference: string,
    name: string,
    description: string,
    quantity: number, // for automatic FIFO
    inventoryVariantId: string,
    expirationISO: string,
    inceptionISO: string,
  ) {
    this.reference = reference;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.inventoryVariantId = inventoryVariantId;
    this.expirationISO = expirationISO;
    this.inceptionISO = inceptionISO;
  }

  // text input
  reference: string;
  // text input
  name: string;
  // text input
  description: string;
  // number input
  quantity: number; // for automatic FIFO
  // dropdown or search with one hard-coded selectable option: "name: Variant 1, id: 1"
  inventoryVariantId: string;
  // date picker, use any react library you are comfortable with
  expirationISO: string;
  inceptionISO: string;
}

export class UpdateInventoryBatchDto {
  constructor(
    id: string,
    reference: string,
    name: string,
    description: string,
    quantity: number, // for automatic FIFO
    inventoryVariantId: string,
    inceptionISO: string,
    expirationISO: string,
  ) {
    this.id = id;
    this.reference = reference;
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.inventoryVariantId = inventoryVariantId;
    this.inceptionISO = inceptionISO;
    this.expirationISO = expirationISO;
  }

  id: string;
  reference: string;
  name: string;
  description: string;
  quantity: number; // for automatic FIFO
  inventoryVariantId: string;
  inceptionISO: string;
  expirationISO: string;
}

export class DeleteInventoryBatchDto {
  constructor(id: string) {
    this.id = id;
  }
  id: string;
}

export type InventoryBatchDto = {
  id: string;
  reference: string;
  name: string;
  description: string;
  quantity: number;
  inventoryVariantId: string;
  expirationISO: string;
  createdAtISO: string;
  updatedAtISO: string;
  deletedAtISO: string;
  inceptionISO: string;
};

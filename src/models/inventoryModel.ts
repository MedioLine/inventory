import mongoose, { Schema, Document } from 'mongoose';

interface InventoryItem extends Document {
  name: string;
  quantity: number;
  price: number;
  category: string;
}

const InventorySchema: Schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const Inventory = mongoose.model<InventoryItem>('Inventory', InventorySchema);
export default Inventory;
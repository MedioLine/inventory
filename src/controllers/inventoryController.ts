// src/controllers/inventoryController.ts
import { Request, Response } from 'express';
import Inventory from '../models/inventoryModel';

// Get all inventory items
export const getInventory = async (req: Request, res: Response) => {
  try {
    const items = await Inventory.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching inventory items', error });
  }
};

// Add a new inventory item
export const addInventoryItem = async (req: Request, res: Response) => {
  try {
    const newItem = new Inventory(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: 'Error adding inventory item', error });
  }
};

// Update an inventory item
export const updateInventoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedItem = await Inventory.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: 'Error updating inventory item', error });
  }
};

// Delete an inventory item
export const deleteInventoryItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedItem = await Inventory.findByIdAndDelete(id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(400).

"use client";

import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import Image from "next/image";
const slugify = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const initialProducts = [
  { title: "Fruits", image: "/assets/fruits.jpg", category: "Fruits" },
  { title: "Vegetables", image: "/assets/vegetables.jpg", category: "Vegetables" },
  { title: "Grains", image: "/assets/grains.jpg", category: "Grains" },
];

export default function AdminProductPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [open, setOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ title: "", image: "", category: "" });

  const handleOpen = (index = null) => {
    setEditingIndex(index);
    setForm(index !== null ? products[index] : { title: "", image: "", category: "" });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingIndex(null);
  };

  const handleSave = () => {
    if (!form.title || !form.image || !form.category) return;
    const updated = [...products];
    if (editingIndex !== null) {
      updated[editingIndex] = form;
    } else {
      updated.push(form);
    }
    setProducts(updated);
    handleClose();
  };

  const handleDelete = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">🌾 Admin Panel</h2>
        <p className="text-sm text-gray-500">Manage your product categories here.</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-700">Product Categories</h1>
          <Button
            variant="contained"
            startIcon={<Add />}
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => handleOpen()}
          >
            Add Product
          </Button>
        </div>

        {/* Product Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600 text-left">
              <tr>
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Page</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i} className="border-b">
                  <td className="py-2 px-4">
                    <div className="w-12 h-12 relative rounded overflow-hidden">
                      <Image src={product.image} alt={product.title} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="py-2 px-4">{product.title}</td>
                  <td className="py-2 px-4">{product.category}</td>
                  <td className="py-2 px-4 text-blue-600">
                    <a href={`/products/${slugify(product.title, { lower: true })}`} target="_blank" className="hover:underline">
                      View
                    </a>
                  </td>
                  <td className="py-2 px-4 space-x-2">
                    <IconButton onClick={() => handleOpen(i)}><Edit className="text-blue-600" /></IconButton>
                    <IconButton onClick={() => handleDelete(i)}><Delete className="text-red-600" /></IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Modal */}
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>{editingIndex !== null ? "Edit Product" : "Add Product"}</DialogTitle>
          <DialogContent className="space-y-4">
            <TextField
              label="Title"
              fullWidth
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              label="Image URL"
              fullWidth
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
            />
            <TextField
              label="Category"
              fullWidth
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave} variant="contained" className="bg-teal-600 text-white">
              {editingIndex !== null ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </div>
  );
}

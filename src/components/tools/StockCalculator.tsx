import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export default function StockCalculator() {
  const [items, setItems] = useState([{ name: "", quantity: 0 }]);
  const [total, setTotal] = useState(0);

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0 }]);
  };

  const updateItem = (index: number, field: "name" | "quantity", value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
    calculateTotal(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    calculateTotal(newItems);
  };

  const calculateTotal = (itemsList: typeof items) => {
    const sum = itemsList.reduce((acc, item) => acc + Number(item.quantity || 0), 0);
    setTotal(sum);
  };

  const clearAll = () => {
    setItems([{ name: "", quantity: 0 }]);
    setTotal(0);
  };

  return (
    <Card className="shadow-elegant hover:shadow-glow transition-smooth border-2">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Package className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">Calculadora de Estoque</CardTitle>
            <CardDescription>Calcule a quantidade total de produtos em estoque</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-end">
            <div className="flex-1">
              <Label htmlFor={`item-name-${index}`}>Produto</Label>
              <Input
                id={`item-name-${index}`}
                placeholder="Nome do produto"
                value={item.name}
                onChange={(e) => updateItem(index, "name", e.target.value)}
              />
            </div>
            <div className="w-24">
              <Label htmlFor={`item-qty-${index}`}>Qtd</Label>
              <Input
                id={`item-qty-${index}`}
                type="number"
                min="0"
                placeholder="0"
                value={item.quantity || ""}
                onChange={(e) => updateItem(index, "quantity", Number(e.target.value))}
              />
            </div>
            {items.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => removeItem(index)}
              >
                ✕
              </Button>
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <Button type="button" onClick={addItem} variant="outline" className="flex-1">
            + Adicionar Item
          </Button>
          <Button type="button" onClick={clearAll} variant="outline">
            Limpar
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total de Itens:</span>
            <span className="text-2xl font-bold text-primary">{total}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

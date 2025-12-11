import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ClipboardList } from "lucide-react";

interface Order {
  id: number;
  customer: string;
  items: string;
  total: number;
  completed: boolean;
}

export default function OrderControl() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState("");
  const [total, setTotal] = useState("");

  const addOrder = () => {
    if (customer.trim() && items.trim() && total) {
      const newOrder: Order = {
        id: Date.now(),
        customer: customer.trim(),
        items: items.trim(),
        total: Number.parseFloat(total),
        completed: false,
      };
      setOrders([...orders, newOrder]);
      setCustomer("");
      setItems("");
      setTotal("");
    }
  };

  const toggleOrder = (id: number) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, completed: !order.completed } : order
    ));
  };

  const removeOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const clearCompleted = () => {
    setOrders(orders.filter(order => !order.completed));
  };

  const totalRevenue = orders
    .filter(order => order.completed)
    .reduce((sum, order) => sum + order.total, 0);

  return (
    <Card className="shadow-elegant hover:shadow-glow transition-smooth border-2">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ClipboardList className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">Controle de Pedidos</CardTitle>
            <CardDescription>Registre e acompanhe os pedidos do dia</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="customer">Cliente</Label>
            <Input
              id="customer"
              placeholder="Nome do cliente"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="items">Itens</Label>
            <Input
              id="items"
              placeholder="Ex: 2 Cervejas, 1 Refrigerante"
              value={items}
              onChange={(e) => setItems(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="total">Total (R$)</Label>
            <Input
              id="total"
              type="number"
              min="0"
              step="0.01"
              placeholder="0.00"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
            />
          </div>

          <Button type="button" onClick={addOrder} className="w-full">
            Adicionar Pedido
          </Button>
        </div>

        {orders.length > 0 && (
          <>
            <div className="pt-4 border-t border-border space-y-2 max-h-64 overflow-y-auto">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className={`flex items-start gap-2 p-3 rounded-lg border border-border ${
                    order.completed ? "bg-muted" : "bg-card"
                  }`}
                >
                  <Checkbox
                    checked={order.completed}
                    onCheckedChange={() => toggleOrder(order.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold ${order.completed ? "line-through text-muted-foreground" : ""}`}>
                      {order.customer}
                    </p>
                    <p className={`text-sm ${order.completed ? "line-through text-muted-foreground" : "text-muted-foreground"}`}>
                      {order.items}
                    </p>
                    <p className={`text-sm font-semibold ${order.completed ? "line-through text-muted-foreground" : "text-primary"}`}>
                      R$ {order.total.toFixed(2)}
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeOrder(order.id)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button type="button" onClick={clearCompleted} variant="outline" className="flex-1">
                Limpar Concluídos
              </Button>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">
                  {orders.filter(o => o.completed).length} de {orders.length} concluídos
                </span>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total Faturado</p>
                  <p className="text-xl font-bold text-primary">R$ {totalRevenue.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </>
        )}

        {orders.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Nenhum pedido registrado ainda
          </div>
        )}
      </CardContent>
    </Card>
  );
}

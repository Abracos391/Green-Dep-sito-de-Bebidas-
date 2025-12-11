import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Wallet } from "lucide-react";

export default function ChangeCalculator() {
  const [saleValue, setSaleValue] = useState<string>("");
  const [paidValue, setPaidValue] = useState<string>("");
  const [change, setChange] = useState<number>(0);

  const calculateChange = (sale: string, paid: string) => {
    const saleAmount = Number.parseFloat(sale) || 0;
    const paidAmount = Number.parseFloat(paid) || 0;

    if (paidAmount >= saleAmount && saleAmount > 0) {
      setChange(paidAmount - saleAmount);
    } else {
      setChange(0);
    }
  };

  const handleSaleChange = (value: string) => {
    setSaleValue(value);
    calculateChange(value, paidValue);
  };

  const handlePaidChange = (value: string) => {
    setPaidValue(value);
    calculateChange(saleValue, value);
  };

  const getChangeBreakdown = (amount: number) => {
    const bills = [200, 100, 50, 20, 10, 5, 2];
    const coins = [1, 0.5, 0.25, 0.1, 0.05];
    const breakdown: { value: number; count: number; type: string }[] = [];
    let remaining = amount;

    for (const bill of bills) {
      if (remaining >= bill) {
        const count = Math.floor(remaining / bill);
        breakdown.push({ value: bill, count, type: "nota" });
        remaining = Number((remaining % bill).toFixed(2));
      }
    }

    for (const coin of coins) {
      if (remaining >= coin) {
        const count = Math.floor(remaining / coin);
        breakdown.push({ value: coin, count, type: "moeda" });
        remaining = Number((remaining % coin).toFixed(2));
      }
    }

    return breakdown;
  };

  const breakdown = change > 0 ? getChangeBreakdown(change) : [];

  return (
    <Card className="shadow-elegant hover:shadow-glow transition-smooth border-2">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Wallet className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">Calculadora de Troco</CardTitle>
            <CardDescription>Calcule o troco e veja a composição em notas e moedas</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="sale-value">Valor da Venda (R$)</Label>
          <Input
            id="sale-value"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={saleValue}
            onChange={(e) => handleSaleChange(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="paid-value">Valor Pago (R$)</Label>
          <Input
            id="paid-value"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={paidValue}
            onChange={(e) => handlePaidChange(e.target.value)}
          />
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Troco:</span>
            <span className="text-2xl font-bold text-primary">
              R$ {change.toFixed(2)}
            </span>
          </div>

          {breakdown.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground">Composição do Troco:</p>
              <div className="space-y-1">
                {breakdown.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center text-sm p-2 rounded bg-muted"
                  >
                    <span>
                      {item.count}x {item.type} de R$ {item.value.toFixed(2)}
                    </span>
                    <span className="font-semibold">
                      R$ {(item.count * item.value).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

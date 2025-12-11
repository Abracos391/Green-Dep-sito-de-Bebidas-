import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export default function PriceCalculator() {
  const [costPrice, setCostPrice] = useState<string>("");
  const [profitMargin, setProfitMargin] = useState<string>("");
  const [salePrice, setSalePrice] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  const calculatePrice = (cost: string, margin: string) => {
    const costValue = Number.parseFloat(cost) || 0;
    const marginValue = Number.parseFloat(margin) || 0;

    if (costValue > 0 && marginValue >= 0) {
      const profitValue = (costValue * marginValue) / 100;
      const salePriceValue = costValue + profitValue;
      setSalePrice(salePriceValue);
      setProfit(profitValue);
    } else {
      setSalePrice(0);
      setProfit(0);
    }
  };

  const handleCostChange = (value: string) => {
    setCostPrice(value);
    calculatePrice(value, profitMargin);
  };

  const handleMarginChange = (value: string) => {
    setProfitMargin(value);
    calculatePrice(costPrice, value);
  };

  return (
    <Card className="shadow-elegant hover:shadow-glow transition-smooth border-2">
      <CardHeader className="bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">Calculadora de Preços</CardTitle>
            <CardDescription>Calcule o preço de venda com margem de lucro</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cost-price">Preço de Custo (R$)</Label>
          <Input
            id="cost-price"
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
            value={costPrice}
            onChange={(e) => handleCostChange(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="profit-margin">Margem de Lucro (%)</Label>
          <Input
            id="profit-margin"
            type="number"
            min="0"
            step="1"
            placeholder="0"
            value={profitMargin}
            onChange={(e) => handleMarginChange(e.target.value)}
          />
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Lucro:</span>
            <span className="text-lg font-semibold text-primary">
              R$ {profit.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Preço de Venda:</span>
            <span className="text-2xl font-bold text-primary">
              R$ {salePrice.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

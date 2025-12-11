import { Zap, Package, TrendingUp, Wallet } from "lucide-react";

// --- Dados de Avaliações ---
export const reviewsData = [
  {
    name: "Helton Rodrigues",
    rating: 5,
    comment: "Bebida gelada e com preço justo, recomendo.",
  },
  {
    name: "Hytamara Rodrigues",
    rating: 5,
    comment: "Ótimo preço na região do Dirceu! Recomendo muito 😃",
  },
  {
    name: "Diego Cavalcante",
    rating: 5,
    comment: "Excelente atendimento e produtos de qualidade!",
  },
];

// --- Dados de Features ---
export const featuresData = [
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Seu pedido chega gelado em minutos"
  },
  {
    icon: Package,
    title: "Variedade",
    description: "Todas as marcas que você ama"
  },
  {
    icon: TrendingUp,
    title: "Melhor Preço",
    description: "Preços justos e promoções"
  },
  {
    icon: Wallet,
    title: "Pagamento Fácil",
    description: "Dinheiro, PIX ou cartão"
  }
];

// --- Constantes de Contato e Endereço ---
export const contactInfo = {
  phoneNumber: "5586994667178",
  address: "Rua Mogi das Cruzes, R. Chanceler Edson Queiroz, 2131, Teresina - PI, 64077-750",
};

export const whatsappUrl = `https://wa.me/${contactInfo.phoneNumber}?text=${encodeURIComponent("Olá! Quero fazer um pedido!")}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;

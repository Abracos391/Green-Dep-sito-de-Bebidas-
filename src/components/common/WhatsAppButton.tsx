import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "5586994667178";
  const message = "Olá! Gostaria de mais informações sobre o Empório Green.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-glow hover:scale-110 transition-smooth"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

import { Button } from "@/components/ui/button";
import { reviewsData, featuresData, whatsappUrl, mapsUrl, contactInfo } from "@/data/homeData";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Star, Phone, Navigation } from "lucide-react";
import StockCalculator from "@/components/tools/StockCalculator";
import PriceCalculator from "@/components/tools/PriceCalculator";
import OrderControl from "@/components/tools/OrderControl";
import ChangeCalculator from "@/components/tools/ChangeCalculator";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import BeerCarousel from "@/components/common/BeerCarousel";
import DeliveryAnimation from "@/components/common/DeliveryAnimation";

export default function Home() {


  return (
    <div className="min-h-screen overflow-x-hidden">
      <WhatsAppButton />
      <DeliveryAnimation />

      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-primary-foreground py-20 xl:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-9xl animate-float">🍺</div>
          <div className="absolute top-40 right-20 text-7xl animate-float delay-100">🍻</div>
          <div className="absolute bottom-20 left-1/4 text-8xl animate-float delay-200">🥤</div>
          <div className="absolute bottom-40 right-1/3 text-6xl animate-float delay-300">🧊</div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
            <div className="inline-block">
              <div className="text-6xl xl:text-8xl mb-4 animate-bounce">🍺</div>
            </div>
            
            <h1 className="text-5xl xl:text-7xl font-bold leading-tight">
              Empório Green
            </h1>
            
            <p className="text-2xl xl:text-3xl font-semibold opacity-95">
              Bebidas Geladas com Entrega Rápida! 🏍️💨
            </p>
            
            <div className="flex items-center justify-center gap-3 text-xl bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 inline-flex">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
                ))}
              </div>
              <span className="font-bold">5,0</span>
              <span className="opacity-90">(3 avaliações)</span>
            </div>

            <div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="w-full xl:w-auto text-lg px-8 py-6 shadow-glow hover:scale-105 transition-smooth"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <Phone className="w-6 h-6 mr-2" />
                Fazer Pedido Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full xl:w-auto text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-smooth"
                onClick={() => window.open(mapsUrl, "_blank")}
              >
                <Navigation className="w-6 h-6 mr-2" />
                Como Chegar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuresData.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-smooth hover:scale-105 border-2">
                <CardContent className="p-6 space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beer Carousel Section */}
      <section className="py-20 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <div className="text-6xl mb-4">🍻</div>
            <h2 className="text-4xl xl:text-5xl font-bold mb-4 gradient-text">
              Nossas Marcas
            </h2>
            <p className="text-xl text-muted-foreground">
              As melhores cervejas sempre geladas para você
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <BeerCarousel />
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-elegant transition-smooth">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">📍 Nossa Localização</h3>
                  <p className="text-sm text-muted-foreground">{contactInfo.address}</p>
                  <p className="text-xs text-muted-foreground mt-1">W62Q+GJ Teresina, PI</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-elegant transition-smooth">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">⏰ Horário</h3>
                  <p className="text-sm text-muted-foreground">Aberto até 22:00</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Horário de pico: Quinta-feira 06h-21h
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🛠️</div>
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">Ferramentas para Gestão</h2>
            <p className="text-xl text-muted-foreground">
              Ferramentas práticas para auxiliar no dia a dia do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="animate-slide-up">
              <StockCalculator />
            </div>
            <div className="animate-slide-up delay-100">
              <PriceCalculator />
            </div>
            <div className="animate-slide-up delay-200">
              <OrderControl />
            </div>
            <div className="animate-slide-up delay-300">
              <ChangeCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 xl:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">Avaliações dos Clientes</h2>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos clientes dizem sobre nós
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviewsData.map((review, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-smooth hover:scale-105 border-2">
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground italic">"{review.comment}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                      👤
                    </div>
                    <p className="font-semibold text-lg">{review.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 xl:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📸</div>
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">Conheça Nosso Espaço</h2>
            <p className="text-xl text-muted-foreground">
              Venha nos visitar e conferir nossas instalações
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant border-4 border-border hover:shadow-glow transition-smooth group">
              <img
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-81rwctgxe4n4/conv-85x7e5tvmt4w/20251212/file-85xo8zs2qbr4.jpg"
                alt="Fachada do Empório Green - Distribuidora de Bebidas em Teresina"
                className="w-full h-auto object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Empório Green</h3>
                  <p className="text-lg">Sua distribuidora de bebidas em Teresina - PI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 xl:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">📍</div>
            <h2 className="text-4xl xl:text-5xl font-bold mb-4">Venha Nos Visitar</h2>
            <p className="text-xl text-muted-foreground">
              Estamos localizados em Teresina - PI
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant border-4 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.8!2d-42.7!3d-5.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDYnMDAuMCJTIDQywrA0MicwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Empório Green"
              />
            </div>
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                className="shadow-glow hover:scale-105 transition-smooth"
                onClick={() => window.open(mapsUrl, "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 xl:py-32 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-7xl animate-bounce">🍺</div>
            <h2 className="text-4xl xl:text-6xl font-bold">
              Pronto para Fazer seu Pedido?
            </h2>
            <p className="text-xl xl:text-2xl opacity-90">
              Entre em contato agora e receba suas bebidas geladas em minutos!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-xl px-12 py-8 shadow-glow hover:scale-110 transition-smooth"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <Phone className="w-7 h-7 mr-3" />
              Pedir pelo WhatsApp
            </Button>
            <p className="text-lg opacity-80">
              📞 (86) 99466-7178
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-5xl mb-4">🍺</div>
            <h3 className="text-3xl font-bold">Empório Green</h3>
            <div className="space-y-2 text-sm opacity-90">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                {contactInfo.address}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                (86) 99466-7178
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Aberto até 22:00
              </p>
            </div>
            <div className="pt-8 border-t border-background/20">
              <p className="text-sm opacity-75">2025 Empório Green</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

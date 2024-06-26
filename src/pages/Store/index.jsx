// React
import React from "react";

// Components
import ProductCard from "../../components/Cards/ProductCard";

// Images
import StoreBG from "../../assets/BackgroundImages/StoreBG.png";
import ArrowDown from "../../assets/arrow-down.svg";
import FriendsShirt from "../../assets/Store/FRIENDS-SHIRT-PROMO.png";
import MemoriesShirt from "../../assets/Store/MEMORIES-SHIRT-PROMO.png";
import GroupShirt from "../../assets/Store/GROUP-SHIRT-PROMO.png";
import KitKatShirt from "../../assets/Store/KIT-KAT-SHIRT-PROMO.png";
import FunkoAle from "../../assets/Store/FUNKO-ALE-PROMO.png";
import Beterronio from "../../assets/Store/BETERRONIO-PROMO.png";
import LoraxMug from "../../assets/Store/MUG-LORAX-PROMO.png";
import FreneKeychain from "../../assets/Store/FRENE-KEYCHAIN-PROMO.png";
import OriginsShirt from "../../assets/Store/ORIGINS-SHIRT-PROMO.png";
import FanShirt from "../../assets/Store/FAN-SHIRT-PROMO.png";
import AcucccaShirt from "../../assets/Store/ACUCCCA-SHIRT-PROMO.png";
import Cosplay from "../../assets/Store/COSPLAY-PROMO.png";
import LRBWPoster from "../../assets/Store/LR-BW-POSTER-PROMO.png";
import LRRBPoster from "../../assets/Store/LR-RB-POSTER-PROMO.png";
import LoraxPoster from "../../assets/Store/LORAX-KART-POSTER-PROMO.png";
import SecretsPoster from "../../assets/Store/SECRETS-POSTER-PROMO.png";

function Store() {
  return (
    <div>
      <section className="header h-screen">
        <div className="h-full w-full relative">
          <img
            src={StoreBG}
            className="hidden lg:block w-full h-full object-cover absolute"
          />
          <img
            src={StoreBG}
            className="lg:hidden w-full h-full object-cover absolute"
          />
          <div className="p-24 w-full h-full justify-center items-center">
            <h1 className="text-cdln-blue-50 text-8xl md:text-9xl font-bold text-center animate__animated animate__jackInTheBox">
              Creme Store
            </h1>
            <h2 className="text-cdln-blue-100 text-2xl md:text-5xl font-normal mt-5 text-center animate__animated animate__slideInUp">
              Frete grátis para todo Brasil!
            </h2>
            <div className="w-full justify-center items-center pt-20 animate__animated animate__fadeIn">
              <a href="#main-section">
                <img src={ArrowDown} className="mx-auto h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="main-section">
        <div className="hero h-auto lg:min-h-screen">
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div className="cube"></div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-10 gap-8 lg:gap-0">
              <ProductCard
                image={FriendsShirt}
                name="Camiseta Amigos"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, vermelho e preto.
              </ProductCard>
              <ProductCard
                image={MemoriesShirt}
                name="Camiseta Memories"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, cinza e preto.
              </ProductCard>
              <ProductCard
                image={GroupShirt}
                name="Camiseta Grupo"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores azul, cinza e preto.
              </ProductCard>
              <ProductCard
                image={KitKatShirt}
                name="Camiseta Have a Break"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores vermelho e preto.
              </ProductCard>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-10 gap-8 lg:gap-0">
              <ProductCard
                image={OriginsShirt}
                name="Camiseta Origins"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores preto, vermelho e cinza.
              </ProductCard>
              <ProductCard
                image={FanShirt}
                name="Camiseta O Maior Fã"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível nas cores preto e branco.
              </ProductCard>
              <ProductCard
                image={AcucccaShirt}
                name="Camiseta ACUCCCA"
                price="R$ 59,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, disponível na cor preta. Corte Oversized.
              </ProductCard>
              <ProductCard
                image={Cosplay}
                name="Fantasia Anti-Frene"
                price="R$ 119,90"
                url=""
                mobile={true}
                available={false}
              >
                100% Algodão, traje completo com capacete feito sob medida.
              </ProductCard>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-10 gap-8 lg:gap-0">
              <ProductCard
                image={FunkoAle}
                name="Funko POP! Ale"
                price="R$ 119,90"
                url=""
                mobile={true}
                available={false}
              >
                Funko POP! Limitado do Ale, versão Esqueleto Médio 2019.
              </ProductCard>
              <ProductCard
                image={Beterronio}
                name="Beterrônio Colar"
                price="R$ 89,90"
                url=""
                mobile={true}
                available={false}
              >
                Colar de beterrônio usado por Golirous Giggs em 2021.
              </ProductCard>
              <ProductCard
                image={LoraxMug}
                name="Caneca Lorax Kart"
                price="R$ 39,90"
                url=""
                mobile={true}
                available={false}
              >
                Para os mais velozes e destemidos jogadores.
              </ProductCard>
              <ProductCard
                image={FreneKeychain}
                name="Chaveiro Lord Frene"
                price="R$ 19,90"
                url=""
                mobile={true}
                available={false}
              >
                Chaveiro para mostrar a todos que você está na luta contra os frenes.
              </ProductCard>
            </div>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row p-5 lg:p-10 gap-8 lg:gap-0">
              <ProductCard
                image={LRBWPoster}
                name="Poster LR (Sem Cor)"
                price="R$ 79,90"
                url=""
                mobile={true}
                available={false}
              >
                Duas metades, Bem vs Mal. 30cmX60cm
              </ProductCard>
              <ProductCard
                image={LRRBPoster}
                name="Poster LR (Colorido)"
                price="R$ 79,90"
                url=""
                mobile={true}
                available={false}
              >
                Duas metades, Bem vs Mal. 30cmX60cm
              </ProductCard>
              <ProductCard
                image={LoraxPoster}
                name="Poster Lorax Kart"
                price="R$ 79,90"
                url=""
                mobile={true}
                available={false}
              >
                Aperte os cintos, a corrida vai começar! 45cmX90cm
              </ProductCard>
              <ProductCard
                image={SecretsPoster}
                name="Poster Segredos"
                price="R$ 79,90"
                url=""
                mobile={true}
                available={false}
              >
                45cmX90cm.
                <br></br>
                ㅤ
              </ProductCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Store;

'use client';
import jsPDF from "jspdf";
import { useState } from "react";

const products = [
  { id: 1, name: "Cílios Volume 4D", price: 19.9 },
  { id: 2, name: "Cola Profissional", price: 25.0 },
  { id: 3, name: "Cílios Fio a Fio", price: 22.9 },
  { id: 4, name: "Kit Maquiagem", price: 49.9 },
];

export default function Home() {
  const [cart, setCart] = useState([]);

  const add = (p) => setCart([...cart, p]);

  const checkout = () => {
    const doc = new jsPDF();
    let y = 20;
    let total = 0;

    doc.text("Thaís Avila Loja", 20, y);
    y += 10;

    cart.forEach((item) => {
      doc.text(`${item.name} - R$ ${item.price}`, 20, y);
      total += item.price;
      y += 10;
    });

    doc.text(`Total: R$ ${total.toFixed(2)}`, 20, y + 10);
    doc.save("recibo.pdf");

    const text = cart.map(i => i.name).join("%0A");
    window.open(`https://wa.me/5517992487844?text=Pedido:%0A${text}`);
  };

  return (
    <div style={{padding:20}}>
      <h1>Thaís Avila Loja</h1>

      {products.map(p => (
        <div key={p.id} style={{marginBottom:10}}>
          {p.name} - R$ {p.price}
          <button onClick={()=>add(p)}>Adicionar</button>
        </div>
      ))}

      <h2>Carrinho</h2>
      {cart.map((c,i)=><div key={i}>{c.name}</div>)}

      <button onClick={checkout}>Finalizar</button>
    </div>
  );
}

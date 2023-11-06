import React from "react";
import "./App.css";
export function Testi() {
  return (
    <>
      <section id="testimonials">
        <h2>Testimonials</h2>
        <p> Berikut Beberapa testimonial dari pelanggan kami</p>
        <div className="container">
          <div className="testimonial">
            <h3>Arifin zainullah</h3>
            <h4>--Streamer--</h4>
            <p>Saya Pengguna internet dari COMPUTECH alhamdulillah streming saya selalu lancar</p>
          </div>
          <div className="testimonial">
            <h3>Chika nabila</h3>
            <h4>--Gamer--</h4>
            <p>Saya seorang gamer sejati, komputer saya sangat mumpuni setelah beli part di COMPUTECH</p>
          </div>
          <div className="testimonial">
            <h3>Agung Iswahyudi</h3>
            <h4>--Editor--</h4>
            <p>Setelah saya melakukan pemasangan aplikasi di COMPUTECH pekerjaan saya menjadi lebih mudah</p>
          </div>
        </div>
      </section>
    </>
  );
}

import "./App.css";
export function About() {
    return(
      <div class="about-us">
      <h2>Layanan Kami</h2>
      <p>Kami memberikan beberapa layanan yang akan mempermudah anda</p>
            <div class="tiles">
            <div class="tile">
              <h3>Perbaikan komputer Hardware dan software</h3>
              <p>Kami menyediakan layanan perbaikan komputer, termasuk perbaikan hardware dan software.</p>
              <i class="fas fa-wrench"></i>
            </div>
            <div class="tile">
              <h3>Pemasangan dan konfigurasi software</h3>
              <p>Kami dapat membantu Anda memasang dan mengkonfigurasi perangkat lunak baru di komputer .</p>
              <i class="fas fa-cogs"></i>
            </div>
            <div class="tile">
              <h3>Pemasangan dan konfigurasi hardware</h3>
              <p>Kami dapat membantu Anda memasang dan mengkonfigurasi perangkat keras baru di komputer .</p>
              <i class="fas fa-server"></i>
            </div>
            <div class="tile">
              <h3>Pembersihan dan optimasi komputer</h3>
              <p>Kami dapat membantu Anda membersihkan dan mengoptimalkan komputer Anda agar berjalan lebih lancar.</p>
              <i class="fas fa-recycle"></i>
            </div>
            <div class="tile">
              <h3>Instalasi dan konfigurasi jaringan</h3>
              <p>Kami dapat membantu Anda menginstal dan mengkonfigurasi jaringan komputer .</p>
              <i class="fas fa-ethernet"></i>
            </div>
          </div>
          </div>

    );
};
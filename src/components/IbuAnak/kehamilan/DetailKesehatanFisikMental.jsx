// src/pages/details/PregnancyDetailMengenali.jsx
import React from "react";
// import { useNavigate } from "react-router-dom";
import mengenaliKehamilan from "../../../assets/mengenaliKehamilan.jpg"; // Pastikan kamu punya gambar ini

const DetailKesehatanFisikMental = () => {
  // const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto p-4 text-sm text-gray-800">
      <nav className="text-xs text-gray-500 mb-2">
        <button onClick={() => navigate(-1)} className="mr-1 underline">
          Home
        </button>
        &gt; Ibu & Anak &gt; <span className="text-black">Kehamilan</span>
      </nav>

      <img
        src={mengenaliKehamilan}
        alt="Ilustrasi testpack"
        className="w-full h-40 object-cover rounded-xl mb-4"
      />

      <div className="flex justify-between items-center mb-1">
        <h1 className="text-base font-semibold">Mengenali Kehamilan</h1>
        <span className="text-xs text-gray-600">31 Juli 2025</span>
      </div>

      <p className="text-xs text-gray-600 mb-4">Resanti Dwi Cahyani</p>

      <section className="space-y-3 leading-relaxed">
        <div>
          <h2 className="font-semibold mb-1">Mengenali Kehamilan</h2>
          <p>
            Kehamilan adalah proses alami di mana seorang wanita membawa janin
            yang berkembang di dalam rahimnya hingga melahirkan. Proses ini
            biasanya berlangsung selama sekitar 40 minggu atau 9 bulan, dihitung
            dari hari pertama periode menstruasi terakhir (HPHT).
          </p>
          <p>
            Kehamilan merupakan perjalanan yang penuh perubahan, baik secara
            fisik maupun emosional, dan memerlukan perhatian khusus untuk
            menjaga kesehatan ibu dan janin.
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">Tahapan Kehamilan</h2>
          <p>
            Kehamilan terbagi menjadi tiga trimester, masing-masing dengan ciri
            dan perkembangan spesifik:
          </p>
        </div>

        <div>
          <h3 className="font-semibold">1. Trimester Pertama (Minggu 1–12)</h3>
          <p>
            Pada trimester ini, pembuahan terjadi ketika sperma bertemu dengan
            sel telur di saluran tuba, membentuk zigot yang kemudian berkembang
            menjadi embrio. Gejala awal kehamilan yang umum meliputi:
          </p>
          <ul className="list-disc list-inside ml-3">
            <li>Mual dan muntah (morning sickness)</li>
            <li>Kelelahan</li>
            <li>Payudara terasa nyeri atau sensitif</li>
            <li>Perubahan suasana hati</li>
            <li>Sering buang air kecil</li>
          </ul>
          <p>
            Pada tahap ini, organ utama janin mulai terbentuk, seperti jantung,
            otak, dan tulang belakang. Ibu hamil disarankan untuk mulai
            mengonsumsi asam folat guna mendukung perkembangan saraf janin.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">2. Trimester Kedua (Minggu 13–28)</h3>
          <p>
            Trimester kedua sering disebut sebagai "fase bulan madu" karena
            gejala seperti mual biasanya berkurang. Perkembangan janin meliputi:
          </p>
        </div>
      </section>
    </div>
  );
};

export default DetailKesehatanFisikMental;

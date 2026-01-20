import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Users, Folder, Star } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  role: string;
  highlight: string;
  category: string;
}

const categories = [
  { id: "all", label: "Semua", icon: Star },
  { id: "experience", label: "Pengalaman", icon: Briefcase },
  { id: "project", label: "Proyek", icon: Folder },
  { id: "organization", label: "Organisasi", icon: Users },
  { id: "certification", label: "Sertifikasi", icon: Award },
  { id: "education", label: "Pendidikan", icon: GraduationCap },
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Market Research, Customer Outreach, and Customer Engagement Optimization",
    description: "Melakukan research calon customer melalui riset online sesuai kriteria, melakukan outreach, memanajemen data seluruh prospek calon pelanggan, serta melakukan follow-up untuk memperbarui status dan informasi pelanggan.",
    role: "Market Research",
    highlight: "Mendapatkan customer dari berbagai daerah",
    category: "project",
  },
  {
    id: 2,
    title: "Hustler and Marketing Research Intern",
    description: "Menjalani program magang selama 10 bulan di Slashtech dengan tanggung jawab meliputi content writing, host live, pembuatan content plan, market research, customer outreach, serta optimalisasi customer engagement.",
    role: "Marketing Team",
    highlight: "Menjadi bagian Marketing Team di Slashtech selama 10 bulan ",
    category: "experience",
  },
  {
    id: 3,
    title: "FULL STACK WEBSITE JAGACUAN",
    description: "Mengembangkan aplikasi web edukasi keuangan untuk remaja yang bertujuan membantu pengguna memahami dan membangun kebiasaan pengelolaan keuangan sejak dini. Aplikasi ini menyediakan fitur pembelajaran berbasis video yang dilengkapi dengan kuis interaktif untuk mengukur pemahaman pengguna, serta fitur pencatatan pengeluaran (spending tracker), perencanaan anggaran (budgeting), tabungan (saving), dan financial challenge untuk meningkatkan keterlibatan pengguna dalam belajar keuangan secara menyenangkan.",
    role: "Full Stack Developer",
    highlight: "Mengembangkan website dengan category finance ",
    category: "project",
  },
  {
    id: 4,
    title: "Analisa & Pengolahan Data Untuk Menentukan Harga Rumah Berdasarkan Data Dependen Menggunakan Bahasa Pemrograman Python",
    description: "Melakukan Pengolahan data melalui proses Analisa menggunakan bahasa pemrograman berbasis Phyton untuk menentukan estimasi harga rumah berdasarkan data dependen yang dimiliki, dengan melalui proses  pembersihan data, eksplorasi data, visualisasi, serta pembuatan model prediktif sederhana.",
    role: "Data Analyst",
    highlight: "Mendapatkan harga rumah berdasarkan analisa ",
    category: "project",
  },
  {
    id: 5,
    title: "Pengolahan & Model Data Pada Microsoft Excel",
    description: "Melakukan pengolahan dan pemodelan data menggunakan Microsoft Excel dengan berbagai rumus, mencakup pembersihan data, analisis, visualisasi dalam bentuk grafik/dashboard, serta penggunaan fitur interaktif seperti filter dan sorting untuk mempermudah eksplorasi data.",
    role: "Data Analyst",
    highlight: "Mendapatkan hasil data yang bersih dan terstruktur",
    category: "project",
  },
  {
    id: 6,
    title: "Ketua Pelaksana Pada Perayaan Tahun Baru Islam",
    description: "Sebagai Ketua Pelaksana perayaan Tahun Baru Islam, saya bertanggung jawab memimpin dan mengoordinasikan panitia, merancang konsep serta susunan acara, dan memastikan setiap divisi menjalankan perannya dengan baik. Peran ini menuntut kemampuan komunikasi, manajemen waktu, serta pemecahan masalah, terutama dalam menghadapi dinamika persiapan dan pelaksanaan acara agar kegiatan dapat berjalan dengan lancar dan berkesan.",
    role: "Project Leader",
    highlight: "Berhasilnya acara perayaan Tahun Baru Islam dengan lancar",
    category: "experience",
  },
  {
    id: 7,
    title: "Anggota OSIS SMK Telkom Sidoarjo",
    description: "Aktif sebagai anggota OSIS selama dua periode. Pada periode 2022–2023, tergabung dalam Divisi Keimanan dan Ketakwaan dengan peran mendukung pelaksanaan kegiatan keagamaan, membantu perencanaan program, serta menjaga nilai-nilai spiritual di lingkungan sekolah. Pada periode 2023–2024, melanjutkan keanggotaan sebagai bagian dari Divisi Kesehatan dan Lingkungan Hidup, dengan fokus pada kegiatan yang mendukung pola hidup sehat serta kebersihan dan kepedulian terhadap lingkungan sekolah. Melalui pengalaman ini, saya mengembangkan kemampuan kerja tim, tanggung jawab, komunikasi, serta kepedulian sosial.",
    role: "Student Council Member",
    highlight: "Mendukung kegiatan sekolah serta mengembangkan kerja sama lintas divisi, tanggung jawab, dan komunikasi.",
    category: "organization",
  },
  {
    id: 8,
    title: "Anggota Dewan Ambalan SMK Telkom Sidoarjo",
    description: "Aktif sebagai anggota Dewan Ambalan pada tahun 2022–2023 dan 2023–2024, tergabung dalam Divisi Hubungan Masyarakat (Humas). Bertanggung jawab mendukung komunikasi internal dan eksternal, membantu penyebaran informasi kegiatan, serta berkontribusi dalam koordinasi dan publikasi program ambalan. Melalui peran ini, saya mengembangkan kemampuan komunikasi, kerja sama tim, dan tanggung jawab dalam berorganisasi.",
    role: "Public Relations Division Member",
    highlight: "Mendukung komunikasi, publikasi, dan koordinasi kegiatan organisasi.",
    category: "organization",
  },
  {
    id: 9,
    title: "Juara 2 Lomba Bussiness Plan (Skobic)",
    description: "Meraih Juara 2 dalam kompetisi Business Plan dengan menghadirkan inovasi produk herbal bernama Botanical Zen, berbahan dasar daun beluntas sebagai solusi alami untuk membantu mengatasi bau badan. Produk ini dikembangkan dalam bentuk gummy untuk memberikan alternatif konsumsi yang praktis dan menarik, sekaligus menggabungkan pendekatan kesehatan alami dengan konsep bisnis yang berorientasi pada kebutuhan pasar.",
    role: "Product & Business Development Team Member",
    highlight: "Mengembangkan ide produk herbal, menyusun business plan, dan menganalisis kebutuhan pasar.",
    category: "certification",
  },
  {
    id: 10,
    title: "Siswi SMK Telkom Sidoarjo",
    description: "Siswi SMK Telkom Sidoarjo jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA) dengan fokus pembelajaran pada pengembangan web dan aplikasi, serta pengenalan beberapa framework pendukung. Selain kegiatan akademik, saya juga aktif berorganisasi melalui OSIS, Dewan Ambalan, dan Badan Dakwah Islam, yang membantu mengembangkan kemampuan kerja sama tim, komunikasi, serta tanggung jawab.",
    role: "Student",
    highlight: "Pengembangan web & aplikasi, framework, serta penguatan kerja tim, komunikasi, dan tanggung jawab.",
    category: "education",
  },
  {
    id: 11,
    title: "Sertifikasi React By PT. Saka Technology (Artyclopedia)",
    description: "Saya mengikuti pelatihan React bersertifikat dari PT Saka Technology dan berperan sebagai Fullstack Programmer dalam tim beranggotakan 5 orang untuk mengembangkan Artyclopedia, sebuah website informasi dan edukasi lukisan dunia yang dilengkapi fitur kuis interaktif guna meningkatkan pemahaman pengguna.",
    role: "Fullstack",
    highlight: "Fullstack Programmer pada pelatihan React PT Saka Technology, pengembang website edukasi Artyclopedia.",
    category: "certification",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding gradient-warm">
      <div className="container-wide" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-sans tracking-widest uppercase text-muted-foreground">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mt-3 text-charcoal">
            Journey & <span className="italic text-primary">Achievements</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-sans max-w-xl mx-auto">
            Kumpulan pengalaman, proyek, dan pencapaian yang membentuk perjalanan saya.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-charcoal text-ivory shadow-soft"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-sage-light text-secondary-foreground rounded-full text-xs font-sans mb-4 capitalize">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif font-medium text-charcoal mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              {/* Role */}
              <p className="text-sm font-sans text-primary font-medium mb-3">
                {item.role}
              </p>

              {/* Description */}
              <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Highlight */}
              <div className="pt-4 border-t border-border">
                <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-1">
                  Highlight
                </p>
                <p className="text-sm font-sans font-medium text-foreground">
                  {item.highlight}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

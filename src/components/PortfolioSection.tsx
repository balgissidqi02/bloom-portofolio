import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, GraduationCap, Award, Users, Folder, Star, ChevronDown, ChevronUp } from "lucide-react";
import PortfolioModal, { PortfolioItemDetail } from "./PortfolioModal";


const categories = [
  { id: "all", label: "Semua", icon: Star },
  { id: "experience", label: "Pengalaman", icon: Briefcase },
  { id: "project", label: "Proyek", icon: Folder },
  { id: "organization", label: "Organisasi", icon: Users },
  { id: "certification", label: "Sertifikasi", icon: Award },
  { id: "education", label: "Pendidikan", icon: GraduationCap },
];

const portfolioItems: PortfolioItemDetail[] = [
  {
    id: 1,
    title: "Market Research, Customer Outreach, and Customer Engagement Optimization",
    description: "Melakukan research calon customer melalui riset online sesuai kriteria, melakukan outreach, memanajemen data seluruh prospek calon pelanggan, serta melakukan follow-up untuk memperbarui status dan informasi pelanggan.",
    role: "Market Research",
    highlight: "Mendapatkan customer dari berbagai daerah",
    category: "project",
    images: [
       "/images/reasearch1.jpeg",
       "/images/reasearch2.jpeg",
       "/images/reasearch3.jpeg",
       "/images/reasearch4.jpeg",
    ],
  },
  {
    id: 2,
    title: "Hustler and Marketing Research Intern",
    description: "Menjalani program magang selama 10 bulan di Slashtech dengan tanggung jawab meliputi content writing, host live, pembuatan content plan, market research, customer outreach, serta optimalisasi customer engagement.",
    role: "Marketing Team",
    highlight: "Menjadi bagian Marketing Team di Slashtech selama 10 bulan ",
    category: "experience",
    images: [
      "/images/intern1.jpeg",
      "/images/intern2.jpeg",
      "/images/intern3.jpeg",
    ],
  },
  {
    id: 3,
    title: "Full Stack Website JagaCuan",
    description: "Mengembangkan aplikasi web edukasi keuangan untuk remaja yang bertujuan membantu pengguna memahami dan membangun kebiasaan pengelolaan keuangan sejak dini. Aplikasi ini menyediakan fitur pembelajaran berbasis video yang dilengkapi dengan kuis interaktif untuk mengukur pemahaman pengguna, serta fitur pencatatan pengeluaran (spending tracker), perencanaan anggaran (budgeting), tabungan (saving), dan financial challenge untuk meningkatkan keterlibatan pengguna dalam belajar keuangan secara menyenangkan.",
    role: "Full Stack Developer",
    highlight: "Mengembangkan website dengan category finance ",
    category: "project",
    images: [
      "/images/jagacuan1.png",
      "/images/jagacuan2.png",
      "/images/jagacuan3.png",
      "/images/jagacuan4.png",
      "/images/jagacuan5.png",
    ],
  },
  {
    id: 4,
    title: "Analisa & Pengolahan Data Untuk Menentukan Harga Rumah Berdasarkan Data Dependen Menggunakan Bahasa Pemrograman Python",
    description: "Melakukan Pengolahan data melalui proses Analisa menggunakan bahasa pemrograman berbasis Phyton untuk menentukan estimasi harga rumah berdasarkan data dependen yang dimiliki, dengan melalui proses  pembersihan data, eksplorasi data, visualisasi, serta pembuatan model prediktif sederhana.",
    role: "Data Analyst",
    highlight: "Mendapatkan harga rumah berdasarkan analisa ",
    category: "project",
    images: [
      "/images/pythonrumah1.png",
      "/images/pythonrumah2.png",
      "/images/pythonrumah3.png",
    ],
  },
  {
    id: 5,
    title: "Pengolahan & Model Data Pada Python",
    description: "Melakukan pengolahan dan pemodelan data menggunakan Python dengan berbagai rumus, mencakup pembersihan data, analisis, visualisasi dalam bentuk grafik/dashboard, serta penggunaan fitur interaktif seperti filter dan sorting untuk mempermudah eksplorasi data.",
    role: "Data Analyst",
    highlight: "Mendapatkan hasil data yang bersih dan terstruktur",
    category: "project",
    images: [
      "/images/model2.jpeg",
      "/images/model1.jpeg",
      "/images/model3.png",
      "/images/model4.png",
    ],
  },
  {
    id: 6,
    title: "Ketua Pelaksana Pada Perayaan Tahun Baru Islam",
    description: "Sebagai Ketua Pelaksana perayaan Tahun Baru Islam, saya bertanggung jawab memimpin dan mengoordinasikan panitia, merancang konsep serta susunan acara, dan memastikan setiap divisi menjalankan perannya dengan baik. Peran ini menuntut kemampuan komunikasi, manajemen waktu, serta pemecahan masalah, terutama dalam menghadapi dinamika persiapan dan pelaksanaan acara agar kegiatan dapat berjalan dengan lancar dan berkesan.",
    role: "Project Leader",
    highlight: "Berhasilnya acara perayaan Tahun Baru Islam dengan lancar",
    category: "experience",
    images: [
      "/images/ketupel2.jpeg.png",
      // "/src/assets/ketupel10.png",
      "/images/ketupel4.png",
    ],
  },
  {
    id: 7,
    title: "Anggota OSIS SMK Telkom Sidoarjo",
    description: "Aktif sebagai anggota OSIS selama dua periode. Pada periode 2022–2023, tergabung dalam Divisi Keimanan dan Ketakwaan dengan peran mendukung pelaksanaan kegiatan keagamaan, membantu perencanaan program, serta menjaga nilai-nilai spiritual di lingkungan sekolah. Pada periode 2023–2024, melanjutkan keanggotaan sebagai bagian dari Divisi Kesehatan dan Lingkungan Hidup, dengan fokus pada kegiatan yang mendukung pola hidup sehat serta kebersihan dan kepedulian terhadap lingkungan sekolah. Melalui pengalaman ini, saya mengembangkan kemampuan kerja tim, tanggung jawab, komunikasi, serta kepedulian sosial.",
    role: "Student Council Member",
    highlight: "Mendukung kegiatan sekolah serta mengembangkan kerja sama lintas divisi, tanggung jawab, dan komunikasi.",
    category: "organization",
    images: [
      "/images/osis1.jpeg",
      "/images/osis2.jpeg",
      "/images/osis4.jpeg",
      "/images/osis5.jpeg",
      "/images/osis6.png",
    ],
  },
  {
    id: 8,
    title: "Anggota Dewan Ambalan SMK Telkom Sidoarjo",
    description: "Aktif sebagai anggota Dewan Ambalan pada tahun 2022–2023 dan 2023–2024, tergabung dalam Divisi Hubungan Masyarakat (Humas). Bertanggung jawab mendukung komunikasi internal dan eksternal, membantu penyebaran informasi kegiatan, serta berkontribusi dalam koordinasi dan publikasi program ambalan. Melalui peran ini, saya mengembangkan kemampuan komunikasi, kerja sama tim, dan tanggung jawab dalam berorganisasi.",
    role: "Public Relations Division Member",
    highlight: "Mendukung komunikasi, publikasi, dan koordinasi kegiatan organisasi.",
    category: "organization",
    images: [
      "/images/ambalan4.jpeg",
      "/images/ambalan3.jpeg",
      "/images/ambalan5.jpeg",
      "/images/ambalan6.jpeg",
      "/images/ambalan8.jpeg",
    ],
  },
  {
    id: 9,
    title: "Juara 2 Lomba Bussiness Plan (Skobic)",
    description: "Meraih Juara 2 dalam kompetisi Business Plan dengan menghadirkan inovasi produk herbal bernama Botanical Zen, berbahan dasar daun beluntas sebagai solusi alami untuk membantu mengatasi bau badan. Produk ini dikembangkan dalam bentuk gummy untuk memberikan alternatif konsumsi yang praktis dan menarik, sekaligus menggabungkan pendekatan kesehatan alami dengan konsep bisnis yang berorientasi pada kebutuhan pasar.",
    role: "Product & Business Development Team Member",
    highlight: "Mengembangkan ide produk herbal, menyusun business plan, dan menganalisis kebutuhan pasar.",
    category: "certification",
    images: [
      "/images/skobic2.jpeg",
      "/images/skobic1.png",
      "/images/skobic3.jpeg",
    ],
  },
  {
    id: 10,
    title: "Siswi SMK Telkom Sidoarjo",
    description: "Siswi SMK Telkom Sidoarjo jurusan Sistem Informasi Jaringan dan Aplikasi (SIJA) dengan fokus pembelajaran pada pengembangan web dan aplikasi, serta pengenalan beberapa framework pendukung. Selain kegiatan akademik, saya juga aktif berorganisasi melalui OSIS, Dewan Ambalan, dan Badan Dakwah Islam, yang membantu mengembangkan kemampuan kerja sama tim, komunikasi, serta tanggung jawab.",
    role: "Student",
    highlight: "Pengembangan web & aplikasi, framework, serta penguatan kerja tim, komunikasi, dan tanggung jawab.",
    category: "education",
    images: [
      "/images/siswi1.jpeg",
      "/images/siswi2.jpeg",
      "/images/siswi3.jpeg",
    ],
  },
  {
    id: 11,
    title: "Sertifikasi React By PT. Saka Technology (Artyclopedia)",
    description: "Saya mengikuti pelatihan React bersertifikat dari PT Saka Technology dan berperan sebagai Fullstack Programmer dalam tim beranggotakan 5 orang untuk mengembangkan Artyclopedia, sebuah website informasi dan edukasi lukisan dunia yang dilengkapi fitur kuis interaktif guna meningkatkan pemahaman pengguna.",
    role: "Fullstack",
    highlight: "Fullstack Programmer pada pelatihan React PT Saka Technology, pengembang website edukasi Artyclopedia.",
    category: "certification",
    images: [
      "/images/saka2.jpeg",
      "/images/sertifsaka.jpg",
      "/images/saka3.jpg",
    ],
  },
];

const ALL_CATEGORY_LIMIT = 3;

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllItems, setShowAllItems] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItemDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Apply limit only for "All" category
  const displayedItems = activeCategory === "all" && !showAllItems
    ? filteredItems.slice(0, ALL_CATEGORY_LIMIT)
    : filteredItems;

  const hasMoreItems = activeCategory === "all" && filteredItems.length > ALL_CATEGORY_LIMIT;
  const remainingCount = filteredItems.length - ALL_CATEGORY_LIMIT;

  // Reset showAllItems when switching categories
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setShowAllItems(false);
  };

  const handleItemClick = (item: PortfolioItemDetail) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

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
                onClick={() => handleCategoryChange(category.id)}
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
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: 0.05 * index, duration: 0.4, ease: "easeOut" }}
                onClick={() => handleItemClick(item)}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 cursor-pointer"
              >
                {/* Thumbnail Image */}
                {item.images && item.images.length > 0 && (
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.images.length > 1 && (
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-charcoal/70 backdrop-blur-sm text-ivory text-xs rounded-full">
                        +{item.images.length - 1} foto
                      </span>
                    )}
                  </div>
                )}

                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 bg-sage-light text-secondary-foreground rounded-full text-xs font-sans mb-4 capitalize">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-medium text-charcoal mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Role */}
                  <p className="text-sm font-sans text-primary font-medium mb-3">
                    {item.role}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Highlight */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-sans text-muted-foreground uppercase tracking-wider mb-1">
                      Highlight
                    </p>
                    <p className="text-sm font-sans font-medium text-foreground line-clamp-2">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More/Less Toggle - Only for "All" category */}
        {hasMoreItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-sans font-medium bg-card text-foreground hover:bg-muted border border-border shadow-soft hover:shadow-card transition-all duration-300 group"
            >
              {showAllItems ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                </>
              ) : (
                <>
                  <span>Show more ({remainingCount} more)</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Portfolio Detail Modal */}
        <PortfolioModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};

export default PortfolioSection;

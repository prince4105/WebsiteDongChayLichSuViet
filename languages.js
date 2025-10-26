// languages.js

const translations = {
  // --- Tiếng Việt (vi) ---
  vi: {
    // === Key Chung (Dùng cho mọi trang) ===
    siteTitle: "Dòng Chảy Lịch Sử Việt", // Ví dụ: Tiêu đề chung
    navHome: "Trang Chủ",
    navHistory: "Lịch Sử",
    navBuildProtect: "Dựng & Giữ Nước",
    navCulture: "Văn Hóa",
    navResources: "Tư Liệu", // Thêm key nếu bạn có
    navNews: "Tin Tức",     // Thêm key nếu bạn có
    navContact: "Liên Hệ",   // Thêm key nếu bạn có
    footerAboutTitle: "Giới thiệu",
    footerAboutText: 'Trang web "Dòng Chảy Lịch Sử" cung cấp thông tin tóm tắt về lịch sử Việt Nam qua các thời kỳ, phục vụ mục đích tham khảo và học tập.',
    footerContactTitle: "Liên hệ",
    footerContactEmail: "Email: info@lichsuviet.vn",
    footerContactPhone: "Điện thoại: (012) 345-6789",
    footerContactAddress: "Địa chỉ: 123 Đường ABC, Hà Nội",
    footerSupportTitle: "Hỗ trợ",
    footerSupportFAQ: "Câu hỏi thường gặp",
    footerSupportFeedback: "Góp ý nội dung",
    footerSupportPolicy: "Chính sách bảo mật",
    footerCopyright: "© Dòng Chảy Lịch Sử Việt. Thông tin tổng hợp cho mục đích tham khảo.",
    langVIE: "VIE", // Chữ trên nút tiếng Việt
    langENG: "ENG", // Chữ trên nút tiếng Anh
    sidebarToggle: "Menu", // Chữ trên nút Menu ẩn/hiện sidebar (nếu trang có)
    // ... (Thêm các key chung khác nếu có) ...

    // === Key Riêng cho trang lichsu.html ===
    historyPageTitle: "Dòng Chảy — Lịch sử Việt Nam (tóm tắt)",
    historyPageDescription: "Tổng quan lịch sử Việt Nam: tiền sử, cổ đại, Bắc thuộc, quân chủ, hiện đại — trình bày theo giai đoạn.",
    historyMainHeading: "Dòng Chảy Lịch Sử",
    historySubHeading: "Tổng quan các giai đoạn chính trong lịch sử Việt Nam, từ thời tiền sử đến hiện đại.",
    tocPrehistoric: "Tiền sử", // Key cho link TOC
    tocAncient: "Cổ đại",
    tocNorthern: "Bắc thuộc",
    tocMonarchy: "Quân chủ",
    tocModern: "Hiện đại",
    tocNames: "Quốc hiệu",
    tocPopulation: "Dân số",
    tocWars: "Chiến tranh",
    tocSeeAlso: "Xem thêm",
    prehistoricTitle: "Thời kỳ Tiền sử", // Key cho tiêu đề section
    prehistoricIntro: "Dấu tích con người từ thời đồ đá cũ đến nền văn hóa Đông Sơn rực rỡ.",
    // !!! THÊM TẤT CẢ CÁC KEY KHÁC CỦA TRANG lichsu.html VÀO ĐÂY !!!

    // === Key Riêng cho trang dungnuocvagiunuoc.html ===
    buildProtectPageTitle: "Dựng nước – Giữ nước · Dòng Chảy Lịch Sử Việt",
    buildProtectPageDescription: "Các cuộc kháng chiến, chiến công anh hùng và hồ sơ nhân vật lịch sử Việt Nam.",
    buildProtectMainHeading: "Dựng Nước & Giữ Nước",
    buildProtectSubHeading: "Hành trình hào hùng qua các cuộc kháng chiến bảo vệ Tổ quốc, những chiến công vang dội và chân dung các anh hùng dân tộc.",
    cardCategoryResistance: "Kháng chiến", // Key cho category thẻ
    cardCategoryUnification: "Thống nhất",
    cardCategoryFigure: "Nhân vật",
    cardTitleChongBacThuoc: "Đấu tranh chống Bắc thuộc", // Key cho title thẻ
    cardDescChongBacThuoc: "Hơn 1000 năm kiên cường chống lại ách đô hộ...",
    cardReadMore: "Xem chi tiết", // Key cho nút "Xem chi tiết"
    // !!! THÊM TẤT CẢ CÁC KEY KHÁC CỦA TRANG dungnuocvagiunuoc.html VÀO ĐÂY !!!

    // === Key Riêng cho các trang khác (vanhoa.html, ...) ===
    // Thêm các key tương tự cho các trang còn lại

  },
  // --- Tiếng Anh (en) ---
  en: {
    // === Key Chung (Dùng cho mọi trang) ===
    siteTitle: "Flow of Vietnamese History",
    navHome: "Home",
    navHistory: "History",
    navBuildProtect: "Building & Defending",
    navCulture: "Culture",
    navResources: "Resources", // Dịch tương ứng
    navNews: "News",       // Dịch tương ứng
    navContact: "Contact",    // Dịch tương ứng
    footerAboutTitle: "About",
    footerAboutText: 'The "Flow of History" website provides summary information about Vietnamese history through different periods, for reference and learning purposes.',
    footerContactTitle: "Contact",
    footerContactEmail: "Email: info@lichsuviet.vn",
    footerContactPhone: "Phone: (012) 345-6789",
    footerContactAddress: "Address: 123 ABC Street, Hanoi",
    footerSupportTitle: "Support",
    footerSupportFAQ: "FAQ",
    footerSupportFeedback: "Content Feedback",
    footerSupportPolicy: "Privacy Policy",
    footerCopyright: "© Flow of Vietnamese History. Information compiled for reference purposes.",
    langVIE: "VIE",
    langENG: "ENG",
    sidebarToggle: "Menu",
     // ... (Thêm các bản dịch tiếng Anh chung khác) ...

    // === Key Riêng cho trang lichsu.html ===
    historyPageTitle: "Flow of Time — Vietnamese History (Summary)",
    historyPageDescription: "Overview of Vietnamese history: prehistoric, ancient, Chinese domination, monarchy, modern — presented by period.",
    historyMainHeading: "Flow of History",
    historySubHeading: "Overview of the main periods in Vietnamese history, from prehistoric times to the modern era.",
    tocPrehistoric: "Prehistoric",
    tocAncient: "Ancient",
    tocNorthern: "Chinese Domination",
    tocMonarchy: "Monarchy",
    tocModern: "Modern",
    tocNames: "National Names",
    tocPopulation: "Population",
    tocWars: "Wars",
    tocSeeAlso: "See Also",
    prehistoricTitle: "Prehistoric Period",
    prehistoricIntro: "Human traces from the Paleolithic era to the brilliant Dong Son culture.",
    // !!! THÊM TẤT CẢ CÁC BẢN DỊCH TIẾNG ANH KHÁC CỦA lichsu.html VÀO ĐÂY !!!

    // === Key Riêng cho trang dungnuocvagiunuoc.html ===
    buildProtectPageTitle: "Building – Defending · Flow of Vietnamese History",
    buildProtectPageDescription: "Resistance wars, heroic achievements, and profiles of Vietnamese historical figures.",
    buildProtectMainHeading: "Building & Defending",
    buildProtectSubHeading: "The heroic journey through resistance wars protecting the homeland, resounding victories, and portraits of national heroes.",
    cardCategoryResistance: "Resistance",
    cardCategoryUnification: "Unification",
    cardCategoryFigure: "Figures",
    cardTitleChongBacThuoc: "Struggle against Chinese domination",
    cardDescChongBacThuoc: "Over 1000 years of resilience against the domination...",
    cardReadMore: "Read more",
    // !!! THÊM TẤT CẢ CÁC BẢN DỊCH TIẾNG ANH KHÁC CỦA dungnuocvagiunuoc.html VÀO ĐÂY !!!

    // === Key Riêng cho các trang khác (vanhoa.html, ...) ===
    // Thêm các bản dịch tiếng Anh tương ứng
  }
  
};
// ... (sau các khối if cho TITLE, META, INPUT, IMG)

       // Xử lý data-modal-title (nếu có key tương ứng)
       const modalTitleKey = element.getAttribute('data-translate-key'); // Key chính dùng cho title
       const modalTitleTranslation = translations[lang]?.[modalTitleKey];
       if (modalTitleTranslation !== undefined && element.hasAttribute('data-modal-title')) {
           element.setAttribute('data-modal-title', modalTitleTranslation);
       }

       // Xử lý data-modal-content (sử dụng key phụ)
       const modalContentKey = element.getAttribute('data-translate-key-content'); // Key phụ cho content
       if (modalContentKey) { // Chỉ xử lý nếu có key phụ
           const modalContentTranslation = translations[lang]?.[modalContentKey];
           if (modalContentTranslation !== undefined && element.hasAttribute('data-modal-content')) {
               element.setAttribute('data-modal-content', modalContentTranslation);
           }
       }

       // Xử lý thuộc tính title (tooltip)
       const titleKey = element.getAttribute('data-translate-key'); // Key chính cũng dùng cho title
       const titleTranslation = translations[lang]?.[titleKey];
        if (titleTranslation !== undefined && element.hasAttribute('title')) {
             element.setAttribute('title', titleTranslation);
        }

       // Xử lý textContent/innerHTML cho các thẻ H3, P bên trong timeline-event
       else if (element.tagName === 'H3' || element.tagName === 'P') {
            const textKey = element.getAttribute('data-translate-key');
            const textTranslation = translations[lang]?.[textKey];
            if (textTranslation !== undefined) {
                element.innerHTML = textTranslation; // Hoặc textContent
            }
       }

       // ... (phần else cuối cùng cho các thẻ khác)
       else {
           const regularKey = element.getAttribute('data-translate-key');
           const regularTranslation = translations[lang]?.[regularKey];
            if (regularTranslation !== undefined && !element.hasAttribute('data-modal-title') && !element.hasAttribute('data-modal-content') && !element.hasAttribute('title')) {
                // Chỉ cập nhật innerHTML nếu không phải là các thuộc tính đã xử lý ở trên
               element.innerHTML = regularTranslation; // Hoặc textContent
            }
       }
// translate.js

(function() {
    // Kiểm tra xem biến translations đã tồn tại chưa (từ file languages.js)
    if (typeof translations === 'undefined') {
        console.error("Translations object not found. Make sure languages.js is loaded before translate.js");
        return;
    }

    const languageButtons = document.querySelectorAll('.lang-btn');
    // Lưu ý: querySelectorAll chạy một lần khi script tải, nên cần chạy lại trong setLanguage nếu nội dung thay đổi động
    let translatableElements = document.querySelectorAll('[data-translate-key]');
    const htmlTag = document.documentElement;

    function setLanguage(lang) {
      if (!translations[lang]) {
        console.error(`Language "${lang}" not found in translations.`);
        return;
      }

      htmlTag.setAttribute('lang', lang);

      // Cập nhật lại danh sách phần tử mỗi khi đổi ngôn ngữ (phòng trường hợp nội dung thêm/xóa động)
      translatableElements = document.querySelectorAll('[data-translate-key]');

      translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        // Truy cập bản dịch một cách an toàn hơn
        const translation = translations[lang]?.[key];

        if (translation !== undefined) {
           if (element.tagName === 'TITLE') {
               document.title = translation;
           } else if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
               element.setAttribute('content', translation);
           }
           else if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
           }
           else if (element.tagName === 'IMG' && element.hasAttribute('alt')) {
                element.setAttribute('alt', translation);
           }
           else {
               // Sử dụng innerHTML nếu bản dịch chứa thẻ HTML (ví dụ: <br>, <strong>)
               // Cẩn thận với XSS nếu bản dịch đến từ nguồn không đáng tin cậy
               // Nếu chắc chắn bản dịch chỉ là text, dùng element.textContent = translation;
               element.innerHTML = translation; // Hoặc element.textContent = translation;
           }
        } else {
          // Có thể bỏ qua cảnh báo này để tránh log nhiều khi key thuộc về trang khác
          // console.warn(`Translation key "${key}" not found for language "${lang}".`);
        }
      });

      languageButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === lang);
      });

      localStorage.setItem('preferredLanguage', lang);
    }

    languageButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        // Ngăn sự kiện click nổi bọt nếu nút nằm trong link hoặc phần tử khác
        event.preventDefault();
        const selectedLang = button.getAttribute('data-lang');
        setLanguage(selectedLang);
      });
    });

    // Áp dụng ngôn ngữ đã lưu hoặc mặc định khi tải trang xong
    document.addEventListener('DOMContentLoaded', () => {
        const preferredLanguage = localStorage.getItem('preferredLanguage');
        // Ưu tiên ngôn ngữ đã lưu, nếu không có hoặc không hợp lệ thì dùng 'vi'
        const initialLang = preferredLanguage && translations[preferredLanguage] ? preferredLanguage : 'vi';
        // Cần gọi lại querySelectorAll ở đây vì DOM đã sẵn sàng
        languageButtons = document.querySelectorAll('.lang-btn');
        translatableElements = document.querySelectorAll('[data-translate-key]');
        setLanguage(initialLang);
    });

})();
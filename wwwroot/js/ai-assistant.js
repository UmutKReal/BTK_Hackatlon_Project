// TrendyShop AI Assistant Widget
$(document).ready(function () {

    // AI Panel Toggle
    $('#aiToggleBtn').click(function () {
        $('#aiPanel').toggleClass('show');
    });

    $('#aiCloseBtn').click(function () {
        $('#aiPanel').removeClass('show');
    });

    // Close panel when clicking outside
    $(document).click(function (e) {
        if (!$(e.target).closest('.ai-assistant-widget').length) {
            $('#aiPanel').removeClass('show');
        }
    });

    // Combo buttons selection
    $('.combo-btn').click(function () {
        $('.combo-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Generate Combo Suggestion
    $('#generateComboBtn').click(function () {
        const occasion = $('.combo-btn.active').data('occasion');
        const budget = $('#budgetSelect').val();
        const color = $('#colorSelect').val();

        if (!occasion) {
            showToast('Lütfen bir durum seçin', 'warning');
            return;
        }

        // Show loading
        $(this).html('<i class="fas fa-spinner fa-spin me-2"></i>Kombin hazırlanıyor...');
        $(this).prop('disabled', true);

        // Simulate AI processing
        setTimeout(() => {
            generateComboSuggestion(occasion, budget, color);
            $(this).html('<i class="fas fa-sparkles me-2"></i>Kombin Öner');
            $(this).prop('disabled', false);
            $('#comboResults').slideDown();
        }, 2000);
    });

    // Filter tags selection
    $('.filter-tag').click(function () {
        $(this).toggleClass('active');
        const activeFilters = $('.filter-tag.active').map(function () {
            return $(this).data('filter');
        }).get();

        if (activeFilters.length > 0) {
            $('#aiSearchInput').val(activeFilters.join(', '));
        }
    });

    // AI Search
    $('#aiSearch').click(function () {
        const searchQuery = $('#aiSearchInput').val().trim();

        if (!searchQuery) {
            showToast('Lütfen arama kriteri girin', 'warning');
            return;
        }

        // Show loading
        $(this).html('<i class="fas fa-spinner fa-spin"></i>');
        $(this).prop('disabled', true);

        // Simulate AI search
        setTimeout(() => {
            performAISearch(searchQuery);
            $(this).html('<i class="fas fa-search"></i>');
            $(this).prop('disabled', false);
            $('#aiSearchResults').slideDown();
        }, 1500);
    });

    // Enter key for search
    $('#aiSearchInput').keypress(function (e) {
        if (e.which == 13) {
            $('#aiSearch').click();
        }
    });
});

// Generate AI Combo Suggestion
function generateComboSuggestion(occasion, budget, color) {
    const suggestions = {
        casual: [
            { name: "Rahat Jean Pantolon", price: "159,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=J" },
            { name: "Basic T-Shirt", price: "49,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=T" },
            { name: "Spor Ayakkabı", price: "299,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=S" }
        ],
        business: [
            { name: "Klasik Pantolon", price: "249,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=P" },
            { name: "Düğmeli Gömlek", price: "189,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=G" },
            { name: "Deri Ayakkabı", price: "399,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=A" }
        ],
        party: [
            { name: "Şık Elbise", price: "299,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=E" },
            { name: "Topuklu Ayakkabı", price: "199,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=T" },
            { name: "Clutch Çanta", price: "89,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=Ç" }
        ],
        sport: [
            { name: "Spor Tayt", price: "79,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=ST" },
            { name: "Antrenman Üstü", price: "99,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=A" },
            { name: "Koşu Ayakkabısı", price: "399,99 TL", image: "https://via.placeholder.com/40x40/F8F9FA/333333?text=K" }
        ]
    };

    const combo = suggestions[occasion] || suggestions.casual;
    let totalPrice = combo.reduce((sum, item) => {
        return sum + parseFloat(item.price.replace(' TL', '').replace(',', '.'));
    }, 0);

    let comboHtml = `
        <div class="mb-2">
            <small class="text-muted">
                <i class="fas fa-tags me-1"></i>
                ${getOccasionText(occasion)} • Toplam: ${totalPrice.toFixed(2).replace('.', ',')} TL
            </small>
        </div>
    `;

    combo.forEach((item, index) => {
        comboHtml += `
            <div class="combo-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="flex-grow-1">
                    <div class="fw-semibold" style="font-size: 0.85rem;">${item.name}</div>
                    <small class="text-primary">${item.price}</small>
                </div>
                <button class="btn btn-sm btn-outline-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
    });

    comboHtml += `
        <div class="text-center mt-3">
            <button class="btn btn-success btn-sm me-2">
                <i class="fas fa-heart me-1"></i>Beğendim
            </button>
            <button class="btn btn-outline-secondary btn-sm" onclick="generateComboSuggestion('${occasion}', '${budget}', '${color}')">
                <i class="fas fa-redo me-1"></i>Yeni Öneri
            </button>
        </div>
    `;

    $('#comboSuggestion').html(comboHtml);
}

// Perform AI Search
function performAISearch(query) {
    // Simulate AI search results
    const searchResults = [
        {
            name: "Kışlık Mont (AI Önerisi)",
            price: "279,99 TL",
            oldPrice: "399,99 TL",
            image: "https://via.placeholder.com/50x50/F8F9FA/333333?text=M",
            match: "95%"
        },
        {
            name: "Sıcak Tutan Kazak",
            price: "149,99 TL",
            oldPrice: "199,99 TL",
            image: "https://via.placeholder.com/50x50/F8F9FA/333333?text=K",
            match: "87%"
        },
        {
            name: "Termal İç Giyim",
            price: "89,99 TL",
            oldPrice: null,
            image: "https://via.placeholder.com/50x50/F8F9FA/333333?text=T",
            match: "82%"
        }
    ];

    let resultsHtml = `
        <div class="mb-2">
            <small class="text-success">
                <i class="fas fa-check-circle me-1"></i>
                ${searchResults.length} ürün bulundu
            </small>
        </div>
    `;

    searchResults.forEach(result => {
        resultsHtml += `
            <div class="search-result-item">
                <img src="${result.image}" alt="${result.name}">
                <div class="flex-grow-1">
                    <div class="fw-semibold" style="font-size: 0.9rem;">${result.name}</div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="text-danger fw-bold">${result.price}</span>
                        ${result.oldPrice ? `<small class="text-muted text-decoration-line-through">${result.oldPrice}</small>` : ''}
                        <small class="badge bg-success">${result.match} Eşleşme</small>
                    </div>
                </div>
                <button class="btn btn-sm btn-primary">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
        `;
    });

    resultsHtml += `
        <div class="text-center mt-3">
            <button class="btn btn-outline-primary btn-sm">
                <i class="fas fa-external-link-alt me-1"></i>Tüm Sonuçları Gör
            </button>
        </div>
    `;

    $('#searchResultsList').html(resultsHtml);
}

// Helper Functions
function getOccasionText(occasion) {
    const occasions = {
        casual: 'Günlük Kombin',
        business: 'İş Kombini',
        party: 'Parti Kombini',
        sport: 'Spor Kombini'
    };
    return occasions[occasion] || 'Kombin';
}

function showToast(message, type = 'info') {
    // Simple toast notification
    const toast = $(`
        <div class="toast-notification toast-${type}">
            <i class="fas fa-info-circle me-2"></i>${message}
        </div>
    `);

    $('body').append(toast);

    setTimeout(() => {
        toast.addClass('show');
    }, 100);

    setTimeout(() => {
        toast.removeClass('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast styles dynamically
$('<style>')
    .prop('type', 'text/css')
    .html(`
    .toast-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: #007bff;
        color: white;
        padding: 0.75rem 1rem;
        border-radius: 10px;
        font-size: 0.9rem;
        z-index: 2000;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    .toast-notification.show {
        transform: translateX(0);
        opacity: 1;
    }
    .toast-notification.toast-warning {
        background: #ffc107;
        color: #212529;
    }
    .toast-notification.toast-success {
        background: #28a745;
    }
    .toast-notification.toast-danger {
        background: #dc3545;
    }
`)
    .appendTo('head'); 
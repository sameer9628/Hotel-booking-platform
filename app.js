// Application Data
const appData = {
  hotels: [
    {
      id: 1,
      name: "Grand Palace Hotel",
      location: "New York City, NY",
      rating: 4.8,
      reviewCount: 234,
      price: 299,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      amenities: ["WiFi", "Pool", "Spa", "Gym", "Restaurant", "Room Service"],
      description: "Luxury hotel in the heart of Manhattan with world-class amenities and stunning city views.",
      rooms: [
        {id: 101, type: "Standard Room", price: 299, available: true, capacity: 2},
        {id: 102, type: "Deluxe Suite", price: 499, available: true, capacity: 4},
        {id: 103, type: "Presidential Suite", price: 999, available: false, capacity: 6}
      ]
    },
    {
      id: 2,
      name: "Seaside Resort",
      location: "Miami Beach, FL",
      rating: 4.6,
      reviewCount: 189,
      price: 199,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400",
      amenities: ["Beach Access", "Pool", "WiFi", "Restaurant", "Bar"],
      description: "Beautiful beachfront resort with direct ocean access and tropical ambiance.",
      rooms: [
        {id: 201, type: "Ocean View Room", price: 199, available: true, capacity: 2},
        {id: 202, type: "Beach Suite", price: 349, available: true, capacity: 4}
      ]
    },
    {
      id: 3,
      name: "Mountain Lodge",
      location: "Aspen, CO",
      rating: 4.5,
      reviewCount: 156,
      price: 179,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400",
      amenities: ["Ski Access", "Fireplace", "WiFi", "Restaurant", "Spa"],
      description: "Cozy mountain retreat perfect for winter sports and relaxation.",
      rooms: [
        {id: 301, type: "Mountain View Room", price: 179, available: true, capacity: 2},
        {id: 302, type: "Lodge Suite", price: 299, available: true, capacity: 4}
      ]
    },
    {
      id: 4,
      name: "Downtown Business Hotel",
      location: "Chicago, IL",
      rating: 4.3,
      reviewCount: 298,
      price: 159,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      amenities: ["Business Center", "WiFi", "Gym", "Restaurant", "Conference Rooms"],
      description: "Modern business hotel in downtown Chicago with excellent conference facilities.",
      rooms: [
        {id: 401, type: "Business Room", price: 159, available: true, capacity: 2},
        {id: 402, type: "Executive Suite", price: 249, available: true, capacity: 3}
      ]
    },
    {
      id: 5,
      name: "Historic Inn",
      location: "Charleston, SC",
      rating: 4.7,
      reviewCount: 167,
      price: 139,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      amenities: ["Historic Charm", "WiFi", "Restaurant", "Garden", "Tours"],
      description: "Charming historic inn in the heart of Charleston's historic district.",
      rooms: [
        {id: 501, type: "Historic Room", price: 139, available: true, capacity: 2},
        {id: 502, type: "Heritage Suite", price: 219, available: true, capacity: 4}
      ]
    },
    {
      id: 6,
      name: "Desert Oasis",
      location: "Phoenix, AZ",
      rating: 4.4,
      reviewCount: 143,
      price: 119,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      amenities: ["Pool", "Spa", "WiFi", "Golf", "Restaurant"],
      description: "Luxurious desert resort with world-class golf and spa facilities.",
      rooms: [
        {id: 601, type: "Desert View Room", price: 119, available: true, capacity: 2},
        {id: 602, type: "Oasis Suite", price: 189, available: true, capacity: 4}
      ]
    }
  ],
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "user",
      bookings: [
        {
          id: 1001,
          hotelId: 1,
          hotelName: "Grand Palace Hotel",
          roomType: "Deluxe Suite",
          checkIn: "2024-12-25",
          checkOut: "2024-12-28",
          guests: 2,
          totalPrice: 1497,
          status: "confirmed"
        }
      ]
    },
    {
      id: 2,
      name: "Admin User",
      email: "admin@hotelbook.com",
      role: "admin"
    }
  ],
  bookings: [
    {
      id: 1001,
      userId: 1,
      hotelId: 1,
      hotelName: "Grand Palace Hotel",
      roomId: 102,
      roomType: "Deluxe Suite",
      checkIn: "2024-12-25",
      checkOut: "2024-12-28",
      guests: 2,
      totalPrice: 1497,
      status: "confirmed",
      createdAt: "2024-12-15T10:30:00Z"
    },
    {
      id: 1002,
      userId: 1,
      hotelId: 2,
      hotelName: "Seaside Resort",
      roomId: 201,
      roomType: "Ocean View Room",
      checkIn: "2025-01-15",
      checkOut: "2025-01-18",
      guests: 2,
      totalPrice: 597,
      status: "pending",
      createdAt: "2024-12-16T14:20:00Z"
    }
  ],
  reviews: [
    {
      id: 1,
      hotelId: 1,
      userId: 1,
      userName: "John D.",
      rating: 5,
      comment: "Excellent service and beautiful rooms. The location is perfect for exploring the city.",
      date: "2024-12-10"
    },
    {
      id: 2,
      hotelId: 1,
      userId: 2,
      userName: "Sarah M.",
      rating: 4,
      comment: "Great hotel with amazing amenities. The staff was very helpful and friendly.",
      date: "2024-12-08"
    }
  ],
  adminStats: {
    totalHotels: 6,
    totalBookings: 127,
    totalRevenue: 45600,
    totalUsers: 89,
    monthlyBookings: [12, 15, 18, 22, 25, 30, 28, 32, 35, 38, 42, 45],
    hotelOccupancy: [
      {hotel: "Grand Palace Hotel", occupancy: 85},
      {hotel: "Seaside Resort", occupancy: 92},
      {hotel: "Mountain Lodge", occupancy: 78},
      {hotel: "Downtown Business Hotel", occupancy: 88}
    ]
  }
};

// Application State
let currentUser = null;
let currentBooking = {};
let filteredHotels = [...appData.hotels];
let currentPage = 1;
const itemsPerPage = 5;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadStoredUser();
    showPage('home');
    renderFeaturedHotels();
    setDefaultDates();
});

function initializeApp() {
    // Set initial filter values
    const minPriceSlider = document.getElementById('minPrice');
    const maxPriceSlider = document.getElementById('maxPrice');
    const minPriceLabel = document.getElementById('minPriceLabel');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    
    if (minPriceSlider && maxPriceSlider && minPriceLabel && maxPriceLabel) {
        minPriceSlider.value = 0;
        maxPriceSlider.value = 1000;
        minPriceLabel.textContent = '0';
        maxPriceLabel.textContent = '1000';
    }
}

function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const checkInElement = document.getElementById('checkInDate');
    const checkOutElement = document.getElementById('checkOutDate');
    
    if (checkInElement && checkOutElement) {
        checkInElement.value = today.toISOString().split('T')[0];
        checkOutElement.value = tomorrow.toISOString().split('T')[0];
    }
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('[data-route]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const route = this.getAttribute('data-route');
            showPage(route);
        });
    });

    // Authentication buttons
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (loginBtn) loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('loginModal');
    });
    if (registerBtn) registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showModal('registerModal');
    });
    if (logoutBtn) logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        logout();
    });
    
    // Modal switches
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    
    if (switchToRegister) {
        switchToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('loginModal');
            showModal('registerModal');
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            hideModal('registerModal');
            showModal('loginModal');
        });
    }

    // Close modals
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) modal.classList.add('hidden');
        });
    });

    // Close modals on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });

    // Forms
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);

    // Search
    const searchBtn = document.getElementById('searchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleSearch();
        });
    }

    // Setup dynamic event listeners that will be added later
    setupDynamicEventListeners();
}

function setupDynamicEventListeners() {
    // This function will be called when we need to setup listeners for dynamically created content
    
    // Dashboard tabs
    setTimeout(() => {
        const dashboardTabs = document.querySelectorAll('.dashboard-tabs .tab-btn');
        dashboardTabs.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                switchTab(this.getAttribute('data-tab'), '.dashboard-tabs', '.dashboard-content');
            });
        });

        // Admin tabs
        const adminTabs = document.querySelectorAll('.admin-tabs .tab-btn');
        adminTabs.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                switchTab(this.getAttribute('data-tab'), '.admin-tabs', '.admin-content');
            });
        });
    }, 100);
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    const emailElement = document.getElementById('loginEmail');
    const passwordElement = document.getElementById('loginPassword');
    
    if (!emailElement || !passwordElement) return;
    
    const email = emailElement.value;
    const password = passwordElement.value;

    // Simple authentication (in real app, this would be API call)
    const user = appData.users.find(u => u.email === email);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        updateAuthUI();
        hideModal('loginModal');
        showNotification('Login successful!', 'success');
        
        if (user.role === 'admin') {
            showPage('admin');
        } else {
            showPage('dashboard');
        }
        
        // Reset form
        emailElement.value = '';
        passwordElement.value = '';
    } else {
        showNotification('Invalid credentials', 'error');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const nameElement = document.getElementById('registerName');
    const emailElement = document.getElementById('registerEmail');
    const passwordElement = document.getElementById('registerPassword');
    
    if (!nameElement || !emailElement || !passwordElement) return;
    
    const name = nameElement.value;
    const email = emailElement.value;
    const password = passwordElement.value;

    // Check if user already exists
    if (appData.users.find(u => u.email === email)) {
        showNotification('User already exists', 'error');
        return;
    }

    // Create new user
    const newUser = {
        id: appData.users.length + 1,
        name,
        email,
        role: 'user',
        bookings: []
    };

    appData.users.push(newUser);
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    updateAuthUI();
    hideModal('registerModal');
    showNotification('Registration successful!', 'success');
    showPage('dashboard');
    
    // Reset form
    nameElement.value = '';
    emailElement.value = '';
    passwordElement.value = '';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showPage('home');
    showNotification('Logged out successfully', 'success');
}

function loadStoredUser() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        try {
            currentUser = JSON.parse(storedUser);
            updateAuthUI();
        } catch (e) {
            localStorage.removeItem('currentUser');
        }
    }
}

function updateAuthUI() {
    const authButtons = document.querySelector('.nav-auth');
    const userSection = document.querySelector('.nav-user');
    const adminLink = document.getElementById('adminLink');
    const userNameDisplay = document.getElementById('userNameDisplay');

    if (currentUser && authButtons && userSection && userNameDisplay) {
        authButtons.style.display = 'none';
        userSection.style.display = 'block';
        userNameDisplay.textContent = currentUser.name;
        
        if (adminLink) {
            if (currentUser.role === 'admin') {
                adminLink.style.display = 'block';
            } else {
                adminLink.style.display = 'none';
            }
        }
    } else if (authButtons && userSection) {
        authButtons.style.display = 'flex';
        userSection.style.display = 'none';
    }
}

// Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    // Load page-specific content
    switch(pageId) {
        case 'home':
            renderFeaturedHotels();
            break;
        case 'hotels':
            setTimeout(() => {
                setupHotelsPageListeners();
                renderHotels();
            }, 50);
            break;
        case 'dashboard':
            if (!currentUser || currentUser.role !== 'user') {
                showNotification('Please login to access dashboard', 'error');
                showPage('home');
                return;
            }
            setTimeout(() => {
                renderDashboard();
                setupDynamicEventListeners();
            }, 50);
            break;
        case 'admin':
            if (!currentUser || currentUser.role !== 'admin') {
                showNotification('Admin access required', 'error');
                showPage('home');
                return;
            }
            setTimeout(() => {
                renderAdminPanel();
                setupDynamicEventListeners();
            }, 50);
            break;
    }
}

function setupHotelsPageListeners() {
    // Filters
    const minPrice = document.getElementById('minPrice');
    const maxPrice = document.getElementById('maxPrice');
    const sortBy = document.getElementById('sortBy');
    
    if (minPrice) minPrice.addEventListener('input', updatePriceLabels);
    if (maxPrice) maxPrice.addEventListener('input', updatePriceLabels);
    if (sortBy) sortBy.addEventListener('change', applyFilters);
    
    // Filter checkboxes
    document.querySelectorAll('.rating-filters input, .amenity-filters input').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Price range filters
    if (minPrice) minPrice.addEventListener('change', applyFilters);
    if (maxPrice) maxPrice.addEventListener('change', applyFilters);
}

// Hotel Rendering
function renderFeaturedHotels() {
    const container = document.getElementById('featuredHotels');
    if (!container) return;
    
    const featured = appData.hotels.slice(0, 3);
    
    container.innerHTML = featured.map(hotel => createHotelCard(hotel)).join('');
    
    // Add click handlers
    container.querySelectorAll('.hotel-card').forEach((card, index) => {
        card.addEventListener('click', () => {
            showHotelDetail(featured[index].id);
        });
    });
}

function renderHotels() {
    filteredHotels = [...appData.hotels];
    applyFilters();
}

function createHotelCard(hotel) {
    const stars = '★'.repeat(Math.floor(hotel.rating));
    const amenityTags = hotel.amenities.slice(0, 3).map(amenity => 
        `<span class="amenity-tag">${amenity}</span>`
    ).join('');

    return `
        <div class="hotel-card" data-hotel-id="${hotel.id}">
            <div class="hotel-image" style="background-image: url('${hotel.image}')">
                <div class="hotel-price">$${hotel.price}</div>
            </div>
            <div class="hotel-info">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
                <div class="hotel-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${hotel.rating} (${hotel.reviewCount} reviews)</span>
                </div>
                <div class="hotel-amenities">${amenityTags}</div>
            </div>
        </div>
    `;
}

function createHotelListItem(hotel) {
    const stars = '★'.repeat(Math.floor(hotel.rating));
    const amenityTags = hotel.amenities.slice(0, 4).map(amenity => 
        `<span class="amenity-tag">${amenity}</span>`
    ).join('');

    return `
        <div class="hotel-list-item" data-hotel-id="${hotel.id}">
            <div class="hotel-list-image" style="background-image: url('${hotel.image}')"></div>
            <div class="hotel-list-info">
                <h3>${hotel.name}</h3>
                <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
                <div class="hotel-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${hotel.rating} (${hotel.reviewCount} reviews)</span>
                </div>
                <div class="hotel-amenities">${amenityTags}</div>
                <p>${hotel.description}</p>
            </div>
            <div class="hotel-list-price">
                <div class="price-amount">$${hotel.price}</div>
                <div class="price-per-night">per night</div>
                <button class="btn btn--primary mt-16" onclick="showHotelDetail(${hotel.id})">View Details</button>
            </div>
        </div>
    `;
}

// Filtering and Sorting
function applyFilters() {
    const minPriceElement = document.getElementById('minPrice');
    const maxPriceElement = document.getElementById('maxPrice');
    const sortByElement = document.getElementById('sortBy');
    
    const minPrice = minPriceElement ? parseInt(minPriceElement.value) : 0;
    const maxPrice = maxPriceElement ? parseInt(maxPriceElement.value) : 1000;
    const sortBy = sortByElement ? sortByElement.value : 'price-low';
    
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filters input:checked'))
        .map(cb => parseInt(cb.value));
    const selectedAmenities = Array.from(document.querySelectorAll('.amenity-filters input:checked'))
        .map(cb => cb.value);

    // Filter hotels
    filteredHotels = appData.hotels.filter(hotel => {
        const matchesPrice = hotel.price >= minPrice && hotel.price <= maxPrice;
        const matchesRating = selectedRatings.length === 0 || 
            selectedRatings.some(rating => hotel.rating >= rating);
        const matchesAmenities = selectedAmenities.length === 0 || 
            selectedAmenities.every(amenity => hotel.amenities.includes(amenity));
        
        return matchesPrice && matchesRating && matchesAmenities;
    });

    // Sort hotels
    filteredHotels.sort((a, b) => {
        switch(sortBy) {
            case 'price-low': return a.price - b.price;
            case 'price-high': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
            case 'name': return a.name.localeCompare(b.name);
            default: return 0;
        }
    });

    renderHotelsList();
}

function renderHotelsList() {
    const container = document.getElementById('hotelsList');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!container) return;
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageHotels = filteredHotels.slice(start, end);

    container.innerHTML = pageHotels.map(hotel => createHotelListItem(hotel)).join('');
    
    // Update results count
    if (resultsCount) {
        resultsCount.textContent = `${filteredHotels.length} hotels found`;
    }
    
    renderPagination();
}

function renderPagination() {
    const container = document.getElementById('pagination');
    if (!container) return;
    
    const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `<button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">Previous</button>`;
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `<button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    
    // Next button
    paginationHTML += `<button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">Next</button>`;
    
    container.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    renderHotelsList();
}

function updatePriceLabels() {
    const minPriceElement = document.getElementById('minPrice');
    const maxPriceElement = document.getElementById('maxPrice');
    const minPriceLabel = document.getElementById('minPriceLabel');
    const maxPriceLabel = document.getElementById('maxPriceLabel');
    
    if (minPriceElement && minPriceLabel) {
        minPriceLabel.textContent = minPriceElement.value;
    }
    if (maxPriceElement && maxPriceLabel) {
        maxPriceLabel.textContent = maxPriceElement.value;
    }
}

// Hotel Detail
function showHotelDetail(hotelId) {
    const hotel = appData.hotels.find(h => h.id === hotelId);
    if (!hotel) return;

    const reviews = appData.reviews.filter(r => r.hotelId === hotelId);
    const stars = '★'.repeat(Math.floor(hotel.rating));
    
    const amenitiesList = hotel.amenities.map(amenity => 
        `<div class="amenity-item">
            <i class="fas fa-check"></i>
            <span>${amenity}</span>
        </div>`
    ).join('');

    const roomOptions = hotel.rooms.map(room => 
        `<div class="room-option ${!room.available ? 'disabled' : ''}" data-room-id="${room.id}" data-price="${room.price}">
            <div>
                <strong>${room.type}</strong>
                <p>Sleeps ${room.capacity} guests</p>
            </div>
            <div>
                <span class="price-amount">$${room.price}</span>
                ${!room.available ? '<span class="status status--error">Unavailable</span>' : ''}
            </div>
        </div>`
    ).join('');

    const reviewsList = reviews.map(review => 
        `<div class="review-item">
            <div class="review-header">
                <div>
                    <div class="review-author">${review.userName}</div>
                    <div class="stars">${'★'.repeat(review.rating)}</div>
                </div>
                <div class="review-date">${review.date}</div>
            </div>
            <p>${review.comment}</p>
        </div>`
    ).join('');

    const detailHTML = `
        <div class="hotel-detail-container">
            <div class="hotel-detail-header">
                <h1>${hotel.name}</h1>
                <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.location}</p>
                <div class="hotel-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-text">${hotel.rating} (${hotel.reviewCount} reviews)</span>
                </div>
            </div>

            <div class="hotel-gallery">
                <div class="gallery-main" style="background-image: url('${hotel.image}')"></div>
                <div class="gallery-thumb" style="background-image: url('${hotel.image}')"></div>
                <div class="gallery-thumb" style="background-image: url('${hotel.image}')"></div>
                <div class="gallery-thumb" style="background-image: url('${hotel.image}')"></div>
                <div class="gallery-thumb" style="background-image: url('${hotel.image}')"></div>
            </div>

            <div class="hotel-content">
                <div class="hotel-main-info">
                    <div class="hotel-description">
                        <h3>About This Hotel</h3>
                        <p>${hotel.description}</p>
                    </div>

                    <div class="amenities-section">
                        <h3>Amenities</h3>
                        <div class="amenities-list">
                            ${amenitiesList}
                        </div>
                    </div>

                    <div class="reviews-section">
                        <h3>Guest Reviews</h3>
                        ${reviewsList}
                    </div>
                </div>

                <div class="booking-card">
                    <div class="booking-price">$${hotel.price} <small>per night</small></div>
                    
                    <div class="form-group">
                        <label class="form-label">Check-in</label>
                        <input type="date" class="form-control" id="bookingCheckIn" />
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Check-out</label>
                        <input type="date" class="form-control" id="bookingCheckOut" />
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Guests</label>
                        <select class="form-control" id="bookingGuests">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                        </select>
                    </div>

                    <div class="room-options">
                        <h4>Select Room</h4>
                        ${roomOptions}
                    </div>

                    <button class="btn btn--primary btn--full-width" onclick="startBooking(${hotel.id})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('hotel-detail').innerHTML = detailHTML;
    showPage('hotel-detail');

    // Set default dates
    setDefaultDates();
    const checkInDate = document.getElementById('checkInDate');
    const checkOutDate = document.getElementById('checkOutDate');
    const bookingCheckIn = document.getElementById('bookingCheckIn');
    const bookingCheckOut = document.getElementById('bookingCheckOut');
    
    if (checkInDate && bookingCheckIn) bookingCheckIn.value = checkInDate.value;
    if (checkOutDate && bookingCheckOut) bookingCheckOut.value = checkOutDate.value;

    // Add room selection handlers
    setTimeout(() => {
        document.querySelectorAll('.room-option').forEach(option => {
            if (!option.classList.contains('disabled')) {
                option.addEventListener('click', function() {
                    document.querySelectorAll('.room-option').forEach(o => o.classList.remove('selected'));
                    this.classList.add('selected');
                });
            }
        });
    }, 100);
}

// Booking Flow
function startBooking(hotelId) {
    if (!currentUser) {
        showNotification('Please login to book a hotel', 'error');
        showModal('loginModal');
        return;
    }

    const hotel = appData.hotels.find(h => h.id === hotelId);
    const selectedRoom = document.querySelector('.room-option.selected');
    
    if (!selectedRoom) {
        showNotification('Please select a room', 'error');
        return;
    }

    const checkInElement = document.getElementById('bookingCheckIn');
    const checkOutElement = document.getElementById('bookingCheckOut');
    const guestsElement = document.getElementById('bookingGuests');
    
    if (!checkInElement || !checkOutElement || !guestsElement) {
        showNotification('Please fill in all booking details', 'error');
        return;
    }

    const checkIn = checkInElement.value;
    const checkOut = checkOutElement.value;
    const guests = guestsElement.value;

    if (!checkIn || !checkOut) {
        showNotification('Please select check-in and check-out dates', 'error');
        return;
    }

    // Calculate nights and total price
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    const roomPrice = parseInt(selectedRoom.getAttribute('data-price'));
    const totalPrice = nights * roomPrice;

    currentBooking = {
        hotel,
        roomId: parseInt(selectedRoom.getAttribute('data-room-id')),
        roomType: selectedRoom.querySelector('strong').textContent,
        checkIn,
        checkOut,
        guests: parseInt(guests),
        nights,
        roomPrice,
        totalPrice
    };

    renderBookingPage();
    showPage('booking');
}

function renderBookingPage() {
    const booking = currentBooking;
    
    const bookingHTML = `
        <div class="booking-container">
            <div class="booking-steps">
                <div class="step active">
                    <i class="fas fa-user"></i>
                    Guest Information
                </div>
                <div class="step">
                    <i class="fas fa-credit-card"></i>
                    Payment
                </div>
                <div class="step">
                    <i class="fas fa-check"></i>
                    Confirmation
                </div>
            </div>

            <div class="booking-summary">
                <h3>Booking Summary</h3>
                <div class="summary-row">
                    <span>Hotel:</span>
                    <span>${booking.hotel.name}</span>
                </div>
                <div class="summary-row">
                    <span>Room:</span>
                    <span>${booking.roomType}</span>
                </div>
                <div class="summary-row">
                    <span>Check-in:</span>
                    <span>${booking.checkIn}</span>
                </div>
                <div class="summary-row">
                    <span>Check-out:</span>
                    <span>${booking.checkOut}</span>
                </div>
                <div class="summary-row">
                    <span>Guests:</span>
                    <span>${booking.guests}</span>
                </div>
                <div class="summary-row">
                    <span>Nights:</span>
                    <span>${booking.nights}</span>
                </div>
                <div class="summary-row">
                    <span>Rate per night:</span>
                    <span>$${booking.roomPrice}</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span>$${booking.totalPrice}</span>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <h3>Guest Information</h3>
                    <form id="guestInfoForm">
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="guestName" value="${currentUser.name}" required />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" id="guestEmail" value="${currentUser.email}" required />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" id="guestPhone" required />
                        </div>
                        <div class="form-group">
                            <label class="form-label">Special Requests</label>
                            <textarea class="form-control" id="specialRequests" rows="3" placeholder="Any special requests or preferences..."></textarea>
                        </div>
                        <button type="button" class="btn btn--primary" onclick="proceedToPayment()">
                            Proceed to Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.getElementById('booking').innerHTML = bookingHTML;
}

function proceedToPayment() {
    const paymentHTML = `
        <div class="booking-container">
            <div class="booking-steps">
                <div class="step">
                    <i class="fas fa-user"></i>
                    Guest Information
                </div>
                <div class="step active">
                    <i class="fas fa-credit-card"></i>
                    Payment
                </div>
                <div class="step">
                    <i class="fas fa-check"></i>
                    Confirmation
                </div>
            </div>

            <div class="booking-summary">
                <h3>Payment Summary</h3>
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span>$${currentBooking.totalPrice}</span>
                </div>
                <div class="summary-row">
                    <span>Taxes & Fees:</span>
                    <span>$${Math.round(currentBooking.totalPrice * 0.15)}</span>
                </div>
                <div class="summary-row total">
                    <span>Total Amount:</span>
                    <span>$${Math.round(currentBooking.totalPrice * 1.15)}</span>
                </div>
            </div>

            <div class="card">
                <div class="card__body">
                    <h3>Payment Information</h3>
                    <form id="paymentForm">
                        <div class="form-group">
                            <label class="form-label">Card Number</label>
                            <input type="text" class="form-control" placeholder="1234 5678 9012 3456" required />
                        </div>
                        <div class="flex gap-16">
                            <div class="form-group" style="flex: 1;">
                                <label class="form-label">Expiry Date</label>
                                <input type="text" class="form-control" placeholder="MM/YY" required />
                            </div>
                            <div class="form-group" style="flex: 1;">
                                <label class="form-label">CVV</label>
                                <input type="text" class="form-control" placeholder="123" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Cardholder Name</label>
                            <input type="text" class="form-control" required />
                        </div>
                        <button type="button" class="btn btn--primary btn--full-width" onclick="confirmBooking()">
                            Complete Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;

    document.getElementById('booking').innerHTML = paymentHTML;
}

function confirmBooking() {
    // Create new booking
    const newBooking = {
        id: Date.now(),
        userId: currentUser.id,
        hotelId: currentBooking.hotel.id,
        hotelName: currentBooking.hotel.name,
        roomId: currentBooking.roomId,
        roomType: currentBooking.roomType,
        checkIn: currentBooking.checkIn,
        checkOut: currentBooking.checkOut,
        guests: currentBooking.guests,
        totalPrice: Math.round(currentBooking.totalPrice * 1.15),
        status: 'confirmed',
        createdAt: new Date().toISOString()
    };

    // Add to bookings
    appData.bookings.push(newBooking);
    
    // Add to user bookings
    const userBooking = { ...newBooking };
    delete userBooking.userId;
    currentUser.bookings.push(userBooking);

    // Update stored user
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Show confirmation
    const confirmationHTML = `
        <div class="booking-container">
            <div class="booking-steps">
                <div class="step">
                    <i class="fas fa-user"></i>
                    Guest Information
                </div>
                <div class="step">
                    <i class="fas fa-credit-card"></i>
                    Payment
                </div>
                <div class="step active">
                    <i class="fas fa-check"></i>
                    Confirmation
                </div>
            </div>

            <div class="card text-center">
                <div class="card__body">
                    <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--color-success); margin-bottom: 1rem;"></i>
                    <h2>Booking Confirmed!</h2>
                    <p>Your booking has been successfully confirmed. You will receive a confirmation email shortly.</p>
                    
                    <div class="booking-summary">
                        <h3>Booking Details</h3>
                        <div class="summary-row">
                            <span>Booking ID:</span>
                            <span>#${newBooking.id}</span>
                        </div>
                        <div class="summary-row">
                            <span>Hotel:</span>
                            <span>${newBooking.hotelName}</span>
                        </div>
                        <div class="summary-row">
                            <span>Check-in:</span>
                            <span>${newBooking.checkIn}</span>
                        </div>
                        <div class="summary-row">
                            <span>Check-out:</span>
                            <span>${newBooking.checkOut}</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total Paid:</span>
                            <span>$${newBooking.totalPrice}</span>
                        </div>
                    </div>

                    <div class="flex gap-16 justify-center mt-24">
                        <button class="btn btn--primary" onclick="showPage('dashboard')">
                            View My Bookings
                        </button>
                        <button class="btn btn--outline" onclick="showPage('home')">
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('booking').innerHTML = confirmationHTML;
    showNotification('Booking confirmed successfully!', 'success');
}

// Dashboard
function renderDashboard() {
    renderUserBookings();
    updateProfileForm();
    
    // Setup profile form handler
    setTimeout(() => {
        const profileForm = document.getElementById('profileForm');
        if (profileForm) {
            profileForm.addEventListener('submit', handleProfileUpdate);
        }
    }, 100);
}

function renderUserBookings() {
    const container = document.getElementById('userBookings');
    if (!container) return;
    
    const userBookings = appData.bookings.filter(b => b.userId === currentUser.id);

    if (userBookings.length === 0) {
        container.innerHTML = '<p>No bookings found.</p>';
        return;
    }

    container.innerHTML = userBookings.map(booking => `
        <div class="booking-item">
            <div class="booking-header">
                <div>
                    <h4>${booking.hotelName}</h4>
                    <p>${booking.roomType}</p>
                </div>
                <span class="booking-status ${booking.status}">${booking.status}</span>
            </div>
            <div class="flex gap-24">
                <div>
                    <strong>Check-in:</strong> ${booking.checkIn}
                </div>
                <div>
                    <strong>Check-out:</strong> ${booking.checkOut}
                </div>
                <div>
                    <strong>Guests:</strong> ${booking.guests}
                </div>
                <div>
                    <strong>Total:</strong> $${booking.totalPrice}
                </div>
            </div>
        </div>
    `).join('');
}

function updateProfileForm() {
    const nameElement = document.getElementById('profileName');
    const emailElement = document.getElementById('profileEmail');
    
    if (nameElement && emailElement && currentUser) {
        nameElement.value = currentUser.name;
        emailElement.value = currentUser.email;
    }
}

function handleProfileUpdate(e) {
    e.preventDefault();
    const nameElement = document.getElementById('profileName');
    const emailElement = document.getElementById('profileEmail');
    
    if (!nameElement || !emailElement || !currentUser) return;
    
    const name = nameElement.value;
    const email = emailElement.value;

    currentUser.name = name;
    currentUser.email = email;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateAuthUI();
    showNotification('Profile updated successfully!', 'success');
}

// Admin Panel
function renderAdminPanel() {
    renderAdminStats();
    setTimeout(() => {
        renderAdminChart();
    }, 100);
    renderHotelsManagement();
    renderBookingsManagement();
    renderUsersManagement();
    
    // Setup add hotel button
    setTimeout(() => {
        const addHotelBtn = document.getElementById('addHotelBtn');
        if (addHotelBtn) {
            addHotelBtn.addEventListener('click', () => showModal('addHotelModal'));
        }
        
        const addHotelForm = document.getElementById('addHotelForm');
        if (addHotelForm) {
            addHotelForm.addEventListener('submit', handleAddHotel);
        }
    }, 100);
}

function renderAdminStats() {
    const stats = appData.adminStats;
    const totalHotelsEl = document.getElementById('totalHotels');
    const totalBookingsEl = document.getElementById('totalBookings');
    const totalRevenueEl = document.getElementById('totalRevenue');
    const totalUsersEl = document.getElementById('totalUsers');
    
    if (totalHotelsEl) totalHotelsEl.textContent = stats.totalHotels;
    if (totalBookingsEl) totalBookingsEl.textContent = stats.totalBookings;
    if (totalRevenueEl) totalRevenueEl.textContent = `$${stats.totalRevenue.toLocaleString()}`;
    if (totalUsersEl) totalUsersEl.textContent = stats.totalUsers;
}

function renderAdminChart() {
    const canvas = document.getElementById('bookingsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const stats = appData.adminStats;
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Bookings',
                data: stats.monthlyBookings,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderHotelsManagement() {
    const container = document.getElementById('hotelsMgmt');
    if (!container) return;
    
    container.innerHTML = appData.hotels.map(hotel => `
        <div class="mgmt-item">
            <div>
                <h4>${hotel.name}</h4>
                <p>${hotel.location} - $${hotel.price}/night</p>
            </div>
            <div class="mgmt-actions">
                <button class="btn btn--outline btn--sm" onclick="editHotel(${hotel.id})">Edit</button>
                <button class="btn btn--outline btn--sm" onclick="deleteHotel(${hotel.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function renderBookingsManagement() {
    const container = document.getElementById('bookingsMgmt');
    if (!container) return;
    
    container.innerHTML = appData.bookings.map(booking => `
        <div class="mgmt-item">
            <div>
                <h4>Booking #${booking.id}</h4>
                <p>${booking.hotelName} - ${booking.checkIn} to ${booking.checkOut}</p>
                <span class="booking-status ${booking.status}">${booking.status}</span>
            </div>
            <div class="mgmt-actions">
                <button class="btn btn--outline btn--sm" onclick="updateBookingStatus(${booking.id})">Update Status</button>
            </div>
        </div>
    `).join('');
}

function renderUsersManagement() {
    const container = document.getElementById('usersMgmt');
    if (!container) return;
    
    container.innerHTML = appData.users.map(user => `
        <div class="mgmt-item">
            <div>
                <h4>${user.name}</h4>
                <p>${user.email} - ${user.role}</p>
            </div>
            <div class="mgmt-actions">
                <span class="status status--${user.role === 'admin' ? 'info' : 'success'}">${user.role}</span>
            </div>
        </div>
    `).join('');
}

function handleAddHotel(e) {
    e.preventDefault();
    const nameElement = document.getElementById('hotelName');
    const locationElement = document.getElementById('hotelLocation');
    const priceElement = document.getElementById('hotelPrice');
    const descriptionElement = document.getElementById('hotelDescription');
    
    if (!nameElement || !locationElement || !priceElement || !descriptionElement) return;
    
    const name = nameElement.value;
    const location = locationElement.value;
    const price = parseInt(priceElement.value);
    const description = descriptionElement.value;

    const newHotel = {
        id: appData.hotels.length + 1,
        name,
        location,
        price,
        rating: 4.0,
        reviewCount: 0,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
        amenities: ["WiFi", "Restaurant"],
        description,
        rooms: [
            {id: (appData.hotels.length + 1) * 100 + 1, type: "Standard Room", price, available: true, capacity: 2}
        ]
    };

    appData.hotels.push(newHotel);
    appData.adminStats.totalHotels++;
    
    hideModal('addHotelModal');
    renderHotelsManagement();
    showNotification('Hotel added successfully!', 'success');
    
    // Reset form
    nameElement.value = '';
    locationElement.value = '';
    priceElement.value = '';
    descriptionElement.value = '';
}

// Search Function
function handleSearch() {
    const locationElement = document.getElementById('searchLocation');
    const checkInElement = document.getElementById('checkInDate');
    const checkOutElement = document.getElementById('checkOutDate');
    const guestsElement = document.getElementById('guestCount');
    
    if (!locationElement) return;
    
    const location = locationElement.value;
    const checkIn = checkInElement ? checkInElement.value : '';
    const checkOut = checkOutElement ? checkOutElement.value : '';
    const guests = guestsElement ? guestsElement.value : '';

    // Filter hotels by location if provided
    if (location.trim()) {
        filteredHotels = appData.hotels.filter(hotel => 
            hotel.location.toLowerCase().includes(location.toLowerCase()) ||
            hotel.name.toLowerCase().includes(location.toLowerCase())
        );
    } else {
        filteredHotels = [...appData.hotels];
    }

    showPage('hotels');
}

// Utility Functions
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function switchTab(tabId, tabsSelector, contentSelector) {
    // Remove active class from all tabs and content
    document.querySelectorAll(`${tabsSelector} .tab-btn`).forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll(`${contentSelector} .tab-content`).forEach(content => {
        content.classList.remove('active');
    });

    // Add active class to selected tab and content
    document.querySelector(`${tabsSelector} .tab-btn[data-tab="${tabId}"]`).classList.add('active');
    const targetContent = document.getElementById(`${tabId}-tab`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification status status--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 3000;
        padding: 12px 16px;
        border-radius: 8px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, 3000);
}

// CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// Admin functions
function editHotel(hotelId) {
    showNotification('Edit hotel functionality coming soon', 'info');
}

function deleteHotel(hotelId) {
    if (confirm('Are you sure you want to delete this hotel?')) {
        appData.hotels = appData.hotels.filter(h => h.id !== hotelId);
        appData.adminStats.totalHotels--;
        renderHotelsManagement();
        showNotification('Hotel deleted successfully', 'success');
    }
}

function updateBookingStatus(bookingId) {
    const booking = appData.bookings.find(b => b.id === bookingId);
    if (booking) {
        booking.status = booking.status === 'confirmed' ? 'cancelled' : 'confirmed';
        renderBookingsManagement();
        showNotification('Booking status updated', 'success');
    }
}

// Make functions globally available
window.showHotelDetail = showHotelDetail;
window.startBooking = startBooking;
window.proceedToPayment = proceedToPayment;
window.confirmBooking = confirmBooking;
window.changePage = changePage;
window.editHotel = editHotel;
window.deleteHotel = deleteHotel;
window.updateBookingStatus = updateBookingStatus;
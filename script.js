// Data for the schools (replace with your actual data)
const schools = [
    { name: "Advanced Learning Schools", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.53421237937!2d46.6979833150004!3d24.74298198410946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03643ffffffb%3A0x8a735b3d4d6b1e3e!2sAdvanced%20Learning%20Schools!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" },
    { name: "Al-Rowad International Schools", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.53421237937!2d46.6979833150004!3d24.74298198410946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03643ffffffb%3A0x8a735b3d4d6b1e3e!2sAl-Rowad%20International%20School!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" },
    { name: "Saad National School", mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.53421237937!2d46.6979833150004!3d24.74298198410946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03643ffffffb%3A0x8a735b3d4d6b1e3e!2sSaad%20National%20School!5e0!3m2!1sen!2ssa!4v1678886400000!5m2!1sen!2ssa" }
];

const schoolSelect = document.getElementById('school-select');
const mapFrame = document.getElementById('map-frame');
const qrCodeContainer = document.getElementById('qr-code');

// Populate the dropdown menu
schools.forEach(school => {
    const option = document.createElement('option');
    option.value = school.mapUrl;
    option.textContent = school.name;
    schoolSelect.appendChild(option);
});

// Handle dropdown change event
schoolSelect.addEventListener('change', () => {
    const selectedUrl = schoolSelect.value;
    mapFrame.src = selectedUrl;

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';

    if (selectedUrl) {
        // Generate new QR code
        new QRCode(qrCodeContainer, {
            text: selectedUrl,
            width: 128,
            height: 128
        });
    }
});

const school = document.getElementById('school');
const button = document.getElementById('button');
const workingHours = document.getElementById('working-hours-container');
const workingHoursContent = document.getElementById('working-hours-content');
const image = document.getElementById('qrcode');
const url = document.getElementById('schoollocationurl');
const schoolName = document.getElementById('schoolName');
const buttonContainer = document.getElementById('button-container');

// Define schools that DON'T have Saturday hours (exceptions)
const schoolsWithoutSaturday = [
    'مدرسة الياسمين العالمية',
    'مدرسة باكسوود',
    'مدارس الشرق الأوسط الحديثة',
    'مدارس الشرق الأوسط الجديدة'
];

// Function to get working hours based on school name
function getWorkingHours(schoolText) {
    const hasNoSaturday = schoolsWithoutSaturday.some(exceptionSchool => 
        schoolText.includes(exceptionSchool)
    );
    
    if (hasNoSaturday) {
        // These 4 schools only have morning and evening shifts (no Saturday)
        return `
            <p><strong>الفترة الصباحية:</strong></p>
            <p>من 8:00 صباحا حتى 2:00 مساء</p>
            <p><strong>الفترة المسائية:</strong></p>
            <p>من 4:00 مساء حتى 7:00 مساء</p>
        `;
    } else {
        // All other schools have morning, evening, AND Saturday hours
        return `
            <p><strong>الفترة الصباحية:</strong></p>
            <p>من 8:00 صباحا حتى 2:00 مساء</p>
            <p><strong>الفترة المسائية:</strong></p>
            <p>من 4:00 مساء حتى 7:00 مساء</p>
            <p><strong>يوم السبت:</strong></p>
            <p>من 10:00 صباحا حتى 6:00 مساء</p>
        `;
    }
}

school.addEventListener('change', function() {
    if (school.value) {
        // Generate QR code
        QRCode.toDataURL(school.value, function (err, url) {
            if (err) throw err;
            image.src = url;
        });
        
        // Update school location URL
        url.href = school.value;
        
        // Update school name
        schoolName.innerHTML = 'اضغط هنا لفتح الموقع في خرائط جوجل';
        
        // Get the selected school text
        const selectedOption = school.options[school.selectedIndex];
        const schoolText = selectedOption.text;
        
        // Update working hours based on school
        workingHoursContent.innerHTML = getWorkingHours(schoolText);
        
        // Show elements with animation
        workingHours.classList.remove('working-hours-container-hide');
        workingHours.classList.add('fade-animate');
        
        url.classList.add('fade-animate');
        image.classList.add('fade-animate');
        buttonContainer.classList.add('fade-animate');
        
        // Force reflow for animation
        void workingHours.offsetWidth;
        void url.offsetWidth;
        void image.offsetWidth;
        void buttonContainer.offsetWidth;
    }
});

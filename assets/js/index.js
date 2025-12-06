tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                brand: {
                    primary: '#7E2553', // Warna ungu tua sesuai referensi
                    light: '#9c3d6e',
                    bg: '#f8f5fa'
                }
            }
        }
    }
}

 // Fungsi untuk Show/Hide Password
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Simulasi Proses Login
 function handleLogin(event) {
    event.preventDefault(); // Mencegah reload halaman
            
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const submitBtn = document.getElementById('submitBtn');
    const email = document.getElementById('email').value;

    // Tampilkan Loading
    btnText.textContent = "Processing...";
    btnLoader.style.display = "block";
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

    // Simulasi delay request server (2 detik)
    setTimeout(() => {
        // Reset Tombol
        btnText.textContent = "Login";
        btnLoader.style.display = "none";
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');

        // Tampilkan pesan sukses sederhana
        // Dalam aplikasi nyata, ini akan redirect ke dashboard
        alert(`Login Berhasil!\nSelamat datang kembali, ${email}`);
                
    }, 2000);
 }
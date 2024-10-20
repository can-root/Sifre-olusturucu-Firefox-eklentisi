document.getElementById('length').addEventListener('input', (e) => {
    document.getElementById('selected-length').innerText = e.target.value;
    document.getElementById('error').innerText = '';
});

document.getElementById('generate').addEventListener('click', () => {
    const uzunluk = parseInt(document.getElementById('length').value);
    if (uzunluk < 8 || uzunluk > 64) {
        document.getElementById('error').innerText = 'Lütfen uzunluğu 8 ile 64 arasında bir değer olarak girin.';
        document.getElementById('result').innerText = '';
        return;
    }
    const sifre = rastgeleSifreOlustur(uzunluk);
    document.getElementById('result').innerText = sifre;
    document.getElementById('error').innerText = '';
});

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

function rastgeleSifreOlustur(uzunluk) {
    const karakterSeti = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let sifre = "";
    for (let i = 0; i < uzunluk; i++) {
        const rastgeleIndeks = Math.floor(Math.random() * karakterSeti.length);
        sifre += karakterSeti[rastgeleIndeks];
    }
    return sifre;
}

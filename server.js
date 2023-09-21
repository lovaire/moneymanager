const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint untuk registrasi pengguna
app.post('/register', (req, res) => {
    // Implementasi registrasi pengguna
});

// Endpoint untuk login pengguna
app.post('/login', (req, res) => {
    // Implementasi login pengguna
});

// Endpoint untuk menambahkan pemasukan
app.post('/income', (req, res) => {
    // Implementasi penyimpanan pemasukan
});

// Endpoint untuk menambahkan pengeluaran
app.post('/expense', (req, res) => {
    // Implementasi penyimpanan pengeluaran
});

// Endpoint untuk mengambil saldo
app.get('/balance', (req, res) => {
    // Implementasi pengambilan saldo
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});

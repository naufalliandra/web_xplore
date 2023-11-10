# Web Xplore
<p align="center" style="padding-top: 100px; padding-bottom: 100px;">
  <a href="https://web-xplore-orpin.vercel.app/" target="_blank">
    <img src="https://res.cloudinary.com/duvtd590q/image/upload/v1699623585/logo_webXplore_nobg_bekyx5.svg" width="400" alt="Web Xplore Logo">
  </a>
</p>


Web Xplore adalah sebuah platform pembelajaran pemrograman web yang fokus pada bahasa HTML, CSS, dan Javascript. Website ini menyediakan beragam materi pembelajaran untuk membantu individu memahami dan menguasai dasar-dasar pemrograman web. Dengan akses ke tutorial dan sumber daya gratis, Web Xplore memungkinkan pemula dan pengembang web yang berpengalaman untuk belajar dan meningkatkan keterampilan mereka dalam bahasa pemrograman web. Dengan fokus pada pendidikan, situs ini adalah sumber daya berharga bagi siapa saja yang tertarik untuk menjelajahi dunia pemrograman web.

# Link Website
https://web-xplore-orpin.vercel.app/

# Fitur dan Cara Penggunaan
- Pendaftaran Akun

  Fitur ini merupakan langkah pertama yang harus diambil oleh pengguna yang ingin mengakses materi pembelajaran yang tersedia di website ini. Dengan fitur ini, pengguna dapat membuat akun pribadi dengan mengisi informasi, seperti email, nama lengkap, dan kata sandi.
- Masuk
  
  Fitur ini merupakan langkah selanjutnya jika pengguna sudah memiliki akun. Pada fitur ini pengguna diminta memasukkan email dan kata sandi yang telah didaftarkan pada halaman pendaftaran sebelumnya. Setelah masuk, barulah pengguna akan mendapatkan akses untuk mengikuti seluruh materi pembelajaran yang tersedia di website ini.
- Beranda
  
  Beranda adalah halaman awal yang memberikan gambaran umum tentang sumber daya dan materi pemrograman web yang tersedia di website ini. Pengguna akan menemukan informasi singkat mengenai fitur dan materi yang tersedia di website ini.
- Kursus/Materi
  
  Fitur ini merupakan tempat di mana pengguna dapat menemukan beragam materi pemrograman web dengan deskripsi dan pilihan berdasarkan bahasa pemrogramannya.
- Profil
  
  Fitur "Profil" di Web Xplore adalah tempat di mana pengguna dapat mengelola informasi pribadi pengguna, termasuk foto profil, nama lengkap, alamat, nomor telepon, dan alamat email. Dengan fitur "Edit Profile," pengguna memiliki kemampuan untuk memperbarui dan mempersonalisasi informasi ini sesuai kebutuhan.

# UI Kit
| Color     | Hex     | 
| ---       | ---     | 
| Primary   | #0E5895 |
| Secondary | #1669AD |
| Neutral   | #FFFFFF |
| Error     | #DC3545 |

# Rancangan Basis Data
Tabel Data Pasien
| No  | Nama Kolom | Tipe Data | Panjang Data | Contoh Data |
|:--- | :---       | :---      | :---         | :---        |
|1    | id         | int       | 11           | 1           |
|2    | nama       | varchar   | 255          | 'Faishal'   |
|3    | nik        | varchar   | 255          | '1234567890'|

Tabel Data Pasiens(Daftar ke faskes)
| No  | Nama Kolom    | Tipe Data | Panjang Data | Contoh Data         |
|:--- | :---          | :---      | :---         | :---                |
|1    | id            | int       | 11           | 24                  |
|2    | poliklinik    | varchar   | 32           | '2'                 |
|3    | tanggal       | date      | -            | 2023-10-30          |
|4    | nomor_antrean | varchar   | 255          | '20231030005'       |
|5    | nik           | varchar   | 32           | '1234567890'        |
|6    | updated_at    | timestamp | -            | 2023-10-29 03:09:12 |
|7    | cretaed_at    | time      | -            | 10:09:12            |

Tabel User
| No  | Nama Kolom        | Tipe Data | Panjang Data | Contoh Data                 |
|:--- | :---              | :---      | :---         | :---                        |
|1    | id                | bigint    | 20           | 6                           |
|2    | name              | varchar   | 255          | 'Apriandhita Aries Prayoga' |            
|3    | email             | varchar   | 255          | 'apriandhitaaries@gmail.com'|
|4    | email_verified_at | timestamp | -            | NULL                        |
|5    | password          | varchar   | 255          | 'ghefirasm24'               |
|6    | remeber_token     | varchar   | 100          | NULL                        |
|7    | updated_at        | timestamp | -            | 2023-10-29 15:50:42         |
|8    | cretaed_at        | timestamp | -            | 2023-10-29 15:50:42         |

# Data Pasien Untuk Mendaftar
Gunakan NIK data pasien berikut jika anda ingin mendaftar ke dalam faskes MedEase:
| Id  | Nama Pasien      | NIK            | 
|:--- | :---             | :---           | 
|1    | Faishal          | 1234567890     | 
|2    | Resty            | 0987654321     | 
|3    | John Doe         | 1111111111     | 
|4    | Jane Doe         | 2222222222     | 
|5    | Bob Smith        | 3333333333     | 
|6    | Alice Johnson    | 4444444444     | 
|7    | Michael Brown    | 5555555555     | 
|8    | Emily Davis      | 6666666666     | 
|9    | William Wilson   | 7777777777     | 
|10   | Olivia Taylor    | 8888888888     | 
|11   | James Jones      | 9999999999     | 
|12   | Sophia Harris    | 1010101010     | 

# Pengembang Website MedEase (Medical Ease)
  - Faishal Fariz Hidayatullah (215150607111014)
  - Apriandhita Aries Prayoga  (215150607111019)
  - Resty Cahyani Pradita      (215150601111016)

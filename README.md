# DISJA : Aplikasi Pekerjaan untuk Penyandang Disabilitas

## Cara mendownload project ini :

- Bisa dikloning dengan cara git clone https://github.com/dvidchandra/disja.git atau download zip
- Setelah dikloning atau didownload, maka buka aplikasi text editor seperti Visual Studio Code, dan lainnya.

## Cara memakai project ini :

- Di bagian terminal, install dependencies terlebih dahulu
  npm install --> Bagi pengguna npm
  yarn add --> Bagi pengguna yarn

  Dan juga install dependencies json-server untuk Rest API di terminal yang berbeda (misalnya cmd)
  npm install json-server
  yarn add json-server

- Setelah dilakukan penginstalan pada dependencies, maka jalankan project ini di terminal
  npm run start --> Bagi pengguna npm
  yarn start --> Bagi pengguna yarn

  Dan juga jalankan json-server untuk Rest API pada terminal yang berbeda (misalnya di cmd atau git bash)
  json-server --watch db.json --port 3004

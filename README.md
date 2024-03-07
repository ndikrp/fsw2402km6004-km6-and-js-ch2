# Binar: Challenge 02
Fullstack Web Development Challenge 2 Binar Academy - FSW2402KM6004 Andhika Rizky Aulia  

# How to Use
1. `git clone https://github.com/ndikrp/f-fsw24001086-km6-and-js-ch2.git`
2. `npm install`
3. run using start script
   - a. `npm run start`
   run in development
   - b. `npm run dev`
4. click the link in the terminal or enter `http://localhost:3000` in your web browser
5. Done

# Challenge Template by https://github.com/FikriRNurhidayat
- Mulai modifikasi file `server/index.js` apabila ingin membuat HTTP server.
- Mulai modifikasi folder `public` apabila ingin memodifikasi HTML.

# `Binar` class

Class ini berisi 1 static method saja, yang berfungsi untuk mengambil data mobil dari internet.

```typescript
interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

interface Binar {
  listCars(filterer: (car: Car) => boolean): Array<Car>
}
```

Method `listCars` ini akan menerima fungsi yang mana harus mengembalikan `boolean` sebagai nilainya. 
Fungsi ini akan dijalankan untuk masing-masing item di dalam list of cars, yang mana jika nilainya `true`,
maka akan ditampilkan di dalam list tersebut.

# Tips

Just, hack it bro!

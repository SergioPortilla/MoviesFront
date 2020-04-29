export class User {

  Dni: number;
  Name: string;
  LastName: string;
  QuantityMovies: number;


  constructor(Dni: number, Name: string, LastName: string, QuantityMovies: number) {
    this.Dni = Dni;
    this.Name = Name;
    this.LastName = LastName;
    this.QuantityMovies = QuantityMovies;
  }

  static createMock() {
    return new User(null, '', '', 0);
  }
}

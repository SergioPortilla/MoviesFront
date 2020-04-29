export class MovieAdd {

  Title: string;
  Duration: number;
  Synopsis: string;
  UrlImg: string;

  constructor(Title: string, Duration: number, Synopsis: string, UrlImg: string) {
    this.Title = Title;
    this.Duration = Duration;
    this.Synopsis = Synopsis;
    this.UrlImg = UrlImg;
  }

  static createMock() {
    return new MovieAdd('', 0, '', '');
  }

}

export class Movie {
  Id: string;
  Title: string;
  Duration: number;
  Synopsis: string;
  UrlImg: string;

}

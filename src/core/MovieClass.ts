/*
EXAMPLE:
popularity	48.058
vote_count	351
video	false
poster_path	"/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg"
id	696374
adult	false
backdrop_path	"/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg"
original_language	"en"
original_title	"Gabriel's Inferno"
genre_ids	[…]
title	"Gabriel's Inferno"
vote_average	8.9
overview	"An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love."
release_date	"2020-05-29"
*/

export class MovieClass {
  title: string;
  posterPath: string;
  popularity: number;

  constructor(data: any) {
    this.title = data.title;
    this.posterPath = data.poster_path;
    this.popularity = data.popularity;
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { from, map, Observable } from 'rxjs';
import { Genre, Movie, MovieResponse } from './types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MoviesService {
  private readonly baseUrl = 'https://api.themoviedb.org/3';
  private readonly bearerToken: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.bearerToken = this.configService.get<string>('API_READ_ACCESS_TOKEN')!;
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.bearerToken}`,
    };
  }

  getMovies(page: number, sortBy: string): Observable<MovieResponse> {
    return this.httpService
      .get<MovieResponse>(`${this.baseUrl}/discover/movie`, {
        headers: this.getHeaders(),
        params: {
          page,
          sort_by: sortBy,
        },
      })
      .pipe(map((response: AxiosResponse<MovieResponse>) => response.data));
  }

  getNowPlayingMovies(): Observable<MovieResponse> {
    return this.httpService
      .get<MovieResponse>(`${this.baseUrl}/movie/now_playing`, {
        headers: this.getHeaders(),
      })
      .pipe(map((response: AxiosResponse<MovieResponse>) => response.data));
  }

  searchMovie(movieName: string): Observable<MovieResponse> {
    return this.httpService
      .get<MovieResponse>(`${this.baseUrl}/search/movie`, {
        headers: this.getHeaders(),
        params: {
          query: movieName,
        },
      })
      .pipe(map((response: AxiosResponse<MovieResponse>) => response.data));
  }

  getMovieById(movieId: string): Observable<Movie> {
    return this.httpService
      .get<Movie>(`${this.baseUrl}/movie/${movieId}`, {
        headers: this.getHeaders(),
      })
      .pipe(map((response: AxiosResponse<Movie>) => response.data));
  }

  getGenres(): Observable<Genre[]> {
    return this.httpService
      .get<{ genres: Genre[] }>(`${this.baseUrl}/genre/movie/list`, {
        headers: this.getHeaders(),
      })
      .pipe(map((response: AxiosResponse<{ genres: Genre[] }>) => response.data.genres));
  }
}

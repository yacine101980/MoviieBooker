import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Genre, Movie, MovieResponse } from './types';
import { Observable } from 'rxjs';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get('/movies')
    @ApiOperation({ summary: 'List of movies' })
    @ApiResponse({ status: 200, description: 'Successful' })
    getMovies(
    @Query('page') page: number,
    @Query('sort_by') sortBy: string,
    ): Observable<MovieResponse> {
    return this.moviesService.getMovies(page, sortBy);
    }

    @Get('movie/now_playing')
    @ApiOperation({ summary: 'Movies playing now' })
    @ApiResponse({ status: 200, description: 'Movies playing now' })
    getNowPlayingMovies(): Observable<MovieResponse> {
    return this.moviesService.getNowPlayingMovies();
    }

    @Get('/search/movie')
    @ApiOperation({ summary: 'Search movie' })
    @ApiResponse({ status: 200, description: 'Successful' })
    searchMovie(@Query('movie_name') movieName: string): Observable<MovieResponse> {
    return this.moviesService.searchMovie(movieName);
    }

    @Get('/movie/:movie_id')
    @ApiOperation({ summary: 'Movie by id' })
    @ApiResponse({ status: 200, description: 'Successful' })
    getMovieById(@Param('movie_id') movieId: string): Observable<Movie> {
    return this.moviesService.getMovieById(movieId);
    }

    @Get('/genre/movie/list')
    @ApiOperation({ summary: 'List of genres' })
    @ApiResponse({ status: 200, description: 'Successful' })
    getGenres(): Observable<Genre[]> {
    return this.moviesService.getGenres();
    }
}

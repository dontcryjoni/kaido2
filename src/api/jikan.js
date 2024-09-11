import { useQuery } from 'react-query';
import { queueRequest } from './apiQueue';

const queryConfig = {
  staleTime: 2.1 * 60 * 1000, // 2.1 minutes
};

// Custom hook for fetching data
function useFetch(queryKey, endpoint) {
  return useQuery(queryKey, () => queueRequest(endpoint), queryConfig);
}

// Example usage in a component
export function useMangaReviews() {
  return useFetch('top-manga-reviews', 'reviews/manga');
}

export function useAnimeReviews() {
  return useFetch('top-anime-reviews', 'reviews/anime');
}

export function useTopAiring() {
  return useFetch('top-airing', 'top/anime?filter=airing&limit=4');
}

export function useMostPopular() {
  return useFetch('most-popular', 'top/anime?filter=bypopularity&limit=4');
}

export function useMostFavorite() {
  return useFetch('most-favorite', 'top/anime?filter=favorite&limit=4');
}

export function useTopMovies() {
  return useFetch('top-movies', 'top/anime?type=movie&filter=bypopularity&limit=12');
}

export function useTopOVAs() {
  return useFetch('top-OVAs', 'top/anime?type=ova&filter=bypopularity&limit=12');
}

export function useTopONAs() {
  return useFetch('top-ONAs', 'top/anime?type=ona&filter=bypopularity&limit=12');
}

export function useTopSpecials() {
  return useFetch('top-specials', 'top/anime?type=special&filter=bypopularity&limit=12');
}

export function useTopUpcoming() {
  return useFetch('top-upcoming', 'top/anime?filter=upcoming&limit=4');
}

export function useGenre() {
  return useFetch('genre', 'genres/anime');
}

export function useTopCharacters() {
  return useFetch('top-characters', 'top/characters?limit=5');
}

export function useAnimeByMalId(id) {
  return useFetch(`anime-${id}`, `anime/${id}`);
}

export function useAnimeByGenre(mal_id) {
  return useFetch(`anime-by-genre-${mal_id}`, `anime?genres=${mal_id}&limit=24`);
}

export function useAnimeByFilter(filterName) {
  return useFetch(`anime-by-filter-${filterName}`, `top/anime?filter=${filterName}&limit=24`);
}

export function useAnimeByType(type) {
  return useFetch(`anime-by-type-${type}`, `top/anime?type=${type}&limit=24`);
}

export function useRecommendedAnime() {
  return useFetch('recommended-anime', `anime?limit=24&status=airing&filter=bypopularity&type=tv&order_by=popularity`);
}

export function useRandomAnime() {
  return useFetch('random-anime', 'random/anime');
}

export function useAnimeSearch(name, parameter) {
  const queryString = parameter === 'title' ? `q=${name}` : `letter=${name}`;
  return useFetch(`anime-search-${name}`, `anime?${queryString}&sfw=true&order_by=rank&limit=24`);
}

  return handleJikanResponse(
    `anime-search${name}`,
    `anime?${queryString}&sfw=true&order_by=rank&limit=24`
  );
}

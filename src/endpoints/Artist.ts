import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  Artist as ArtistProfile,
  Artists,
  Tracks,
  GetTrackParams as GetMarketParams,
  OptionalArtistAlbumParams,
  ArtistAlbumResult,
} from '../types/index.js';
import { joinIdsArrayToString } from '../utils.js';

export class Artist extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artist
   */
  getArtist(id: string) {
    return this.get<ArtistProfile>(`/artists/${id}`);
  }

  /**
   * Get Spotify catalog information for several artists based on their Spotify IDs
   * https://developer.spotify.com/documentation/web-api/reference/get-multiple-artists
   */
  getArtists(ids: string[]) {
    return this.get<Artists>(`/artists`, { ids: joinIdsArrayToString(ids) });
  }

  /**
   * Get Spotify catalog information about an artist's albums
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
   */
  getArtistAlbums(artistId: string, optionalParams?: OptionalArtistAlbumParams) {
    return this.get<ArtistAlbumResult>(`/artists/${artistId}/albums`, optionalParams);
  }

  /**
   * Get Spotify catalog information about an artist's top tracks by country
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
   */
  getArtistTopTracks(id: string, optionalParams?: GetMarketParams) {
    return this.get<Tracks>(`/artists/${id}/top-tracks`, optionalParams);
  }

  /**
   * Get Spotify catalog information about artists similar to a given artist.
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artists-related-artists
   */
  getRelatedArtists(id: string) {
    return this.get<{ artists: ArtistProfile }>(`/artists/${id}/related-artists`);
  }
}

export default Artist;

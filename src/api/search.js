// Axios para hacer la llamada HTTP
import { get } from "axios";
// Store, donde tenemos almacenado nuestro token
import store from "../store/index";
// Útil de regiones, que nos devolverá el 'locale' por defecto correspondiente a cada región
import { locales } from "../utils/regions";

// API URL
// https://{region}.api.blizzard.com, donde {region} puede ser 'us', 'eu', 'kr' o 'tw'
const protocol = "https://";
const host = ".api.blizzard.com/";

function getApiAccount({ region, account }) {
  // Recurso de la API al que queremos acceder
  const resource = `d3/profile/${account}/`;
  // API URL completa
  const API_URL = `${protocol}${region}${host}${resource}`;
  // Locale
  const locale = locales[region];

  // Parámetros:
  // - Token de acceso (recuperado desde Vuex)
  // - Locale
  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };
  return get(API_URL, { params });
}

function getApiHero({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

function getApiDetailedHeroItems({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`;
  const API_URL = `${protocol}${region}${host}${resource}`;
  const locale = locales[region];

  const params = {
    access_token: store.state.oauth.accessToken,
    locale,
  };

  return get(API_URL, { params });
}

export { getApiAccount, getApiHero, getApiDetailedHeroItems };

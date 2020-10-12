import types from './types';
import YtService from '../../services/YtService';

export const getVideos = async function (dispatch, search = null) {
  dispatch({ type: types.LOADING, data: true });

  try {
    // const data = await YtService.getVideos(search);
    const data = {
      kind: 'youtube#searchListResponse',
      etag: 'c1gRK_FTd22JwtTagyf_GZ6QsCY',
      nextPageToken: 'CAoQAA',
      regionCode: 'AR',
      pageInfo: {
        totalResults: 235581,
        resultsPerPage: 10,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'Jzna7yOAXeZyuhDZvxkHADo6hzQ',
          id: {
            kind: 'youtube#video',
            videoId: 'WIgKauYuYHU',
          },
          snippet: {
            publishedAt: '2020-10-05T19:00:04Z',
            channelId: 'UCSDsRtYwcZg_paK7KVlx4Xg',
            title: 'Cuando DEBES EMPEZAR a JUGAR RANKEDS? | CONSEJOS y ERRORES COMUNES | GUIA LOL',
            description:
              'DISCORD: https://discord.gg/Ps6yVXJ REDES SOCIALES: TWITTER: https://twitter.com/TenYashaLOL INSTAGRAM: https://www.instagram.com/profesortenya/ .',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/WIgKauYuYHU/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/WIgKauYuYHU/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/WIgKauYuYHU/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'TenYasha LOL',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-05T19:00:04Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '4BOGYn9QilROs5qKHhVZFRvUBAI',
          id: {
            kind: 'youtube#video',
            videoId: 'wx6iS7f6B4o',
          },
          snippet: {
            publishedAt: '2020-08-20T14:30:05Z',
            channelId: 'UCCTS6nIrauyFfMLEuUJNmrQ',
            title:
              '¿Cómo EMPEZAR a jugar RANKED en LOL en 2020 ?✔️ CONSEJOS PARA JUGAR TUS 10 PRIMERAS CLASIFICATORIAS',
            description:
              'Te doy algunos consejos fundamentales para tus 10 PRIMERAS RANKEDS CLASIFICATORIAS en esta season 2020. Si estás aquí es porque quieres SUBIR ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/wx6iS7f6B4o/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/wx6iS7f6B4o/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/wx6iS7f6B4o/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Guannai',
            liveBroadcastContent: 'none',
            publishTime: '2020-08-20T14:30:05Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '1yZWdU-6DGZNiG_YBfhQPElFViw',
          id: {
            kind: 'youtube#video',
            videoId: '6UitSF8-tiY',
          },
          snippet: {
            publishedAt: '2020-06-27T18:30:10Z',
            channelId: 'UCvmQ3hjgvtovnyktGuXX3xw',
            title:
              'QUIERES EMPEZAR A JUGAR RANKED EN SMITE? TODO  lo que DEBES SABER para EMPEZAR a jugar LIGAS | GUÍA',
            description:
              'Guía básica de SMITE | En éste vídeo les otorgaré ciertos consejos con los cuales pueden determinar si ya son aptos para empezar a jugar Ranked en SMITE, ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/6UitSF8-tiY/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/6UitSF8-tiY/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/6UitSF8-tiY/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'GaKoYT',
            liveBroadcastContent: 'none',
            publishTime: '2020-06-27T18:30:10Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'WkevR3-XoG43qRVtXy-Xb_m7HpM',
          id: {
            kind: 'youtube#video',
            videoId: '226afRnEhg0',
          },
          snippet: {
            publishedAt: '2020-05-23T00:00:11Z',
            channelId: 'UC4Ts46xuv_MPr5vcpXSauOg',
            title: '¿Cuándo EMPEZAR a jugar RANKED en LoL? 🤔 (Mi PRIMERA RANKED 😱)',
            description:
              'Cuándo empezar a jugar ranked en lol? Es una pregunta muy frecuente entre los que van iniciando en este juego; sin embargo, en este video te enseño por ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/226afRnEhg0/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/226afRnEhg0/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/226afRnEhg0/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Campeando & Manqueando',
            liveBroadcastContent: 'none',
            publishTime: '2020-05-23T00:00:11Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'GxVfE62q58iWs9aOIS7pOKGC7sg',
          id: {
            kind: 'youtube#video',
            videoId: 'A1n3OE6TjSE',
          },
          snippet: {
            publishedAt: '2020-03-22T01:02:15Z',
            channelId: 'UCGUYXAWudXyHkHASc5kSEsQ',
            title: 'Quieres empezar a jugar Rankeds SOLO/DUO en tu cuarentena?? Mira este video.',
            description:
              'Canal de Twitch uwu : https://www.twitch.tv/ardeon112 Pagina de Facebook owo: https://www.facebook.com/ardeon112/',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/A1n3OE6TjSE/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/A1n3OE6TjSE/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/A1n3OE6TjSE/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'salava6661',
            liveBroadcastContent: 'none',
            publishTime: '2020-03-22T01:02:15Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'nIj1DFDfYdsnjJDS5oYDnj3GhVQ',
          id: {
            kind: 'youtube#video',
            videoId: 'HOL1cW8_e5I',
          },
          snippet: {
            publishedAt: '2018-08-05T18:00:01Z',
            channelId: 'UCHpxTb4Jmo5fmDlVBl-9j6g',
            title: '¿LOS MEJORES CAMPEONES PARA EMPEZAR A JUGAR O RANKEAR EN LEAGUE OF LEGENDS?',
            description:
              'Buenas! Hoy os traigo una reflexión sobre cuáles son los campeones ideales para vosotros en base a lo que es realmente importante para empezar a jugar ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/HOL1cW8_e5I/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/HOL1cW8_e5I/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/HOL1cW8_e5I/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Manute',
            liveBroadcastContent: 'none',
            publishTime: '2018-08-05T18:00:01Z',
          },
        },
      ],
    };

    dispatch({ type: types.GET_VIDEOS, data });
  } catch (error) {
    if (error.response) {
      dispatch({
        type: types.GET_VIDEOS_ERROR,
        data: true,
      });
    }
  }
};

export const selectVideo = async function (dispatch, videoId) {
  dispatch({ type: types.SELECT_VIDEO, data: videoId });
};

export default {
  getVideos,
  selectVideo,
};

import types from './types';
import YtService from '../../services/YtService';

export const getVideos = async function (dispatch) {
  dispatch({ type: types.LOADING, data: true });

  try {
    // const data = await YtService.getVideos();
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

export const searchVideos = async function (dispatch, search) {
  dispatch({ type: types.SEARCHING_VIDEOS, data: true });

  try {
    // const data = await YtService.getVideos(search);
    const data = {
      kind: 'youtube#searchListResponse',
      etag: 'aL27FWzA6yoircoZFtb_139heRw',
      nextPageToken: 'CAoQAA',
      regionCode: 'AR',
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 10,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'IipAB7Z8H3bYbuT8QRUAmqvM5AA',
          id: {
            kind: 'youtube#video',
            videoId: 'ZZII-jPnerg',
          },
          snippet: {
            publishedAt: '2020-10-13T06:30:02Z',
            channelId: 'UCSXOsOIzeJqJb4h0QlimDww',
            title: 'Tata Harrier Owner&#39;s Review - Owner shares her experience',
            description:
              "Tata Harrier Owner's Review - Owner shares her experience. How is the Harrier to buy? We share all the details of this car with you. Check it out in detail.",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/ZZII-jPnerg/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/ZZII-jPnerg/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/ZZII-jPnerg/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'MotorOctane',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-13T06:30:02Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '4nsHx_Tfbuy4RCbKMnqUUUKwZFU',
          id: {
            kind: 'youtube#video',
            videoId: '66tb38dGRzE',
          },
          snippet: {
            publishedAt: '2020-10-13T03:53:38Z',
            channelId: 'UCJg9wBPyKMNA5sRDnvzmkdg',
            title: 'LIVE: Top Stories And Headlines',
            description:
              "Watch what's happening right NOW from FOX. We are a non-stop stream of breaking news, live events and stories taking place across the nation. Experience ...",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/66tb38dGRzE/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/66tb38dGRzE/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/66tb38dGRzE/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'NewsNOW from FOX',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-13T03:53:38Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'Tx47YnLyLyz3EzTX68d8uIUi03U',
          id: {
            kind: 'youtube#video',
            videoId: 'oABwWPssoK8',
          },
          snippet: {
            publishedAt: '2020-10-13T03:20:58Z',
            channelId: 'UCq0grzC77X9UZd9xngQRTjg',
            title: 'Mike Badgley Misses Game-Winning Field Goal vs. Saints | NFL Week 5',
            description:
              'Mike Badgley Misses Game-Winning Field Goal vs. Saints | NFL Week 5 Discord Server: https://discord.gg/98YJQff Archive Channel: ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/oABwWPssoK8/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/oABwWPssoK8/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/oABwWPssoK8/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Highlight Heaven',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-13T03:20:58Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'GZK08EswinAXjGZ5d5etJtdrFWE',
          id: {
            kind: 'youtube#video',
            videoId: 'ZpOrYrhVHu8',
          },
          snippet: {
            publishedAt: '2020-10-13T01:21:41Z',
            channelId: 'UCqmZBc7T8J5TFuRT5uf-j_g',
            title: 'Córdoba: fuego y peligro',
            description:
              'Una grabación registra el momento en el que las llamas avanzan sobre los surtidores de combustible ubicados a la vera de la autopista que une Córdoba y ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/ZpOrYrhVHu8/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/ZpOrYrhVHu8/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/ZpOrYrhVHu8/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Televisión Pública Noticias',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-13T01:21:41Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'H1MOc2s7tn2wIab8WXzEQMz-W_0',
          id: {
            kind: 'youtube#video',
            videoId: 'KgIihfbbmHU',
          },
          snippet: {
            publishedAt: '2020-10-12T23:12:29Z',
            channelId: 'UCUJTqPyDqe2-wH6xFaFamdg',
            title: 'Port of the Year: Icy Strait Point, Alaska',
            description:
              'Congratulations to Icy Strait Point, Alaska for being named "Port of the Year." ---------- Official Celebrity Cruises Website: https://www.CelebrityCruises.com ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/KgIihfbbmHU/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/KgIihfbbmHU/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/KgIihfbbmHU/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Celebrity Cruises',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T23:12:29Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'O_qs6XZNcl5F-qPhPhUVb-WZ5G8',
          id: {
            kind: 'youtube#video',
            videoId: 'wVfXwciNbyI',
          },
          snippet: {
            publishedAt: '2020-10-12T22:37:50Z',
            channelId: 'UCWGrtxO6JrPSDUcgp3Qm_Gw',
            title: 'South West England Tableau User Group - 1 October 2020',
            description:
              'Agenda: Transforming our Data & Reporting Landscape - Sarah Turner, National Trust Finance | Reimagined is a TP workbook - Gary is the Director of Finance ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/wVfXwciNbyI/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/wVfXwciNbyI/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/wVfXwciNbyI/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Tableau Software',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T22:37:50Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'pUSLvxGB0LVY-ZVlfwHHcE2fO9I',
          id: {
            kind: 'youtube#video',
            videoId: 'kplu4djy5LU',
          },
          snippet: {
            publishedAt: '2020-10-12T18:58:30Z',
            channelId: 'UCJCreS7pODbA6XYRsI5fdLg',
            title: 'RECIPE: Chef Kevin Belton&#39;s Chicken and Andouille Gumbo',
            description:
              'Chicken and Andouille Gumbo Stock 4 - 4 1/2 pound chicken, rinsed 20 cups water 1 onion, halved 2 ribs of celery, coarsely chopped 8 garlic cloves 2 bay ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/kplu4djy5LU/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/kplu4djy5LU/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/kplu4djy5LU/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'WWLTV',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T18:58:30Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'iCHli1J7U3EPSMT801zTXMD0yLs',
          id: {
            kind: 'youtube#video',
            videoId: '0tJKeQs9pTk',
          },
          snippet: {
            publishedAt: '2020-10-12T16:36:48Z',
            channelId: 'UCoMWImnPAur6JhXDK63dpAg',
            title:
              '🔴Noticia - Seis regiones españolas se encuentran entre las más vulnerables de la UE por la pandemia',
            description:
              'Las comunidades autónomas de Madrid, Cataluña, Valencia, Andalucía, Baleares y Castilla y León se encuentran entre las regiones de la Unión Europea más ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/0tJKeQs9pTk/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/0tJKeQs9pTk/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/0tJKeQs9pTk/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Málaga 24h TV Noticias',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T16:36:48Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'SVLddC33sSRCd3nz_GK0yXNT46k',
          id: {
            kind: 'youtube#video',
            videoId: 'QAI6JfYskb4',
          },
          snippet: {
            publishedAt: '2020-10-12T15:16:07Z',
            channelId: 'UCxIZIvwA2ZG0XWRlBCEzBPQ',
            title: 'From Thoracic Surgery Triage to Service Reactivation: How to Protect Yourself',
            description:
              'This video discusses how thoracic surgeons can protect themselves during worst-case scenarios during the COVID-19 pandemic, from case triage to service ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/QAI6JfYskb4/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/QAI6JfYskb4/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/QAI6JfYskb4/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'CTSNetVideo',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T15:16:07Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'FAkP3mQRXKzXCxlIeSpJLMlzTDo',
          id: {
            kind: 'youtube#video',
            videoId: 'IFk0z8iaejg',
          },
          snippet: {
            publishedAt: '2020-10-12T15:07:12Z',
            channelId: 'UCupvZG-5ko_eiXAupbDfxWw',
            title: 'Covid-19 cases are rising sharply in parts of Europe',
            description:
              'The novel coronavirus has infected more than 37 million people worldwide and caused more than a million deaths. In Germany, Covid-19 cases are rising ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/IFk0z8iaejg/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/IFk0z8iaejg/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/IFk0z8iaejg/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'CNN',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-12T15:07:12Z',
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
  searchVideos,
  selectVideo,
};

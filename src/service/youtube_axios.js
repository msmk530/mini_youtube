import axios from 'axios';

class Youtube {
  constructor(key) {
    this.yotube = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: key },
    });
  }

  async mostPopular() {
    const res = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });

    return res.data.items;
  }

  async search(query) {
    const res = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      },
    });
    return res.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Youtube;

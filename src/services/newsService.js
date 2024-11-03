// src/services/newsService.js
const newsService = {
    getNews: async () => {
      // Mocked response simulating a news API call
      return [
        {
          title: 'Breaking News: Market Hits All-Time High',
          description: 'The stock market reached a new high today as investors react positively to the latest economic data.',
          publishedAt: '2024-11-03T10:00:00Z',
        },
        {
          title: 'Tech Giant Announces New Product',
          description: 'A major tech company has announced the release of its latest gadget, creating excitement in the industry.',
          publishedAt: '2024-11-02T15:00:00Z',
        },
      ];
    },
  };
  
  export default newsService;
  
var appId = '19d9d1d0608248e6995d8128104f8d39f17cf214a470a551fb02ef70b1969e7d';
new Vue ({
  el: '#app',
  data: {
    photos: [],
    totalPhotos: 0,
    perPage: 9,
    currentPage: 1
  },
  methods: {
    fetchPhotos: function (page) {
      var options = {
        params: {
          client_id: appId,
          page: page,
          per_page: this.perPage
        }
      }

      this.$http.get('https://api.unsplash.com/photos', options)
        .then(function (response) {
          this.photos = response.data

          this.totalPhotos = parseInt(response.headers.get('x-total'));

          this.currentPage = page;
        })
    }
  },
  created: function () {
    this.fetchPhotos(this.currentPage)
  }
});

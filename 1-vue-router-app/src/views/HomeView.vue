<template>
  <div class="d-flex justify-content-end">
    <button class="btn btn-primary btn-sm" @click="$router.push({ name: 'NewBookmark' })">+ Yeni Ekle</button>
  </div>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">URL</th>
        <th scope="col">Description</th>
        <th scope="col">Sil</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(bookmark, index) in bookmarkList" :key="bookmark">
        <td>{{ index + 1 }}</td>
        <td>{{ bookmark.title }}</td>
        <td>
          <a :href="bookmark.url" target="_blank">{{ bookmark.url }}</a>
        </td>
        <td>{{ bookmark.description }}</td>
        <td>
          <button @click="deleteBookmark(bookmark)" class="btn btn-sm btn-danger">Sil</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      bookmarkList: [],
    };
  },
  created() {
    this.$appAxios
      .get("/bookmarks")
      .then((res) => {
        this.bookmarkList = res.data || [];
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    deleteBookmark(bookmark) {
      console.log(bookmark);
      this.$appAxios.delete(`/bookmarks/${bookmark.id}`).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.bookmarkList = this.bookmarkList.filter((i) => i.id !== bookmark.id);
        }
      });
    },
  },
};
</script>

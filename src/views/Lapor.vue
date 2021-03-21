<template>
  <div>
    <div class="row">
      {{ provinsi }}
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-body">
            <div class="mb-3 mt-12">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Example input placeholder"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control form-control-lg"
                rows="5"
                style="resize:none"
              ></textarea>
            </div>
            <div class="mb-3">
              <v-select
                class="style-chooser"
                placeholder="Pilih Lokasi Kejadian"
                :options="books"
                label="title"
              >
                <template #option="{ title, author }">
                  <h3 style="margin: 0">{{ title }}</h3>
                  <em>{{ author.firstName }} {{ author.lastName }}</em>
                </template>
              </v-select>
            </div>
            <div class="mb-3">
              <v-select class="style-chooser" :options="books" label="title">
                <template #option="{ title, author }">
                  <h3 style="margin: 0">{{ title }}</h3>
                  <em>{{ author.firstName }} {{ author.lastName }}</em>
                </template>
              </v-select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [
        {
          title: "Old Man's War",
          author: {
            firstName: "John",
            lastName: "Scalzi"
          }
        }
      ]
    };
  },
  computed: {
    provinsi() {
      return this.$store.getters["lapor/provinsi"]
        ? this.$store.getters["lapor/provinsi"]
        : [];
    }
  },
  methods: {
    getprovinsi() {
      this.$store.dispatch("lapor/GET_PROVINSI");
    }
  },
  mounted() {
    this.getprovinsi();
  }
};
</script>

<style lang="scss">
.style-chooser {
  font-size: 1.25rem;
}
</style>

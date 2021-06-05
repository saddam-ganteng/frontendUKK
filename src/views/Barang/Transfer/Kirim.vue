<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5 bg-danger">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body">
              <div class="form-group">
                <label>Nama Sales</label>
                <v-select
                  class="style-chooser"
                  :options="['Canada', 'United States']"
                />
              </div>
              <div class="form-group">
                <label>Dari</label>
                <v-select
                  class="style-chooser"
                  :options="['Canada', 'United States']"
                />
              </div>
              <div class="form-group">
                <label>Tujuan</label>
                <v-select
                  class="style-chooser"
                  :options="['Canada', 'United States']"
                />
              </div>
              <div class="form-group">
                <label>Barang</label>
                <v-select
                  class="style-chooser"
                  :options="['Canada', 'United States']"
                />
              </div>
              <div class="form-group form-row">
                <div class="col">
                  <label>Stok</label>
                  <input
                    type="number"
                    class="form-control form-control-lg"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <label>Transfer</label>
                  <input
                    type="number"
                    class="form-control form-control-lg"
                    placeholder="Last name"
                  />
                </div>
                <div class="col">
                  <label>Stok Baru</label>
                  <input
                    type="number"
                    class="form-control form-control-lg"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Keterangan</label>
                <textarea class="form-control form-control-lg" rows="4" />
              </div>
              <div>
                <button class="btn btn-primary float-right">Check</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-7 bg-info">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body">
              <div>
                <vue-good-table
                  :columns="columns"
                  :rows="barang"
                  :fixed-header="true"
                  max-height="440px"
                />
              </div>
              <div class="pt-3">
                <button class="btn btn-primary float-right">Check</button>
              </div>
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
      columns: [
        {
          label: "Name",
          field: "nama_barang"
        },
        {
          label: "Item",
          field: "age"
        },
        {
          label: "Stock",
          field: "createdAt"
        },
        {
          label: "Transfer",
          field: "score"
        },
        {
          label: "Update",
          field: "score"
        }
      ]
    };
  },
  computed: {
    barang() {
      return this.$store.getters["barang/barang"]
        ? this.$store.getters["barang/barang"]
        : [];
    }
  },
  methods: {
    getBarang() {
      this.$store.dispatch("barang/GET_BARANG");
    }
  },
  mounted() {
    this.getBarang();
  }
};
</script>

<style lang="scss">
.style-chooser {
  font-size: 1.25rem;
}
</style>

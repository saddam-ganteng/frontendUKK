<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7 bg-info">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body">
              <div>
                <vue-good-table
                  :columns="columns"
                  :rows="barang"
                  :search-options="{
                    enabled: true
                  }"
                  max-height="440px"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'action'" class="d-flex">
                      <b-button
                        class="btn no-wrap mx-auto btn-icon btn-sm"
                        variant="light-warning"
                        @click.prevent="toEdit(props.row.uid)"
                      >
                        <i class="font-size-12 far fa-edit"></i>
                      </b-button>
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </div>
          </div>
        </div>
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
              <div class="form-group form-row">
                <div class="col">
                  <label>Barcode</label>
                  <input
                    type="number"
                    class="form-control form-control-lg"
                    placeholder="Barcode"
                  />
                </div>
                <div class="col">
                  <label>Barang</label>
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Barang"
                  />
                </div>
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
          label: "Barcode",
          field: "kode_barang",
          tdClass: "text-center"
        },
        {
          label: "Nama",
          field: "nama_barang"
        },
        {
          label: "Kategori",
          field: "kategori_barang"
        },
        {
          label: "Transfer",
          field: "stok_barang",
          tdClass: "text-center"
        },
        {
          label: "Action",
          field: "action"
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

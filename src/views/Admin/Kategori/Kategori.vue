<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body">
              <div class="form-group">
                <label class="font-size-16 font-weight-bolder mb-3">
                  Nama Kategori
                </label>
                <input
                  type="text"
                  required
                  class="form-control form-control-lg"
                  v-model="formKategori.kategori"
                />
              </div>
              <div>
                <button
                  @click.prevent="kirimKategori"
                  class="btn btn-primary btn-lg float-right"
                >
                  Tambah
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-7">
          <div class="card shadow card-custom gutter-b">
            <div class="card-body">
              <div>
                <vue-good-table
                  :columns="columns"
                  :rows="kategori"
                  :fixed-header="true"
                  max-height="440px"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'action'">
                      <b-button
                        class="btn no-wrap btn-icon btn-sm"
                        variant="light-danger"
                        @click.prevent="deleteKategori(props.row.id)"
                      >
                        <i class="font-size-12 flaticon2-cross"></i>
                      </b-button>
                    </span>
                  </template>
                </vue-good-table>
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
          label: "Name Kategori",
          field: "kategori"
        },
        {
          label: "Action",
          field: "action",
          width: "150px",
          thClass: "text-center",
          tdClass: "text-center"
        }
      ],
      formKategori: {
        kategori: ""
      }
    };
  },
  computed: {
    kategori() {
      return this.$store.getters["laporan/kategori"]
        ? this.$store.getters["laporan/kategori"]
        : [];
    }
  },
  mounted() {
    this.$store.dispatch("laporan/GET_KATEGORI");
  },
  methods: {
    kirimKategori() {
      let data = {
        kategori: this.formKategori.kategori
      };
      this.$swal
        .fire({
          title: "Apakah Kategori Sudah Benar?",
          showCancelButton: true,
          confirmButtonText: `Sudah!`,
          cancelButtonText: `Belum`
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("laporan/ADD_KATEGORI", data).then(() => {
              this.$store.dispatch("laporan/GET_KATEGORI");
            });
            this.$swal.fire(
              "Berhasil!",
              "Kategori Baru Berhasil dibuat",
              "success"
            );
          }
        });
    },
    deleteKategori(id) {
      this.$swal
        .fire({
          title: "Apakah Anda Akan Menghapus Kategori?",
          showCancelButton: true,
          confirmButtonText: `iya!`,
          cancelButtonText: `tidak!`,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6"
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("laporan/DELETE_KATEGORI", id).then(() => {
              this.$store.dispatch("laporan/GET_KATEGORI");
            });
            this.$swal.fire("Terhapus!", "Laporan Berhasil Dihapus", "success");
          }
        });
    }
  }
};
</script>

<style lang="scss">
.style-chooser {
  font-size: 1.25rem;
}
</style>

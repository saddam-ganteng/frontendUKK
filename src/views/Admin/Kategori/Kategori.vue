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
                  class="form-control form-control-lg"
                  v-model="formKategori.kategori"
                />
              </div>
              <div>
                <button class="btn btn-primary btn-lg float-right">
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
                />
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
  methods: {
    kirimKategori() {
      let data = {
        kategori: this.formKategori.kategori
      };
      this.$swal
        .fire({
          title: "Apakah Laporan Anda Sudah Benar?",
          showCancelButton: true,
          confirmButtonText: `Sudah, Lapor!`,
          cancelButtonText: `Belum`
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("laporan/ADD_LAPORAN", data).then(() => {
              this.$store.dispatch("laporan/GET_LAPORAN");
            });
            this.$swal
              .fire("Terkirim!", "Laporan Anda Sukses", "success")
              .then(() => {
                this.$router.push({ name: "Home" });
              });
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

<template>
  <div>
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card">
          <div class="card-body">
            <div class="mb-3 mt-12">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Judul Laporan"
                v-model="form.judul"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control form-control-lg"
                rows="5"
                placeholder="Isi Laporan"
                style="resize:none"
                v-model="form.isi"
              ></textarea>
            </div>
            <div class="mb-3">
              <v-select
                class="style-chooser"
                placeholder="Pilih Provinsi"
                :options="provinsi"
                :clearable="false"
                label="nama"
                @input="pilihProvinsi($event)"
              />
            </div>
            <div class="mb-3">
              <v-select
                class="style-chooser"
                placeholder="Pilih Kota"
                :options="kota"
                :clearable="false"
                label="nama"
                :resetOnOptionsChange="true"
                @input="pilihKota($event)"
              />
            </div>
            <div class="mb-3">
              <v-select
                class="style-chooser"
                placeholder="Pilih Kecamatan"
                :options="kecamatan"
                :clearable="false"
                label="nama"
                :resetOnOptionsChange="true"
                @input="pilihKecamatan($event)"
              />
            </div>
            <div class="mb-3">
              <v-select
                class="style-chooser"
                placeholder="Pilih kategori"
                :options="kategori"
                :clearable="false"
                label="kategori"
                @input="pilihKategori($event)"
              ></v-select>
            </div>
            <div class="mb-3 float-right">
              <button class="btn btn-primary" @click.prevent="kirimLapor">
                Save
              </button>
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
      form: {
        judul: "",
        isi: "",
        provi: "",
        kot: "",
        keca: "",
        kate: ""
      }
    };
  },
  mounted() {
    this.getProvinsi();
    this.getkategori();
  },
  computed: {
    provinsi() {
      return this.$store.getters["laporan/provinsi"]
        ? this.$store.getters["laporan/provinsi"]
        : [];
    },
    kota() {
      return this.$store.getters["laporan/kota"]
        ? this.$store.getters["laporan/kota"]
        : [];
    },
    kategori() {
      return this.$store.getters["laporan/kategori"]
        ? this.$store.getters["laporan/kategori"]
        : [];
    },
    kecamatan() {
      return this.$store.getters["laporan/kecamatan"]
        ? this.$store.getters["laporan/kecamatan"]
        : [];
    }
  },
  methods: {
    getProvinsi() {
      this.$store.dispatch("laporan/GET_PROVINSI");
    },
    getkategori() {
      this.$store.dispatch("laporan/GET_KATEGORI");
    },
    pilihProvinsi(event) {
      this.form.provi = event.nama;
      this.$store.dispatch("laporan/GET_KOTA", event.id);
    },
    pilihKota(event) {
      if (event != null) {
        this.form.kot = event.nama;
        this.$store.dispatch("laporan/GET_KECAMATAN", event.id);
      }
    },
    pilihKecamatan(event) {
      if (event != null) {
        this.form.keca = event.nama;
      }
    },
    pilihKategori(event) {
      this.form.kate = event.kategori;
    },
    kirimLapor() {
      const data = {
        nik: 2222,
        judul: this.form.judul,
        kategori: this.form.provi,
        provinsi: this.form.kate,
        kota: this.form.kot,
        kecamatan: this.form.keca,
        isi_laporan: this.form.isi,
        foto: "asd",
        status: "proses"
      };
      console.log(data);
      this.$swal
        .fire({
          title: "Apakah Laporan Anda Sudah Benar?",
          showCancelButton: true,
          confirmButtonText: `Sudah, Lapor!`,
          cancelButtonText: `Belum`
        })
        .then(result => {
          if (result.isConfirmed) {
            // this.$store.dispatch("laporan/ADD_LAPORAN", data);
            this.$swal.fire("Terkirim!", "Laporan Anda Sukses", "success");
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

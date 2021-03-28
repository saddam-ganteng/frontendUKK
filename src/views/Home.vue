<template>
  <div v-if="auth_level == 2">
    <vue-good-table :columns="columns" :rows="laporan">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="toAccept(props.row.id_laporan)"
          >
            <i class="font-size-12 fas fa-check"></i>
          </b-button>
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="deleteLaporan(props.row.id_laporan)"
          >
            <i class="font-size-12 flaticon2-cross"></i>
          </b-button>
        </span>
      </template>
    </vue-good-table>
  </div>
  <div v-else class="home">
    {{ auth_level }}
    <vue-good-table :columns="columns" :rows="laporanNIK">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="toAccept(props.row.id_laporan)"
          >
            <i class="font-size-12 far fa-eye"></i>
          </b-button>
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="deleteLaporan(props.row.id_laporan)"
          >
            <i class="font-size-12 flaticon2-cross"></i>
          </b-button>
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      columns: [
        {
          label: "Judul",
          field: "judul",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Instansi",
          field: "kategori",
          thClass: "text-center",
          tdClass: "text-center",
          width: "350px"
        },
        {
          label: "Action",
          field: "action",
          thClass: "text-center",
          tdClass: "text-center",
          width: "150px"
        }
      ]
    };
  },
  computed: {
    rakyat() {
      return this.$store.getters["rakyat/rakyat"]
        ? this.$store.getters["rakyat/rakyat"]
        : [];
    },
    cek() {
      return this.$store.getters["auth/auth_status"]
        ? this.$store.getters["auth/auth_status"]
        : [];
    },
    auth() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
        : [];
    },
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
        : [];
    },
    laporanNIK() {
      return this.$store.getters["laporan/laporanNIK"]
        ? this.$store.getters["laporan/laporanNIK"]
        : [];
    },
    laporan() {
      return this.$store.getters["laporan/laporan"]
        ? this.$store.getters["laporan/laporan"]
        : [];
    }
  },
  mounted() {
    this.getRakyat();
    if (this.auth_level == 2) {
      this.$store.dispatch("laporan/GET_LAPORAN");
    } else {
      this.$store.dispatch("laporan/GET_LAPORAN_NIK", this.auth.nik);
    }
  },
  methods: {
    getRakyat() {
      this.$store.dispatch("rakyat/GET_RAKYAT");
    },
    toAccept(id) {
      this.$swal
        .fire({
          title: "Apakah Anda Akan Menangani Laporan?",
          showCancelButton: true,
          confirmButtonText: `iya!`,
          cancelButtonText: `tidak!`,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33"
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$router.push(`/Lapor/view/${id}`);
          }
        });
    },
    deleteLaporan(id) {
      this.$swal
        .fire({
          title: "Apakah Anda Akan Menghapus Laporan?",
          showCancelButton: true,
          confirmButtonText: `iya!`,
          cancelButtonText: `tidak!`,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6"
        })
        .then(result => {
          if (result.isConfirmed) {
            this.$store.dispatch("laporan/DELETE_LAPORAN", id).then(() => {
              if (this.auth_level == 2) {
                this.$store.dispatch("laporan/GET_LAPORAN");
              } else {
                this.$store.dispatch("laporan/GET_LAPORAN_NIK", this.auth.nik);
              }
            });
            this.$swal.fire("Terhapus!", "Laporan Berhasil Dihapus", "success");
          }
        });
    }
  }
};
</script>

<template>
  <div class="home">
    {{ laporan }}
    <vue-good-table :columns="columns" :rows="laporan">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
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
          field: "id_laporan",
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
    ceka() {
      return this.$store.getters["auth/auth"]
        ? this.$store.getters["auth/auth"]
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
    this.getLaporan();
  },
  methods: {
    getRakyat() {
      this.$store.dispatch("rakyat/GET_RAKYAT");
    },
    getLaporan() {
      this.$store.dispatch("laporan/GET_LAPORAN");
    },
    deleteLaporan(id) {
      console.log(id);
      let valid = confirm("Are you sure want to delete this?");
      if (valid) {
        this.$store
          .dispatch("laporan/DELETE_LAPORAN", id)
          .then(() => {
            console.log("success");
            this.getLaporan();
          })
          .catch(err => {
            console.log("Error while deleting laporan", err);
          });
      }
    }
  }
};
</script>

<template>
  <div class="d-flex flex-column-fluid">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card rounded shadow card-custom gutter-b">
            <div class="card-body">
              <div class="form-group">
                <button type="submit" class="btn btn-danger ml-3 float-right">
                  Download PDF
                </button>
                <button type="submit" class="btn btn-primary float-right">
                  Download Excel
                </button>
                <form class="form-inline">
                  <div class="form-group font-size-16 font-weight-bolder mb-2">
                    <span>Filename :</span>
                  </div>
                  <div class="form-group mx-sm-3 mb-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="default Laporan.xlm"
                    />
                  </div>
                </form>
              </div>
              <div>
                <vue-good-table
                  :columns="columns"
                  :rows="laporan"
                  :fixed-header="true"
                  max-height="440px"
                >
                  <template slot="table-row" slot-scope="props">
                    <span v-if="props.column.field == 'action'">
                      <b-button
                        class="btn no-wrap mr-2 btn-icon btn-sm"
                        variant="light-primary"
                        @click.prevent="toAcceptLaporan(props.row.id_laporan)"
                      >
                        <i class="font-size-12 far fa-eye"></i>
                      </b-button>
                      <b-button
                        v-if="props.row.status == 'proses'"
                        class="btn no-wrap btn-icon btn-sm"
                        variant="light-danger"
                        @click.prevent="toDelete(props.row.id_laporan)"
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
          label: "Judul",
          field: "judul",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Instalansi",
          field: "kategori",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Provinsi",
          field: "provinsi",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Status",
          field: "status",
          thClass: "text-center",
          tdClass: "text-center"
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
    laporan() {
      return this.$store.getters["laporan/laporan"]
        ? this.$store.getters["laporan/laporan"]
        : [];
    }
  },
  methods: {
    toAcceptLaporan(id) {
      this.$router.push(`/Laporan/View/${id}`);
    }
  },
  mounted() {
    this.$store.dispatch("laporan/GET_LAPORAN");
  }
};
</script>

<style lang="scss">
.style-chooser {
  font-size: 1.25rem;
}
</style>

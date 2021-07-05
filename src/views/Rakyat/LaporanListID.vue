<template>
  <div v-if="auth_level == 2">
    <vue-good-table :columns="columns" :rows="laporan">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'action'">
          <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="toAcceptAdmin(props.row.id_laporan)"
          >
            <i
              class="font-size-12"
              :class="auth.status == 'selesai' ? 'fas fa-check' : 'fas fa-eye'"
            />
          </b-button>
          <b-button
            v-if="props.row.status === 'proses'"
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="deleteLaporan(props.row.id_laporan)"
          >
            <i class="font-size-12 flaticon2-cross"></i>
          </b-button>
        </span>
      </template>
    </vue-good-table>
    <button
      class="float-right btn font-weight-bolder text-uppercase font-size-lg btn-danger py-3 px-6 mt-3 ml-3"
      @click="exportPDF()"
    >
      Print PDF
    </button>
    <button
      class="float-right btn font-weight-bolder text-uppercase font-size-lg btn-primary py-3 px-6 mt-3"
      @click="exportExcel()"
    >
      Print Excel
    </button>
  </div>
  <div v-else>
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
          <!-- <b-button
            class="btn no-wrap mr-1 btn-icon btn-sm"
            variant="light-primary"
            @click.prevent="deleteLaporan(props.row.id_laporan)"
          >
            <i class="font-size-12 flaticon2-cross"></i>
          </b-button> -->
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import "jspdf-autotable";
import { parseTime } from "@/utils";

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
          label: "Instansi",
          field: "kategori",
          thClass: "text-center",
          tdClass: "text-center",
          width: "200px"
        },
        {
          label: "Provinsi",
          field: "provinsi",
          thClass: "text-center",
          tdClass: "text-center",
          width: "300px"
        },
        {
          label: "Status",
          field: "status",
          thClass: "text-center",
          tdClass: "text-center",
          width: "200px"
        },
        {
          label: "Action",
          field: "action",
          thClass: "text-center",
          tdClass: "text-center",
          width: "100px"
        }
      ]
    };
  },
  computed: {
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
    laporanNIK() {
      return this.$store.getters["laporan/laporanNIK"]
        ? this.$store.getters["laporan/laporanNIK"]
        : [];
    },
    laporan() {
      return this.$store.getters["laporan/laporan"]
        ? this.$store.getters["laporan/laporan"]
        : [];
    },
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
        : [];
    }
  },
  mounted() {
    this.$store.dispatch("laporan/GET_LAPORAN_NIK", this.auth.nik);
    this.$store.dispatch("laporan/GET_LAPORAN");
  },
  methods: {
    toAccept(id) {
      this.$router.push(`/Laporan/View/${id}`);
    },
    toAcceptAdmin(id) {
      if (this.auth.status == "belum") {
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
      } else {
        this.$router.push(`/Lapor/view/${id}`);
      }
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
    },
    exportPDF() {
      var vm = this;
      var columns = [
        { title: "Judul", dataKey: "judul" },
        { title: "isi laporan", dataKey: "isi_laporan" },
        { title: "Kategori", dataKey: "kategori" },
        { title: "Provinsi", dataKey: "provinsi" },
        { title: "Kota", dataKey: "kota" },
        { title: "Kecamatan", dataKey: "kecamatan" },
        { title: "Status", dataKey: "status" },
        { title: "Tanggal laporan", dataKey: "tgl_laporan" }
      ];
      var doc = new jsPDF("p", "pt");
      doc.text("Laporan Masyarakat", 40, 40);
      doc.autoTable(columns, vm.laporan, {
        margin: { top: 60 }
      });
      doc.save("todos.pdf");
    },
    exportExcel() {
      import("@/vendor/Export2Excel").then(excel => {
        const tHeader = ["Id", "Judul", "isi laporan", "Kategori"];
        const filterVal = ["id_laporan", "judul", "isi_laporan", "kategori"];
        const list = this.laporan;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data, //Specific data Required
          filename: "excel-list", //Optional
          autoWidth: true, //Optional
          bookType: "xlsx" //Optional
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if (j === "timestamp") {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        })
      );
    }
  }
};
</script>

<style></style>

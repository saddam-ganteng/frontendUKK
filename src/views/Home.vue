<template>
  <div class="home">
    {{ ceka }}
    <vue-good-table :columns="columns" :rows="rows">
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
            @click.prevent="deleteReport(props.rows.id)"
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
          field: "name",
          thClass: "text-center",
          tdClass: "text-center"
        },
        {
          label: "Instansi",
          field: "age",
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
      ],
      rows: [
        {
          id: 1,
          name:
            "Johnasdqweqweasdasdnasjnas lsandlnoasenjqwn alsndlqnweno nlasdnln owqnd lasldnoq wn",
          age: 20,
          score: 0.03343
        },
        {
          id: 2,
          name: "Jane",
          age: 24,
          score: 0.03343
        },
        {
          id: 3,
          name: "Susan",
          age: 16,
          score: 0.03343
        },
        {
          id: 4,
          name: "Chris",
          age: 55,
          score: 0.03343
        },
        {
          id: 5,
          name: "Dan",
          age: 40,
          score: 0.03343
        },
        {
          id: 6,
          name: "John",
          age: 20,
          score: 0.03343
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
    }
  },
  mounted() {
    this.getRakyat();
  },
  methods: {
    getRakyat() {
      this.$store.dispatch("rakyat/GET_RAKYAT");
    }
  }
};
</script>

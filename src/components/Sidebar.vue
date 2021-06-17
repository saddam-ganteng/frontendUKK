<template>
  <div v-if="auth_level == 2" class="sidebar">
    <div class="sidebar__brand text-white">
      NGADS ADMIN
    </div>
    <ul class="sidebar__menu">
      <li id="sidebar-tooltip-channels" class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Home">
          <i class="fas fa-database sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Home</span>
        </router-link>
      </li>
      <!-- <li class="sidebar__menu__item">
        <a class="sidebar__menu__link" @click="toProfile()">
          <i class="fas fa-user-alt sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Profile</span>
        </a>
      </li> -->
      <li class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Laporan">
          <i class="fas fa-database sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Laporan</span>
        </router-link>
      </li>
      <li id="sidebar-tooltip-channels" class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Profile">
          <i class="fas fa-database sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Profile</span>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu sidebar__menu--secondary">
      <li id="sidebar-tooltip-signout" class="sidebar__menu__item">
        <a class="sidebar__menu__link text-center" @click="Logout()">
          <i class="fas fa-power-off text-white"></i>
        </a>
      </li>
    </ul>
  </div>
  <div v-else class="sidebar">
    <div class="sidebar__brand text-white">
      NGADS
    </div>
    <ul class="sidebar__menu">
      <li class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Home">
          <i class="fas fa-database sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Home</span>
        </router-link>
      </li>
      <!-- <li class="sidebar__menu__item">
        <a class="sidebar__menu__link" @click="toProfile()">
          <i class="fas fa-user-alt sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Profile</span>
        </a>
      </li> -->
      <li class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Barang">
          <i class="fas fa-envelope sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Barang</span>
        </router-link>
      </li>
      <li class="sidebar__menu__item">
        <router-link class="sidebar__menu__link" to="/Lapor/Ku">
          <i class="fas fa-envelope-open-text sidebar__menu__icon"></i>
          <span class="sidebar__menu__text">Laporan Ku</span>
        </router-link>
      </li>
    </ul>
    <ul class="sidebar__menu sidebar__menu--secondary">
      <li id="sidebar-tooltip-signout" class="sidebar__menu__item">
        <a class="sidebar__menu__link text-center" @click="Logout()">
          <i class="fas fa-power-off text-white"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    auth_level() {
      return this.$store.getters["auth/auth_level"]
        ? this.$store.getters["auth/auth_level"]
        : [];
    }
  },
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toHomeAdmin() {
      this.$router.push({ name: "HomeAdmin" });
    },
    toProfile() {
      this.$router.push({ name: "Profile" });
    },
    toLapor() {
      this.$router.push({ name: "Lapor" });
    },
    toLaporKu() {
      this.$router.push({ name: "LaporKu" });
    },
    toPetugas() {
      this.$router.push({ name: "Petugas" });
    },
    toMasyarakat() {
      this.$router.push({ name: "Masyarakat" });
    },
    Logout() {
      this.$store
        .dispatch("auth/LOGOUT")
        .then(() => this.$router.push("/Login"));
    }
  }
};
</script>

<style lang="scss">
.active {
  .sidebar {
    &__menu {
      &__icon {
        color: #3699ff;
      }

      &__text {
        color: white;
      }
    }
  }

  background: #1b1b28;
}
</style>

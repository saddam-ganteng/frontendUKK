<template>
  <div>
    <div class="sidebar">
      <div class="sidebar__brand text-white">
        NGADS
      </div>
      <ul class="sidebar__menu">
        <li id="sidebar-tooltip-channels" class="sidebar__menu__item">
          <a class="sidebar__menu__link" @click="toHome()">
            <i class="fas fa-database sidebar__menu__icon"></i>
            <span class="sidebar__menu__text">Database</span>
          </a>
        </li>
        <li id="sidebar-tooltip-snapshot" class="sidebar__menu__item">
          <a class="sidebar__menu__link" @click="toProfile()">
            <i class="fas fa-user-alt sidebar__menu__icon"></i>
            <span class="sidebar__menu__text">Profile</span>
          </a>
        </li>
        <li id="sidebar-tooltip-snapshot" class="sidebar__menu__item">
          <a class="sidebar__menu__link" @click="toLapor()">
            <i class="fas fa-envelope sidebar__menu__icon"></i>
            <span class="sidebar__menu__text">Lapor</span>
          </a>
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
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({ name: "Home" });
    },
    toProfile() {
      this.$router.push({ name: "Profile" });
    },
    toLapor() {
      this.$router.push({ name: "Lapor" });
    },
    Logout() {
      this.$store.dispatch("auth/LOGOUT");
    }
  }
};
</script>

<template>
  <base-nav v-model="showMenu" container-classes="container-fluid" class="navbar-horizontal navbar-main navbar-top" >

    <div slot="brand" class="navbar-wrapper">
      <b-navbar-brand href="/home">
        <img src="img/brand/black.png" class="d-inline-block align-right" center alt="Kitten">
        <!-- <span class="nav-link-inner--text">JUST4N</span> -->
      </b-navbar-brand>
    </div>

    <template>
      <div class="navbar-collapse-header">
        <b-row>
          <b-col cols="6" class="collapse-brand">
            <router-link to="/home">
              <img src="img/brand/black.png">
            </router-link>
          </b-col>
          <b-col cols="6" class="collapse-close">
            <button type="button" class="navbar-toggler" @click="closeAlertMenu">
              <span></span>
              <span></span>
            </button>
          </b-col>
        </b-row>
      </div>

      <b-navbar-nav class="align-items-left">
        <!-- <b-nav-form>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="/login">
                  <span class="nav-link nav-link-inner--text i-nav-link-font">Explore</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <span class="nav-link nav-link-inner--text i-nav-link-font">Rankings</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link nav-link-icon" href="#">
                  <span class="nav-link nav-link-inner--text i-nav-link-font">Rewords</span>
              </a>
          </li>
      </b-nav-form> -->
      <b-nav-item to="/login">
        <a class=" nav-link-icon">
          <span class=" nav-link-inner--text i-nav-link-font">Explore</span>
        </a>
      </b-nav-item>
      <b-nav-item to="/login">
        <a class=" nav-link-icon">
          <span class=" nav-link-inner--text i-nav-link-font">Rankings</span>
        </a>
      </b-nav-item>
      <b-nav-item to="/login">
        <a class=" nav-link-icon">
          <span class=" nav-link-inner--text i-nav-link-font">Rewords</span>
        </a>
      </b-nav-item>

    </b-navbar-nav>

    <!-- Navbar links -->
    <!-- This item dont have <b-nav-item> because item have data-action/data-target on tag <a>, wich we cant add -->
    <b-navbar-nav class="align-items-center ml-md-auto">
      <li class="nav-item d-sm-none">
        <a class="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
          <!-- <i class="ni ni-zoom-split-in"></i> -->
        </a>
      </li>
    </b-navbar-nav>

    <b-navbar-nav class="align-items-right ml-auto ml-md-0">

      <b-form class="navbar-search form-inline mr-sm-3" :class="{'navbar-search-light': type === 'default', 'navbar-search-dark': type === 'light'}" id="navbar-search-main">
        <b-form-group class="mb-0">
          <b-input-group class="input-group-alternative input-group-merge">

            <div class="input-group-append">
              <span class="input-group-text"><b-icon icon="search"></b-icon></span>
            </div>
            <b-form-input placeholder="Search" type="text"> </b-form-input>

          </b-input-group>
        </b-form-group>
      </b-form>

      <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link pr-0">
        <a href="void(0)" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
            <b-icon icon="globe" aria-hidden="true" font-scale="2"></b-icon>
          </b-media>
        </a>

        <template>
          <b-dropdown-item>
            <span>简体中文</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <span>English</span>
          </b-dropdown-item>
        </template>
      </base-dropdown>

      <div>
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
            <b-icon icon="moon" aria-hidden="true" font-scale="2"></b-icon>
          </b-media>
        </a>
      </div>

      <base-dropdown menu-on-right
                     class="nav-item"
                     tag="li"
                     title-tag="a"
                     title-classes="nav-link pr-0">
        <a href="#" class="nav-link pr-0" @click.prevent slot="title-container">
          <b-media no-body class="align-items-center">
            <b-icon icon="wallet-fill" font-scale="2" class="border " variant="Primary"></b-icon>
          </b-media>
        </a>

        <template>
          <b-dropdown-header class="noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </b-dropdown-header>
          <b-dropdown-item href="#!">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-settings-gear-65"></i>
            <span>Settings</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-calendar-grid-58"></i>
            <span>Activity</span>
          </b-dropdown-item>
          <b-dropdown-item href="#!">
            <i class="ni ni-support-16"></i>
            <span>Support</span>
          </b-dropdown-item>
          <div class="dropdown-divider"></div>
          <b-dropdown-item href="#!">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </b-dropdown-item>
        </template>

      </base-dropdown>

    </b-navbar-nav>

    </template>

  </base-nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import { BaseNav, Modal } from '@/components';

export default {
  components: {
    CollapseTransition,
    BaseNav,
    Modal
  },
  props: {
    type: {
      type: String,
      default: 'default', // default|light
      description: 'Look of the dashboard navbar. Default (Green) or light (gray)'
    }
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open');
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      document.body.classList.remove('nav-close');
      this.showMenu = false;
    },
    setBackgroundColor() {
      document.body.classList.add('bg-default');
    },
    removeBackgroundColor() {
      document.body.classList.remove('bg-default');
    },
    updateBackground() {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor();
      } else {
        this.removeBackgroundColor()
      }
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    closeAlertMenu(){
      console.info('DashboardNavbar -> closeAlertMenu: ' + this.showMenu)
      this.closeMenu()
    }
  },

  beforeDestroy() {
    console.info('beforeDestroy。。')
    this.removeBackgroundColor();
  },
  beforeRouteUpdate(to, from, next) {
    console.info('beforeRouteUpdate。。。to=' + to + '， from=' + from)
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
};
</script>
<style lang="scss">
</style>

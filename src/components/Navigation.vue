<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Ifthi-blogs</router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
        <router-link class="links" to="#">Home</router-link>
        <router-link class="links" to="#">Read Blogs</router-link>
        <router-link class="links" to="#">Post Blogs</router-link>
        <router-link class="links" to="#">Login/register</router-link>
        </ul>
      </div>
    </nav>
    <img
      src="../assets/Icons/bars-regular.svg"
      alt="menu icon"
      class="menu-icon"
      @click="toggleMobileNav"
      v-show="mobile"
    />
    <transition name="mobile-nav" >
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="links" to="#">Home</router-link>
        <router-link class="links" to="#">Read Blogs</router-link>
        <router-link class="links" to="#">Post Blogs</router-link>
        <router-link class="links" to="#">Login/register</router-link>
      </ul>
    </transition>
  </header>
</template>
<script>
//import barsregular from "../assets/Icons/envelope-regular.svg";
export default {
  name: "navigation",
  components: {
    //barsregular
  },
  data() {
    return {
      mobile: null, //if it's a mobile vieport or not
      mobileNav: null, //  it willl check if our mobile navigation is open
      windowWidth: null,
    };
  },
 created(){
window.addEventListener('resize',this.checkScreenSiz);
this.checkScreenSiz;
 },
  methods: {
    checkScreenSiz() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
     
        //window.alert("we are using an alert here!");
        return;
      } else {
        this.mobile = false;
        this.mobileNav = false;
        return;
      }
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: #ffff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;
  .links {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;
    &:hover {
      color: #77b5de33;
    }
  }
  nav {
    display: flex;
    padding: 25px 0;
    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: black;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      ul {
        margin-right: 32px;
        .link {
          margin-right: 32px;
        }
        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: gray;
    top: 0;
    left: 0;
    .links {
      padding: 15px 0;
      color: whitesmoke;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: all 1s ease;
  }
  .mobile-nav-enter{
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to{
    transform: translateX(0);

  }
  .mobile-nav-leave-to{
    transform: translateX(-250px);
  }
}
</style>

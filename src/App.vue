<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow py-2">
    <headerinput />
  </header>
  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-1 col-lg-1 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3 text-center">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active text-secondary" aria-current="page" href="#">
                <router-link to="/home" class="navbar-brand bi bi-house-door-fill custom-icon"></router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                <router-link to="/Dashboard" class="navbar-brand bi bi-bar-chart-fill custom-icon"></router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary custom-icon" href="#">
                <i class="bi bi-stack"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-11 ms-sm-auto col-lg-11 px-md-4">
        <transition name="fade">
          <div class="titlems" v-if="$route.path === '/'">
            <HomeView />
          </div>
          <div class="titlems" v-else>
            <router-view></router-view>
          </div>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import HomeView from './views/HomeVi.vue'
import headerinput from './components/InputTwsNo.vue'
export default {
  components: {
    headerinput,
    HomeView,
  }
}
</script>

<style>
.custom-icon {
  font-size: 24px;
  transition: 0.2s;
}

.custom-icon:hover {
  font-size: 32px;
}

.logo {
  text-shadow: shadow1, shadow2, shadow3;
  text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.15);
}</style>
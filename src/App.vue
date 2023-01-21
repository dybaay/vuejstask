<template>
<NavBar></NavBar>
    <main class="main-section">
<SideBar></SideBar>
        <router-view></router-view>
    </main>

</template>

<script>
import {mapState} from 'vuex'
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
export default {
    components: {SideBar, NavBar},
    computed: {
        ...mapState(['data'])
    }
}
</script>


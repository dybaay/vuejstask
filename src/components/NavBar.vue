<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState(['user'])
    }
}
</script>

<template>
    <header class="header">
        <div class="logo"><img src="../assets/images/logo.png" alt="logo" class="logoImg"></div>
        <nav class="nav-container">
            <ul class="nav-items">
                <li><a href="#">projects</a></li>
                <li><a class="active-nav-link" href="#">tools & app</a></li>
                <li><a href="#">channels</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#">analytics</a></li>
                <li><a href="#">settings</a></li>
            </ul>
        </nav>
        <div class="profile">
            <span class="help">help</span>
            <div class="profileContainer">
                <img :src="user.avatar" class="profileImg" alt="profile">
                <div class="profileDetail">
                    <span class="profileName">{{ user.name}}</span>
                    <span class="profileEmail">{{ user.email }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

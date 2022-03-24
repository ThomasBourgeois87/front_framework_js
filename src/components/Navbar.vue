<template>
    <nav class="navbar">
        <icons class="navbar__burger" @click="isActiveMenu = !isActiveMenu" :name="'menu_burger'" :size="'48px'"
               :color="'var(--cta-primary-color)'"></icons>
        <transition name="slide-fade">
            <div v-if="isActiveMenu" class="navbar__linksContainer">
                <button-secondary @click="isActiveMenu = !isActiveMenu" class="navbar__buttons" v-for="link in links"
                                  :key="link" :url="link.url" :title="link.name"
                                  :icon="link.icon" :color="'var(--content-tertiary-color)'"></button-secondary>
            </div>
        </transition>
    </nav>
</template>

<script>
import Icons from "./Icons.vue";
import ButtonSecondary from "./Buttons/ButtonSecondary.vue";

export default {
    name: "Navbar",
    components: {ButtonSecondary, Icons},
    data() {
        return {
            links:
                [
                    {
                        name: "Home",
                        url: "#/",
                        icon: "home",
                        color: "primary"
                    },
                    {
                        name: "Vos classes",
                        url: "#/class",
                        icon: "person"
                    },
                    {
                        name: "Nouvelle Evaluation",
                        url: "#/new_evaluation",
                        icon: "paper"
                    },
                ],
            isActiveMenu: false,
        };
    },
}
</script>

<style scoped>
.navbar {
    position: relative;
    display: flex;
    align-items: center;
    padding: 1em;
    background-color: var(--background-primary-color);
}

.navbar__burger {
    z-index: 2;
    cursor: pointer;
}

.navbar__linksContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 10em 0 0 1em;
    background-color: var(--background-primary-color);
}

.navbar__buttons {
    margin-bottom: 1em;
}

/* Menu Transition */
.slide-fade-enter-active {
    animation: bounce-in .5s;
}

.slide-fade-leave-active {
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

@media (min-width: 768px) {

}
</style>

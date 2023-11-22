<template>
    <router-link class="nav-link" :to="link.to" :class="link.color" @click="onClickNavLink">
        <svg class="bi" width="24" height="24"><use xlink:href="#aperture"/></svg>
        {{ link.label }}
    </router-link>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
            link: {
                    type: Object,
                },
            index:{
                type:Number,
            }
        },
        methods: {
            onClickNavLink() {
                this.$emit('navLinkClick', this.index);
            }
        }
    };
</script>

<style scoped>
    .couleur1 {
        color: grey !important;
    }
    .couleur2 {
        color: green !important;
    }
</style>


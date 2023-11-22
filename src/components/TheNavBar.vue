<template>
    <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand d-md-none" href="#">
            <svg class="bi" width="24" height="24"><use xlink:href="#aperture"/></svg>
            Aperture
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav flex-grow-1 justify-content-between">
                        
                        <nav-link v-for="(link, index) in links" @navLinkClick="changeColor" :key="index" :link="link"></nav-link>
                    
                    </ul>
                    <!-- <ul>
                        <li v-for="code in codeList" :key="code">
                            {{ code }}
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import NavLink from './NavLink.vue';

    export default {
        name: 'TheNavBar',
        components: {
            NavLink
        },
        data() {
            return {
                couleur: 'couleur1',
                codeList: ['Html', 'CSS', 'Js', 'Vue'],
                links: [
                    { color: "", label: "Tour", to: "/" },
                    { color: "", label: "Product", to: "/product" },
                    { color: "", label: "Pricing", to: "/pricing" },
                ]
            };
        },
        mounted() {
        },
        methods: {
            changeColor(index){
                console.log('changeColor called with index:', index);

                for(let i=0;i<this.links.length;i++){
                    this.links[i].color=""
                }
                    this.links[index].color="couleur2"
                    console.log('Links after changeColor:', this.links);

                }
        },
    };
</script>


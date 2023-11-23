<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-center mb-4">Login</h3>

                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input
                                    v-model="username"
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    name="username"
                                    required
                                >
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    v-model="password"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    required
                                >
                            </div>

                            <div class="d-grid">
                                <button @click="login" type="button" class="btn btn-primary btn-block">Login</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'LoginView',
        data() {
            return {
                user: {
                    username: '',
                    password: '',
                },
            };
        },
        methods: {
            // login() {
            //     localStorage.setItem("user", JSON.stringify("user"));
            // },
            login() {
                // Effectuez votre logique d'authentification ici (vérification des identifiants, etc.)
                // Pour simplifier, supposons que la connexion est réussie
                const authenticatedUser = { username: this.user.username };
                localStorage.setItem("user", JSON.stringify(authenticatedUser));
                this.$router.push("/"); // Redirige vers la page d'accueil après une connexion réussie
            },
        }
    };


</script>
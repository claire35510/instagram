<script>
    let posts = [];

    async function fetchPosts() {
        const response = await fetch('/.netlify/functions/update-links');
        posts = await response.json();
    }

    fetchPosts(); // Appelle l'API au chargement
</script>

<main>
    <div class="grid">
        {#each posts as post}
            <div class="post">
                <img src={post.image} alt="Post Instagram" />
            </div>
        {/each}
    </div>
</main>


<style>

    /* Conteneur principal */
    main {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        background-color: white; /* Couleur pour visualiser les espaces */
    }

    /* Grille */
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
        grid-template-rows: repeat(4, auto); /* 4 lignes */
        gap: 2px; /* Espacement exact entre les posts */
        width: 100%;
        height: 100%; /* Ajuste la hauteur totale de la grille */
    }
	
    /* Post individuel */
    .post {
        width: 100%;

        position: relative;
        background-color: white; /* Fond blanc des posts */
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Image des posts */
    .post img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Remplit le conteneur sans déformer */
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0; /* Optionnel */
    }

    .widget {
        width: 400px; /* Largeur fixe du widget */
        height: 300px; /* Hauteur fixe */
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        background: white;
    }

</style>



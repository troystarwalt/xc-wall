<script>
    import Pieces from '../models/model.js'

    let totalPieces = Pieces.length;

</script>

<!-- html -->
<h2 id="gallery-heading">SC Art Gallery</h2>
<p id="total-images">Total images: {totalPieces}</p>

<section>
    {#each Pieces as piece (piece.id)}
    <figure>
        <img src="{piece.src}" alt="{piece.title}" class="image">
        <figcaption>{piece.title}</figcaption>
    </figure>
    
    {:else}
    <p>Nohting to do here!</p>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-wrap: wrap;
        gap: .5em;
        justify-content: flex-start;
    }

    figure {
        height: 300px;
        position: relative;
        justify-items: flex-start;
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    figure > img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
</style>
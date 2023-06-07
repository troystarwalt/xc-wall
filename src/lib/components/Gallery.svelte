<script>
  import { src_url_equal } from "svelte/internal";
  import InfoModal from "./InfoModal.svelte"
  import ButtonContainer from './ButtonContainer.svelte';

  import { Pieces } from "../models/model.js";
  import { tags } from "../models/model.js";

  let totalPieces = Pieces.length;
  let selected = "all";

  const filterSelection = (e) => selected = e.target.dataset.name;
  const clearSelection = (e) => selected = "all";

</script>

<!-- html -->
<p id="total-images">Total images: {totalPieces}</p>
<ButtonContainer>
    {#each tags as tag}
        <button class:active={selected === tag}
                class="btn"
                data-name={tag}
                on:click={filterSelection}>
                {tag}
        </button>
    {/each}
    <button class="btn"
            data-name="clear"
            on:click={clearSelection}>
            Clear
    </button>
</ButtonContainer>
<section>
  {#each Pieces as piece}
    {#if selected === "all"}
    <figure class="show">
      <img src={piece.src} alt={piece.alt} class="art-image" />
      <InfoModal {...piece} />
    </figure>
    {:else}
    <figure class:show={piece.tag.includes(selected)}>
        <img src={piece.src} alt={piece.alt} class="art-image" />
        <InfoModal {...piece} />
    </figure>
    {/if}
  {:else}
    <p>Nohting to see here!</p>
  {/each}
</section>

<style>
  section {
    display: flex;
    gap: 0.5em;
    flex-flow: row wrap;
  }

  section::after {
    content: "";
    flex-grow: 999;
  }

  figure {
    position: relative;
    margin: 0;
    justify-items: flex-start;
    /* display: flex; */
    flex-direction: column;
    height: 300px;
    flex: 1 1 auto;
    transition: transform 0.2s;
    display: none;
    transition: all 0.2s;
  }
  figure.show {
    display: flex;
  }

  figure > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px;
  }

  figure:hover {
    transform: scale(1.02) translateY(-2px);
    transition: all 0.5s;
    filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.5));
  }


</style>

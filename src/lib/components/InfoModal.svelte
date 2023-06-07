<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faCircleInfo,
    faXmarkSquare,
  } from "@fortawesome/free-solid-svg-icons";
  import { fade } from "svelte/transition";

  export let artist;
  export let title;

  let visible = false;

  const toggleModal = (e) => {
    visible = !visible;
  };

</script>

<div on:click={toggleModal} on:keydown={toggleModal} class="info">
  {#if visible}
    <FontAwesomeIcon icon={faXmarkSquare} />
  {:else}
    <FontAwesomeIcon icon={faCircleInfo} />
  {/if}
</div>
{#if visible}
  <aside class="modal" transition:fade>
    <p>{title}</p>
    <p>{artist}</p>
  </aside>
{/if}

<style>
  .info {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 0.2em 0.3em;
    border-radius: 3px 3px;
    z-index: 10;
  }

  .modal {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    background-color: rgba(255, 0, 121, 0.5);
    flex-direction: column;
  }
  .modal p {
    font-size: 2em;
    text-align: left;
    margin: 0;
    margin-left: .3em;
  }
</style>

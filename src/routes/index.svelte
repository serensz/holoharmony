<script lang="ts">
  import Footer from '$components/Footer.svelte';
  import { loading, temporaryAttempt } from '$src/store';
  import Game from '$components/Game.svelte';
  import { onMount } from 'svelte';
  import { loadGame } from '$lib/util';
  import LoadingIndicator from '$components/LoadingIndicator.svelte';
  import type { Attempt } from '$src/types';

  // Define your Spotify playlist ID
  const spotifyPlaylistId = '3Qys7Ordpih9cDhfIkUroA';

  onMount(async () => {
    // reset the temporary attempt because this is a random game
    temporaryAttempt.set(<Attempt>{
      attempts: 0,
      type: 'random',
      guesses: [],
      date: new Date(),
      correct: false
    });
    // Pass the Spotify playlist ID to the loadGame function
    await loadGame(spotifyPlaylistId, true);
  });
</script>

<div>
  {#if $loading}
    <LoadingIndicator />
  {:else}
    <div class="max-w-screen-md mx-auto">
      <div class={`text-center p-3`}>
        <!-- Pass the Spotify playlist ID to the Game component -->
        <Game custom={false} random/>
      </div>
    </div>
    <Footer custom />
  {/if}
</div>

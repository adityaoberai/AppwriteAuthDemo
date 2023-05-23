<script>
// @ts-nocheck

  import { sdk } from './appwrite.js';
  import Login from './lib/Login.svelte';
  import Register from './lib/Register.svelte';

  function loginToggle() {
    document.querySelector('.login').style.display = 'block';
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.card').style.display = 'block';
    document.querySelector('#logout').style.display = 'block';
  };

  function registerToggle() {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'block';
    document.querySelector('.card').style.display = 'block';
    document.querySelector('#logout').style.display = 'block';
  };

  async function logout() {
    await sdk.logout();
    document.querySelector('#userDetailsBox').innerHTML = 'User Details Not Present';
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.register').style.display = 'none';
    document.querySelector('.card').style.display = 'none';
    document.querySelector('#logout').style.display = 'none';
  };

</script>

<main>
  <div>
    <a href="https://appwrite.io" target="_blank" rel="noreferrer">
      <img src="/appwrite.svg" class="logo" alt="Appwrite Logo" />
    </a>
  </div>
  <h1>Appwrite Auth Demo</h1>

  <button on:click={loginToggle}>Login</button>
  <button on:click={registerToggle}>Register</button>

  <div class="card">
    <div class="register"><Register /></div>
    <div class="login"><Login /></div>
  </div> 

  <div id="userDetails">
    <p id="userDetailsBox">User Details Not Present</p>
  </div>

  <button id="logout" on:click={logout}>Log Out</button>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .card {
    display: none;
  }

  #userDetails {
    margin: 3vh auto 5vh auto;
    display: block;
    text-align: center;
    border: 2px solid #242424;
    border-radius: 10px;
    max-width: 60vw;
  }

  #userDetailsBox {
    padding: 1vh 1vw;
    margin: 1vh auto;
    font-size: large;
    width: 50vw;
    word-wrap: break-word;
  }

  #logout {
    display: none;
    margin: auto;
  }

  @media (prefers-color-scheme: dark) {
    #userDetails {
      border-color: #f9f9f9;
    }
  }
</style>

<script>
// @ts-nocheck

    import { sdk } from '../appwrite.js';

    async function login() {
        let email = document.querySelector('#login-email').value;
        let password = document.querySelector('#login-password').value;

        let user = await sdk.login(email, password);
        console.log(user);
        document.querySelector('#userDetailsBox').innerHTML = JSON.stringify(user);
    }
</script>

<h2>Login</h2>

<form>
    <input type="text" id="login-email" class="form-field" placeholder="Email Address"><br>
    <input type="password" id="login-password" class="form-field" placeholder="Password"><br>
</form>

<button on:click={login}>Submit</button>
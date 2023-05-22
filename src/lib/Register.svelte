<script>
// @ts-nocheck

    import { sdk } from '../appwrite.js';

    async function register() {
        let name = document.querySelector('#register-name').value;
        let email = document.querySelector('#register-email').value;
        let password = document.querySelector('#register-password').value;

        let user = await sdk.register(email, password, name);
        document.querySelector('#userDetailsBox').innerHTML = JSON.stringify(user);
    }
</script>

<h2>Register</h2>

<form>
    <input type="text" id="register-name" class="form-field" placeholder="Name"><br>
    <input type="text" id="register-email" class="form-field" placeholder="Email Address"><br>
    <input type="password" id="register-password" class="form-field" placeholder="Password"><br>
</form>

<button on:click={register}>Submit</button>
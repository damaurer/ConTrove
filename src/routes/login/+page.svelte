<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	import * as m from '$lib/paraglide/messages.js';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';

	let { form, data }: { form: ActionData, data: PageData } = $props();

	console.log(form, form?.message, data);
</script>

<div class="bh-container">
	<div class="bh-doppler"></div>
	<div class="bh-photon-ring"></div>
	<div class="bh-accretion"></div>
	<div class="bh-backdrop"></div>
	<div class="bh-shadow"></div>
	<div class="login-container">
		<h1>ConTrove</h1>
		<form method="post" action="?/login">
			<p style="color: red">{form?.message ?? ''}</p>
			<label>
				{m.login_username()}
				<Input name="username" />
			</label>
			<label>
				{m.login_password()}
				<Input type="password" name="password" />
			</label>
			{#if data.noUser}
				<Button formaction="?/register" type="submit">{m.login_register()}</Button>
			{:else }
				<Button type="submit">{m.login_login()}</Button>
			{/if}
		</form>
	</div>
</div>


<style>
    :global(body) {
        background-color: black;
    }

    :root {
        --photon: #00e8ff;
        --accretion: #bc00f3;
        --doppler: #5b3cf5;
    }

    .error-container {
        grid-area: bh-shadow;
        color: red;
        z-index: 6;
        align-self: start;
        position: relative;

        p {
            position: absolute;
            top: 10vh;
        }
    }

    .login-container {
        grid-area: bh-shadow;
        z-index: 6;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;

        h1 {
            font-size: 40px;
            margin-bottom: 2rem;
        }

        label {
            display: flex;
            flex-direction: column;
        }

        form {
            display: flex;
            flex-direction: column;

            > * {
                margin-bottom: 1rem;
            }
        }
    }

    @media only screen and (max-width: 767px) {
        .login-container {
            width: 60vh;
            height: 60vh;
        }

        .bh-doppler {
            width: 100vw;
            height: 100vw;
        }

        .bh-photon-ring {
            width: 105vw;
            height: 105vw;
        }

        .bh-accretion {
            width: 100vw;
            height: 100vw;
        }

        .bh-backdrop {
            width: 100vw;
            height: 100%;
        }

        .bh-shadow {
            width: 90vw;
            height: 90vw;
        }
    }

    @media only screen and (min-width: 768px) {
        .bh-doppler {
            width: 60vw;
            height: 60vw;
        }

        .bh-photon-ring {
            width: 75vw;
            height: 75vw;
        }

        .bh-accretion {
            width: 70vw;
            height: 70vw;
        }

        .bh-backdrop {
            width: 100vw;
            height: 100%;
        }

        .bh-shadow {
            width: 60vw;
            height: 60vw;
        }
    }

    @media only screen and (min-width: 1440px) {
        .bh-doppler {
            width: 40vw;
            height: 40vw;
        }

        .bh-photon-ring {
            width: 35vw;
            height: 35vw;
        }

        .bh-accretion {
            width: 30vw;
            height: 30vw;
        }

        .bh-backdrop {
            width: 100vw;
            height: 100%;
        }

        .bh-shadow {
            width: 20vw;
            height: 20vw;
        }
    }

    .bh-container {
        display: grid;
        place-items: center;
        justify-content: center;
        grid-template-areas: "bh-shadow";
        background: linear-gradient(-45deg, black, #20184a, black);
        animation: gradient 10s ease infinite;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        background-size: 400% 400%;
    }


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .bh-doppler {
        /*   background: var(--doppler); */
        grid-area: bh-shadow;
        border-radius: 63% 50% 55% 42% / 67% 47% 65% 47%;
        animation: doppler 9s ease-in-out 0.5s infinite backwards;
        z-index: 2;
        background: linear-gradient(-45deg,
        var(--accretion), #20184a, #1c163b
        );
        opacity: .3;
    }

    @keyframes doppler {
        0% {
            transform: scale(1) rotate(0deg);
            border-radius: 51% 50% 55% 52% / 51% 43% 68% 48%;
        }
        50% {
            transform: scale(3.4) rotate(-160deg);
            /*     border-radius: 63% 50% 55% 42% / 67% 47% 65% 47%; */
            border-radius: 83% 60% 55% 22% / 67% 97% 65% 47%;

        }
        0% {
            transform: scale(1) rotate(0deg);
            border-radius: 51% 50% 55% 52% / 51% 43% 68% 48%;
        }
    }

    .bh-photon-ring {
        border-radius: 100%;
        grid-area: bh-shadow;
        background: var(--photon);
        animation: photon 8s ease-in-out 0.5s infinite alternate;
        z-index: 2;
        /*   opacity: 0.6; */
        box-shadow: inset 50px -10px 0px 4px black;
        border: 60px double #5b3cf5;
        /*   border-right-color: black; */
        box-sizing: content-box;
        padding: 40px;
        background-clip: padding-box;
    }

    @keyframes photon {
        0% {
            transform: rotate(0deg);
            border-radius: 51% 50% 155% 52% / 51% 13% 88% 48%;
            opacity: .2;
        }
        50% {
            transform: rotate(-160deg);
            border-radius: 63% 50% 55% 42% / 67% 27% 65% 47%;
            opacity: .4;
            filter: blur(50px);
        }
        0% {
            transform: rotate(0deg);
            border-radius: 51% 50% 55% 52% / 51% 43% 38% 48%;
            opacity: .6;
        }
    }

    .bh-accretion {
        background: var(--accretion);
        grid-area: bh-shadow;
        border-radius: 63% 50% 55% 42% / 67% 47% 65% 47%;
        /*   animation: accretion 8s ease-in-out 0.5s infinite alternate; */
        /*   animation: accretion 8s ease-in-out 0.5s infinite alternate; */
        animation: accretion 8s ease-in-out 0.5s infinite alternate;
        z-index: 3;

    }

    @keyframes accretion {
        0% {
            transform: scale(1) rotate(0deg);
            border-radius: 51% 50% 55% 52% / 51% 43% 68% 48%;
        }
        50% {
            transform: scale(1.4) rotate(100deg);
            border-radius: 63% 50% 55% 42% / 67% 47% 65% 47%;
            opacity: 0.7;
        }
        0% {
            transform: scale(0.9) rotate(0deg);
            border-radius: 51% 50% 55% 52% / 51% 43% 68% 48%;
        }
    }

    .bh-backdrop {
        grid-area: bh-shadow;
        backdrop-filter: blur(50px);
        z-index: 4;
    }

    .bh-shadow {
        background: black;
        display: flex;
        border-radius: 100%;
        grid-area: bh-shadow;
        /* border-radius: 49% 50% 51% 42% / 67% 47% 65% 47%; */
        animation: shadow 2s ease-in-out 0.5s infinite alternate;
        z-index: 5;
        box-shadow: 2px 3px 10px 1px white, -20px 65px 160px 10px rgba(255, 255, 255, 0.7), -2px -3px 0px 1px rgba(255, 255, 255, 0.2), -4px 14px 30px 3px rgba(255, 255, 255, 0.5);
    }

    @keyframes shadow {
        0% {
            transform: rotate(10deg)
        }
        20% {
            transform: rotate(30deg)
        }
        40% {
            transform: rotate(20deg)
        }
        50% {
            transform: rotate(50deg)
        }
        70% {
            transform: rotate(90deg)
        }
        100% {
            transform: rotate(180deg)
        }
    }
</style>
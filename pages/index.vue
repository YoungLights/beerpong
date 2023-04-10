<script setup>
	import { useModalStore } from '~/stores/modal'
	const modalStore = useModalStore

	definePageMeta({
		layout: 'login'
	})
</script>

<template>
	<section class="login">
		<div class="login-header">
			<h4>Welcome to</h4>
			<img src="/logo/beerpong-logo.png" alt="Beerpong Tournaments • Logo">
			<div class="login-btns">
				<NuxtLink to="/dashboard" class="login-btn"><i class="fa-solid fa-circle-plus"></i>Login</NuxtLink>
				<NuxtLink to="/register" class="login-btn"><i class="fa-solid fa-right-to-bracket"></i>Register</NuxtLink>
			</div>
		</div>
		<img class="login-bg" src="/background/index-bg.webp">
	</section>
</template>
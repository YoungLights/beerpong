<script setup>
	const games = []
</script>

<template>
	<section class="content">
		<div class="frame">
			<div class="content-header">
				<h2>Games</h2>
				<div @click="modalStore.toggle" class="nav-link-new"><i class="fa-solid fa-circle-plus"></i><span>New Game</span></div>
			</div>
			<div class="list">
				<div class="list-item" v-for="game in games" :key="game.id">
					<div class="list-item-details">
						<p>{{game.name}}</p>
						<p>{{game.date}}</p>
					</div>
					<div class="list-item-actions">
						<span><i class="fa-solid fa-layer-group"></i></span>	
						<span><i class="fa-solid fa-pencil"></i></span>	
						<span><i class="fa-solid fa-trash-can"></i></span>	
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
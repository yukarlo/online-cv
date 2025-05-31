<script setup lang="ts">
</script>

<template>
	<main>
		<h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
			Projects
		</h2>
		<div class="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
			<UCard>
				<div class="bg-muted rounded-lg aspect-video overflow-hidden">
					<NuxtImg
						src="https://placehold.co/400"
						alt="Online CV"
						class="w-full h-full object-cover hover:scale-105 transition-all"
					/>
				</div>
				<div>
					<h3 class="mt-2 font-bold text-xl">
						Karlo's Online CV
					</h3>
					<p class="text-muted-foreground">
						An online CV.
					</p>
					<div class="flex flex-wrap gap-2 mt-4">
						<UBadge
							class="p-2 rounded-full"
							variant="outline"
						>
							Nuxt.js
						</UBadge>
						<UBadge
							class="p-2 rounded-full"
							variant="outline"
						>
							Vue.js
						</UBadge>
						<UBadge
							class="p-2 rounded-full"
							variant="outline"
						>
							Tailwind CSS
						</UBadge>
					</div>
					<div class="flex gap-2 mt-2">
						<UButton
							to="https://github.com/yukarlo/online-cv"
							target="_blank"
							rel="noopener noreferrer"
							variant="outline"
							color="neutral"
							class="p-2 rounded-full"
						>
							<UIcon
								size="20"
								name="mdi:github"
							/>
							<span>GitHub</span>
						</UButton>
						<UButton
							to="https://www.karloyu.dev"
							target="_blank"
							rel="noopener noreferrer"
							variant="outline"
							color="neutral"
							class="p-2 rounded-full"
						>
							<UIcon
								size="20"
								name="mdi:launch"
							/>
							<span>Demo</span>
						</UButton>
					</div>
				</div>
			</UCard>

			<UCard>
				<div class="bg-muted rounded-lg aspect-video overflow-hidden">
					<NuxtImg
						src="https://camo.githubusercontent.com/5438dd9291fc08e720f290ffe40c02c223b305027bd806b29c3a33fb7d9d5b58/68747470733a2f2f692e696d6775722e636f6d2f726c79663938302e706e67"
						alt="Covid live tracker"
						class="w-full h-full object-cover hover:scale-105 transition-all"
					/>
				</div>
				<h3 class="mt-2 font-bold text-xl">
					Covid Live Tracker
				</h3>
				<p class="text-muted-foreground">
					A covid live tracker that shows the latest numbers of covid cases around the globe.
				</p>
				<div class="flex flex-wrap gap-2 mt-4">
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Android
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Kotlin
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Coroutines & Flow
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Dagger
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Retrofit
					</UBadge>
				</div>
				<div class="flex gap-2 mt-2">
					<UButton
						to="https://github.com/yukarlo/cvd-live-tracker"
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						color="neutral"
						class="p-2 rounded-full"
					>
						<UIcon
							size="20"
							name="mdi:github"
						/>
						<span>GitHub</span>
					</UButton>
				</div>
			</UCard>

			<UCard>
				<div class="bg-muted rounded-lg aspect-video overflow-hidden">
					<NuxtImg
						src="https://placehold.co/400"
						alt="Animet list"
						class="w-full h-full object-cover hover:scale-105 transition-all"
					/>
				</div>
				<h3 class="mt-2 font-bold text-xl">
					Anime List
				</h3>
				<p class="text-muted-foreground">
					A simple app that lets you disocver anime. The app doesn't have streaming capabilities.
				</p>
				<div class="flex flex-wrap gap-2 mt-4">
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Android
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Kotlin
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Coroutines & Flow
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						Dagger Hilt
					</UBadge>
					<UBadge
						class="p-2 rounded-full"
						variant="outline"
					>
						GraphQL
					</UBadge>
				</div>
				<div class="flex gap-2 mt-2">
					<UButton
						to="https://github.com/yukarlo/anime-list"
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						color="neutral"
						class="p-2 rounded-full"
					>
						<UIcon
							size="20"
							name="mdi:github"
						/>
						<span>GitHub</span>
					</UButton>
				</div>
			</UCard>
		</div>
	</main>
</template>

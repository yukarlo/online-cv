<script setup lang="ts">
</script>

<template>
	<main>
		<h2 class="mb-8 tracking-tighter text-2xl font-bold md:text-3xl">
			Projects
		</h2>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<UCard>
				<div class="aspect-video overflow-hidden rounded-lg bg-muted">
					<NuxtImg
						src="https://placehold.co/400"
						alt="Online CV"
						class="h-full w-full object-cover transition-all hover:scale-105"
					/>
				</div>
				<div>
					<h3 class="mt-2 text-xl font-bold">
						Karlo's Online CV
					</h3>
					<p class="text-muted-foreground">
						An online CV.
					</p>
					<div class="mt-4 flex flex-wrap gap-2">
						<UBadge
							class="rounded-full p-2"
							variant="outline"
						>
							Nuxt.js
						</UBadge>
						<UBadge
							class="rounded-full p-2"
							variant="outline"
						>
							Vue.js
						</UBadge>
						<UBadge
							class="rounded-full p-2"
							variant="outline"
						>
							Tailwind CSS
						</UBadge>
					</div>
					<div class="mt-2 flex gap-2">
						<UButton
							to="https://github.com/yukarlo/online-cv"
							target="_blank"
							rel="noopener noreferrer"
							variant="outline"
							color="neutral"
							class="rounded-full p-2"
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
							class="rounded-full p-2"
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
				<div class="aspect-video overflow-hidden rounded-lg bg-muted">
					<NuxtImg
						src="https://camo.githubusercontent.com/5438dd9291fc08e720f290ffe40c02c223b305027bd806b29c3a33fb7d9d5b58/68747470733a2f2f692e696d6775722e636f6d2f726c79663938302e706e67"
						alt="Covid live tracker"
						class="h-full w-full object-cover transition-all hover:scale-105"
					/>
				</div>
				<h3 class="mt-2 text-xl font-bold">
					Covid Live Tracker
				</h3>
				<p class="text-muted-foreground">
					A covid live tracker that shows the latest numbers of covid cases around the globe.
				</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Android
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Kotlin
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Coroutines & Flow
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Dagger
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Retrofit
					</UBadge>
				</div>
				<div class="mt-2 flex gap-2">
					<UButton
						to="https://github.com/yukarlo/cvd-live-tracker"
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						color="neutral"
						class="rounded-full p-2"
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
				<div class="aspect-video overflow-hidden rounded-lg bg-muted">
					<NuxtImg
						src="https://placehold.co/400"
						alt="Animet list"
						class="h-full w-full object-cover transition-all hover:scale-105"
					/>
				</div>
				<h3 class="mt-2 text-xl font-bold">
					Anime List
				</h3>
				<p class="text-muted-foreground">
					A simple app that lets you disocver anime. The app doesn't have streaming capabilities.
				</p>
				<div class="mt-4 flex flex-wrap gap-2">
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Android
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Kotlin
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Coroutines & Flow
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						Dagger Hilt
					</UBadge>
					<UBadge
						class="rounded-full p-2"
						variant="outline"
					>
						GraphQL
					</UBadge>
				</div>
				<div class="mt-2 flex gap-2">
					<UButton
						to="https://github.com/yukarlo/anime-list"
						target="_blank"
						rel="noopener noreferrer"
						variant="outline"
						color="neutral"
						class="rounded-full p-2"
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

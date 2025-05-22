<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui"

const items: TabsItem[] = [
	{ label: "Technical", slot: "technical" as const },
	{ label: "Soft Skills", slot: "soft" as const },
	{ label: "Tools & Platforms", slot: "tools" as const },
]

const skills = {
	mobile: ["Android", "Kotlin", "Coroutines", "Jetpack Compose", "Dagger", "Koin", "Room", "SQLDelight", "MVVM", "Compose Multiplatform"],
	frontend: ["JavaScript", "TypeScript", "Vue.js", "Nuxt.js", "HTML5", "CSS3", "Tailwind CSS", "Pinia"],
	backend: ["REST APIs", "SQL", "MongoDB", "Google Cloud Run Functions", "Firebase", "GraphQL"],
	other: ["Testing (Jest, Cypress)", "Responsive Design", "Performance Optimization", "SEO", "Accessibility"],
	ai: ["Gemini API", "Vercel AI SDK", "DialogFlow CX"],
	soft: ["Project Management", "Communication", "Problem Solving", "Time Management", "Mentoring", "Agile Methodologies", "Technical Writing", "Presentation Skills"],
	tools: ["Git", "GitHub", "VS Code / Cursor", "Android Studio", "Vercel", "Figma", "JIRA", "Slack"],
}
</script>

<template>
	<main>
		<h2 class="mb-8 tracking-tighter text-2xl font-bold md:text-3xl">
			Skills
		</h2>
		<div class="w-full">
			<div class="mb-6">
				<UTabs
					size="lg"
					:items="items"
					variant="pill"
					color="neutral"
					class="gap-4 w-full"
					:ui="{ trigger: 'grow' }"
				>
					<template #technical>
						<h3 class="text-lg font-medium">
							Mobile
						</h3>
						<div class="flex flex-wrap gap-2 mt-2 mb-4">
							<UBadge
								v-for="skill in skills.mobile"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
						<h3 class="text-lg font-medium">
							Frontend
						</h3>
						<div class="flex flex-wrap gap-2 mt-2 mb-4">
							<UBadge
								v-for="skill in skills.frontend"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
						<h3 class="text-lg font-medium">
							Backend
						</h3>
						<div class="flex flex-wrap gap-2 mt-2 mb-4">
							<UBadge
								v-for="skill in skills.backend"
								:key="skill"
								size="xl"
								color="neutral"
								class="rounded-full px-4"
								:label="skill"
							/>
						</div>
						<h3 class="text-lg font-medium">
							Generative AI
						</h3>
						<div class="flex flex-wrap gap-2 mt-2 mb-4">
							<UBadge
								v-for="skill in skills.ai"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
						<h3 class="text-lg font-medium">
							Other
						</h3>
						<div class="flex flex-wrap gap-2 mt-2 mb-4">
							<UBadge
								v-for="skill in skills.other"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
					</template>
					<template #soft>
						<div class="flex flex-wrap gap-2">
							<UBadge
								v-for="skill in skills.soft"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
					</template>
					<template #tools>
						<div class="flex flex-wrap gap-2">
							<UBadge
								v-for="skill in skills.tools"
								:key="skill"
								size="xl"
								class="rounded-full px-4"
								color="neutral"
								:label="skill"
							/>
						</div>
					</template>
				</UTabs>
			</div>
		</div>
	</main>
</template>

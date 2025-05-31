<script setup lang="ts">
const open = ref(false)

defineShortcuts({
	o: () => open.value = !open.value,
})

const navigationItems = [
	{ label: "About", icon: "material-symbols:person-outline", to: "#about" },
	{ label: "Experience", icon: "mingcute:briefcase-line", to: "#experience" },
	{ label: "Skills", icon: "heroicons:academic-cap", to: "#skills" },
	{ label: "Projects", icon: "i-heroicons-code-bracket-square", to: "#projects" },
	{ label: "Education", icon: "i-heroicons-book-open", to: "#education" },
	{ label: "Contact", icon: "i-heroicons-envelope", to: "#contact" },
	{ label: "Resume", icon: "qlementine-icons:resume-16", to: "" },
]
</script>

<template>
	<main class="top-0 z-10 sticky w-full">
		<header class="hidden md:block bg-[var(--ui-bg)]/95 supports-[backdrop-filter]:bg-[var(--ui-bg)]/60 backdrop-blur border-b">
			<div class="flex mx-auto xs:px-[var(--px-fluid-sm)] sm:px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md) max-w-[1450px] h-14">
				<div class="flex flex-1 mr-4">
					<ULink
						to="#hero"
						class="flex items-center space-x-2 mr-6"
					>
						<span class="font-bold">Karlo</span>
					</ULink>
					<nav class="flex items-center space-x-6 font-medium text-sm">
						<ULink
							to="#about"
							class="hover:text-foreground/80 transition-colors"
						>About
						</ULink>
						<ULink
							to="#experience"
							class="hover:text-foreground/80 transition-colors"
						>Experience
						</ULink>
						<ULink
							to="#skills"
							class="hover:text-foreground/80 transition-colors"
						>Skills
						</ULink>
						<ULink
							to="#projects"
							class="hover:text-foreground/80 transition-colors"
						>Projects
						</ULink>
						<ULink
							to="#education"
							class="hover:text-foreground/80 transition-colors"
						>Education
						</ULink>
						<ULink
							to="#contact"
							class="hover:text-foreground/80 transition-colors"
						>Contact
						</ULink>
					</nav>
				</div>
				<div class="flex justify-between items-center space-x-2">
					<UButton
						label="Resu1"
						color="neutral"
						variant="outline"
					>
						<UIcon
							name="material-symbols:cloud-download-rounded"
							size="20"
						/>
						<span>Resume</span>
					</UButton>
				</div>
			</div>
		</header>
		<header class="md:hidden block w-full">
			<UCollapsible
				v-model:open="open"
				class="flex flex-col w-full"
			>
				<UButton
					label="On this page"
					color="neutral"
					size="xl"
					variant="solid"
					class="group rounded-none"
					trailing-icon="i-lucide-chevron-down"
					:ui="{
						base: 'justify-between',
						trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200',
					}"
				/>

				<template #content>
					<div class="bg-white/95 supports-[backdrop-filter]:bg-white/60 backdrop-blur border-t">
						<nav class="flex flex-col">
							<ULink
								v-for="item in navigationItems"
								:key="item.to"
								size="lg"
								:href="item.to"
								class="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-md"
							>
								<UIcon
									:name="item.icon"
									class="w-5 h-5"
								/>
								<span>{{ item.label }}</span>
							</ULink>
						</nav>
					</div>
				</template>
			</UCollapsible>
		</header>
	</main>
</template>

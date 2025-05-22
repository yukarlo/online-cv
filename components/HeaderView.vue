<script setup lang="ts">
const open = ref(false)

defineShortcuts({
	o: () => open.value = !open.value,
})

const navigationItems = [
	{ label: "About", icon: "material-symbols:person-outline", to: "#about" },
	{ label: "Experience", icon: "mingcute:briefcase-line", to: "#experience" },
	{ label: "Skills", icon: "heroicons:academic-cap", to: "#skills" },
	{ label: "Education", icon: "i-heroicons-book-open", to: "#education" },
	{ label: "Projects", icon: "i-heroicons-code-bracket-square", to: "#projects" },
	{ label: "Contact", icon: "i-heroicons-envelope", to: "#contact" },
	{ label: "Resume", icon: "qlementine-icons:resume-16", to: "" },
]
</script>

<template>
	<main class="sticky top-0 z-10 w-full">
		<header class="hidden md:block border-b bg-[var(--ui-bg)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--ui-bg)]/60">
			<div class="flex h-14 max-w-[1450px] mx-auto xs:px-[var(--px-fluid-sm)] sm:px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)">
				<div class="mr-4 flex flex-1">
					<ULink
						to="#hero"
						class="mr-6 flex items-center space-x-2"
					>
						<span class="font-bold">Karlo</span>
					</ULink>
					<nav class="flex items-center space-x-6 text-sm font-medium">
						<ULink
							to="#about"
							class="transition-colors hover:text-foreground/80"
						>About
						</ULink>
						<ULink
							to="#experience"
							class="transition-colors hover:text-foreground/80"
						>Experience
						</ULink>
						<ULink
							to="#skills"
							class="transition-colors hover:text-foreground/80"
						>Skills
						</ULink>
						<ULink
							to="#education"
							class="transition-colors hover:text-foreground/80"
						>Education
						</ULink>
						<ULink
							to="#projects"
							class="transition-colors hover:text-foreground/80"
						>Projects
						</ULink>
						<ULink
							to="#contact"
							class="transition-colors hover:text-foreground/80"
						>Contact
						</ULink>
					</nav>
				</div>
				<div class="flex items-center justify-between space-x-2">
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
		<header class="block md:hidden w-full">
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
					<div class=" bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t ">
						<nav class="flex flex-col">
							<ULink
								v-for="item in navigationItems"
								:key="item.to"
								size="lg"
								:href="item.to"
								class="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
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

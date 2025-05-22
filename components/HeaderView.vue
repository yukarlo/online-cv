<script setup lang="ts">
</script>

<template>
	<main class="sticky top-0 z-10 w-full">
		<header class="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
	</main>
</template>
